# web-tools

### 功能
选中双击 ⬆️ 键 或 ⬇️ 键 则自动返回页面顶部或底部

### 使用
- 方式一： 通过 chrome 插件自动安装
- 方式二： script 脚本引用 ./dist/boundle.js

### 测试
``````
npm install
npm run dev
// or npm run dist
``````


### chrome 插件启动原理
启动入口 background.js
- 启动一（默认）:
`````
# chrome 浏览器更新监听
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // code
})
`````
- 启动二（手动）:
``````
# chrome 浏览器点击插件事件
chrome.browserAction.onClicked.addListener((tabId, changeInfo, tab) => {
    // code
});
``````
