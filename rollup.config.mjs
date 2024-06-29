import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    minifyInternalExports: true,
  },
  plugins: [
    nodeResolve({
      exportConditions: ['node'],
    }),
    commonjs(),
    esbuild({
      target: 'node18',
      minify: true
    })
  ]
};
