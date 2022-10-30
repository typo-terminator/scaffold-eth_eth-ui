/*! For license information please see 5203.7bde1100.js.LICENSE.txt */
(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5203],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1841:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(7294)),a=r(n(5665)),s=r(n(814));e.exports=(s.default,e=>e.reference?o.default.createElement(a.default,{...e}):o.default.createElement(s.default,{...e}))},5665:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseReference=void 0;const i=n(8575),l=a(n(7294)),c=s(n(814)),u={code:"loading...",error:null,loading:null},h={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function p(e){const t=e.slice(e.indexOf("https"),-1),[n,r]=t.split("#"),o=globalThis||{};o.URL||(o.URL=i.URL);const[a,s,l,c,...u]=new o.URL(n).pathname.split("/").slice(1),[h,p]=r?r.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${a}/${s}/${c}/${u.join("/")}`,fromLine:h,toLine:p,title:u.join("/")}}function m(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=p,t.codeReducer=m,t.default=function(e){var t,n,r;const[o,a]=l.useReducer(m,u),s=p(e.children);!1!==o.loading&&async function({url:e,fromLine:t,toLine:n},r){let o;try{o=await fetch(e)}catch(i){return r({type:"error",value:i})}if(200!==o.status)return r({type:"error",value:await o.text()});const a=(await o.text()).split("\n").slice(t,(n||t)+1),s=a.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);r({type:"loaded",value:a.map((e=>e.slice(s))).join("\n")})}(s,a);const i=null===(t=e.metastring)||void 0===t?void 0:t.match(/title="(?<title>.*)"/),d={...e,metastring:(null===(n=null==i?void 0:i.groups)||void 0===n?void 0:n.title)?` title="${null===(r=null==i?void 0:i.groups)||void 0===r?void 0:r.title}"`:` title="${s.title}"`,children:u.code};return l.default.createElement("div",null,l.default.createElement(c.default,{...d},o.code),l.default.createElement("div",{style:h},l.default.createElement("a",{href:e.children,target:"_blank"},"See full example on GitHub")))}},814:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>W});var r=n(7462),o=n(7294),a=n(2389),s=n(6010),i=n(2949),l=n(6668);function c(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(5281),h=n(7594),p=n.n(h);const m=/title=(?<quote>["'])(?<title>.*?)\1/,d=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:r}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&d.test(a)){const e=a.match(d).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(f),t)}}(r,o),i=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<i.length;){const e=i[p].match(s);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?l[c[t]].range+=`${p},`:u[t]?l[u[t]].start=p:h[t]&&(l[h[t]].range+=`${l[h[t]].start}-${p-1},`),i.splice(p,1)}n=i.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const y="codeBlockContainer_Ckt0";function b(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(c());return o.createElement(t,(0,r.Z)({},n,{style:a,className:(0,s.Z)(n.className,y,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return o.createElement(b,{as:"pre",tabIndex:0,className:(0,s.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:E.codeBlockLines},t))}var C=n(902);const j={attributes:!0,characterData:!0,childList:!0,subtree:!0};function N(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=j);const r=(0,C.zX)(t),a=(0,C.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var O={Prism:n(7410).Z,theme:w};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var T=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},_=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=B({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=B({},n,{backgroundColor:null}),o};function Z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const S=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=B({},Z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?B({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),x(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),x(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=B({},Z(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?B({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),x(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=r[s]++)<o[s];){var c=void 0,u=t[s],h=n[s][a];if("string"==typeof h?(u=s>0?u:["plain"],c=h):(u=_(u,h.type),h.alias&&(u=_(u,h.alias)),c=h.content),"string"==typeof c){var p=c.split(T),m=p.length;i.push({types:u,content:p[0]});for(var d=1;d<m;d++)L(i),l.push(i=[]),i.push({types:u,content:p[d]})}else s++,t.push(u),n.push(c),r.push(0),o.push(c.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return L(i),l}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),I="codeLine_lJS_",P="codeLineNumber_Tfdd",R="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:i,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=i({line:t,className:(0,s.Z)(n,a&&I)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))));return o.createElement("span",c,a?o.createElement(o.Fragment,null,o.createElement("span",{className:P}),o.createElement("span",{className:R},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var M=n(5999);const D={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),i=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let s=!1;a.rangeCount>0&&(s=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),s&&(a.removeAllRanges(),a.addRange(s)),o&&o.focus()}(t),a(!0),i.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,D.copyButton,r&&D.copyButtonCopied),onClick:l},o.createElement("span",{className:D.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:D.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:D.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const q="wordWrapButtonIcon_Bwma",H="wordWrapButtonEnabled_EoeP";function U(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&H),"aria-label":a,title:a},o.createElement("svg",{className:q,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function V(e){let{children:t,className:n="",metastring:a,title:i,showLineNumbers:u,language:h}=e;const{prism:{defaultLanguage:p,magicComments:d}}=(0,l.L)(),f=h??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??p,g=c(),y=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),s=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return N(a,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:s}}(),k=function(e){var t;return(null==e||null==(t=e.match(m))?void 0:t.groups.title)??""}(a)||i,{lineClassNames:C,code:j}=v(t,{metastring:a,language:f,magicComments:d}),w=u??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(a);return o.createElement(b,{as:"div",className:(0,s.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},k&&o.createElement("div",{className:E.codeBlockTitle},k),o.createElement("div",{className:E.codeBlockContent},o.createElement(S,(0,r.Z)({},O,{theme:g,code:j,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,s.Z)(t,E.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,s.Z)(E.codeBlockLines,w&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(z,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:C[t],showLineNumbers:w})))))})),o.createElement("div",{className:E.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&o.createElement(U,{className:E.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),o.createElement($,{className:E.codeButton,code:j}))))}function W(e){let{children:t,...n}=e;const s=(0,a.Z)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?V:k;return o.createElement(l,(0,r.Z)({key:String(s)},n),i)}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7462),o=n(7294),a=n(6010),s=n(5999),i=n(6668);const l="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:h}}=(0,i.L)();return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",h?c:l),id:n}),u.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},u,{id:void 0}))}},5203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(7294),o=n(3905),a=n(7462),s=n(5742);var i=n(1841),l=n.n(i);var c=n(9960);var u=n(6010),h=n(2389),p=n(6043);const m="details_lb9f",d="isBrowser_bmU9",f="collapsibleContent_i85q";function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function v(e,t){return!!e&&(e===t||v(e.parentElement,t))}function y(e){let{summary:t,children:n,...o}=e;const s=(0,h.Z)(),i=(0,r.useRef)(null),{collapsed:l,setCollapsed:c}=(0,p.u)({initialState:!o.open}),[y,b]=(0,r.useState)(o.open);return r.createElement("details",(0,a.Z)({},o,{ref:i,open:y,"data-collapsed":l,className:(0,u.Z)(m,s&&d,o.className),onMouseDown:e=>{g(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;g(t)&&v(t,i.current)&&(e.preventDefault(),l?(c(!1),b(!0)):c(!0))}}),t??r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),b(!e)}},r.createElement("div",{className:f},n)))}const b="details_b_Ee";function E(e){let{...t}=e;return r.createElement(y,(0,a.Z)({},t,{className:(0,u.Z)("alert alert--info",b,t.className)}))}var k=n(2503);function C(e){return r.createElement(k.Z,e)}const j="containsTaskList_mC6p";const N="img_ev3q";var w=n(5281),O=n(5999);const x="admonition_LlT9",B="admonitionHeading_tbUL",T="admonitionIcon_kALy",L="admonitionContent_S0QG";const _={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(O.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(O.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(O.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(O.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(O.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},A={secondary:"note",important:"info",success:"tip",warning:"danger"};function Z(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const S={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(s.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(l(),e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var t;return r.createElement(l(),(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(E,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&j))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,N))}));var t},h1:e=>r.createElement(C,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(C,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(C,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(C,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(C,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(C,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=Z(e),s=function(e){const t=A[e]??e;return _[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),_.info)}(n),i=o??s.label,{iconComponent:l}=s,c=a??r.createElement(l,null);return r.createElement("div",{className:(0,u.Z)(w.k.common.admonition,w.k.common.admonitionType(e.type),"alert",`alert--${s.infimaClassName}`,x)},r.createElement("div",{className:B},r.createElement("span",{className:T},c),i),r.createElement("div",{className:L},t))}};function I(e){let{children:t}=e;return r.createElement(o.Zo,{components:S},t)}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},2587:e=>{"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,n,r,o){n=n||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(n);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var l=e.length;i>0&&l>i&&(l=i);for(var c=0;c<l;++c){var u,h,p,m,d=e[c].replace(s,"%20"),f=d.indexOf(r);f>=0?(u=d.substr(0,f),h=d.substr(f+1)):(u=d,h=""),p=decodeURIComponent(u),m=decodeURIComponent(h),t(a,p)?Array.isArray(a[p])?a[p].push(m):a[p]=[a[p],m]:a[p]=m}return a}},2361:e=>{"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,n,r,o){return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(o){var a=encodeURIComponent(t(o))+r;return Array.isArray(e[o])?e[o].map((function(e){return a+encodeURIComponent(t(e))})).join(n):a+encodeURIComponent(t(e[o]))})).join(n):o?encodeURIComponent(t(o))+r+encodeURIComponent(t(e)):""}},7673:(e,t,n)=>{"use strict";t.decode=t.parse=n(2587),t.encode=t.stringify=n(2361)},2511:function(e,t,n){var r;e=n.nmd(e),function(o){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof n.g&&n.g;a.global!==a&&a.window!==a&&a.self;var s,i=2147483647,l=36,c=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,d=String.fromCharCode;function f(e){throw RangeError(p[e])}function g(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function v(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+g((e=e.replace(h,".")).split("."),t).join(".")}function y(e){for(var t,n,r=[],o=0,a=e.length;o<a;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<a?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function b(e){return g(e,(function(e){var t="";return e>65535&&(t+=d((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=d(e)})).join("")}function E(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,n){var r=0;for(e=n?m(e/700):e>>1,e+=m(e/t);e>455;r+=l)e=m(e/35);return m(r+36*e/(e+38))}function C(e){var t,n,r,o,a,s,c,u,h,p,d,g=[],v=e.length,y=0,E=128,C=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&f("not-basic"),g.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<v;){for(a=y,s=1,c=l;o>=v&&f("invalid-input"),((u=(d=e.charCodeAt(o++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:l)>=l||u>m((i-y)/s))&&f("overflow"),y+=u*s,!(u<(h=c<=C?1:c>=C+26?26:c-C));c+=l)s>m(i/(p=l-h))&&f("overflow"),s*=p;C=k(y-a,t=g.length+1,0==a),m(y/t)>i-E&&f("overflow"),E+=m(y/t),y%=t,g.splice(y++,0,E)}return b(g)}function j(e){var t,n,r,o,a,s,c,u,h,p,g,v,b,C,j,N=[];for(v=(e=y(e)).length,t=128,n=0,a=72,s=0;s<v;++s)(g=e[s])<128&&N.push(d(g));for(r=o=N.length,o&&N.push("-");r<v;){for(c=i,s=0;s<v;++s)(g=e[s])>=t&&g<c&&(c=g);for(c-t>m((i-n)/(b=r+1))&&f("overflow"),n+=(c-t)*b,t=c,s=0;s<v;++s)if((g=e[s])<t&&++n>i&&f("overflow"),g==t){for(u=n,h=l;!(u<(p=h<=a?1:h>=a+26?26:h-a));h+=l)j=u-p,C=l-p,N.push(d(E(p+j%C,0))),u=m(j/C);N.push(d(E(u,0))),a=k(n,b,r==o),n=0,++r}++n,++t}return N.join("")}s={version:"1.3.2",ucs2:{decode:y,encode:b},decode:C,encode:j,toASCII:function(e){return v(e,(function(e){return u.test(e)?"xn--"+j(e):e}))},toUnicode:function(e){return v(e,(function(e){return c.test(e)?C(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}()},8575:(e,t,n)=>{"use strict";var r=n(2511),o=n(2502);function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=b(e));return e instanceof a?e.format():a.prototype.format.call(e)},t.Url=a;var s=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),h=["%","/","?",";","#"].concat(u),p=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=n(7673);function b(e,t,n){if(e&&o.isObject(e)&&e instanceof a)return e;var r=new a;return r.parse(e,t,n),r}a.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a=e.indexOf("?"),i=-1!==a&&a<e.indexOf("#")?"?":"#",c=e.split(i);c[0]=c[0].replace(/\\/g,"/");var b=e=c.join(i);if(b=b.trim(),!n&&1===e.split("#").length){var E=l.exec(b);if(E)return this.path=b,this.href=b,this.pathname=E[1],E[2]?(this.search=E[2],this.query=t?y.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var k=s.exec(b);if(k){var C=(k=k[0]).toLowerCase();this.protocol=C,b=b.substr(k.length)}if(n||k||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var j="//"===b.substr(0,2);!j||k&&g[k]||(b=b.substr(2),this.slashes=!0)}if(!g[k]&&(j||k&&!v[k])){for(var N,w,O=-1,x=0;x<p.length;x++){-1!==(B=b.indexOf(p[x]))&&(-1===O||B<O)&&(O=B)}-1!==(w=-1===O?b.lastIndexOf("@"):b.lastIndexOf("@",O))&&(N=b.slice(0,w),b=b.slice(w+1),this.auth=decodeURIComponent(N)),O=-1;for(x=0;x<h.length;x++){var B;-1!==(B=b.indexOf(h[x]))&&(-1===O||B<O)&&(O=B)}-1===O&&(O=b.length),this.host=b.slice(0,O),b=b.slice(O),this.parseHost(),this.hostname=this.hostname||"";var T="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!T)for(var L=this.hostname.split(/\./),_=(x=0,L.length);x<_;x++){var A=L[x];if(A&&!A.match(m)){for(var Z="",S=0,I=A.length;S<I;S++)A.charCodeAt(S)>127?Z+="x":Z+=A[S];if(!Z.match(m)){var P=L.slice(0,x),R=L.slice(x+1),z=A.match(d);z&&(P.push(z[1]),R.unshift(z[2])),R.length&&(b="/"+R.join(".")+b),this.hostname=P.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),T||(this.hostname=r.toASCII(this.hostname));var M=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+M,this.href+=this.host,T&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!f[C])for(x=0,_=u.length;x<_;x++){var $=u[x];if(-1!==b.indexOf($)){var q=encodeURIComponent($);q===$&&(q=escape($)),b=b.split($).join(q)}}var H=b.indexOf("#");-1!==H&&(this.hash=b.substr(H),b=b.slice(0,H));var U=b.indexOf("?");if(-1!==U?(this.search=b.substr(U),this.query=b.substr(U+1),t&&(this.query=y.parse(this.query)),b=b.slice(0,U)):t&&(this.search="",this.query={}),b&&(this.pathname=b),v[C]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){M=this.pathname||"";var V=this.search||"";this.path=M+V}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",a=!1,s="";this.host?a=e+this.host:this.hostname&&(a=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=y.stringify(this.query));var i=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==a?(a="//"+(a||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):a||(a=""),r&&"#"!==r.charAt(0)&&(r="#"+r),i&&"?"!==i.charAt(0)&&(i="?"+i),t+a+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+r},a.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(o.isString(e)){var t=new a;t.parse(e,!1,!0),e=t}for(var n=new a,r=Object.keys(this),s=0;s<r.length;s++){var i=r[s];n[i]=this[i]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var u=l[c];"protocol"!==u&&(n[u]=e[u])}return v[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!v[e.protocol]){for(var h=Object.keys(e),p=0;p<h.length;p++){var m=h[p];n[m]=e[m]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||g[e.protocol])n.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var f=n.pathname||"",y=n.search||"";n.path=f+y}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),E=e.host||e.pathname&&"/"===e.pathname.charAt(0),k=E||b||n.host&&e.pathname,C=k,j=n.pathname&&n.pathname.split("/")||[],N=(d=e.pathname&&e.pathname.split("/")||[],n.protocol&&!v[n.protocol]);if(N&&(n.hostname="",n.port=null,n.host&&(""===j[0]?j[0]=n.host:j.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),k=k&&(""===d[0]||""===j[0])),E)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,j=d;else if(d.length)j||(j=[]),j.pop(),j=j.concat(d),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(N)n.hostname=n.host=j.shift(),(T=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=T.shift(),n.host=n.hostname=T.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!j.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var w=j.slice(-1)[0],O=(n.host||e.host||j.length>1)&&("."===w||".."===w)||""===w,x=0,B=j.length;B>=0;B--)"."===(w=j[B])?j.splice(B,1):".."===w?(j.splice(B,1),x++):x&&(j.splice(B,1),x--);if(!k&&!C)for(;x--;x)j.unshift("..");!k||""===j[0]||j[0]&&"/"===j[0].charAt(0)||j.unshift(""),O&&"/"!==j.join("/").substr(-1)&&j.push("");var T,L=""===j[0]||j[0]&&"/"===j[0].charAt(0);N&&(n.hostname=n.host=L?"":j.length?j.shift():"",(T=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=T.shift(),n.host=n.hostname=T.shift()));return(k=k||n.host&&j.length)&&!L&&j.unshift(""),j.length?n.pathname=j.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},a.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},2502:e=>{"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}}}]);