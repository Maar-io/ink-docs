(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(111)),o=["components"],c={title:"Reading Values from Storage",slug:"/basics/reading-values"},u={unversionedId:"basics/reading-values",id:"basics/reading-values",isDocsHomePage:!1,title:"Reading Values from Storage",description:"Reading from storage is where the fun begins!",source:"@site/docs/basics/reading-values.md",slug:"/basics/reading-values",permalink:"/ink-docs/basics/reading-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/reading-values.md",version:"current",sidebar:"reference",previous:{title:"Storing Values",permalink:"/ink-docs/basics/storing-values"},next:{title:"Mutating Storage Values",permalink:"/ink-docs/basics/mutating-values"}},s=[{value:"Contract Functions",id:"contract-functions",children:[{value:"Public and Private Functions",id:"public-and-private-functions",children:[]}]},{value:"Getting a Value",id:"getting-a-value",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Reading from storage is where the fun begins!"),Object(i.b)("h2",{id:"contract-functions"},"Contract Functions"),Object(i.b)("p",null,"As you can see in the contract template, all of your contract functions are part of your contract module."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    // Public and Private functions can go here\n}\n")),Object(i.b)("h3",{id:"public-and-private-functions"},"Public and Private Functions"),Object(i.b)("p",null,"In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend\nbreaking up your implementation definitions for your private and public functions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),Object(i.b)("p",null,"You can also choose to split things up however is most clear for your project."),Object(i.b)("p",null,"Note that all public functions must use the ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," attribute."),Object(i.b)("h2",{id:"getting-a-value"},"Getting a Value"),Object(i.b)("p",null,"We already showed you how to initialize a storage value in the chapter ",Object(i.b)("a",{parentName:"p",href:"/basics/storing-values"},"Storing Values"),".\nGetting the value is just as simple:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),Object(i.b)("p",null,"In Rust, if the last expression in a function does not have a semicolon, then it will be the return value."))}p.isMDXComponent=!0}}]);