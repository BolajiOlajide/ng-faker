import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const config = [
  {
    input: './lib/index.ts',
    output: [
      {
        file: 'dist/ng-faker.mjs',
        format: 'esm',
        sourcemap: true,
        name: 'ng-faker',
      },
      {
        file: './dist/ng-faker.js',
        format: 'umd',
        sourcemap: true,
        name: 'ng-faker',
      },
    ],
    external: ['zod'],
    plugins: [typescript()],
  },
  {
    input: './lib/index.ts',
    output: {
      file: 'dist/ng-faker.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
]

export default config
