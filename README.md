# 实践课1：Pi Agent 安装与使用

本报告记录在 Windows PowerShell 中使用 Pi Agent 的实践过程。S7 和 S8 为选做部分。

## S1 本地安装并启动 Pi

在 Windows PowerShell 中从 pi-test 启动 Pi，终端显示版本和工作目录。

![S1 操作截图 1](S1-1.png)

## S2 配置模型并完成对话

配置 DeepSeek 后发送「你好」，模型返回了回复。

![S2 操作截图 1](S2-1.png)

## S3 切换模型与思考级别

从 deepseek-v4-pro 切换到 deepseek-flash，并将思考级别调整为 low。

![S3 操作截图 1](S3-1.png)

![S3 操作截图 2](S3-2.png)

## S4 引用代码文件

引用 hello.py，模型解释 add 函数并给出运行结果 5。

![S4 操作截图 1](S4-1.png)

## S5 粘贴小图片并测试

使用 deepseek-flash 识别小图，回复指出蓝色正方形和黑色数字 7。现有截图记录了识图结果，剪贴板粘贴过程未清楚显示。

![S5 操作截图 1](S5-1.png)

原始测试图

![200×200 测试图](test-image.png)

## S6 安装并调用插件

安装 pi-web-access，重启后确认加载。用网页抓取工具访问 example.com，返回标题 Example Domain。

![S6 操作截图 1](S6-1.png)

![S6 操作截图 2](S6-2.png)

![S6 操作截图 3](S6-3.png)

![S6 操作截图 4](S6-4.png)

## S7 安装 PPT Skill

将 PPT Skill 安装到 pi-test/.pi/skills/pptx。源提交为 2c5958ecac7cee2b583967a2c4981d0f4a75c579。

![S7 操作截图 1](S7-1.png)

## S8 发现并调用 PPT Skill

重启后在 Skills 中确认 pptx，并用 /skill:pptx 查询用途与加载路径。两页演示文稿已用 WPS 打开检查。

![S8 操作截图 1](S8-1.png)

![S8 操作截图 2](S8-2.png)

![S8 操作截图 3](S8-3.png)

## 选做成果

[两页 PPT 演示文稿](pi-practice.pptx)
