import async from 'rollup-plugin-async'
import buble from '@rollup/plugin-buble'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
    interop: false
  },
  external: ['util'],
  plugins: [
    async(),
    buble({
      target: { node: 4 }
    })
  ]
}
