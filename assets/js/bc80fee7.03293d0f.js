"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[93852],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),k=i,h=m["".concat(l,".").concat(k)]||m[k]||u[k]||n;return t?a.createElement(h,o(o({ref:r},p),{},{components:t})):a.createElement(h,o({ref:r},p))}));function k(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71511:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(87462),i=t(63366),n=(t(67294),t(3905)),o=["components"],s={title:"Service workers"},l="[Service workers](https://developers.google.com/web/fundamentals/primers/service-workers)",c={unversionedId:"web/service-workers",id:"web/service-workers",title:"Service workers",description:"Links",source:"@site/docs/web/service-workers.md",sourceDirName:"web",slug:"/web/service-workers",permalink:"/kinderheim/web/service-workers",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/web/service-workers.md",tags:[],version:"current",frontMatter:{title:"Service workers"},sidebar:"tutorialSidebar",previous:{title:"Search Engine Optimization",permalink:"/kinderheim/web/seo"},next:{title:"Static sites",permalink:"/kinderheim/web/static-sites/"}},p={},u=[{value:"Links",id:"links",level:2}],m={toc:u};function k(e){var r=e.components,t=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"service-workers"},(0,n.kt)("a",{parentName:"h1",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"Service workers")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/devteam/instant-webpages-and-terabytes-of-data-savings-through-the-magic-of-service-workers-1mkc"},"Instant Webpages and Terabytes of Data Savings Through the Magic of Service Workers (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/"},"Smaller HTML Payloads with Service Workers (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://serviceworke.rs/"},"Service Worker Cookbook")," - Collection of working, practical examples of using service workers in modern web sites. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/serviceworker-cookbook/"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/workbox/"},"Workbox API")," - JavaScript Libraries for adding offline support to web apps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redfin.engineering/how-to-fix-the-refresh-button-when-using-service-workers-a8e27af6df68"},"How to Fix the Refresh Button When Using Service Workers (2017)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dunnock/wasi-worker"},"WASI Worker")," - WASM / WASI interface for browser service workers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebReflection/uhtml-ssr"},"uhtml-ssr")," - Uhtml for Service Worker, Web Worker, NodeJS, and other SSR cases."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cs.uic.edu/~skarami/files/sw21/preprint-sw-ndss21.pdf"},"Stealing web browser history with Service Workers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mizchi/swdev"},"SWDEV")," - No bundle frontend by service-worker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://alistapart.com/article/now-thats-what-i-call-service-worker/"},"Now THAT\u2019S What I Call Service Worker! (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ef4/mho"},"mho")," - Experimental service-worker based build system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tsdotnet/parallel"},"tsdotnet / parallel")," - Utility for automatically partitioning tasks (promises) and executing them in parallel using separate processes or web workers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/softvar/super-workers"},"super-workers")," - Distribute load on front-end via parallelism."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/austinksmith/Hamsters.js"},"Hamsters.js")," - 100% Vanilla Javascript Multithreading & Parallel Execution Library. (",(0,n.kt)("a",{parentName:"li",href:"https://hamsters.io/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nolanlawson/promise-worker"},"promise-worker")," - Promise-based messaging for Web Workers and Service Workers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WICG/sw-launch"},"Service Worker Launch Event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BO9fplbCTuQ"},"Adapting caching to your needs - Unpacking the Workbox (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sdgluck/msgr"},"msgr")," - Makes communication between a client and service worker super easy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/flybayer/status/1473375368761511938"},"Background processing with JS apps tips (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/101arrowz/isoworker"},"isoworker")," - Isomorphic workerization with context in 6kB."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://css-tricks.com/add-a-service-worker-to-your-site/"},"Add a Service Worker to Your Site")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/titoBouzout/ServiceWorkerFullVideoBuffer"},"Full Video Buffer with Service Workers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AnthumChris/fetch-progress-indicators"},"Progress indicators/bars using Streams, Service Workers, and Fetch APIs"))))}k.isMDXComponent=!0}}]);