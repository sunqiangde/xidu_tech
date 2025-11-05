# 喜都科技（吉林省）有限公司官网

这是一个使用 React 和 Vite 构建的企业官网项目。

## 部署到 GitHub Pages

该项目已配置为可以部署到 GitHub Pages。要启用部署，请按照以下步骤操作：

### 1. 更新 vite.config.ts 中的 base 路径

如果您的仓库名称不是根域名路径，则需要修改 [vite.config.ts](file:///Users/sunqiang/Z_xd/xidu_tech/vite.config.ts) 文件中的 base 字段：

```ts
base: '/your-repository-name/'
```

例如，如果您的 GitHub 用户名是 `username`，仓库名是 `my-website`，则应设置为：

```ts
base: '/my-website/'
```

### 2. 在 GitHub 仓库中启用 GitHub Pages

1. 在 GitHub 上进入您的仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中点击 "Pages"
4. 在 "Build and deployment" 部分，选择 "GitHub Actions"

### 3. 推送代码触发部署

当您推送到 `main` 或 `master` 分支时，GitHub Actions 将会自动构建并部署您的网站到 GitHub Pages。

## 本地开发

安装依赖：
```bash
npm install
```

启动开发服务器：
```bash
npm run dev
```

构建生产版本：
```bash
npm run build
```

构建用于 GitHub Pages 的版本：
```bash
npm run build:github
```

## 环境变量配置

项目支持通过环境变量进行配置，特别是针对不同的部署环境：

### 环境变量文件

项目提供了以下环境变量文件：
- `.env.example` - 环境变量模板文件，复制为 `.env.local` 并根据需要修改
- `.env.github` - GitHub Pages 部署环境变量
- `.env.development` - 开发环境变量（可选）
- `.env.production` - 生产环境变量（可选）

### GitHub Pages 部署

项目已预配置了 `.env.github` 文件，用于 GitHub Pages 部署。如果您的仓库名称不是根域名路径，请修改 `.env.github` 文件中的 `VITE_BASE_PATH` 变量：

```
VITE_BASE_PATH=/your-repository-name/
```

### 自定义环境变量

您可以通过创建 `.env.[mode]` 文件来为不同环境配置不同的变量，例如：
- `.env.development` - 开发环境
- `.env.production` - 生产环境
- `.env.github` - GitHub Pages 部署环境

然后使用相应的模式运行构建命令：
```bash
vite build --mode [mode]
```

#### 在代码中使用环境变量

在您的代码中，可以通过 `import.meta.env` 访问环境变量：

```javascript
// 获取当前模式
console.log(import.meta.env.MODE);

// 获取自定义环境变量
console.log(import.meta.env.VITE_GITHUB_PAGES);

// 获取在 vite.config.ts 中定义的全局常量
console.log(__APP_ENV__);
console.log(__GITHUB_PAGES__);
```

更多示例请参考 `src/utils/env-example.ts` 文件。