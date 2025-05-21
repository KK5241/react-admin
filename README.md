# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 特性
- 最新技术栈： react@19、 shadcn/ui、 tailwind@4、 msw@2、 typescript
- 规范性： eslint、prettier、husky



## 提交规范

| 类型       | 含义                   | 示例                |
| ---------- | ---------------------- | ------------------- |
| `feat`     | 新功能                 | 新增注册接口        |
| `fix`      | 修复 bug               | 修复密码验证逻辑    |
| `docs`     | 仅文档修改             | 修改 README.md      |
| `style`    | 格式（无功能、无修复） | 调整缩进、空格      |
| `refactor` | 重构（功能不变）       | 重构用户登录逻辑    |
| `perf`     | 性能优化               | 提升加载速度        |
| `test`     | 增加或修改测试         | 添加登录测试用例    |
| `build`    | 构建相关的修改         | 修改打包配置        |
| `ci`       | 持续集成相关           | 修改 GitHub Actions |
| `chore`    | 杂项（构建、辅助工具） | 更新依赖            |
| `revert`   | 回退提交               | 回退至 123abc 提交  |
