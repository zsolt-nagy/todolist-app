(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),o=n.n(c),a=n(6),s=n.n(a),l=(n(13),n(7)),u=n(2);n(14),n(15);function r(t){return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=document.querySelector(".js-todolist-item").value,i=document.querySelector(".js-time").value;document.querySelector(".js-todolist-item").value="",document.querySelector(".js-time").value="",t.handleAdd(n,i)},children:[Object(i.jsx)("input",{type:"text",name:"todolist-item",className:"js-todolist-item",placeholder:"List Activity"}),Object(i.jsx)("input",{type:"text",className:"js-time",placeholder:"List Time"}),Object(i.jsx)("button",{type:"submit",children:"Add"}),Object(i.jsx)("button",{onClick:t.handleClear,children:"Clear"})]})}n(16);var d=n.p+"static/media/check-solid.5dcf9568.svg";function j(t){var e=o.a.useState(!0),n=Object(u.a)(e,2),c=n[0],a=n[1],s=o.a.useState(t.todolist),l=Object(u.a)(s,2),r=l[0],j=l[1],m=o.a.useState(t.time),p=Object(u.a)(m,2),b=p[0],h=p[1],f=null,v=null;return c?(f=r,v="(".concat(b,")")):(f=Object(i.jsx)("input",{type:"text",value:r,onChange:function(e){j(e.currentTarget.value),t.handleUpdate(t.index,e.currentTarget.value,b)}}),v=Object(i.jsx)("input",{type:"text",value:b,onChange:function(e){h(e.currentTarget.value),t.handleUpdate(t.index,r,e.currentTarget.value)}})),Object(i.jsxs)("div",{className:"todo-item",children:[f," ",v,Object(i.jsx)("img",{src:d,alt:"Edit todolist",className:"edit-todolist",onClick:function(){a((function(t){return!t}))}})]})}n(17);function m(t){var e=t.items,n=t.handleUpdate,c=e.map((function(t){return Object(i.jsx)(j,{index:t.key,todolist:t.todolist,time:t.time,handleUpdate:n},t.key)}));return Object(i.jsx)("div",{className:"todolist-list-container",children:c})}var p=function(){var t=Object(c.useState)(4),e=Object(u.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)([{todolist:"Click to List Activity",time:"Click to List Time",key:0},{todolist:"Click to List Activity",time:"Click to List Time",key:0}]),s=Object(u.a)(a,2),d=s[0],j=s[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("h2",{children:" To Do List "})}),Object(i.jsx)(r,{handleClear:function(t){t.preventDefault(),j([])},handleAdd:function(t,e){var i=n;o(n+1),j((function(n){return[].concat(Object(l.a)(n),[{todolist:t,time:e,key:i}])}))}}),Object(i.jsx)(m,{items:d,handleUpdate:function(t,e,n){j((function(i){return i.map((function(i){return t===i.key?{todolist:e,time:n,key:t}:i}))}))}})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),o(t),a(t)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.e5566687.chunk.js.map