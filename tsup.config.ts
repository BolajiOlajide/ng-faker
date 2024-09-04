import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'ng-faker',
  entryPoints: ['lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  minify: true,
  minifyWhitespace: true,
});
