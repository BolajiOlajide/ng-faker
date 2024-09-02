import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
});
