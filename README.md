# 运行项目
clone项目到本地，进入项目文件夹，安装依赖
```javascript
git clone https://github.com/Mr0mshao/v-douban-webapp
cd v-douban-webapp
npm install
```
然后运行项目
```javascript
npm run dev
```

最后打开浏览器，输入`localhost:8080`即可访问.

# UI组件库
* 使用的vux2 组件库。(https://github.com/airyland/vux)。

# 路由
应用包括下面6个路由
* `/` 首页，展现正在上映榜单每页12条
* `/top` 榜单列表页面;
* `/coming` 即将上映列表页面;
* `/rank` 北美排行列表页面;
* `/m/:id` 电影详情页面；
* `/search` 电影搜索列表页面。

# 第三方库
* HTTP库采用了[axios](https://github.com/mzabriskie/axios)。
* Loading显示采用了[nprogress](https://github.com/rstacruz/nprogress/)。

# 豆瓣API
该应用使用了下面6个api：
* `/v2/movie/in_theaters` 正在上映；
* `/v2/movie/coming_soon` 即将上映；
* `/v2/movie/us_box` 北美排行；
* `/v2/movie/top250` top250排行；
* `/v2/movie/search?q={text}` 电影搜索api；
* `/v2/movie/subject/:id` 单个电影条目信息。

>更多关于豆瓣的api可以前往[豆瓣api官网](https://developers.douban.com/wiki/?title=guide)查看。

需要注意的是，由于豆瓣api的跨域问题，并不能直接通过ajax请求访问。不过vue-cli提供了代理的配置。
我们需要在`/config/index.js`中配置代理：
```javascript
dev: {
  env: require('./dev.env'),
  port: 8880,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api': {
      target: 'http://api.douban.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  cssSourceMap: false
}
```
在`proxyTable`这个属性中，配置target属性为我们要代理的目标地址。这里我们写成`http://api.douban.com/v2`，这样我们就可以在应用中调用`/api/movie/in_theaters`来访问`http://api.douban.com/v2/movie/in_theaters`，从而解决跨域的问题。
>关于vue-cli更多关于跨域的设置可以看[官网文档](http://vuejs-templates.github.io/webpack/)
