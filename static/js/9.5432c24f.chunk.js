(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1011:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c,r=n(9),i=n(4),a=n(57),s=(n(0),n(6)),o=n(2),l=n(1),b=["title","stat"],j=function(e){var t=e.title,n=e.stat,c=Object(a.a)(e,b);return Object(l.jsxs)(o.p,Object(i.a)(Object(i.a)({},c),{},{children:[Object(l.jsx)(o.Dc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:t}),null===n?Object(l.jsx)(o.ic,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(o.Dc,{fontWeight:"600",textAlign:"center",children:n})]}))},u=Object(s.e)(o.bb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.invertedContrast}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.radii.card}));t.b=u},1014:function(e,t,n){"use strict";var c,r,i,a=n(3),s=n.n(a),o=n(10),l=n(4),b=n(8),j=n(57),u=n(9),d=n(0),x=n(2),O=n(6),h=n(39),f=n(13),m=n(247),p=n(1),g=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=O.e.div(c||(c=Object(u.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),y=Object(O.e)(x.Dc)(r||(r=Object(u.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),D={isFetching:!1,resultFound:i.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?w:t,c=e.onAddressClick,r=Object(j.a)(e,g),a=Object(d.useState)(D),u=Object(b.a)(a,2),O=u[0],k=u[1],F=Object(f.b)().t,S=O.isFetching,C=O.resultFound,A=O.value;return Object(d.useEffect)((function(){!1!==Object(h.j)(A)?function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0})})),e.next=4,n(A);case 4:t=e.sent,k((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,resultFound:t?i.FOUND:i.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():k((function(e){return Object(l.a)(Object(l.a)({},e),{},{resultFound:i.NOT_VALID})}))}),[A,n,k]),Object(p.jsxs)(x.p,Object(l.a)(Object(l.a)({position:"relative"},r),{},{children:[Object(p.jsx)(x.kb,{placeholder:F("Search %subject%",{subject:F("Address").toLowerCase()}),value:O.value,onChange:function(e){var t=e.target.value;k((function(e){return Object(l.a)(Object(l.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),S&&Object(p.jsx)(x.p,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(p.jsx)(m.a,{})}),Object(p.jsx)(v,{isOpen:C!==i.NOT_VALID,children:C===i.FOUND?Object(p.jsx)(y,{onClick:function(){k(D),c(O.value)},children:O.value}):Object(p.jsx)(x.Dc,{px:"16px",fontWeight:"bold",children:F("No results found.")})})]}))}},1019:function(e,t,n){"use strict";var c=n(4),r=(n(0),n(492)),i=n(112),a=n(1);t.a=function(e){var t=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(r.a,Object(c.a)({background:t},e))}},1024:function(e,t,n){"use strict";var c,r=n(9),i=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.src}),(function(e){return e.borderColor||"#f2ecf2"}));t.a=i},1032:function(e,t,n){"use strict";var c=n(4),r=(n(0),n(96)),i=n(1014),a=n(153),s=n(1);t.a=function(e){var t=Object(r.g)();return Object(s.jsx)(i.a,Object(c.a)({onAddressClick:function(e){t.push("".concat(a.a,"/profile/").concat(e))}},e))}},1033:function(e,t,n){"use strict";var c=n(4),r=n(57),i=(n(0),n(2)),a=n(1),s=["title","description","children"];t.a=function(e){var t=e.title,n=e.description,o=e.children,l=Object(r.a)(e,s);return Object(a.jsxs)(i.cb,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(a.jsxs)(i.p,{children:[Object(a.jsx)(i.db,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:t}),n]}),Object(a.jsx)(i.p,{children:o})]}))}},1034:function(e,t,n){"use strict";var c,r=n(9),i=n(6).e.div(c||(c=Object(r.a)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));t.a=i},1035:function(e,t,n){"use strict";var c,r=n(9),i=n(2),a=n(6),s=Object(a.e)(i.sc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(e){return e.theme.colors.cardBorder}));t.a=s},1038:function(e,t,n){"use strict";var c,r=n(4),i=n(57),a=(n(0),n(2)),s=n(9),o=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(s.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(e){var t=e.src,n=e.theme;return t?"background-image: url('".concat(t,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(e){return e.src}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),l=n(1),b=["bannerImage","bannerAlt","avatar","children"];t.a=function(e){var t=e.bannerImage,n=e.bannerAlt,c=e.avatar,s=e.children,j=Object(i.a)(e,b);return Object(l.jsx)(a.bb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},j),{},{children:Object(l.jsxs)(a.p,{position:"relative",pb:"56px",children:[Object(l.jsx)(o,{src:t,alt:n}),Object(l.jsx)(a.p,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(a.bb,{alignItems:"flex-end",children:[c,s]})})]})}))}},1067:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var c,r,i=n(9),a=n(6),s=a.e.div(c||(c=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),o=a.e.div(r||(r=Object(i.a)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.primary}))},1068:function(e,t,n){"use strict";var c,r,i=n(9),a=(n(0),n(6)),s=n(2),o=n(197),l=n(334),b=n(31),j=n(114),u=n(153),d=n(1),x=a.e.img(c||(c=Object(i.a)(["\n  margin-right: 4px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n\n  "," {\n    margin-right: 12px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),O=Object(a.e)(s.bb)(r||(r=Object(i.a)(["\n  align-items: center;\n  transition: opacity 200ms ease-in;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])));t.a=function(e){var t,n,c=e.accountAddress,r=Object(l.c)(c),i=r.username,a=r.nft,h=r.usernameFetchStatus,f=r.avatarFetchStatus,m=i||"-",p=Object(d.jsx)(s.ic,{width:"32px",height:"32px",mr:["4px",null,"12px"]});f===b.f.FETCHED&&(p=(null===a||void 0===a||null===(t=a.image)||void 0===t?void 0:t.thumbnail)?Object(d.jsx)(x,{src:null===a||void 0===a||null===(n=a.image)||void 0===n?void 0:n.thumbnail}):Object(d.jsx)(s.t,{width:"32px",height:"32px",mr:["4px",null,"12px"]}));return Object(d.jsx)(j.a,{to:"".concat(u.a,"/profile/").concat(c),children:Object(d.jsxs)(O,{children:[p,Object(d.jsxs)(s.p,{display:"inline",children:[Object(d.jsx)(s.Dc,{lineHeight:"1.25",children:Object(o.a)(c)}),h!==b.f.FETCHED?Object(d.jsx)(s.ic,{}):Object(d.jsx)(s.Dc,{lineHeight:"1.25",children:m})]})]})})}},1071:function(e,t,n){"use strict";var c,r=n(0),i=n(96),a=n(2),s=n(34),o=n(13),l=n(333),b=n(1019),j=n(1033),u=n(1011),d=n(1038),x=n(1024),O=n(1035),h=n(153),f=n(9),m=n(114),p=n(6),g=n(1032),v=n(1),y=Object(p.e)(m.a)(c||(c=Object(f.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.primary})),D=function(){var e=Object(o.b)().t;return Object(v.jsxs)(a.bb,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsxs)(y,{to:"".concat(h.a,"/collections"),children:[Object(v.jsx)(a.M,{color:"primary",width:"24px"}),e("All Collections")]}),Object(v.jsx)(a.p,{children:Object(v.jsx)(g.a,{})})]})},w=n(4),k=n(3),F=n.n(k),S=n(10),C=n(8),A=n(57),I=n(87),N=["collectionAddress"],P=function(e){var t=e.collectionAddress,n=Object(A.a)(e,N),c=Object(r.useState)(null),i=Object(C.a)(c,2),a=i[0],s=i[1],l=Object(o.b)().t;Object(r.useEffect)((function(){(function(){var e=Object(S.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.n)(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,s]);var b=null===a?null:a.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(v.jsx)(u.a,Object(w.a)({title:l("Lowest (%symbol%)",{symbol:"BNB"}),stat:b},n))};t.a=function(e){var t=e.collection,n=Object(i.i)().collectionAddress,c=t.totalSupply,r=t.numberTokensListed,f=t.totalVolumeBNB,m=t.banner,p=t.avatar,g=Object(o.b)().t,y=Object(i.h)(),w=y.pathname,k=y.hash,F=f?parseFloat(f).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",S=[{label:g("Items"),href:"".concat(h.a,"/collections/").concat(n,"#items")},{label:g("Traits"),href:"".concat(h.a,"/collections/").concat(n,"#traits")},{label:g("Activity"),href:"".concat(h.a,"/collections/").concat(n,"#activity")}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(b.a,{children:[Object(v.jsx)(D,{}),Object(v.jsx)(d.a,{bannerImage:m.large,avatar:Object(v.jsx)(x.a,{src:p})}),Object(v.jsx)(j.a,{title:t.name,description:t.description?Object(v.jsx)(a.Dc,{color:"textSubtle",children:g(t.description)}):null,children:Object(v.jsxs)(u.b,{children:[Object(v.jsx)(u.a,{title:g("Items"),stat:Object(s.e)(Number(c),0,0)}),Object(v.jsx)(u.a,{title:g("Items listed"),stat:r?Object(s.e)(Number(r),0,0):"0"}),Object(v.jsx)(P,{collectionAddress:t.address}),Object(v.jsx)(u.a,{title:g("Vol. (%symbol%)",{symbol:"BNB"}),stat:F})]})})]}),Object(v.jsx)(l.a,{children:Object(v.jsx)(O.a,{items:S,activeItem:"".concat(w).concat(k||"#items"),mt:"24px",mb:"8px"})})]})}},1090:function(e,t,n){"use strict";var c,r=n(9),i=(n(0),n(6)),a=n(2),s=n(1),o=Object(i.e)(a.bb)(c||(c=Object(r.a)(["\n  align-items: center;\n"]))),l=function(){var e=Object(a.gd)(),t=e.isXs,n=e.isSm;return Object(s.jsxs)("tr",{children:[Object(s.jsx)(a.Bc,{children:Object(s.jsx)(o,{children:Object(s.jsx)(a.ic,{height:[162,null,64],width:[80,null,200]})})}),Object(s.jsx)(a.Bc,{children:Object(s.jsx)(o,{justifyContent:"flex-end",children:Object(s.jsx)(a.ic,{height:[66,null,24],width:64})})}),t||n?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.Bc,{children:Object(s.jsx)(o,{justifyContent:"flex-end",children:Object(s.jsx)(a.ic,{height:42,width:64})})}),Object(s.jsx)(a.Bc,{children:Object(s.jsx)(o,{justifyContent:"flex-end",children:Object(s.jsx)(a.ic,{height:48,width:124})})})]}),Object(s.jsx)(a.Bc,{children:Object(s.jsx)(o,{justifyContent:"center",children:Object(s.jsx)(a.ic,{height:[36,null,24],width:[80,null,120]})})})]})};t.a=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{}),Object(s.jsx)(l,{})]})}},1091:function(e,t,n){"use strict";var c,r,i=n(4),a=n(8),s=n(9),o=(n(0),n(2)),l=n(114),b=n(6),j=n(39),u=n(24),d=n(1068),x=n(112),O=n(140),h=n(13),f=n(197),m=n(107),p=n(14),g=n(57),v=n(67),y=n(1),D=["marketEvent"],w=function(e){var t,n=e.marketEvent,c=Object(g.a)(e,D),r=Object(h.b)().t,a=(t={},Object(p.a)(t,v.b.NEW,{text:r("Listed"),color:"textSubtle"}),Object(p.a)(t,v.b.CANCEL,{text:r("Delisted"),color:"textSubtle"}),Object(p.a)(t,v.b.MODIFY,{text:r("Modified"),color:"textSubtle"}),Object(p.a)(t,v.b.BUY,{text:r("Bought"),color:"success"}),Object(p.a)(t,v.b.SELL,{text:r("Sold"),color:"failure"}),t);return Object(y.jsx)(o.Dc,Object(i.a)(Object(i.a)({},c),{},{color:a[n].color,children:a[n].text}))},k=Object(b.e)(o.hb)(c||(c=Object(s.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),F=function(e){var t=e.nft,n=e.activity,c=e.bnbBusdPrice,r=e.localeTimestamp,i=e.onDismiss,a=e.isUserActivity,s=void 0!==a&&a,l=Object(u.a)().chainId,b=Object(h.b)().t,d=Object(x.a)().theme,p=parseFloat(n.price),g=Object(m.d)(c,p);return Object(y.jsx)(o.Fb,{title:b("Transaction Details"),onDismiss:i,headerBackground:d.colors.gradients.cardHeader,children:Object(y.jsxs)(o.bb,{flexDirection:"column",maxWidth:"350px",children:[Object(y.jsxs)(o.bb,{alignItems:"center",mb:"16px",justifyContent:"space-between",children:[Object(y.jsx)(k,{src:t.image.thumbnail,height:68,width:68,mr:"16px"}),Object(y.jsxs)(o.bb,{flexDirection:"column",children:[Object(y.jsx)(o.Dc,{fontSize:"12px",color:"textSubtle",textAlign:"right",children:t.collectionName}),Object(y.jsx)(o.Dc,{bold:!0,children:t.name})]})]}),Object(y.jsxs)(O.c,{p:"16px",children:[Object(y.jsxs)(o.bb,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(w,{fontSize:"14px",marketEvent:n.marketEvent}),p?Object(y.jsxs)(o.bb,{justifyContent:"flex-end",alignItems:"center",children:[Object(y.jsx)(o.l,{width:"12px",height:"12px",mr:"4px"}),Object(y.jsx)(o.Dc,{mr:"4px",bold:!0,children:p}),Object(y.jsx)(o.Dc,{color:"textSubtle",children:"(~$".concat(g.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")})]}):"-"]}),s?Object(y.jsxs)(o.bb,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Dc,{fontSize:"14px",color:"textSubtle",children:b("From/To")}),Object(y.jsx)(o.Dc,{children:n.otherParty?Object(f.a)(n.otherParty):"-"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(o.bb,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Dc,{fontSize:"14px",color:"textSubtle",children:b("From")}),Object(y.jsx)(o.Dc,{children:n.seller?Object(f.a)(n.seller):"-"})]}),Object(y.jsxs)(o.bb,{mb:"24px",justifyContent:"space-between",children:[Object(y.jsx)(o.Dc,{fontSize:"14px",color:"textSubtle",children:b("To")}),Object(y.jsx)(o.Dc,{children:n.buyer?Object(f.a)(n.buyer):"-"})]})]}),Object(y.jsxs)(o.bb,{justifyContent:"space-between",children:[Object(y.jsx)(o.Dc,{fontSize:"14px",color:"textSubtle",children:b("Date")}),Object(y.jsx)(o.Dc,{children:r})]})]}),Object(y.jsx)(o.bb,{flexDirection:"column",pt:"16px",alignItems:"center",children:Object(y.jsx)(o.u,{as:o.rb,external:!0,href:Object(j.e)(n.tx,"transaction",l),children:b("View on BscScan")})})]})})},S=function(e){var t=e.bnbBusdPrice,n=e.price,c=Object(m.d)(t,n);return Object(y.jsx)(o.bb,{flexDirection:"column",alignItems:"flex-end",children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(o.bb,{justifySelf:"flex-start",alignItems:"center",children:[Object(y.jsx)(o.l,{width:"12px",height:"12px",mr:"4px"}),Object(y.jsx)(o.Dc,{maxWidth:"80px",bold:!0,children:n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:5})})]}),c?Object(y.jsx)(o.Dc,{fontSize:"12px",color:"textSubtle",children:"(~$".concat(c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")}):Object(y.jsx)(o.ic,{height:"18px",width:"42px"})]}):"-"})},C=n(153),A=Object(b.e)(o.hb)(r||(r=Object(s.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default}));t.a=function(e){var t,n=e.activity,c=e.bnbBusdPrice,r=e.nft,s=e.isUserActivity,b=void 0!==s&&s,x=e.isNftActivity,O=void 0!==x&&x,h=Object(u.a)().chainId,f=Object(o.gd)(),m=f.isXs,p=f.isSm,g=parseFloat(n.price),v=1e3*parseFloat(n.timestamp),D=new Date(v).toLocaleString(void 0,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),k=Object(o.hd)(Object(y.jsx)(F,{nft:r,activity:n,localeTimestamp:D,bnbBusdPrice:c,isUserActivity:b})),I=Object(a.a)(k,1)[0],N=!!r&&r.collectionAddress.toLowerCase()===C.b.toLowerCase(),P=r&&N?null===(t=r.attributes.find((function(e){return"bunnyId"===e.traitType})))||void 0===t?void 0:t.value:r?r.tokenId:null;return Object(y.jsxs)("tr",Object(i.a)(Object(i.a)({},(m||p)&&{onClick:I}),{},{children:[O?null:Object(y.jsx)(o.Bc,Object(i.a)(Object(i.a)({},(m||p)&&{onClick:function(e){e.stopPropagation()}}),{},{children:Object(y.jsx)(l.a,{to:r?"".concat(C.a,"/collections/").concat(r.collectionAddress,"/").concat(P):"",children:Object(y.jsxs)(o.bb,{justifyContent:"flex-start",alignItems:"center",flexDirection:["column",null,"row"],children:[Object(y.jsx)(A,{src:null===r||void 0===r?void 0:r.image.thumbnail,alt:null===r||void 0===r?void 0:r.name,width:64,height:64,mr:[0,null,"16px"],mb:["8px",null,0]}),Object(y.jsxs)(o.bb,{flexDirection:"column",children:[Object(y.jsx)(o.Dc,{textAlign:["center",null,"left"],color:"textSubtle",fontSize:"14px",children:null===r||void 0===r?void 0:r.collectionName}),Object(y.jsx)(o.Dc,{textAlign:["center",null,"left"],bold:!0,children:null===r||void 0===r?void 0:r.name})]})]})})})),Object(y.jsxs)(o.Bc,{children:[Object(y.jsx)(o.bb,{alignItems:"center",justifyContent:"flex-end",children:Object(y.jsx)(w,{marketEvent:n.marketEvent})}),m||p?Object(y.jsx)(S,{price:g,bnbBusdPrice:c}):null]}),m||p?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.Bc,{children:Object(y.jsx)(S,{price:g,bnbBusdPrice:c})}),b?Object(y.jsx)(o.Bc,{children:Object(y.jsx)(o.bb,{justifyContent:"center",alignItems:"center",children:n.otherParty?Object(y.jsx)(d.a,{accountAddress:n.otherParty}):"-"})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.Bc,{children:Object(y.jsx)(o.bb,{justifyContent:"center",alignItems:"center",children:n.seller?Object(y.jsx)(d.a,{accountAddress:n.seller}):"-"})}),Object(y.jsx)(o.Bc,{children:Object(y.jsx)(o.bb,{justifyContent:"center",alignItems:"center",children:n.buyer?Object(y.jsx)(d.a,{accountAddress:n.buyer}):"-"})})]})]}),Object(y.jsx)(o.Bc,{children:Object(y.jsx)(o.bb,{justifyContent:"center",children:Object(y.jsx)(o.Dc,{textAlign:"center",fontSize:m||p?"12px":"16px",children:D})})}),m||p?null:Object(y.jsx)(o.Bc,{children:Object(y.jsx)(o.gb,{as:o.rb,external:!0,href:Object(j.e)(n.tx,"transaction",h),children:Object(y.jsx)(o.Qb,{color:"textSubtle",width:"18px"})})})]}))}},1146:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(33),r=n(65),i=n(67),a=function(e){var t=e.askOrders,n=void 0===t?[]:t,a=e.transactions,s=void 0===a?[]:a,o=[].concat(Object(c.a)(n.map((function(e){return{marketEvent:function(e){switch(e){case i.a.CANCEL:return i.b.CANCEL;case i.a.MODIFY:return i.b.MODIFY;case i.a.NEW:return i.b.NEW;default:return i.b.MODIFY}}(e.orderType),price:e.askPrice,timestamp:e.timestamp,nft:e.nft,tx:e.id,seller:null===e||void 0===e?void 0:e.seller.id}}))),Object(c.a)(s.map((function(e){var t=i.b.SELL,n=e.timestamp,c=e.nft;return{marketEvent:t,price:e.askPrice,timestamp:n,nft:c,tx:e.id,buyer:e.buyer.id,seller:e.seller.id}}))));return o.length>0?o.sort((function(e,t){var n=r.a.BigNumber.from(e.timestamp);return r.a.BigNumber.from(t.timestamp).sub(n).toNumber()})):[]}},1632:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s=n(0),o=n(96),l=n(993),b=n(1071),j=n(4),u=n(3),d=n.n(u),x=n(10),O=n(8),h=n(133),f=n(39),m=n(80),p=n(2),g=n(87),v=n(333),y=n(1090),D=n(13),w=n(487),k=n(112),F=n(342),S=n(1067),C=n(1034),A=n(9),I=n(6),N=n(495),P=n.n(N),B=n(67),L=n(57),E=n(244),T=n(1),z=["collectionAddress"],U=function(e){var t=e.collectionAddress,n=Object(L.a)(e,z),c=Object(m.b)(),r=Object(D.b)().t;return Object(T.jsx)(p.u,Object(j.a)(Object(j.a)({variant:"text",scale:"sm",onClick:function(){c(Object(E.l)(t))}},n),{},{children:r("Clear")}),"clear-all")},M=Object(I.e)(p.u)(c||(c=Object(A.a)(["\n  ","\n"])),(function(e){return e.hasItem&&"  \n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-right: 8px;\n  "})),V=Object(I.e)(p.gb)(r||(r=Object(A.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]))),W=function(e,t){switch(t){case B.b.CANCEL:return e("Delisted");case B.b.MODIFY:return e("Modified");case B.b.NEW:return e("Listed");case B.b.SELL:return e("Sold");default:return""}},Y=function(e){var t=e.eventType,n=e.collectionAddress,c=Object(l.h)(n),r=Object(m.b)(),i=Object(D.b)().t,a=c.typeFilters.some((function(e){return e===t}));return Object(T.jsxs)(p.bb,{alignItems:"center",mr:"4px",mb:"4px",children:[Object(T.jsx)(p.p,{children:Object(T.jsx)(M,{onClick:function(){a||r(Object(E.a)({collection:n,field:t}))},variant:a?"subtle":"light",scale:"sm",hasItem:a,children:W(i,t)})}),a&&Object(T.jsx)(V,{variant:a?"subtle":"light",scale:"sm",onClick:function(){r(Object(E.k)({collection:n,field:t}))},children:Object(T.jsx)(p.Q,{color:"currentColor",width:"18px"})})]})},_=Object(I.e)(p.bb)(i||(i=Object(A.a)(["\n  gap: 16px;\n\n  "," {\n    align-items: center;\n    flex-grow: 2;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Q=Object(I.e)(p.bb)(a||(a=Object(A.a)(["\n  align-items: center;\n  flex: 1;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  "," {\n    flex-wrap: wrap;\n    overflow-x: revert;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),H=function(e){var t=(e.collection||{address:""}).address,n=Object(D.b)().t,c=Object(l.h)(t);return Object(T.jsxs)(_,{justifyContent:"space-between",flexDirection:["column","column","row"],children:[Object(T.jsx)(p.Dc,{textTransform:"uppercase",color:"textSubtle",fontSize:"12px",bold:!0,children:n("Filter by")}),Object(T.jsx)(Q,{children:[B.b.NEW,B.b.CANCEL,B.b.MODIFY,B.b.SELL].map((function(e){return Object(T.jsx)(Y,{eventType:e,collectionAddress:t},e)}))}),P()(c.typeFilters)?null:Object(T.jsx)(U,{collectionAddress:t})]})},J=n(1091),X=n(1146),R=function(e){var t=e.collection,n=Object(m.b)(),c=(t||{address:""}).address,r=Object(l.h)(c),i=Object(k.a)().theme,a=Object(D.b)().t,o=Object(s.useState)({activity:[],currentPage:1,maxPage:1}),b=Object(O.a)(o,2),u=b[0],A=b[1],I=Object(s.useState)([]),N=Object(O.a)(I,2),P=N[0],B=N[1],L=Object(s.useState)([]),E=Object(O.a)(L,2),z=E[0],U=E[1],M=Object(s.useState)(!0),V=Object(O.a)(M,2),W=V[0],Y=V[1],_=Object(s.useState)(!1),Q=Object(O.a)(_,2),R=Q[0],$=Q[1],q=Object(s.useState)(1),G=Object(O.a)(q,2),K=G[0],Z=G[1],ee=Object(F.a)(),te=ee.lastUpdated,ne=ee.setLastUpdated,ce=Object(w.b)(),re=Object(p.gd)(),ie=re.isXs,ae=re.isSm,se=JSON.stringify(r);return Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y(!0),t=JSON.parse(se),e.next=5,Object(g.f)(c.toLowerCase(),t,100);case 5:n=e.sent,r=Object(X.a)(n),A({activity:r,currentPage:1,maxPage:Math.ceil(r.length/8)||1}),Y(!1),$(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Failed to fetch collection activity",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();(c&&Object(f.j)(c)||""===c)&&e()}),[n,c,se,te]),Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.uniqBy)(P.map((function(e){return{tokenId:e.nft.tokenId,collectionAddress:e.nft.collection.id}})),"tokenId"),e.next=3,Object(g.t)(t);case 3:n=e.sent,U(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();P.length>0&&e()}),[P]),Object(s.useEffect)((function(){var e=u.activity.slice(8*(u.currentPage-1),8*u.currentPage);B(e)}),[u]),Object(T.jsxs)(p.p,{py:"32px",children:[Object(T.jsx)(v.a,{px:[0,null,"24px"],children:Object(T.jsxs)(p.bb,{style:{gap:"16px",padding:"0 16px"},alignItems:[null,null,"center"],flexDirection:["column","column","row"],children:[Object(T.jsx)(H,{collection:t}),Object(T.jsx)(p.u,{scale:"sm",disabled:W,onClick:function(){ne()},children:a("Refresh")})]})}),Object(T.jsx)(v.a,{children:0!==u.activity.length||0!==z.length||0!==P.length||W?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(p.zc,{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsxs)(p.Fc,{textAlign:["center",null,"left"],children:[" ",a("Item")]}),Object(T.jsxs)(p.Fc,{textAlign:"right",children:[" ",a("Event")]}),ie||ae?null:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(p.Fc,{textAlign:"right",children:[" ",a("Price")]}),Object(T.jsxs)(p.Fc,{textAlign:"center",children:[" ",a("From")]}),Object(T.jsxs)(p.Fc,{textAlign:"center",children:[" ",a("To")]})]}),Object(T.jsxs)(p.Fc,{textAlign:"center",children:[" ",a("Date")]}),ie||ae?null:Object(T.jsx)(p.Fc,{})]})}),Object(T.jsx)("tbody",{children:R?P.map((function(e){var t=z.find((function(t){return t.tokenId===e.nft.tokenId}));return Object(T.jsx)(J.a,{activity:e,nft:t,bnbBusdPrice:ce},"".concat(e.marketEvent,"#").concat(e.nft.tokenId,"#").concat(e.timestamp,"#").concat(e.tx))})):Object(T.jsx)(y.a,{})})]}),Object(T.jsx)(p.bb,{borderTop:"1px ".concat(i.colors.cardBorder," solid"),pt:"24px",flexDirection:"column",justifyContent:"space-between",height:"100%",children:Object(T.jsxs)(S.b,{children:[Object(T.jsx)(S.a,{onClick:function(){1!==u.currentPage&&A((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:e.currentPage-1})}))},children:Object(T.jsx)(p.c,{color:1===u.currentPage?"textDisabled":"primary"})}),Object(T.jsx)(p.Dc,{children:a("Page %page% of %maxPage%",{page:u.currentPage,maxPage:u.maxPage})}),Object(T.jsx)(S.a,{onClick:Object(x.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.currentPage===u.maxPage){e.next=18;break}if(A((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:e.currentPage+1})})),u.maxPage-u.currentPage!==1||u.activity.length!==100*K){e.next=18;break}return e.prev=3,Y(!0),t=JSON.parse(se),e.next=8,Object(g.f)(c.toLowerCase(),t,100*(K+1));case 8:n=e.sent,r=Object(X.a)(n),A((function(e){return Object(j.a)(Object(j.a)({},e),{},{activity:r,maxPage:Math.ceil(r.length/8)||1})})),Y(!1),Z((function(e){return e+1})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error("Failed to fetch collection activity",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])}))),children:Object(T.jsx)(p.f,{color:u.currentPage===u.maxPage?"textDisabled":"primary"})})]})})]}):Object(T.jsxs)(p.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(T.jsx)(C.a,{}),Object(T.jsx)(p.Dc,{pt:"8px",bold:!0,children:a("No NFT market history found")})]})})]})};t.default=function(){var e=Object(o.i)().collectionAddress,t=Object(l.e)(e);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(b.a,{collection:t}),Object(T.jsx)(R,{collection:t})]})}}}]);
//# sourceMappingURL=9.5432c24f.chunk.js.map