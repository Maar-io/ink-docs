"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),h=o,f=l["".concat(s,".").concat(h)]||l[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>O,default:()=>E,frontMatter:()=>C,metadata:()=>R,toc:()=>N});var r=n(7462),o=n(7294),a=n(3905),i=n(5697),c=n.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(p(t)),t.handleErrored=t.handleErrored.bind(p(t)),t.handleChange=t.handleChange.bind(p(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(p(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.createElement("div",s({},t,{ref:this.handleRecaptchaRef}))},r}(o.Component);d.displayName="ReCAPTCHA",d.propTypes={sitekey:c().string.isRequired,onChange:c().func,grecaptcha:c().object,theme:c().oneOf(["dark","light"]),type:c().oneOf(["image","audio"]),tabindex:c().number,onExpired:c().func,onErrored:c().func,size:c().oneOf(["compact","normal","invisible"]),stoken:c().string,hl:c().string,badge:c().oneOf(["bottomright","bottomleft","inline"])},d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(8679),u=n.n(l);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var f={},m=0;var y="onloadcallback";const g=(v=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+y+"&render=explicit"},k=(k={callbackName:y,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function a(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=a.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof v?v():v,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[k.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=k,o=r.globalName,a=r.callbackName,i=r.scriptId;if(o&&void 0!==window[o]&&(f[t]={loaded:!0,observers:{}}),f[t]){var c=f[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:s};var p=document.createElement("script");for(var d in p.src=t,p.async=!0,k.attributes)p.setAttribute(d,k.attributes[d]);i&&(p.id=i);var l=function(e){if(f[t]){var n=f[t].observers;for(var r in n)e(n[r])&&delete n[r]}};a&&"undefined"!=typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=f[t];e&&(e.loaded=!0,l((function(t){return!a&&(t(e),!0)})))},p.onerror=function(){var e=f[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(p)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===k.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=f[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===k.removeOnUnmount&&delete f[e])},i.render=function(){var t=k.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(a[t]=void 0!==window[t]?window[t]:void 0),a.ref=r,(0,o.createElement)(e,a)},a}(o.Component),r=(0,o.forwardRef)((function(e,t){return(0,o.createElement)(n,h({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:c().func},u()(r,e)})(d);var v,k;const b=g,w=()=>{const[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[c,s]=(0,o.useState)(!1);return o.createElement(o.Fragment,null,o.createElement(b,{sitekey:"6LdU5kckAAAAANktvvAKJ0auYUBRP0su94G7WXwe",onChange:t}),o.createElement("label",{htmlFor:"address-input"},"Address: "),o.createElement("input",{id:"address-input",style:{margin:5,width:400},type:"text",value:n,placeholder:"Address",onChange:e=>r(e.target.value)}),o.createElement("button",{style:{margin:5,padding:"5px 10px"},disabled:c||!e||!n,onClick:async()=>{try{i(""),s(!0);const t={address:n,parachain_id:"1002",recaptcha:e},r=await fetch("https://ink-docs-rococo-faucet.parity-testnet.parity.io/drip",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}),o=await r.json();i("error"in o?o.error:`Hash: ${o.hash}`)}catch(t){console.error(t),i("Request unsuccessful")}finally{s(!1)}}},"Request"),o.createElement("p",null,a))},C={title:"Contracts on Rococo",hide_title:!0,slug:"/testnet"},O=void 0,R={unversionedId:"testnet/overview",id:"testnet/overview",title:"Contracts on Rococo",description:"Rococo is a testnet for",source:"@site/docs/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/testnet",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/testnet/overview.md",tags:[],version:"current",frontMatter:{title:"Contracts on Rococo",hide_title:!0,slug:"/testnet"},sidebar:"reference",previous:{title:"Dapps",permalink:"/examples/dapps"},next:{title:"OpenBrush",permalink:"/getting-started/use-openbrush"}},x={},N=[{value:"What is the Contracts parachain?",id:"what-is-the-contracts-parachain",level:2},{value:"How can I use it?",id:"how-can-i-use-it",level:2},{value:"(1) Create an Account",id:"1-create-an-account",level:3},{value:"(2) Get Testnet Tokens",id:"2-get-testnet-tokens",level:3},{value:"(3) Deploy Your Contract",id:"3-deploy-your-contract",level:3}],_={toc:N};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/testnet.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"contracts-on-rococo"},"Contracts on Rococo"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet"},"Rococo")," is a testnet for\nPolkadot and Kusama parachains.\nWe have a live testnet named Contracts as a parachain online there."),(0,a.kt)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"}),(0,a.kt)("h2",{id:"what-is-the-contracts-parachain"},"What is the Contracts parachain?"),(0,a.kt)("p",null,"It's a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," parachain for smart\ncontracts. We configured it to use Substrate's smart contracts module \u2013 the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,a.kt)("inlineCode",{parentName:"a"},"contracts")),"\npallet \u2013 in a default configuration."),(0,a.kt)("p",null,"The code for this parachain can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo"},"in the ",(0,a.kt)("inlineCode",{parentName:"a"},"cumulus")," repository"),".\nOur parachain uses the Rococo relay chain's native token (",(0,a.kt)("inlineCode",{parentName:"p"},"ROC"),") instead of having its own token.\nDue to this you'll need ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," in order to deploy contracts on our testnet."),(0,a.kt)("h2",{id:"how-can-i-use-it"},"How can I use it?"),(0,a.kt)("h3",{id:"1-create-an-account"},"(1) Create an Account"),(0,a.kt)("p",null,"As a first step, you should create an account. This can be done via command-line\ntools (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"subxt"),") or via a wallet (e.g. with the ",(0,a.kt)("inlineCode",{parentName:"p"},"polakdot-js")," browser extension).\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation"},"here")," for a detailed guide."),(0,a.kt)("h3",{id:"2-get-testnet-tokens"},"(2) Get Testnet Tokens"),(0,a.kt)("p",null,"As a second step, you have to get ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet"},"Rococo Faucet"),".\nThis is a chat room in which you need to write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"!drip YOUR_SS_58_ADDRESS:1002\n")),(0,a.kt)("p",null,"The number ",(0,a.kt)("inlineCode",{parentName:"p"},"1002")," is the parachain ID of Contracts on Rococo, by supplying it you instruct the\nfaucet to teleport ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," tokens directly to your account on the parachain.\nIf you have some tokens on the Rococo relay chain, you can teleport them to the Contracts parachain on your own. Read more on teleporting assets ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-teleport"},"here"),"."),(0,a.kt)("p",null,"If everything worked out, the teleported ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," tokens will show up in your account.\nIn case you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"polkadot-js")," frontend, you can see them under\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts"},'the "Accounts" tab for Contracts'),"."),(0,a.kt)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"}),(0,a.kt)("p",null,"Alternatively, you can try it this faucet here:"),(0,a.kt)(w,{mdxType:"Faucet"}),(0,a.kt)("h3",{id:"3-deploy-your-contract"},"(3) Deploy Your Contract"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," on Contracts you can deploy a contract ",(0,a.kt)("em",{parentName:"p"},"nearly")," as you would with\na local developer node.\nThe only difference is that you can't use pre-endowed accounts like ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Bob"),",\nyou have to use the one you generated instead."),(0,a.kt)("img",{src:"/img/deployment-acc.png",alt:"Deploy a smart contract on Rococo/Polkadot"}),(0,a.kt)("p",null,"You can also deploy your contract from the command-line via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract"),".\nMake sure you are in the folder of your contract and that it has been\nbuilt recently. Then execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cargo contract upload --suri "your twelve or twenty-four words"\ncargo contract instantiate --suri \u2026 --constructor new --args true\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new")," in this case would be a constructor method exposed by the contract,\n",(0,a.kt)("inlineCode",{parentName:"p"},"--args")," would be any arguments the constructor expects."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md#commands"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"cargo-contract")," docs"),"\nfor a more detailed documentation."))}E.isMDXComponent=!0}}]);