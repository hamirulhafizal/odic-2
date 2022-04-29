"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2282],{52282:function(e,t,s){s.d(t,{Z:function(){return _}});var n=s(87462),a=s(63366),r=s(67294),c=s(8679),o=s.n(c),l=s(54013);function i(e={}){const{baseClasses:t,newClasses:s,Component:a}=e;if(!s)return t;const r=(0,n.Z)({},t);return Object.keys(s).forEach((e=>{s[e]&&(r[e]=`${t[e]} ${s[e]}`)})),r}var u={set:(e,t,s,n)=>{let a=e.get(t);a||(a=new Map,e.set(t,a)),a.set(s,n)},get:(e,t,s)=>{const n=e.get(t);return n?n.get(s):void 0},delete:(e,t,s)=>{e.get(t).delete(s)}},h=s(56760),f=s(51825);const m=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var d=s(27202),p=s(5019),y=s(63057),C=s(30314),S=s(83961),Z=s(3203),g=s(26895);var v=s(85893);const b=(0,l.Ue)({plugins:[(0,d.Z)(),(0,p.Z)(),(0,y.Z)(),(0,C.Z)(),(0,S.Z)(),"undefined"===typeof window?null:(0,Z.Z)(),(0,g.Z)()]}),k={disableGeneration:!1,generateClassName:function(e={}){const{disableGlobal:t=!1,productionPrefix:s="jss",seed:n=""}=e,a=""===n?"":`${n}-`;let r=0;const c=()=>(r+=1,r);return(e,r)=>{const o=r.options.name;if(o&&0===o.indexOf("Mui")&&!r.options.link&&!t){if(-1!==m.indexOf(e.key))return`Mui-${e.key}`;const t=`${a}${o}-${e.key}`;return r.options.theme[f.Z]&&""===n?`${t}-${c()}`:t}return`${a}${s}${c()}`}}(),jss:b,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},$=r.createContext(k);let w=-1e9;var x=s(59766),O=s(28320);const P=["variant"];function j(e){return 0===e.length}function M(e){const t="function"===typeof e;return{create:(s,r)=>{let c;try{c=t?e(s):e}catch(u){throw u}if(!r||!s.components||!s.components[r]||!s.components[r].styleOverrides&&!s.components[r].variants)return c;const o=s.components[r].styleOverrides||{},l=s.components[r].variants||[],i=(0,n.Z)({},c);return Object.keys(o).forEach((e=>{i[e]=(0,x.Z)(i[e]||{},o[e])})),l.forEach((e=>{const t=function(e){const{variant:t}=e,s=(0,a.Z)(e,P);let n=t||"";return Object.keys(s).sort().forEach((t=>{n+="color"===t?j(n)?e[t]:(0,O.Z)(e[t]):`${j(n)?t:(0,O.Z)(t)}${(0,O.Z)(e[t].toString())}`})),n}(e.props);i[t]=(0,x.Z)(i[t]||{},e.style)})),i},options:{}}}var N={};const E=["name","classNamePrefix","Component","defaultTheme"];function R(e,t={}){const{name:s,classNamePrefix:c,Component:o,defaultTheme:f=N}=t,m=(0,a.Z)(t,E),d=M(e),p=s||c||"makeStyles";d.options={index:(w+=1,w),name:s,meta:p,classNamePrefix:p};return(e={})=>{const t=(0,h.Z)()||f,a=(0,n.Z)({},r.useContext($),m),c=r.useRef(),p=r.useRef();!function(e,t){const s=r.useRef([]);let n;const a=r.useMemo((()=>({})),t);s.current!==a&&(s.current=a,n=e()),r.useEffect((()=>()=>{n&&n()}),[a])}((()=>{const r={name:s,state:{},stylesCreator:d,stylesOptions:a,theme:t};return function({state:e,theme:t,stylesOptions:s,stylesCreator:a,name:r},c){if(s.disableGeneration)return;let o=u.get(s.sheetsManager,a,t);o||(o={refs:0,staticSheet:null,dynamicStyles:null},u.set(s.sheetsManager,a,t,o));const h=(0,n.Z)({},a.options,s,{theme:t,flip:"boolean"===typeof s.flip?s.flip:"rtl"===t.direction});h.generateId=h.serverGenerateClassName||h.generateClassName;const f=s.sheetsRegistry;if(0===o.refs){let e;s.sheetsCache&&(e=u.get(s.sheetsCache,a,t));const c=a.create(t,r);e||(e=s.jss.createStyleSheet(c,(0,n.Z)({link:!1},h)),e.attach(),s.sheetsCache&&u.set(s.sheetsCache,a,t,e)),f&&f.add(e),o.staticSheet=e,o.dynamicStyles=(0,l._$)(c)}if(o.dynamicStyles){const t=s.jss.createStyleSheet(o.dynamicStyles,(0,n.Z)({link:!0},h));t.update(c),t.attach(),e.dynamicSheet=t,e.classes=i({baseClasses:o.staticSheet.classes,newClasses:t.classes}),f&&f.add(t)}else e.classes=o.staticSheet.classes;o.refs+=1}(r,e),p.current=!1,c.current=r,()=>{!function({state:e,theme:t,stylesOptions:s,stylesCreator:n}){if(s.disableGeneration)return;const a=u.get(s.sheetsManager,n,t);a.refs-=1;const r=s.sheetsRegistry;0===a.refs&&(u.delete(s.sheetsManager,n,t),s.jss.removeStyleSheet(a.staticSheet),r&&r.remove(a.staticSheet)),e.dynamicSheet&&(s.jss.removeStyleSheet(e.dynamicSheet),r&&r.remove(e.dynamicSheet))}(r)}}),[t,d]),r.useEffect((()=>{p.current&&function({state:e},t){e.dynamicSheet&&e.dynamicSheet.update(t)}(c.current,e),p.current=!0}));const y=function({state:e,stylesOptions:t},s,n){if(t.disableGeneration)return s||{};e.cacheClasses||(e.cacheClasses={value:null,lastProp:null,lastJSS:{}});let a=!1;return e.classes!==e.cacheClasses.lastJSS&&(e.cacheClasses.lastJSS=e.classes,a=!0),s!==e.cacheClasses.lastProp&&(e.cacheClasses.lastProp=s,a=!0),a&&(e.cacheClasses.value=i({baseClasses:e.cacheClasses.lastJSS,newClasses:s,Component:n})),e.cacheClasses.value}(c.current,e.classes,o);return y}}const T=["defaultTheme","withTheme","name"],G=["classes"];var _=(e,t={})=>s=>{const{defaultTheme:c,withTheme:l=!1,name:i}=t,u=(0,a.Z)(t,T);let f=i;const m=R(e,(0,n.Z)({defaultTheme:c,Component:s,name:i||s.displayName,classNamePrefix:f},u)),d=r.forwardRef((function(e,t){const r=(0,a.Z)(e,G),o=m((0,n.Z)({},s.defaultProps,e));let u,f=r;return("string"===typeof i||l)&&(u=(0,h.Z)()||c,i&&(f=function(e){const{theme:t,name:s,props:a}=e;if(!t||!t.components||!t.components[s]||!t.components[s].defaultProps)return a;const r=(0,n.Z)({},a),c=t.components[s].defaultProps;let o;for(o in c)void 0===r[o]&&(r[o]=c[o]);return r}({theme:u,name:i,props:r})),l&&!f.theme&&(f.theme=u)),(0,v.jsx)(s,(0,n.Z)({ref:t,classes:o},f))}));return o()(d,s),d}}}]);