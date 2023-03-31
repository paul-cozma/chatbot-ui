(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(416);(0,s.g)();var n=r(479),o=n.middleware||n.default;if("function"!=typeof o)throw Error('The Edge Function "pages/api/models" must export a `default` function');function i(e){return(0,s.V)({...e,page:"/api/models",handler:o})}},479:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>i,default:()=>l}),function(e){e.GPT_3_5="gpt-3.5-turbo",e.GPT_4="gpt-4"}(n||(n={})),n.GPT_3_5;let s={[n.GPT_3_5]:{id:n.GPT_3_5,name:"GPT-3.5",maxLength:12e3,tokenLimit:3e3},[n.GPT_4]:{id:n.GPT_4,name:"GPT-4",maxLength:24e3,tokenLimit:6e3}};var n,o=r(377);let i={runtime:"edge"},a=async e=>{try{let{key:t}=await e.json(),r=await fetch(`${o.b}/v1/models`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||process.env.OPENAI_API_KEY}`,...process.env.OPENAI_ORGANIZATION&&{"OpenAI-Organization":process.env.OPENAI_ORGANIZATION}}});if(401===r.status)return new Response(r.body,{status:500,headers:r.headers});if(200!==r.status)throw console.error(`OpenAI API returned an error ${r.status}: ${await r.text()}`),Error("OpenAI API returned an error");let i=await r.json(),a=i.data.map(e=>{for(let[t,r]of Object.entries(n))if(r===e.id)return{id:e.id,name:s[r].name}}).filter(Boolean);return new Response(JSON.stringify(a),{status:200})}catch(e){return console.error(e),new Response("Error",{status:500})}},l=a},377:(e,t,r)=>{"use strict";r.d(t,{b:()=>n,c:()=>s});let s=process.env.DEFAULT_SYSTEM_PROMPT||"You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",n=process.env.OPENAI_API_HOST||"https://api.openai.com"},768:e=>{"use strict";var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,o=(e,o,i,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of s(o))n.call(e,l)||l===i||t(e,l,{get:()=>o[l],enumerable:!(a=r(o,l))||a.enumerable});return e},i=e=>o(t({},"__esModule",{value:!0}),e),a={};function l(e){let t=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&e.expires&&`Expires=${e.expires.toUTCString()}`,"maxAge"in e&&e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`].filter(Boolean);return`${e.name}=${encodeURIComponent(e.value??"")}; ${t.join("; ")}`}function h(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("="),[s,n]=[r.slice(0,e),r.slice(e+1)];try{t.set(s,decodeURIComponent(n??"true"))}catch{}}return t}function u(e){if(!e)return;let[[t,r],...s]=h(e),{domain:n,expires:o,httponly:i,maxage:a,path:l,samesite:u,secure:c}=Object.fromEntries(s.map(([e,t])=>[e.toLowerCase(),t])),f={name:t,value:decodeURIComponent(r),domain:n,...o&&{expires:new Date(o)},...i&&{httpOnly:!0},..."string"==typeof a&&{maxAge:Number(a)},path:l,...u&&{sameSite:p(u)},...c&&{secure:!0}};return d(f)}function d(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}((e,r)=>{for(var s in r)t(e,s,{get:r[s],enumerable:!0})})(a,{RequestCookies:()=>f,ResponseCookies:()=>g}),e.exports=i(a);var c=["strict","lax","none"];function p(e){return e=e.toLowerCase(),c.includes(e)?e:void 0}var f=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t){let e=h(t);for(let[t,r]of e)this._parsed.set(t,{name:t,value:r})}}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===s).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,s=this._parsed;return s.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(s).map(([e,t])=>l(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>l(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},g=class{constructor(e){var t;this._parsed=new Map,this._headers=e;let r=(null==(t=e.getAll)?void 0:t.call(e,"set-cookie"))??e.get("set-cookie")??[],s=Array.isArray(r)?r:x(r);for(let e of s){let t=u(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===s)}set(...e){let[t,r,s]=1===e.length?[e[0].name,e[0].value,e[0]]:e,n=this._parsed;return n.set(t,w({name:t,value:r,...s})),m(n,this._headers),this}delete(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this.set({name:t,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(l).join("; ")}};function m(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=l(r);t.append("set-cookie",e)}}function w(e={name:"",value:""}){return e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}function x(e){if(!e)return[];var t,r,s,n,o,i=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),n=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,i.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!o||a>=e.length)&&i.push(e.substring(t,e.length))}return i}},416:(e,t,r)=>{"use strict";r.d(t,{V:()=>F,g:()=>Y});class s extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class n extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class o extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}function i(e){let t=new Headers;for(let[r,s]of Object.entries(e)){let e=Array.isArray(s)?s:[s];for(let s of e)void 0!==s&&t.append(r,s)}return t}function a(e){var t,r,s,n,o,i=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;l();)if(","===(r=e.charAt(a))){for(s=a,a+=1,l(),n=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,i.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!o||a>=e.length)&&i.push(e.substring(t,e.length))}return i}function l(e){let t={};if(e)for(let[r,s]of e.entries())t[r]=s,"set-cookie"===r.toLowerCase()&&(t[r]=a(s));return t}function h(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}let u=Symbol("response"),d=Symbol("passThrough"),c=Symbol("waitUntil");class p{[c]=[];[d]=!1;constructor(e){}respondWith(e){this[u]||(this[u]=Promise.resolve(e))}passThroughOnException(){this[d]=!0}waitUntil(e){this[c].push(e)}}class f extends p{constructor(e){super(e.request),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}}function g(e,t,r){let s;if(e)for(let i of(r&&(r=r.toLowerCase()),e)){var n,o;let e=null==(n=i.domain)?void 0:n.split(":")[0].toLowerCase();if(t===e||r===i.defaultLocale.toLowerCase()||(null==(o=i.locales)?void 0:o.some(e=>e.toLowerCase()===r))){s=i;break}}return s}function m(e){return e.replace(/\/$/,"")||"/"}function w(e){let t=e.indexOf("#"),r=e.indexOf("?"),s=r>-1&&(t<0||r<t);return s||t>-1?{pathname:e.substring(0,s?r:t),query:s?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}function x(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${t}${r}${s}${n}`}function b(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:s,hash:n}=w(e);return`${r}${t}${s}${n}`}function y(e,t){if("string"!=typeof e)return!1;let{pathname:r}=w(e);return r===t||r.startsWith(t+"/")}function v(e,t,r,s){return t&&t!==r&&(s||!y(e.toLowerCase(),`/${t.toLowerCase()}`)&&!y(e.toLowerCase(),"/api"))?x(e,`/${t}`):e}function _(e){let t=v(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=m(t)),e.buildId&&(t=b(x(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=x(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:b(t,"/"):m(t)}function S(e,t){var r;return null==(r=!Array.isArray(null==t?void 0:t.host)&&(null==t?void 0:t.host)||e.hostname)?void 0:r.split(":")[0].toLowerCase()}function P(e,t){let r;let s=e.split("/");return(t||[]).some(t=>!!s[1]&&s[1].toLowerCase()===t.toLowerCase()&&(r=t,s.splice(1,1),e=s.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}function A(e,t){if(y(e,t)){let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}return e}function I(e,t){var r;let{basePath:s,i18n:n,trailingSlash:o}=null!=(r=t.nextConfig)?r:{},i={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):o};if(s&&y(i.pathname,s)&&(i.pathname=A(i.pathname,s),i.basePath=s),!0===t.parseData&&i.pathname.startsWith("/_next/data/")&&i.pathname.endsWith(".json")){let e=i.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),t=e[0];i.pathname="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",i.buildId=t}if(n){let e=P(i.pathname,n.locales);i.locale=null==e?void 0:e.detectedLocale,i.pathname=(null==e?void 0:e.pathname)||i.pathname}return i}let L=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;function $(e,t){return new URL(String(e).replace(L,"localhost"),t&&String(t).replace(L,"localhost"))}let C=Symbol("NextURLInternal");class R{constructor(e,t,r){let s,n;"object"==typeof t&&"pathname"in t||"string"==typeof t?(s=t,n=r||{}):n=r||t||{},this[C]={url:$(e,s??n.base),options:n,basePath:""},this.analyzeUrl()}analyzeUrl(){var e,t,r,s,n;let o=I(this[C].url.pathname,{nextConfig:this[C].options.nextConfig,parseData:!0});this[C].domainLocale=g(null==(e=this[C].options.nextConfig)?void 0:null==(t=e.i18n)?void 0:t.domains,S(this[C].url,this[C].options.headers));let i=(null==(r=this[C].domainLocale)?void 0:r.defaultLocale)||(null==(s=this[C].options.nextConfig)?void 0:null==(n=s.i18n)?void 0:n.defaultLocale);this[C].url.pathname=o.pathname,this[C].defaultLocale=i,this[C].basePath=o.basePath??"",this[C].buildId=o.buildId,this[C].locale=o.locale??i,this[C].trailingSlash=o.trailingSlash}formatPathname(){return _({basePath:this[C].basePath,buildId:this[C].buildId,defaultLocale:this[C].options.forceLocale?void 0:this[C].defaultLocale,locale:this[C].locale,pathname:this[C].url.pathname,trailingSlash:this[C].trailingSlash})}formatSearch(){return this[C].url.search}get buildId(){return this[C].buildId}set buildId(e){this[C].buildId=e}get locale(){return this[C].locale??""}set locale(e){var t,r;if(!this[C].locale||!(null==(t=this[C].options.nextConfig)?void 0:null==(r=t.i18n)?void 0:r.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[C].locale=e}get defaultLocale(){return this[C].defaultLocale}get domainLocale(){return this[C].domainLocale}get searchParams(){return this[C].url.searchParams}get host(){return this[C].url.host}set host(e){this[C].url.host=e}get hostname(){return this[C].url.hostname}set hostname(e){this[C].url.hostname=e}get port(){return this[C].url.port}set port(e){this[C].url.port=e}get protocol(){return this[C].url.protocol}set protocol(e){this[C].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[C].url=$(e),this.analyzeUrl()}get origin(){return this[C].url.origin}get pathname(){return this[C].url.pathname}set pathname(e){this[C].url.pathname=e}get hash(){return this[C].url.hash}set hash(e){this[C].url.hash=e}get search(){return this[C].url.search}set search(e){this[C].url.search=e}get password(){return this[C].url.password}set password(e){this[C].url.password=e}get username(){return this[C].url.username}set username(e){this[C].url.username=e}get basePath(){return this[C].basePath}set basePath(e){this[C].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new R(String(this),this[C].options)}}var E=r(768);let j=Symbol("internal request");class O extends Request{constructor(e,t={}){let r="string"!=typeof e&&"url"in e?e.url:String(e);h(r),super(r,t),this[j]={cookies:new E.RequestCookies(this.headers),geo:t.geo||{},ip:t.ip,url:new R(r,{headers:l(this.headers),nextConfig:t.nextConfig})}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,geo:this.geo,ip:this.ip,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[j].cookies}get geo(){return this[j].geo}get ip(){return this[j].ip}get nextUrl(){return this[j].url}get page(){throw new n}get ua(){throw new o}get url(){return this[j].url.toString()}}let T=Symbol("internal response"),k=new Set([301,302,303,307,308]);function q(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let r=[];for(let[s,n]of e.request.headers)t.set("x-middleware-request-"+s,n),r.push(s);t.set("x-middleware-override-headers",r.join(","))}}class U extends Response{constructor(e,t={}){super(e,t),this[T]={cookies:new E.ResponseCookies(this.headers),url:t.url?new R(t.url,{headers:l(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[T].cookies}static json(e,t){let r=Response.json(e,t);return new U(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!k.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let s="object"==typeof t?t:{},n=new Headers(null==s?void 0:s.headers);return n.set("Location",h(e)),new U(null,{...s,headers:n,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",h(e)),q(t,r),new U(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),q(e,t),new U(null,{...e,headers:t})}}function N(e,t){let r="string"==typeof t?new URL(t):t,s=new URL(e,t),n=`${r.protocol}//${r.host}`;return`${s.protocol}//${s.host}`===n?s.toString().replace(n,""):s.toString()}let D=["__nextFallback","__nextLocale","__nextDefaultLocale","__nextIsNotFound"],G=["__nextDataReq"];function W(e,t){for(let t of D)e.delete(t);if(t)for(let t of G)e.delete(t);return e}function M(e,t){return t?e.replace(/\.rsc($|\?)/,"$1"):e}class H extends O{constructor(e){super(e.input,e.init),this.sourcePage=e.page}get request(){throw new s({page:this.sourcePage})}respondWith(){throw new s({page:this.sourcePage})}waitUntil(){throw new s({page:this.sourcePage})}}let z=[["RSC"],["Next-Router-State-Tree"],["Next-Router-Prefetch"],["x-vercel-sc-headers"]];async function F(e){let t=void 0!==self.__BUILD_MANIFEST;e.request.url=M(e.request.url,!0);let r=new R(e.request.url,{headers:e.request.headers,nextConfig:e.request.nextConfig}),s=r.buildId;r.buildId="";let n=e.request.headers["x-nextjs-data"];n&&"/index"===r.pathname&&(r.pathname="/");let o=i(e.request.headers),a=new Map;if(!t)for(let e of z){let t=e.toString().toLowerCase(),r=o.get(t);r&&(a.set(t,o.get(t)),o.delete(t))}W(r.searchParams,!0);let l=new H({page:e.page,input:String(r),init:{body:e.request.body,geo:e.request.geo,headers:o,ip:e.request.ip,method:e.request.method,nextConfig:e.request.nextConfig}});n&&Object.defineProperty(l,"__isData",{enumerable:!1,value:!0});let h=new f({request:l,page:e.page}),u=await e.handler(l,h);if(u&&!(u instanceof Response))throw TypeError("Expected an instance of Response to be returned");let d=null==u?void 0:u.headers.get("x-middleware-rewrite");if(u&&d){let t=new R(d,{forceLocale:!0,headers:e.request.headers,nextConfig:e.request.nextConfig});t.host===l.nextUrl.host&&(t.buildId=s||t.buildId,u.headers.set("x-middleware-rewrite",String(t)));let o=N(String(t),String(r));n&&u.headers.set("x-nextjs-rewrite",o)}let p=null==u?void 0:u.headers.get("Location");if(u&&p){let t=new R(p,{forceLocale:!1,headers:e.request.headers,nextConfig:e.request.nextConfig});u=new Response(u.body,u),t.host===l.nextUrl.host&&(t.buildId=s||t.buildId,u.headers.set("Location",String(t))),n&&(u.headers.delete("Location"),u.headers.set("x-nextjs-redirect",N(String(t),String(r))))}let g=u||U.next(),m=g.headers.get("x-middleware-override-headers"),w=[];if(m){for(let[e,t]of a)g.headers.set(`x-middleware-request-${e}`,t),w.push(e);w.length>0&&g.headers.set("x-middleware-override-headers",m+","+w.join(","))}return{response:g,waitUntil:Promise.all(h[c])}}function B(e){return`The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`}function J(e){let t=new Proxy(function(){},{get(t,r){if("then"===r)return{};throw Error(B(e))},construct(){throw Error(B(e))},apply(r,s,n){if("function"==typeof n[0])return n[0](t);throw Error(B(e))}});return new Proxy({},{get:()=>t})}function Y(){if(process!==r.g.process&&(process.env=r.g.process.env,r.g.process=process),Object.defineProperty(globalThis,"__import_unsupported",{value:J,enumerable:!1,configurable:!1}),"_ENTRIES"in globalThis&&_ENTRIES.middleware_instrumentation&&_ENTRIES.middleware_instrumentation.register)try{_ENTRIES.middleware_instrumentation.register()}catch(e){throw e.message=`An error occurred while loading instrumentation hook: ${e.message}`,e}}}},e=>{var t=e(e.s=381);(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/api/models"]=t}]);
//# sourceMappingURL=models.js.map