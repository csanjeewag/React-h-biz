(this["webpackJsonpreact-complete-project"]=this["webpackJsonpreact-complete-project"]||[]).push([[0],{16:function(e,a,t){},24:function(e,a,t){e.exports=t(35)},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(11),c=t.n(o),r=(t(29),t(1)),i=t(7),s=t(18),m=t(19),u=t(22),v=t(20),b=t(23),g=t(9);t(16);var h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(v.a)(a).call(this,e))).state={token:"token",theme:""},t}return Object(b.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("demo color"),g.initialize(),console.log("demo color2 "),g.getContext((function(e){e&&e.theme?(console.log(e),this.setState({token:e.theme})):console.log("no theme")})),new Promise((function(e,a){console.log("1. Get auth token from Microsoft Teams"),g.authentication.getAuthToken({successCallback:function(a){e(a)},failureCallback:function(e){a("Error getting token: "+e),console.log("Error getting token")}})})).then((function(a){console.log(a),e.setState({token:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null," demo 3",l.a.createElement("p",null,"token"),l.a.createElement("div",null,this.state.token),l.a.createElement("p",null,"theme"),l.a.createElement("div",null,this.state.theme))}}]),a}(l.a.Component);function d(){var e=Object(r.f)().slug;return l.a.createElement("div",null,"Now showing post ",e)}var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Hsenid Biz"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/React-h-biz"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/React-h-biz/ssoDemo"},"ssoDemo")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/config/:slug"},"Config")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true"},"Disabled")))))),l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/React-h-biz"},l.a.createElement(h,null)),l.a.createElement(r.a,{exact:!0,path:"/React-h-biz/ssoDemo"},l.a.createElement(h,null)),l.a.createElement(r.a,{path:"config/:slug"},l.a.createElement(d,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.dcb01e9b.chunk.js.map