!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="//storage.jd.com/ambient/",i(i.s=22)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.O2_AMBIENT_IS_CONFIG_RESET=e.O2_AMBIENT_CONFIG_KEY=e.O2_AMBIENT_CLASSNAME=e.O2_AMBIENT_CONFIG=e.O2_AMBIENT_INIT=e.O2_AMBIENT_MAIN=void 0;var s="fireworks",n=s.toUpperCase(),r="O2_AMBIENT_".concat(n,"_MAIN");e.O2_AMBIENT_MAIN=r;var o="O2_AMBIENT_".concat(n,"_INIT");e.O2_AMBIENT_INIT=o;var a="O2_AMBIENT_".concat(n,"_CONFIG");e.O2_AMBIENT_CONFIG=a;var h="o2_ambient_".concat(s);e.O2_AMBIENT_CLASSNAME=h;e.O2_AMBIENT_CONFIG_KEY="O2_AMBIENT_CONFIG_KEY";e.O2_AMBIENT_IS_CONFIG_RESET="O2_AMBIENT_IS_CONFIG_RESET"},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}t.exports=function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},,,,,,,,,,,,,,,,,,,function(t,e,i){t.exports=i(23)},function(t,e,i){"use strict";var s=i(1);i(24),i(25);var n=s(i(26)),r=i(0),o=s(i(27));try{var a=setInterval(function(){window[r.O2_AMBIENT_CONFIG]&&(clearInterval(a),(0,o.default)())},1e3)}catch(t){console.log(t)}var h=function(){n.default.init({}),n.default.processPV()};void 0===window.XView?h():window.handleReport=h},function(t,e){},function(t,e){},function(t,e,i){var s;s=function(){"use strict";function t(t){var e;return function(){if(!e){for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];e=t.apply(null,s)}return e}}function e(t,e){function i(){r.onload=null,r.onerror=null,r=null,delete s[n]}var s=window.o2ImageData||(window.o2ImageData={}),n=Date.now(),r=new Image;r.onload=i,r.onerror=i,r.src="//fd.3.cn/cesu/r?pid="+t+"&"+e+"&_="+n}var i={JdApp:4,WeChat:5,QQ:6,Browser:7},s={Android:8,iOS:9,Other:10},n=1,r=11,o=12,a=13,h=14,u=2,c=3,d=window.navigator.userAgent,l=window.location.host,_=function(t){return/(quark|amb).jd/i.test(t)?r:n}(l),f=function(t){return!/(quark|amb).jd/i.test(t)&&(/m.jd./i.test(t)?o:/.jd./i.test(t)?a:h)}(l),m=/android|iphone|ipad|ipod|iemobile|blackberry/i.test(d),p=m?t(function(t){var e=s;return/iphone|ipad|ipod/i.test(t)?e.iOS:/android/i.test(t)?e.Android:e.Other})(d):"",w=m?t(function(t){var e=i;return/jdapp/i.test(t)?e.JdApp:/MicroMessenger/i.test(t)?e.WeChat:/QQ/i.test(t)?e.QQ:e.Browser})(d):"",k=["s".concat(m?u:c,"=1")];return p&&k.push("s".concat(p,"=1")),w&&k.push("s".concat(w,"=1")),f&&k.push("s".concat(f,"=1")),{_base:0,_reportBase:!1,init:function(t){var e=this,i=t.base;this._base=i||1718,this._base&&parseInt(this._base,10)===this._base&&window.addEventListener("load",function(){setTimeout(function(){e._processBaseData()},0)},!1)},_processBaseData:function(){this._reportBase||(e(this._base,k.join("&")),this._reportBase=!0)},processPV:function(t){this._base&&parseInt(this._base,10)===this._base&&e(this._base,"s".concat(_,"=1").concat(t?"&s".concat(t,"=1"):""))}}},t.exports=s()},function(t,e,i){"use strict";var s=i(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,i(28);var n=i(0),r=s(i(29)),o=document.querySelector(".o2team_ambient_main");function a(){var t=new r.default;window[n.O2_AMBIENT_MAIN]=t}o||((o=document.createElement("div")).setAttribute("class","o2team_ambient_main"),o.setAttribute("id","o2team_ambient_main"),document.body.insertAdjacentElement("beforeend",o)),o.addEventListener("click",function(){o.style.display="none"}),window[n.O2_AMBIENT_INIT]=a},function(t,e,i){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window["".concat(e[i],"RequestAnimationFrame")],window.cancelAnimationFrame=window["".concat(e[i],"CancelAnimationFrame")]||window["".concat(e[i],"CancelRequestAnimationFrame")];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var s=(new Date).getTime(),n=Math.max(0,16-(s-t)),r=window.setTimeout(function(){e(s+n)},n);return t=s+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass2=_interopRequireDefault(__webpack_require__(2)),_classCallCheck2=_interopRequireDefault(__webpack_require__(3)),_const=__webpack_require__(0),Walker=function t(e){(0,_classCallCheck2.default)(this,t),this.step=function(){return this.direction=Math.sign(this.target)*this.speed,this.value+=this.direction,this.target?this.target-=this.direction:this.value?this.wander?this.target=this.newTarget():this.target=-this.value:this.target=this.newTarget(),this.direction},this.fireworkStep=function(){return this.direction=this.speed,this.direction},this.newTarget=function(){return Math.round(Math.random()*(2*this.radius)-6*this.radius)},this.start=0,this.value=0,this.radius=e.radius,this.target=this.newTarget(),this.direction=Math.sign(this.target),this.wander=e.wander,this.speed=e.speed||1},Main=function(){function Main(){(0,_classCallCheck2.default)(this,Main),this.minFire=1,this.sparkNum=100,this.sumColor=[],this.isStart=!1,this.fireSpeed=6,this.limitDur=0,this.isStop=!1,this.sto=null,this.endCallback=null,this.reset(),this.init()}return(0,_createClass2.default)(Main,[{key:"init",value:function(){var t=this;this.dom=document.querySelector("canvas"),this.content=this.dom.getContext("2d"),this.dom.width=window.innerWidth,this.dom.height=window.innerHeight,this.sparks=[],this.fireworks=[],this.isStart=!0;var e=this.minFire;for(this.sto&&clearTimeout(this.sto),this.limitDur&&(this.sto=setTimeout(function(){t.isStop=!0},1e3*this.limitDur));e--;)this.fireworks.push(this.Firework(Math.random()*this.dom.width,this.dom.height*Math.random(),this));this.create(this)}},{key:"create",value:function create(){if(this.isStart){if(this.fireworks.length||this.sparks.length||!this.isStop)setTimeout(this.create.bind(this),1e3/60);else{if(!this.endCallback)return;if("function"==typeof this.endCallback)this.endCallback();else if("string"==typeof this.endCallback)try{eval("(".concat(decodeURI(this.endCallback),")()"))}catch(t){}}this.content.clearRect(0,0,this.dom.width,this.dom.height);for(var m=0;m<this.fireworks.length;m++)this.fireworks[m].dead?this.fireworks.splice(m,1):(this.fireworks[m].move(),this.fireworks[m].draw());for(var k=0;k<this.sparks.length;k++)this.sparks[k].dead?this.sparks.splice(k,1):(this.sparks[k].move(),this.sparks[k].draw());this.fireworks.length<this.minFire&&!this.isStop&&this.fireworks.push(this.Firework(null,null,this))}}},{key:"Firework",value:function(t,e,i){return{x:t||Math.random()*i.dom.width,y:e||i.dom.height,height:Math.random()*i.dom.height/2,dead:!1,color:i.randomColor(),speed:this.fireSpeed,move:function(){this.y>this.height?this.y-=this.speed:this.burst()},draw:function(){i.drawCircle(this.x,this.y,2,3,this.color)},burst:function(){this.dead=!0;for(var t=i.sparkNum;t--;)i.sparks.push(i.Spark(this.x,this.y,this.color))}}}},{key:"Spark",value:function(t,e,i){var s=this,n=3*Math.random()+3;return{x:t,y:e,dir:Math.random()*(2*Math.PI),dead:!1,color:i,speed:n,walker:new Walker({radius:50,speed:.25}),gravity:.25,dur:n/.1,move:function(){if(this.dur--,this.dur<0&&(this.dead=!0),!(this.speed<0)){this.speed>0&&(this.speed-=.1);var t=this.walker.step();this.x+=Math.cos(this.dir+t)*this.speed,this.y+=Math.sin(this.dir+t)*this.speed,this.y+=this.gravity,this.gravity+=.05}},draw:function(){s.drawCircle(this.x,this.y,3,3,this.color)}}}},{key:"drawCircle",value:function(t,e,i,s,n){n=n||"#FFF",this.content.fillStyle=n,this.content.fillRect(t-i/2,e-s/2,i,s)}},{key:"randomColor",value:function(){return this.sumColor[Math.floor(Math.random()*this.sumColor.length)]}},{key:"reset",value:function(){var t=this;this.minFire=window[_const.O2_AMBIENT_CONFIG].particleNumber,this.sparkNum=window[_const.O2_AMBIENT_CONFIG].size,this.sumColor=[],this.fireworks=[],this.sparks=[],this.limitDur=window[_const.O2_AMBIENT_CONFIG].limitDur||0,window[_const.O2_AMBIENT_CONFIG].textures.forEach(function(e){return t.sumColor.push(e.value)}),this.endCallback=window[_const.O2_AMBIENT_CONFIG].endCallback,this.isStop=!1,this.isStart=!1,this.sto&&clearTimeout(this.sto),this.limitDur&&(this.sto=setTimeout(function(){t.isStop=!0},1e3*this.limitDur)),this.create(),this.isStart=!0}}]),Main}(),_default=Main;exports.default=_default}]);