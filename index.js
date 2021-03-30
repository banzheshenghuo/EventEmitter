function getTypeDescription(value) {
  return Object.prototype.toString.call(value);
}

function isValidEeventName(eventName) {
  if (
    getTypeDescription(eventName).indexOf('String') < 0 ||
    getTypeDescription(eventName).indexOf('Symbol') < 0
  ) {
    throw Error('eventName 必须为字符串或Symbol类型');
  }
}

function isValidListener(listener) {
  if (getTypeDescription(listener).indexOf('Function') < 0) {
    throw Error('listener 必须为函数');
  }
}

function indexOf(listeners, fn, isStrict) {
  let index = -1;
  for (let i = 0; i < listeners.length; i++) {
    const isEqual = isStrict ? listeners[i].toString() === fn.toString() : listeners[i] === fn;

    if (isEqual) {
      index = i;
      break;
    }
  }

  return index;
}

class EventEmitter {
  _events = {};

  getListeners(eventName) {
    return this._events[eventName].slice() || [];
  }

  on(eventName, fn, isStrict = false) {
    isValidEeventName(eventName);
    isValidListener(fn);

    const listeners = this.getListeners(eventName);

    if (listeners.length && indexOf(listeners, fn, isStrict) >= 0) {
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

  off(eventName, fn, isStrict = false) {
    isValidEeventName(eventName);

    const listeners = this.getListeners(eventName);

    const index = indexOf(listeners, fn, isStrict);

    if (index < 0) {
      console.warn('未找到匹配的listener');
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

const _EventEmitter = new EventEmitter();

export { _EventEmitter as EventEmitter };
