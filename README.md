webpack基础demo，可用于构建webpack项目

包含了

1 样式加载器css，sass，less

2 图片加载器

3 webpack-dev-server本地开发热更新

4 babel配置：

（1）babel：解决不支持语法转义es6转义为es5

cnpm i --save-dev babel-loader @babel/core @babel/preset-env

（2）babel-polyfill：低版本浏览器中的不支持API，例如findIndex

cnpm i --save-dev babel-polyfill

（3）babel-plugin-transform-runtime: 解决打包体积过大的问题

cnpm i --save-dev @babel/plugin-transform-runtime

cnpm i --save @babel/runtime


在打包的过程中，babel会在包里提供一些工具函数，而这些工具函数可能会重复的出现在多个模块。这样会导致打包的体积过大，所以babel提供了babel-transform-runtime解决这个体积过大的问题

使用：

1 下载包解压，进入目录

2 安装 npm i 或 cnpm i

3 运行 npm run dev 启动后访问https://127.0.0.4:8088/

4 打包 npm run build

