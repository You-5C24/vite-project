import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// autoprefixer 主要用于自动为不同的目标浏览器添加样式前缀，解决浏览器的兼容性问题
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";
// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录位置
  // root: path.join(__dirname, "src"),
  plugins: [vue(), windi()],
  css: {
    // postcss 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      ],
    },
    // css module 配置
    modules: {
      // 一般通过 generateScopedName 属性来对生成的类名进行自定义
      // name 表示文件名，local 表示类名
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
    // 预处理器配置
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
