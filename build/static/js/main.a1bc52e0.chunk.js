(this["webpackJsonpshampoo-shop"]=this["webpackJsonpshampoo-shop"]||[]).push([[0],{1:function(e,t,c){e.exports={app:"style_app__1tYCM",product:"style_product__16W_o",new_span:"style_new_span__3mEMV",new_text:"style_new_text__1poGo",picture:"style_picture__3RaeF",img:"style_img__19QVm",compare_button:"style_compare_button__1i1Nz",compare_block:"style_compare_block__2MTQh",compare_vector:"style_compare_vector__3IY3W",compare_checkbox:"style_compare_checkbox__28ZgH",compare_content:"style_compare_content__ct_5U",transition:"style_transition__2ZkX3",product_title:"style_product_title__1QoRJ",product_text:"style_product_text__1Jhiy","form-container":"style_form-container__2fWfY",select_group:"style_select_group__2EyhH",transform:"style_transform__274yZ",button:"style_button__30ys1",button_open:"style_button_open__jK-Yq",arrow:"style_arrow__3Dimb",dropdown:"style_dropdown__YoY6p",option:"style_option__5bwyG",select_item:"style_select_item__1rd7p",hidden:"style_hidden__S45Pb",price:"style_price__SWvdu",form:"style_form__Q9bNd",dropdown_price:"style_dropdown_price__1k96Q",form_group:"style_form_group__3l5bg",volume_label:"style_volume_label__33wYU",volume_checkbox:"style_volume_checkbox__3PWYx",input_number:"style_input_number__11mCT",input_number__input:"style_input_number__input__2waSY",input_number__minus:"style_input_number__minus__2_ZWf",input_number__plus:"style_input_number__plus__1v5kH",submit_group:"style_submit_group__1n8ff",submit_button:"style_submit_button__1aB5i"}},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(8),o=c.n(s),r=(c(13),c(5)),i=c(1),l=c.n(i),u=c(0);function m(e){var t=e.id,c=Object(a.useRef)(null),n=Object(a.useRef)(null),s=Object(a.useRef)(null),o=Object(a.useRef)(null);function r(){var e=c.current,t=n.current;e.classList.remove(l.a.hidden),t.classList.add(l.a.transform),o.current.classList.add(l.a.button_open)}function i(e){var t=document.querySelector('label[for="'.concat(e.target.id,'"]')).innerText;s.current.innerText=t,r()}return Object(a.useEffect)((function(){document.getElementById("selectLabel".concat(t))}),[]),Object(u.jsxs)("div",{onClick:r,onMouseLeave:function(){var e=c.current,t=n.current;e.classList.add(l.a.hidden),t.classList.remove(l.a.transform),o.current.classList.remove(l.a.button_open)},className:l.a.select_group,children:[Object(u.jsxs)("div",{id:"button".concat(t),className:l.a.button,ref:o,children:[Object(u.jsx)("span",{id:"selectLabel".concat(t),ref:s,children:"\u0426\u0432\u0435\u0442"}),Object(u.jsx)("div",{id:"arrow".concat(t),className:l.a.arrow,ref:n})]}),Object(u.jsxs)("div",{className:"".concat(l.a.dropdown," ").concat(l.a.hidden),ref:c,id:"dropdown".concat(t),children:[Object(u.jsx)("input",{onClick:i,type:"radio",id:"select-yellow".concat(t),name:"where",value:"yellow",className:l.a.option}),Object(u.jsx)("label",{htmlFor:"select-yellow".concat(t),className:l.a.select_item,children:"\u0416\u0435\u043b\u0442\u044b\u0439"}),Object(u.jsx)("input",{onClick:i,type:"radio",id:"select-red".concat(t),name:"where",value:"red",className:l.a.option}),Object(u.jsx)("label",{htmlFor:"select-red".concat(t),className:l.a.select_item,children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"}),Object(u.jsx)("input",{onClick:i,type:"radio",id:"select-green".concat(t),name:"where",value:"green",className:l.a.option}),Object(u.jsx)("label",{htmlFor:"select-green".concat(t),className:l.a.select_item,children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"}),Object(u.jsx)("input",{onClick:i,type:"radio",id:"select-black".concat(t),name:"where",value:"black",className:l.a.option}),Object(u.jsx)("label",{htmlFor:"select-black".concat(t),className:l.a.select_item,children:"\u0427\u0435\u0440\u043d\u044b\u0439"}),Object(u.jsx)("input",{onClick:i,type:"radio",id:"select-white".concat(t),name:"where",value:"white",className:l.a.option}),Object(u.jsx)("label",{htmlFor:"select-white".concat(t),className:l.a.select_item,children:"\u0411\u0435\u043b\u044b\u0439"})]})]})}var d=c(6);function _(e){var t,c,n,s=e.updateState,o=e.id,r=1,i="quantity",m=Object(a.useState)({}),_=Object(d.a)(m,2),b=_[0],p=_[1];return Object(a.useEffect)((function(){t=document.getElementById("minus-".concat(o)),c=document.getElementById("plus-".concat(o)),(n=document.getElementById("numberField-".concat(o))).value=r,p({minusButton:t,plusButton:c,numberField:n})}),[]),Object(u.jsxs)("div",{className:"".concat(l.a.input_number," ").concat(l.a.transition),children:[Object(u.jsx)("div",{onClick:function(){var e=Number(b.numberField.value);1!==e&&(b.numberField.value=e-1,r=e-1,s(i,b.numberField.id,e-1))},id:"minus-".concat(o),className:l.a.input_number__minus,children:"-"}),Object(u.jsx)("input",{onChange:function(){var e=Number(b.numberField.value);isNaN(e)||e<1?b.numberField.value=r:r=b.numberField.value},className:l.a.input_number__input,id:"numberField-".concat(o),name:"quantity",type:"text",pattern:"^[0-9]+$"}),Object(u.jsx)("div",{onClick:function(){var e=Number(b.numberField.value);b.numberField.value=e+1,r=e+1,s(i,b.numberField.id,e+1)},id:"plus-".concat(o),className:l.a.input_number__plus,children:"+"})]})}function b(e){var t=e.setProductParameters,c=e.product,n="quantity",s="volume";function o(e,c,a){var o=c.split("-");o=Number(o[o.length-1]),t((function(t){var c=Object(r.a)(t),i=t.indexOf(t.find((function(e){return e.id===o})));return c[i][e]=a,e===s&&(c[i].price=t[i].quantity*t[i].cost*a),e===n&&(c[i].price=t[i].volume*t[i].cost*a),c}))}var i={"100ml":1,"200ml":1.8,"300ml":3.6};return Object(a.useEffect)((function(){document.getElementById("form".concat(c.id)).addEventListener("change",(function(e){var t,c,a=e.target.closest("input");a.name===s?(t=a.value,c=a.id,o(s,c,i[t])):a.name===n&&(t=a.value,c=a.id,o(n,c,t))}))}),[]),Object(u.jsxs)("div",{className:l.a.product,children:[Object(u.jsx)("span",{className:l.a.new_span,children:Object(u.jsx)("p",{className:l.a.new_text,children:"NEW"})}),Object(u.jsx)("div",{className:"".concat(l.a.compare_block," ").concat(l.a.transition),children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",className:l.a.compare_checkbox}),Object(u.jsx)("div",{className:l.a.compare_content})]})}),Object(u.jsx)("div",{className:l.a.picture,children:Object(u.jsx)("img",{className:l.a.img,src:c.frontImage,onMouseOver:function(e){return e.currentTarget.src=c.backImage},onMouseOut:function(e){return e.currentTarget.src=c.frontImage}})}),Object(u.jsx)("h4",{className:l.a.product_title,children:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c"}),Object(u.jsx)("p",{className:l.a.product_text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}),Object(u.jsxs)("form",{className:l.a.form,id:"form".concat(c.id),children:[Object(u.jsxs)("div",{className:l.a.dropdown_price,children:[Object(u.jsx)(m,{id:c.id}),Object(u.jsxs)("p",{className:l.a.price,children:[c.price," \u0433\u0440\u043d"]})]}),Object(u.jsxs)("div",{className:l.a.form_group,children:[Object(u.jsx)("input",{type:"radio",name:"volume",id:"100ml-".concat(c.id),className:l.a.volume_checkbox,value:"100ml",defaultChecked:!0}),Object(u.jsx)("label",{htmlFor:"100ml-".concat(c.id),className:l.a.volume_label,children:"100 \u043c\u043b"})]}),Object(u.jsxs)("div",{className:l.a.form_group,children:[Object(u.jsx)("input",{type:"radio",name:"volume",id:"200ml-".concat(c.id),className:l.a.volume_checkbox,value:"200ml"}),Object(u.jsx)("label",{htmlFor:"200ml-".concat(c.id),className:l.a.volume_label,children:"200 \u043c\u043b"})]}),Object(u.jsxs)("div",{className:l.a.form_group,children:[Object(u.jsx)("input",{type:"radio",name:"volume",id:"300ml-".concat(c.id),className:l.a.volume_checkbox,value:"300ml"}),Object(u.jsx)("label",{htmlFor:"300ml-".concat(c.id),className:l.a.volume_label,children:"300 \u043c\u043b"})]}),Object(u.jsxs)("div",{className:l.a.submit_group,children:[Object(u.jsx)(_,{id:c.id,updateState:o}),Object(u.jsx)("button",{type:"submit",className:"".concat(l.a.submit_button," ").concat(l.a.transition),children:"\u041a\u0423\u041f\u0418\u0422\u042c"})]})]})]})}var p=function(){var e=function(){var e=Object(a.useState)([{id:1,frontImage:"https://picua.org/images/2021/08/08/2c05c6854f98816637b450ac798ee5da.png",backImage:"https://picua.org/images/2021/08/08/2a4bc63aa05b4c910c647e0c8056501e.png",volume:1,quantity:1,cost:200},{id:2,frontImage:"https://picua.org/images/2021/08/08/45a23511150d45e66923f9ad92126eb7.png",backImage:"https://picua.org/images/2021/08/08/f648e71b6cdae5d770eb294fa0e530de.png",volume:1,quantity:1,cost:200},{id:3,frontImage:"https://picua.org/images/2021/08/08/cfa967eda6dab027370c5c1eabbaafec.png",backImage:"https://picua.org/images/2021/08/08/701d10acbc883afe9efeebbbdb5bac88.png",volume:1,quantity:1,cost:200}]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){return n((function(e){var t=Object(r.a)(e);return t.map((function(e){return e.price=e.volume*e.quantity*e.cost})),t}))}),[]),{productParameters:c,setProductParameters:n}}(),t=e.productParameters,c=e.setProductParameters;return Object(u.jsx)("div",{className:l.a.app,children:t.map((function(e){return Object(u.jsx)(b,{product:e,setProductParameters:c},e.id)}))})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.a1bc52e0.chunk.js.map