(this["webpackJsonpbbk-project-1.1"]=this["webpackJsonpbbk-project-1.1"]||[]).push([[0],{12:function(e,s,a){},14:function(e,s,a){},15:function(e,s,a){"use strict";a.r(s);var t=a(1),r=a.n(t),n=a(7),c=a.n(n),i=(a(12),a(2)),o=a(3),d=a(6),l=function(e,s){var a=Object(t.useState)({name:"",email:"",password:"",password2:""}),r=Object(i.a)(a,2),n=r[0],c=r[1],l=Object(t.useState)({}),j=Object(i.a)(l,2),m=j[0],b=j[1],u=Object(t.useState)(!1),p=Object(i.a)(u,2),h=p[0],O=p[1];return Object(t.useEffect)((function(){0===Object.keys(m).length&&h&&e()}),[m]),{handleChange:function(e){var s=e.target,a=s.name,t=s.value;c(Object(d.a)(Object(d.a)({},n),{},Object(o.a)({},a,t)))},values:n,handleSubmit:function(e){e.preventDefault(),b(s(n)),O(!0)},errors:m}};function j(e){var s={};return e.name.trim()||(s.name="Name Required"),e.email.trim()||(s.email="Email Required"),e.password.trim()?e.password.length<6&&(s.password="Password needs to be 6 characters or more."):s.password="Password Required",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Re-enter Your Password",s}a(5);var m=a(0),b=function(e){var s=e.submitForms,a=l(s,j),t=a.handleChange,r=a.values,n=a.handleSubmit,c=a.errors;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h2",{className:"title",children:"Create Account"})}),Object(m.jsxs)("form",{className:"form-wrapper",onSubmit:n,children:[Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{className:"name",id:"name",name:"name",type:"text",placeholder:"Enter Your Name",value:r.name,onChange:t}),c.name&&Object(m.jsx)("p",{children:c.name})]}),Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{className:"email",id:"email",name:"email",type:"email",placeholder:"Enter Your Email",value:r.email,onChange:t}),c.email&&Object(m.jsx)("p",{children:c.email})]}),Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{className:"password",id:"password",name:"password",type:"password",placeholder:"Password here",value:r.password,onChange:t}),c.password&&Object(m.jsx)("p",{children:c.password})]}),Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("label",{htmlFor:"password2",children:"Confrim Password:"}),Object(m.jsx)("input",{className:"password2",id:"password2",name:"password2",type:"password",placeholder:"Re-enter your password",value:r.password2,onChange:t}),c.password2&&Object(m.jsx)("p",{children:c.password2})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",type:"submit",children:" Sign-Up "}),Object(m.jsxs)("span",{className:"submit-login",children:["Already have an account? Sign-in ",Object(m.jsx)("a",{href:"#",children:"here"})]})]})]})]})})},u=function(){return Object(m.jsx)("div",{className:"forms-main-content",children:Object(m.jsx)("div",{className:"forms-success",children:"We Have Reveived Your Request!"})})},p=function(){var e=Object(t.useState)(!1),s=Object(i.a)(e,2),a=s[0],r=s[1];return Object(m.jsx)("div",{children:a?Object(m.jsx)(u,{}):Object(m.jsx)(b,{submitForms:function(){r(!0)}})})},h=(a(14),function(){return Object(m.jsx)("div",{children:Object(m.jsx)(p,{})})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(s){var a=s.getCLS,t=s.getFID,r=s.getFCP,n=s.getLCP,c=s.getTTFB;a(e),t(e),r(e),n(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),O()},5:function(e,s,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.ca012590.chunk.js.map