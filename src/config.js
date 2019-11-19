import { O2_AMBIENT_CONFIG } from './js/utils/const'
window[O2_AMBIENT_CONFIG] = {
  particleNumber: 2,
  size: 100,
  speed: 6,
  limitDur: 0,
  textures: [
    {name: '颜色1', value: '#6ae5ab'},
    {name: '颜色2', value: '#88e3b2'},
    {name: '颜色3', value: '#36b89b'},
    {name: '颜色4', value: '#7bd7ec'},
    {name: '颜色5', value: '#66cbe1'}
  ],
  endCallback: encodeURI((() => {
    console.log('动效结束')
  }).toString())
}
