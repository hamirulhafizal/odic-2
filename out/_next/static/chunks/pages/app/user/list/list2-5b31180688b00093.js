(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9168],{51107:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var r=s(63366),n=s(87462),a=s(67294),i=(s(59864),s(86010)),l=s(27192),o=s(90948),c=s(33616),d=s(54801),h=s(87952),x=s(28979);function u(e){return(0,x.Z)("MuiAvatarGroup",e)}var Z=(0,s(76087).Z)("MuiAvatarGroup",["root","avatar"]),m=s(85893);const p=["children","className","componentsProps","max","spacing","total","variant"],j={small:-16,medium:null},v=(0,o.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${Z.avatar}`]:t.avatar},t.root)})((({theme:e})=>({[`& .${d.Z.root}`]:{border:`2px solid ${e.palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}))),f=(0,o.ZP)(h.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})((({theme:e})=>({border:`2px solid ${e.palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})));var g=a.forwardRef((function(e,t){var s,o;const d=(0,c.Z)({props:e,name:"MuiAvatarGroup"}),{children:h,className:x,componentsProps:Z={},max:g=5,spacing:P="medium",total:b,variant:w="circular"}=d,y=(0,r.Z)(d,p);let k=g<2?2:g;const M=(0,n.Z)({},d,{max:g,spacing:P,variant:w}),S=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"]},u,t)})(M),z=a.Children.toArray(h).filter((e=>a.isValidElement(e))),A=b||z.length;A===k&&(k+=1),k=Math.min(A+1,k);const C=Math.min(z.length,k-1),N=Math.max(A-k,A-C,0),_=P&&void 0!==j[P]?j[P]:-P;return(0,m.jsxs)(v,(0,n.Z)({ownerState:M,className:(0,i.default)(S.root,x),ref:t},y,{children:[N?(0,m.jsxs)(f,(0,n.Z)({ownerState:M,variant:w},Z.additionalAvatar,{className:(0,i.default)(S.avatar,null==(s=Z.additionalAvatar)?void 0:s.className),style:(0,n.Z)({marginLeft:_},null==(o=Z.additionalAvatar)?void 0:o.style),children:["+",N]})):null,z.slice(0,C).reverse().map(((e,t)=>a.cloneElement(e,{className:(0,i.default)(e.props.className,S.avatar),style:(0,n.Z)({marginLeft:t===C-1?void 0:_},e.props.style),variant:e.props.variant||w})))]}))}))},15934:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var r=s(16835),n=s(67294),a=s(2734),i=s(86886),l=s(15861),o=s(57709),c=s(87109),d=s(10633),h=s(11057),x=s(38333),u=s(18972),Z=s(59499),m=s(58383),p=s(7906),j=s(295),v=s(53816),f=s(98102),g=s(51107),P=s(81458),b=s(74202),w=s(49514),y=s(51239),k=s(83841),M=s(60888),S=s(69418),z=s(26984),A=s(85893),C=function(){var e=(0,a.Z)(),t=(0,y.I0)(),s=n.useState([]),o=(0,r.Z)(s,2),c=o[0],d=o[1],x=(0,y.v9)((function(e){return e.user})).usersS2;return n.useEffect((function(){d(x)}),[x]),n.useEffect((function(){t((0,k.fO)())}),[]),(0,A.jsx)(m.Z,{children:(0,A.jsx)(p.Z,{sx:(0,Z.Z)({"& td":{whiteSpace:"nowrap"},"& td:first-of-type":{pl:0},"& td:last-of-type":{pr:0,minWidth:260},"& tbody tr:last-of-type  td":{borderBottom:"none"}},e.breakpoints.down("xl"),{"& tr:not(:last-of-type)":{borderBottom:"1px solid",borderBottomColor:"dark"===e.palette.mode?"rgb(132, 146, 196, .2)":"rgba(224, 224, 224, 1)"},"& td":{display:"inline-block",borderBottom:"none",pl:0},"& td:first-of-type":{display:"block"}}),children:(0,A.jsx)(j.Z,{children:c.map((function(e,t){return(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(f.Z,{children:(0,A.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(b.Z,{alt:"User 1",src:e.image,sx:{width:60,height:60}})}),(0,A.jsx)(i.ZP,{item:!0,sm:!0,zeroMinWidth:!0,children:(0,A.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,A.jsxs)(l.Z,{align:"left",variant:"subtitle1",children:[e.name," ","active"===e.badgeStatus&&(0,A.jsx)(M.Z,{sx:{color:"success.dark",width:14,height:14}})]}),(0,A.jsx)(l.Z,{align:"left",variant:"subtitle2",sx:{whiteSpace:"break-spaces"},children:e.designation})]}),(0,A.jsx)(i.ZP,{item:!0,xs:12,children:(0,A.jsx)(l.Z,{align:"left",variant:"body2",sx:{whiteSpace:"break-spaces"},children:e.subContent})})]})})]})}),(0,A.jsx)(f.Z,{children:(0,A.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,A.jsx)(l.Z,{variant:"caption",children:"Email"}),(0,A.jsx)(l.Z,{variant:"h6",children:e.email})]}),(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,A.jsx)(l.Z,{variant:"caption",children:"Phone"}),(0,A.jsx)(l.Z,{variant:"h6",children:e.phone})]})]})}),(0,A.jsx)(f.Z,{children:(0,A.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,A.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,A.jsx)(l.Z,{variant:"caption",children:"Location"}),(0,A.jsx)(l.Z,{variant:"h6",children:e.location})]}),(0,A.jsx)(i.ZP,{item:!0,xs:12,children:(0,A.jsx)(i.ZP,{container:!0,children:(0,A.jsxs)(g.Z,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32,fontSize:"1rem"}},children:[(0,A.jsx)(b.Z,{alt:"User 1",src:"/assets/images/users/avatar-1.png"}),(0,A.jsx)(b.Z,{alt:"User 2",src:"/assets/images/users/avatar-2.png"}),(0,A.jsx)(b.Z,{alt:"User 3",src:"/assets/images/users/avatar-3.png"}),(0,A.jsx)(b.Z,{alt:"User 4",src:"/assets/images/users/avatar-4.png"}),(0,A.jsx)(b.Z,{alt:"User 5",src:"/assets/images/users/avatar-5.png"})]})})})]})}),(0,A.jsx)(f.Z,{children:(0,A.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(i.ZP,{item:!0,xs:12,children:(0,A.jsxs)(i.ZP,{container:!0,alignItems:"center",spacing:w.dv,children:[(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(l.Z,{variant:"caption",children:"Progress"})}),(0,A.jsx)(i.ZP,{item:!0,sm:!0,zeroMinWidth:!0,children:(0,A.jsx)(P.Z,{variant:"determinate",value:56,color:"primary",sx:{minWidth:90}})}),(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(l.Z,{variant:"h6",component:"div",children:e.progressValue})})]})}),(0,A.jsxs)(i.ZP,{item:!0,xs:12,container:!0,spacing:1,children:[(0,A.jsx)(i.ZP,{item:!0,xs:6,children:(0,A.jsx)(h.Z,{variant:"outlined",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:(0,A.jsx)(S.Z,{}),children:"Message"})}),(0,A.jsx)(i.ZP,{item:!0,xs:6,children:(0,A.jsx)(h.Z,{variant:"outlined",color:"error",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:(0,A.jsx)(z.Z,{}),children:"Block"})})]})]})})]},t)}))})})})},N=s(32107),_=s(63991),E=s(40876),L=function(){var e=(0,a.Z)(),t=n.useState(null),s=(0,r.Z)(t,2),Z=s[0],m=s[1],p=function(){m(null)};return(0,A.jsxs)(N.Z,{title:(0,A.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:w.dv,children:[(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(l.Z,{variant:"h3",children:"List"})}),(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(o.Z,{id:"input-search-list-style2",placeholder:"Search",startAdornment:(0,A.jsx)(c.Z,{position:"start",children:(0,A.jsx)(_.jVj,{stroke:1.5,size:"1rem"})}),size:"small"})})]}),children:[(0,A.jsx)(C,{}),(0,A.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:1.75},children:(0,A.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",spacing:w.dv,children:[(0,A.jsx)(i.ZP,{item:!0,children:(0,A.jsx)(d.Z,{count:10,color:"primary"})}),(0,A.jsxs)(i.ZP,{item:!0,children:[(0,A.jsx)(h.Z,{variant:"text",size:"large",sx:{color:e.palette.grey[900]},color:"secondary",endIcon:(0,A.jsx)(E.Z,{}),onClick:function(e){m(e.currentTarget)},children:"10 Rows"}),(0,A.jsxs)(x.Z,{id:"menu-user-list-style2",anchorEl:Z,keepMounted:!0,open:Boolean(Z),onClose:p,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[(0,A.jsx)(u.Z,{onClick:p,children:" 10 Rows"}),(0,A.jsx)(u.Z,{onClick:p,children:" 20 Rows"}),(0,A.jsx)(u.Z,{onClick:p,children:" 30 Rows "})]})]})]})})]})};L.Layout="authGuard";var R=L},14599:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/user/list/list2",function(){return s(15934)}])}},function(e){e.O(0,[3584,633,9729,9774,2888,179],(function(){return t=14599,e(e.s=t);var t}));var t=e.O();_N_E=t}]);