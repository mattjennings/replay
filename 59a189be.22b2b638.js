(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(1),r=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/19",title:"19",description:"# 19 - Audio",source:"@site/docs/tutorial/19.md",permalink:"/docs/tutorial/19",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/19.md"},p=[],d={rightToc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"19---audio"},"19 - Audio"),Object(o.b)("p",null,"The only thing our game is missing now is some sound! Let's play the boop sound that replay-starter comes with whenever the bird hits a pipe."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"device")," parameter has an ",Object(o.b)("inlineCode",{parentName:"p"},"audio")," method, which takes a file name and returns a sound object. We can then call ",Object(o.b)("inlineCode",{parentName:"p"},"play()")," on it to play a sound."),Object(o.b)("p",null,"Lastly we need to ensure the audio file is being loaded by the game in ",Object(o.b)("inlineCode",{parentName:"p"},"web/index"),"."))}c.isMDXComponent=!0},194:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(220),a=(n(52),n(226),n(217)),s=n(236),p=Object(a.a)({render:function(){return[a.b.image({fileName:"/img/bird.png",width:50,height:40})]}});function d(e){return"keysDown"in e}var c=Object(a.a)({render:function(e){var t=e.props,n=h(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,o=n.yLowerTop,s=n.yLowerBottom;return[a.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),a.b.rectangle({color:"green",width:40,height:o-s,y:(o+s)/2})]}});function h(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var l=Object(a.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[u(t)],score:0}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,o=n.birdGravity,a=n.birdY,p=n.pipes,c=n.score;return a-=o+=.8,(r.pointer.justPressed||d(r)&&r.keysJustPressed[" "])&&(o=-12),p[p.length-1].x<140&&(p=[].concat(p,[u(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var i,r=function(){var n=i.value;if(n.x>45||n.x<-45)return"continue";var r=h(t,n.gapY),o=r.yUpperTop,a=r.yUpperBottom,s=r.yLowerTop,p=r.yLowerBottom,d={x:n.x,y:(o+a)/2,width:40,height:o-a},c={x:n.x,y:(s+p)/2,width:40,height:s-p};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return g(e,d)||g(e,c)}))?{v:!0}:void 0},o=Object(s.a)(n);!(i=o()).done;){var a=r();switch(a){case"continue":continue;default:if("object"==typeof a)return a.v}}return!1}(a,i.size,p)&&(i.audio("/audio/boop.wav").play(),t.gameOver(n.score)),{birdGravity:o,birdY:a,pipes:p=p.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,c++),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})})),score:c}},render:function(e){var t=e.state,n=e.device,i=n.size;return[a.b.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),p({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return c({id:"pipe-"+t,pipe:e,x:e.x})})),[a.b.text({text:"Score: "+t.score,color:"white",x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80,align:"left"})])}});function u(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function g(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var m=Object(a.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||d(n)&&n.keysJustPressed[" "])&&t.start(),[a.b.text({text:d(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100}),a.b.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",y:150})]}}),f=Object(a.a)({init:function(e){var t=e.device.storage.getStore();return{view:"menu",attempt:0,highScore:Number(t.highScore||"0")}},render:function(e){var t=e.state,n=e.updateState,i=e.device,r="menu"===t.view;return[l({id:"level-"+t.attempt,paused:r,gameOver:function(e){n((function(t){var n=t.highScore;return e>n&&(n=e,i.storage.setStore({highScore:String(n)})),Object.assign(Object.assign({},t),{},{view:"menu",highScore:n})}))}}),r?m({id:"menu",highScore:t.highScore,start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level",attempt:e.attempt+1})}))}}):null]}}),b={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},v=n(146);t.default=function(){return r.a.createElement(o.a,{part:19,MDXContent:v.default,codesTs:[{file:"level.ts",code:'import { makeSprite, t, Device, DeviceSize } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, PipeT, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n  gameOver: (score: number) => void;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n  score: number;\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      device.audio("/audio/boop.wav").play();\n      props.gameOver(state.score);\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY: number, size: DeviceSize, pipes: PipeT[]) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(\n  point: { x: number; y: number },\n  rect: { x: number; y: number; height: number; width: number }\n) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[63]},{file:"web/index.ts",code:'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst loadingTextures = [\n  t.text({\n    color: "black",\n    text: "Loading...",\n  }),\n];\n\nrenderCanvas(Game(gameProps), loadingTextures, {\n  imageFileNames: ["bird.png"],\n  audioFileNames: ["boop.wav"],\n});\n',highlight:[14]}],codesJs:[{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      device.audio("/audio/boop.wav").play();\n      props.gameOver(state.score);\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY, size, pipes) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(point, rect) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[49]},{file:"web/index.js",code:'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst loadingTextures = [\n  t.text({\n    color: "black",\n    text: "Loading...",\n  }),\n];\n\nrenderCanvas(Game(gameProps), loadingTextures, {\n  imageFileNames: ["bird.png"],\n  audioFileNames: ["boop.wav"],\n});\n',highlight:[14]}],Game:f,gameProps:b,assets:{imageFileNames:["/img/bird.png"],audioFileNames:["/audio/boop.wav"]}})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(219);const r={text:e=>({type:"text",props:{testId:e.testId,...Object(i.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color}}),textInput:e=>{var t;return{type:"textInput",props:{testId:e.testId,...Object(i.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color,onChangeText:e.onChangeText,numberOfLines:null!==(t=e.numberOfLines)&&void 0!==t?t:1,width:e.width}}},circle:e=>({type:"circle",props:{testId:e.testId,...Object(i.a)(e),radius:e.radius,color:e.color}}),rectangle:e=>({type:"rectangle",props:{testId:e.testId,...Object(i.a)(e),width:e.width,height:e.height,color:e.color}}),line:e=>{var t;return{type:"line",props:{testId:e.testId,...Object(i.a)(e),color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path}}},image:e=>({type:"image",props:{testId:e.testId,...Object(i.a)(e),fileName:e.fileName,width:e.width,height:e.height}}),spriteSheet:e=>({type:"spriteSheet",props:{testId:e.testId,...Object(i.a)(e),fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height}})};function o(e){return t=>({type:"custom",spriteObj:e,props:t})}},219:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return i}))},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var i=n(0),r=n.n(i),o=n(225),a=n(222),s=n(232),p=n(1),d=(n(227),n(228),n(80),n(233),n(226),n(78),n(234),n(79),n(229),n(231)),c=n(230),h=n(224),l=n(223),u=n(221),g=n.n(u),m=n(132),f=n.n(m);function b(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(h.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(l.a,{value:"js"},r.a.createElement(v,{lang:"js",codes:n})),r.a.createElement(l.a,{value:"ts"},r.a.createElement(v,{lang:"ts",codes:t})))}function v(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(i.useState)(o[0]),s=a[0],p=a[1],d=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return r.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:d.file,lang:t,code:d.code,highlight:d.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(d.a,Object(p.a)({},d.b,{theme:c.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:f.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:g()(t,f.a.codeBlock)},r.a.createElement("div",{className:f.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);var w=n(219);function x(e,t,n,i,r,o,a,s){const p=Object(w.a)(t);p.opacity*=s;const d=e=>{const t=i(e);return function(e){const t=e.x,n=e.y,i=Math.PI/180,r=-(e.rotation||0)*i;return({x:i,y:o})=>{const a=(i-t)*Math.cos(r)+(o-n)*Math.sin(r),s=-(i-t)*Math.sin(r)+(o-n)*Math.cos(r),p=e.x+(a-e.x)/e.scaleX,d=e.y+(s-e.y)/e.scaleY;return{x:p+e.anchorX,y:d+e.anchorY}}}(p)(t)},c=n(d),h=e.getSprites(t,c,r,o,a),l=[],u=h.filter(j).map(t=>{if("custom"===t.type){l.push(t.props.id);let i=!1;return e.childContainers[t.props.id]||(i=!0,e.childContainers[t.props.id]=P(t,c,e.prevTime)),x(e.childContainers[t.props.id],t.props,n,d,i,o,a,p.opacity)}return t});return Object.keys(e.childContainers).forEach(t=>{l.includes(t)||delete e.childContainers[t]}),{id:t.id,baseProps:p,textures:u}}function P(e,t,n){const{spriteObj:i,props:r}=e,o=[],a=e=>{o.push(e)};let s;return i.init&&(s=i.init({props:r,device:t,updateState:a})),{state:s,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,r,s){const p=s-this.prevTime;this.prevTime=s,this.currentLag+=p;let d=0;const c=()=>{this.state=o.reduce((e,t)=>t(e),this.state),o.length=0};if(c(),!n&&i.loop){for(;this.currentLag>=1/60*1e3;)this.state=i.loop({props:e,state:this.state,device:t,updateState:a}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}c();let h=i[r];h||(h="renderPXL"===r&&i.renderXL?i.renderXL:i.render);const l=h({props:e,state:this.state,device:t,updateState:a,extrapolateFactor:d});return c(),l}}}function E(e,t){const n=e.deviceHeight>e.deviceWidth;let i,r=!1;return"portrait"in t?(i=n?t.portrait:t.landscape,r=!0):i=t,i.minHeightXL&&e.deviceHeight>=i.minHeightXL||i.minWidthXL&&e.deviceWidth>=i.minWidthXL?r&&n?"renderPXL":"renderXL":r&&n?"renderP":"render"}function j(e){return null!==e}let L={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function M(e){return function(e,t){const n=e(t.pointer);return{...t,pointer:{...t.pointer,x:n.x,y:n.y}}}(e,L)}function z(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),L.keysDown[e.key]=!0,L.keysJustPressed[e.key]=!0}function S(e){delete L.keysDown[e.key]}function k(){L.pointer.justPressed=!1,L.pointer.pressed=!1}function O(e,{width:t,height:n,widthMargin:i,heightMargin:r,deviceWidth:o,deviceHeight:a},s,p){e.save();const d=Math.min(o/t,a/n),c=t+2*i,h=n+2*r;return e.translate(o/2,a/2),e.scale(d,d),{scale:d,render:t=>{e.clearRect(-o/2/d,-a/2/d,o/d,a/d),e.fillStyle="white",e.fillRect(-c/2,-h/2,c,h),function e(t,n,i,r){const{baseProps:o,textures:a}=t;n.save(),Y(n,o),a.forEach(t=>{if("type"in t){const e=W(n);return n.save(),Y(n,t.props,o.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":const r=n[e.props.fileName];if(!r)throw Error(`Cannot find image file "${e.props.fileName}"`);return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,e,i,r),void n.restore()}e(t,n,i,r)}),n.restore()}(t,e,s,p)}}}const T=Math.PI/180,Y=(e,t,n=1)=>{const{x:i,y:r,rotation:o,scaleX:a,scaleY:s,anchorX:p,anchorY:d,opacity:c}=t;e.translate(i,-r),e.rotate(o*T),e.scale(a,s),e.translate(-p,d),e.globalAlpha=c*n},W=e=>({circle(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line(t,n,i){if(t.length<2)return;const[[r,o],...a]=t;e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(r,-o),a.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke()},text(t,n,i,r){const o=`${t.size}px ${t.name}`;e.font=o,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet(t,n,i,r,o,a){const s=t.width/n,p=t.height/i,d=r%n,c=Math.floor(r/n)%i;e.drawImage(t,d*s,c*p,s,p,-o/2,-a/2,o,a)}});let X;function I(e,t,n,i){let r;if("portrait"in i){r=t>e?i.portrait:i.landscape}else r=i;const{width:o,height:a,maxWidthMargin:s=0,maxHeightMargin:p=0}=r;if("game-coords"===n)return{width:o,height:a,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:a};const d=o/a;if(d>e/t){const n=e,i=n/d,r=i/a*p,s=Math.min(t,i+2*r);return{width:o,height:a,widthMargin:0,heightMargin:(s-i)/2*(a/i),deviceWidth:n,deviceHeight:s}}{const n=t,i=n*d,r=i/o*s,p=Math.min(e,i+2*r);return{width:o,height:a,widthMargin:(p-i)/2*(o/i),heightMargin:0,deviceWidth:p,deviceHeight:n}}}const C={name:"sans-serif",size:12};function H(e,t=[],n={},i="game-coords",r,o){var a;const s=r||document.createElement("canvas");r||document.body.appendChild(s);const p=s.getContext("2d",{alpha:!1});let d=!0;let c,h,l,u,g;function m(t){if(c&&(p.restore(),document.removeEventListener("pointerdown",h),document.removeEventListener("pointermove",l),document.removeEventListener("pointerup",u),document.removeEventListener("pointerout",k),!0===t))return;const n=function(e,t,n,i){const r=I(e,t,n,i);return X=r,r}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const r=e.props.defaultFont||C,a=O(p,n,b,r);g=a.scale,y.ref=a.render;const m=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:i})=>r=>(r.clientX-e)/n-t-i/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:g}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:i})=>r=>-(r.clientY-e)/n+t+i/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:g}),v=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin;h=e=>{const t=m(e),n=f(e);v(t,n)?d=!1:(d=!0,function(e,t){L.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},l=e=>{const t=m(e),n=f(e);v(t,n)||function(e,t){L.pointer.x=e,L.pointer.y=t}(t,n)},u=e=>{const t=m(e),n=f(e);v(t,n)?k():function(e,t){L.pointer.justPressed=!1,L.pointer.pressed=!1,L.pointer.justReleased=!0,L.pointer.x=e,L.pointer.y=t}(t,n)},document.addEventListener("pointerdown",h,!1),document.addEventListener("pointermove",l,!1),document.addEventListener("pointerup",u,!1),document.addEventListener("pointerout",k,!1),c=n}document.addEventListener("keydown",e=>{d&&z(e)},!1),document.addEventListener("keyup",e=>{d&&S(e)},!1),window.addEventListener("resize",m,!1);const f={},b={},v={getGetDevice:G(f,I((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size))},y={ref:null};m();let j=!1;return null===(a=y.ref)||void 0===a||a.call(y,{id:"Loading",baseProps:Object(w.a)({}),textures:t}),{cleanup:function(){s.width=s.width,r||document.body.removeChild(s),j=!0,document.removeEventListener("keydown",z,!1),document.removeEventListener("keyup",S,!1),window.removeEventListener("resize",m,!1),m(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{b[t]=new Image,e.push(new Promise((e,n)=>{b[t].addEventListener("load",e),b[t].addEventListener("error",n),b[t].src=t}))}),await Promise.all(e)})().then(()=>{const t=()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("pointerdown",t,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);const{initTextures:n,getNextFrameTextures:i}=function(e,t,n){const i=t||game.Game(game.gameProps),r=({x:e,y:t})=>({x:e,y:t}),o=e.getGetDevice(),a=o(r),s=P(i,o(r),0),p=n||i.props.size,d=E(a.size,p);return{initTextures:x(s,i.props,o,r,!0,d,0,1),getNextFrameTextures(t){const n=e.getGetDevice(),o=E(n(r).size,p);return x(s,i.props,n,r,!1,o,t,1)}}}(v,e);let r=null;!function e(t){var n;null===(n=y.ref)||void 0===n||n.call(y,t),window.requestAnimationFrame(t=>{j||(null===r&&(r=t-1/60),e(i(t-r)),L={keysDown:L.keysDown,keysJustPressed:{},pointer:{...L.pointer,justPressed:!1,justReleased:!1}})})}(n)}),audioElements:f}}function G(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:X||t,now:()=>new Date};return t=>({...e,inputs:M(t)})}}var B=n(217);function N(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],o=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(i.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),p=s[0],d=s[1],c=Object(i.useState)(0),h=c[0],l=c[1],u=0,g=0,m=0;if(p&&p.height&&p.width){p.width/p.height>375/667?(g=p.height*(667/900),u=g*(375/667)):(u=p.width*(375/460),g=u/(375/667));var b=n.size.maxHeightMargin?0:.08*g;m=(p.height-g)/2+b}return Object(i.useEffect)((function(){if(u&&g){var e=document.getElementById("myCanvas"),i=H(t(n),[B.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:u,height:g}).cleanup;return function(){i()}}}),[u,g,h]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:d,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&r.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:u,height:g}))}function R(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,d=e.Game,c=e.gameProps,h=e.image,l=e.isEnd,u=e.assets,g=i&&p,m=d&&c?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(N,{Game:d,gameProps:c,showReload:g,assets:u})})):r.a.createElement("div",null,r.a.createElement("img",{src:h}));return r.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),l?r.a.createElement("div",null):r.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),g?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(b,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},236:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}n.d(t,"a",(function(){return r}))}}]);