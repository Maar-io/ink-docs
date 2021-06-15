(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(111)),i=["components"],c={title:"Storing Values",slug:"/basics/storing-values"},s={unversionedId:"basics/storing-values",id:"basics/storing-values",isDocsHomePage:!1,title:"Storing Values",description:"Here is how you store simple values in storage:",source:"@site/docs/basics/storing-values.md",slug:"/basics/storing-values",permalink:"/ink-docs/basics/storing-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/storing-values.md",version:"current",sidebar:"reference",previous:{title:"Contract Template",permalink:"/ink-docs/basics/contract-template"},next:{title:"Reading Values from Storage",permalink:"/ink-docs/basics/reading-values"}},u=[{value:"Supported Types",id:"supported-types",children:[]},{value:"Initializing Storage in Constructors",id:"initializing-storage-in-constructors",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is how you store simple values in storage:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n")),Object(o.b)("h2",{id:"supported-types"},"Supported Types"),Object(o.b)("p",null,"Substrate contracts may store types that are encodable and decodable with\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/parity-codec"},"Parity Codec")," which includes most Rust common data\ntypes such as ",Object(o.b)("inlineCode",{parentName:"p"},"bool"),", ",Object(o.b)("inlineCode",{parentName:"p"},"u{8,16,32,64,128}"),", ",Object(o.b)("inlineCode",{parentName:"p"},"i{8,16,32,64,128}"),", ",Object(o.b)("inlineCode",{parentName:"p"},"String"),", tuples, and arrays."),Object(o.b)("p",null,"ink! provides Substrate specific types like ",Object(o.b)("inlineCode",{parentName:"p"},"AccountId"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Balance"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Hash")," to smart contracts as if\nthey were primitive types. ink! also provides storage types for more elaborate storage interactions through the storage module:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use ink_storage::collections::{Vec, HashMap, Stash, Bitvec};\n")),Object(o.b)("p",null,"Here is an example of how you would store an ",Object(o.b)("inlineCode",{parentName:"p"},"AccountId")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Balance"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"// We are importing the default ink! types\nuse ink_lang as ink;\n\n#[ink::contract]\nmod MyContract {\n\n    // Our struct will use those default ink! types\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some AccountId\n        my_account: AccountId,\n        // Store some Balance\n        my_balance: Balance,\n    }\n    /* --snip-- */\n}\n")),Object(o.b)("p",null,"You can find all the supported Substrate types in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/crates/storage"},Object(o.b)("inlineCode",{parentName:"a"},"ink_storage")," crate"),"."),Object(o.b)("h2",{id:"initializing-storage-in-constructors"},"Initializing Storage in Constructors"),Object(o.b)("p",null,"Constructors are how values get initialized.\nEvery ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n")))}p.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);