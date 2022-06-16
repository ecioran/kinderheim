"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[25677],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83579:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Neo4j"},l="[Neo4j](https://neo4j.com/)",s={unversionedId:"databases/neo4j",id:"databases/neo4j",title:"Neo4j",description:"Links",source:"@site/docs/databases/neo4j.md",sourceDirName:"databases",slug:"/databases/neo4j",permalink:"/kinderheim/databases/neo4j",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/databases/neo4j.md",tags:[],version:"current",frontMatter:{title:"Neo4j"},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/kinderheim/databases/mongodb"},next:{title:"Planetscale",permalink:"/kinderheim/databases/planetscale"}},c={},m=[{value:"Links",id:"links",level:2}],u={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neo4j"},(0,o.kt)("a",{parentName:"h1",href:"https://neo4j.com/"},"Neo4j")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-browser"},"Neo4j Browser")," - General purpose user interface for working with Neo4j. Query, visualize, administrate and monitor the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grand-stack/grand-stack-starter"},"GRANDstack Starter")," - Starter for building a GRANDstack (GraphQL, React, Apollo, Neo4j Database) application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://neo4j.com/developer/kb/"},"Neo4j Knowledge Base")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/neo4j-documentation/knowledge-base"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/neo4j/connecting-to-react-app-to-neo4j-148881d838b8"},"Connecting your React app to Neo4j with React Hooks (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://neo4j.com/nodes-2020/"},"NODES 2020")," - Neo4j Online Developer Expo and Summit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neo4j-devtools/relate"},"relate")," - Framework to manage Neo4j resources (databases, graph apps, backups, extensions)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lyonwj.com/blog/neo4j-http-api-edge-workers"},"Building A Location Aware Endpoint Using Neo4j And Cloudflare Workers (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/michaeldgraham/lean-stack"},"LEANstack")," - Lit-Element Apollo Neo4j."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neo4j-contrib/neo4j-spark-connector"},"Neo4j Connector for Apache Spark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://neo4j.com/blog/neo4j-aura-enterprise-ga-release/"},"Introducing Neo4j Aura Enterprise (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unhexium.net/research/neo4j-performance-adventures-for-petabyte-scale-datasets/"},"Neo4j Performance adventures for petabyte-scale datasets (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/neo4j/announcing-the-neo4j-graphql-library-beta-99ae8541bbe7"},"The Neo4j GraphQL Library Beta Release (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/noduslabs/infranodus"},"InfraNodus")," - Node.Js / Neo4J tool that translates words and relations into network graphs and shows you how it all connects. (",(0,o.kt)("a",{parentName:"li",href:"https://infranodus.com/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stellasia/neomap"},"neomap")," - Neo4j Desktop application to visualize nodes with geographic attributes on a map."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lyonwj.com/blog/no-cost-data-scraping-github-actions-neo4j-aura"},"No Cost Data Scraping With GitHub Actions And Neo4j Aura (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/johnymontana/lobste.rs-graph"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codingfinest/neo4j-go-ogm"},"Neo4j-go-ogm")," - Neo4j Object Graph Mapping Library for Go runtime."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lyonwj.com/blog/graph-visualization-with-graphql-react-force-graph"},"Graph Data Visualization With GraphQL & react-force-graph (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.tigergraph.com/blogs/benchmark/truth-behind-neo4js-trillion-relationship-graph/"},"Truth Behind Neo4j\u2019s \u201cTrillion\u201d Relationship Graph (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/neo4j/graphql"},"Neo4j GraphQL Library")," - GraphQL to Cypher query execution layer for Neo4j and JavaScript GraphQL implementations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mindstand/gogm"},"GoGM")," - Go Object Graph Mapper for Neo4j."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/graphfoundation/ongdb"},"ONgDB")," - Independent fork of Neo4j Enterprise Edition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/how-to-migrate-from-neo4j-to-memgraph"},"How to migrate from Neo4j to Memgraph (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apollosolutions/neo4j-subgraph"},"Neo4j + Apollo Federation example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@danstarns/my-journey-with-neo4j-graphql-aa74cf194dc"},"My Journey With Neo4j GraphQL (2022)"))))}h.isMDXComponent=!0}}]);