(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3899],{88148:function(e,r,t){"use strict";var i=t(2734),a=t(21023),n=t(49990),s=t(50122),l=t(74202),c=t(85893);r.Z=function(e){var r=e.title,t=e.link,o=e.icon,d=(0,i.Z)();return(0,c.jsx)(a.Z,{title:r||"Reference",placement:"left",children:(0,c.jsxs)(n.Z,{disableRipple:!0,children:[!o&&(0,c.jsx)(l.Z,{component:s.Z,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&(0,c.jsx)(l.Z,{component:s.Z,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,children:o})]})})}},74202:function(e,r,t){"use strict";var i=t(59499),a=t(4730),n=t(2734),s=t(87952),l=t(85893),c=["color","outline","size","sx"];function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.color,t=e.outline,i=e.size,o=e.sx,h=(0,a.Z)(e,c),g=(0,n.Z)(),p=r&&!t&&{color:g.palette.background.paper,bgcolor:"".concat(r,".main")},m=t&&{color:r?"".concat(r,".main"):"primary.main",bgcolor:g.palette.background.paper,border:"2px solid",borderColor:r?"".concat(r,".main"):"primary.main"},u={};switch(i){case"badge":u={width:g.spacing(3.5),height:g.spacing(3.5)};break;case"xs":u={width:g.spacing(4.25),height:g.spacing(4.25)};break;case"sm":u={width:g.spacing(5),height:g.spacing(5)};break;case"lg":u={width:g.spacing(9),height:g.spacing(9)};break;case"xl":u={width:g.spacing(10.25),height:g.spacing(10.25)};break;case"md":u={width:g.spacing(7.5),height:g.spacing(7.5)};break;default:u={}}return(0,l.jsx)(s.Z,d({sx:d(d(d(d({},p),m),u),o)},h))}},96471:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var i=t(86886),a=t(58383),n=t(7906),s=t(53184),l=t(53816),c=t(98102),o=t(295),d=t(2734),h=t(87357),g=t(12590),p=t(85893),m=[{field:"id",headerName:"ID",width:70},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90}],u=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lancaster",firstName:"Cersei",age:42},{id:3,lastName:"Lancaster",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function x(){var e=(0,d.Z)();return(0,p.jsx)(h.Z,{sx:{height:400,width:"100%","& .MuiDataGrid-root":{border:"none","& .MuiDataGrid-cell":{borderColor:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnsContainer":{color:"dark"===e.palette.mode?"grey.600":"grey.900",borderColor:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"},"& .MuiDataGrid-columnSeparator":{color:"dark"===e.palette.mode?e.palette.text.primary+15:"grey.200"}}},children:(0,p.jsx)(g._,{rows:u,columns:m,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0})})}var f=t(32107),j=t(88148),b=t(49514);function Z(e,r,t,i,a){return{name:e,calories:r,fat:t,carbs:i,protein:a}}var w=[Z("Frozen yoghurt",159,6,24,4),Z("Ice cream sandwich",237,9,37,4.3),Z("Eclair",262,16,24,6),Z("Cupcake",305,3.7,67,4.3),Z("Gingerbread",356,16,49,3.9)];function y(){return(0,p.jsxs)(i.ZP,{container:!0,spacing:b.dv,children:[(0,p.jsx)(i.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{content:!1,title:"Basic Table",secondary:(0,p.jsx)(j.Z,{link:"https://next.material-ui.com/components/tables/"}),children:(0,p.jsx)(a.Z,{children:(0,p.jsxs)(n.Z,{sx:{minWidth:350},"aria-label":"simple table",children:[(0,p.jsx)(s.Z,{children:(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(c.Z,{sx:{pl:3},children:"Dessert (100g serving)"}),(0,p.jsx)(c.Z,{align:"right",children:"Calories"}),(0,p.jsx)(c.Z,{align:"right",children:"Fat\xa0(g)"}),(0,p.jsx)(c.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,p.jsx)(c.Z,{align:"right",children:"Protein\xa0(g)"}),(0,p.jsx)(c.Z,{align:"right",children:"Protein\xa0(g)"}),(0,p.jsx)(c.Z,{align:"right",children:"Protein\xa0(g)"}),(0,p.jsx)(c.Z,{align:"right",sx:{pr:3},children:"Protein\xa0(g)"})]})}),(0,p.jsx)(o.Z,{children:w.map((function(e){return(0,p.jsxs)(l.Z,{hover:!0,children:[(0,p.jsx)(c.Z,{sx:{pl:3},component:"th",scope:"row",children:e.name}),(0,p.jsx)(c.Z,{align:"right",children:e.calories}),(0,p.jsx)(c.Z,{align:"right",children:e.fat}),(0,p.jsx)(c.Z,{align:"right",children:e.carbs}),(0,p.jsx)(c.Z,{align:"right",children:e.protein}),(0,p.jsx)(c.Z,{align:"right",children:e.protein}),(0,p.jsx)(c.Z,{align:"right",children:e.protein}),(0,p.jsx)(c.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)}))})]})})})}),(0,p.jsx)(i.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{content:!1,title:"Data Grid",secondary:(0,p.jsx)(j.Z,{link:"https://material-ui.com/components/data-grid/"}),children:(0,p.jsx)(x,{})})})]})}y.Layout="authGuard";var N=y},62179:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/tables/tbl-basic",function(){return t(96471)}])}},function(e){e.O(0,[3584,7456,5306,2590,9774,2888,179],(function(){return r=62179,e(e.s=r);var r}));var r=e.O();_N_E=r}]);