"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[78512],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3139:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),o=["components"],s={title:"REST"},l="[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)",p={unversionedId:"networking/rest",id:"networking/rest",title:"REST",description:"Links",source:"@site/docs/networking/rest.md",sourceDirName:"networking",slug:"/networking/rest",permalink:"/kinderheim/networking/rest",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/networking/rest.md",tags:[],version:"current",frontMatter:{title:"REST"},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ",permalink:"/kinderheim/networking/rabbitmq"},next:{title:"SSH",permalink:"/kinderheim/networking/ssh"}},m={},c=[{value:"Links",id:"links",level:2}],u={toc:c};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rest"},(0,n.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-swagger/go-swagger"},"go-swagger")," - Swagger 2.0 implementation for go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://standards.rest/"},"Standards.REST")," - Collection of standards and specifications, that help make fantastic HTTP/REST APIs. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=19943008"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md"},"Microsoft REST API Guidelines")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21609807"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api"},"Best Practices for Designing a Pragmatic RESTful API (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/learning/learning-rest-apis"},"Learning REST APIs course")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/moficodes/build-your-first-rest-api-with-go-2gcj"},"Build Your First Rest API with Go (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ptboyer/restful-api-design-tips"},"RESTful API Design Tips from Experience")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/a8m/rql"},"RQL")," - Resource query language for REST. It provides a simple and light-weight API for adding dynamic querying capabilities to web-applications that use SQL-based database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twobithistory.org/2020/06/28/rest.html"},"Roy Fielding's Misappropriated REST Dissertation (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/rbom5a/roy_fielding_s_misappropriated_rest"},"Lobsters"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23670238"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29009729"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/typicode/json-server"},"JSON Server")," - Get a full fake REST API with zero coding in less than 30 seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," - Fake Online REST API for Testing and Prototyping. Powered by JSON Server + LowDB."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.wutsi.com/read/246/5-steps-for-designing-your-rest-apis"},"Steps for Designing REST API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25913429"},"REST API response \u2013 Should you envelope or not?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/"},"Best practices for REST API design (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26225373"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukeautry/tsoa"},"tsoa")," - OpenAPI-compliant REST APIs using TypeScript and Node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://retool.com/api-generator/"},"REST API Generator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/"},"REST API Tutorial")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tfredrich/RestApiTutorial.com"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kieranpotts.com/rebranding-rest/"},"Should we rebrand REST? (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/j7qi7v/should_we_rebrand_rest"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.crudful.com/guides/what-is-rest"},"Practical REST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://restfulapi.net/"},"What is REST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/koddr/tutorial-go-fiber-rest-api"},"Tutorial: Build a RESTful API on Go")," - Fiber, PostgreSQL, JWT and Swagger docs in isolated Docker containers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.moesif.com/blog/technical/api-design/Best-Practices-for-Versioning-REST-and-GraphQL-APIs/"},"Best Practices for Versioning REST and GraphQL APIs (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.swyx.io/client-server-battle/"},"Why do Webdevs keep trying to kill REST? (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.lpalmieri.com/posts/how-to-write-a-rest-client-in-rust-with-reqwest-and-wiremock/"},"How To Write A REST Client In Rust (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vasilakisfil/Introspected-REST"},"Introspected REST: An alternative to REST and GraphQL")," (",(0,n.kt)("a",{parentName:"li",href:"https://introspected.rest/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/autorest"},"AutoRest")," - Generates client libraries for accessing RESTful web services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/autorest.go"},"AutoRest Go Generator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/swaggest/rest"},"REST with Clean Architecture for Go")," - Web services with OpenAPI and JSON Schema done quick in Go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/brielov/resty"},"resty")," - Syntactic sugar for RESTful APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tanhakabir/rest-book"},"REST Book")," - VSCode Extension that allows you to perform REST calls in a Notebook interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rehacktive/caffeine"},"caffeine")," - Very basic REST service for JSON data - enough for prototyping and MVPs. In Go. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29238563"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/brokenhandsio/Restly"},"Restly")," - Simple open source REST client for macOS, iOS and iPadOS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/golang/comments/r11ime/what_are_the_rest_api_reference_projects_that_can/"},"What are the REST API reference projects that can be used as a guide in 2021?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.frankel.ch/evolve-apis/"},"Evolving your RESTful APIs, a step-by-step approach (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/programming/comments/t2sv52/evolving_your_restful_apis_a_stepbystep_approach/"},"Reddit"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/oleg008/is-rest-simpler-than-graphql-78c"},"Is REST simpler than GraphQL? (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/learning-cloud-native-go/myapp"},"How to build a Dockerized RESTful API application using Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Urigo/SOFA"},"SOFA")," - Best way to create REST APIs - Generate RESTful APIs from your GraphQL Server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pactumjs/pactum"},"PactumJS")," - REST API Testing Tool for all levels in a Test Pyramid."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opensource.zalando.com/restful-api-guidelines/"},"Zalando RESTful API and Event Guidelines")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zalando/restful-api-guidelines"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/danielgtaylor/restish"},"Restish")," - CLI for interacting with REST-ish HTTP APIs with some nice features built-in.")))}h.isMDXComponent=!0}}]);