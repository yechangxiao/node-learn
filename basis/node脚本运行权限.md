### 在Linux下，一些操作需要root权限，比如监听80或者443端口，可以使用如下方式

```js
// 方法一：为需要的js脚本提供root权限
$ sudo node server.js
```

```js
// 方法二：使用chmod +s让nodejs总是以root权限运行，但这样所有脚本都有root权限，不太安全
$ sudo chown root /usr/local/bin/node
$ sudo chmod +s /usr/local/bin/node
```
