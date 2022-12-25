# xblock-mainui

## 快速开始
1. 安装npm依赖
```shell
npm install
```
2. run起来（指定在8080端口运行）!
```shell
vite --port 8080
```

## 配置项
参考`/src/confs.js`：
```js
export default {
    backendsURL: window.location.origin // 部署时用这个
    // backendsURL: "http://<后端ip>:<后端port>"    // 本地测试时用这个，ip和port问后端同学要鸭
}
```