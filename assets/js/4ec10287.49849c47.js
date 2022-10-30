"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9005],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1445:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"main/hooks/useBurnerSigner",id:"main/hooks/useBurnerSigner",title:"useBurnerSigner",description:"Creates a burner signer/address, and provides ways of interacting with and updating the signer.",source:"@site/docs/main/hooks/useBurnerSigner.mdx",sourceDirName:"main/hooks",slug:"/main/hooks/useBurnerSigner",permalink:"/eth-ui/docs/main/hooks/useBurnerSigner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/hooks/useBurnerSigner.mdx",tags:[],version:"current",frontMatter:{},sidebar:"overview",previous:{title:"useBlockNumberContext",permalink:"/eth-ui/docs/main/hooks/useBlockNumberContext"},next:{title:"useContractExistsAtAddress",permalink:"/eth-ui/docs/main/hooks/useContractExistsAtAddress"}},u={},c=[{value:"How to import",id:"how-to-import",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"To learn more",id:"to-learn-more",level:2}],l={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a burner signer/address, and provides ways of interacting with and updating the signer."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the burner signer/address.")),(0,o.kt)("h2",{id:"how-to-import"},"How to import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useBurnerSigner } from 'eth-hooks';\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"To get started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const burnerSigner = useBurnerSigner(localProvider): TBurnerSigner;\n")),(0,o.kt)("h2",{id:"to-learn-more"},"To learn more"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../api/modules/Hooks#useburnersigner"},"Go here for this hooks full API documentation"),"."))}p.isMDXComponent=!0}}]);