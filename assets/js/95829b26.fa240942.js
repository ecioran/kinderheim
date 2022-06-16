"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[63551],{3905:function(t,e,i){i.d(e,{Zo:function(){return c},kt:function(){return h}});var a=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var p=a.createContext({}),l=function(t){var e=a.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},c=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),u=l(i),h=n,f=u["".concat(p,".").concat(h)]||u[h]||s[h]||r;return i?a.createElement(f,o(o({ref:e},c),{},{components:i})):a.createElement(f,o({ref:e},c))}));function h(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,o=new Array(r);o[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,o[1]=m;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},56052:function(t,e,i){i.r(e),i.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return s}});var a=i(87462),n=i(63366),r=(i(67294),i(3905)),o=["components"],m={title:"Mathematical optimization"},p="[Mathematical optimization](https://en.wikipedia.org/wiki/Convex_optimization)",l={unversionedId:"math/mathematical-optimization/mathematical-optimization",id:"math/mathematical-optimization/mathematical-optimization",title:"Mathematical optimization",description:"Links",source:"@site/docs/math/mathematical-optimization/mathematical-optimization.md",sourceDirName:"math/mathematical-optimization",slug:"/math/mathematical-optimization/",permalink:"/kinderheim/math/mathematical-optimization/",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/math/mathematical-optimization/mathematical-optimization.md",tags:[],version:"current",frontMatter:{title:"Mathematical optimization"},sidebar:"tutorialSidebar",previous:{title:"Satisfiability modulo theories",permalink:"/kinderheim/math/logic/satisfiability-modulo-theories"},next:{title:"Combinatorial optimization",permalink:"/kinderheim/math/mathematical-optimization/combinatorial-optimization"}},c={},s=[{value:"Links",id:"links",level:2}],u={toc:s};function h(t){var e=t.components,i=(0,n.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mathematical-optimization"},(0,r.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/Convex_optimization"},"Mathematical optimization")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://stanford.edu/~boyd/cvxbook/"},"Convex Optimization \u2013 Boyd and Vandenberghe book")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://web.stanford.edu/class/ee364a/"},"Convex Optimization I course")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://koaning.io/posts/more-descent-less-gradient/"},"More Descent, Less Gradient (2020)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23004026"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fmfn/BayesianOptimization"},"Bayesian Optimization")," - Pure Python implementation of bayesian global optimization with gaussian processes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://distill.pub/2020/bayesian-optimization/"},"Exploring Bayesian Optimization (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://stoke.stanford.edu/"},"STOKE")," - Stochastic superoptimizer and program synthesizer. (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23331674"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/david-m-rosen/SE-Sync"},"SE-Sync")," - Implementation of the SE-Sync algorithm for synchronization over the special Euclidean group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www3.imperial.ac.uk/pls/portallive/docs/1/7288263.PDF"},"Optimization: An Introduction (2006)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=18800902"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MichielStock/STMO"},"Selected Topics in Mathematical Optimization, now in Julia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27719928"},"Ask HN: Literature for mathematical optimization? (2021)"))))}h.isMDXComponent=!0}}]);