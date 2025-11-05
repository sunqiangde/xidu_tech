// 环境变量使用示例
// 这个文件展示了如何在项目中使用环境变量

// 在构建时被替换的环境变量
console.log('当前环境:', __APP_ENV__);
console.log('是否为 GitHub Pages 部署:', __GITHUB_PAGES__);

// Vite 暴露的环境变量
console.log('当前模式:', import.meta.env.MODE);
console.log('是否为生产环境:', import.meta.env.PROD);
console.log('是否为开发环境:', import.meta.env.DEV);

// 自定义环境变量
console.log('GitHub Pages 标志:', import.meta.env.VITE_GITHUB_PAGES);
console.log('基础路径:', import.meta.env.VITE_BASE_PATH);

// 使用环境变量的示例函数
export function getApiUrl() {
  // 根据环境变量返回不同的 API URL
  if (import.meta.env.VITE_GITHUB_PAGES === 'true') {
    // GitHub Pages 部署时的 API URL
    return 'https://api.github-pages.example.com';
  } else if (import.meta.env.PROD) {
    // 生产环境的 API URL
    return 'https://api.production.example.com';
  } else {
    // 开发环境的 API URL
    return 'http://localhost:3001/api';
  }
}

// 获取基础路径
export function getBasePath() {
  return import.meta.env.VITE_BASE_PATH || '/';
}