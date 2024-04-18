/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';


export default defineConfig({
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (
            asset.name &&
            /\.(gif|jpe?g|tiff?|png|svg|bmp)$/i.test(asset.name)
          ) {
            return 'assets/img/[name]-[hash].[extname]';
          } else if (
            asset.name &&
            /\.(woff|eot|woff2|ttf)$/i.test(asset.name)
          ) {
            return 'assets/fonts/[name].[extname]';
          } else {
            return 'assets/[name]-[hash].[extname]';
          }
        }
      },
    },
    emptyOutDir: true,
    target: 'modules',
    minify: 'terser',
    terserOptions: {
      ecma: 5,
      module: true,
      toplevel: true,
    },
  },
  server: {
    port: 3000,
    open: 'http://localhost:3000',
  },
  plugins: [
    svelte(),
    splitVendorChunkPlugin(),
  ],
  css: {
    modules: {
      generateScopedName: '[folder]__[local]_[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@store': path.resolve(__dirname, './src/shared/store'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@styles': path.resolve(__dirname, './src/shared/styles'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js'
  }
});
