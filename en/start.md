# Quick start

## V5 Version

Function optimization for versions above V5.0:
1. Optimized the interface
2. Provides task management functionality
3. Support customization of 'user agent'
4. Support custom transcoding formats and transcoding presets
5. Refactored the overall code logic and split the project.

At present, it is in the testing version and can be installed to experience the new features.

Due to the built-in 'sqlite3' in the project, pkg packaging cannot automatically bring in the. node native dependencies, resulting in a missing '. node' file in the release of GitHub Actions packaging. We are currently working on finding a solution

## Must see

**It is recommended to use releases version v4.2.1 or above. For lower versions, the `config.yml` configuration may not be compatible**

- [Change log](changelog.md)


## releases installation

To install releases, you only need to download the executable file of the corresponding platform: [Click here to download ⬇️](https://github.com/helson-lin/ffandown/releases)

![](https://pic.kblue.site/picgo/202304282130514.png)

----
### Precautions

Windows platform does not require too much explanation, just double-click to run it

After Linux platform users have downloaded, they must first authorize the **file**: `chmod +x fffandown-linux`, and then execute `./ffandown-linux`

Users of the macos platform need to be authorized before executing the file just like Linux, so I won’t go into details.

## docker installation

Execute the following commands in the terminal:

```bash
docker run -d -p 8081:8081 -v /home/media:/app/media -v /Uses/helson/config:/app/config -v /Uses/helson/logs:/app/logs h55205l/ffandown: latest
```

### Command description

The default startup port is `8081`, corresponding to the `port` field in the configuration

`/app/media` is the directory for downloading media in the container

`/app/config` is the configuration file directory within the container

`/app/logs` is the log file directory in the container, which can be mapped according to actual needs.


::: tip
Arm users please use the `arm64` version: `h55205l/ffandown:arm64`
:::

## Synology installation

1. Pull the image: h55205l/ffandown
    
    ![](https://pic.kblue.site/picgo/202304282148675.png)

2. Add new container
    
    Network: You can use bridged or pass-through networks

    Port: The local port depends on your own needs. The internal default is 8081.

    ![](https://pic.kblue.site/picgo/202304282153719.png)

    Folder mapping: media folder internal `/app/media`, internal log folder: `/app/logs`, configuration folder: `/app/logs`

    ![](https://pic.kblue.site/picgo/202304282157118.png)

    ![](https://pic.kblue.site/picgo/202304282200652.png)

::: warning
   Note that you need to authorize the mapped folder and configure it in Synology.
:::

## Configuration file description

If there is no config.yml configuration file, the default configuration will be used and the configuration file will be automatically created (under the config folder in the running directory).

- `port`: The port the service listens on
- `downloadDir`: download directory, relative to the location of the executable file, or use an absolute path (load @ in front of the address)
- `webhooks`: webhook notification address, you can use software such as DingTalk or bark. `$TEXT` is a variable: the name of the downloaded file (note that the variable is in uppercase only and only supports bark)! ! ! Please modify the address manually
- `webhookType`: bark | 'feishu' | 'dingding'
- `thread`: whether to enable express multi-thread service (not enabled by default)
- `downloadThread`: Whether to enable `ffmpeg` multi-thread transcoding
- `useFFmpegLib`: Whether to automatically build in ffmpeg. When the service is started, it will automatically download ffmpeg for the corresponding platform. If it is not started, the local environment will be used by default.

## General use

After the service is started successfully, you can see the download page by opening `localhost:8081` directly in the browser.

![](https://pic.kblue.site/picgo/202304282209818.png)


## API usage

Create download task

Interface address: `http://localhost:8081/down`

Request method: `post`

Request header: `Content-Type`: `application/json`

Request parameters:

```js

{
   name: "videoname",
   url: "http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8"
}
```

## Configure the violent monkey plug-in to use

### Violent Monkey Installation

First, make sure you have installed the Violent Monkey plug-in. I won’t go into details here on how to install it.
You can get it at:

[Minimalist plug-in](https://chrome.zzzmh.cn/info/jinjaccalgkegednnccohejagnlnfdag)

[Github](https://github.com/violentmonkey/violentmonkey/releases)

---

### Violent Monkey plug-in installation

Currently, greasyfork cannot upload plug-ins for sharing, so you need to obtain the script and install it manually.

---
#### Copy script content
Click this address [ffandown-violentmonkey-script](https://raw.githubusercontent.com/helson-lin/ffandown-violentmonkey-script/main/index.js), and then copy the content

---

#### Create script
    
    Click on the plugin’s icon and add the + button
    ![](https://pic.kblue.site/picgo/202304301054801.png)

---
#### Paste and save

Paste the copied content, and then modify the `FFANDOWN_URL` parameter to your service deployment address: `http://192.168.31.20:8081`

   ![](https://pic.kblue.site/picgo/202304301100893.png)


---
#### use

<video src="https://pic.kblue.site/picgo/REC-20230430110326.mp4" style="height: 300px;" controls></video>

## Configure shortcut command usage

[Click here to download shortcuts](https://www.icloud.com/shortcuts/b185d44fb6574db29c79cb193e5bb079)

Remember to edit the command before use and modify the server's address IP and port.

<img src="https://pic.kblue.site/picgo/IMG_D37B0D511136-1.jpeg" style="height: 600px;margin: 0 auto;">