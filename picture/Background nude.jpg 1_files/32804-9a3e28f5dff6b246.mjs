"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[32804],{705533:(e,n,l)=>{var t;l.r(n),l.d(n,{default:()=>s});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DebugSignalsFeedback_pin",selections:[{alias:null,args:null,concreteType:"SignalDecisionDict",kind:"LinkedField",name:"debAds",plural:!0,selections:t=[{alias:null,args:null,kind:"ScalarField",name:"backgroundColor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"iconUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"signalId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"signalMessage",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SignalDecisionDict",kind:"LinkedField",name:"debContentQuality",plural:!0,selections:t,storageKey:null},{alias:null,args:null,concreteType:"SignalDecisionDict",kind:"LinkedField",name:"debInclusiveProduct",plural:!0,selections:t,storageKey:null},{alias:null,args:null,concreteType:"SignalDecisionDict",kind:"LinkedField",name:"debShopping",plural:!0,selections:t,storageKey:null},{alias:null,args:null,concreteType:"SignalDecisionDict",kind:"LinkedField",name:"debTrustAndSafety",plural:!0,selections:t,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],type:"Pin",abstractKey:null};i.hash="06530ceab8fc1bb7b5d868c8ffeb2afd";let s=i},343902:(e,n,l)=>{l.d(n,{N:()=>a,Z:()=>s});var t=l(883119),i=l(785893);function s({children:e,fullWidth:n}){return(0,i.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:{pointerEvents:"auto",width:n?"100%":void 0}},"data-test-id":"pointer-events-wrapper",children:e})}function a({children:e,enabled:n}){return n?(0,i.jsx)(s,{children:e}):e}},891162:(e,n,l)=>{l.d(n,{Q6:()=>u,ZP:()=>o,qe:()=>c,yU:()=>d});var t=l(520893);let i=(e,n)=>e.length===n.length&&e.every((e,l)=>e===n[l]),s=e=>e;function a(e,n=i,l=s){return function(t){let i=[];return function(...s){let a=i.find(e=>n(e.args,l(s)));if(a)return a.result;let r=t(...s);return i.push({args:l(s),result:r}),e&&i.length>e&&i.shift(),r}}}let r=a(),o=r,c=a(1),d=a(void 0,i,e=>[JSON.stringify(e)]),u=a(0,(e,n)=>e.length===n.length&&e.every((e,l)=>(0,t.Z)(e,n[l])))},361747:(e,n,l)=>{l.d(n,{Z:()=>a});var t=l(883119),i=l(140017),s=l(785893);function a({height:e,isDenseView:n,rounding:l,width:a,color:r}){let o=(0,i.ZP)();return(0,s.jsx)(t.xu,{alignItems:"center",color:r||"default","data-test-id":"unavailable-pin",display:"flex",height:e,justifyContent:"center",overflow:"hidden",position:"relative",rounding:l,width:a,children:(0,s.jsxs)(t.kC,{alignItems:"center",direction:"column",children:[(0,s.jsx)(t.xu,{paddingY:n?2:4,children:(0,s.jsx)(t.JO,{accessibilityLabel:o._('Pin not available', 'story-pin.Closeup.UnavailableIdeaPin.icon.accessibilityLabel', 'Accessibility label on icon'),color:"default",icon:"alert",size:20})}),(0,s.jsx)(t.xv,{weight:"bold",children:o._('Unavailable', 'story-pin.Closeup.UnavailableIdeaPin.Unavailable', 'Text on an unavailable idea Pin that has been deleted')}),!n&&(0,s.jsx)(t.xu,{paddingY:1,children:(0,s.jsx)(t.xv,{children:o._('Removed by the creator', 'story-pin.Closeup.UnavailableIdeaPin.Removed', 'Text on an unavailable idea Pin explaining it has been removed by its creator')})})]})})}},156032:(e,n,l)=>{l.d(n,{Z:()=>z});var t,i=l(667294);l(167912);var s=l(616550),a=l(883119),r=l(510989),o=l(207012),c=l(343902),d=l(608516),u=l(477458),h=l(149722),g=l(785893);let _=({signal:e,anchor:n,setShowFlyout:l,setStore:t})=>{let{hovered:i,onMouseEnter:s,onMouseLeave:r}=(0,u.Z)(),o=e=>{l(e=>!e),t(e)};return(0,g.jsx)(a.iP,{onMouseEnter:s,onMouseLeave:r,onTap:()=>o(e),rounding:"pill",children:(0,g.jsxs)(a.xu,{ref:n,alignItems:"center",color:i?"dark":"transparentDarkGray",display:"flex",padding:3,rounding:"pill",children:[(0,g.jsx)(a.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",marginEnd:1,minWidth:24,rounding:"circle",children:(0,g.jsx)(a.xu,{height:20,overflow:"hidden",rounding:"circle",width:20,children:(0,g.jsx)(a.Ee,{alt:"",color:e.backgroundColor??"",naturalHeight:1,naturalWidth:1,src:e.iconUrl??""})})}),(0,g.jsx)(a.xv,{color:"inverse",size:"200",weight:"bold",children:e.signalMessage})]})})};var x=l(107366),p=l(140017),f=l(13848),j=l(454514);function m(e){let n=(0,p.ZP)(),{onHide:l}=e,t=(0,g.jsx)(a.xv,{children:n._('Thank you for helping improve signal detection on Pinterest!', 'pinRep.actionBar.signalDetector.toast', 'Toast text displayed when a user submits a signal for review')});return(0,g.jsx)(j.ZP,{onHide:l,text:t})}let v=function({anchor:e,onDismiss:n,pinId:l,signal:t}){let i=(0,p.ZP)(),s=(0,h.Z)(),{showOneToast:r}=(0,f.F9)();if(!s.isEmployee)return null;let{backgroundColor:o,iconUrl:c,signalId:d,signalMessage:u}=t;return(0,g.jsx)(a.mh,{children:(0,g.jsx)(a.J2,{anchor:e,idealDirection:"right",onDismiss:n,positionRelativeToAnchor:!1,size:"lg",children:(0,g.jsxs)(a.xu,{padding:4,width:"100%",children:[(0,g.jsx)(a.kC,{alignItems:"center",justifyContent:"start",children:(0,g.jsx)(a.X6,{size:"400",children:i._('Signal detected:', 'pinRep.actionBar.signalDetector.header', 'Header for signal detector flyout')})}),(0,g.jsx)(a.xu,{paddingY:3,children:(0,g.jsxs)(a.kC,{alignItems:"center",gap:2,justifyContent:"center",children:[(0,g.jsx)(a.xu,{height:40,overflow:"hidden",rounding:"circle",width:40,children:c?(0,g.jsx)(a.Ee,{alt:i._('Signal display', 'pinRep.actionBar.signalDetector.signalAsset', 'Asset to represent the signal detected'),color:"white",naturalHeight:1,naturalWidth:1,src:c}):(0,g.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:o??""}},height:40,width:40})}),(0,g.jsx)(a.xv,{size:"200",children:u})]})}),(0,g.jsx)(a.xu,{marginBottom:3,children:(0,g.jsx)(a.xv,{size:"200",children:i._('If you think this detection is inaccurate, please send this Pin for review. It will help improve Pinterest.', 'pinRep.actionBar.signalDetector.instructions', 'Instructions to the user for how to handle inaccurate detection')})}),(0,g.jsxs)(a.kC,{alignItems:"center",gap:2,justifyContent:"start",children:[(0,g.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:()=>{(0,x.Z)({url:`/v3/pins/${l}/signal_request_review/`,method:"POST",data:{signal_id:d,user:s.id}}),n(),r(({hideToast:e})=>(0,g.jsx)(m,{onHide:e}))},size:"md",text:i._('Send for review', 'pinRep.actionBar.signalDetector.button.review', 'Button label for users to send the pin for review')}),(0,g.jsx)(a.zx,{color:"gray",fullWidth:!0,onClick:n,size:"md",text:i._('Cancel', 'pinRep.actionBar.signalDetector.button.cancel', 'Button label for users to cancel')})]})]})})})};function y({signals:e,pinId:n}){let[l,t]=(0,i.useState)(!1),s=(0,i.useRef)(null),[o,u]=(0,i.useState)(e[0]);return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(r.Z,{name:"SafeSuspense_DebugSignal_FeedbackButton",children:(0,g.jsx)(d.Z,{children:(0,g.jsx)(a.xu,{"data-test-id":"debug-signals-feedback-button",children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(a.kC,{alignItems:"stretch",justifyContent:"start",children:e.map(e=>(0,g.jsx)(a.xu,{marginEnd:2,children:(0,g.jsx)(_,{anchor:s,setShowFlyout:t,setStore:u,signal:e})},e.signalId))})})})})}),l&&(0,g.jsx)(v,{anchor:s.current,onDismiss:()=>t(!1),pinId:n,signal:o})]})}let b=function({anchor:e,onDismiss:n,pinId:l,signals:t}){let s=(0,p.ZP)(),[r,o]=(0,i.useState)(0),c=(0,h.Z)(),{showOneToast:d}=(0,f.F9)();if(!c.isEmployee)return null;let u=t.map(({signalMessage:e})=>({href:"#",text:e??""})),{backgroundColor:_,iconUrl:j,signalId:v,signalMessage:y}=t[r],b=({activeTabIndex:e})=>{o(e)};return(0,g.jsx)(a.mh,{children:(0,g.jsx)(a.J2,{anchor:e,idealDirection:"right",onDismiss:n,positionRelativeToAnchor:!1,size:"lg",children:(0,g.jsxs)(a.xu,{padding:4,width:"100%",children:[t.length>1&&(0,g.jsx)(a.xu,{marginBottom:4,overflow:"scrollX",padding:1,children:(0,g.jsx)(a.mQ,{activeTabIndex:r,onChange:({event:e,activeTabIndex:n,dangerouslyDisableOnNavigation:l})=>{e.preventDefault(),l(),b({activeTabIndex:n})},tabs:u})}),(0,g.jsx)(a.kC,{alignItems:"center",justifyContent:"start",children:(0,g.jsx)(a.X6,{size:"400",children:s._('Signal detected:', 'pinRep.actionBar.signalDetector.header', 'Header for signal detector flyout')})}),(0,g.jsx)(a.xu,{paddingY:3,children:(0,g.jsxs)(a.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"center",children:[(0,g.jsx)(a.xu,{height:40,overflow:"hidden",rounding:"circle",width:40,children:j?(0,g.jsx)(a.Ee,{alt:s._('Signal display', 'pinRep.actionBar.signalDetector.signalAsset', 'Asset to represent the signal detected'),color:"white",naturalHeight:1,naturalWidth:1,src:j}):(0,g.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:_??""}},height:40,width:40})}),(0,g.jsx)(a.xv,{size:"200",children:y})]})}),(0,g.jsx)(a.xu,{marginBottom:3,children:(0,g.jsx)(a.xv,{size:"200",children:s._('If you think this detection is inaccurate, please send this Pin for review. It will help improve Pinterest.', 'pinRep.actionBar.signalDetector.instructions', 'Instructions to the user for how to handle inaccurate detection')})}),(0,g.jsxs)(a.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"start",children:[(0,g.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:()=>{(0,x.Z)({url:`/v3/pins/${l}/signal_request_review/`,method:"POST",data:{signal_id:v,user:c.id}}),n(),d(({hideToast:e})=>(0,g.jsx)(m,{onHide:e}))},size:"md",text:s._('Send for review', 'pinRep.actionBar.signalDetector.button.review', 'Button label for users to send the pin for review')}),(0,g.jsx)(a.zx,{color:"gray",fullWidth:!0,onClick:n,size:"md",text:s._('Cancel', 'pinRep.actionBar.signalDetector.button.cancel', 'Button label for users to cancel')})]})]})})})},P=void 0!==t?t:t=l(705533);function C({signals:e,pinId:n}){let{backgroundColor:l,iconUrl:t,signalMessage:s}=e[0],[o,h]=(0,i.useState)(!1),_=(0,i.useRef)();return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(r.Z,{name:"SafeSuspense_DebugSignal_FeedbackButton",children:(0,g.jsx)(d.Z,{children:(0,g.jsx)(a.xu,{"data-test-id":"debug-signals-feedback-button",children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(u.q,{children:({hovered:e,onMouseEnter:n,onMouseLeave:i})=>(0,g.jsx)(a.iP,{onMouseEnter:n,onMouseLeave:i,onTap:()=>h(e=>!e),rounding:"pill",children:(0,g.jsxs)(a.xu,{ref:_,alignItems:"center",color:e?"dark":"transparentDarkGray",display:"flex",padding:3,rounding:"pill",children:[(0,g.jsx)(a.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",marginEnd:1,rounding:"circle",width:24,children:(0,g.jsx)(a.xu,{height:20,overflow:"hidden",rounding:"circle",width:20,children:(0,g.jsx)(a.Ee,{alt:"",color:l??"",naturalHeight:1,naturalWidth:1,src:t??""})})}),(0,g.jsx)(a.xv,{color:"inverse",size:"200",weight:"bold",children:s})]})})})})})})}),o&&_&&_.current&&(0,g.jsx)(b,{anchor:_.current,onDismiss:()=>h(!1),pinId:n,signals:e})]})}function z({pinKey:e}){let n=(0,o.Z)(P,e),l=(0,h.Z)(),{search:t}=(0,s.TH)(),a=(0,i.useMemo)(()=>new URLSearchParams(t),[t]);if(!l.isEmployee)return null;let{entityId:r,debAds:c,debContentQuality:d,debInclusiveProduct:u,debShopping:_,debTrustAndSafety:x}=n;if(c)return(0,g.jsx)(C,{pinId:r,signals:c});if(d)return(0,g.jsx)(C,{pinId:r,signals:d});if(u){if("skin_tone"===a.get("type")){let e=u.filter(e=>"visual_signals_hair_pattern_v1"!==e.signalId);return(0,g.jsx)(y,{pinId:r,signals:e})}{let e=u.filter(e=>"visual_body_analyses_v2_0"!==e.signalId);return(0,g.jsx)(y,{pinId:r,signals:e})}}return _?(0,g.jsx)(C,{pinId:r,signals:_}):x?(0,g.jsx)(C,{pinId:r,signals:x}):null}},923368:(e,n,l)=>{l.d(n,{Nb:()=>r,Of:()=>o,YO:()=>a,ZP:()=>u,x4:()=>d});var t=l(667294),i=l(891162),s=l(392029);let a=({showProductDetailPage:e,isLargerPane:n,showCloseupContentRight:l})=>e&&n?l?s.Uj:s.zT:1,r=(0,i.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:n,showCloseupContentRight:l,showProductDetailPage:t,viewportSize:i,maxWidth:s,descriptionPaneWidth:a,isCloseupRelatedPinsAboveTheFoldEnabled:r,isCommentThreadExpanded:o,setIsCommentThreadExpanded:c,stackedCloseupEnabled:d,isInRemoveMagnifyingGlassVariant:u,setAbortNoActionPlacementTimeout:h})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:n,showCloseupContentRight:l,showProductDetailPage:t,viewportSize:i,maxWidth:s,descriptionPaneWidth:a,isCloseupRelatedPinsAboveTheFoldEnabled:r,isCommentThreadExpanded:o,setIsCommentThreadExpanded:c,stackedCloseupEnabled:d,isInRemoveMagnifyingGlassVariant:u,setAbortNoActionPlacementTimeout:h})),o={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:s.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:s.u6,descriptionPaneWidth:s.u6-s.Gg,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentThreadExpanded:!1,stackedCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,setAbortNoActionPlacementTimeout:()=>{}},c=(0,t.createContext)(o);function d(){let e=(0,t.useContext)(c);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let u=c},392029:(e,n,l)=>{l.d(n,{$T:()=>j,CI:()=>s,Ch:()=>r,ER:()=>f,Gb:()=>o,Gg:()=>t,Ie:()=>g,J6:()=>h,KP:()=>_,Kn:()=>a,O5:()=>m,Uj:()=>c,YE:()=>v,bx:()=>x,cg:()=>y,d2:()=>u,g9:()=>p,iB:()=>P,rv:()=>b,u6:()=>i,zT:()=>d});let t=508,i=2*t,s=488,a=992,r=672,o=1176,c=.6,d=.84,u=40,h=16,g=72,_=740,x=912,p=32,f=16,j=24,m=2,v=16,y=16,b=1,P={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/32804-9a3e28f5dff6b246.mjs.map