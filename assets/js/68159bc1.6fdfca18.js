"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[83017],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),f=i,u=c["".concat(s,".").concat(f)]||c[f]||h[f]||o;return a?r.createElement(u,n(n({ref:t},p),{},{components:a})):r.createElement(u,n({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var m=2;m<o;m++)n[m]=a[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30153:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return h}});var r=a(87462),i=a(63366),o=(a(67294),a(3905)),n=["components"],l={title:"Formal verification"},s="[Formal verification](https://en.wikipedia.org/wiki/Formal_verification)",m={unversionedId:"computer-science/formal-verification/formal-verification",id:"computer-science/formal-verification/formal-verification",title:"Formal verification",description:"Notes",source:"@site/docs/computer-science/formal-verification/formal-verification.md",sourceDirName:"computer-science/formal-verification",slug:"/computer-science/formal-verification/",permalink:"/kinderheim/computer-science/formal-verification/",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-science/formal-verification/formal-verification.md",tags:[],version:"current",frontMatter:{title:"Formal verification"},sidebar:"tutorialSidebar",previous:{title:"Data structures",permalink:"/kinderheim/computer-science/data-structures/"},next:{title:"TLA+",permalink:"/kinderheim/computer-science/formal-verification/tla"}},p={},h=[{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}],c={toc:h};function f(e){var t=e.components,a=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"formal-verification"},(0,o.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/Formal_verification"},"Formal verification")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/hillelogram/status/1476378372724998150"},'I like to start with a full english description, and then write things as FOL predicates. The act of translating it into math, even "sloppy" math, is a great first past for seeing issues more clearly. If it passes that, then I move on to FM.'))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudbootup.com/post/what-why-and-how-of-formal-methods.html"},"What, Why, and How of Formal Methods (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/why-dont-people-use-formal-methods/"},"Why don't people use formal methods? (2019)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=18965274"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/FStarLang/FStar"},"F","*")," - Verification system for effectful programs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cl.cam.ac.uk/%7Ejrh13/hol-light/"},"HOL Light")," - Computer program to help users prove interesting mathematical theorems completely formally in higher order logic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PrincetonUniversity/VST"},"Verified Software Toolchain")," - Includes static analyzers to check assertions about your program; optimizing compilers to translate your program to machine language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://plv.csail.mit.edu/"},"MIT Programming Languages & Verification Group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ProofSystem/Encyclopedia/blob/master/main.pdf"},"Encyclopedia of Proof Systems")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1911.02679.pdf"},"A Domain-Specific Language for Verifying Software Requirement Constraints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cs.cornell.edu/courses/cs6120/2019fa/blog/alive/"},"Provably Correct Peephole Optimizations with Alive (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/davecom/SwiftCSP"},"SwiftCSP")," - Constraint satisfaction problem solver written in pure Swift."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GXXOyXeyKeY"},"Proof Assistants At the Hardware-Software Interface (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/business-case-formal-methods/"},"The business case for formal methods (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ywgjhd/business_case_for_formal_methods"},"Lobsters"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22321756"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Deducteam/Logipedia"},"Logipedia")," - Project that aims to share formal proofs between several systems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://alloytools.org/about.html"},"Alloy")," - Language for describing structures and a tool for exploring them. (",(0,o.kt)("a",{parentName:"li",href:"https://alloy.readthedocs.io/en/latest/"},"Docs"),") (",(0,o.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/alloydocs/"},"Article"),") (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/g41wko/announcing_alloydocs"},"Lobsters"),") (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/trupill/status/1458006761286377472"},"Tweet"),") (",(0,o.kt)("a",{parentName:"li",href:"https://serras.github.io/dddeu21/"},"Being Formal Yet Lightweight"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://buttondown.email/hillelwayne/archive/alloy-6-first-impressions/"},"Alloy 6 First Impressions (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://softwareabstractions.org/"},"Software Abstractions book")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://okmij.org/ftp/Computation/lightweight-static-guarantees.html"},"Safe and Efficient, Now")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/olecii/experiences_moving_from_tests_strong"},"Experiences moving from tests to strong typing? (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.regehr.org/archives/50"},"Margin in Software Systems (2010)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sygus.org/"},"SyGuS competition")," - Allow solvers for syntax-guided synthesis problems to compete on a large collection of benchmarks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alastairreid.github.io/verification-competitions/"},"Verification Competitions (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://runtimeverification.com/blog/k-framework-an-overview/"},"K Framework \u2013 An Overview (2018)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1905.09381"},"Learning to Prove Theorems via Interacting with Proof Assistants (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/hillelogram/status/1258440258343112715"},"How do I rigorously translate a spec to implementation, and how do I keep them in sync? (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/fcntwr/what_are_you_doing_this_weekend#c_kesgdu"},"Engineering a Safer World notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cacm.acm.org/magazines/2019/2/234356-separation-logic/fulltext"},"Separation Logic (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ligurio/practical-fm"},"List of companies that use formal verification methods in software engineering")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=oMSmkRGzQ64"},"Formal Specification and Taming Other People's Tech - Marianne Bellotti (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5B7iI2onu8s"},"Verified Programming with Project Everest (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://soap.coffee/~lthms/posts/AlgebraicDatatypes.html"},"Proving Algebraic Datatypes are \u201cAlgebraic\u201d (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.macs.hw.ac.uk/splv/"},"SPLV \u2013 Scottish Programming Languages and Verification Summer School")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backspace.ai/"},"backspace.ai")," - Fun resource to start playing with formal programming languages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.weaselhat.com/2020/08/07/formulog-ml-datalog-smt/"},"Formulog: ML + Datalog + SMT (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.moritz.systems/blog/an-introduction-to-formal-verification/"},"An introduction to Formal Verification for Software Systems (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://proofengineering.org/"},"Proof Engineering")," - Specifying, building, verifying, and maintaining software systems using proof assistants such as Coq, Isabelle/HOL, and HOL4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://event.cwi.nl/sefm2020/"},"Software Engineering and Formal Methods 2020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jix.one/the-assembly-language-of-satisfiability/"},"The Assembly Language of Satisfiability (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://homes.cs.washington.edu/~mernst/pubs/continuous-compliance-ase2020.pdf"},"Continuous compliance with lightweight verification tools (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://runtimeverification.com/"},"Runtime Verification")," - Startup company aimed at using runtime verification-based techniques to improve the safety, reliability, and correctness of software systems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GaloisInc/crucible"},"Crucible")," - Language-agnostic library for performing forward symbolic execution of imperative programs. It provides a collection of data-structures and APIs for expressing programs as control-flow graphs. (",(0,o.kt)("a",{parentName:"li",href:"https://crux.galois.com/"},"Web"),") (",(0,o.kt)("a",{parentName:"li",href:"https://galois.com/blog/2020/10/crux-introducing-our-new-open-source-tool-for-software-verification/"},"Intro"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/o1-labs/snarky"},"snarky")," - OCaml DSL for verifiable computation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://galois.com/blog/2020/12/proofs-should-repair-themselves/"},"Proofs Should Repair Themselves (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/vh1edq/proofs_should_repair_themselves"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.gchinis.com/posts/use-polling-for-resiliency/"},"Use polling for resiliency (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/7vpobg/use_polling_for_resiliency"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.fmeurope.org/documents/Garavel-terBeek-vandePol-20.pdf"},"The 2020 Expert Survey on Formal Methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fmie2021.github.io/"},"Formal Methods for the Informal Engineer (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/philzook58/z3_tutorial"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sasnauskas.eu/finding-software-bugs-using-symbolic-execution/"},"Finding Software Bugs Using Symbolic Execution (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.minizinc.org/"},"MiniZinc")," - High-level constraint modelling language that allows you to easily express and solve discrete optimization problems. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/MiniZinc/libminizinc"},"Code"),") (",(0,o.kt)("a",{parentName:"li",href:"https://sasnauskas.eu/solving-river-crossing-puzzles-with-minizinc/"},"Solving River Crossing Puzzles With MiniZinc"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mat.univie.ac.at/~neum/FMathL.html"},"FMathL")," - Formal Mathematical Language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dafny-lang/dafny"},"Dafny")," - Verification-aware programming language. (",(0,o.kt)("a",{parentName:"li",href:"https://dafny-lang.github.io/dafny/"},"Docs"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.dcs.gla.ac.uk/research/formalmethods/"},"Formal Methods Research Group - University of Glasgow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.springer.com/gp/book/9783030051556"},"Formal Methods: An Appetizer (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.nccgroup.com/2021/01/29/software-verification-and-analysis-using-z3/"},"Software Verification and Analysis Using Z3 (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.lix.polytechnique.fr/Labo/Samuel.Mimram/teaching/INF551/course.pdf"},"Program = Proof")," - Gives a first introduction to the Curry-Howard correspondence between programs and proofs. (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/d4ixfd/program_proof"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://concrete-semantics.org/"},"Concrete Semantics")," - Introduces semantics of programming languages through the medium of a proof assistant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blag.cedeela.fr/curry-howard-scam/"},"Curry-Howard is a scam (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/kp72m4/curry_howard_is_scam"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fredrikj.net/blog/2021/02/computing-with-metavalues/"},"Computing with metavalues (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/coin-or/Clp"},"CLP")," - Open-source linear programming solver."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/digama0/mm0"},"Metamath Zero")," - Language for writing specifications and proofs. Its emphasis is on balancing simplicity of verification and human readability of the specification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/FStarLang/kremlin"},"KreMLin")," - Tool for extracting low-level F","*"," programs to readable C code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.cs.utoronto.ca/~hehner/FMSD/"},"Formal Methods of Software Design Course by Eric Hehner")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26610221"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mitpress.mit.edu/books/little-prover"},"The Little Prover")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/the-little-prover/j-bob"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/szabta89/IncA"},"IncA")," - Incremental Program Analysis Framework."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.acolyer.org/2015/03/23/combining-static-model-checking-with-dynamic-enforcement-using-the-statecall-policy-language/"},"Combining static model checking with dynamic enforcement using the Statecall Policy Language (2015)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://proofcraft.systems/"},"Proofcraft")," - Partner with experts to verify your software. Learn formal verification from the experts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://buttondown.email/hillelwayne/archive/can-formal-methods-succeed-where-uml-failed"},"Can Formal Methods Succeed where UML Failed? (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.compiler.ai/2021/05/06/verification-is-tcbpb-reduction/"},"Verification = TCB/PB Reduction (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ih8vmx/verification_tcb_pb_reduction"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Copilot-Language/copilot"},"Copilot")," - Stream-based runtime-verification framework for generating hard real-time C code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sf.snu.ac.kr/"},"Software Foundations Lab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ntietz.com/tech-blog/future-of-software-engineering-is-formal-methods/"},"Where are we going from here? Software engineering needs formal methods (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27724331"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://deploy-eprints.ecs.soton.ac.uk/401/1/Journal.pdf"},"Extending Event-B with Discrete, Timing Properties (2012)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aodhneine/esther"},"Esther")," - Automated theorem proof assistant based on Homotopy Type Theory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/yaufia/is_formal_methods_winter_about_end"},"Is the formal methods winter about to end? (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pantagruel-language.com/"},"Pantagruel")," - Extremely Lightweight Specification Language. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28580640"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://buttondown.email/hillelwayne/archive/there-was-no-formal-methods-winter/"},"There Was No Formal Methods Winter (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cl.cam.ac.uk/~pes20/rems/"},"REMS (Rigorous Engineering of Mainstream Systems)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rems-project"},"GitHub"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GdcOy6zVFC4"},"The Curry-Howard Correspondence (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GaloisInc/saw-script"},"SAWScript")," - Scripting language that forms the primary user interface to the Software Analysis Workbench (SAW)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://galois.com/blog/2021/10/you-already-know-formal-methods/"},"You Already Know Formal Methods (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28859324"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ocamlpro.github.io/verification_for_dummies/index.html"},"Verification For Dummies: SMT and Induction Book")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/claucece/formal-tutorials"},"Formal verification/analysis tools tutorials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hopv/hoice"},"hoice")," - ICE-based predicate synthesizer for Horn clauses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hopv"},"Higher-Order Program Verification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/smackers/smack"},"SMACK")," - Software Verifier and Verification Toolchain. (",(0,o.kt)("a",{parentName:"li",href:"http://smackers.github.io/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.edayers.com/thesis/"},"A Tool for Producing Verified, Explainable Proofs Thesis (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/EdAyers/lean-humanproof-thesis"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cambridge.org/core/journals/journal-of-functional-programming/article/cogent-uniqueness-types-and-certifying-compilation/47AC86F02534818B95A56FA1A283A0A6"},"Cogent: uniqueness types and certifying compilation (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/kamatsu8/status/1453322917853470720"},"Tweet"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aszepieniec.github.io/stark-anatomy/"},"Anatomy of a STARK")," - Tutorial explaining the mechanics of the STARK proof system. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29026311"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aszepieniec/stark-anatomy"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://uwu.tech/App.Kind"},"Kind")," - Minimal, efficient and practical programming language that aims to rethink functional programming from the scratch, and make it right. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Kindelia/Kind"},"Code"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Kindelia/Kind/blob/master/THEOREMS.md"},"Theorem Proving"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kind-lang/Kind/blob/master/blog/1-beyond-inductive-datatypes.md"},"Beyond inductive datatypes: exploring Self types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://concerningquality.com/misspecification/"},"Misspecification: The Blind Spot of Formal Verification (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/h5sd63/misspecification_blind_spot_formal"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/vdd"},"Verification-Driven Development Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haslab/Electrum"},"Electrum Analyzer")," - Model checker for relational first-order temporal specifications. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/haslab/Electrum/wiki/Tutorial"},"Tutorial"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neel-krishnaswami/proof-checker"},"Simple proof checker in OCaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hwayne/lets-prove-leftpad"},"Provably-correct versions of Leftpad")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hal.archives-ouvertes.fr/hal-00540025"},"Structured derivations: a unified proof style for teaching mathematics")," (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/brendanzab/status/1462560273554821121"},"Tweet"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ocaml-gospel/gospel"},"Gospel")," - Tool-agnostic formal specification language for OCaml. (",(0,o.kt)("a",{parentName:"li",href:"https://ocaml-gospel.github.io/gospel/"},"Docs"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/alloy6/"},"Alloy 6: it's about Time (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/0d4s5q/alloy_6_it_s_about_time"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://concerningquality.com/refinement/"},"Refinement: Formalizing the Simplicity Underneath Complex Programs (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stepchowfun/theorem-prover"},"Automated theorem prover for first-order logic")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/siddhartha-gadgil/ProvingGround"},"ProvingGround")," - Tools for Automated Mathematics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lara.epfl.ch/w/"},"LARA \u2013 Lab for Automated Reasoning and Analysis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cl.cam.ac.uk/~jrh13/papers/hol00.pdf"},"Formal verification of IA-64 division algorithms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fizruk/rzk"},"rzk")," - Prototype interactive proof assistant based on a type theory for synthetic \u221e-categories."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2112.12758v1"},"A Manifesto for Applicable Formal Methods (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uds-psl/autosubst-ocaml"},"Autosubst OCaml")," - OCaml reimplementation of the Autosubst 2 code generator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.science/publications/using-lightweight-formal-methods-to-validate-a-key-value-storage-node-in-amazon-s3"},"Using lightweight formal methods to validate a key-value storage node in Amazon S3 (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/3290343"},"Less is more: multiparty session types revisited (2019)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/wjldtd/less_is_more_multiparty_session_types"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alastairreid.github.io/mrs-at-scale/"},"Machine Readable Specifications at Scale (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30083908"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmu-program-analysis.github.io/2022/index.html"},"CMU Program Analysis Course (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CMU-program-analysis/CMU-program-analysis.github.io"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://frap.csail.mit.edu/main"},"MIT Formal Reasoning About Programs (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mit-frap/spring22"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2109.11987"},"Formal Verification of a Distributed Dynamic Reconfiguration Protocol (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/will62794/logless-reconfig/tree/master/proofs"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minaprotocol.com/blog/kimchi-the-latest-update-to-minas-proof-system"},"Kimchi: The latest update to Mina\u2019s proof system (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30303903"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://cubicle.lri.fr/"},"Cubicle")," - Tool that combines model checking algorithms and automatic SMT theorem provers with a powerful invariants inference mechanism. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cubicle-model-checker/cubicle"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.science/blog/a-gentle-introduction-to-automated-reasoning"},"A gentle introduction to automated reasoning (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.zdsmith.com/posts/a-specification-of-a-note-taking-program.html"},"A Specification of a Note-Taking Program (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/bqw6g1/specification_note_taking_program"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2108.11896"},"A Survey on Automated Fact-Checking (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Cartus/Automated-Fact-Checking-Resources"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/subsetpark/pantagruel"},"Pantagruel")," - Program specification language with a formal syntax and ad-hoc semantics. (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/xkth5p/pantagruel_v0_5_1"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BerkeleyLearnVerify/VerifAI"},"VerifAI")," - Software toolkit for the formal design and analysis of systems that include artificial intelligence (AI) and machine learning (ML) components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/WilfredTA/formal-methods-curriculum"},"Formal Methods for DeFi Developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yatima-inc/yatima-lang"},"Yatima")," - Verifiable computing language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/verifast/verifast"},"VeriFast")," - Research prototype tool for modular formal verification of C and Java programs.")))}f.isMDXComponent=!0}}]);