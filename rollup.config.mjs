import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import obfuscator from 'rollup-plugin-obfuscator';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    minifyInternalExports: true,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    obfuscator({
      global: true
    })
  ]
};
