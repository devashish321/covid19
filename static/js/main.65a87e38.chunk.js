(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{19:function(a,t,e){},36:function(a,t,e){},60:function(a,t,e){"use strict";e.r(t);var n=e(0),d=e.n(n),r=e(9),c=e.n(r),i=(e(36),e(17)),s=(e(19),e(29)),h=e.n(s),l=e(3);var o=e(18),j=e(10);var u=function(a){var t={AN:"Andaman and Nicobar Islands",AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CH:"Chandigarh",CT:"Chhattisgarh",DN:"Dadra and Nagar Haveli",DD:"Daman and Diu",DL:"Delhi",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LA:"Ladakh",LD:"Lakshadweep",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Puducherry",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TG:"Telengana",TN:"Tamil Nadu",TS:"Telangana",TR:"Tripura",UP:"Uttar Pradesh",UK:"Uttarakhand",UT:"Uttarakhand",WB:"West Bengal"};return t[a.data_name]?Object(l.jsxs)(o.a,{className:"addPadding",border:"light",children:[Object(l.jsx)(o.a.Header,{children:a.data.total&&t[a.data_name]}),Object(l.jsxs)(j.a,{className:"list-group-flush",children:[Object(l.jsxs)(j.a.Item,{children:["Confirmed : ",a.data.total&&a.data.total.confirmed.toLocaleString("en-IN")]}),Object(l.jsxs)(j.a.Item,{children:["Deceased : ",a.data.total&&a.data.total.deceased.toLocaleString("en-IN")]}),Object(l.jsxs)(j.a.Item,{children:["Recovered : ",a.data.total&&a.data.total.recovered.toLocaleString("en-IN")]}),Object(l.jsxs)(j.a.Item,{children:["Tested : ",a.data.total&&a.data.total.tested.toLocaleString("en-IN")]})]})]}):null},m=e(31),b=e(30),g=(e(56),e(16));var O=function(){var a=Object(n.useState)([]),t=Object(i.a)(a,2),e=t[0],d=t[1],r=Object(n.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){h.a.get("https://api.covid19india.org/v4/min/data.min.json").then((function(a){d(a.data),o(!0)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(g.a,{bg:"dark",variant:"dark",children:Object(l.jsx)(g.a.Brand,{href:"#home",className:"mid-align",children:"Covid-19 Tracker"})}),Object(l.jsx)(b.a,{className:"addPadding",children:Object(l.jsx)(m.a,{xs:1,sm:2,md:3,lg:4,children:s&&Object.keys(e).map((function(a){return Object(l.jsx)(u,{data:e[a],data_name:a},a)}))})})]})},f=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,62)).then((function(t){var e=t.getCLS,n=t.getFID,d=t.getFCP,r=t.getLCP,c=t.getTTFB;e(a),n(a),d(a),r(a),c(a)}))};c.a.render(Object(l.jsx)(d.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[60,1,2]]]);
//# sourceMappingURL=main.65a87e38.chunk.js.map