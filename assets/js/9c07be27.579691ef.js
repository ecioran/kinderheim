"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[51],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,k=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return r?a.createElement(k,n(n({ref:t},u),{},{components:r})):a.createElement(k,n({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20657:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=r(87462),i=r(63366),o=(r(67294),r(3905)),n=["components"],l={title:"ClickHouse"},c="[ClickHouse](https://clickhouse.com/)",s={unversionedId:"databases/clickhouse",id:"databases/clickhouse",title:"ClickHouse",description:"Links",source:"@site/docs/databases/clickhouse.md",sourceDirName:"databases",slug:"/databases/clickhouse",permalink:"/kinderheim/databases/clickhouse",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/databases/clickhouse.md",tags:[],version:"current",frontMatter:{title:"ClickHouse"},sidebar:"tutorialSidebar",previous:{title:"Cassandra DB",permalink:"/kinderheim/databases/cassandra"},next:{title:"CockroachDB",permalink:"/kinderheim/databases/cockroachdb"}},u={},p=[{value:"Links",id:"links",level:2}],m={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse"},(0,o.kt)("a",{parentName:"h1",href:"https://clickhouse.com/"},"ClickHouse")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/korchasa/awesome-clickhouse"},"Awesome ClickHouse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/loyd/ch2rs"},"ch2rs")," - Generate Rust structs from ClickHouse rows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://posthog.com/blog/secrets-of-posthog-query-performance"},"Scaling product analytics built on ClickHouse")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30766563"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uptrace/go-clickhouse"},"ClickHouse Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AlexAkulov/clickhouse-backup"},"ClickHouse Backup")," - Tool for easy ClickHouse backup and restore with cloud storages support."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/"},"ClickHouse Docs")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-docs"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PLMSA_gDdyM"},"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043e\u0431 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 ClickHouse / \u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0417\u0430\u0442\u0435\u043b\u0435\u043f\u0438\u043d (\u042f\u043d\u0434\u0435\u043a\u0441) (2018)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=_vSw3WO2mMY"},"A Fast Intro to Fast Query with ClickHouse, by Robert Hodges (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lmangani/fluxpipe"},"FluxPipe")," - Experimental indepenent Flux API for ClickHouse and other embedded datasources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/ij-perf-report-aggregator"},"Tool to collect performance reports in JSON format from TeamCity, insert into ClickHouse and visualize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/sqlalchemy-clickhouse"},"ClickHouse SQLAlchemy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xzkostyan/clickhouse-sqlalchemy"},"ClickHouse SQLAlchemy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mymarilyn/clickhouse-driver"},"ClickHouse Python Driver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pradeepchhetri.xyz/clickhousekeeper/"},"ClickHouse Keeper")," - Alternative to Apache ZooKeeper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pradeepchhetri.xyz/clickhousevstimescaledb/"},"ClickHouse vs TimescaleDB (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-graphite/graphite-clickhouse"},"Graphite cluster backend with ClickHouse support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-presentations"},"Presentations, meetups and talks about ClickHouse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/balance-platform/pillar"},"Pillar")," - Elixir library client for work with ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/shimohq/mogo"},"Mogo")," - Light weight log visual analytic platform for ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tech.marksblogg.com/install-clickhouse-faster.html"},"Install ClickHouse Faster (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/datablade-io/daisy"},"Daisy")," - Open-source column-oriented and streaming time series database management system built on top of ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grafana/clickhouse-datasource"},"ClickHouse data source for Grafana")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pradeepchhetri.xyz/clickhouselesserknownfeatures/"},"Lesser Known Features of ClickHouse (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31561780"},"HN"),")")))}h.isMDXComponent=!0}}]);