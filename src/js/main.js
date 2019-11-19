import {
  O2_AMBIENT_CONFIG
} from './utils/const'

class Walker {
  constructor(options) {
    this.step = function () {
      this.direction = Math.sign(this.target) * this.speed
      this.value += this.direction
      this.target ?
        this.target -= this.direction :
        (this.value) ?
        (this.wander) ?
        this.target = this.newTarget() :
        this.target = -this.value :
        this.target = this.newTarget()
      return this.direction
    }

    this.fireworkStep = function () {
      this.direction = this.speed
      return this.direction
    }

    this.newTarget = function () {
      return Math.round(Math.random() * (this.radius * 2) - this.radius * 6)
    }

    this.start = 0
    this.value = 0
    this.radius = options.radius
    this.target = this.newTarget()
    this.direction = Math.sign(this.target)
    this.wander = options.wander
    this.speed = options.speed || 1
  }
}

class Main {
  constructor() {
    this.minFire = 1
    this.sparkNum = 100
    this.sumColor = []
    this.isStart = false
    this.fireSpeed = 6
    this.limitDur = 0
    this.isStop = false
    this.sto = null
    this.endCallback = null
    this.reset()
    this.init()
  }

  init() {
    this.dom = document.querySelector('canvas')
    this.content = this.dom.getContext('2d')
    this.dom.width = window.innerWidth
    this.dom.height = window.innerHeight
    this.sparks = []
    this.fireworks = []
    this.isStart = true
    let i = this.minFire
    if (this.sto) clearTimeout(this.sto)
    if (this.limitDur) {
      this.sto = setTimeout(() => {
        this.isStop = true
      }, this.limitDur * 1000)
    }
    while (i--) {
      this.fireworks.push(
        this.Firework(Math.random() * this.dom.width, this.dom.height * Math.random(), this)
      )
    }
    this.create(this)
  }

  create() {
    if (!this.isStart) return

    if (!(!this.fireworks.length && !this.sparks.length) || !this.isStop) {
      setTimeout(this.create.bind(this), 1000 / 60)
    } else {
      if (!this.endCallback) return
      if (typeof this.endCallback === 'function') {
        this.endCallback()
      } else if (typeof this.endCallback === 'string') {
        try {
          eval(`(${decodeURI(this.endCallback)})()`)
        } catch(e) {}
      }
    }

    this.content.clearRect(0, 0, this.dom.width, this.dom.height)

    for (let m = 0; m < this.fireworks.length; m++) {
      if (this.fireworks[m].dead) {
        this.fireworks.splice(m, 1)
      } else {
        this.fireworks[m].move()
        this.fireworks[m].draw()
      }
    }

    for (let k = 0; k < this.sparks.length; k++) {
      if (this.sparks[k].dead) {
        this.sparks.splice(k, 1)
      } else {
        this.sparks[k].move()
        this.sparks[k].draw()
      }
    }

    if (this.fireworks.length < this.minFire && !this.isStop) {
      this.fireworks.push(this.Firework(null, null, this))
    }
  }

  Firework(x, y, self) {
    let obj = {
      x: x || Math.random() * self.dom.width,
      y: y || self.dom.height,
      height: Math.random() * self.dom.height / 2,
      dead: false,
      color: self.randomColor(),
      speed: this.fireSpeed,
      move: function () {
        if (this.y > this.height) this.y -= this.speed;
        else this.burst()
      },
      draw: function () {
        self.drawCircle(this.x, this.y, 2, 3, this.color)
      },
      burst: function () {
        this.dead = true
        var i = self.sparkNum;
        while (i--) self.sparks.push(self.Spark(this.x, this.y, this.color))
      }
    }
    return obj
  }

  Spark(x, y, color) {
    const self = this
    let speed = Math.random() * 3 + 3
    return {
      x: x,
      y: y,
      dir: Math.random() * (Math.PI * 2),
      dead: false,
      color: color,
      speed: speed,
      walker: new Walker({
        radius: 50,
        speed: 0.25
      }),
      gravity: 0.25,
      dur: speed / 0.1,
      move: function () {
        this.dur--
        if (this.dur < 0) this.dead = true

        if (this.speed < 0) return
        if (this.speed > 0) this.speed -= 0.1
        var walk = this.walker.step()
        this.x += Math.cos(this.dir + walk) * this.speed
        this.y += Math.sin(this.dir + walk) * this.speed
        this.y += this.gravity
        this.gravity += 0.05
      },
      draw: function () {
        self.drawCircle(this.x, this.y, 3, 3, this.color)
      }
    }
  }

  drawCircle(x, y, width, height, color) {
    color = color || '#FFF'
    this.content.fillStyle = color
    this.content.fillRect(x - width / 2, y - height / 2, width, height)
  }

  randomColor() {
    return this.sumColor[Math.floor(Math.random() * this.sumColor.length)];
  }

  reset() {
    this.minFire = window[O2_AMBIENT_CONFIG].particleNumber
    this.sparkNum = window[O2_AMBIENT_CONFIG].size
    this.sumColor = []
    this.fireworks = []
    this.sparks = []
    this.limitDur = window[O2_AMBIENT_CONFIG].limitDur || 0
    window[O2_AMBIENT_CONFIG].textures.forEach(item => this.sumColor.push(item.value))
    this.endCallback = window[O2_AMBIENT_CONFIG].endCallback
    this.isStop = false
    this.isStart = false
    if (this.sto) clearTimeout(this.sto)
    if (this.limitDur) {
      this.sto = setTimeout(() => {
        this.isStop = true
      }, this.limitDur * 1000)
    }
    this.create()
    this.isStart = true
  }
}

export default Main