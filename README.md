# NivoWork 反馈系统

基于 Next.js 的用户反馈收集系统，支持将反馈数据发送到飞书表格。

## 功能特性

- 精美的用户界面，基于提供的 React 组件设计
- 表单验证和用户友好的错误提示
- 支持飞书 Webhook 和飞书表格两种数据存储方式
- 响应式设计，支持桌面和移动端
- TypeScript 类型安全
- Tailwind CSS 样式

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **UI 组件**: React + Tailwind CSS
- **图标库**: lucide-react
- **语言**: TypeScript
- **部署平台**: Vercel

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 文件为 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，填入你的飞书配置：

```env
FEISHU_WEBHOOK_URL=your_feishu_webhook_url
FEISHU_APP_ID=your_feishu_app_id
FEISHU_APP_SECRET=your_feishu_app_secret
FEISHU_SPREADSHEET_TOKEN=your_spreadsheet_token
FEISHU_SHEET_ID=your_sheet_id
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

## 飞书配置

### 方式一：使用飞书 Webhook（推荐）

1. 在飞书中创建一个群聊
2. 添加自定义机器人，获取 Webhook URL
3. 将 Webhook URL 配置到 `FEISHU_WEBHOOK_URL` 环境变量

### 方式二：使用飞书表格

1. 在飞书中创建一个多维表格
2. 创建以下字段：
   - 提交时间（文本）
   - 称呼（文本）
   - 联系方式（文本）
   - 问题环节（文本）
   - 反馈详情（文本）
   - 改进建议（文本）
   - 同意授权（文本）
3. 获取表格的 `app_token` 和 `table_id`
4. 在飞书开放平台创建应用，获取 `app_id` 和 `app_secret`
5. 配置环境变量：
   - `FEISHU_APP_ID`: 飞书应用的 App ID
   - `FEISHU_APP_SECRET`: 飞书应用的 App Secret
   - `FEISHU_SPREADSHEET_TOKEN`: 多维表格的 app_token
   - `FEISHU_SHEET_ID`: 表格的 table_id

## 部署到 Vercel

### 1. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. 在 Vercel 中导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 导入你的 GitHub 仓库
4. 配置环境变量（在 Environment Variables 部分）：
   - `FEISHU_WEBHOOK_URL`
   - `FEISHU_APP_ID`
   - `FEISHU_APP_SECRET`
   - `FEISHU_SPREADSHEET_TOKEN`
   - `FEISHU_SHEET_ID`
5. 点击 "Deploy"

### 3. 配置域名（可选）

在 Vercel 项目设置中，可以配置自定义域名。

## 项目结构

```
nivowork-feedback/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── feedback/
│   │   │       └── route.ts      # API 路由，处理表单提交
│   │   ├── layout.tsx             # 根布局
│   │   ├── page.tsx               # 主页面（反馈表单）
│   │   └── globals.css            # 全局样式
│   └── lib/
│       └── feishu.ts              # 飞书表格操作工具
├── public/                        # 静态资源
├── .env.local                     # 本地环境变量（不提交）
├── .env.example                   # 环境变量示例
├── vercel.json                    # Vercel 配置
├── next.config.ts                 # Next.js 配置
├── tailwind.config.ts             # Tailwind CSS 配置
└── tsconfig.json                  # TypeScript 配置
```

## API 接口

### POST /api/feedback

提交用户反馈

**请求体**:
```json
{
  "nickname": "张三",
  "contact": "zhangsan@example.com",
  "step": "上传录音/导入会议",
  "details": "上传录音时出现错误",
  "suggestion": "希望增加批量上传功能",
  "consent": true
}
```

**响应**:
```json
{
  "success": true,
  "message": "反馈提交成功"
}
```

## 注意事项

1. 环境变量包含敏感信息，请勿提交到版本控制系统
2. 飞书 API 有调用频率限制，请注意合理使用
3. 在生产环境中，建议添加更多的错误处理和日志记录
4. 可以根据需要添加用户认证功能

## 许可证

MIT