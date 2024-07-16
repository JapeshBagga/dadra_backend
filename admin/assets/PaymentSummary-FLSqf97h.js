import{q as V,k as w,g as L,r as m,e as D,a as _,j as e,d as F}from"./index-COdFNi2n.js";import{f as I}from"./PaymentForm-CJT7a16g.js";function A(){return V({queryKey:["getCompany"],queryFn:async()=>await w("users/getCompany")})}const T=L(),M=({subscription:t,setCheckOutPage:i,planCode:l,setIsEvent:N,setLoading:E,isExpired:v,price:s,addon:x,calledFromAgent:u=!1,setShowPlansModal:d=()=>{}})=>{const[c,j]=m.useState(!1),[g,f]=m.useState(!1),[o,O]=m.useState(0),[r,h]=m.useState(0),[p,S]=m.useState(0);m.useEffect(()=>{P()},[]);const P=async()=>{try{const a={subId:t.subscription.subscription_id},n=await D("/payments/retrieve",a);if(O(Number(n.data.usedAddonCost.toFixed(2))),h(Number(n.data.credits.toFixed(2))),s===220){const b=s-s*15/100;S(b)}}catch{console.log("err")}},C=_(),k=async()=>{if(u&&d("payment"),t.subscription.plan.trial)j(!0);else{f(!0);const a={subscriptionId:t.subscription.subscription_id,customerId:t.subscription.customer.customer_id,planCode:l};try{const n=await D("/payments/upgradePlan",a);n.data.message==="your plan will be updated shortly"&&C(F.actions.setToastPopUp({show:!0,toastType:"success",message:n.data.message}))}catch(n){console.log(n)}finally{i(!1),f(!1)}}},y=()=>{i(!1),N(!1),E(!1),u&&d("plan")},U=()=>{let a=new Date,n=new Date(a);return s===220?n.setFullYear(n.getFullYear()+1):n.setMonth(n.getMonth()+1),n.toISOString().split("T")[0]};return e.jsxDEV("div",{className:"pop_upBg",children:[!c&&e.jsxDEV("div",{className:"invoice_addons",children:[e.jsxDEV("div",{className:"Cncl",onClick:y,children:e.jsxDEV("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"#6D6D6D",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z",fill:"#6D6D6D"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:128,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:121,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:117,columnNumber:7},void 0),e.jsxDEV("div",{className:"invoice_heading",children:e.jsxDEV("h1",{children:"Plan Summary"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:135,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:134,columnNumber:9},void 0),e.jsxDEV("div",{className:"invoice_body",children:e.jsxDEV("table",{className:"invoice-table",children:[e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Your new subscription plan"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:140,columnNumber:11},void 0),e.jsxDEV("td",{children:"Plus"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:141,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:139,columnNumber:9},void 0),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:" New plan period "},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:144,columnNumber:11},void 0),e.jsxDEV("td",{children:[new Date().toISOString().split("T")[0]," To"," ",U()]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:145,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:143,columnNumber:9},void 0),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Plan price"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:149,columnNumber:9},void 0),e.jsxDEV("td",{children:!T.isAI&&s===220?e.jsxDEV(e.Fragment,{children:e.jsxDEV("span",{className:"price",children:[e.jsxDEV("del",{children:"$220.00"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:154,columnNumber:17},void 0)," ",e.jsxDEV("span",{className:"discounted-price",children:"$187.00"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:154,columnNumber:36},void 0)," (15% off)"]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:153,columnNumber:16},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:152,columnNumber:13},void 0):`$${s}`},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:150,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:148,columnNumber:9},void 0),r+o>0&&e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Credits left"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:164,columnNumber:11},void 0),e.jsxDEV("td",{children:["$",Number(r+o).toFixed(2)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:165,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:163,columnNumber:39},void 0),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:" Sub total"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:168,columnNumber:11},void 0),e.jsxDEV("td",{children:["$",Number((s===220?p:s)-r-o).toFixed(2)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:169,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:167,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:138,columnNumber:8},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:137,columnNumber:9},void 0),e.jsxDEV("div",{className:"invoice-footer flex-cnt",children:e.jsxDEV("button",{type:"submit",onClick:k,disabled:g,children:g?"Processing":"Make Payment"},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:175,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:174,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:116,columnNumber:19},void 0),c&&e.jsxDEV("div",{className:"invoice_addons",children:e.jsxDEV(I,{subscriptionId:t.subscription.subscription_id,customerId:t.subscription.customer.customer_id,planCode:l,isExpired:v,price:s===220?p:s,createInvoice:!1,addon:x,handleClose:y},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:184,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:183,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/japba/OneDrive/Desktop/OmniEngage/og-engage-frontend/src/components/layoutElements/PaymentSummary.tsx",lineNumber:115,columnNumber:5},void 0)};export{M as P,A as u};
//# sourceMappingURL=PaymentSummary-FLSqf97h.js.map
