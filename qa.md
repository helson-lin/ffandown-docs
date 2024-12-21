---
title: 常见问题
commentid: qa-comment
---

# 常见问题

## 容器无法正常启动

<iframe src="https://app.warp.dev/block/embed/fQgjUg1S7pP6KGTaqXZmOo"  title="embedded warp block" style="width: 100%;  height: 450px;border:0; overflow:hidden;" allow="clipboard-read; clipboard-write"></iframe>

出现类似下面问题，是由于前端静态文件存在 github 导致下载失败，（国内环境问题）
```shell
TypeError: Cannot read properties of undefined (reading '0')
    at autoUpdateFrontEnd (/snapshot/ffandown/bin/utils/version.js:94:42)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async initializeFrontEnd (/snapshot/ffandown/bin/utils/version.js:110:18)
    at async Server.<anonymous> (/snapshot/ffandown/bin/app.js:260:13)
```

解决：手动[下载👇](https://github.com/helson-lin/ffandown-front)前端文件，丢入 public 文件夹内解压即可（确保 index.html 存在 public 一级目录下面），重启服务即可。
docker 容器需要将/app/public 目录映射出来，手动上传到映射的文件夹内。


##  无法正常访问 github.com 导致容器启动失败
  
项目前端的依赖和 ffmpeg 都是从 `github.com` 同步下载的，如果网络环境不行，会出现无法正常启动服务的情况。

请手动按照下面的步骤处理：

  1. 映射出来两个目录 public: 对应容器的`/app/public`（前端文件存放）, lib: 对应容器的`/app/lib`(ffmpeg依赖文件存放).
  2. 下载对应系统的 ffmpeg 依赖文件和前端依赖：[ffmpeg](https://github.com/ffbinaries/ffbinaries-prebuilt/releases)、[前端](https://github.com/helson-lin/ffandown-front)
  3. 将下载 ffmpeg 压缩包解压，之后将可执行文件上传到 lib 目录下面，前端的项目也是一样的操作，将解压后的所有文件上传到 public 目录下。
  4. 重新启动服务即可。


## 下载失败：日志出现`input/output error`

这种情况，首先确定一下，下载目录是否有权限（如果之前有下载成功的情况那肯定有权限）

下载目录有写入权限，那么就要考虑下载地址是否能够正常访问了：

linux用户可以`wget 地址url`看一下是否正确返回了`m3u8`的信息

windows用户可以使用postman等之类软件测试一下是否正常解析。

---
如果以上都正常，可以去github提交issue

::: tip
1. 确保下载目录有写入权限
2. 确保下载地址可以正常访问
:::

## istoreOS 等openwrt平台问题

目前手上没有对应的设备无法测试，不能确保都可以正常使用。

存在无法使用情况：

1. 测试docker是否正常使用
2. 测试release是否正常使用

::: warning
用户反馈：istoreOS存在无法使用情况
:::