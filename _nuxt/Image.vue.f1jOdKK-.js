import{y as I,z as k,A as $,B,C as P,D as C,E as W,G as D,H as O,m as p,f as E,r as R,I as L,J as x,o as U,i as T,n as G}from"./entry.YjGJ4vdX.js";import{u as J}from"./vue.f36acd1f.-g8SII3M.js";async function V(e,t){return await Q(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Q(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>s(n),i.src=e})}function X(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function j(e){return t=>t?e[t]||t:e.missingValue}function Y({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(r,o)=>`${r}=${o}`),t&&typeof t!="function"&&(t=j(t));const n=i||{};return Object.keys(n).forEach(r=>{typeof n[r]!="function"&&(n[r]=j(n[r]))}),(r={})=>Object.entries(r).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=n[a];return typeof l=="function"&&(d=l(r[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(s)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Z(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function K(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ee(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function te(e){const t={options:e},s=(n,r={})=>N(t,n,r),i=(n,r={},o={})=>s(n,{...o,modifiers:P(r,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(r,o,a)=>i(r,o,{...e.presets[n],...a});return i.options=e,i.getImage=s,i.getMeta=(n,r)=>ie(t,n,r),i.getSizes=(n,r)=>re(t,n,r),t.$img=i,i}async function ie(e,t,s){const i=N(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await V(e,i.url)}function N(e,t,s){var l,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=se(e,s.provider||e.options.provider),r=ne(e,s.preset);if(t=I(t)?t:k(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=$(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&I(t)){const m=B(t).host;if(!e.options.domains.find(y=>y===m))return{url:t}}const o=P(s,r,n);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=v(o.modifiers.width)),(f=o.modifiers)!=null&&f.height&&(o.modifiers.height=v(o.modifiers.height));const d=i.getImage(t,o,e);return d.format=d.format||a||"",d}function se(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function ne(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function re(e,t,s){var w,c,S,_,b;const i=v((w=s.modifiers)==null?void 0:w.width),n=v((c=s.modifiers)==null?void 0:c.height),r=ee(s.sizes),o=(S=s.densities)!=null&&S.trim()?Z(s.densities.trim()):e.options.densities;K(o);const a=i&&n?n/i:0,d=[],l=[];if(Object.keys(r).length>=1){for(const u in r){const g=M(u,String(r[u]),n,a,e);if(g!==void 0){d.push({size:g.size,screenMaxWidth:g.screenMaxWidth,media:`(max-width: ${g.screenMaxWidth}px)`});for(const h of o)l.push({width:g._cWidth*h,src:A(e,t,s,g,h)})}}oe(d)}else for(const u of o){const g=Object.keys(r)[0];let h=M(g,String(r[g]),n,a,e);h===void 0&&(h={size:"",screenMaxWidth:0,_cWidth:(_=s.modifiers)==null?void 0:_.width,_cHeight:(b=s.modifiers)==null?void 0:b.height}),l.push({width:u,src:A(e,t,s,h,u)})}ae(l);const f=l[l.length-1],m=d.length?d.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,y=m?"w":"x",z=l.map(u=>`${u.src} ${u.width}${y}`).join(", ");return{sizes:m,srcset:z,src:f==null?void 0:f.src}}function M(e,t,s,i,n){const r=n.options.screens&&n.options.screens[e]||parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=parseInt(t);if(!r||!a)return;o&&(a=Math.round(a/100*r));const d=i?Math.round(a*i):s;return{size:t,screenMaxWidth:r,_cWidth:a,_cHeight:d}}function A(e,t,s,i,n){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},s)}function oe(e){var s;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function ae(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const ce=Y({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),de=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=ce(t)||"_";return s||(s=$(i.options.nuxt.baseURL,"/_ipx")),{url:$(s,n,C(e))}},le=!0,ue=!0,fe=Object.freeze(Object.defineProperty({__proto__:null,getImage:de,supportsAlias:ue,validateDomains:le},Symbol.toStringTag,{value:"Module"})),F={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};F.providers={ipxStatic:{provider:fe,defaults:{}}};const q=()=>{const e=D(),t=O();return t.$img||t._img||(t._img=te({...F,nuxt:{baseURL:e.app.baseURL}}))},H={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ge=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),s=p(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=q(),n=p(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:n}},me={...H,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},he=E({name:"NuxtPicture",props:me,emits:["load"],setup:(e,t)=>{var z,w;const s=q(),i=ge(e),n=p(()=>X(e.src)),r=p(()=>["png","webp","gif","svg"].includes(n.value)),o=p(()=>e.legacyFormat?e.legacyFormat:r.value?"png":"jpeg"),a=p(()=>{var S,_;const c=((S=e.format)==null?void 0:S.split(","))||(n.value==="svg"?["svg"]:(_=s.options.format)!=null&&_.length?[...s.options.format]:["webp"]);return c[0]==="svg"?[{src:e.src}]:(c.includes(o.value)&&c.splice(c.indexOf(o.value),1),c.push(o.value),c.map(b=>{const{srcset:u,sizes:g,src:h}=s.getSizes(e.src,{...i.options.value,sizes:e.sizes||s.options.screens,densities:e.densities,modifiers:{...i.modifiers.value,format:b}});return{src:h,type:`image/${b}`,sizes:g,srcset:u}}))}),d=p(()=>a.value.length-1);if(e.preload){const c={rel:"preload",as:"image",imagesrcset:a.value[0].srcset,nonce:e.nonce};(w=(z=a.value)==null?void 0:z[0])!=null&&w.sizes&&(c.imagesizes=a.value[0].sizes),J({link:[c]})}const l={...e.imgAttrs,"data-nuxt-pic":""};for(const c in t.attrs)c in H&&!(c in l)&&(l[c]=t.attrs[c]);const f=R(),y=O().isHydrating;return L(()=>{f.value&&(f.value.complete&&y&&!f.value.getAttribute("data-error")&&t.emit("load",new Event("load")),f.value.onload=c=>{t.emit("load",c)})}),()=>x("picture",null,[...a.value.slice(0,-1).map(c=>x("source",{type:c.type,sizes:c.sizes,srcset:c.srcset})),x("img",{ref:f,...i.attrs.value,...l,src:a.value[d.value].src,sizes:a.value[d.value].sizes,srcset:a.value[d.value].srcset})])}}),ye=E({__name:"Image",props:{src:{},alt:{},className:{},wrapperClass:{}},setup(e){return(t,s)=>{const i=he;return U(),T(i,{src:t.src,imgAttrs:{class:t.className,alt:t.alt},class:G(t.wrapperClass)},null,8,["src","imgAttrs","class"])}}});export{ye as _};
