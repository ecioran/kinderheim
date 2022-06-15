"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[6282],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5442:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="State machines",c={unversionedId:"programming/state-machines",id:"programming/state-machines",title:"State machines",description:"Links",source:"@site/docs/programming/state-machines.md",sourceDirName:"programming",slug:"/programming/state-machines",permalink:"/kinderheim/programming/state-machines",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/state-machines.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fuzzing",permalink:"/kinderheim/programming/software-testing/fuzzing"},next:{title:"Stream processing",permalink:"/kinderheim/programming/stream-processing"}},m={},p=[{value:"Links",id:"links",level:2}],h={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-machines"},"State machines"),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.solipsys.co.uk/new/StateMachineInRealLife.html?te02lo"},"State Machine In Real Life")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/3exvcc/state_machine_real_life"},"Lobsters"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23050231"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://madebyevan.com/fsm/"},"Finite State Machine Designer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.colm.net/open-source/ragel/"},"Ragel")," - State Machine Compiler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stateskit.com/"},"StatesKit")," - Visual Statechart Editor. Visually creating Statechart and Finite State Machine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://philippegroarke.com/posts/2020/constexpr_fsm/"},"I Accidentally Wrote A Compile-Time Executable State Machine (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sciencedirect.com/science/article/pii/0167642387900359"},"Statecharts: a visual formalism for complex systems (1987)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/newpavlov/fsm-bench"},"Benchmark of Finite State Machine approaches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4ChS2Iq5xk8"},"Building accessible components with State Machines (Segun Adebayo) (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lucylang.org/"},"Lucy")," - DSL for Finite State Machines. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lucydsl/liblucy"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://state-machine-cat.js.org/"},"State Machine cat")," - Write beautiful state charts. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sverweij/state-machine-cat"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RbF5EkkA9ss"},"Stately Office Hours September (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=onEGFGNHEV0"},"Build Better Apps With State Machines (with David Khourshid) (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adrian-thurston/ragel"},"Ragel State Machine Compiler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/statelyai/stately-tutorials"},"Stately Tutorials Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.redhat.com/articles/2021/11/23/how-design-state-machines-microservices"},"How to design state machines for microservices (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mannhowie.com/finite-state-machines"},"Making a feedback form with state machines (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29359174"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Garvys/rustfst"},"Rustfst")," - Library for constructing, combining, optimizing, and searching weighted finite-state transducers (FSTs)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DrSensor/scdlang"},"Scdlang")," - State chart Description Language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/qfpl/state-machine-testing-course"},"State Machine Testing")," - Course for learning how to apply property-based state-machine testing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hayesall.com/blog/latex-automata/"},"LaTeX Finite Automata and State Diagrams with Tikz")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29721787"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lukasschwab.me/blog/gen/borges-automata.html"},"State Machines via Jorge Luis Borges (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fsm-editor.netlify.app/"},"FSM Editor")," - Simple finite state machine editor. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/crinklesio/fsm-editor"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/3477132.3483582"},"Rabia: Simplifying State-Machine Replication Through Randomization (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/haochenpan/rabia"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wykDyFwr8Lk"},"Modelling Statecharts: A step-by-step guide (2022)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://signalsandthreads.com/state-machine-replication-and-why-you-should-care/"},"State Machine Replication, and Why You Should Care (2022)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31100023"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zagjs.com/"},"Zag")," - UI components powered by Finite State Machines. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chakra-ui/zag"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chakra-ui/zag-docs"},"Docs Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/am-kantox/finitomata"},"Finitomata")," - FSM boilerplate based on callbacks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://google-research.github.io/self-organising-systems/2022/diff-fsm/"},"Differentiable Finite State Machines (2022)"))))}u.isMDXComponent=!0}}]);