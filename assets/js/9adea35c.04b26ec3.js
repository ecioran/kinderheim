"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[2660],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=i,h=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28830:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={},s="Recursion",u={unversionedId:"programming/recursion",id:"programming/recursion",title:"Recursion",description:"Links",source:"@site/docs/programming/recursion.md",sourceDirName:"programming",slug:"/programming/recursion",permalink:"/kinderheim/programming/recursion",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/recursion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reactive programming",permalink:"/kinderheim/programming/reactive-programming"},next:{title:"Regex",permalink:"/kinderheim/programming/regex/"}},p={},l=[{value:"Links",id:"links",level:2}],m={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recursion"},"Recursion"),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://functional.christmas/2019/18"},"That one time I thought I understood recursion (2019)")," (",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21822977"},"HN"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cs.utexas.edu/users/EWD/ewd08xx/EWD820.PDF"},"On Iteration and Recursion (1982)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=_JtPhF8MshA"},"Tail Recursion Explained (2020)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.solipsys.co.uk/new/ThinkingAboutRecursion.html?tj10hn"},"Thinking About Recursion")," (",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24737724"},"HN"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.solipsys.co.uk/new/RecursionRevisited.html"},"Recursion Revisited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://0xd34df00d.me/posts/2020/09/agda-wf-rec.html"},"Grokking recursion (2020)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://learn.hfm.io/fractals.html"},"Spirals, Snowflakes and Trees: Recursion in Pictures")," (",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25583631"},"HN"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://parentheticallyspeaking.org/articles/how-not-to-teach-recursion/"},"How Not to Teach Recursion")," (",(0,a.kt)("a",{parentName:"li",href:"https://lobste.rs/s/kwebam/how_not_teach_recursion"},"Lobsters"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://notes.eatonphil.com/practicing-recursion.html"},"How to get better at recursion (2021)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cs.ox.ac.uk/people/nicolas.wu/papers/URS.pdf"},"Unifying Structured Recursion Schemes (2013)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://newartisans.com/2018/04/win-for-recursion-schemes/"},"Program Reduction: A Win for Recursion Schemes (2018)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.abhinavomprakash.com/posts/recursion/"},"Recursion is recursion is recursion is... (2021)"))))}f.isMDXComponent=!0}}]);