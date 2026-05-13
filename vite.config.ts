import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },

      optipng: {
        optimizationLevel: 7,
      },

      mozjpeg: {
        quality: 80,
        progressive: false,
      },

      pngquant: {
        quality: [0.75, 0.9],
        speed: 3,
      },

      webp: {
        quality: 80,
      },

      avif: {
        quality: 60,
      },

      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
  ],
});
