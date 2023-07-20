"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{9547:function(e,n,r){r.r(n),r.d(n,{SendTransaction:function(){return h}});var o=r(7891),t=r(1805),a=r(9980),i=r(7863),c=r(8833),s=r(5593),l=r(2486),u=r(2363),d=r(534),f=r(778).Buffer,h=function(){var e=(0,c.R)().connection,n=(0,s.O)(),r=n.publicKey,h=n.sendTransaction,p=(0,d.d)(),m=(0,u.useCallback)((0,o.Z)((function(){var n,o,a,i,c,s,u,d,m;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:n=void 0,t.label=1;case 1:if(t.trys.push([1,5,,6]),!r)throw new Error("Wallet not connected!");return[4,e.getLatestBlockhashAndContext()];case 2:return o=t.sent(),a=o.context,i=a.slot,c=o.value,s=c.blockhash,u=c.lastValidBlockHeight,d=new l.Transaction({feePayer:r,recentBlockhash:s}).add(new l.TransactionInstruction({data:f.from("Hello, from the Solana Wallet Adapter example app!"),keys:[],programId:new l.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr")})),[4,h(d,e,{minContextSlot:i})];case 3:return n=t.sent(),p("info","Transaction sent:",n),[4,e.confirmTransaction({blockhash:s,lastValidBlockHeight:u,signature:n})];case 4:return t.sent(),p("success","Transaction successful!",n),[3,6];case 5:return m=t.sent(),p("error","Transaction failed! ".concat(null===m||void 0===m?void 0:m.message),n),[3,6];case 6:return[2]}}))})),[r,e,h,p]);return(0,a.jsx)(i.Z,{variant:"contained",color:"secondary",onClick:m,disabled:!r,children:"Send Transaction (devnet)"})}},534:function(e,n,r){r.d(n,{d:function(){return L}});var o=r(9980),t=(0,r(5931).Z)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch"),a=r(892),i=r(9276),c=r(2363),s=r(8640),l=r(1697),u=r(8269),d=r(9555),f=r(2545),h=r(6557),p=r(4734),m=r(6429),b=r(3356),v=r(1677);function y(e){return(0,v.Z)("MuiLink",e)}var x=(0,b.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(9349),g=r(3779);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=({theme:e,ownerState:n})=>{const r=(e=>Z[e]||e)(n.color),o=(0,k.DW)(e,`palette.${r}`,!1)||n.color,t=(0,k.DW)(e,`palette.${r}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,g.Fq)(o,.4)};const S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,d.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,u.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>(0,i.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:w({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})));var T=c.forwardRef((function(e,n){const r=(0,f.Z)({props:e,name:"MuiLink"}),{className:t,color:d="primary",component:m="a",onBlur:b,onFocus:v,TypographyClasses:x,underline:k="always",variant:g="inherit",sx:w}=r,T=(0,a.Z)(r,S),{isFocusVisibleRef:V,onBlur:D,onFocus:A,ref:B}=(0,h.Z)(),[L,H]=c.useState(!1),M=(0,p.Z)(n,B),W=(0,i.Z)({},r,{color:d,component:m,focusVisible:L,underline:k,variant:g}),j=(e=>{const{classes:n,component:r,focusVisible:o,underline:t}=e,a={root:["root",`underline${(0,u.Z)(t)}`,"button"===r&&"button",o&&"focusVisible"]};return(0,l.Z)(a,y,n)})(W);return(0,o.jsx)(C,(0,i.Z)({color:d,className:(0,s.Z)(j.root,t),classes:x,component:m,onBlur:e=>{D(e),!1===V.current&&H(!1),b&&b(e)},onFocus:e=>{A(e),!0===V.current&&H(!0),v&&v(e)},ref:M,ownerState:W,variant:g,sx:[...Object.keys(Z).includes(d)?[]:[{color:d}],...Array.isArray(w)?w:[w]]},T))})),V=r(9900),D=(0,d.ZP)("span")((function(){return{display:"flex",alignItems:"center"}})),A=(0,d.ZP)(T)((function(){return{color:"#ffffff",display:"flex",alignItems:"center",marginLeft:16,textDecoration:"underline","&:hover":{color:"#000000"}}})),B=(0,d.ZP)(t)((function(){return{fontSize:20,marginLeft:8}}));function L(){var e=(0,V.Ds)().enqueueSnackbar;return(0,c.useCallback)((function(n,r,t){e((0,o.jsxs)(D,{children:[r,t&&(0,o.jsxs)(A,{href:"https://explorer.solana.com/tx/".concat(t,"?cluster=devnet"),target:"_blank",children:["Transaction",(0,o.jsx)(B,{})]})]}),{variant:n})}),[e])}}}]);