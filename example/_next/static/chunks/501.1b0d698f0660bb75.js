"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{2501:function(e,n,r){r.r(n),r.d(n,{RequestAirdrop:function(){return p}});var o=r(7891),t=r(1805),i=r(9980),a=r(7863),s=r(8833),c=r(5593),u=r(2486),l=r(2363),d=r(534),p=function(){var e=(0,s.R)().connection,n=(0,c.O)().publicKey,r=(0,d.d)(),p=(0,l.useCallback)((0,o.Z)((function(){var o,i;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:o=void 0,t.label=1;case 1:if(t.trys.push([1,4,,5]),!n)throw new Error("Wallet not connected!");return[4,e.requestAirdrop(n,u.LAMPORTS_PER_SOL)];case 2:return o=t.sent(),r("info","Airdrop requested:",o),[4,e.confirmTransaction(o,"processed")];case 3:return t.sent(),r("success","Airdrop successful!",o),[3,5];case 4:return i=t.sent(),r("error","Airdrop failed! ".concat(null===i||void 0===i?void 0:i.message),o),[3,5];case 5:return[2]}}))})),[n,e,r]);return(0,i.jsx)(a.Z,{variant:"contained",color:"secondary",onClick:p,disabled:!n,children:"Request Airdrop"})}},534:function(e,n,r){r.d(n,{d:function(){return _}});var o=r(9980),t=(0,r(5931).Z)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch"),i=r(892),a=r(9276),s=r(2363),c=r(8640),u=r(1697),l=r(8269),d=r(9555),p=r(2545),f=r(6557),h=r(4734),m=r(6429),v=r(3356),b=r(1677);function y(e){return(0,b.Z)("MuiLink",e)}var x=(0,v.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=r(9349),k=r(3779);const g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=({theme:e,ownerState:n})=>{const r=(e=>g[e]||e)(n.color),o=(0,Z.DW)(e,`palette.${r}`,!1)||n.color,t=(0,Z.DW)(e,`palette.${r}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,k.Fq)(o,.4)};const A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,d.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,l.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>(0,a.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:w({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})));var C=s.forwardRef((function(e,n){const r=(0,p.Z)({props:e,name:"MuiLink"}),{className:t,color:d="primary",component:m="a",onBlur:v,onFocus:b,TypographyClasses:x,underline:Z="always",variant:k="inherit",sx:w}=r,C=(0,i.Z)(r,A),{isFocusVisibleRef:D,onBlur:L,onFocus:R,ref:V}=(0,f.Z)(),[_,M]=s.useState(!1),j=(0,h.Z)(n,V),P=(0,a.Z)({},r,{color:d,component:m,focusVisible:_,underline:Z,variant:k}),q=(e=>{const{classes:n,component:r,focusVisible:o,underline:t}=e,i={root:["root",`underline${(0,l.Z)(t)}`,"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(i,y,n)})(P);return(0,o.jsx)(S,(0,a.Z)({color:d,className:(0,c.Z)(q.root,t),classes:x,component:m,onBlur:e=>{L(e),!1===D.current&&M(!1),v&&v(e)},onFocus:e=>{R(e),!0===D.current&&M(!0),b&&b(e)},ref:j,ownerState:P,variant:k,sx:[...Object.keys(g).includes(d)?[]:[{color:d}],...Array.isArray(w)?w:[w]]},C))})),D=r(9900),L=(0,d.ZP)("span")((function(){return{display:"flex",alignItems:"center"}})),R=(0,d.ZP)(C)((function(){return{color:"#ffffff",display:"flex",alignItems:"center",marginLeft:16,textDecoration:"underline","&:hover":{color:"#000000"}}})),V=(0,d.ZP)(t)((function(){return{fontSize:20,marginLeft:8}}));function _(){var e=(0,D.Ds)().enqueueSnackbar;return(0,s.useCallback)((function(n,r,t){e((0,o.jsxs)(L,{children:[r,t&&(0,o.jsxs)(R,{href:"https://explorer.solana.com/tx/".concat(t,"?cluster=devnet"),target:"_blank",children:["Transaction",(0,o.jsx)(V,{})]})]}),{variant:n})}),[e])}}}]);