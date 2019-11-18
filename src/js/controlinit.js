/*
 * @desc 控制面板初始化代码
 * 注：控制面板自定义代码
 */

import dat from '@o2team/ambient-dat.gui'
import {
  O2_AMBIENT_MAIN,
  O2_AMBIENT_CONFIG
} from './utils/const'
import Controller from './utils/controller'
import {
  getParameterByName
} from './utils/util'

/* eslint-disable no-unused-vars */
const isLoop = getParameterByName('loop')

let controlInit = () => {
  // 非必要配置字段（仅用于展示，如背景颜色、启动/暂停）
  class OtherConfig {
    constructor() {
      this.message = '烟花'
      this.backgroundColor = '#070809'
      this.bool = false
      this.play = () => {
        if (!window[O2_AMBIENT_MAIN] || !window[O2_AMBIENT_MAIN].toggle || typeof window[O2_AMBIENT_MAIN].toggle !== 'function') return
        window[O2_AMBIENT_MAIN].toggle()
      }
    }
  }

  // 主控制面板
  class Control extends Controller {
    constructor() {
      super()
      this.otherConfig = new OtherConfig()
      this.initBaseGUI()
      this.initTextureGUI()
      this.isShowController && !this.isAmbientPlat && this.setBackgroundColor(this.otherConfig.backgroundColor)
    }

    initBaseGUI() {
      // demo code
      const config = this.config
      const otherConfig = this.otherConfig
      const gui = new dat.GUI()
      gui.addCallbackFunc(this.resetCanvas.bind(this))

      // gui.add(otherConfig, 'message').name('配置面板')
      // gui.add(otherConfig, 'play').name('播放 / 暂停')
      typeof config.particleNumber !== 'undefined' && gui.add(config, 'particleNumber', 2, 100, 1)
        .name('粒子数量').onFinishChange(val => {
          // window[O2_AMBIENT_INIT]()
          this.resetCanvas()
        })
      typeof config.size !== 'undefined' && gui.add(config, 'size', 10, 500, 1)
        .name('每簇烟花粒子数量').onFinishChange(val => {
          // window[O2_AMBIENT_INIT]()
          this.resetCanvas()
        })
      typeof config.speed !== 'undefined' && gui.add(config, 'speed', 1, 20, 1)
        .name('粒子上升速度').onFinishChange(val => {
          // window[O2_AMBIENT_INIT]()
          this.resetCanvas()
        })
      this.isShowController && !this.isAmbientPlat && gui.addColor(otherConfig, 'backgroundColor').name('背景色(仅演示)').onFinishChange(val => {
        this.setBackgroundColor(val)
      })
      this.gui = gui
      // 设置控制面板层级
      this.setGUIzIndex(2)
    }

    initTextureGUI() {
      // demo code
      const gui = this.gui
      const textures = this.config.textures
      const texturesFolder = gui.addFolder('纹理')
      textures && textures.forEach((item, idx) => {
        const textureController = texturesFolder.add({
          item: item.value
        }, 'item').name(item.name)
        textureController.onFinishChange(((idx) => {
          return (val) => {
            if (!textureController.isModified()) return
            window[O2_AMBIENT_CONFIG].textures[idx].value = val
            this.resetCanvas()
          }
        })(idx))
      })
      texturesFolder.open()

      this.texturesFolder = texturesFolder
    }
  }

  /* eslint-disable no-new */
  new Control()
}

export default controlInit