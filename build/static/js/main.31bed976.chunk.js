(this["webpackJsonpshampoo-shop"]=this["webpackJsonpshampoo-shop"]||[]).push([[0],{1:function(e,t,c){e.exports={app:"style_app__1tYCM",product:"style_product__16W_o",new_span:"style_new_span__3mEMV",new_text:"style_new_text__1poGo",picture:"style_picture__3RaeF",compare_button:"style_compare_button__1i1Nz",compare_block:"style_compare_block__2MTQh",compare_vector:"style_compare_vector__3IY3W",compare_checkbox:"style_compare_checkbox__28ZgH",compare_content:"style_compare_content__ct_5U",button_transition:"style_button_transition__3rouB",product_title:"style_product_title__1QoRJ",product_text:"style_product_text__1Jhiy","form-container":"style_form-container__2fWfY",select_group:"style_select_group__2EyhH",button:"style_button__30ys1",transform:"style_transform__274yZ",arrow:"style_arrow__3Dimb",dropdown:"style_dropdown__YoY6p",option:"style_option__5bwyG",select_item:"style_select_item__1rd7p",hidden:"style_hidden__S45Pb",price:"style_price__SWvdu",form:"style_form__Q9bNd",dropdown_price:"style_dropdown_price__1k96Q",form_group:"style_form_group__3l5bg",volume_label:"style_volume_label__33wYU",volume_checkbox:"style_volume_checkbox__3PWYx",input_number:"style_input_number__11mCT",input_number__input:"style_input_number__input__2waSY",input_number__minus:"style_input_number__minus__2_ZWf",input_number__plus:"style_input_number__plus__1v5kH",submit_group:"style_submit_group__1n8ff",submit_button:"style_submit_button__1aB5i"}},10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(5),o=c.n(s),r=(c(10),c(1)),l=c.n(r),i=c(0);function u(e){var t=e.id,c=Object(a.useRef)(null),n=Object(a.useRef)(null),s=Object(a.useRef)(null);function o(){var e=c.current,t=n.current;e.classList.remove(l.a.hidden),t.classList.add(l.a.transform)}function r(e){var t=document.querySelector('label[for="'.concat(e.target.id,'"]')).innerText;s.current.innerText=t,o()}return Object(a.useEffect)((function(){document.getElementById("selectLabel".concat(t))}),[]),Object(i.jsxs)("div",{onMouseEnter:o,onMouseLeave:function(){var e=c.current,t=n.current;e.classList.add(l.a.hidden),t.classList.remove(l.a.transform)},className:l.a.select_group,children:[Object(i.jsxs)("div",{id:"button{id}",className:l.a.button,children:[Object(i.jsx)("span",{id:"selectLabel{id}",ref:s,children:"\u0426\u0432\u0435\u0442"}),Object(i.jsx)("div",{id:"arrow{id}",className:l.a.arrow,ref:n})]}),Object(i.jsxs)("div",{className:"".concat(l.a.dropdown," ").concat(l.a.hidden),ref:c,id:"dropdown".concat(t),children:[Object(i.jsx)("input",{onClick:r,type:"radio",id:"select-yellow".concat(t),name:"where",value:"yellow",className:l.a.option}),Object(i.jsx)("label",{htmlFor:"select-yellow".concat(t),className:l.a.select_item,children:"\u0416\u0435\u043b\u0442\u044b\u0439"}),Object(i.jsx)("input",{onClick:r,type:"radio",id:"select-red".concat(t),name:"where",value:"red",className:l.a.option}),Object(i.jsx)("label",{htmlFor:"select-red".concat(t),className:l.a.select_item,children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"}),Object(i.jsx)("input",{onClick:r,type:"radio",id:"select-green".concat(t),name:"where",value:"green",className:l.a.option}),Object(i.jsx)("label",{htmlFor:"select-green".concat(t),className:l.a.select_item,children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"}),Object(i.jsx)("input",{onClick:r,type:"radio",id:"select-black".concat(t),name:"where",value:"black",className:l.a.option}),Object(i.jsx)("label",{htmlFor:"select-black".concat(t),className:l.a.select_item,children:"\u0427\u0435\u0440\u043d\u044b\u0439"}),Object(i.jsx)("input",{onClick:r,type:"radio",id:"select-white".concat(t),name:"where",value:"white",className:l.a.option}),Object(i.jsx)("label",{htmlFor:"select-white".concat(t),className:l.a.select_item,children:"\u0411\u0435\u043b\u044b\u0439"})]})]})}var m=c(3);function _(e){e.productQuantity;var t,c,n,s=e.setProductQuantity,o=e.id,r=1,u=Object(a.useState)({}),_=Object(m.a)(u,2),d=_[0],b=_[1];return Object(a.useEffect)((function(){t=document.getElementById("minus".concat(o)),c=document.getElementById("plus".concat(o)),(n=document.getElementById("numberField".concat(o))).value=r,b({minusButton:t,plusButton:c,numberField:n})}),[]),Object(i.jsxs)("div",{className:l.a.input_number,children:[Object(i.jsx)("div",{onClick:function(){var e=Number(d.numberField.value);1!==e&&(d.numberField.value=e-1,r=e-1,s(e-1))},id:"minus".concat(o),className:l.a.input_number__minus,children:"-"}),Object(i.jsx)("input",{onChange:function(){isNaN(Number(d.numberField.value))?d.numberField.value=r:r=d.numberField.value},className:l.a.input_number__input,id:"numberField".concat(o),name:"quantity",type:"text",pattern:"^[0-9]+$"}),Object(i.jsx)("div",{onClick:function(){var e=Number(d.numberField.value);d.numberField.value=e+1,r=e+1,s(e+1)},id:"plus".concat(o),className:l.a.input_number__plus,children:"+"})]})}function d(e){var t=e.productParameters,c=e.setProductParameters,n=e.productQuantity,s=e.setProductQuantity,o=e.id,r={"100ml":1,"200ml":1.8,"300ml":3.6};return Object(a.useEffect)((function(){document.getElementById("form".concat(o)).addEventListener("change",(function(e){var t,a=e.target.closest("input");"volume"===a.name?(t=a.value,c(r[t])):"quantity"===a.name&&(t=a.value,s(t))}))}),[]),Object(i.jsxs)("div",{className:l.a.product,children:[Object(i.jsx)("span",{className:l.a.new_span,children:Object(i.jsx)("p",{className:l.a.new_text,children:"NEW"})}),Object(i.jsx)("div",{className:"".concat(l.a.compare_block," ").concat(l.a.button_transition),children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",className:l.a.compare_checkbox}),Object(i.jsx)("div",{className:l.a.compare_content})]})}),Object(i.jsx)("div",{className:l.a.picture}),Object(i.jsx)("h4",{className:l.a.product_title,children:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c"}),Object(i.jsx)("p",{className:l.a.product_text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}),Object(i.jsxs)("form",{className:l.a.form,id:"form".concat(o),children:[Object(i.jsxs)("div",{className:l.a.dropdown_price,children:[Object(i.jsx)(u,{}),Object(i.jsxs)("p",{className:l.a.price,children:[t*n*200," \u0433\u0440\u043d"]})]}),Object(i.jsxs)("div",{className:l.a.form_group,children:[Object(i.jsx)("input",{type:"radio",name:"volume",id:"100ml".concat(o),className:l.a.volume_checkbox,value:"100ml",defaultChecked:!0}),Object(i.jsx)("label",{htmlFor:"100ml".concat(o),className:l.a.volume_label,children:"100 \u043c\u043b"})]}),Object(i.jsxs)("div",{className:l.a.form_group,children:[Object(i.jsx)("input",{type:"radio",name:"volume",id:"200ml".concat(o),className:l.a.volume_checkbox,value:"200ml"}),Object(i.jsx)("label",{htmlFor:"200ml".concat(o),className:l.a.volume_label,children:"200 \u043c\u043b"})]}),Object(i.jsxs)("div",{className:l.a.form_group,children:[Object(i.jsx)("input",{type:"radio",name:"volume",id:"300ml".concat(o),className:l.a.volume_checkbox,value:"300ml"}),Object(i.jsx)("label",{htmlFor:"300ml".concat(o),className:l.a.volume_label,children:"300 \u043c\u043b"})]}),Object(i.jsxs)("div",{className:l.a.submit_group,children:[Object(i.jsx)(_,{productQuantity:n,id:o,setProductQuantity:s}),Object(i.jsx)("input",{type:"submit",className:"".concat(l.a.submit_button," ").concat(l.a.button_transition),value:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})}var b=function(){var e=function(){var e=Object(a.useState)(1),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(1),o=Object(m.a)(s,2);return{productParameters:c,setProductParameters:n,productQuantity:o[0],setProductQuantity:o[1]}}(),t=e.productParameters,c=e.setProductParameters,n=e.productQuantity,s=e.setProductQuantity;return e.arrayProducts,Object(i.jsxs)("div",{className:l.a.app,children:[Object(i.jsx)(d,{id:1,productParameters:t,setProductParameters:c,productQuantity:n,setProductQuantity:s},1),Object(i.jsx)(d,{id:2,productParameters:t,setProductParameters:c,productQuantity:n,setProductQuantity:s},2),Object(i.jsx)(d,{id:3,productParameters:t,setProductParameters:c,productQuantity:n,setProductQuantity:s},3)]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.31bed976.chunk.js.map