(this.webpackJsonpmobilehouse_calendar=this.webpackJsonpmobilehouse_calendar||[]).push([[0],{344:function(e,t,a){},358:function(e,t){},776:function(e,t,a){"use strict";a.r(t);var n,i,s,c,r,o,u,l,d=a(2),h=a.n(d),m=a(29),b=a.n(m),f=(a(344),a(789)),j=a(23),p=a(141),g=a(142),x=a(155),O=a(154),D=a(324),v=(a(205),a(224),a(121)),k=a(90),S=a.p+"static/media/kuca1.a6c15dd1.jpeg",y=a.p+"static/media/kuca2.2492fd3c.jpeg",R=a.p+"static/media/kuca3.769a14d5.jpeg",w=(a.p,a.p,a.p+"static/media/kuca6.d5fcda6c.jpeg"),C=a.p+"static/media/kuca7.190801e2.jpg",I=a.p+"static/media/kuca8.28e22115.jpg",Y=a.p+"static/media/kuca9.95c779d8.jpg",_=a.p+"static/media/kuca10.5499845e.jpg",M=a.p+"static/media/kuca11.be89a4f1.jpg",B=a.p+"static/media/prices.0a37e880.png",F=a(201),H=(a(470),a(325)),W=a.n(H),E=a(45),T=a(46),q=T.a.div(n||(n=Object(E.a)(["\n    width: 100%;\n    max-width: 1100px;\n    margin: 0 auto;\n"]))),A=T.a.image(i||(i=Object(E.a)(["\n    width: 100%;\n    height: 20vh;\n\n    & > img {\n        \n        width: 100%;\n    }\n"]))),N=T.a.div(s||(s=Object(E.a)(["\n    margin-top: 20px;\n    margin-bottom: 120px;\n"]))),P=T.a.div(c||(c=Object(E.a)(["\n    position: fixed;\n    display: flex;\n    bottom: 0;\n    left: 0;\n    height: 70px;\n    width: 100%;\n    background: black;\n    padding: 20px;\n    margin-top: 50px;\n\n    & > FaFacebook{\n        color: white;\n    }\n"]))),z=T.a.h1(r||(r=Object(E.a)(["\n    font-size: 1.6rem;\n    font-weight: 500;\n    text-align: center;\n    margin-top: 20px;\n"]))),Q=T.a.h4(o||(o=Object(E.a)(["\n    font-size: 1.4rem;\n    font-weight: 400;\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]))),Z=T.a.h4(u||(u=Object(E.a)(["\n    color: white;\n    font-size: 1.2rem;\n"]))),L=T.a.div(l||(l=Object(E.a)(["\n    width: 80%;\n    max-width: 1300px;\n    margin: 0 auto;\n    align-items: center;\n"]))),G=a(784),J=a(103),V=a(785),X=a(786),K=a(787),U=a(788),$=a(8),ee=[{original:S,thumbnail:S,thumbnailWidth:350,thumbnailHeight:250},{original:y,thumbnail:y,thumbnailWidth:350,thumbnailHeight:250},{original:R,thumbnail:R,thumbnailWidth:350,thumbnailHeight:250},{original:w,thumbnail:w,thumbnailWidth:350,thumbnailHeight:250},{original:C,thumbnail:C,thumbnailWidth:350,thumbnailHeight:250},{original:I,thumbnail:I,thumbnailWidth:350,thumbnailHeight:250},{original:Y,thumbnail:Y,thumbnailWidth:350,thumbnailHeight:250},{original:_,thumbnail:_,thumbnailWidth:350,thumbnailHeight:250},{original:M,thumbnail:M,thumbnailWidth:350,thumbnailHeight:250}],te=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(j.a)({},e,t.target.value))},n.alert=function(){n.setState({startingDate:n.state.startDate&&n.state.startDate.format("ll"),endingDate:n.state.endDate&&n.state.endDate.format("ll")})},n.isBlocked=function(e){return n.state.occupiedDates.some((function(t){return e.isSame(t,"day")}))},n.state={startDate:null,endDate:null,startingDate:"",endingDate:"",nameRef:"",emailRef:"",messageRef:"",numberRef:"",occupiedDates:[]},n.firebaseApp=k.a.apps[0],n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").get().then((function(t){e.setState({occupiedDates:t.data().dates})}))}},{key:"componentDidUpdate",value:function(){}},{key:"handleSubmit",value:function(e){alert("Reservation has been succesfully sent."),e.preventDefault();var t=this.state,a={from_name:t.nameRef,reply_to:t.emailRef,to_name:"mobilehomes.dream@gmail.com",poruka:t.messageRef,StartDate:t.startingDate,EndDate:t.endingDate,brojGostiju:t.numberRef};D.send("service_mhd","template_m41xhfo",a,"user_3s2VO5yeBewihEufqZfux"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({nameRef:"",emailRef:"",messageRef:"",numberRef:""})}},{key:"render",value:function(){var e=this;return Object($.jsxs)(q,{children:[Object($.jsx)(A,{children:Object($.jsx)(W.a,{items:ee,enableLightbox:!1,enableImageSelection:!0,onClickThumbnail:this.onSelectImage,thumbnailstyle:this.styleSmall,style:{maxWidth:"1100px"}})}),Object($.jsx)(z,{children:"Mobile Homes Dream"}),Object($.jsx)(Q,{children:"Register your vacation here"}),Object($.jsx)("img",{src:B,style:{marginBottom:"30px",width:"100%"}}),Object($.jsxs)(L,{children:[Object($.jsx)(v.DateRangePicker,{className:"calendar",startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(t){var a=t.startDate,n=t.endDate;return e.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},displayFormat:"DD/MM/YYYY",isDayBlocked:this.isBlocked,numberOfMonths:"1"}),Object($.jsx)("br",{}),Object($.jsx)(N,{children:Object($.jsx)(G.a,{flexDirection:"column",children:Object($.jsxs)("form",{className:"contact-form",onSubmit:this.handleSubmit.bind(this),children:[Object($.jsxs)(J.a,{isRequired:!0,children:[Object($.jsx)(V.a,{children:"Name"}),Object($.jsx)(X.a,{type:"text",name:"nameRef",className:"nameRef",value:this.state.nameRef,onChange:this.handleChange.bind(this,"nameRef"),autoComplete:"false",ref:this.nameRef})]}),Object($.jsxs)(J.a,{isRequired:!0,children:[Object($.jsx)(V.a,{children:"Email"}),Object($.jsx)(X.a,{type:"email",name:"emailRef",className:"emailRef",value:this.state.emailRef,onChange:this.handleChange.bind(this,"emailRef"),autoComplete:"false",ref:this.emailRef})]}),Object($.jsxs)(J.a,{isRequired:!0,children:[Object($.jsx)(V.a,{children:"Number of guests"}),Object($.jsx)(X.a,{type:"number",name:"numberRef",className:"numberRef",value:this.state.numberRef,onChange:this.handleChange.bind(this,"numberRef"),autoComplete:"false",ref:this.numberRef})]}),Object($.jsxs)(J.a,{children:[Object($.jsx)(V.a,{children:"Message"}),Object($.jsx)(K.a,{name:"messageRef",value:this.state.messageRef,onChange:this.handleChange.bind(this,"messageRef"),autoComplete:"false",ref:this.messageRef})]}),Object($.jsx)(U.a,{type:"submit",value:"Send",className:"submit",onClick:this.alert,bgColor:"brand.100",mt:"4",children:"Send"})]})})})]}),Object($.jsxs)(P,{children:[Object($.jsx)(Z,{children:"Follow us on social media:"}),Object($.jsx)("a",{href:"https://www.facebook.com/Mobile-Homes-Dream-100289145503066",children:Object($.jsx)(F.a,{style:{color:"white",marginLeft:"20px",fontSize:"1.2rem",marginTop:"6px"}})}),Object($.jsx)("a",{href:"https://www.instagram.com/mobilehomes.dream/",children:Object($.jsx)(F.b,{style:{color:"white",marginLeft:"20px",fontSize:"1.4rem",marginTop:"5px"}})})]})]})}}]),a}(d.Component);var ae,ne,ie,se=function(){return Object($.jsx)(f.a,{children:Object($.jsx)(te,{})})},ce=a(87),re=a(333),oe=a(22),ue=a(30),le=(a(481),a(9)),de=a.n(le),he=T.a.div(ae||(ae=Object(E.a)(["\n    width: 100%;\n"]))),me=T.a.div(ne||(ne=Object(E.a)(["\n    max-width: 1300px;\n    margin: 0 auto;\n    align-items: center;\n    align-content: center;\n    text-align: center;\n    margin-top: 100px;\n"]))),be=T.a.div(ie||(ie=Object(E.a)(["\n    max-width: 1300px;\n    margin: 200px auto;\n    align-items: center;\n    align-content: center;\n    text-align: center;\n    \n"]))),fe=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).addDatesBetween=function(e,t){for(var a=[],n=e;n<=t;)a.push(n.format("YYYY/MM/DD")),n=n.add(1,"days");return a},n.handleSubmit=function(){alert();var e=n.addDatesBetween(n.state.startDate,n.state.endDate),t=[].concat(Object(ue.a)(n.state.occupiedDates),Object(ue.a)(e));ce.a.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").set({dates:t})},n.alert=function(){n.setState({startingDate:n.state.startDate&&n.state.startDate.format("YYYY/MM/DD"),endingDate:n.state.endDate&&n.state.endDate.format("YYYY/MM/DD")})},n.isBlocked=function(e){return n.state.occupiedDates.some((function(t){return e.isSame(t,"day")}))},n.state={startDate:null,endDate:null,startingDate:"",endingDate:"",date:"",nameRef:"",emailRef:"",messageRef:"",numberRef:"",occupiedDates:[]},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;ce.a.firestore().collection("Dates").doc("EY3kntWS5XQZCHvcOQA7").get().then((function(t){e.setState({occupiedDates:t.data().dates})}))}},{key:"onFocusChange",value:function(e){e&&this.setState({focusedInput:e})}},{key:"render",value:function(){var e=this;return Object($.jsxs)(he,{children:[Object($.jsxs)(me,{children:[Object($.jsx)(v.DateRangePicker,{startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(t){var a=t.startDate,n=t.endDate;return e.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},displayFormat:"DD/MM/YYYY",isDayBlocked:this.isBlocked,numberOfMonths:"1"}),Object($.jsx)("br",{}),Object($.jsx)("button",{type:"button",onClick:this.handleSubmit,style:{marginTop:"50px"},children:"Submit"})]}),Object($.jsx)(be,{children:Object($.jsx)(v.DayPickerRangeController,{startDate:this.state.startDate,endDate:this.state.endDate,onDatesChange:function(t){var a=t.startDate,n=t.endDate;return e.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},initialVisibleMonth:function(){return de()().add(2,"M")},isDayBlocked:this.isBlocked,style:{width:"300px"}})})]})}}]),a}(d.Component),je=a(198),pe=a.n(je),ge=a(332),xe=a(12),Oe=h.a.createContext(),De=function(e){var t=Object(d.useState)({email:"",password:""}),a=Object(xe.a)(t,2),n=a[0],i=a[1],s=Object(d.useState)([]),c=Object(xe.a)(s,2),r=c[0],o=c[1],u=Object(d.useState)(null),l=Object(xe.a)(u,2),h=l[0],m=l[1];Object(d.useEffect)((function(){k.a.auth().onAuthStateChanged((function(e){m(e?e.refreshToken:null)}))}),[]);return Object($.jsx)(Oe.Provider,{value:{handleSignup:function(){},handleSignin:function(e){ve.signin(e.email,e.password,o,m)},token:h,inputs:n,setToken:m,setInputs:i,errors:r,handleSignout:function(){ve.signout(o,m)}},children:e.children})},ve={signup:function(e,t,a,n){},signin:function(e,t,a,n){k.a.auth().signInWithEmailAndPassword(e,t).then(function(){var e=Object(ge.a)(pe.a.mark((function e(t){var a;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object.entries(t.user)[5][1].b;case 2:return a=e.sent,e.next=5,localStorage.setItem("token",a);case 5:n(window.localStorage.token);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a((function(t){return Object(ue.a)(new Set([].concat(Object(ue.a)(t),[e.message])))}))}))},signout:function(e,t){k.a.auth().signOut().then((function(e){localStorage.removeItem("token"),t(null)})).catch((function(a){e((function(e){return Object(ue.a)(new Set([].concat(Object(ue.a)(e),[a.message])))})),localStorage.removeItem("token"),t(null)}))}};var ke=function(){var e=Object(d.useContext)(Oe).token,t=Object(d.useContext)(Oe),a=t.handleSignin,n=(t.inputs,t.setInputs);return t.errors,e?Object($.jsx)(fe,{}):Object($.jsx)("div",{children:Object($.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:e.target.email.value,password:e.target.password.value};n(t),a(t)},children:[Object($.jsx)("input",{name:"email",placeholder:"email"}),Object($.jsx)("input",{name:"password",placeholder:"password"}),Object($.jsx)("button",{type:"submit",children:"Submit"})]})})};var Se=function(){return Object(d.useEffect)((function(){return function(){}}),[]),Object($.jsx)(re.a,{children:Object($.jsxs)(oe.c,{children:[Object($.jsx)(oe.a,{exact:!0,path:"/",component:se}),Object($.jsx)(De,{children:Object($.jsx)(oe.a,{exact:!0,path:"/admin",component:ke})})]})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,790)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};ce.a.initializeApp({apiKey:"AIzaSyBG98IOyn8sF-xYcZx6G0flJC39R1MlH1Y",authDomain:"pakostanekalendar.firebaseapp.com",databaseURL:"https://pakostanekalendar-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pakostanekalendar",storageBucket:"pakostanekalendar.appspot.com",messagingSenderId:"613864478118",appId:"1:613864478118:web:bdda66f1078f14909e6b67",measurementId:"G-4KQRVZTPJZ"}),ce.a.analytics(),b.a.render(Object($.jsx)(h.a.StrictMode,{children:Object($.jsx)(Se,{})}),document.getElementById("root")),ye()}},[[776,1,2]]]);
//# sourceMappingURL=main.0ee3cb90.chunk.js.map