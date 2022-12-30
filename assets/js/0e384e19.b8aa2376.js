"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Welcome",s={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to this course on prompt engineering!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/docs/category/-basics"}},l={},p=[{value:"The single most important part of this course is your feedback!",id:"the-single-most-important-part-of-this-course-is-your-feedback",level:2},{value:"Course philosophy",id:"course-philosophy",level:2},{value:"How to read",id:"how-to-read",level:2},{value:"Chapters",id:"chapters",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to this course on prompt engineering! "),(0,o.kt)("p",null,"I like to think of prompt engineering (PE) as: ",(0,o.kt)("strong",{parentName:"p"},"How to talk to AI to get it to do what you want"),". "),(0,o.kt)("p",null,"With many of the recent advances in artificial intelligence (AI),\nthis has become a particularly important skill.\nThis course focuses on applied PE techniques. Minimal knowledge of\nmachine learning is expected. If you have no idea what any of this stuff means, read the Introduction in Basics."),(0,o.kt)("h2",{id:"the-single-most-important-part-of-this-course-is-your-feedback"},"The single most important part of this course is your feedback!"),(0,o.kt)("p",null,"If you have any questions, comments, or suggestions, please make an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue")),", email me at ",(0,o.kt)("a",{parentName:"p",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com"),", or reach out over ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/discord"},"Discord"),"/",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/learn_prompting"},"Twitter"),"."),(0,o.kt)("p",null,"Even the smallest amount of feedback is very helpful!"),(0,o.kt)("h2",{id:"course-philosophy"},"Course philosophy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quick Iterations")," - Since new PE content is published almost daily,\nI will update this course frequently with short articles about new techniques.\nLet me know what you want to hear more about!"),(0,o.kt)("p",null,"Part of this philosophy is ",(0,o.kt)("strong",{parentName:"p"},"error iteration"),". If you ever see something that you\ndon't quite understand, even something small, that's on me. ",(0,o.kt)("strong",{parentName:"p"},"Please make an ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue")),"!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Focus on Practicality")," - I will focus on applied, practical techniques that you can use\nimmediately for your applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples ASAP")," - I try to put examples in the articles as soon as possible,\nso you can get a feel for the techniques as soon as possible."),(0,o.kt)("p",null,"I'll philosophize more about this when I have time \ud83d\ude0a"),(0,o.kt)("h2",{id:"how-to-read"},"How to read"),(0,o.kt)("p",null,"It is not necessary to read all chapters in order. Read what interests you!"),(0,o.kt)("p",null,"If you are a complete novice, read below then start with the Basics section.\nIf not, starting with the Intermediate section may be more useful."),(0,o.kt)("p",null,"Articles are rated by difficulty, and are labeled with the following:"),(0,o.kt)("p",null,"\ud83d\udfe2 Very easy; no programming required"),(0,o.kt)("p",null,"\ud83d\udfe1 Easy; simple programming required, but no domain expertise"),(0,o.kt)("p",null,"\ud83d\udd34 Medium; programming required, and some domain expertise to implement (e.g. computing log probs)"),(0,o.kt)("p",null,"\ud83d\udfe3 Hard; programming required, and robust domain expertise to implement (e.g. reinforcement learning approaches)"),(0,o.kt)("p",null,"Note: even though for \ud83d\udd34\ud83d\udfe3 problems domain expertise is helpful, usually you will still\nbe able to understand the article."),(0,o.kt)("h2",{id:"chapters"},"Chapters"),(0,o.kt)("p",null,"Here is a quick summary of each chapter:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basics"),": Intro to PE and simple PE techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Intermediate"),": Slightly more complicated PE techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advanced Applications"),": Some very powerful, but more advanced applications of PE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Applied Prompting"),": Some complete walkthroughs of the PE process written by community members"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reliability"),": How to make LLMs more reliable"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Images"),": PE for text to image models like DALLE and Stable Diffusion!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Injection"),": Hacking, but for PE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompting IDEs"),": Different PE tools"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Tuning"),": Fine tune prompts with gradients"))}c.isMDXComponent=!0}}]);