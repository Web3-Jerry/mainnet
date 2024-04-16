"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[401],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4708:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={sidebar_position:3},c="Compile, Run and Deploy",u={unversionedId:"Build/Compile and Run",id:"Build/Compile and Run",title:"Compile, Run and Deploy",description:"This guide walks you through compiling and running Bitlayer.",source:"@site/docs/Build/Compile and Run.md",sourceDirName:"Build",slug:"/Build/Compile and Run",permalink:"/mainnet/docs/Build/Compile and Run",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Quick Start Guide",permalink:"/mainnet/docs/Build/QuickStart"},next:{title:"Contracts",permalink:"/mainnet/docs/Build/Contracts"}},p={},d=[{value:"Download",id:"download",level:2},{value:"Install Golang",id:"install-golang",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Minimum",id:"minimum",level:4},{value:"Recommended",id:"recommended",level:4},{value:"Network &amp; Port",id:"network--port",level:4},{value:"Chain Node",id:"chain-node",level:3},{value:"Start Bash",id:"start-bash",level:3},{value:"systemd config",id:"systemd-config",level:3}],s={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"compile-run-and-deploy"},"Compile, Run and Deploy"),(0,l.kt)("p",null,"This guide walks you through compiling and running Bitlayer."),(0,l.kt)("h2",{id:"download"},"Download"),(0,l.kt)("p",null,"Download the Bitlayer source code using the following git command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/bitlayer-org/bitlayer-l2.git\n")),(0,l.kt)("h2",{id:"install-golang"},"Install Golang"),(0,l.kt)("p",null,"Before compiling Bitlayer, make sure you have Golang installed on your system. Refer to the official Golang website (",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"https://go.dev/dl/"),") for download and installation instructions."),(0,l.kt)("h2",{id:"compile"},"Compile"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to the directory where you cloned the Bitlayer source code using:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd /path/to/bitlayer-l2\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Compile Bitlayer by running the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"make geth\n")),(0,l.kt)("p",{parentName:"li"},"This will create a compiled binary in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/bin")," folder."))),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Get a list of available options and their descriptions by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"./build/bin/geth --help\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/fundamentals/command-line-options"},"Command-line Options documentation")," for specific usage details."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Custom Option:")),(0,l.kt)("p",null,"Bitlayer offers a custom option named ",(0,l.kt)("inlineCode",{parentName:"p"},"--traceaction"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--traceaction value     (default: 0)\n    Trace internal tx call/create/suicide action, 0=no trace, 1=trace only native token > 0, 2=trace all\n")),(0,l.kt)("p",null,"This option allows you to enable or disable custom JSON-RPC methods for tracing internal transactions."),(0,l.kt)("h2",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,"Introduce systemd management configs."),(0,l.kt)("h3",{id:"hardware"},"Hardware"),(0,l.kt)("h4",{id:"minimum"},"Minimum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"8core\n16g\nssd iops>5k\n")),(0,l.kt)("h4",{id:"recommended"},"Recommended"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"16core\n32g\nssd iops>5k\n")),(0,l.kt)("h4",{id:"network--port"},"Network & Port"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"External IP Address\nPort TCP/UDP 31031\n")),(0,l.kt)("h3",{id:"chain-node"},"Chain Node"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"config.toml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[Eth]\nSyncMode = "snap"\nTrieCleanCacheRejournal= 300000000000\nTrieTimeout = 20000000000\n\n\n[Eth.Miner]\nGasFloor = 40000000\nGasCeil = 40000000\nGasPrice = 100000000\nRecommit = 3000000000\n\n\n[Eth.TxPool]\nNoLocals = true\nJournal = "transactions.rlp"\nRejournal = 600000000000\nPriceLimit = 100000000\nPriceBump = 10\nAccountSlots = 64\nGlobalSlots = 10240\nAccountQueue = 32\nGlobalQueue = 1024\nLifetime = 1800000000000\n\n[Node]\nDataDir = "/data/bitlayer-l2/chain/data"\nInsecureUnlockAllowed = true\nNoUSB = true\nIPCPath = "geth.ipc"\nHTTPHost = "0.0.0.0"\nHTTPPort = 8545\nHTTPCors = ["*"]\nHTTPVirtualHosts = ["*"]\nHTTPModules = [\'eth\', \'net\', \'web3\']\n\nWSHost = "0.0.0.0"\nWSPort = 8546\nWSModules = [\'eth\', \'net\', \'web3\']\n\nGraphQLVirtualHosts = ["localhost"]\n\n\n[Node.P2P]\nMaxPeers = 50\nNoDiscovery = false\nListenAddr = ":31031"\nEnableMsgEvents = false\n\n[Node.HTTPTimeouts]\nReadTimeout = 30000000000\nWriteTimeout = 30000000000\nIdleTimeout = 120000000000\n')),(0,l.kt)("p",null,"use snap sync in the config, if full needed - change this line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'SyncMode = "snap"\n')),(0,l.kt)("p",null,"to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'SyncMode = "full"\n')),(0,l.kt)("h3",{id:"start-bash"},"Start Bash"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To show full detail help info of all flags, type ",(0,l.kt)("inlineCode",{parentName:"p"},"geth help")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"geth -h"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#!/usr/bin/env bash\n/data/bitlayer-l2/chain/geth-linux-amd64 \\\n--config /data/bitlayer-l2/chain/config.toml  \\\n--log.file /data/bitlayer-l2/chain/logs/chain.log \\\n--log.rotate=true \\\n--authrpc.port 8445 \\\n--traceaction 2 \\\n--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1\n")),(0,l.kt)("p",null,"if you need to use it as archive node, add: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--syncmode full \\\n--gcmode archive \\\n")),(0,l.kt)("p",null,"so: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#!/usr/bin/env bash\n/data/bitlayer-l2/chain/geth-linux-amd64 \\\n--config /data/bitlayer-l2/chain/config.toml  \\\n--log.file /data/bitlayer-l2/chain/logs/chain.log \\\n--log.rotate=true \\\n--authrpc.port 8445 \\\n--traceaction 2 \\\n--syncmode full \\\n--gcmode archive \\\n--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1\n")),(0,l.kt)("p",null,"If no network flags were provided, the node will connect the bitlayer mainnet by default. If you want to connect to bitlayer testnet, add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--testnet\n")),(0,l.kt)("h3",{id:"systemd-config"},"systemd config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Unit]\nDescription=bitlayer-l2 chain service\n\n[Service]\nType=simple\nExecStart=/bin/sh /data/bitlayer-l2/chain/run.sh\nWorkingDirectory=/data/bitlayer-l2/chain\nTimeoutSec=600\nRestart=on-failure\nRestartSec=5s\n\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")))}m.isMDXComponent=!0}}]);