# Personal Academic Homepage

Next.js · React · TypeScript · Tailwind CSS · Lucide

## 本地运行

```sh
npm install
npm run dev
```

访问 http://127.0.0.1:3000 。

## 修改资料

所有个人信息统一维护于 `src/data/profile.ts`，`profiles.zh` 与 `profiles.en` 分别保存中英文资料，共享联系方式放在 `shared`。已填入山东大学、学院及实验室、2025级硕士身份、研究及学习兴趣、邮箱、全国密码数学挑战赛特等奖。未提供的 CV、论文、笔记和 Highlights 留空并自动隐藏。`awards` 保存奖项，不添加未提供的年份。

默认显示中文，顶部“中 / EN”切换整页语言，选择保存在浏览器中。`?lang=zh` 和 `?lang=en` 可用于分享指定语言的链接。界面文案集中在 `src/data/translations.ts`。

替换 `public/profile.jpg` 即可更换照片。网页 URL 是 `/profile.jpg`，不是 `/public/profile.jpg`。图片加载失败时显示中性头像。当前图片由原始照片转为 JPEG，原文件保留。

`bio` 支持多段文字。`highlights`、`notes`、`publications` 条目格式是 `{ title, description, url? }`。CV 放入 public 文件夹并设置 `cvUrl: '/cv.pdf'`。本地路径会自动加 GitHub Pages 前缀。外部链接请填写完整 HTTPS 地址。

## 构建与部署

```sh
npm run typecheck
npm run build
```

构建生成 `out/` 静态目录。

- Vercel：导入仓库，使用 Next.js 默认构建命令。
- GitHub Pages：仓库 Settings → Pages → Source 选择 GitHub Actions；推送到 main 后附带工作流会构建并发布。项目仓库自动设置路径前缀，`用户名.github.io` 仓库使用根路径。
- 手动部署到子路径：构建前设置 `NEXT_PUBLIC_BASE_PATH=/仓库名`。

导航支持锚点、当前章节指示与移动端菜单。页面提供键盘焦点、跳过导航、减少动态效果支持。字体使用本地系统字体，不依赖外部字体服务。
