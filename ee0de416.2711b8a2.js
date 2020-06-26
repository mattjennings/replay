(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/3",title:"3",description:"# 3 - Game Sprite",source:"@site/docs/tutorial/3.md",permalink:"/docs/tutorial/3",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/3.md"},c=[],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"3---game-sprite"},"3 - Game Sprite"),Object(o.b)("p",null,"On its own, our ",Object(o.b)("inlineCode",{parentName:"p"},"Bird")," Sprite doesn't do anything - we need to import it in another Sprite. Open ",Object(o.b)("inlineCode",{parentName:"p"},"src/index")," and replace the starter code with what's shown on the right."),Object(o.b)("p",null,"Firstly you'll see we've made a new ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite. This is our top-level Sprite which contains our entire game."),Object(o.b)("p",null,"Again, it has a ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function returning an array of Sprites. In this case, we return our ",Object(o.b)("inlineCode",{parentName:"p"},"Bird")," Sprite we just made. We need to pass a locally unique ",Object(o.b)("inlineCode",{parentName:"p"},"id")," ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," to any custom Sprites we've made - here we pass an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of ",Object(o.b)("inlineCode",{parentName:"p"},'"bird"')," by ",Object(o.b)("em",{parentName:"p"},"calling")," the ",Object(o.b)("inlineCode",{parentName:"p"},"Bird")," Sprite like ",Object(o.b)("inlineCode",{parentName:"p"},"Bird(props)"),"."))}l.isMDXComponent=!0},209:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(220),a=n(240),s=n(137);t.default=function(){return i.a.createElement(o.a,{part:3,MDXContent:s.default,codesTs:[{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite<GameProps>({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n'},{file:"bird.ts",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],codesJs:[{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n'},{file:"bird.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],Game:a.a,gameProps:a.b})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(219);const i={text:e=>({type:"text",props:{testId:e.testId,...Object(r.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color}}),textInput:e=>{var t;return{type:"textInput",props:{testId:e.testId,...Object(r.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color,onChangeText:e.onChangeText,numberOfLines:null!==(t=e.numberOfLines)&&void 0!==t?t:1,width:e.width}}},circle:e=>({type:"circle",props:{testId:e.testId,...Object(r.a)(e),radius:e.radius,color:e.color}}),rectangle:e=>({type:"rectangle",props:{testId:e.testId,...Object(r.a)(e),width:e.width,height:e.height,color:e.color}}),line:e=>{var t;return{type:"line",props:{testId:e.testId,...Object(r.a)(e),color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path}}},image:e=>({type:"image",props:{testId:e.testId,...Object(r.a)(e),fileName:e.fileName,width:e.width,height:e.height}}),spriteSheet:e=>({type:"spriteSheet",props:{testId:e.testId,...Object(r.a)(e),fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height}})};function o(e){return t=>({type:"custom",spriteObj:e,props:t})}},219:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return r}))},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var r=n(0),i=n.n(r),o=n(225),a=n(222),s=n(232),c=n(1),d=(n(227),n(228),n(80),n(233),n(226),n(78),n(234),n(79),n(229),n(231)),l=n(230),u=n(224),p=n(223),h=n(221),m=n.n(h),g=n(132),f=n.n(g);function v(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(r.useState)(o[0]),s=a[0],c=a[1],d=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return i.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(y,{key:d.file,lang:t,code:d.code,highlight:d.highlight}))}function y(e){var t=e.lang,n=e.code,r=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(d.a,Object(c.a)({},d.b,{theme:l.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:f.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:m()(t,f.a.codeBlock)},i.a.createElement("div",{className:f.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);var b=n(219);function E(e,t,n,r,i,o,a,s){const c=Object(b.a)(t);c.opacity*=s;const d=e=>{const t=r(e);return function(e){const t=e.x,n=e.y,r=Math.PI/180,i=-(e.rotation||0)*r;return({x:r,y:o})=>{const a=(r-t)*Math.cos(i)+(o-n)*Math.sin(i),s=-(r-t)*Math.sin(i)+(o-n)*Math.cos(i),c=e.x+(a-e.x)/e.scaleX,d=e.y+(s-e.y)/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(c)(t)},l=n(d),u=e.getSprites(t,l,i,o,a),p=[],h=u.filter(k).map(t=>{if("custom"===t.type){p.push(t.props.id);let r=!1;return e.childContainers[t.props.id]||(r=!0,e.childContainers[t.props.id]=x(t,l,e.prevTime)),E(e.childContainers[t.props.id],t.props,n,d,r,o,a,c.opacity)}return t});return Object.keys(e.childContainers).forEach(t=>{p.includes(t)||delete e.childContainers[t]}),{id:t.id,baseProps:c,textures:h}}function x(e,t,n){const{spriteObj:r,props:i}=e,o=[],a=e=>{o.push(e)};let s;return r.init&&(s=r.init({props:i,device:t,updateState:a})),{state:s,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,i,s){const c=s-this.prevTime;this.prevTime=s,this.currentLag+=c;let d=0;const l=()=>{this.state=o.reduce((e,t)=>t(e),this.state),o.length=0};if(l(),!n&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:t,updateState:a}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}l();let u=r[i];u||(u="renderPXL"===i&&r.renderXL?r.renderXL:r.render);const p=u({props:e,state:this.state,device:t,updateState:a,extrapolateFactor:d});return l(),p}}}function j(e,t){const n=e.deviceHeight>e.deviceWidth;let r,i=!1;return"portrait"in t?(r=n?t.portrait:t.landscape,i=!0):r=t,r.minHeightXL&&e.deviceHeight>=r.minHeightXL||r.minWidthXL&&e.deviceWidth>=r.minWidthXL?i&&n?"renderPXL":"renderXL":i&&n?"renderP":"render"}function k(e){return null!==e}let O={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function S(e){return function(e,t){const n=e(t.pointer);return{...t,pointer:{...t.pointer,x:n.x,y:n.y}}}(e,O)}function L(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),O.keysDown[e.key]=!0,O.keysJustPressed[e.key]=!0}function M(e){delete O.keysDown[e.key]}function P(){O.pointer.justPressed=!1,O.pointer.pressed=!1}function C(e,{width:t,height:n,widthMargin:r,heightMargin:i,deviceWidth:o,deviceHeight:a},s,c){e.save();const d=Math.min(o/t,a/n),l=t+2*r,u=n+2*i;return e.translate(o/2,a/2),e.scale(d,d),{scale:d,render:t=>{e.clearRect(-o/2/d,-a/2/d,o/d,a/d),e.fillStyle="white",e.fillRect(-l/2,-u/2,l,u),function e(t,n,r,i){const{baseProps:o,textures:a}=t;n.save(),N(n,o),a.forEach(t=>{if("type"in t){const e=I(n);return n.save(),N(n,t.props,o.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":const i=n[e.props.fileName];if(!i)throw Error(`Cannot find image file "${e.props.fileName}"`);return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,e,r,i),void n.restore()}e(t,n,r,i)}),n.restore()}(t,e,s,c)}}}const T=Math.PI/180,N=(e,t,n=1)=>{const{x:r,y:i,rotation:o,scaleX:a,scaleY:s,anchorX:c,anchorY:d,opacity:l}=t;e.translate(r,-i),e.rotate(o*T),e.scale(a,s),e.translate(-c,d),e.globalAlpha=l*n},I=e=>({circle(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line(t,n,r){if(t.length<2)return;const[[i,o],...a]=t;e.strokeStyle=r,e.lineWidth=n,e.beginPath(),e.moveTo(i,-o),a.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke()},text(t,n,r,i){const o=`${t.size}px ${t.name}`;e.font=o,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet(t,n,r,i,o,a){const s=t.width/n,c=t.height/r,d=i%n,l=Math.floor(i/n)%r;e.drawImage(t,d*s,l*c,s,c,-o/2,-a/2,o,a)}});let X;function B(e,t,n,r){let i;if("portrait"in r){i=t>e?r.portrait:r.landscape}else i=r;const{width:o,height:a,maxWidthMargin:s=0,maxHeightMargin:c=0}=i;if("game-coords"===n)return{width:o,height:a,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:a};const d=o/a;if(d>e/t){const n=e,r=n/d,i=r/a*c,s=Math.min(t,r+2*i);return{width:o,height:a,widthMargin:0,heightMargin:(s-r)/2*(a/r),deviceWidth:n,deviceHeight:s}}{const n=t,r=n*d,i=r/o*s,c=Math.min(e,r+2*i);return{width:o,height:a,widthMargin:(c-r)/2*(o/r),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const H={name:"sans-serif",size:12};function W(e,t=[],n={},r="game-coords",i,o){var a;const s=i||document.createElement("canvas");i||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let d=!0;let l,u,p,h,m;function g(t){if(l&&(c.restore(),document.removeEventListener("pointerdown",u),document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",h),document.removeEventListener("pointerout",P),!0===t))return;const n=function(e,t,n,r){const i=B(e,t,n,r);return X=i,i}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const i=e.props.defaultFont||H,a=C(c,n,v,i);m=a.scale,y.ref=a.render;const g=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:r})=>i=>(i.clientX-e)/n-t-r/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:m}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:r})=>i=>-(i.clientY-e)/n+t+r/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:m}),w=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin;u=e=>{const t=g(e),n=f(e);w(t,n)?d=!1:(d=!0,function(e,t){O.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},p=e=>{const t=g(e),n=f(e);w(t,n)||function(e,t){O.pointer.x=e,O.pointer.y=t}(t,n)},h=e=>{const t=g(e),n=f(e);w(t,n)?P():function(e,t){O.pointer.justPressed=!1,O.pointer.pressed=!1,O.pointer.justReleased=!0,O.pointer.x=e,O.pointer.y=t}(t,n)},document.addEventListener("pointerdown",u,!1),document.addEventListener("pointermove",p,!1),document.addEventListener("pointerup",h,!1),document.addEventListener("pointerout",P,!1),l=n}document.addEventListener("keydown",e=>{d&&L(e)},!1),document.addEventListener("keyup",e=>{d&&M(e)},!1),window.addEventListener("resize",g,!1);const f={},v={},w={getGetDevice:G(f,B((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size))},y={ref:null};g();let k=!1;return null===(a=y.ref)||void 0===a||a.call(y,{id:"Loading",baseProps:Object(b.a)({}),textures:t}),{cleanup:function(){s.width=s.width,i||document.body.removeChild(s),k=!0,document.removeEventListener("keydown",L,!1),document.removeEventListener("keyup",M,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{v[t]=new Image,e.push(new Promise((e,n)=>{v[t].addEventListener("load",e),v[t].addEventListener("error",n),v[t].src=t}))}),await Promise.all(e)})().then(()=>{const t=()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("pointerdown",t,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);const{initTextures:n,getNextFrameTextures:r}=function(e,t,n){const r=t||game.Game(game.gameProps),i=({x:e,y:t})=>({x:e,y:t}),o=e.getGetDevice(),a=o(i),s=x(r,o(i),0),c=n||r.props.size,d=j(a.size,c);return{initTextures:E(s,r.props,o,i,!0,d,0,1),getNextFrameTextures(t){const n=e.getGetDevice(),o=j(n(i).size,c);return E(s,r.props,n,i,!1,o,t,1)}}}(w,e);let i=null;!function e(t){var n;null===(n=y.ref)||void 0===n||n.call(y,t),window.requestAnimationFrame(t=>{k||(null===i&&(i=t-1/60),e(r(t-i)),O={keysDown:O.keysDown,keysJustPressed:{},pointer:{...O.pointer,justPressed:!1,justReleased:!1}})})}(n)}),audioElements:f}}function G(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&!r.paused&&(r=new Audio(t)),r}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const r=n(!0);r.play(),void 0!==e&&(r.currentTime=e),t&&(r.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:X||t,now:()=>new Date};return t=>({...e,inputs:S(t)})}}var z=n(217);function D(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],o=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(r.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),c=s[0],d=s[1],l=Object(r.useState)(0),u=l[0],p=l[1],h=0,m=0,g=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(m=c.height*(667/900),h=m*(375/667)):(h=c.width*(375/460),m=h/(375/667));var v=n.size.maxHeightMargin?0:.08*m;g=(c.height-m)/2+v}return Object(r.useEffect)((function(){if(h&&m){var e=document.getElementById("myCanvas"),r=W(t(n),[z.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:h,height:m}).cleanup;return function(){r()}}}),[h,m,u]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:d,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&i.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:g},width:h,height:m}))}function R(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,d=e.Game,l=e.gameProps,u=e.image,p=e.isEnd,h=e.assets,m=r&&c,g=d&&l?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(D,{Game:d,gameProps:l,showReload:m,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:u}));return i.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),m?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(v,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},g)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},g)))}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(217),i=Object(r.a)({render:function(){return[r.b.rectangle({width:50,height:40,color:"yellow"})]}}),o=Object(r.a)({render:function(){return[i({id:"bird"})]}}),a={id:"Game",size:{width:400,height:600},defaultFont:{name:"Helvetica",size:24}}}}]);