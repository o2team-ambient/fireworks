import './utils/raf'
import {
  O2_AMBIENT_MAIN,
  O2_AMBIENT_INIT
} from './utils/const'
import Main from './main'

// 判断是否可点，被点中则隐藏
let wrapper = document.querySelector('.o2team_ambient_main')
if (!wrapper) {
  wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'o2team_ambient_main')
  wrapper.setAttribute('id', 'o2team_ambient_main')
  document.body.insertAdjacentElement('beforeend', wrapper)
}
wrapper.addEventListener('click', () => {
  wrapper.style.display = 'none'
})

// 初始化函数
export default function initAmbient () {
  // let xxx = new XXX()
  // 主函数暴露，用于联动配置，！！！必需暴露！！！
  // 动效类中必须带 reset 方法，并有重置动画的功能，传参为 window[O2_AMBIENT_CONFIG] 配置
  // window[O2_AMBIENT_MAIN] = xxx
  let main = new Main()
  // 主函数暴露
  window[O2_AMBIENT_MAIN] = main
}

// 初始化函数
window[O2_AMBIENT_INIT] = initAmbient
