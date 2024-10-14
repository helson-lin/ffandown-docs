# 快速开始

## v5版本

V5.0以上的版本功能优化：

1. 优化了界面
2. 提供了任务管理功能
3. 支持`user-agent`自定义
4. 支持自定义转码格式和转码预设
5. 重构了整体代码逻辑，拆分项目。

目前处于测试版本，为了体验新功能可以安装。

由于项目内置了`sqlite3`, pkg打包无法自动带入.node原生的依赖，导致github actions打包的release存在缺少`.node`文件的问题。当前正在想办法解决。


## 必看

**建议使用v4.2.1以上的releases版本, 较低版本，`config.yml`配置可能不兼容**


- [更新日志](changelog.md)


## releases安装

releases 安装只需要在下载对应平台的可执行文件即可：[点我下载 ⬇️](https://github.com/helson-lin/ffandown/releases)

![](https://pic.kblue.site/picgo/202304282130514.png)

----
### 注意事项

windows平台不过多解释，直接双击运行即可

linux平台用户下载完毕，首先要给**文件授权**：`chmod +x fffandown-linux`, 然后执行即可`./ffandown-linux`

macos平台用户和linux一样需要授权之后，再执行文件，不多赘述。

## docker 安装

终端执行以下命令：

```bash
docker run -d -p 8081:8081 -v /home/media:/app/media  -v /Uses/helson/config:/app/config -v /Uses/helson/logs:/app/logs h55205l/ffandown:latest
```

### 命令说明

默认启动端口为`8081`, 对应配置内的`port`字段

`/app/media`为容器内下载媒体的目录

`/app/config`为容器内配置文件目录

`/app/logs`为容器内日志文件目录，可以根据实际需求是否映射


::: tip
arm的用户请使用`arm64`版本：`h55205l/ffandown:arm64`
:::

## 群晖安装

1. 拉取镜像：h55205l/ffandown
    
   ![](https://pic.kblue.site/picgo/202304282148675.png) 

2. 新增容器
    
   网络：可以使用桥接或者直通网络

   端口：本地端口看自己需求内部默认是8081

   ![](https://pic.kblue.site/picgo/202304282153719.png)

   文件夹映射：

    媒体文件夹内部`/app/media`

    内部日志文件夹：`/app/logs`

    配置文件夹：`/app/logs`

    前端静态文件：`/app/public` (可以不配置，无法启动时才需要)

    ffmpeg依赖文件夹：`/app/lib`  (可以不配置，无法启动时才需要)


   ![](https://pic.kblue.site/picgo/202304282157118.png)

   ![](https://pic.kblue.site/picgo/202304282200652.png)
   
::: warning
  注意需要给你映射的文件夹授权，在群晖内配置一下
:::


## 配置文件说明

如果没有config.yml配置文件会采用默认配置，并自动创建配置文件（运行目录config文件夹下面）。

- `port`: 服务监听的端口
- `downloadDir`: 下载目录，相对于执行文件位置，或者使用绝对路径（在地址前面加载@）
- `webhooks`: webhook通知地址，可以使用钉钉或者bark之类软件,`$TEXT`为变量：下载文件的名称（注意变量是纯大写的，仅支持bark）！！！请大家手动修改地址
- `webhookType`: bark | 'feishu' ｜ 'dingding'
- `thread`: 是否开启express 多线程服务（默认不开启）
- `downloadThread`: 是否开启`ffmpeg`多线程转码
- `useFFmpegLib`: 是否自动内置ffmpeg，启动服务会自动去下载对应平台的ffmpeg，不启动默认采用本地环境的

## 常规使用

服务启动成功之后，直接在浏览器打开`localhost:8081`就可以看到下载页面

![](https://pic.kblue.site/picgo/202304282209818.png)


## Api使用

创建下载任务

接口地址：`http://localhost:8081/down`

请求方式：`post`

请求头： `Content-Type`: `application/json`

请求参数: 

| 参数名称        |      描述      |  必填 | 版本要求 |
| ----------- | :---------- | :-----------: | :-----: |
| name      | 下载任务名称 | :negative_squared_cross_mark: | all |
| url     |    视频地址, 多个地址使用逗号（英文）分隔    |  :white_check_mark: | all |
| useragent |   用户代理    |    :negative_squared_cross_mark: | v5.0^ |
| preset |   预设:'ultrafast', 'superfast', 'veryfast', 'faster', 'fast', 'medium', 'slow', 'slower', 'veryslow'    |    :negative_squared_cross_mark: |  v5.0^ |
| outputformat |   文件格式：'mp4','mov', 'flv', 'avi'    |    :negative_squared_cross_mark: |  v5.0^ |



:::code-group
```js [v5.0以下版本]

{
  name: "videoname",
  url: "http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8",
  useragent: "",  // 不支持 // [!code --]
  preset: "", // 不支持 // [!code --]
  outputformat: "", // 不支持 // [!code --]
}
```

```js [v5.0 以上版本]
{
  name: "videoname",
  url: "http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8",
  useragent: "", // 用户代理
  preset: "", // 预设 
  outputformat: "" // 文件格式：'mp4', 'mov', 'flv', 'avi'
}
```
:::

## 配置暴力猴插件使用

### 暴力猴安装

首先确保你已经安装了暴力猴插件, 这里不赘述如何安装
你可以在以下地方获取：

[极简插件](https://chrome.zzzmh.cn/info/jinjaccalgkegednnccohejagnlnfdag)

[Github](https://github.com/violentmonkey/violentmonkey/releases)

---

### 暴力猴插件安装

插件地址：[greasyfork](https://greasyfork.org/zh-CN/scripts/465336-ffandown/)

这里建议将脚本内`m3u8-parser`和`notyf`依赖地址替换为国内的。

由于官方的限制，不能使用国内的地址，否则无法颁布，这个默认采用jsdelivr的

请切换下面的 tab为‘国内七牛云’并复制替换脚本的地址。

:::code-group

```js [jsdelivr]
// @require https://cdn.jsdelivr.net/npm/m3u8-parser@4.7.1/dist/m3u8-parser.min.js
// @require https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js
```

```js [国内七牛云]
// @require https://file.helson-lin.cn/notyf/m3u8-parser.min.js
// @require https://file.helson-lin.cn/notyf/notyf.min.js
```
:::

---
#### 使用

<!-- <video src="https://pic.kblue.site/picgo/REC-20230430110326.mp4" style="height: 300px;" controls></video> -->

如果插件解析到 m3u8 的视频地址，那么在页面的右小角会出现“小猫咪”图标，点击可以查看解析到的资源和设置服务配置。

服务器配置支持：自定义接口地址和请求方式以及请求参数。


如果使用 ffandown 来下载配置如下：

接口地址：`http://hostname:port/down`

请求方式 `POST`,

请求参数：`{ "name": "$name", "url": "$url"}`




:::tip
m3u8批量下载器的参数配置如下：`{"type": 2, "data": "$name,$url"}`
:::




##### 关于请求参数说明：

请求参数支持自定义配置，脚本内置两个两个变量：

`$name`解析到的视频名称, 
`$url`解析到的 m3u8 的地址

```js
{
  "name": "$name", 
  "url": "$url"
}
```

## 配置快捷指令使用

[点我下载快捷指令](https://www.icloud.com/shortcuts/b185d44fb6574db29c79cb193e5bb079)

使用前记得先编辑指令，修改服务器的地址IP和端口

<img src="https://pic.kblue.site/picgo/IMG_D37B0D511136-1.jpeg" style="height: 600px;margin: 0 auto;">