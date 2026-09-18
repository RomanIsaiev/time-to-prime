// vite.config.ts
import { defineConfig } from "file:///F:/work-websites/time-to-prime/node_modules/vite/dist/node/index.js";
import viteImagemin from "file:///F:/work-websites/time-to-prime/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80,
        progressive: false
      },
      pngquant: {
        quality: [0.75, 0.9],
        speed: 3
      },
      webp: {
        quality: 80
      },
      avif: {
        quality: 60
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx3b3JrLXdlYnNpdGVzXFxcXHRpbWUtdG8tcHJpbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHdvcmstd2Vic2l0ZXNcXFxcdGltZS10by1wcmltZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovd29yay13ZWJzaXRlcy90aW1lLXRvLXByaW1lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2aXRlSW1hZ2VtaW4oe1xyXG4gICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgb3B0aXBuZzoge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICAgIHByb2dyZXNzaXZlOiBmYWxzZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgcXVhbGl0eTogWzAuNzUsIDAuOV0sXHJcbiAgICAgICAgc3BlZWQ6IDMsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB3ZWJwOiB7XHJcbiAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhdmlmOiB7XHJcbiAgICAgICAgcXVhbGl0eTogNjAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUixTQUFTLG9CQUFvQjtBQUMvUyxPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUVBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFFQSxVQUFVO0FBQUEsUUFDUixTQUFTLENBQUMsTUFBTSxHQUFHO0FBQUEsUUFDbkIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUVBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFFQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BRUEsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
