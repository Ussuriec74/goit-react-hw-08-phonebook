(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[691],{691:function(n,e,t){"use strict";t.r(e),t.d(e,{PhonebookPage:function(){return D}});var r,o,i,c,u,a,s,l=t(2791),m=t(9434),p=t(3634),f=function(n){return n.contacts.items},d=function(n){return n.contacts.filter},h=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},x=t(4834),g=t(168),y=t(6444),j=y.ZP.section(r||(r=(0,g.Z)(["\n  padding: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.fontSizes.l})),v=t(184),k=function(n){var e=n.title,t=n.children;return(0,v.jsxs)(j,{children:[e&&(0,v.jsx)("h2",{children:e}),t]})},Z=t(5705),C=(0,y.ZP)(Z.l0)(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ","px;\n  margin-top: ","px;\n  width: ","px;\n  border: "," black;\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[9]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.bgStats})),P=y.ZP.label(i||(i=(0,g.Z)(["\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),_=(0,y.ZP)(Z.gN)(c||(c=(0,g.Z)(["\n  margin-bottom: ","px;\n  width: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[8]})),w=y.ZP.button(u||(u=(0,g.Z)(["\n  width: ","px;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: ",";\n\n  &:focus, &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[7]}),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.accentColor})),z=function(){var n=(0,m.I0)();return(0,v.jsx)(Z.J9,{onSubmit:function(e,t){var r=t.resetForm;n((0,p.uK)({name:e.name,number:e.number})),r()},initialValues:{name:"",number:""},children:(0,v.jsxs)(C,{children:[(0,v.jsx)(P,{children:"Name"}),(0,v.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,v.jsx)(P,{children:"Number"}),(0,v.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,v.jsx)(w,{type:"submit",children:"Add contact"})]})})},S=t(2007),T=t.n(S),O=y.ZP.li(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n  font-size: ",";\n  margin-bottom: ",'px;\n\n  &::before {\n    content: "";\n    width: ',"px;\n    height: ","px;\n    border-radius: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.accentColor})),I=y.ZP.button(s||(s=(0,g.Z)(["\n  margin-left: auto;\n  background-color: ",";\n  border-radius: ",";\n\n  &:focus, &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.btnColor}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.accentColor})),R=function(n){var e=n.id,t=n.name,r=n.number,o=(0,m.I0)();return(0,v.jsxs)(O,{children:[(0,v.jsxs)("p",{children:[t,": ",r]}),(0,v.jsx)(I,{onClick:function(){return o((0,p.GK)(e))},children:"Delete"})]})};R.prototype={name:T().string.isRequired,number:T().string.isRequired,onClick:T().func.isRequired};var A,q,E=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,m.v9)(f),(0,m.v9)(d));return(0,v.jsx)(x.x,{as:"ul",ml:6,mt:5,width:"480px",children:n.map((function(n){var e=n.name,t=n.id,r=n.number;return(0,v.jsx)(R,{id:t,name:e,number:r},t)}))})},F=t(1538),L=y.ZP.label(A||(A=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: ",";\n  margin-bottom: ","px;\n  margin-top: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),N=y.ZP.input(q||(q=(0,g.Z)(["\n  margin-top: ","px;\n  width: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[8]})),W=function(){var n=(0,m.I0)(),e=(0,m.v9)(d);return(0,v.jsxs)(L,{children:["Find contacts by name",(0,v.jsx)(N,{type:"text",value:e,onChange:function(e){return n((0,F.a)(e.target.value))}})]})},D=function(){var n=(0,m.I0)(),e=(0,m.v9)(f),t=(0,m.v9)(h),r=(0,m.v9)(b);return(0,l.useEffect)((function(){n((0,p.yF)())}),[n]),(0,v.jsxs)(x.x,{children:[(0,v.jsx)(k,{title:"Phonebook",children:(0,v.jsx)(z,{})}),(0,v.jsxs)(k,{title:"Contacts",children:[(0,v.jsx)(W,{}),t&&!r&&(0,v.jsx)("b",{children:"Waiting please..."}),r&&(0,v.jsx)("b",{children:r}),e.length>0&&(0,v.jsx)(E,{})]})]})}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=691.2ba47462.chunk.js.map