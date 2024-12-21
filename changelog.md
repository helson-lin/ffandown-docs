# Changelog

建议使用5.0 以上的版本

## v5.1.0-beta
1. 🐞 fix: 终止直播失败问题
2. ✨ feat: 优化多链接同时下载问题
3. ✨ feat: 优化消息通知逻辑
4. ✨ feat: 支持测试消息通知
5. 🐞 fix: 修复debug配置失效问题
6. 🐞 fix: 修复时间戳配置失效问题

## v5.0.4-beta
1. 🦄 refactor: Refactor project, split the project into three parts
2. ✨ feat: Support useragent custom
3. ✨ feat: New Task Management Interface 
4. ✨ feat: Support task progress viewing; Delete; Pause; recovery

## v4.2.1
1. 🐞 fix: Fixed m3u8 download 403 error
2. 🎈perf: change ffmpeg binary download site to oss

## v4.2
1. 🎈perf: Added log splitting
2. 🐞 fix: Fixed dark theme font color issue

## v4.1

1. 🎈perf: Optimized the problem of ffmpeg download process timeout (death) and failure to clear the process
2. ✨feat: Added support for screen recording: rtsmp/rtmp, automatically terminated after the live broadcast ends

## v3.0

1. ✨ feat: Added multi-threaded transcoding,
2. ✨ feat: Supported DingTalk message notification,
3. ✨ feat: Added automatic generation of configuration files,
4. 🎈 perf: Optimized Docker build method.
5. 🐞 fix: Fixed the failure issue of bark notification
6. 🐞 fix: Modified the config configuration directory.


## v2.0

基础版：支持m3u8视频下载和通过Bark和Feishu进行通知，但存在漏洞。
此版本需要下载`config.yml`文件和相应平台的可执行文件，并将它们放置在同一目录中。不建议使用此版本。