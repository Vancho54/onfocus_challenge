(this["webpackJsonpchallenge-onfocus"]=this["webpackJsonpchallenge-onfocus"]||[]).push([[0],{76:function(n,e,t){},77:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(8),c=t.n(r),s=(t(76),t(77),t(25)),o=t(16),l=t(27),d=t(112),b=t(116),j=t(117),x=t(130),p=t(124),u=t(126),h=t(24),m=t(26),g=Object(m.b)({name:"alert",initialState:{show:!1,msg:""},reducers:{showAlert:function(n,e){n.show=!0,n.msg=e.payload},hideAlert:function(n,e){n.show=!1,n.msg=""}}}),f=function(n){return n.alert},O=g.actions,k=O.showAlert,y=O.hideAlert,v=g.reducer,w=Object(m.b)({name:"task",initialState:{page:1,take:6,data:[]},reducers:{setData:function(n,e){n.data=e.payload},changeTaskState:function(n,e){n.data.map((function(n){return n.id===e.payload?n.completed=!n.completed:null}))},editTask:function(n,e){n.data.map((function(t,a){return t.id===e.payload.id?n.data[a]=e.payload:null}))},addTask:function(n,e){n.data.unshift(e.payload)},deleteTask:function(n,e){n.data=n.data.filter((function(n){return n.id!==e.payload}))},upPage:function(n){n.page!==Math.ceil(n.data.length/n.take)&&(n.page=n.page+1)},downPage:function(n){1!==n.page&&(n.page=n.page-1)}}}),N=function(n){return n.task},C=w.actions,T=C.setData,S=C.changeTaskState,P=C.deleteTask,A=C.addTask,B=C.editTask,E=C.downPage,L=C.upPage,z=w.reducer,D=Object(m.b)({name:"auth",initialState:{auth:null},reducers:{login:function(n,e){n.auth=!0}}}),F=function(n){return n.auth.auth},I=D.actions.login,J=D.reducer,M=Object(m.a)({reducer:{task:z,auth:J,alert:v}}),q={showAlert:function(n){M.dispatch(k(n)),setTimeout((function(){M.dispatch(y())}),2e3)}},G={setToken:function(){M.dispatch(I())}},H=t(2),K=function(n){var e=Object(h.b)(F),t=Object(h.b)(f);console.log(t),Object(a.useEffect)((function(){e&&n.history.push("/tasks")}),[e,n.history]);var i=Object(a.useState)({email:"",password:""}),r=Object(l.a)(i,2),c=r[0],m=r[1],g=c.email,O=c.password,k=function(n){m(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},n.target.name,n.target.value)))};return Object(H.jsxs)("div",{className:"mainContainer",children:[t.show?Object(H.jsx)("div",{className:"error",children:t.msg}):null,Object(H.jsx)(d.a,{className:"container",children:Object(H.jsx)(b.a,{children:Object(H.jsxs)("form",{onSubmit:function(n){n.preventDefault(),"jason@test.doe"===g&&"topsecret"===O?G.setToken():q.showAlert("Incorrect password or user")},children:[Object(H.jsx)(j.a,{className:"formLabel",children:"Login"}),Object(H.jsx)(x.a,{className:"formBox",children:Object(H.jsx)(p.a,{name:"email",label:"Email",type:"email",onChange:k,value:g})}),Object(H.jsx)(x.a,{className:"formBox",children:Object(H.jsx)(p.a,{name:"password",label:"Password",type:"password",onChange:k,value:O})}),Object(H.jsx)(x.a,{className:"formBox",children:Object(H.jsx)(u.a,{className:"button",type:"submit",variant:"contained",children:"Login"})})]})})}),Object(H.jsx)("div",{className:"circle-1"}),Object(H.jsx)("div",{className:"circle-2"}),Object(H.jsx)("style",{jsx:!0,children:"\n                    .mainContainer {\n                        display: flex;\n                        max-width: 50vw;\n                        min-width: 25vw;\n                        min-height: 50vh;\n                    }\n\n                    .container {\n                        background: white;\n                        min-height: 40vh;\n                        width: 90%;\n                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\n                        border-radius: 2rem;\n                        z-index: 4;\n                        backdrop-filter: blur(2rem);\n                        display: flex;\n                        align-content: center;\n                        justify-content: center;\n                    }\n\n                    .button {\n                        display: flex;\n                        text-align: justify;\n                        margin: 0px 15px 0px 15px;\n                        box-sizing: border-box;\n                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));\n                        border: none;\n                        width: 70%;\n                        margin-top: 1rem;\n                        height: 2rem;\n                        border-radius: 0.5rem;\n                        font-size: 1.2rem;\n                    }\n\n                    .formBox {\n                        display: flex;\n                        margin-top: 30px;\n                    }\n\n                    .formLabel {\n                        padding-top: 30px;\n                    }\n                "})]})},Q=t(53),R=t(12),U=t(63),V=function(n){var e=n.component,t=Object(U.a)(n,["component"]),a=Object(h.b)(F);return Object(H.jsx)(R.b,Object(o.a)(Object(o.a)({},t),{},{render:function(n){return a?Object(H.jsx)(e,Object(o.a)({},n)):Object(H.jsx)(R.a,{to:"/"})}}))},W=t(129),X=t(128),Y={editTask:function(n){M.dispatch(B(n))},addTask:function(n){M.dispatch(A(n))},setData:function(n){M.dispatch(T(n))},deleteTask:function(n){M.dispatch(P(n))},changeTaskState:function(n){M.dispatch(S(n))},upPage:function(){M.dispatch(L())},downPage:function(){M.dispatch(E())}},Z=t(122),$=t(123),_=t(118),nn=t(119),en=t(120),tn=t(121),an=t(125),rn=function(n){var e=n.task,t=n.handleClose,i=Object(a.useState)(e),r=Object(l.a)(i,2),c=r[0],h=r[1],m=c.title;return Object(H.jsxs)("div",{children:[Object(H.jsx)(d.a,{className:"containerEdit",children:Object(H.jsx)(b.a,{children:Object(H.jsxs)("form",{onSubmit:function(n){n.preventDefault(),Y.editTask(c),t()},children:[Object(H.jsx)(j.a,{className:"formLabel",children:"Edit Task"}),Object(H.jsx)(x.a,{className:"formBox",children:Object(H.jsx)(p.a,{name:"title",label:"Title",type:"text",onChange:function(n){h(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},n.target.name,n.target.value)))},value:m})}),Object(H.jsx)(x.a,{children:Object(H.jsx)(u.a,{className:"buttonEdit",type:"submit",variant:"contained",children:"Edit"})})]})})}),Object(H.jsx)("style",{jsx:!0,children:"\n                    .containerEdit {\n                        display: flex;\n                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1));\n                        border-radius: 1rem;\n                        z-index: 4;\n                        backdrop-filter: blur(2rem);\n                        flex-direction: row;\n                        align-items: center;\n                        justify-content: center;\n                        position: absolute;\n                        top: 50%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                        min-width: 300px;\n                        min-height: 200px;\n                    }\n\n                    .buttonEdit {\n                        display: flex;\n                        text-align: justify;\n                        margin: 0px 15px 0px 15px;\n                        box-sizing: border-box;\n                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));\n                        border: none;\n                        border-radius: 0.5rem;\n                        width: 100%;\n                    }\n\n                    .formBox {\n                        display: flex;\n                        margin-top: 20px;\n                        margin-bottom: 20px;\n                    }\n\n                    .formLabel {\n                        padding-top: 20px;\n                    }\n                "})]})},cn=function(n){var e=n.task,t=Object(a.useState)(!1),i=Object(l.a)(t,2),r=i[0],c=i[1],s=function(){return c(!1)};return Object(H.jsxs)("div",{className:"taskCard",children:[Object(H.jsx)("div",{children:Object(H.jsx)("p",{children:e.title})}),Object(H.jsxs)("div",{className:"optionsContainer",children:[Object(H.jsx)("div",{children:Object(H.jsx)(_.a,{onClick:function(){return c(!0)},style:{cursor:"pointer"}})}),Object(H.jsx)("div",{onClick:function(){return Y.deleteTask(e.id)},children:Object(H.jsx)(nn.a,{style:{cursor:"pointer"}})}),Object(H.jsx)("div",{onClick:function(){return Y.changeTaskState(e.id)},children:e.completed?Object(H.jsx)(en.a,{style:{cursor:"pointer"}}):Object(H.jsx)(tn.a,{style:{cursor:"pointer"}})}),Object(H.jsx)(an.a,{open:r,onClose:s,children:Object(H.jsx)(rn,{task:e,handleClose:s})})]}),Object(H.jsx)("style",{jsx:!0,children:"\n                    .taskCard {\n                        display: flex;\n                        padding: 0px 30px 0px 15px;\n                        margin: 5px 0px 0px 0px;\n                        width: 500px;\n                        height: 80px;\n                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\n                        border-radius: 1rem;\n                        backdrop-filter: blur(2rem);\n                        flex-direction: row;\n                        align-items: center;\n                        justify-content: space-between;\n                    }\n\n                    .optionsContainer {\n                        display: flex;\n                        align-items: center;\n                        padding: 0px 5px 0px 5px;\n                        justify-content: space-between;\n                    }\n                "})]})},sn=t(127),on=function(){var n=Object(a.useState)({title:"",completed:!1,id:Object(sn.a)()}),e=Object(l.a)(n,2),t=e[0],i=e[1],r=t.title;return Object(H.jsxs)("div",{children:[Object(H.jsx)(d.a,{className:"container",children:Object(H.jsx)(b.a,{children:Object(H.jsxs)("form",{onSubmit:function(n){n.preventDefault(),Y.addTask(t),i({title:"",id:Object(sn.a)(),completed:!1})},children:[Object(H.jsx)(j.a,{className:"formLabel",children:"Add a new task"}),Object(H.jsx)(x.a,{className:"formBox",children:Object(H.jsx)(p.a,{name:"title",label:"Title",type:"text",onChange:function(n){i(Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},n.target.name,n.target.value)))},value:r})}),Object(H.jsx)(x.a,{children:Object(H.jsx)(u.a,{className:"button",type:"submit",variant:"contained",children:"Add new task"})})]})})}),Object(H.jsx)("style",{jsx:!0,children:"\n                    .container {\n                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\n                        border-radius: 2rem;\n                        z-index: 2;\n                        backdrop-filter: blur(2rem);\n                        display: flex;\n                    }\n\n                    .button {\n                        display: flex;\n                        text-align: justify;\n                        align-content: center;\n                        margin: 0px 15px 0px 15px;\n                        box-sizing: border-box;\n                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));\n                        border: none;\n                        border-radius: 0.5rem;\n                    }\n\n                    .formBox {\n                        display: flex;\n                        margin-top: 20px;\n                        margin-bottom: 20px;\n                    }\n\n                    .formLabel {\n                        padding-top: 20px;\n                    }\n                "})]})},ln=function(){var n=Object(h.b)(N);return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos").then((function(n){return n.json()})).then((function(n){return Y.setData(n)}))}),[]),console.log(n.data.slice((n.page-1)*n.take,n.take*n.page)),Object(H.jsxs)("div",{className:"wrapper",children:[Object(H.jsxs)("div",{className:"mainContainer",children:[Object(H.jsx)("div",{className:"formContainer",children:Object(H.jsx)(on,{})}),Object(H.jsxs)("div",{className:"taskContainer",children:[Object(H.jsx)("ul",{children:0===n.data.length?Object(H.jsx)("li",{children:Object(H.jsx)("p",{children:"No tasks available"})}):Object(H.jsx)(W.a,{children:n.data.slice((n.page-1)*n.take,n.take*n.page).map((function(n){return Object(H.jsx)(X.a,{timeout:300,classNames:"task",children:Object(H.jsx)(cn,{task:n})},n.id)}))})}),Object(H.jsxs)("div",{className:"arrowContainer",children:[Object(H.jsxs)(u.a,{className:"buttonArrow",variant:"contained",onClick:Y.downPage,children:[Object(H.jsx)(Z.a,{}),Object(H.jsx)("p",{children:"Prev"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("p",{children:n.page})}),Object(H.jsxs)(u.a,{className:"buttonArrow",variant:"contained",onClick:Y.upPage,children:[Object(H.jsx)("p",{children:"Next"}),Object(H.jsx)($.a,{})]})]})]})]}),Object(H.jsx)("div",{className:"circle-1"}),Object(H.jsx)("div",{className:"circle-2"}),Object(H.jsx)("style",{jsx:!0,children:"\n                    .arrowContainer {\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        text-align: center;\n                    } \n                        \n                    .buttonArrow {\n                        display: flex;\n                        text-align: justify;\n                        margin-left:15px;\n                        margin-right: 15px;\n                        max-height: 40px;\n                        box-sizing: border-box;\n                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));\n                        border: none;\n                        border-radius: 0.5rem;\n                    }\n\n                    .wrapper {\n                        display: flex;\n                        flex-direction: column;\n                    }\n\n                    .taskContainer {\n                        display: flex;\n                        flex-direction: column;\n                        max-height: 500px;\n\n                    }\n\n                    .mainContainer {\n                        display: flex;\n                        padding: 0px 30px 0px 15px;\n                        margin: 5px 0px 0px 0px;\n                        max-width: 900px;\n                        min-height: 600px;\n                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));\n                        border-radius: 1rem;\n                        z-index: 4;\n                        backdrop-filter: blur(2rem);\n                        flex-direction: row;\n                        justify-content: space-between;\n                    }\n\n                    .formContainer {\n                        display: flex;\n                        flex-direction: column;\n                        margin-top: 16px;\n                    }\n\n                    .task-enter {\n                        opacity: 0;\n                    }\n                    .task-enter-active {\n                        opacity: 1;\n                        transition: opacity 300ms;\n                    }\n\n                    .task-exit {\n                        opacity: 1\n                    }\n\n                    .task-exit-active {\n                        opacity: 0;\n                        transition: opacity 300ms\n                    }\n                "})]})};var dn=function(){return Object(H.jsx)(Q.a,{children:Object(H.jsxs)(R.d,{children:[Object(H.jsx)(R.b,{exact:!0,path:"/",component:K}),Object(H.jsx)(V,{exact:!0,path:"/tasks",component:ln})]})})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,132)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};c.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(h.a,{store:M,children:Object(H.jsx)(dn,{})})}),document.getElementById("root")),bn()}},[[85,1,2]]]);
//# sourceMappingURL=main.c4c59ce1.chunk.js.map