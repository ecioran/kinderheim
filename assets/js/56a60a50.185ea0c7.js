"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[98795],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,f=c["".concat(m,".").concat(u)]||c[u]||h[u]||l;return a?r.createElement(f,n(n({ref:t},s),{},{components:a})):r.createElement(f,n({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35251:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var r=a(87462),i=a(63366),l=(a(67294),a(3905)),n=["components"],o={title:"LLVM"},m="[LLVM](https://llvm.org/)",p={unversionedId:"compilers/llvm",id:"compilers/llvm",title:"LLVM",description:"Links",source:"@site/docs/compilers/llvm.md",sourceDirName:"compilers",slug:"/compilers/llvm",permalink:"/kinderheim/compilers/llvm",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/compilers/llvm.md",tags:[],version:"current",frontMatter:{title:"LLVM"},sidebar:"tutorialSidebar",previous:{title:"Linters",permalink:"/kinderheim/compilers/linters"},next:{title:"Computer graphics",permalink:"/kinderheim/computer-graphics/"}},s={},h=[{value:"Links",id:"links",level:2}],c={toc:h};function u(e){var t=e.components,a=(0,i.Z)(e,n);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"llvm"},(0,l.kt)("a",{parentName:"h1",href:"https://llvm.org/"},"LLVM")),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cis.upenn.edu/~stevez/vellvm/"},"Vellvm")," - Verifying the LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=q6gSC3OxB_8"},"Vellvm: Verifying the LLVM - Steve Zdancewic (2018)")," - Great intro to LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wn-xW3g8jXY"},"Code Generation with llvm-hs by Stephen Diehl (2018)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/souper"},"Souper")," - Superoptimizer for LLVM IR. (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26020879"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mull-project/mull"},"Mull")," - Mutation testing system built on top of LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://llvm.org/docs/tutorial/"},"LLVM Tutorial: Table of Contents")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://notes.eatonphil.com/compiler-basics-llvm.html"},"Compiler basics (3): LLVM (2019)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pdziepak/codegen"},"CodeGen")," - Experimental wrapper over LLVM for generating and compiling code at run-time."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AccelerateHS/accelerate-llvm"},"LLVM backend for the Accelerate Array Language")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/beam2d/kaleidoscope-rs"},"kaleidoscope-rs")," - LLVM tutorial implementation in Rust with llvm-sys."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://notes.eatonphil.com/compiler-basics-llvm.html"},"Compiler basics (3): LLVM (2019)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://dev.stephendiehl.com/numpile/"},"Let's Write an LLVM Specializer for Python (2019)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21268287"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=J5xExRGaIIY"},"2019 LLVM Developers\u2019 Meeting: E. Christopher & J. Doerfert \u201cIntroduction to LLVM\u201d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/banach-space/llvm-tutor"},"LLVM Tutor")," - Collection of self-contained reference LLVM passes. It's a tutorial that targets novice and aspiring LLVM developers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://llvm.discourse.group/"},"LLVM Discourse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discordapp.com/invite/xS7Z362"},"LLVM Discord")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cs.cornell.edu/~asampson/blog/llvm.html"},"LLVM for Grad Students (2015)")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/abenkhadra/llvm-pass-tutorial"},"step-by-step tutorial for building an LLVM sample pass"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sampsyo/quala"},"Quala")," - Type Qualifiers for LLVM/Clang."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PLSysSec/haybale"},"haybale")," - Symbolic execution of LLVM IR, written in Rust."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=m8G_S5LwlTo"},"2019 EuroLLVM Developers\u2019 Meeting: V. Bridgers & F. Piovezan \u201cLLVM IR Tutorial - Phis, GEPs ...\u201d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://odr.chalmers.se/handle/20.500.12380/300037"},"Beyond debug information: Improving program reconstruction in LLDB using C++ modules (2019)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/llvm-mirror/llvm"},"LLVM source code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://drops.dagstuhl.de/opus/volltexte/2019/11077/pdf/LIPIcs-ITP-2019-22.pdf"},"Generating Verified LLVM from Isabelle/HOL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2002.09449"},"Snel: SQL Native Execution for LLVM (2020)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22404004"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://clang.llvm.org/"},"Clang")," - C language family frontend for LLVM. (",(0,l.kt)("a",{parentName:"li",href:"http://clang.llvm.org/docs/index.html"},"Docs"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AliveToolkit/alive2"},"Alive2")," - Automatic verification of LLVM optimizations. (",(0,l.kt)("a",{parentName:"li",href:"https://www.cs.utah.edu/~regehr/alive2-pldi21.pdf"},"Paper"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.josephmorag.com/posts/mcc3/"},"Micro C, Part 3: Generating LLVM (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fsaintjacques/jitmap"},"jitmap")," - Small library providing an execution engine for logical binary expressions on bitmaps."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mkitzan/llvm-explore"},"LLVM Explore")," - Notes created while studying LLVM compiler infrastructure in preparation for compiler engineer job and onsite interview."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Ntj8ab-5cvE"},"Joseph Groff & Chris Lattner \u201cSwift's High-Level IR: A Case Study...\" (2015)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yCd3CzGSte8"},"Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators (2019)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/maekawatoshiki/cilk"},"Cilk")," - Toy Compiler Infrastructure influenced by LLVM written in Rust."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nikic.github.io/2020/05/10/Make-LLVM-fast-again.html"},"Make LLVM fast again (2020)")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/cpp/comments/gh3huh/make_llvm_fast_again/"},"Reddit"),") (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23137345"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mapping-high-level-constructs-to-llvm-ir.readthedocs.io/en/latest/README.html"},"Mapping High Level Constructs to LLVM IR")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/f0rki/mapping-high-level-constructs-to-llvm-ir"},"Code"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://klee.github.io/"},"KLEE LLVM Execution Engine")," - Symbolic virtual machine built on top of LLVM. (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23283706"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/trailofbits/anselm"},"Anselm")," - Tool that allows you to describe and detect patterns of bad behavior in function calls."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PLSysSec/haybale-pitchfork"},"pitchfork")," - Verifying constant-time code with symbolic execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/secure-software-engineering/phasar"},"PhASAR")," - LLVM-based Static Analysis Framework. (",(0,l.kt)("a",{parentName:"li",href:"https://phasar.org/"},"Web"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/plast-lab/cclyzer"},"cclyzer")," - Tool for analyzing LLVM bitcode using Datalog."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vellvm/vellvm"},"Vellvm")," - Coq formalization of the semantics of (a subset of) the LLVM compiler IR."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=MagR2KY8MQI"},"Writing an LLVM Optimization (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/klee/klee"},"KLEE")," - Symbolic virtual machine built on top of the LLVM compiler infrastructure."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://publish.illinois.edu/allvm-project/"},"ALLVM Research Project")," - All software components \u2014 except a small set needed for bootstrapping \u2014 are represented in a virtual instruction set instead of native machine code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://kripken.github.io/llvm.js/demo.html"},"Run LLVM Assembly in the Browser")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24097446"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2008.05555.pdf"},"Compiling a Higher-Order Smart Contract Language to LLVM")," (",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/maqstik/status/1294170007891566593"},"Tweet"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/drti/drti"},"The Dynamic Runtime Inlining (DRTI)")," - With this project it is possible to take the output from an LLVM compiler such as clang and allow selected parts of the code to recompile themselves at runtime."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.yossarian.net/2020/10/23/Understanding-static-single-assignment-forms"},"Understanding static single assignment forms (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jauhien/iron-kaleidoscope"},"LLVM tutorial in Rust language")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tomassetti.me/a-tutorial-on-how-to-write-a-compiler-using-llvm/"},"A tutorial on how to write a compiler using LLVM (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dtolnay/cargo-llvm-lines"},"cargo-llvm-lines")," - Count lines of LLVM IR per generic function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://c9x.me/compile/doc/llvm.html"},"QBE vs. LLVM")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25273907"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/ml-compiler-opt"},"Infrastructure for ML - Driven Optimizations in LLVM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.llvm.org/"},"LLVM Project Blog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mukulrathi.co.uk/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/"},"A Complete Guide to LLVM for Programming Language Creators (2020)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25539797"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.aosabook.org/en/llvm.html"},"The Architecture of Open Source Applications: LLVM")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/programming/comments/ku9xza/the_architecture_of_open_source_applications_llvm/"},"Reddit"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wsmoses/Enzyme"},"Enzyme")," - High-Performance Automatic Differentiator of LLVM. (",(0,l.kt)("a",{parentName:"li",href:"https://enzyme.mit.edu/"},"Docs"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vaivaswatha/debugir"},"DebugIR")," - Debugging LLVM-IR Files."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.babush.me/dumbo-llvm-based-dumb-obfuscator.html"},"Dumbo: LLVM-based Dumb Obfuscator (2019)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.llvm.org/posts/2021-02-23-llvm-meets-code-property-graphs/"},"LLVM Meets Code Property Graphs (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.llvm.org/"},"LLVM Project Blog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/revng/revng"},"revng")," - Static binary translator. Given a input ELF binary for one of the supported architectures, it will analyze it and emit an equivalent LLVM IR."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/trailofbits/polytracker"},"PolyTracker")," - LLVM-based instrumentation tool for universal taint analysis."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://secret.club/2021/04/09/std-clamp.html"},"A look at LLVM - comparing clamp implementations (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26753872"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cambus.net/speedbuilding-llvm-clang-in-5-minutes/"},"Speedbuilding LLVM/Clang in 5 minutes (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.nelhage.com/post/building-llvm-in-90s/"},"Building LLVM in 90 seconds using Amazon Lambda (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://lobste.rs/s/pruijn/building_llvm_90_seconds_using_amazon"},"Lobsters"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://qmonnet.github.io/whirl-offload/2020/04/12/llvm-ebpf-asm/"},"eBPF assembly with LLVM (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cs.utah.edu/~regehr/alive2-pldi21.pdf"},"Alive2: Bounded Translation Validation for LLVM (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/RPISEC/llvm-deobfuscator"},"llvm-deobfuscator")," - Performs the inverse operation of the control flow flattening pass performed by LLVM-Obfuscator. (",(0,l.kt)("a",{parentName:"li",href:"https://rpis.ec/blog/dissection-llvm-obfuscator-p1/"},"Article"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mstorsjo/llvm-mingw"},"LLVM MinGW")," - LLVM/Clang/LLD based mingw-w64 toolchain."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npopov.com/2021/06/02/Design-issues-in-LLVM-IR.html"},"Design issues in LLVM IR (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nhaehnle.blogspot.com/2021/06/can-memcpy-be-implemented-in-llvm-ir.html?m=1"},"Can memcpy be implemented in LLVM IR? (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lijiansong/clang-llvm-tutorial"},"Clang and LLVM Tutorial")," - AST Interpreter, Function Pointer Analysis, Value Range Analysis, Data-Flow Analysis, Andersen Pointer Analysis, LLVM Backend."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.yossarian.net/2021/07/19/LLVM-internals-part-1-bitcode-format"},"LLVM Internals: The Bitcode Format (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://un-devs.github.io/low-level-exploration/journey-to-understanding-llvm-ir/#"},"A Journey to Understand LLVM-IR (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28052929"},"Can we directly execute LLVM-IR?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://bellmar.medium.com/learning-almost-nothing-about-llvm-e6aea9b243d9"},"Learning Almost Nothing About LLVM (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28438296"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/SRI-CSL/gllvm"},"Whole Program LLVM in Go")," - Drop-in replacement for wllvm, that builds the bitcode in parallel, and is faster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aqjune.github.io/posts/2021-10-4.the-select-story.html"},"The select story (2021)")," - Story about the removal of a compiler optimization that had been in LLVM for a long time."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://releases.llvm.org/13.0.0/docs/ReleaseNotes.html"},"LLVM 13.0.0 (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28760685"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/elliottt/llvm-pretty"},"llvm-pretty")," - LLVM pretty printer inspired by the Haskell LLVM binding."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.llvm.org/posts/2021-10-01-generating-relocatable-code-for-arm-processors/"},"Generating relocatable code for ARM processors (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28830650"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/numba/llvmlite"},"llvmlite")," - Lightweight LLVM Python Binding for Writing JIT Compilers. (",(0,l.kt)("a",{parentName:"li",href:"https://llvmlite.readthedocs.io/en/latest/"},"Docs"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/TeCSAR-UNCC/gem5-SALAM"},"gem5-SALAM (System Architecture for LLVM-based Accelerator Modeling)")," - Novel system architecture designed to enable LLVM-based modeling and simulation of custom hardware accelerators."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/mlir-hs"},"mlir-hs")," - Haskell bindings for MLIR."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npopov.com/2020/05/10/Make-LLVM-fast-again.html"},"Make LLVM fast again (2020)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://llvm.org/docs/BuildingADistribution.html"},"Building a Distribution of LLVM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lowlevelbits.org/how-to-learn-compilers-llvm-edition/"},"How to learn compilers: LLVM Edition (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29112482"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.regehr.org/archives/2109"},"llvm-reduce (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://llvm.swoogo.com/2021devmtg/1538015"},"2021 LLVM Developers' Meeting")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/elfshaker/manyclangs"},"manyclangs")," - Project enabling you to run any commit of clang within a few seconds, without having to build it."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.llvm.org/posts/2021-11-18-relicensing-update/"},"LLVM relicensing update and call for help (2021)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29292516"},"HN"),") (",(0,l.kt)("a",{parentName:"li",href:"https://lobste.rs/s/uxuudg/llvm_relicensing_update_call_for_help"},"Lobsters"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lifting-bits/remill"},"Remill")," - Library for lifting of x86, amd64, and aarch64 machine code to LLVM bitcode."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/woodruffw/mollusc"},"mollusc")," - Pure-Rust libraries for parsing, interpreting, and analyzing LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://llvm.org/docs/Proposals/LLVMLibC.html"},"\u201cLLVM-Libc\u201d C Standard Library")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29447533"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/littledivy/llvm-deno"},"llvm-deno")," - LLVM bindings for Deno."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DYaqzEbU0Vk"},"Building an Operating System from Scratch with LLVM (2021)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/compor/Pedigree"},"Pedigree")," - LLVM dependence graphs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tari/llvm-sys.rs"},"llvm-sys.rs")," - Rust bindings to LLVM's C API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/snu-sf/crellvm"},"Crellvm")," - Verified Credible Compilation for LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alt-romes/llvm-c-search"},"llvm-c-search")," - Terminal interface to search the LLVM-C API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/aengelke/instrew"},"Instrew")," - High performance LLVM-based dynamic binary instrumentation framework."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/NinjaLikesCheez/bruh"},"bruh")," - Tool to make LLVM IR more human readable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/igor84/summus"},"Summus")," - Simple compiler frontend using LLVM as backend. Can easily be used as a starting point for any kind of compiler."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cs.utah.edu/~regehr/papers/undef-pldi17.pdf"},"Taming Undefined Behavior in LLVM (2017)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/draperlaboratory/fracture"},"Fracture")," - Architecture-independent decompiler to LLVM IR."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leaningtech.com/reducing-webassembly-size-by-exploring-all-executions-in-llvm/"},"Reducing WebAssembly size by exploring all executions in LLVM (2022)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30686919"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/llvm-swift/FileCheck"},"FileCheck")," - Standalone Swift version of LLVM's flexible pattern matching file verifier."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://q3k.org/lanai.html"},"Lanai, the mystery CPU architecture in LLVM")," (",(0,l.kt)("a",{parentName:"li",href:"https://lobste.rs/s/jtjrnc/lanai_mystery_cpu_architecture_llvm"},"Lobsters"),") (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30757889"},"HN"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discourse.llvm.org/t/rfc-add-an-llvm-cas-library-and-experiment-with-fine-grained-caching-for-builds/59864"},"RFC: Add an LLVM CAS library and experiment with fine-grained caching for builds (2022)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apple/llvm-project"},"Apple LLVM fork")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mikeroyal/LLVM-Guide"},"LLVM Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lifting-bits/mcsema"},"McSema")," - Framework for lifting x86, amd64, aarch64, sparc32, and sparc64 program binaries to LLVM bitcode."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://briancallahan.net/blog/20220417.html"},"Peephole Optimizer (For QBE): Studying the LLVM and GCC Optimizers (2022)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/travitch/whole-program-llvm"},"Whole Program LLVM")," - Wrapper script to build whole-program LLVM bitcode files."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sillycross/PochiVM"},"PochiVM")," - JIT (just-in-time) code-generation framework backed by LLVM and a novel baseline compiler."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=lDFE-QtSIfg"},"Guide to Performance Debugging LLVM-based Programs (2022)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ucarion/llvm-rust-getting-started"},"Writing an LLVM-IR compiler in Rust")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Champii/Rock"},"Rock")," - Native language with Rust & LLVM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.regehr.org/archives/2148"},"High-Throughput, Formal-Methods-Assisted Fuzzing for LLVM (2022)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.regehr.org/archives/2265"},"Formal-Methods-Based Bugfinding for LLVM\u2019s AArch64 Back End (2022)")," (",(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31642147"},"HN"),")")))}u.isMDXComponent=!0}}]);