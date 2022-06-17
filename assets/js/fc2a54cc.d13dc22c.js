"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[56754],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=l(a),h=s,b=c["".concat(o,".").concat(h)]||c[h]||p[h]||i;return a?r.createElement(b,n(n({ref:t},m),{},{components:a})):r.createElement(b,n({ref:t},m))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,n=new Array(i);n[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:s,n[1]=u;for(var l=2;l<i;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97115:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=a(87462),s=a(63366),i=(a(67294),a(3905)),n=["components"],u={title:"Message queue"},o="[Message queue](https://en.wikipedia.org/wiki/Message_queue)",l={unversionedId:"distributed-systems/message-queue/message-queue",id:"distributed-systems/message-queue/message-queue",title:"Message queue",description:"Links",source:"@site/docs/distributed-systems/message-queue/message-queue.md",sourceDirName:"distributed-systems/message-queue",slug:"/distributed-systems/message-queue/",permalink:"/kinderheim/distributed-systems/message-queue/",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/distributed-systems/message-queue/message-queue.md",tags:[],version:"current",frontMatter:{title:"Message queue"},sidebar:"tutorialSidebar",previous:{title:"Load balancing",permalink:"/kinderheim/distributed-systems/load-balancing"},next:{title:"MQTT",permalink:"/kinderheim/distributed-systems/message-queue/mqtt"}},m={},p=[{value:"Links",id:"links",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,s.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"message-queue"},(0,i.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/Message_queue"},"Message queue")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://patchbay.pub/"},"patchbay")," - Message queue implemented over HTTP. (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/t8dsft/patchbay_poor_man_s_message_queue"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/softwaremill/elasticmq"},"ElasticMQ")," - Message queue system, offering an actor-based Scala and an SQS-compatible REST (query) interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/antirez/disque-module"},"Disque")," - Ongoing experiment to build a distributed, in-memory, message broker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adjust/rmq"},"rmq")," - Message queue system written in Go and backed by Redis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/taskforcesh/bullmq"},"BullMQ")," - Premium Message Queue for NodeJS based on Redis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/celery/celery"},"Celery")," - Distributed Task Queue. (",(0,i.kt)("a",{parentName:"li",href:"https://docs.celeryproject.org/en/stable/index.html"},"Docs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rusty-celery/rusty-celery"},"Rusty Celery")," - Rust implementation of Celery for producing and consuming background tasks. (",(0,i.kt)("a",{parentName:"li",href:"https://rusty-celery.github.io/"},"Docs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq"},"Apache RocketMQ")," - Distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tylertreat/mq-benchmarking"},"Performance benchmarks for various message queues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sunilkumarc.in/everything-you-need-to-know-about-message-queues"},"Everything You Need To Know About Message Queues (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/w1bk6l/how_do_i_design_system_process_messages"},"How do I design a system to process messages sequentially (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sudhir.io/the-big-little-guide-to-message-queues/"},"The Big Little Guide to Message Queues (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25591492"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RichardKnop/machinery"},"Machinery")," - Asynchronous task queue/job queue based on distributed message passing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tomarrell/miniqueue"},"MiniQueue")," - Simple, single binary, message queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apibillme/broker"},"Broker")," - Real-time BaaS (Backend as a Service). SSE message broker that requires you write no backend code to have a full real-time API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apibillme/jackrabbit"},"JackRabbit")," - Real-time Message Queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/asim/mq"},"MQ")," - Simple distributed in-memory message broker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/queer/singyeong"},"nerve")," - Cloud-native messaging/pubsub with powerful routing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://b.amy.gg/thoughts-on-inter-service-messaging"},"Thoughts on inter-service messaging (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/batchcorp/plumber"},"Plumber")," - Swiss army knife CLI tool for interacting with Kafka, RabbitMQ and other messaging systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/simplex-chat/simplexmq"},"SimpleXMQ")," - Message broker for managing message queues and sending messages over public network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://activemq.apache.org/"},"Apache ActiveMQ")," - Popular open source, multi-protocol, Java-based message broker. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/activemq"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/disaster37/activemq"},"Docker"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KosyanMedia/burlesque"},"Burlesque")," - Message queue server with HTTP interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/arthurprs/floki"},"Floki Message Queue")," - Borrows concepts from both Kafka and Amazon SQS into an easy to use package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/jevakallio/status/1507367310352396320"},"Great hosted message queues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/palfrey/cavalcade"},"Cavalcade")," - AMQP broker backed by PostgreSQL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pencil.toast.cafe/wt2om7i8t7"},"A Message Queue in Shell")," (",(0,i.kt)("a",{parentName:"li",href:"https://lobste.rs/s/p2hlkz/message_queue_shell"},"Lobsters"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tobymao/saq"},"SAQ")," - Simple Async Queues. Simple and performant job queueing framework built on top of asyncio and redis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/felixmosh/bull-board"},"Bull Dashboard")," - UI built on top of Bull or BullMQ to help you visualize your queues and their jobs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/realtux/dispenserd"},"dispenserd")," - Job queue designed to be: fast, reliable, feature rich, and tailored towards the needs of developers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prodoxx/message-broker"},"Message Broker")," - Simple message broker example using BullMQ and Redis (worker / queue)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/svaloumas/valet"},"Valet")," - Job queuing service and async task runner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FlixCoder/bonsaimq"},"Bonsaimq")," - Simple database message queue based on bonsaidb."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tonyhb/awesome-queues-jobs-and-tasks"},"Awesome Queues")," - Curated list of awesome queueing systems for background jobs and distributed tasks.")))}h.isMDXComponent=!0}}]);