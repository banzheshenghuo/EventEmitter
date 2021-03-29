function getTypeStr(value) {
  return Object.prototype.toString.call(value);
}

function isValidEeventName(eventName) {
  if (getTypeStr(eventName).indexOf('String') < 0 || getTypeStr(eventName).indexOf('Symbol') < 0) {
    throw Error('eventName 必须为字符串或Symbol类型');
  }
}

function isValidListener(listener) {
  if (getTypeStr(listener).indexOf('Function') < 0) {
    throw Error('listener 必须为函数');
  }
}

function indexOf(listeners, fn) {
  for (let i = 0; i < listeners.length; i++) {
    const isEqual = _.toString(listeners[i]) === _.toString(fn);
    if (isEqual) {
      return i;
    }
  }

  return -1;
}

class EventEmitter {
  _events = {};

  getListeners(eventName: TEventName) {
    return this._events[eventName].slice() || [];
  }

  on(eventName: TEventName, fn) {
    isValidEeventName(eventName);
    isValidListener(fn);

    const listeners = this.getListeners(eventName);

    if (listeners.length && indexOf(listeners, fn) >= 0) {
      console.warn('不能添加重复的listener');
      return;
    }

    listeners.push(fn);

    this._events[eventName] = listeners;
  }

  emit(eventName, data) {
    isValidEeventName(eventName);

    const listeners = this.getListeners(eventName);

    if (listeners.length === 0) return;

    for (let i = 0; i < listeners.length; i++) {
      listeners[i](data);
    }
  }

  off(eventName, fn) {
    isValidEeventName(eventName);

    const listeners = this.getListeners(eventName);

    const index = indexOf(listeners, fn);

    if (index < 0) {
      console.error('未找到匹配的listener');
      return;
    }

    listeners.splice(index, 1);

    this._events[eventName] = listeners;
  }

  alloff(eventName) {
    isValidEeventName(eventName);

    this._events[eventName] = [];
  }
}

export default new EventEmitter();
