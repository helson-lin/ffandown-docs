# 快速开始

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

   文件夹映射：媒体文件夹内部`/app/media`, 内部日志文件夹：`/app/logs`, 配置文件夹：`/app/logs`

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

```js

{
  name: "videoname",
  url: "http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8"
}
```

## 配置暴力猴插件使用

### 暴力猴安装

首先确保你已经安装了暴力猴插件, 这里不赘述如何安装
你可以在以下地方获取：

[极简插件](https://chrome.zzzmh.cn/info/jinjaccalgkegednnccohejagnlnfdag)

[Github](https://github.com/violentmonkey/violentmonkey/releases)

---

### 暴力猴插件安装

目前greasyfork无法上传插件分享，所以需要自行获取脚本手动安装。

---
#### 复制脚本内容
点击这个地址[ffandown-violentmonkey-script](https://raw.githubusercontent.com/helson-lin/ffandown-violentmonkey-script/main/index.js)，然后复制内容

---

#### 创建脚本
    
   点击插件的图标，然后添加+按钮   
   ![](https://pic.kblue.site/picgo/202304301054801.png) 

---
#### 粘贴并保存

粘贴复制的内容，然后修改`FFANDOWN_URL`参数为你的服务部署地址：`http://192.168.31.20:8081`

  ![](https://pic.kblue.site/picgo/202304301100893.png)


---
#### 使用

<video src="https://pic.kblue.site/picgo/REC-20230430110326.mp4" style="height: 300px;" controls></video>

## 配置快捷指令使用

[点我下载快捷指令](https://www.icloud.com/shortcuts/b185d44fb6574db29c79cb193e5bb079)

使用前记得先编辑指令，修改服务器的地址IP和端口

<img src="https://pic.kblue.site/picgo/IMG_D37B0D511136-1.jpeg" style="height: 600px;margin: 0 auto;">