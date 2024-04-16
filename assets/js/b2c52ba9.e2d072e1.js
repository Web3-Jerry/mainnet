"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9222],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),g=i,f=h["".concat(c,".").concat(g)]||h[g]||p[g]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},c="Overview of Bitlayer's Design",l={unversionedId:"BitlayerArchitecture/BitlayerDesign",id:"BitlayerArchitecture/BitlayerDesign",title:"Overview of Bitlayer's Design",description:"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer's assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers.",source:"@site/docs/BitlayerArchitecture/BitlayerDesign.md",sourceDirName:"BitlayerArchitecture",slug:"/BitlayerArchitecture/BitlayerDesign",permalink:"/mainnet/docs/BitlayerArchitecture/BitlayerDesign",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Bitlayer Architecture",permalink:"/mainnet/docs/category/bitlayer-architecture"},next:{title:"Layered Virtual Machine (LVM)",permalink:"/mainnet/docs/BitlayerArchitecture/LVM"}},u={},p=[{value:"1. Transaction Processing",id:"1-transaction-processing",level:2},{value:"2. Transaction Verification",id:"2-transaction-verification",level:2},{value:"3. Asset Bridge",id:"3-asset-bridge",level:2}],h={toc:p};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview-of-bitlayers-design"},"Overview of Bitlayer's Design"),(0,a.kt)("p",null,"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer's assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"The Architecture of Bitlayer",src:n(4851).Z,width:"4440",height:"2832"})),(0,a.kt)("h2",{id:"1-transaction-processing"},"1. Transaction Processing"),(0,a.kt)("p",null,"Transaction Processing, as illustrated in the figure above, involves the sequencer and Layered Virtual Machine. These components are responsible for the entire transaction handling, starting from transaction acceptance to executing the output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequencer"),": Like other Layer 2 solutions, the sequencer in Bitlayer is responsible for collecting cached transactions and sorting them, serving as the entry point for transactions in Bitlayer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Layered Virtual Machine (LVM)"),": The LVM is the computing component of Bitlayer, responsible for executing smart contracts and generating the latest states and zero-knowledge proof. Challengers then use this proof to challenge the execution results.")),(0,a.kt)("h2",{id:"2-transaction-verification"},"2. Transaction Verification"),(0,a.kt)("p",null,"In Bitlayer, transaction verification is achieved by a zero-knowledge-based optimistic mechanism between the prover and challenger."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prover"),": The Prover is responsible for submitting Layer 2 transactions and states of execution to the Layer 1 chain as described above. It also reveals zero-knowledge proofs on the chain when getting challenged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Challenger"),": The Challenger is responsible for verifying the execution results submitted by the Prover through states of execution and zero-knowledge proof verification. If malicious behavior is detected, the Challenger initiates a challenge process to generate fraud proofs including invalid zero-knowledge proofs and submits them to the Layer 1 chain.")),(0,a.kt)("h2",{id:"3-asset-bridge"},"3. Asset Bridge"),(0,a.kt)("p",null,"The Bridge acts as a crucial component in Bitlayer's infrastructure, facilitating the seamless movement of assets between Layer 2 and Layer 1. Its primary responsibility is to ensure the secure transfer of user assets through an innovative combination of OP-DLC and BitVM."))}g.isMDXComponent=!0},4851:function(e,t,n){t.Z=n.p+"assets/images/BitlayerDesign-883d2e8d59a279b9271697a97eae85c5.png"}}]);