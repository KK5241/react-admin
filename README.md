# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### 项目结构

src/
├── assets/ # 静态资源
├── components/ # 通用组件（如 Button, Table, Modal）
├── layouts/ # 页面布局（如 MainLayout, AuthLayout）
├── pages/ # 页面模块（如 Dashboard, Users, Login）
├── router/ # 路由配置 + 守卫
├── services/ # API 接口封装
├── stores/ # Zustand 或 Redux 的状态管理
├── hooks/ # 自定义 Hook（如 useAuth, usePermission）
├── utils/ # 工具方法（如 formatDate、request 封装）
├── config/ # 配置文件（如权限配置、菜单配置）
└── main.tsx # 项目入口

### 提交规范

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
