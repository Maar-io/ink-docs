(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(111)),i=["components"],c={title:"Dynamic Storage Allocator",slug:"/datastructures/dynamic-allocation"},s={unversionedId:"datastructures/dynamic-allocation",id:"datastructures/dynamic-allocation",isDocsHomePage:!1,title:"Dynamic Storage Allocator",description:"In the previous section we have seen how the default mode of operation is to spread information",source:"@site/docs/datastructures/dynamic-allocation.md",slug:"/datastructures/dynamic-allocation",permalink:"/ink-docs/datastructures/dynamic-allocation",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/dynamic-allocation.md",version:"current",sidebar:"reference",previous:{title:"Opt out of Storage",permalink:"/ink-docs/datastructures/opting-out"},next:{title:"Custom Datastructures",permalink:"/ink-docs/datastructures/custom-datastructure"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the previous section we have seen how the default mode of operation is to spread information\nand how we can opt-in to pack information into single cells via ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Packed"),"."),Object(o.b)("p",null,"However, what if we wanted to store a vector of a vector of ",Object(o.b)("inlineCode",{parentName:"p"},"i32")," for example?\nNaturally a user would try to construct this as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use ink_storage::Vec as StorageVec;\n\n#[ink(storage)]\npub struct Matrix {\n    values: StorageVec<StorageVec<i32>>,\n}\n")),Object(o.b)("p",null,"However, this will fail compilation with an error indicating that ",Object(o.b)("inlineCode",{parentName:"p"},"StorageVec<T>")," requires for its ",Object(o.b)("inlineCode",{parentName:"p"},"T")," to be packed (",Object(o.b)("inlineCode",{parentName:"p"},"T: PackedLayout"),") which ",Object(o.b)("inlineCode",{parentName:"p"},"StorageVec<T>")," itself does not since it always stores all of its elements into different cells. The same applies to many other storage data structures provided by ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," and is a trade-off the ink! team decided for the case of efficiency of the overall system.\nInstead what a user can do in order to get their vector-of-vector to be working is to make use of ink!'s dynamic storage allocator capabilities."),Object(o.b)("p",null,"For this the contract author has to first enable the feature via:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract(dynamic_storage_allocator = true)]\nmod matrix {\n    // contract code ...\n}\n")),Object(o.b)("p",null,"And then we can define our ",Object(o.b)("inlineCode",{parentName:"p"},"Matrix")," ",Object(o.b)("inlineCode",{parentName:"p"},"#[ink(storage)]")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"use ink_storage::{\n    Vec as StorageVec,\n    Box as StorageBox,\n};\n\n#[ink(storage)]\npub struct Matrix {\n    values: StorageVec<StorageBox<StorageVec<i32>>>,\n}\n")),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Box<T>")," we can use a ",Object(o.b)("inlineCode",{parentName:"p"},"T: SpreadLayout")," as if it was ",Object(o.b)("inlineCode",{parentName:"p"},"T: PackedLayout")," since the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Box<T>")," itself suffices the requirements and can be put into a single contract storage cell. The whole concept works quite similar to how Rust's ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," works: by an indirection - contract authors are therefore advised to make use of dynamic storage allocator capabilities only if other ways of dealing with ones problems are not applicable."))}p.isMDXComponent=!0}}]);