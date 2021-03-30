import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
