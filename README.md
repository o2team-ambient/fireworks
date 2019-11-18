## 使用方法

```
jnpm i @o2team/ambient-xxx --save
```

```javascript
import ATAmbient from '@o2team/ambient-fireworks'

ATAmbient({
  particleNumber: 2,
  size: 100,
  speed: 6,
  textures: [
    {name: '颜色1', value: '#6ae5ab'},
    {name: '颜色2', value: '#88e3b2'},
    {name: '颜色3', value: '#36b89b'},
    {name: '颜色4', value: '#7bd7ec'},
    {name: '颜色5', value: '#66cbe1'}
  ]
})
```

## 配置说明

| 字段 | 类型 | 可选值 | 效果 |
|-|-|-|-|
| particleNumber | `number` | - | 粒子数 |
| size | `number` | - | 粒子尺寸 |
| speed | `number` | - | 粒子上升速度 |
| textures | `array<object>` | - | 粒子颜色 |

## 预览地址

https://o2team-ambient.github.io/fireworks/dist/?controller=1

## 项目结构

```
├── config                  - 编译配置
│   ├── base.conf.js
│   └── custom.conf.js
├── info.json               - 组件信息
└── src
    ├── css
    │   ├── base.scss
    │   └── package.scss
    ├── index.ejs
    ├── index.js            - 主入口文件
    ├── rollup_index.js     - npm 包主入口文件
    ├── config.js           - 控制板参数配置文件（单独打包）
    ├── control.js          - 控制板入口文件（单独打包）
    └── js
        ├── ambient.js      - 动效初始化入口
        ├── controlinit.js  - 控制板自定义代码
        └── utils
            ├── const.js    - 字段常数
            ├── raf.js
            └── util.js
```

> 开发完毕之后，请新建 gh-pages 分支并 push --set-upstream，以获得线上 demo 页。每次更新后，测试完成即可合并至 gh-pages 发布。