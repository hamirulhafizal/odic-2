"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2682],{20574:function(e,t,i){var n=i(59499),r=i(25675),s=i(90948),a=i(2734),l=i(50122),o=i(27948),c=i(86886),d=i(15861),h=i(49514),x=i(60802),p=i(25084),m=i(94020),g=i(85893),j=(0,s.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({padding:"35px 0",color:"#fff",background:t.palette.secondary.main},t.breakpoints.down("md"),{textAlign:"center"})})),Z=(0,s.ZP)(l.Z)({color:"#fff",display:"inline-flex",alignItems:"center",textDecoration:"none !important",opacity:"0.8","& svg":{fontsize:"1.125rem",marginRight:8},"&:hover":{opacity:"1"}}),u=(0,s.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({padding:"20px 0",color:"#fff",background:t.palette.secondary.dark},t.breakpoints.down("md"),{textAlign:"center"})}));t.Z=function(){var e=(0,a.Z)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(c.ZP,{container:!0,alignItems:"center",spacing:h.dv,children:[(0,g.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,g.jsx)(r.default,{src:"/assets/images/logo-white.svg",alt:"Berry",width:100,height:34,layout:"intrinsic"})}),(0,g.jsx)(c.ZP,{item:!0,xs:12,sm:8,children:(0,g.jsxs)(c.ZP,{container:!0,alignItems:"center",spacing:2,sx:(0,n.Z)({justifyContent:"flex-end"},e.breakpoints.down("md"),{justifyContent:"center"}),children:[(0,g.jsx)(c.ZP,{item:!0,children:(0,g.jsxs)(Z,{href:"https://blog.berrydashboard.io/",target:"_blank",underline:"hover",children:[(0,g.jsx)(m.Z,{}),"Blog"]})}),(0,g.jsx)(c.ZP,{item:!0,children:(0,g.jsxs)(Z,{href:"https://www.facebook.com/codedthemes",target:"_blank",underline:"hover",children:[(0,g.jsx)(x.Z,{}),"Facebook"]})}),(0,g.jsx)(c.ZP,{item:!0,children:(0,g.jsxs)(Z,{href:"https://twitter.com/codedthemes",target:"_blank",underline:"hover",children:[(0,g.jsx)(p.Z,{}),"Twitter"]})})]})})]})})}),(0,g.jsx)(u,{children:(0,g.jsx)(o.Z,{children:(0,g.jsx)(d.Z,{variant:"subtitle2",component:"div",color:"inherit",children:"\xa9 CodedThemes"})})})]})}},39678:function(e,t,i){var n=i(59499),r=i(50029),s=i(36864),a=i(87794),l=i.n(a),o=i(86886),c=i(94054),d=i(47312),h=i(57709),x=i(11057),p=i(87357),m=i(56815),g=i(51239),j=i(82175),Z=i(74231),u=i(9669),f=i.n(u),b=i(62055),y=i(32953),P=i(12686),v=i(49514),k=i(85893);function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.Z=function(e){var t=(0,s.Z)({},e),i=(0,y.Z)(),n=(0,g.I0)();return(0,k.jsx)(j.J9,{initialValues:{email:"",submit:null},validationSchema:Z.Ry().shape({email:Z.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,r.Z)(l().mark((function e(t,r){var s,a,o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.setErrors,a=r.setStatus,o=r.setSubmitting,e.prev=1,c={headers:{"content-type":"application/json"}},e.next=5,f().post("https://yourapicall",{email:t.email},c);case 5:n((0,P.ss)({open:!0,message:"Success! Please check inbox and confirm.",variant:"alert",alert:{color:"success"},close:!1})),i.current&&(a({success:!0}),o(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i.current&&(a({success:!1}),s({submit:e.t0.message}),o(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,i){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,n=e.handleBlur,r=e.handleChange,s=e.handleSubmit,a=e.isSubmitting,l=e.touched,g=e.values;return(0,k.jsxs)("form",O(O({noValidate:!0,onSubmit:s},t),{},{children:[(0,k.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:v.dv,children:[(0,k.jsx)(o.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,k.jsxs)(c.Z,{fullWidth:!0,error:Boolean(l.email&&i.email),children:[(0,k.jsx)(d.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),(0,k.jsx)(h.Z,{id:"outlined-adornment-email-forgot",type:"email",defaultValue:g.email,name:"email",onBlur:n,onChange:r,label:"Email Address"})]})}),(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(b.Z,{children:(0,k.jsx)(x.Z,{disableElevation:!0,disabled:a,type:"submit",variant:"contained",size:"large",sx:{px:2.75,py:1.5},children:"Subscribe"})})})]}),l.email&&i.email&&(0,k.jsx)(p.Z,{sx:{mt:1},children:(0,k.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})}),i.submit&&(0,k.jsx)(p.Z,{sx:{mt:3},children:(0,k.jsx)(m.Z,{error:!0,children:i.submit})})]}))}})}},41222:function(e,t,i){var n=i(59499),r=i(16835),s=i(36864),a=i(67294),l=i(2734),o=i(8298),c=i(42293),d=i(27948),h=i(10155),x=i(15861),p=i(26447),m=i(11057),g=i(50122),j=i(87357),Z=i(93946),u=i(58826),f=i(78462),b=i(98619),y=i(48885),P=i(59334),v=i(5482),k=i(63991),w=i(326),O=i(85893);function S(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function D(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function E(e){var t=e.children,i=e.window,n=(0,l.Z)(),r=(0,o.Z)({disableHysteresis:!0,threshold:0,target:i}),s="dark"===n.palette.mode?n.palette.dark.dark:n.palette.grey[200];return a.cloneElement(t,{elevation:r?2:0,style:{backgroundColor:n.palette.background.default,borderBottom:r?"none":"1px solid",borderColor:r?"":s,color:n.palette.text.dark}})}t.Z=function(e){var t=(0,s.Z)({},e),i=a.useState(!1),n=(0,r.Z)(i,2),l=n[0],o=n[1],S=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}};return(0,O.jsx)(E,D(D({},t),{},{children:(0,O.jsx)(c.Z,{children:(0,O.jsx)(d.Z,{children:(0,O.jsxs)(h.Z,{children:[(0,O.jsx)(x.Z,{component:"div",sx:{flexGrow:1,textAlign:"left"},children:(0,O.jsx)(v.Z,{})}),(0,O.jsxs)(p.Z,{direction:"row",sx:{display:{xs:"none",sm:"block"}},spacing:2,children:[(0,O.jsx)(m.Z,{color:"inherit",component:g.Z,href:"#",target:"_blank",children:"Login"}),(0,O.jsx)(m.Z,{component:g.Z,href:"/listing",disableElevation:!0,variant:"contained",color:"secondary",children:"Post Ads Property"})]}),(0,O.jsxs)(j.Z,{sx:{display:{xs:"block",sm:"none"}},children:[(0,O.jsx)(Z.Z,{color:"inherit",onClick:S(!0),size:"large",children:(0,O.jsx)(w.Z,{})}),(0,O.jsx)(u.ZP,{anchor:"top",open:l,onClose:S(!1),children:l&&(0,O.jsx)(j.Z,{sx:{width:"auto"},role:"presentation",onClick:S(!1),onKeyDown:S(!1),children:(0,O.jsxs)(f.Z,{children:[(0,O.jsx)(g.Z,{style:{textDecoration:"none"},href:"/",children:(0,O.jsxs)(b.Z,{component:"a",children:[(0,O.jsx)(y.Z,{children:(0,O.jsx)(k.JOP,{})}),(0,O.jsx)(P.Z,{primary:"Home"})]})}),(0,O.jsx)(g.Z,{style:{textDecoration:"none"},href:"/login",children:(0,O.jsxs)(b.Z,{component:"a",children:[(0,O.jsx)(y.Z,{children:(0,O.jsx)(k.N7y,{})}),(0,O.jsx)(P.Z,{primary:"Login"})]})})]})})})]})]})})})}))}},74202:function(e,t,i){var n=i(59499),r=i(4730),s=i(2734),a=i(87952),l=i(85893),o=["color","outline","size","sx"];function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.Z=function(e){var t=e.color,i=e.outline,n=e.size,c=e.sx,h=(0,r.Z)(e,o),x=(0,s.Z)(),p=t&&!i&&{color:x.palette.background.paper,bgcolor:"".concat(t,".main")},m=i&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:x.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},g={};switch(n){case"badge":g={width:x.spacing(3.5),height:x.spacing(3.5)};break;case"xs":g={width:x.spacing(4.25),height:x.spacing(4.25)};break;case"sm":g={width:x.spacing(5),height:x.spacing(5)};break;case"lg":g={width:x.spacing(9),height:x.spacing(9)};break;case"xl":g={width:x.spacing(10.25),height:x.spacing(10.25)};break;case"md":g={width:x.spacing(7.5),height:x.spacing(7.5)};break;default:g={}}return(0,l.jsx)(a.Z,d({sx:d(d(d(d({},p),m),g),c)},h))}},32953:function(e,t,i){var n=i(67294);t.Z=function(){var e=(0,n.useRef)(!0);return(0,n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},62682:function(e,t,i){i.r(t),i.d(t,{default:function(){return je}});var n=i(59499),r=i(90948),s=i(2734),a=i(27948),l=i(86886),o=i(15861),c=i(87357),d=i(11057),h=i(85417),x=i(91931),p=i(74202),m=i(62055),g=i(49514),j=i(85893),Z=(0,r.ZP)("img")((function(e){var t=e.theme;return(0,n.Z)({maxWidth:"100%",borderRadius:"20px",transform:"scale(1.7)",transformOrigin:"rtl"===t.direction?"100% 50%":"0 50%"},t.breakpoints.down("lg"),{transform:"scale(1.2)"})})),u=(0,r.ZP)("img")({maxWidth:"100%",filter:"drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))"}),f=function(){var e=(0,s.Z)();return(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:g.dv,sx:{mt:{xs:10,sm:6,md:18.75},mb:{xs:2.5,md:10}},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,md:5,children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,sx:(0,n.Z)({pr:10},e.breakpoints.down("lg"),{pr:0,textAlign:"center"}),children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(h.E.div,{initial:{opacity:0,translateY:550},animate:{opacity:1,translateY:0},transition:{type:"spring",stiffness:150,damping:30},children:(0,j.jsxs)(o.Z,{variant:"h1",sx:{fontSize:{xs:"2.25rem",sm:"3rem",md:"4rem"},fontWeight:900,lineHeight:1.4},children:["One Dream Property",(0,j.jsx)(c.Z,{component:"span",sx:{ml:2,color:e.palette.primary.main},children:"Legacy"})]})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(h.E.div,{initial:{opacity:0,translateY:550},animate:{opacity:1,translateY:0},transition:{type:"spring",stiffness:150,damping:30,delay:.2},children:(0,j.jsx)(o.Z,{variant:"h4",component:"div",color:"inherit",sx:{fontSize:{xs:"1rem",md:"1.125rem"},fontWeight:400,lineHeight:1.4},children:"Berry is React based admin template which helps you to build faster and beautiful web applications."})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sx:{my:3.25},children:(0,j.jsx)(h.E.div,{initial:{opacity:0,translateY:550},animate:{opacity:1,translateY:0},transition:{type:"spring",stiffness:150,damping:30,delay:.4},children:(0,j.jsxs)(l.ZP,{container:!0,spacing:2,sx:{justifyContent:{xs:"center",md:"flex-start"}},children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(m.Z,{children:(0,j.jsx)(d.Z,{component:x.Z,href:"/dashboard/",size:"large",variant:"contained",color:"secondary",children:"Live Preview"})})}),(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(d.Z,{component:x.Z,href:"/login",size:"large",variant:"text",children:"Login"})})]})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(h.E.div,{initial:{opacity:0,translateY:550},animate:{opacity:1,translateY:0},transition:{type:"spring",stiffness:150,damping:30,delay:.6},children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,sx:(0,n.Z)({},e.breakpoints.down("lg"),{display:"inline-flex",width:"auto"}),children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(p.Z,{alt:"MUI Logo",color:"primary",sx:{width:50,height:50,padding:.5,background:"dark"===e.palette.mode?e.palette.dark.light:e.palette.primary.light},variant:"rounded",children:(0,j.jsxs)("svg",{width:"50",height:"50",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:e.palette.primary[800]}),(0,j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:e.palette.primary.main}),(0,j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:e.palette.primary[800]}),(0,j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:e.palette.primary.main})]}),(0,j.jsx)("defs",{children:(0,j.jsx)("clipPath",{id:"clip0",children:(0,j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsxs)(o.Z,{variant:"h4",component:"div",color:"inherit",sx:{fontWeight:400,lineHeight:1.4},children:[(0,j.jsx)("b",{children:"Built with Material-UI \xa9"})," - The most popular React Component Library."]})})]})})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,md:7,sx:{display:{xs:"none",md:"flex"}},children:(0,j.jsxs)(c.Z,{sx:{position:"relative",mt:8.75},children:[(0,j.jsx)(Z,{src:"/assets/images/landing/dashboard.png",alt:"Berry"}),(0,j.jsx)(c.Z,{sx:{position:"absolute",top:"-110px",right:"rtl"===e.direction?"170px":"-170px",width:"290px",animation:"10s slideY linear infinite"},children:(0,j.jsx)(h.E.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:150,damping:30,delay:.2},children:(0,j.jsx)(u,{src:"/assets/images/landing/widget-1.png",alt:"Berry"})})}),(0,j.jsx)(c.Z,{sx:{position:"absolute",bottom:-90,left:300,width:280,animation:"10s slideY linear infinite",animationDelay:"2s"},children:(0,j.jsx)(h.E.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:150,damping:30,delay:.4},children:(0,j.jsx)(u,{src:"/assets/images/landing/widget-2.png",alt:"Berry"})})})]})})]})})},b=i(16835),y=i(67294),P=i(70131),v=i(46513);var k=function(e){var t=e.children,i=(0,v._)(),n=(0,P.YD)(),r=(0,b.Z)(n,2),s=r[0],a=r[1];return(0,y.useEffect)((function(){a&&i.start("visible")}),[i,a]),(0,j.jsx)(h.E.div,{ref:s,animate:i,initial:"hidden",transition:{duration:.3},variants:{visible:{opacity:1,translateY:0},hidden:{opacity:0,translateY:275}},children:t})},w=i(22278),O=i(67737),S=i(54204),D=i(4263),E=function(){var e=(0,s.Z)();return(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,lg:5,md:10,children:(0,j.jsxs)(l.ZP,{container:!0,spacing:2,sx:{mb:2},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.ZP,{container:!0,spacing:1,children:(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(o.Z,{variant:"h5",color:"primary",children:"Top Features"})})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h2",component:"div",children:"What Berry brings to you?"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Berry is a solid dashboard template for your next project, with the following top features."})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:g.dv,sx:{textAlign:"center"},children:[(0,j.jsx)(l.ZP,{item:!0,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(p.Z,{size:"xl",variant:"rounded",sx:{background:"dark"===e.palette.mode?e.palette.dark[900]:e.palette.primary.light,color:e.palette.primary.main},children:(0,j.jsx)(O.Z,{fontSize:"large"})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h3",children:"Beautiful User Interface"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Warm color palates and minimally designed interfaces make the user experience more comfortable."})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(p.Z,{size:"xl",variant:"rounded",sx:{background:"dark"===e.palette.mode?e.palette.dark[900]:e.palette.secondary.light,color:e.palette.secondary.main},children:(0,j.jsx)(S.Z,{fontSize:"large"})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h3",children:"Modern Technology Stack"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Technology behind Berry is less complicated so you can focus on creating the actual web applications."})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(p.Z,{size:"xl",variant:"rounded",sx:{background:"dark"===e.palette.mode?e.palette.dark[900]:e.palette.success.light,color:e.palette.success.dark},children:(0,j.jsx)(D.Z,{fontSize:"large"})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h3",children:"Performance Centric"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Code that makes it easier and faster to render the page for your web applications."})})]})})})})]})})]})})},B=i(25675),F=i(49990),C=function(){return(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,lg:5,md:10,children:(0,j.jsxs)(l.ZP,{container:!0,spacing:2,sx:{mb:2},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.ZP,{container:!0,spacing:1,children:(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(o.Z,{variant:"h5",color:"primary",children:"Demos"})})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h2",component:"div",children:"Pre-build Dashboard & Apps"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Berry has customized pages with Material-UI components, Apps, Forms and lots more to explore."})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:g.dv,sx:{textAlign:"center"},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(F.Z,{component:x.Z,href:"/dashboard/",sx:{width:"100%",height:{xs:"220px",sm:"250px",md:"300px"},position:"relative"},children:(0,j.jsx)(B.default,{src:"/assets/images/landing/img-demo-1.jpg",alt:"Berry Dashboard",layout:"fill",width:"100%",height:"100%"})})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(F.Z,{sx:{width:"100%",height:{xs:"220px",sm:"250px",md:"300px"},position:"relative"},component:x.Z,href:"/app/user/social-profile/posts",children:(0,j.jsx)(B.default,{src:"/assets/images/landing/img-demo-2.jpg",alt:"Berry Social App",width:"100%",height:"100%",layout:"fill"})})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,md:4,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(F.Z,{component:x.Z,href:"/dashboard/",sx:{width:"100%",height:{xs:"220px",sm:"250px",md:"300px"},position:"relative"},children:(0,j.jsx)(B.default,{src:"/assets/images/landing/img-demo-3.jpg",alt:"Berry Mail App",layout:"fill",width:"100%",height:"100%"})})})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sx:{textAlign:"center",mt:3},children:(0,j.jsx)(m.Z,{children:(0,j.jsx)(d.Z,{component:x.Z,href:"/forms/components/autocomplete",variant:"outlined",children:"Explore Components"})})})]})})},L=i(46066);function M(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?M(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var I=(0,r.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",height:"100%",animation:"5s wings ease-in-out infinite"}),A="/assets/images/landing/img-lay-grid.png",W=function(e){var t=e.item;return(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",justifyContent:"center",spacing:3,textAlign:"center",children:[(0,j.jsx)(l.ZP,{item:!0,xs:11,children:(0,j.jsxs)(c.Z,{sx:{width:"100%",position:"relative"},children:[(0,j.jsx)(B.default,{src:t.bg,alt:"Berry",width:"100%",height:100}),(0,j.jsx)(I,{src:t.image,alt:"Berry"})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:10,children:(0,j.jsxs)(l.ZP,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"h4",component:"div",children:t.title})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:t.content})})]})})]})},T=function(){var e=[{bg:A,image:"/assets/images/landing/demo-dark.png",title:"Dark Layout",content:"Modern, sleek and elegant dark color scheme that looks great in a dark variant."},{bg:A,image:"/assets/images/landing/demo-rtl.png",title:"RTL",content:"Fully Support Right-to-left (RTL) design variant."},{bg:A,image:"/assets/images/landing/demo-multi.png",title:"Multi-language Support",content:"Support Multi-language. Added 4 pre-filled language."}];return(0,j.jsx)(L.Z,z(z({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.map((function(e,t){return(0,j.jsx)(W,{item:e},t)}))}))},R="/assets/images/landing/img-lay-grid.png",V="/assets/images/landing/img-bg-grid-dark.svg",Y=(0,r.ZP)(c.Z)((function(e){var t=e.theme;return(0,n.Z)({width:"100%",position:"relative",margin:"-70px 0px"},t.breakpoints.down("lg"),{margin:"-30px 0px"})})),_=(0,r.ZP)("img")({position:"relative",top:0,left:0,width:"100%",height:"100%",animation:"5s wings ease-in-out infinite"}),H=(0,r.ZP)(l.ZP)((function(e){var t,i=e.theme;return t={maxWidth:400,position:"relative","&:after":{content:'""',position:"absolute",background:"dark"===i.palette.mode?i.palette.dark.dark:"#FFFFFF",border:"6px solid".concat(i.palette.secondary.main),width:25,height:25,borderRadius:"50%",top:13,left:-20},"&:before":{content:'""',position:"absolute",background:"dark"===i.palette.mode?i.palette.dark.main:"#9E9E9E",width:1,height:390,top:13,left:-8}},(0,n.Z)(t,i.breakpoints.down("md"),{"&:before":{height:290}}),(0,n.Z)(t,i.breakpoints.down("lg"),{"&:after":{left:-12},"&:before":{left:0,height:290}}),t})),K=(0,r.ZP)(l.ZP)((function(e){var t,i=e.theme;return t={maxWidth:400,textAlign:"right",marginLeft:"auto",position:"relative",paddingRight:24,"&:after":{content:'""',position:"absolute",background:"dark"===i.palette.mode?i.palette.dark.dark:"#FFFFFF",border:"6px solid".concat(i.palette.secondary.main),width:25,height:25,borderRadius:"50%",top:13,right:-12},"&:before":{content:'""',position:"absolute",background:"dark"===i.palette.mode?i.palette.dark.main:"#9E9E9E",width:1,height:300,top:13,right:-1}},(0,n.Z)(t,i.breakpoints.down("md"),{"&:before":{height:"400%"}}),(0,n.Z)(t,i.breakpoints.down("lg"),{"&:after":{right:-4},"&:before":{right:7}}),(0,n.Z)(t,i.breakpoints.down("md"),{"&:after":{right:"auto",left:-12},"&:before":{right:"auto",left:0,height:160}}),t})),U=function(){var e=(0,s.Z)();return(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,sx:{display:{xs:"block",md:"none"}},children:(0,j.jsx)(T,{})}),(0,j.jsxs)(c.Z,{sx:{display:{xs:"none",md:"block"},m:"0 auto"},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(Y,{children:[(0,j.jsx)(B.default,{src:"dark"===e.palette.mode?V:R,alt:"Berry Dashboard",layout:"fill",width:"100%",height:"100%"}),(0,j.jsx)(_,{src:"/assets/images/landing/demo-dark.png",alt:"Berry"})]})}),(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(H,{container:!0,spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"h4",component:"div",children:"Dark Layout"})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Modern, sleek and elegant dark color scheme that looks great in a dark variant."})})]})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(K,{container:!0,spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"h4",component:"div",children:"RTL"})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Fully Support Right-to-left (RTL) design variant."})})]})}),(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(Y,{children:[(0,j.jsx)(B.default,{src:"dark"===e.palette.mode?V:R,alt:"Berry Dashboard",layout:"fill",width:"100%",height:"100%"}),(0,j.jsx)(_,{src:"/assets/images/landing/demo-rtl.png",alt:"Berry",style:{animationDelay:"1.5s"}})]})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(Y,{children:[(0,j.jsx)(B.default,{src:"dark"===e.palette.mode?V:R,alt:"Berry Dashboard",layout:"fill",width:"100%",height:"100%"}),(0,j.jsx)(_,{src:"/assets/images/landing/demo-multi.png",alt:"Berry",style:{animationDelay:"3s"}})]})}),(0,j.jsx)(l.ZP,{item:!0,sm:6,children:(0,j.jsxs)(H,{container:!0,spacing:2,sx:{"&:before":{background:"dark"===e.palette.mode?e.palette.dark[900]:"#fff !important"}},children:[(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"h4",component:"div",children:"Multi-language Support"})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Support Multi-language. Added 4 pre-filled language."})})]})})]})})]})]})})},G=i(87952),N=i(50122),q=i(53413),J=i(14154),X=i(75450),Q=i(32321),$=i(87745),ee=i(76462),te=i(82165),ie=i(68971);function ne(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function re(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ne(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var se=function(){var e=(0,s.Z)(),t=re(re({},e.typography.commonAvatar),{},{cursor:"initial",width:72,height:72});return(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,lg:5,md:10,children:(0,j.jsxs)(l.ZP,{container:!0,spacing:2,sx:{mb:2},children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.ZP,{container:!0,spacing:1,children:(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(o.Z,{variant:"h5",color:"primary",children:"Key Features"})})})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"h2",component:"div",children:"Know more about Berry"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"If you're in need of a web app that is both user-friendly and scalable, this is the template for you."})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[800]:"primary.light",color:e.palette.primary.main}),children:(0,j.jsx)(q.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"Easy Folder Structure"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[900]:"secondary.light",color:e.palette.secondary.main}),children:(0,j.jsx)(J.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"Organized Code Structure"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[800]:"primary.light",color:e.palette.primary.main}),children:(0,j.jsx)(X.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"The Hassle-free Setup Process"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[900]:"secondary.light",color:e.palette.secondary.main}),children:(0,j.jsx)(Q.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"3 Auth Methods"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[900]:"secondary.light",color:e.palette.secondary.main}),children:(0,j.jsx)($.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"React Hooks"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[800]:"primary.light",color:e.palette.primary.main}),children:(0,j.jsx)(ee.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"Code Splitting"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark[900]:"secondary.light",color:e.palette.secondary.main}),children:(0,j.jsx)(te.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"Google Fonts"})})]})})})}),(0,j.jsx)(l.ZP,{item:!0,lg:3,md:4,xs:12,sm:6,children:(0,j.jsx)(k,{children:(0,j.jsx)(w.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(G.Z,{variant:"rounded",sx:re(re({},t),{},{background:"dark"===e.palette.mode?e.palette.dark[800]:"primary.light",color:e.palette.primary.main}),children:(0,j.jsx)(ie.Z,{})})}),(0,j.jsx)(l.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,j.jsx)(o.Z,{variant:"h5",children:"Figma Design Files"})})]})})})})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sx:{mt:3},children:(0,j.jsxs)(l.ZP,{container:!0,justifyContent:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(m.Z,{children:(0,j.jsx)(d.Z,{component:N.Z,href:"https://material-ui.com/store/items/berry-react-material-admin/",target:"_blank",variant:"contained",children:"Get Berry"})})}),(0,j.jsx)(l.ZP,{item:!0,children:(0,j.jsx)(d.Z,{component:N.Z,href:"https://blog.berrydashboard.io",target:"_blank",variant:"text",children:"Know More"})})]})})]})})},ae=i(39678),le=(0,r.ZP)("div")((function(e){var t=e.theme,i="dark"===t.palette.mode?"linear-gradient(270deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(270deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),r="dark"===t.palette.mode?"linear-gradient(90deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(90deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),s="dark"===t.palette.mode?"linear-gradient(0deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(0deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),a="dark"===t.palette.mode?"linear-gradient(0deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(0deg, ".concat(t.palette.primary.light," 65%, #fff 65%)");return(0,n.Z)({padding:"100px 0",background:"rtl"===t.direction?i:r},t.breakpoints.down("lg"),{padding:"50px 0",background:"rtl"===t.direction?s:a})})),oe=(0,r.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({background:"dark"===t.palette.mode?t.palette.dark.dark:"#FFFFFF",boxShadow:"0px 0px 50px rgba(33, 150, 243, 0.2)",borderRadius:"20px",padding:"100px 75px"},t.breakpoints.down("md"),{padding:"40px 25px"})})),ce=(0,r.ZP)("img")({width:330,animation:"5s wings ease-in-out infinite",maxWidth:"100%"}),de=function(){var e=(0,s.Z)();return(0,j.jsx)(le,{children:(0,j.jsx)(a.Z,{children:(0,j.jsxs)(l.ZP,{container:!0,alignItems:"center",spacing:g.dv,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,md:5,sx:(0,n.Z)({display:{xs:"none",md:"block"},textAlign:"right"},e.breakpoints.down("lg"),{textAlign:"center"}),children:(0,j.jsx)(ce,{src:"/assets/images/landing/img-groupmail.png",alt:"Berry"})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,md:7,children:(0,j.jsx)(oe,{children:(0,j.jsxs)(l.ZP,{container:!0,spacing:g.dv,sx:{mb:"1rem"},children:[(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"h1",component:"div",sx:(0,n.Z)({},e.breakpoints.down("md"),{fontSize:"1.125rem"}),children:"Subscribe"})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(o.Z,{variant:"body2",children:"Subscribe for the latest news & updates of Berry admin template. We never send spam newsletters."})}),(0,j.jsx)(l.ZP,{item:!0,sm:12,children:(0,j.jsx)(ae.Z,{})})]})})})]})})})},he=i(20574),xe=i(12976),pe=i(41222),me=(0,r.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({paddingTop:30,overflowX:"hidden",overflowY:"clip"},t.breakpoints.down("md"),{paddingTop:42})})),ge=(0,r.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({paddingTop:160},t.breakpoints.down("md"),{paddingTop:60})})),je=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(me,{id:"home",children:[(0,j.jsx)(pe.Z,{}),(0,j.jsx)(f,{})]}),(0,j.jsx)(ge,{children:(0,j.jsx)(E,{})}),(0,j.jsx)(ge,{children:(0,j.jsx)(C,{})}),(0,j.jsx)(ge,{children:(0,j.jsx)(U,{})}),(0,j.jsx)(ge,{children:(0,j.jsx)(se,{})}),(0,j.jsx)(ge,{children:(0,j.jsx)(de,{})}),(0,j.jsx)(he.Z,{}),(0,j.jsx)(xe.Z,{})]})}}}]);