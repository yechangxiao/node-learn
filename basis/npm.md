## NPM是与nodejs一起安装的包管理工具，常见的使用场景有以下
- ### 从npm服务器下载别人编写的第三方包到本地使用
- ### 从npm服务器下载并安装别人编写的命令行程序到本地使用
- ### 将自己编写的包或者命令行程序上传到npm服务器供别人使用

## 如何下载第三方包
```js
// 默认下载最新版本
npm install vue
// 如果需要下载指定版本，在包名后面加上@<version>
npm install vue@2.16.14
// 如果使用的第三方包比较多，可以在package.json中声明第三方包，然后通过npm install批量下载
```

## 如何安装命令行程序
### 从npm服务器上下载安装一个命令行程序与第三方包类似，例如下载vue-cli，我们只需要执行npm install vue-cli =g
### 参数中的-g表示全局安装，vue-cli会安装到默认位置，并且npm会自动创建好Linux系统下所需要的软文件或windows系统下需要的.cmd文件。
```js
- /usr/local/               # Linux系统下
  - lib/node_modules/
    + vue-cli/
    ...
  - bin/
    vue-cli
    ...
  ...

- %APPDATA%\npm\            # Windows系统下
  - node_modules\
    + node-echo\
    ...
  vue-cli.cmd
  ...
```

## 如何发布代码
### 首先需要注册一个账号，终端下运行npm adduser，之后按照提示。接着我们需要编辑package.json，加入必须的字段。使用npm publish发布
```json
{
  "name": "node-echo",                  # 包名，在NPM服务器上须要保持唯一
  "version": "1.0.0",                   # 当前版本号
  "dependencies": {                     # 三方包依赖，需要指定包名和版本号
    "argv": "0.0.2"
  },
  "main": "./lib/echo.js",              # 入口模块位置
  "bin" : {
    "node-echo": "./bin/node-echo"      # 命令行程序名和主模块位置
  }
}

```