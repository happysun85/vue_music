# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 我自己的备忘录

> 一些技巧
1. 需要双向绑定的放在data里，不用的可以找地方统一创建，提高性能。
2. 父级组件通过子组件的 ref属性，也就是在父级组件使用  this.$refs.child.这里可调用子组件的方法
3. keep-alive另一个疑问，在第一个标签页里时activated首次不执行，但是第二个标签页里首次也执行

> 使用的一些插件
1. better-scroll 完成轮播图以及局部拖拽
2. fastclick 解决移动端click反应慢. 因为该插件拦截click事件，如某个元素需要在该元素上添加class="needsclick"
asiox 访问接口
3. 自制的loading组件，感觉loading-container放外面不好。整合到loading组件里，传入一个布尔值来判断是否显示，这样做是否更好？
4. vue-lazyload图片懒加载，减少首屏加载速度，还有造成不必要的HTTP请求和流量
```javascript
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
// 然后在标签里用 v-lazy="item.imgurl"
```
