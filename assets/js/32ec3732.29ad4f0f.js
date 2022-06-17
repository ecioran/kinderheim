"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[42368],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),h=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=i,k=c["".concat(o,".").concat(u)]||c[u]||s[u]||n;return a?r.createElement(k,m(m({ref:t},p),{},{components:a})):r.createElement(k,m({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,m=new Array(n);m[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,m[1]=l;for(var h=2;h<n;h++)m[h]=a[h];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86239:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return s}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),m=["components"],l={title:"Scheme"},o="[Scheme](https://call-cc.org/)",h={unversionedId:"programming-languages/lisp/scheme",id:"programming-languages/lisp/scheme",title:"Scheme",description:"The Little Typer is a nice book.",source:"@site/docs/programming-languages/lisp/scheme.md",sourceDirName:"programming-languages/lisp",slug:"/programming-languages/lisp/scheme",permalink:"/kinderheim/programming-languages/lisp/scheme",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming-languages/lisp/scheme.md",tags:[],version:"current",frontMatter:{title:"Scheme"},sidebar:"tutorialSidebar",previous:{title:"Racket",permalink:"/kinderheim/programming-languages/lisp/racket"},next:{title:"Lua",permalink:"/kinderheim/programming-languages/lua"}},p={},s=[{value:"Links",id:"links",level:2}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,m);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scheme"},(0,n.kt)("a",{parentName:"h1",href:"https://call-cc.org/"},"Scheme")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://thelittletyper.com/"},"The Little Typer")," is a ",(0,n.kt)("a",{parentName:"p",href:"https://thatgeoguy.ca/blog/2021/03/07/review-the-little-typer/"},"nice book"),"."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.scheme.com/tspl4/"},"The Scheme Programming Language book")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gambit/gambit"},"Gambit")," - Efficient implementation of the Scheme programming language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mrnugget/scheme_x86"},'Writing a Scheme to x86 compiler by following Abdulaziz Ghuloum\'s "An Incremental Approach to Compiler Construction"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cisco/ChezScheme"},"Chez Scheme")," - Supports all standard features of Scheme, including first-class procedures, proper treatment of tail calls, continuations, user-defined records, libraries, exceptions, and hygienic macro expansion."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/weinholt/zabavno"},"Zabavno x86 emulator")," - x86 emulator in Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kennethfriedman.org/projects/toski/"},"Toski")," - Prototype new debugging tool for Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hyper.dev/blog/yet-another-scheme.html"},"Scheme fatigue (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://people.csail.mit.edu/jhbrown/scheme/"},"Advanced Scheme: Some Naughty Bits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://akkuscm.org/"},"Akku.scm")," - Scheme package manager. (",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/akkuscm/akku"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nanopass/nanopass-framework-scheme"},"Nanopass Compiler Library")," - Embedded DSL for writing compilers in Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/samrushing/irken-compiler"},"Irken Compiler")," - Statically typed variant of Scheme. Or a lisp-like variant of ML."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cons.io/"},"Gerbil Scheme")," - Opinionated dialect of Scheme designed for Systems Programming, with a state of the art macro and module system on top of the Gambit runtime. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/vyzo/gerbil"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/c29wn2/gerbil_scheme"},"Lobsters"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=20585637"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sylphbio/pontiff"},"pontiff")," - Haskell-style build system for chicken scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wingo/fibers"},"Fibers")," - Facility that provides Go-like concurrency for Guile Scheme, in the tradition of Concurrent ML."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=eXB3I3S3vJc"},"Practical Chicken Scheme with Emacs: hello-world webserver (2017)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://erkin.party/blog/200715/evolution/"},"The evolution of a Scheme programmer (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ao7qpz/evolution_scheme_programmer"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/schemedoc/awesome-scheme"},"Awesome Scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/theodesp/awesome-scheme"},"Awesome Scheme 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://weinholt.se/articles/new-r6rs-compiler/"},"A New R6RS Scheme Compiler (2019)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/6gbneg/new_r6rs_scheme_compiler"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stklos.net/index.html"},"STklos")," - Free Scheme system mostly compliant with the languages features defined in R7RS small."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cs.utexas.edu/ftp/garbage/cs345/schintro-v14/schintro_142.html#SEC271"},"A Simple Scheme Compiler (1997)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24257488"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.scheme.dk/planet/"},"Planet Scheme")," - Community Scheme Blog."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.call-cc.org/"},"CHICKEN Scheme wiki")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://wiki.call-cc.org/man/5/The%20User%27s%20Manual"},"CHICKEN User's Manual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Mathieu-Desrochers/Schemings"},"Scheme C FFI")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23860977"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kana/sicp"},"SICP done in Scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://scheme.fail/"},"Loko Scheme")," - Optimizing R6RS Scheme compiler."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.unsyntax.org/"},"Unsyntax")," - Sane implementation of R7RS Scheme. (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/xszs7d/unsyntax_sane_implementation_r7rs"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ccrma.stanford.edu/software/snd/snd/s7.html"},"s7 Scheme")," - Scheme implementation intended as extension language for other applications. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24687031"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/justinethier/cyclone"},"Cyclone Scheme")," - Brand-new compiler that allows practical application development using R7RS Scheme. (",(0,n.kt)("a",{parentName:"li",href:"https://justinethier.github.io/cyclone/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24696939"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arcfide/chez-srfi"},"SRFIs for Chez Scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://matt.might.net/articles/compiling-scheme-to-c/"},"Compiling Scheme to C with flat closure conversion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/schemedoc/bibliography"},"Bibliography of Scheme-related Research")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/isamert/scheme.rs"},"scheme.rs")," - Simple yet comprehensive scheme interpreter in rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/georgjz/functional-geometry-gambit-scheme"},"Functional Geometry with Gambit Scheme and Raylib"),' - Implementation based in Peter Henderson\'s paper "Functional Geometry".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/guile/"},"Guile Scheme")," - General-purpose, high-level programming language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lokke-org/lokke"},"Lokke")," - Clojure for Guile."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ijp/pfds"},"pfds")," - Set of purely functional data structures written in R6RS Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sinistersnare/SinScheme"},"Sin's Scheme Compiler")," - Mostly working compiler from some non-standards compliant Scheme to LLVM IR. Written for a compilers class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://c9x.me/qscm/"},"QSCM - A tiny bootstrapped Scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sgrove/tehila"},"Tehila")," - 3D engine for Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mattwparas/steel"},"steel")," - Embedded scheme interpreter in Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shirok/Gauche"},"Gauche")," - Scheme Scripting Engine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://carloscarrasco.com/love-letter-to-s7-scheme/"},"A love letter to s7 Scheme (2016)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.erichgrunewald.com/posts/using-scheme-to-find-the-median-of-two-sorted-integer-lists/"},"Using Scheme to Find the Median of Two Sorted Integer Lists (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27403666"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mitpress.mit.edu/books/seasoned-schemer-second-edition"},"The Seasoned Schemer Book")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pkrumins/the-seasoned-schemer"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beautifulracket.com/appendix/racket-and-chez-scheme.html"},"Thoughts on Racket & Chez Scheme")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/rtfpg6/thoughts_on_racket_chez_scheme"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://lisppad.objecthub.net/"},"LispPad")," - Lightweight Scheme IDE on macOS and iOS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tdp2110/TmpLisp"},"TmpLisp")," - Implementation of Scheme in C++ Template Metaprogramming."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.draketo.de/software/guile-10x.html"},"10 ways GNU Guile is 10x better (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://people.eecs.berkeley.edu/~bh/snap/baby3.pdf"},"Snap is Scheme disguised as Scratch")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28337196"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28397785"},"HN: Chicken Scheme (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/biwascheme/biwascheme"},"BiwaScheme")," - Scheme interpreter written in JavaScript. (",(0,n.kt)("a",{parentName:"li",href:"https://www.biwascheme.org/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://taoofmac.com/space/blog/2019/06/20/2310"},"Exploring Scheme implementations for API programming coming from Node.js, Go (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/udem-dlteam/ribbit"},"Ribbit")," - Small and portable Scheme implementation with AOT and incremental compilers that fits in 4K."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akeep/scheme-to-c"},"Scheme-to-C")," - Tiny nanopass compiler for compiling a small subset of Scheme to C."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akeep/scheme-to-llvm"},"Scheme-to-LLVM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webyrd/normalization-by-evaluation"},"Normalization-by-evaluation in miniKanren")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mhuesch/schemeCompiler"},"schemeCompiler")," - Compiler for a subset of Scheme in Haskell."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/write-you-a-scheme-v2/scheme"},"Write You a Scheme in Haskell")," (",(0,n.kt)("a",{parentName:"li",href:"https://www.wespiser.com/writings/wyas/home.html"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webyrd/scheme-primer"},"Interactive Scheme Primer, written in Scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/3486606.3486783"},"A small scheme VM, compiler, and REPL in 4k (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29348033"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TectonicFury/CSCMIC"},"Scheme interpreter in C")," (",(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ProgrammingLanguages/comments/r3zpgc/a_barely_usable_interpreter_for_a_subset_of/"},"Reddit"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kennethfriedman.org/thoughts/2021/mit-scheme-on-apple-silicon/"},"MIT Scheme on Apple Silicon (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29707604"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mirror.informatimago.com/scheme/repository.readscheme.org/ftp/papers/vlisp-lasc/vlisp.pdf"},"VLISP: A Verified Implementation of Scheme (1993)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29728783"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lambda.quest/"},"Lambda Quest")," - Interactive Scheme environment with Canvas. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/katspaugh/lambda.quest"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RodionGork/tinyscheme"},"TinyScheme R7")," - Small Scheme language implementation written in C language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PollRobots/scheme"},"R7RS Scheme Implementation in WebAssembly")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29773927"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours"},"Write Yourself a Scheme in 48 Hours")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pangwa/write-yourself-a-scheme-doc"},"F# Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kwantam/lviv"},"lviv")," - Stack-based RPN functional programming language. Written in Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/playXE/waffle-scheme"},"Waffle")," - Simple Scheme implementation with bytecode VM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maxsnew/modal-scheme"},"Fiddle")," - Scheme-like CBPV language with Racket Interoperability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jespercockx/agda2scheme"},"agda2scheme")," - Agda backend for Chez Scheme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mitpress.mit.edu/books/reasoned-schemer-second-edition"},"The Reasoned Schemer Book (2018)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TheReasonedSchemer2ndEd/CodeFromTheReasonedSchemer2ndEd"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jumper149/haskeme"},"Haskeme")," - Compiler translates Scheme source code written with I-Expressions (indented expressions) into S-Expressions (symbolic expressions)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eliben/bobscheme"},"Bob")," - Implementation of Scheme in Python and C++."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/certainty/braces"},"Braces")," - Toy scheme compiler and VM in rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webyrd/miniKanren-with-symbolic-constraints"},"miniKanren with symbolic constraints")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webyrd/faster-miniKanren"},"miniKanren with symbolic constraints with better performance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yinwang0/tinyKanren"},"tinyKanren")," - Simplified version of the original miniKanren."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chansey97/clprosette-miniKanren"},"CLP(Rosette) on top of miniKanren")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fjames86/flisp"},"FLISP")," - Scheme-like Lisp interpreter that can also run as an operating system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/schism-lang/schism"},"Schism")," - Compiler from Scheme to WebAssembly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ovenpasta/thunderchez"},"thunderchez")," - Libraries for Chez Scheme productivity."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thelittletyper.com/"},"The Little Typer")," (",(0,n.kt)("a",{parentName:"li",href:"https://thatgeoguy.ca/blog/2021/03/07/review-the-little-typer/"},"Review"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rami3l/yascm"},"Scheme interpreter in Scala")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/turbopape/scheje"},"Scheje")," - Scheme in Clojure.")))}u.isMDXComponent=!0}}]);