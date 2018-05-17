# vue-playground

> A Vue.js project

动态配置 router，利用 `router.addRoutes()`。

根据自定义的路由：

```json
[{
  path: "/dev",
  name: "开发者",
  component: "Developer",
  children: [
    {
      path: "fresh-fish-dev",
      name: "萌新",
      component: "FreshFishDeveloper"
    }]
}]
```

来解析为 `addRoutes` 需要的路由：

```js
// 关键部分
{
    path: $path,
    name: $name
    component (resolve) {
        require(['./' + $component + '.vue'], resolve)
    }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
