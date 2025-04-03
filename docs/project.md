# V5版本优化方案

## 项目解构

![](https://file.helson-lin.cn/picgoffandown-ino.png)


将原本的单个项目拆分为：`oimi-helper`、`ffandown-front` `ffandown`
1. `oimi-helper`负责`ffmpeg`的管理以及下载任务的管理
2. `ffandown-front`为纯前端项目
3. `ffandown`：负责后端服务的提供

::: tip
> V5版本分支：`refactor/devorce`
:::

## 项目构建

### `pkg`打包支持多平台：
	
```js
"pkg": {
	"scripts": [
		"index.js",
		"bootstrap.js",
		"./bin/*.js",
		"./bin/utils/*.js"
	],
	"assets": [
		"./public/**/*",
		"./public/*",
		"./runtime/**/*.js",
		"./runtime/**/**/*.js",
		"./runtime/*.js",
		"node_modules/figlet/fonts/ANSI Shadow.flf"
	],
	"targets": [
		"node14-macos-arm64",
		"node14-macos-x64",
		"node14-windows-x64",
		"node14-linuxstatic-x64",
		"node14-linux-arm64",
		"node14-alpine-x64",
		"node14-alpine-arm64"
	],
	"outputPath": "dist"
},	
```


### sqlite3打包📦

由于sqlite3打包需要依赖原生的.node文件,  打包多平台的时缺少依赖，所以将node缓存在本地package文件夹内，执行打包命令时，移动到`node_modules`文件夹对应目录下进行打包。目前依旧存在问题，sqlite3自动索引到的依赖不存在。

解决方案：

1. 打包的时候不管依赖，打包完毕，直接把依赖丢在执行文件同级的目录内。（目前docker内的方案）
2. 修改sqlite3模块的依赖查找方法，待测试。 


### docker构建

`docker`的构建是手动构建推送到docker hub的，有打算通过github actions进行自动化构建，目前由于SQLITE3存在依赖问题导致打包的Docker无法启动。

