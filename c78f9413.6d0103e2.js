(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/4",title:"4",description:"# 4 - Game Props",source:"@site/docs/tutorial/4.md",permalink:"/docs/tutorial/4",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/4.md"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"4---game-props"},"4 - Game Props"),Object(o.b)("p",null,"Below the ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," are the ",Object(o.b)("inlineCode",{parentName:"p"},"gameProps"),". We don't apply them now, but when we run the game on web or iOS, we'll import the ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," and its ",Object(o.b)("inlineCode",{parentName:"p"},"gameProps")," and apply them like ",Object(o.b)("inlineCode",{parentName:"p"},"Game(gameProps)"),"."),Object(o.b)("p",null,"You can see an example of this in the ",Object(o.b)("inlineCode",{parentName:"p"},"web/index")," file, where we call the ",Object(o.b)("inlineCode",{parentName:"p"},"renderCanvas")," function from the ",Object(o.b)("inlineCode",{parentName:"p"},"@replay/web")," package to render our game in the browser."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"gameProps")," requires an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite and the ",Object(o.b)("inlineCode",{parentName:"p"},"size")," of our game, which we'll discuss next. We also add an ",Object(o.b)("em",{parentName:"p"},"optional")," ",Object(o.b)("inlineCode",{parentName:"p"},"defaultFont")," ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," to set the default font size and keep a consistent font name for any text we render later on."))}d.isMDXComponent=!0},207:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(220),a=n(240),s=n(147);t.default=function(){return i.a.createElement(o.a,{part:4,MDXContent:s.default,codesTs:[{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite<GameProps>({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:["14-24"]},{file:"web/index.ts",code:'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst loadingTextures = [\n  t.text({\n    color: "black",\n    text: "Loading...",\n  }),\n];\n\nrenderCanvas(Game(gameProps), loadingTextures);\n'}],codesJs:[{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:["14-24"]},{file:"web/index.js",code:'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst loadingTextures = [\n  t.text({\n    color: "black",\n    text: "Loading...",\n  }),\n];\n\nrenderCanvas(Game(gameProps), loadingTextures);\n'}],Game:a.a,gameProps:a.b})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(219);const i={text:e=>({type:"text",props:{testId:e.testId,...Object(r.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color}}),textInput:e=>{var t;return{type:"textInput",props:{testId:e.testId,...Object(r.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color,onChangeText:e.onChangeText,numberOfLines:null!==(t=e.numberOfLines)&&void 0!==t?t:1,width:e.width}}},circle:e=>({type:"circle",props:{testId:e.testId,...Object(r.a)(e),radius:e.radius,color:e.color}}),rectangle:e=>({type:"rectangle",props:{testId:e.testId,...Object(r.a)(e),width:e.width,height:e.height,color:e.color}}),line:e=>{var t;return{type:"line",props:{testId:e.testId,...Object(r.a)(e),color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path}}},image:e=>({type:"image",props:{testId:e.testId,...Object(r.a)(e),fileName:e.fileName,width:e.width,height:e.height}}),spriteSheet:e=>({type:"spriteSheet",props:{testId:e.testId,...Object(r.a)(e),fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height}})};function o(e){return t=>({type:"custom",spriteObj:e,props:t})}},219:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return r}))},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var r=n(0),i=n.n(r),o=n(225),a=n(222),s=n(232),c=n(1),l=(n(227),n(228),n(80),n(233),n(226),n(78),n(234),n(79),n(229),n(231)),d=n(230),p=n(224),u=n(223),h=n(221),m=n.n(h),g=n(132),f=n.n(g);function v(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(p.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(u.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(u.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(r.useState)(o[0]),s=a[0],c=a[1],l=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return i.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(b,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function b(e){var t=e.lang,n=e.code,r=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(l.a,Object(c.a)({},l.b,{theme:d.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:f.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:m()(t,f.a.codeBlock)},i.a.createElement("div",{className:f.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);var y=n(219);function x(e,t,n,r,i,o,a,s){const c=Object(y.a)(t);c.opacity*=s;const l=e=>{const t=r(e);return function(e){const t=e.x,n=e.y,r=Math.PI/180,i=-(e.rotation||0)*r;return({x:r,y:o})=>{const a=(r-t)*Math.cos(i)+(o-n)*Math.sin(i),s=-(r-t)*Math.sin(i)+(o-n)*Math.cos(i),c=e.x+(a-e.x)/e.scaleX,l=e.y+(s-e.y)/e.scaleY;return{x:c+e.anchorX,y:l+e.anchorY}}}(c)(t)},d=n(l),p=e.getSprites(t,d,i,o,a),u=[],h=p.filter(k).map(t=>{if("custom"===t.type){u.push(t.props.id);let r=!1;return e.childContainers[t.props.id]||(r=!0,e.childContainers[t.props.id]=E(t,d,e.prevTime)),x(e.childContainers[t.props.id],t.props,n,l,r,o,a,c.opacity)}return t});return Object.keys(e.childContainers).forEach(t=>{u.includes(t)||delete e.childContainers[t]}),{id:t.id,baseProps:c,textures:h}}function E(e,t,n){const{spriteObj:r,props:i}=e,o=[],a=e=>{o.push(e)};let s;return r.init&&(s=r.init({props:i,device:t,updateState:a})),{state:s,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,i,s){const c=s-this.prevTime;this.prevTime=s,this.currentLag+=c;let l=0;const d=()=>{this.state=o.reduce((e,t)=>t(e),this.state),o.length=0};if(d(),!n&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:t,updateState:a}),this.currentLag-=1/60*1e3;l=this.currentLag/(1/60*1e3)}d();let p=r[i];p||(p="renderPXL"===i&&r.renderXL?r.renderXL:r.render);const u=p({props:e,state:this.state,device:t,updateState:a,extrapolateFactor:l});return d(),u}}}function j(e,t){const n=e.deviceHeight>e.deviceWidth;let r,i=!1;return"portrait"in t?(r=n?t.portrait:t.landscape,i=!0):r=t,r.minHeightXL&&e.deviceHeight>=r.minHeightXL||r.minWidthXL&&e.deviceWidth>=r.minWidthXL?i&&n?"renderPXL":"renderXL":i&&n?"renderP":"render"}function k(e){return null!==e}let O={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function P(e){return function(e,t){const n=e(t.pointer);return{...t,pointer:{...t.pointer,x:n.x,y:n.y}}}(e,O)}function L(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),O.keysDown[e.key]=!0,O.keysJustPressed[e.key]=!0}function C(e){delete O.keysDown[e.key]}function M(){O.pointer.justPressed=!1,O.pointer.pressed=!1}function S(e,{width:t,height:n,widthMargin:r,heightMargin:i,deviceWidth:o,deviceHeight:a},s,c){e.save();const l=Math.min(o/t,a/n),d=t+2*r,p=n+2*i;return e.translate(o/2,a/2),e.scale(l,l),{scale:l,render:t=>{e.clearRect(-o/2/l,-a/2/l,o/l,a/l),e.fillStyle="white",e.fillRect(-d/2,-p/2,d,p),function e(t,n,r,i){const{baseProps:o,textures:a}=t;n.save(),N(n,o),a.forEach(t=>{if("type"in t){const e=I(n);return n.save(),N(n,t.props,o.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":const i=n[e.props.fileName];if(!i)throw Error(`Cannot find image file "${e.props.fileName}"`);return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,e,r,i),void n.restore()}e(t,n,r,i)}),n.restore()}(t,e,s,c)}}}const T=Math.PI/180,N=(e,t,n=1)=>{const{x:r,y:i,rotation:o,scaleX:a,scaleY:s,anchorX:c,anchorY:l,opacity:d}=t;e.translate(r,-i),e.rotate(o*T),e.scale(a,s),e.translate(-c,l),e.globalAlpha=d*n},I=e=>({circle(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line(t,n,r){if(t.length<2)return;const[[i,o],...a]=t;e.strokeStyle=r,e.lineWidth=n,e.beginPath(),e.moveTo(i,-o),a.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke()},text(t,n,r,i){const o=`${t.size}px ${t.name}`;e.font=o,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet(t,n,r,i,o,a){const s=t.width/n,c=t.height/r,l=i%n,d=Math.floor(i/n)%r;e.drawImage(t,l*s,d*c,s,c,-o/2,-a/2,o,a)}});let G;function z(e,t,n,r){let i;if("portrait"in r){i=t>e?r.portrait:r.landscape}else i=r;const{width:o,height:a,maxWidthMargin:s=0,maxHeightMargin:c=0}=i;if("game-coords"===n)return{width:o,height:a,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:a};const l=o/a;if(l>e/t){const n=e,r=n/l,i=r/a*c,s=Math.min(t,r+2*i);return{width:o,height:a,widthMargin:0,heightMargin:(s-r)/2*(a/r),deviceWidth:n,deviceHeight:s}}{const n=t,r=n*l,i=r/o*s,c=Math.min(e,r+2*i);return{width:o,height:a,widthMargin:(c-r)/2*(o/r),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const X={name:"sans-serif",size:12};function H(e,t=[],n={},r="game-coords",i,o){var a;const s=i||document.createElement("canvas");i||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let l=!0;let d,p,u,h,m;function g(t){if(d&&(c.restore(),document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h),document.removeEventListener("pointerout",M),!0===t))return;const n=function(e,t,n,r){const i=z(e,t,n,r);return G=i,i}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const i=e.props.defaultFont||X,a=S(c,n,v,i);m=a.scale,b.ref=a.render;const g=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:r})=>i=>(i.clientX-e)/n-t-r/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:m}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:r})=>i=>-(i.clientY-e)/n+t+r/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:m}),w=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin;p=e=>{const t=g(e),n=f(e);w(t,n)?l=!1:(l=!0,function(e,t){O.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=e=>{const t=g(e),n=f(e);w(t,n)||function(e,t){O.pointer.x=e,O.pointer.y=t}(t,n)},h=e=>{const t=g(e),n=f(e);w(t,n)?M():function(e,t){O.pointer.justPressed=!1,O.pointer.pressed=!1,O.pointer.justReleased=!0,O.pointer.x=e,O.pointer.y=t}(t,n)},document.addEventListener("pointerdown",p,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",h,!1),document.addEventListener("pointerout",M,!1),d=n}document.addEventListener("keydown",e=>{l&&L(e)},!1),document.addEventListener("keyup",e=>{l&&C(e)},!1),window.addEventListener("resize",g,!1);const f={},v={},w={getGetDevice:D(f,z((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size))},b={ref:null};g();let k=!1;return null===(a=b.ref)||void 0===a||a.call(b,{id:"Loading",baseProps:Object(y.a)({}),textures:t}),{cleanup:function(){s.width=s.width,i||document.body.removeChild(s),k=!0,document.removeEventListener("keydown",L,!1),document.removeEventListener("keyup",C,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{v[t]=new Image,e.push(new Promise((e,n)=>{v[t].addEventListener("load",e),v[t].addEventListener("error",n),v[t].src=t}))}),await Promise.all(e)})().then(()=>{const t=()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("pointerdown",t,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);const{initTextures:n,getNextFrameTextures:r}=function(e,t,n){const r=t||game.Game(game.gameProps),i=({x:e,y:t})=>({x:e,y:t}),o=e.getGetDevice(),a=o(i),s=E(r,o(i),0),c=n||r.props.size,l=j(a.size,c);return{initTextures:x(s,r.props,o,i,!0,l,0,1),getNextFrameTextures(t){const n=e.getGetDevice(),o=j(n(i).size,c);return x(s,r.props,n,i,!1,o,t,1)}}}(w,e);let i=null;!function e(t){var n;null===(n=b.ref)||void 0===n||n.call(b,t),window.requestAnimationFrame(t=>{k||(null===i&&(i=t-1/60),e(r(t-i)),O={keysDown:O.keysDown,keysJustPressed:{},pointer:{...O.pointer,justPressed:!1,justReleased:!1}})})}(n)}),audioElements:f}}function D(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&!r.paused&&(r=new Audio(t)),r}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const r=n(!0);r.play(),void 0!==e&&(r.currentTime=e),t&&(r.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:G||t,now:()=>new Date};return t=>({...e,inputs:P(t)})}}var W=n(217);function B(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],o=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(r.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),c=s[0],l=s[1],d=Object(r.useState)(0),p=d[0],u=d[1],h=0,m=0,g=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(m=c.height*(667/900),h=m*(375/667)):(h=c.width*(375/460),m=h/(375/667));var v=n.size.maxHeightMargin?0:.08*m;g=(c.height-m)/2+v}return Object(r.useEffect)((function(){if(h&&m){var e=document.getElementById("myCanvas"),r=H(t(n),[W.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:h,height:m}).cleanup;return function(){r()}}}),[h,m,p]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:l,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&i.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return u((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:g},width:h,height:m}))}function F(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,l=e.Game,d=e.gameProps,p=e.image,u=e.isEnd,h=e.assets,m=r&&c,g=l&&d?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(B,{Game:l,gameProps:d,showReload:m,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:p}));return i.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),u?i.a.createElement("div",null):i.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),m?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(v,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},g)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},g)))}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(217),i=Object(r.a)({render:function(){return[r.b.rectangle({width:50,height:40,color:"yellow"})]}}),o=Object(r.a)({render:function(){return[i({id:"bird"})]}}),a={id:"Game",size:{width:400,height:600},defaultFont:{name:"Helvetica",size:24}}}}]);