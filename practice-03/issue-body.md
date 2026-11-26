## 基本信息

- 姓名拼音：tangjiaqi
- GitHub 登录名：jiaqitang-1

## 作业链接

- 实践课3报告：https://github.com/jiaqitang-1/pi-agent-practice/blob/main/practice-03/report.md
- 小组代码仓库：https://github.com/Learning-Rate-LR/pi-hunnu-2026
- 实际 clone 地址：https://github.com/Learning-Rate-LR/pi-hunnu-2026.git
- 源码基础提交：1e0fe20497ede31346957636d1ee38a2e61f69d0
- 本地兼容修复：https://github.com/jiaqitang-1/pi-agent-practice/blob/main/practice-03/patches/opencode-go-google-api.patch

## 完成内容

- 记录 Node.js、npm、Git 版本及源码仓库、分支和提交编号。
- 阅读 engines、workspaces、scripts、锁文件与 CLI 入口配置。
- 执行 npm install --ignore-scripts，记录退出码 0、依赖文件检查，以及实际警告和 13 个审计漏洞。
- 完成 strict 在线模型目录生成；修复 opencode-go 对 Google API 的兼容后，通过根 build:offline 完成全部构建，退出码 0。
- 检查 dist/bundle/cli.js 存在，编译入口与 pi-test.bat 源码入口均输出 0.86.1。
- 启动本地源码版本并完成实际 DeepSeek 对话，提供 S1～S6 截图及日志。
- 记录网络超时、连接断开、NODE_OPTIONS 路径转义和模型接口类型不匹配的处理过程，附源码补丁与辅助脚本。

## 补充说明

实际运行的源码状态为基础提交加上述本地补丁。额外 npm run check 仍有测试引用旧模型的类型错误，退出码 2；报告没有将构建、对话成功写成全部检查通过。认证文件和密钥未上传。
