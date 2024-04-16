"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},c="Overview of Bitlayer's Design",l={unversionedId:"Introduction/TechnicalArchitecture",id:"Introduction/TechnicalArchitecture",title:"Overview of Bitlayer's Design",description:"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer's assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers.",source:"@site/docs/Introduction/TechnicalArchitecture.md",sourceDirName:"Introduction",slug:"/Introduction/TechnicalArchitecture",permalink:"/mainnet/docs/Introduction/TechnicalArchitecture",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Bitlayer vs. Ethereum",permalink:"/mainnet/docs/Introduction/BitlayerVsEth"},next:{title:"Roadmap",permalink:"/mainnet/docs/Introduction/Roadmap"}},u={},p=[{value:"1. Transaction Processing",id:"1-transaction-processing",level:2},{value:"2. Transaction Verification",id:"2-transaction-verification",level:2},{value:"3. Asset Bridge",id:"3-asset-bridge",level:2},{value:"Layered Virtual Machine (LVM)",id:"layered-virtual-machine-lvm",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview-of-bitlayers-design"},"Overview of Bitlayer's Design"),(0,a.kt)("p",null,"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer's assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"The Architecture of Bitlayer",src:n(7303).Z,width:"4440",height:"2832"})),(0,a.kt)("h2",{id:"1-transaction-processing"},"1. Transaction Processing"),(0,a.kt)("p",null,"Transaction Processing, as illustrated in the figure above, involves the sequencer and Layered Virtual Machine. These components are responsible for the entire transaction handling, starting from transaction acceptance to executing the output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequencer"),": Like other Layer 2 solutions, the sequencer in Bitlayer is responsible for collecting cached transactions and sorting them, serving as the entry point for transactions in Bitlayer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Layered Virtual Machine (LVM)"),": The LVM is the computing component of Bitlayer, responsible for executing smart contracts and generating the latest states and zero-knowledge proof. Challengers then use this proof to challenge the execution results.")),(0,a.kt)("h2",{id:"2-transaction-verification"},"2. Transaction Verification"),(0,a.kt)("p",null,"In Bitlayer, transaction verification is achieved by a zero-knowledge-based optimistic mechanism between the prover and challenger."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prover"),": The Prover is responsible for submitting Layer 2 transactions and states of execution to the Layer 1 chain as described above. It also reveals zero-knowledge proofs on the chain when getting challenged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Challenger"),": The Challenger is responsible for verifying the execution results submitted by the Prover through states of execution and zero-knowledge proof verification. If malicious behavior is detected, the Challenger initiates a challenge process to generate fraud proofs including invalid zero-knowledge proofs and submits them to the Layer 1 chain.")),(0,a.kt)("h2",{id:"3-asset-bridge"},"3. Asset Bridge"),(0,a.kt)("p",null,"The Bridge acts as a crucial component in Bitlayer's infrastructure, facilitating the seamless movement of assets between Layer 2 and Layer 1. Its primary responsibility is to ensure the secure transfer of user assets through an innovative combination of OP-DLC and BitVM."),(0,a.kt)("h2",{id:"layered-virtual-machine-lvm"},"Layered Virtual Machine (LVM)"),(0,a.kt)("p",null,"Layered Virtual Machine (LVM) technology represents a significant advancement in terms of smart contract execution. This innovative approach enables the support of various frontend smart contract types, such as EVM/CairoVM, and backend zero-knowledge proof verifiers, including ZK-STARKs and ZK-SNARKs (Groth16, PLONK, etc.), while maintaining robust security measures and enhancing computational flexibility."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Layered Virtual Machine",src:n(298).Z,width:"3616",height:"1864"})),(0,a.kt)("p",null,"Supporting multiple frontend smart contract types can easily attract developers from various blockchain ecosystems. For instance, EVM is a widely used smart contract platform with its own bytecode and execution environment. By integrating support for EVM within the LVM framework, developers can leverage existing EVM-based smart contracts seamlessly while also benefiting from enhanced execution capabilities provided by the layered architecture."),(0,a.kt)("p",null,"On the backend side, supporting various zero-knowledge proof generators provides more optimization possibilities for the disputing process without compromising existing functionalities. In the future, when more succinct and efficient zero-knowledge proof systems emerge, Bitlayer's flexibility will allow for quick adaptation essential for keeping pace with evolving blockchain standards, emerging technologies, and changing user requirements."))}h.isMDXComponent=!0},7303:function(e,t,n){t.Z=n.p+"assets/images/BitlayerDesign-883d2e8d59a279b9271697a97eae85c5.png"},298:function(e,t,n){t.Z=n.p+"assets/images/LVM-aa3b311d90cc3d943e48dd1a418aa87b.png"}}]);