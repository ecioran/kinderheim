"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[6117],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),h=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=h(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=o,g=c["".concat(m,".").concat(u)]||c[u]||p[u]||i;return a?r.createElement(g,n(n({ref:t},s),{},{components:a})):r.createElement(g,n({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var h=2;h<i;h++)n[h]=a[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5757:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var r=a(7462),o=a(3366),i=(a(7294),a(3905)),n=["components"],l={},m="Category theory",h={unversionedId:"math/category-theory/category-theory",id:"math/category-theory/category-theory",title:"Category theory",description:'Category theory is an abstract branch of mathematics used to model mathematical "objects", and mappings between them.',source:"@site/docs/math/category-theory/category-theory.md",sourceDirName:"math/category-theory",slug:"/math/category-theory/",permalink:"/kinderheim/math/category-theory/",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/math/category-theory/category-theory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calculus",permalink:"/kinderheim/math/calculus"},next:{title:"Differential equations",permalink:"/kinderheim/math/differential-equations"}},s={},p=[{value:"Links",id:"links",level:2}],c={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"category-theory"},"Category theory"),(0,i.kt)("p",null,'Category theory is an abstract branch of mathematics used to model mathematical "objects", and mappings between them.'),(0,i.kt)("p",null,'In order to define a category you define the mathematical objects involved (such as "Sets" for instance), and the mappings (such as "Functions" for instance). So there is a category of mathematical sets and their functions.'),(0,i.kt)("p",null,"Now the categories themselves could also be considered mathematical objects, and we could look at mappings between categories as well, which would also be a category."),(0,i.kt)("p",null,"In more detail a Category consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Objects."),(0,i.kt)("li",{parentName:"ul"},"Mappings (called morphisms) between those objects."),(0,i.kt)("li",{parentName:"ul"},"A binary composition operator, which can combine those mappings such that a mapping from object A to object B, and a mapping from object B to object C can be combined into a single mapping from object A to object C."),(0,i.kt)("li",{parentName:"ul"},"There should be a mapping that acts as an identity under composition, such that composing that mapping with another mapping M, gives you back the mapping M."),(0,i.kt)("li",{parentName:"ul"},"Composition should be associative.")),(0,i.kt)("p",null,"Anything that can be represented by the above list can be analyzed as a category, that is why it is considered so abstract."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://chalkdustmagazine.com/features/an-invitation-to-category-theory/"},"An invitation to category theory (2018)")," - Just what is category theory? Tai-Danae Bradley explains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1809.05923"},"What is Applied Category Theory? (2018)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26011025"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ncatlab.org/nlab/show/category+theory"},"Category Theory nLab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://johncarlosbaez.wordpress.com/2018/03/26/seven-sketches-in-compositionality/"},"Applied Category Theory \u2013 Online Course")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/"},"Functional Programming and Category Theory [Part 1] - Categories and Functors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://math.mit.edu/~dspivak/teaching/sp18/"},"Seven Sketches in Compositionality: An Invitation to Applied Category Theory")," (",(0,i.kt)("a",{parentName:"li",href:"http://math.mit.edu/~dspivak/teaching/sp18/7Sketches.pdf"},"PDF"),") (",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1803.05316"},"Paper"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hmemcpy/milewski-ctfp-pdf"},"Category Theory for Programmers PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/"},"Category Theory for Programmers: The Preface")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rpeszek/notes-milewski-ctfp-hs"},"Notes"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jozefg.bitbucket.io/posts/2013-10-22-category-theory-in-haskell.html"},"Learn You Some Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/user/TheCatsters"},"The Catsters YouTube channel")," - Videos on category theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/explainlikeimfive/comments/8rsvqw/eli5_what_is_category_theory/"},"ELI 5: Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golem.ph.utexas.edu/category/2010/03/a_perspective_on_higher_catego.html"},"A Perspective on Higher Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BF6kHD1DAeU&list=PLGCr8P_YncjVjwAxrifKgcQYtbZ3zuPlb"},"Category theory foundations 1.0 course")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.researchgate.net/publication/282868977_Why_category_theory_matters_a_functional_programmer's_perspective"},"Why category theory matters: a functional programmer\u2019s perspective")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jwiegley/category-theory"},"Category Theory in Coq")," - Encodes category theory in Coq, with the primary aim being to allow representation and manipulation of categorical terms, as well realization of those terms in various target categories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fredefox/cat"},"Formalization of category theory in cubical Agda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://johncarlosbaez.wordpress.com/2018/06/06/applied-category-theory-course-databases/"},"Applied Category Theory Course: Databases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jmchapman/categories"},"Category theory library for Agda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://conexus.ai/ventures"},"Conexus Act")," - Looking for promising ventures that want to utilize category theory to pursue the latest breakthroughs in Logistics, Pharma, Aerospace, Manufacturing, Transportation and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.ploeh.dk/2017/10/04/from-design-patterns-to-category-theory/"},"From design patterns to category theory (2017)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=20151055"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ncatlab.org/nlab/show/fully+formal+ETCS"},"Fully formal ETCS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.math3ma.com/blog/the-yoneda-lemma"},"The Yoneda Perspective: an object is completely determined by its relationships to other objects (2017)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bartoszmilewski.com/2013/05/15/understanding-yoneda/"},"Understanding Yoneda (2013)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/statebox/idris-ct"},"Idris category theory")," - Formally verified category theory library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mroman42.github.io/ctlc/ctlc.pdf"},"Category Theory and Lambda Calculus Thesis (2018)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pdfs.semanticscholar.org/3f99/553ca06ce451c5b76479c96e191ad69f3e04.pdf"},"Computational Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1701.04732.pdf"},"A categorical semantics for causal structure (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.math.jhu.edu/~eriehl/lambda.pdf"},"A categorical view of computational effects (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/statebox/awesome-applied-ct"},"Awesome Applied Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mbernat/ecats"},"Ecats")," - Editor for category theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Ssx2_JKpB3U"},"Lambda World 2019 - A categorical view of computational effects - Emily Riehl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.sci.brooklyn.cuny.edu/~noson/TCStext.html"},"Theoretical Computer Science for the Working Category Theorist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.math3ma.com/blog/notes-on-act"},"Notes on Applied Category Theory (2018)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLhgq-BqyZ7i5lOqOqqRiS0U5SwTmPpHQ5"},"Applied Category Theory MIT lectures (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/awodey/CatLogNotes"},"Categorical Logic Notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NUBEB9QlNCM"},"Programming with Categories lectures (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2001.05778"},"Aspects of categorical recursion theory (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22083147"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://conal.net/papers/compiling-to-categories/"},"Compiling to categories (2017)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ArulselvanMadhavan/ocaml-ctfp"},"OCaml version of Category Theory For Programmers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@oli-kitty/recursion-schemes-categorically"},"Recursion schemes, categorically")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RonyrB0kLew"},"Todd Trimble: Geometry of regular relational calculus (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BartoszMilewski/Publications"},"Bartosz Milewski's publications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.philipzucker.com/computational-category-theory-in-python-i-dictionaries-for-finset/"},"Computational Category Theory in Python")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23058551"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},"[HN: Applied Category Theory (2019)(",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23048149"},"https://news.ycombinator.com/item?id=23048149"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/NathanielVirgo/status/1262019641720832001"},"Definition of a monoidal category summarised in string diagrams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://training.statebox.org/"},"Statebox Category Theory Course")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://multix.sfo2.cdn.digitaloceanspaces.com/Category%20Theory%20TechBBQ.pdf"},"Category Theory -- The math behind hyper-convergence automation (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chiroptical/ctfp-book-club"},"Pittsburgh Functional Programming Book Club featuring Category Theory for Programmers")," -"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://act2020.mit.edu/"},"Applied Category Theory 2020")," (",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLCOXjXDLt3pYot9VNdLlZqGajHyZUywdI"},"2020 Recordings"),") (",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLCOXjXDLt3pYPE63bVbsVfA41_wa3sZOh"},"2020 Tutorials"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=YCJAzV1g6Xo"},"MIT Categories Seminar - Eugenia Cheng: Distributive laws for Lawvere theories (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7zr2qnud4XM"},"AlgebraicJulia: Applied Category Theory in Julia | James Fairbanks (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/math/comments/i7erja/why_does_the_working_mathematician_need_category/"},'Why does the "working mathematician" need category theory? (2020)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bartoszmilewski.com/2017/02/28/f-algebras/"},"F-Algebras (2017)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://topology.pubpub.org/"},"Topology: A Categorical Approach (2020)")," - Graduate-level textbook that presents basic topology from the perspective of category theory. (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/cq30tt/topology_categorical_approach"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://brendanfong.com/programmingcats.html"},"MIT: Programming with Categories (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24353976"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"http://brendanfong.com/programmingcats_files/cats4progs-DRAFT.pdf"},"Draft"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golem.ph.utexas.edu/category/"},"n-Category Cafe category theory posts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mitpress.mit.edu/books/category-theory-sciences"},"Category Theory for the Sciences (2014)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://perimeterinstitute.ca/personal/tfritz/2019/cps_workshop/"},"Categorical Probability and Statistics (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLaILTSnVfqtIebAXFOcee9MvAyBwhIMyr"},"Videos"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://pll.cpsc.ucalgary.ca/charity1/www/home.html"},"Charity")," - Categorical programming language. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mietek/charity-lang"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://k-bx.github.io/articles/boring-monoid-category.html"},"A monoid is a category with just one object. so what's the problem? (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://johncarlosbaez.wordpress.com/2020/10/19/epidemiological-modeling-with-structured-cospans/"},"Epidemiological Modeling With Structured Cospans (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://garlandus.co/"},"Garlandus blog")," - Essays on some of the mathematics behind computing, from classical logic to the monads of category theory, by way of Goettingen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.jonmsterling.com/pdfs/lrat.pdf"},"Logical Relations as Types: Proof-Relevant Parametricity for Program Modules (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prathyvsh/category-theory-resources"},"Category Theory Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/joshvera/generative-effects"},"Applied Category Theory: Notes on generative effects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.philipzucker.com/i-gave-a-talk-on-executing-categories/"},"Executing Categories (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AviCraimer/category-theory-diagrams"},"App for interactive category theory diagrams and notebooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ncatlab.org/nlab/show/Yoneda+lemma"},"Yoneda lemma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLRadJIh6Wu9m60eT0tXjngv7nebUgraaA"},"Category Theory introduction lectures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://richardzach.org/2019/11/01/the-significance-of-the-curry-howard-isomorphism/"},"The significance of the Curry-Howard isomorphism (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mitpress.mit.edu/books/basic-category-theory-computer-scientists"},"Basic Category Theory for Computer Scientists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DavidJaz/DynamicalSystemsBook/blob/master/book/DynamicalBook.pdf"},"Categorical Systems Theory Book (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.math.jhu.edu/~eriehl/"},"Emily Riehl Research")," - Associate professor in the department of mathematics at Johns Hopkins University working on a variety of topics in category theory related to homotopy theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://davidjaz.com/"},"David Jaz Myers")," - Interested in (higher) category theory, homotopy type theory, and cohesion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dspivak/poly/blob/main/Book-Poly.pdf"},"P-Func: Math for the Mothership (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=50s62D5Ah-M"},"David Jaz Myers: Paradigms of composition (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLCOXjXDLt3pYot9VNdLlZqGajHyZUywdI"},"ACT 2020 Recordings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3FxeY5DbPn0"},"David Jaz Myers: Open dynamical systems, trajectories and hierarchical planning (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://q.uiver.app/"},"Quiver")," - Modern commutative diagram editor. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/varkor/quiver"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25213201"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://johncarlosbaez.wordpress.com/2021/01/02/applied-category-theory-2021-adjoint-school/"},"Applied Category Theory 2021")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boris-marinov.github.io/category-theory-illustrated/"},"Category Theory Illustrated")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/boris-marinov/category-theory-illustrated"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/JohnWCartmell/Theory"},"Papers on aspects of Generalised Algebraic Theories, Contextual Categories and Mathematical Theory Of Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.quantamagazine.org/emily-riehl-conducts-the-mathematical-orchestra-from-the-middle-20200902/"},"Emily Riehl is rewriting the foundations of higher category theory (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26334535"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=aXS5HZ_1fNQ"},"Emily Pillmore: Type Arithmetic and the Yoneda Lemma (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikeshulman/catlog"},"Categorical logic from a categorical point of view")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boris-marinov.github.io/category-theory-illustrated/04_order/"},"Category Theory Illustrated - Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tikzcd.yichuanshen.de/"},"tikzcd-editor")," - Simple visual editor for creating commutative diagrams. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/yishn/tikzcd-editor"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hU8lG-R67Qg"},"The Categorical Machine: Part 1 (Applied Category Theory) (2020)")," - Compare Functional Programming, Lambda Calculus, and Categories (Cats)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bgavran/Category_Theory_Machine_Learning"},"Category Theoretic Approaches to Machine Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.brunogavranovic.com/posts/2021-03-03-Towards-Categorical-Foundations-Of-Neural-Networks.html"},"Towards Categorical Foundations of Learning (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://math.mit.edu/~dspivak/informatics/"},"Category theory is a universal modeling language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27642986"},"Ask HN: How to Get into Category Theory? (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nforum.ncatlab.org/"},"nForum")," - Discussion forum about contributions to the nLab wiki and related areas of mathematics, physics, and philosophy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.scientificamerican.com/article/infinity-category-theory-offers-a-birds-eye-view-of-mathematics1/"},"Infinity Category Theory Offers a Bird\u2019s-Eye View of Mathematics (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28536516"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PL8yHsr3EFj51F9XZ_Ka4bLnQoxTdMx0AL"},"Categories for the idle mathematician - YouTube (2021)")," - Introductory lectures on category theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boris-marinov.github.io/category-theory-illustrated/05_logic/"},"Category Theory Illustrated - Logic")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28660157"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.brunogavranovic.com/posts/2019-09-12-dinatural-transformations.html"},"Dinatural transformations (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://miklos-martin.github.io//learn/fp/category-theory/2018/02/01/adventures-in-category-theory-the-algebra-of-types.html"},"Adventures in Category Theory - The Algebra of Types (2018)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28926834"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dpmms.cam.ac.uk/~ardm/segal.pdf"},"Further remarks on Bourbaki")," (",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/sigfpe/status/1453824591621541892"},"Tweet"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/drever/ct-consciousness"},"Category Theory relation to consciousness")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adamnemecek/adjoint"},"Thoughts on adjoint, norm and such")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bgavran/Category_Theory_Resources"},"Category Theory Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cs.nott.ac.uk/~pszgmh/cat.html"},"Introduction to Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattearnshaw/lawvere"},"Collected works of F. W. Lawvere")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://amelia.how/posts/cubical-sets.html"},"Cubical Sets (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://amelia.how/quick/axiom-j.html"},"A quickie: Axiom J (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.02706"},"Higher Theories and Monads (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BartoszMilewski/PolyLens/blob/main/PolyLens.pdf"},"Polynomial Lens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.08964"},"An introduction to regular categories (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://jacobzelko.com/C3T/"},"Crash Course Category Theory Notes/Resources")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheCedarPrince/C3T"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29640873"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7dmrDYQh4rc"},"Evan Patterson: Realizing Applied Category Theory in Julia (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CatTheoryByExample/book/blob/master/cattheory.pdf"},"Category Theory by Example (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nasa.gov/consortium/CategoryTheory"},"NASA's Category Theory Resources")," (",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/cbarrett/status/1475620079987474432"},"Tweet"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.statebox.org/fun-with-categories-70c64649b8e0"},"Fun with Categories (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/haskell/comments/rrpnoy/recommended_resources_for_learning_category/"},"Recommended resources for learning category theory / Haskell (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.logicmatters.net/categories/"},"Category Theory: Lecture Notes and Online Books")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29734482"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://johncarlosbaez.wordpress.com/2021/10/27/learn-act/"},"Learn Applied Category Theory! (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://nlab-pages.s3.us-east-2.amazonaws.com/nlab/show/Cauchy+complete+category"},"Cauchy complete category")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/monsoon0/status/1481739590063239168"},"Cauchy completion in category theory - Scott Johnson (1993)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.jonmsterling.com/math/lectures/categorical-foundations.html"},"Foundations of Relative Category Theory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cambridge.org/core/elements/theoretical-computer-science-for-the-working-category-theorist/5F3499D1F326D2D77567AA1041627699"},"Theoretical Computer Science for the Working Category Theorist (2022)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://math.ucr.edu/home/baez/topos.html"},"Topos Theory in a Nutshell")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30112547"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kerodon.net/"},"Kerodon")," - Online resource for homotopy-coherent mathematics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hjorthjort.xyz/2020/04/22/similes-as-functors.html"},"Analogies are Functors: A Gentle Introduction to Category Theory (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/funcool/cats"},"cats")," - Category Theory and Algebraic abstractions for Clojure and ClojureScript."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sites.google.com/view/derivedfrg/events/cornell-2022"},"Derived Categories and Moduli Spaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jpvillaisaza.co/cain/cain.pdf"},"Category Theory Applied to Functional Programming")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jpvillaisaza/cain"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1311.4376"},"Understanding Visualization: A Formal Approach using Category Theory and Semiotics (2013)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.quantamagazine.org/with-category-theory-mathematics-escapes-from-equality-20191010/"},"With Category Theory, Mathematics Escapes from Equality (2019)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30809385"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Nertsal/categories"},"Category theory diagram")," - Implements some basic Category theory in the form of a diagram with the intention to help to visualize and understand the concepts in Category theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vcvpaiva/DialecticaCategories"},"Dialectica Categories")," - Place to collect work on dialectica categories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2204.10630"},"On the the missing diagrams in Category Theory (first-person version) (2022)")," (",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/bgavran3/status/1518490598675824642"},"Tweet"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.categoricaldata.net/"},"Categorical Query Language (CQL)")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CategoricalData/CQL"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alhassy/CatsCheatSheet"},"CatsCheatSheet")," - Listing of common theorems in elementary category theory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bgavran/Agda_Category_Theory"},"Formalization of Category Theory in Agda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vcvpaiva/Dialectica"},"Dialectica")," - 2022 AMS MRC on Applied Category Theory.")))}u.isMDXComponent=!0}}]);