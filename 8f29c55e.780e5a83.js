(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(111)),c=["components"],i={title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},l={unversionedId:"getting-started/compiling",id:"getting-started/compiling",isDocsHomePage:!1,title:"Compile Your Contract",description:"Run the following command in your flipper directory to compile your smart contract:",source:"@site/docs/getting-started/compiling.md",slug:"/getting-started/building-your-contract",permalink:"/ink-docs/getting-started/building-your-contract",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/compiling.md",version:"current",sidebar:"reference",previous:{title:"Creating an ink! Project",permalink:"/ink-docs/getting-started/creating-an-ink-project"},next:{title:"Run a Substrate Node",permalink:"/ink-docs/getting-started/running-substrate"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Run the following command in your ",Object(o.b)("inlineCode",{parentName:"p"},"flipper")," directory to compile your smart contract:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly contract build\n")),Object(o.b)("p",null,"This command will build the following for your contract: a Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",Object(o.b)("inlineCode",{parentName:"p"},".contract")," file which bundles both. This ",Object(o.b)("inlineCode",{parentName:"p"},".contract")," file can be used to\ndeploy your contract to a chain. If all goes well, you should see a ",Object(o.b)("inlineCode",{parentName:"p"},"target")," folder which\ncontains these files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 metadata.json\n")),Object(o.b)("p",null,"Let's take a look at the structure of the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "metadataVersion": "0.1.0",\n  "source": {...},\n  "contracts": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...]\n}\n')),Object(o.b)("p",null,"This file describes all the interfaces that can be used to interact with your contract:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"types")," provides the custom ",Object(o.b)("strong",{parentName:"li"},"data types")," used throughout the rest of the JSON."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storage")," defines all the ",Object(o.b)("strong",{parentName:"li"},"storage")," items managed by your contract and how to ultimately access them."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"spec")," stores information about the callable functions like ",Object(o.b)("strong",{parentName:"li"},"constructors")," and ",Object(o.b)("strong",{parentName:"li"},"messages")," a\nuser can call to interact with the contract. It also has helpful information like the ",Object(o.b)("strong",{parentName:"li"},"events"),"\nthat are emitted by the contract or any ",Object(o.b)("strong",{parentName:"li"},"docs"),".\n")),Object(o.b)("p",null,"If you look closely at the constructors and messages, you will also notice a ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."),Object(o.b)("p",null,"In the next section we will start a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/canvas-node"},"Substrate Canvas node"),"\nand configure the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/canvas-ui"},"Canvas UI")," to interact with it."))}p.isMDXComponent=!0}}]);