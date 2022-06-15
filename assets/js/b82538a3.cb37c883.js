"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[8044],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82028:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={},l="Encoding",p={unversionedId:"programming/encoding",id:"programming/encoding",title:"Encoding",description:"Links",source:"@site/docs/programming/encoding.md",sourceDirName:"programming",slug:"/programming/encoding",permalink:"/kinderheim/programming/encoding",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/encoding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Embedded systems",permalink:"/kinderheim/programming/embedded-systems"},next:{title:"Functional programming",permalink:"/kinderheim/programming/functional-programming/"}},m={},c=[{value:"Links",id:"links",level:2}],h={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encoding"},"Encoding"),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eev.ee/blog/2015/09/12/dark-corners-of-unicode/"},"Dark corners of Unicode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://manishearth.github.io/blog/2017/01/14/stop-ascribing-meaning-to-unicode-code-points/"},"Let\u2019s Stop Ascribing Meaning to Code Points")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackaday.com/2013/09/27/utf-8-the-most-elegant-hack/"},"UTF-8 \u2013 \u201cThe most elegant hack\u201d (2013)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://utf8everywhere.org/"},"UTF-8 Everywhere")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22867503"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://octobus.net/blog/2020-06-05-not-everything-is-utf8.html"},"Not everything is UTF-8 (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/3cus4b/not_everything_is_utf_8"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://archieml.org/"},"Archie Markup Language (ArchieML)")," - Structured text format optimized for human writability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/avian2/unidecode"},"Unidecode")," - Lossy ASCII transliterations of Unicode text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://baremessages.org/"},"BARE Message Encoding")," - Simple binary representation for structured application data. (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/r9phjo/bare_message_encoding"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/Cor3ntin/status/1277905449065553921"},"Explaining text representation in computers (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pboyd.io/posts/text-encoding/"},"Text Encoding: The Thing You Were Trying to Avoid (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://amzn.github.io/ion-docs/"},"Amazon Ion")," - Richly-typed, self-describing, hierarchical data serialization format offering interchangeable binary and text representations. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23921610"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29284428"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://richardjharris.github.io/unicode-in-five-minutes.html"},"Unicode In Five Minutes (2013)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boyter.org/posts/unicode-support-what-does-that-actually-mean/"},"Unicode support. What does that actually mean? (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lemire.me/blog/2020/10/20/ridiculously-fast-unicode-utf-8-validation/"},"Fast UTF-8 validation (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24839113"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lemire/validateutf8-experiments"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://utf-8-illustrator.com/"},"UTF-8 Illustrator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://textfiles.meulie.net/bitsaved/Books/Mackenzie_CodedCharSets.pdf"},"Coded Character Sets, History and Development (1980)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Codepoints/awesome-codepoints"},"Awesome Code Points")," - Curated list of characters in Unicode, that have interesting (and maybe not widely known) features or are awesome in some other way."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/unicode-org/text-rendering-tests"},"Text rendering tests")," - Unicode\u2019s test suite for text rendering engines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://djharper.dev/post/2020/12/26/executable-pngs/"},"Executable PNGs (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/npswqw/executable_pngs"},"Lobsters"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25543191"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stevengj/subsuper-proposal"},"Unicode Proposal to Encode Subscripts/Superscripts for Mathematical Programming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tonsky.me/blog/emoji/"},"Emoji Under the Hood")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26574008"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://doc.cat-v.org/bell_labs/utf-8_history"},"The history of UTF-8 as told by Rob Pike")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/jo5he6/history_utf_8_as_told_by_rob_pike"},"Lobsters"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26735958"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://concise-encoding.org/"},"Concise Encoding")," - Friendly data format for human and machine. Ad-hoc, secure, with 1:1 compatible twin binary and text formats and rich type support. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kstenerud/concise-encoding"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://berthub.eu/articles/posts/reed-solomon-for-programmers/"},"Practical Reed-Solomon for Programmers (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/avro"},"Apache Avro")," - Data serialization system. (",(0,i.kt)("a",{parentName:"li",href:"https://avro.apache.org/"},"Web"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devlog.hexops.com/2021/unicode-sorting-why-browsers-added-special-emoji-matching"},"Unicode sorting is hard & why browsers added special emoji matching to regexp (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thephd.dev/any-encoding-ever-ztd-text-unicode-cpp"},"Any Encoding, Ever (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27695412"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/systemd/casync"},"casync")," - Content Addressable Data Synchronizer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797"},"ANSI Escape Codes")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28145209"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fgiesen.wordpress.com/2021/08/30/entropy-coding-in-oodle-data-huffman-coding/"},"Entropy coding in Oodle Data: Huffman coding (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apfelmus.nfshost.com/articles/fun-with-morse-code.html"},"Fun with Morse Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://theorangeduck.com/page/latinendian-arabendian"},"Latinendian vs Arabendian (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://icu.unicode.org/"},"ICU - International Components for Unicode")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/unicode-org/icu"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ricosjp/ruststep"},"ruststep")," - STEP toolkit for Rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://indico.cern.ch/event/658060/contributions/2898569/attachments/1622526/2582399/pivarski-serialization.pdf"},"Overview of Serialization Technologies (2018)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://substrait.io/"},"Substrait")," - Cross-Language Serialization for Relational Algebra. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/substrait-io/substrait"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/andygrove/substrait-rs"},"substrait-rs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cisco/openh264"},"OpenH264")," - Open Source H.264 Codec."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.opencore.ch/posts/unicode-normalization-forms/"},"Unicode Normalization Forms: When \xf6 \u2260 \xf6 (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29751641"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TethysSvensson/planus"},"Planus")," - Alternative flatbuffer implementation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/intel/tinycbor"},"TinyCBOR")," - Concise Binary Object Representation (CBOR) Library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gendx/pdf-cheat-sheets"},"Cheat sheets for the Portable Document Format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sudhir.io/uuids-ulids"},"Understanding UUIDs, ULIDs and String Representations")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ucvsxl/understanding_uuids_ulids_string"},"Lobsters"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29794186"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sethmlarson.dev/blog/utf-8"},"How UTF-8 works (2022)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30259097"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/5qtiye/how_utf_8_works"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kunststube.net/encoding/"},"What Every Programmer Absolutely, Positively Needs To Know About Encodings (2011)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30384223"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://simonwillison.net/2022/Mar/5/dash-encoding/"},"Why I invented \u201cdash encoding\u201d, a new encoding scheme for URL paths (2022)")," (",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/simonw/status/1500228316309061633"},"Tweet"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.darrien.dev/posts/you-dont-know-gif/"},"You Don't Know GIF \u2013 An analysis of a GIF file and some weird GIF features (2022)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vertexclique/degauss"},"DeGauss")," - Avro schema compatibility checker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.mseymour.ca/hex_book/hexstrat.html"},"Hex: A Strategy Guide")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30783156"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/acheronfail/trrs"},"trrs")," - CLI tool to transform data between different encodings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30895905"},"Ask HN: Is there a tool to generate binary protocol figures out of a spec? (2022)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=_mZBa3sqTrI"},"Plain Text - Dylan Beattie (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/liblc3"},"Low Complexity Communication Codec (LC3)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/socketsupply/ltp"},"ltp")," - High performance, readable, and maintainable, in-place encoding format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://brandur.org/nanoglyphs/026-ids"},"Identity Crisis: Sequence v. UUID as Primary Key")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/l9fnbd/identity_crisis_sequence_v_uuid_as"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://concise-encoding.org/"},"Concise Encoding")," - Secure data format for a modern world. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31475779"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ssbc/bipf-spec"},"BIPF (Binary In-Place Format) Spec")," - Binary format designed for in-place (without parsing) reads, with schemaless json-like semantics.")))}u.isMDXComponent=!0}}]);