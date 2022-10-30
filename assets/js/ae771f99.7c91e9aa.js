"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"main/hooks/useDexEthPrice",id:"main/hooks/useDexEthPrice",title:"useDexEthPrice",description:"Get the Uniswap exchange price of ETH/USD (extrapolated from WETH/DAI).",source:"@site/docs/main/hooks/useDexEthPrice.mdx",sourceDirName:"main/hooks",slug:"/main/hooks/useDexEthPrice",permalink:"/eth-ui/docs/main/hooks/useDexEthPrice",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/hooks/useDexEthPrice.mdx",tags:[],version:"current",frontMatter:{},sidebar:"overview",previous:{title:"useContractReaderUntyped",permalink:"/eth-ui/docs/main/hooks/useContractReaderUntyped"},next:{title:"useDexTokenList",permalink:"/eth-ui/docs/main/hooks/useDexTokenList"}},s={},u=[{value:"How to import",id:"how-to-import",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"To learn more",id:"to-learn-more",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get the Uniswap exchange price of ETH/USD (extrapolated from WETH/DAI)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the price in USD.")),(0,n.kt)("h2",{id:"how-to-import"},"How to import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useDexEthPrice } from 'eth-hooks';\n")),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"To get started:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const price = useDexEthPrice(mainnetProvider, targetNetworkInfo?, options?): THookResult<number>;\n")),(0,n.kt)("h2",{id:"to-learn-more"},"To learn more"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../../api/modules/Hooks#usedexethprice"},"Go here for this hooks full API documentation"),"."))}p.isMDXComponent=!0}}]);