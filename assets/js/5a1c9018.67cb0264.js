"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[39867],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=o.createContext({}),h=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=h(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),u=h(a),m=l,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return a?o.createElement(g,p(p({ref:t},s),{},{components:a})):o.createElement(g,p({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=u;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:l,p[1]=n;for(var h=2;h<r;h++)p[h]=a[h];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14499:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return n},metadata:function(){return h},toc:function(){return c}});var o=a(87462),l=a(63366),r=(a(67294),a(3905)),p=["components"],n={title:"Apollo GraphQL"},i="[Apollo GraphQL](https://www.apollographql.com/)",h={unversionedId:"networking/graphql/apollo-graphql",id:"networking/graphql/apollo-graphql",title:"Apollo GraphQL",description:"OSS Apollo apps",source:"@site/docs/networking/graphql/apollo-graphql.md",sourceDirName:"networking/graphql",slug:"/networking/graphql/apollo-graphql",permalink:"/kinderheim/networking/graphql/apollo-graphql",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/networking/graphql/apollo-graphql.md",tags:[],version:"current",frontMatter:{title:"Apollo GraphQL"},sidebar:"tutorialSidebar",previous:{title:"GraphQL",permalink:"/kinderheim/networking/graphql/"},next:{title:"Hasura",permalink:"/kinderheim/networking/graphql/hasura"}},s={},c=[{value:"OSS Apollo apps",id:"oss-apollo-apps",level:2},{value:"Links",id:"links",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apollo-graphql"},(0,r.kt)("a",{parentName:"h1",href:"https://www.apollographql.com/"},"Apollo GraphQL")),(0,r.kt)("h2",{id:"oss-apollo-apps"},"OSS Apollo apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paulnta/tinycounter"},"Tiny Counter")," - Collaborative counter web app to keep track of multiple values.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.apollographql.com/apollo-raises-22-million-to-simplify-app-development-ee30502c81b3"},"Apollo raises \\$22 million to simplify app development (2019)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=20164531"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://principledgraphql.com/"},"Principled GraphQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-tooling"},"Apollo CLI")," - Tooling for development and production Apollo workflows."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.apollographql.com/apollo-federation-f260cf525d21"},"Apollo Federation (2019)")," - Revolutionary architecture for building a distributed graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-cache-persist"},"apollo-cache-persist")," - Simple persistence for all Apollo Cache implementations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/convoyinc/apollo-cache-hermes"},"Hermes")," - Cache For Apollo Client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/ac3-state-management-examples"},"Apollo Client 3 State Management Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/signalnerve/workers-graphql-server"},"workers-graphql-server")," - Lightning-fast, globally distributed Apollo GraphQL server, deployed at the edge using Cloudflare Workers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/announcing-the-release-of-apollo-client-3-0/"},"Announcing the Release of Apollo Client 3.0 (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/tutorial/introduction/"},"Apollo platform tutorial app")," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/fullstack-tutorial"},"Code"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nikolasburk/apollo-server-livestream"},"Code 2"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/apollo-studio-a-graphql-ide-for-every-environment/"},"Apollo Studio: A GraphQL IDE for every environment (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patrick.wtf/posts/apollo-federation-local-services"},"Using Apollo Federation with local schemas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/demystifying-cache-normalization/"},"Apollo Client \u2013 Demystifying Cache Normalization (2020)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26728114"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/correttojs/graphql-codegen-apollo-next-ssr"},"Auto generate Apollo code for Next.js SSR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/theGlenn/apollo-prophecy"},"Apollo Prophecy")," - Command tool to generate errors files for your Appolo Server and Client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NerdWalletOSS/apollo-invalidation-policies"},"Apollo Invalidation Policies")," - Extension of the Apollo 3 cache with support for type-based invalidation policies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.apollographql.com/"},"Apollo Studio")," - Cloud platform that helps you build, validate, and secure your organization's data graph. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-studio-community"},"Issues"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/appmotion/apollo-augmented-hooks"},"apollo-augmented-hooks")," - Drop-in replacements for @apollo/client's useQuery, useMutation and useSubscription hooks with reduced overhead and additional functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://garrit.xyz/posts/2021-10-04-server-side-caching-with-apollo-graphql"},"Server-Side Caching with Apollo GraphQL (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-rs"},"apollo-rs")," - Spec compliant GraphQL Tools in Rust. (",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/_lrlna/status/1448643017842122759"},"Tweet"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cvburgess/SQLDataSource"},"SQLDataSource")," - SQL DataSource for Apollo GraphQL projects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apollographql/router"},"Apollo Router")," - Configurable, high-performance graph router for a federated graph. (",(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/announcement/backend/apollo-router-our-graphql-federation-runtime-in-rust/"},"Article"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zendesk/laika"},"Laika")," - Log, test, intercept and modify Apollo Client's operations. (",(0,r.kt)("a",{parentName:"li",href:"https://zendesk.github.io/laika/"},"Web"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://odyssey.apollographql.com/"},"Learn GraphQL with Apollo")," - Level up with these practical, hands-on trainings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=vwpqHYuSAXE"},"Understanding Caching in Apollo Client 3 (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Aslemammad/jotai-apollo"},"Jotai Apollo")," - Apollo graphql client integration for jotai."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easco/absinthe_apollo_sockets"},"Absinthe and Apollo Sockets")," - Use the Apollo Websocket protocol to drive Absinthe GraphQL functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/howtographql/typescript-apollo"},"Tutorial for HowToGraphQL with Typescript, Apollo-Server, Nexus and Prisma")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jaydenseric/apollo-upload-client"},"apollo-upload-client")," - Terminating Apollo Link for Apollo Client that fetches a GraphQL multipart request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/StarpTech/apollo-datasource-http"},"Apollo HTTP Data Source")," - Optimized JSON HTTP Data Source for Apollo Server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/timhall/svelte-apollo"},"Svelte Apollo")," - Svelte integration for Apollo GraphQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/mobile/kotlin/the-story-behind-apollo-kotlin-3-codegen/"},"The story behind Apollo Kotlin 3 codegen (2022)"))))}m.isMDXComponent=!0}}]);