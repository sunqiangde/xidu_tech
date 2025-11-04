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