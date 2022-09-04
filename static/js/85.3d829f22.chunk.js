"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[85],{4085:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a,r,s=t(4942),c=t(1413),i=t(885),l=t(2791),u=t(7256),o=t(184),m=function(){var e=(0,u.wY)().data,n=(0,l.useState)({name:"",number:""}),t=(0,i.Z)(n,2),a=t[0],r=t[1],m=(0,u.Tn)(),d=(0,i.Z)(m,1)[0],h=function(e){var n=e.currentTarget,t=n.name,a=n.value;r((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},t,a))}))};return(0,o.jsxs)("form",{className:"contacts-form",onSubmit:function(n){n.preventDefault(),e.some((function(e){return e.number===a.number}))?alert("This phone ".concat(a.number," is already in contacts")):(d(a),r({name:"",number:""}))},children:["Name",(0,o.jsx)("label",{className:"contacts-form__name-label",children:(0,o.jsx)("input",{className:"contacts-form__input",type:"text",name:"name",value:a.name,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,o.jsxs)("label",{className:"contacts-form__name-label",children:["Number",(0,o.jsx)("input",{className:"contacts-form__input",type:"tel",name:"number",value:a.number,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{className:"new-contact-btn",type:"submit",children:"Add contact"})]})},d="Filter_filterContainer__8G57N",h="Filter_filterInput__1Cysk",f=t(8535),p=t(3661),b=function(){var e=(0,f.v9)((function(e){return e.filterValue.value})),n=(0,f.I0)();return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("p",{children:"Find contacts by name"}),(0,o.jsx)("input",{className:h,name:"filter",value:e,onChange:function(e){n((0,p.Qt)(e.currentTarget.value))}})]})},x=t(2982),_=t(168),j=t(3299),v=j.Z.section(a||(a=(0,_.Z)(["\n  list-style-type: square;\n  margin-left: auto;\n  margin-right: 0px;\n  max-width: 400px;\n  width: 400px;\n"]))),N=j.Z.h2(r||(r=(0,_.Z)(["\n  text-align: center;\n  font-size: 40px;\n"])));var g=function(){var e=(0,u.wY)().data,n=(0,u.Nt)(),t=(0,i.Z)(n,2),a=t[0],r=t[1].isFetching,s=(0,f.v9)((function(e){return e.filterValue.value}));return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(v,{className:"contacts",children:[(0,o.jsx)(N,{className:"contacts__title",children:"Contacts"}),(0,o.jsx)("ul",{className:"contacts",children:e&&function(){if(e)return(0,x.Z)(e).filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())||e.number.includes(s)}))}().map((function(e){var n=e.name,t=e.number,s=e.id;return(0,o.jsxs)("li",{className:"contacts__item",children:[(0,o.jsxs)("p",{children:[n," : ",t]}),(0,o.jsx)("button",{type:"button",className:"contacts__del-btn",onClick:function(){return a(s)},disabled:r,children:"Delete"})]},s)}))})]})})},Z=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Phonebook"}),(0,o.jsx)(m,{}),(0,o.jsx)(b,{}),(0,o.jsx)(g,{})]})}}}]);
//# sourceMappingURL=85.3d829f22.chunk.js.map