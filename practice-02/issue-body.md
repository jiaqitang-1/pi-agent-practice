## 基本信息

- 姓名拼音：tangjiaqi
- GitHub 登录名：jiaqitang-1

## 作业链接

- 个人实践课2报告：https://github.com/jiaqitang-1/pi-agent-practice/blob/main/practice-02/report.md
- 小组代码仓库：https://github.com/Learning-Rate-LR/pi-hunnu-2026
- 实际 clone 地址：https://github.com/Learning-Rate-LR/pi-hunnu-2026.git
- 源码完整提交编号：1e0fe20497ede31346957636d1ee38a2e61f69d0

## 报告内容

- 源码获取：小组组织仓库截图、本人 clone 后的目录/远端/分支/提交编号截图，以及源码目录截图。
- 模块分析：实际根构建顺序、模块功能/构建产物/直接内部依赖及源码依据。
- 关系图：PNG 和 SVG，以及可编辑 Mermaid 图源；箭头方向为“使用方 → 被依赖方”，开发依赖使用虚线区分。
- 三个问题：构建读取的配置、构建顺序与依赖的关系、coding-agent → agent → ai → telemetry 的分工。
- 重点分析模块：ai、agent、coding-agent。

## 版本差异

本提交下没有独立的 schema、codemode、mcp、env 目录，已在报告中说明；补充分析实际参与构建的 session-backends/sqlite-node、protocol、client、server。evals 不在根 build 调用链中。构建行为依据脚本和源码分析，没有把未执行的构建写成成功结果。
