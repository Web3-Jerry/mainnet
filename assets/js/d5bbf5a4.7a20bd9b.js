"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4316],{3905:function(t,e,i){i.d(e,{Zo:function(){return u},kt:function(){return h}});var n=i(7294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(i),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return i?n.createElement(d,o(o({ref:e},u),{},{components:i})):n.createElement(d,o({ref:e},u))}));function h(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,o=new Array(a);o[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3754:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),o=["components"],c={sidebar_position:7},s="About BitVM",l={unversionedId:"Introduction/BitVM",id:"Introduction/BitVM",title:"About BitVM",description:"Bitlayer is pioneering a new frontier in Bitcoin's ecosystem with BitVM, a solution aimed at overcoming the scalability issues that become prominent during high-traffic periods. By introducing capabilities for handling smart contracts and advanced off-chain computations, BitVM at Bitlayer seeks to enhance the functionality of the Bitcoin network.",source:"@site/docs/Introduction/BitVM.md",sourceDirName:"Introduction",slug:"/Introduction/BitVM",permalink:"/mainnet/docs/Introduction/BitVM",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Use Case Ideas",permalink:"/mainnet/docs/Introduction/UseCase"},next:{title:"Getting Started",permalink:"/mainnet/docs/category/getting-started"}},u={},p=[{value:"What is BitVM?",id:"what-is-bitvm",level:2},{value:"Benefits of BitVM",id:"benefits-of-bitvm",level:2},{value:"Experiment of BitVM White Paper",id:"experiment-of-bitvm-white-paper",level:2},{value:"Engage with the Community",id:"engage-with-the-community",level:2}],m={toc:p};function h(t){var e=t.components,i=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-bitvm"},"About BitVM"),(0,a.kt)("p",null,"Bitlayer is pioneering a new frontier in Bitcoin's ecosystem with BitVM, a solution aimed at overcoming the scalability issues that become prominent during high-traffic periods. By introducing capabilities for handling smart contracts and advanced off-chain computations, BitVM at Bitlayer seeks to enhance the functionality of the Bitcoin network."),(0,a.kt)("h2",{id:"what-is-bitvm"},"What is BitVM?"),(0,a.kt)("p",null,"If you're familiar with the Ethereum Virtual Machine, you will understand the significant potential of BitVM. Introduced by Bitlayer and developed in collaboration with Robin Linus from ZeroSync, BitVM offers a novel computing paradigm designed specifically for the Bitcoin blockchain, traditionally limited in handling complex smart contracts. This initiative was launched in late 2023 to enable more expressive contracts and efficient off-chain computations without necessitating soft forks."),(0,a.kt)("p",null,"Unlike Ethereum, BitVM's aim is not replication but expansion, enhancing Bitcoin's capabilities to handle increased demand. This becomes increasingly important as the Bitcoin ecosystem grows, especially with upcoming events like Bitcoin halving and the rising interest from institutional investors following Bitcoin ETFs."),(0,a.kt)("p",null,"BitVM's features include the optimistic validation of Zero-Knowledge (ZK) rollups\u2014similar to technologies used in Ethereum's Layer 2 solutions\u2014which process transactions off-chain to reduce mainnet congestion. These transactions are then batched and finalized on the mainnet, incorporating mechanisms to deter and identify potential fraud."),(0,a.kt)("h2",{id:"benefits-of-bitvm"},"Benefits of BitVM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optimistic Validation of ZK Rollups"),": BitVM facilitates the validation of ZK rollups directly on the Bitcoin network, allowing complex layer 2 computations without changing Bitcoin's consensus rules or compromising blockchain performance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bridging Sidechains and Rollups to Bitcoin"),": It aims to create more decentralized bridges between Bitcoin and layer 2 platforms like Rootstock, reducing reliance on intermediaries and lowering the risk of fraud.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reduced Transaction Fees"),": BitVM could significantly lower Bitcoin transaction fees by managing data and computations off-chain. This can help mitigate spikes in fees, like those seen in December 2023, when they reached $38.43.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enhanced Security"),": By focusing on two-party contracts, BitVM enhances security over systems that handle multi-party contracts, as is common with Ethereum. It provides mechanisms to prove and dispute fraudulent transactions effectively."))),(0,a.kt)("h2",{id:"experiment-of-bitvm-white-paper"},"Experiment of BitVM White Paper"),(0,a.kt)("p",null,"Learn more about BitVM's innovations and how they can transform the Bitcoin landscape through our detailed white paper and research initiatives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bitlayerlabs.notion.site/Experiment-of-BitVM-White-Paper-ef87e719001e4e2d83765c68f1bb8443"},"Experiment of BitVM White Paper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitlayer-org/BitVM-Research"},"Research Repository"))),(0,a.kt)("h2",{id:"engage-with-the-community"},"Engage with the Community"),(0,a.kt)("p",null,"Join the discussion and contribute to the development of BitVM at Bitlayer through these community channels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BitVM Club"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/Bitvmclub"},"BitVMclub")),(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.bitvm.club"},"bitVM.club")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BitVM_CN"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/bitvm_cn"},"bitvm_cn")),(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.bitvmcn.xyz/doc"},"bitvmcn.xyz"))))),(0,a.kt)("p",null,"Explore how Bitlayer is setting the stage for revolutionary changes in Bitcoin's functionality and scalability."))}h.isMDXComponent=!0}}]);