(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{73579:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));var o=n=a(a({},n),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return r(o);n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};s(r(67294));var i=s(r(23668));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},3982:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},23668:function(e,t,r){"use strict";var n=r(33227),o=r(88361),a=r(930);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,p=(u=r(67294))&&u.__esModule?u:{default:u},d=r(67161),f=r(3982);var b=[],y=[],h=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var m=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=p.default.lazy(r.loader));var n=null;function o(){if(!n){var t=new m(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&y.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=r.suspense?function(e,t){return p.default.createElement(r.lazy,s(s({},e),{},{ref:t}))}:function(e,t){o();var a=p.default.useContext(f.LoadableContext),i=d.useSubscription(n);return p.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),p.default.useMemo((function(){return i.loading||i.error?p.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?p.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!r.suspense&&o()},i.displayName="LoadableComponent",p.default.forwardRef(i)}(g,e)}function j(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return j(e,t)}))}O.preloadAll=function(){return new Promise((function(e,t){j(b).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};j(y,e).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var v=O;t.default=v},25204:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return te}});var n=r(86886),o=r(32107),a=r(49514),i=r(59499),s=r(67294),l=r(2734),c=r(5152),u=r(20132),p=r(42793),d=r.n(p),f=r(85893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),g={chart:{height:350,type:"area"},colors:[d().secondaryMain,d().primaryMain],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}}},m=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=(0,s.useState)([{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}])[0],i=(0,s.useState)(g),c=i[0],p=i[1];return s.useEffect((function(){p((function(a){return y(y({},a),{},{colors:[e.palette.secondary.main,e.palette.primary.main],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,r,n,o,e]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(h,{options:c,series:a,type:"area",height:350})})};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),w={chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},x=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.success.dark,i=(0,s.useState)([{data:[400,430,448,470,540,580,690,1100,1200,1380]}])[0],c=(0,s.useState)(w),p=c[0],d=c[1];return s.useEffect((function(){d((function(e){return j(j({},e),{},{colors:[a],xaxis:{labels:{style:{colors:[r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r,r,r,r,r,r,r,r,r,r]}}},grid:{borderColor:"dark"===t?n+20:o},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,r,n,o,a]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(v,{options:p,series:i,type:"bar",height:350})})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),S={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]},D=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.secondary.main,i=e.palette.primary.main,c=e.palette.success.dark,p=(0,s.useState)([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}])[0],d=(0,s.useState)(S),b=d[0],y=d[1];return s.useEffect((function(){y((function(e){return k(k({},e),{},{colors:[a,i,c],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,r,n,o,a,i,c]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(_,{options:b,series:p,type:"bar",height:350})})};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),T={chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},M=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.secondary.main,i=(0,s.useState)([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}])[0],c=(0,s.useState)(T),p=c[0],d=c[1];return s.useEffect((function(){d((function(e){return C(C({},e),{},{colors:[a],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,r,n,o,a]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(Z,{options:p,series:i,type:"line",height:350})})};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),R={chart:{type:"line",stacked:!1,height:450},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},legend:{show:!0,fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}}},B=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.secondary.main,i=e.palette.primary.main,c=e.palette.success.dark,p=(0,s.useState)([{name:"Income",type:"column",data:[14,2,25,15,25,28,38,46]},{name:"Cashflow",type:"column",data:[11,3,31,4,41,49,65,85]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}])[0],d=(0,s.useState)(R),b=d[0],y=d[1];return s.useEffect((function(){y((function(e){return F(F({},e),{},{colors:[a,i,c],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,r,n,o,a,i,c]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(L,{options:b,series:p,type:"line"})})};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),N={chart:{type:"pie",width:450,height:450},labels:["Team A","Team B","Team C","Team D","Team E"],legend:{show:!0,fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},V=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.background.paper,i=(0,s.useState)([44,55,13,43,22])[0],c=(0,s.useState)(N),p=c[0],d=c[1],b=e.palette.secondary.main,y=e.palette.primary.main,h=e.palette.success.dark,g=e.palette.error.main,m=e.palette.warning.dark,O=e.palette.orange.dark;return s.useEffect((function(){d((function(e){return G(G({},e),{},{colors:[b,y,h,g,m,O],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},legend:{labels:{colors:"grey.500"}},stroke:{colors:[a]}})}))}),[t,r,n,o,a,b,y,h,g,m,O]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(I,{options:p,series:i,type:"pie"})})};function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),H={chart:{width:450,height:450,type:"polarArea"},fill:{opacity:1},legend:{show:!0,fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},U=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=e.palette.background.paper,i=(0,s.useState)([14,23,21,17,15,10,12,17,21])[0],c=(0,s.useState)(H),p=c[0],d=c[1],b=e.palette.secondary.main,y=e.palette.primary.main,h=e.palette.success.dark,g=e.palette.error.main,m=e.palette.warning.dark,O=e.palette.orange.dark;return s.useEffect((function(){d((function(e){return Y(Y({},e),{},{colors:[b,y,h,g,m,O,g],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},legend:{labels:{colors:"grey.500"}},stroke:{colors:[a]},plotOptions:{polarArea:{rings:{strokeColor:"dark"===t?n+20:o},spokes:{connectorColors:"dark"===t?n+20:o}}}})}))}),[t,r,n,o,a,b,y,h,g,m,O]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(J,{options:p,series:i,type:"polarArea"})})};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=(0,c.default)((function(){return Promise.all([r.e(5279),r.e(4394)]).then(r.bind(r,47229))}),{ssr:!1,loadableGenerated:{webpack:function(){return[47229]}}}),q={chart:{type:"radialBar",width:450,height:450},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"16px",position:"left",offsetX:0,offsetY:15,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return"".concat(e,":  ").concat(t.w.globals.series[t.seriesIndex])},itemMargin:{vertical:3}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},Q=function(){var e=(0,l.Z)(),t=(0,u.Z)().navType,r=e.palette.text.primary,n=e.palette.dark.light,o=e.palette.grey[200],a=(0,s.useState)([76,67,61,90])[0],i=(0,s.useState)(q),c=i[0],p=i[1],d=e.palette.secondary.main,b=e.palette.primary.main,y=e.palette.success.dark,h=e.palette.error.main;return s.useEffect((function(){p((function(e){return K(K({},e),{},{colors:[d,b,y,h],xaxis:{labels:{style:{colors:[r,r,r,r,r,r,r]}}},yaxis:{labels:{style:{colors:[r]}}},grid:{borderColor:"dark"===t?n+20:o},plotOptions:{radialBar:{track:{background:"dark"===t?n+20:o}}}})}))}),[t,r,n,o,d,b,y,h]),(0,f.jsx)("div",{id:"chart",children:(0,f.jsx)(W,{options:c,series:a,type:"radialBar"})})},ee=function(){return(0,f.jsxs)(n.ZP,{container:!0,spacing:a.dv,children:[(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,f.jsx)(o.Z,{title:"Column Chart",children:(0,f.jsx)(D,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,f.jsx)(o.Z,{title:"Bar Chart",children:(0,f.jsx)(x,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(o.Z,{title:"Line Chart",children:(0,f.jsx)(M,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(o.Z,{title:"Area Chart",children:(0,f.jsx)(m,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(o.Z,{title:"Mixed Chart",children:(0,f.jsx)(B,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,xl:4,children:(0,f.jsx)(o.Z,{title:"Redial Chart",children:(0,f.jsx)(Q,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,xl:4,children:(0,f.jsx)(o.Z,{title:"Polar Chart",children:(0,f.jsx)(U,{})})}),(0,f.jsx)(n.ZP,{item:!0,xs:12,md:6,xl:4,children:(0,f.jsx)(o.Z,{title:"Pie Chart",children:(0,f.jsx)(V,{})})})]})};ee.Layout="authGuard";var te=ee},17758:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/charts/apexchart",function(){return r(25204)}])},5152:function(e,t,r){e.exports=r(73579)},68217:function(e,t,r){"use strict";var n=r(96086),o=r(67294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===r||(a=t(),i({getCurrentValue:t,subscribe:r,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==r||o.value===e?o:n({},o,{value:e})}))}}var o=!1,a=r(e);return e(),function(){o=!0,a()}}),[t,r]),a}},67161:function(e,t,r){"use strict";e.exports=r(68217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=17758,e(e.s=t);var t}));var t=e.O();_N_E=t}]);