(this["webpackJsonpmern-blog"]=this["webpackJsonpmern-blog"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(36),a(2)),s=a(3),i=a(5),u=a(4),m=a(11),p=a(12),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("h2",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/create"},"Post")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/about"},"About"))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"About this app"),r.a.createElement("h3",null,"Hi, This is a blog application built using the MERN stack"),r.a.createElement("h3",null,"More feature coming soon! "))}}]),a}(n.Component),b=a(9),v=a.n(b),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createArticle=function(e){e.preventDefault(),n.state.title.length>0&&n.state.content.length>0?v.a.post("https://javascript-blog-backend.herokuapp.com/api/article/create",{title:n.state.title,content:n.state.content,upvotes:0}).then((function(){n.setState({title:"",content:""})})).then((function(){n.setState({submittedClass:"submitted show",errorClass:"error hidden"})})).catch((function(e){return console.log(e)})):n.setState({errorClass:"error show",submittedClass:"submitted hidden"})},n.state={title:"",content:"",errorClass:"error hidden",submittedClass:"submitted hidden"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form"},r.a.createElement("h1",null,"Post a new article"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"text",placeholder:"Title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("p",{className:this.state.errorClass},"Please enter a title."),r.a.createElement("label",null,r.a.createElement("textarea",{rows:"10",cols:"100",placeholder:"Content",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})),r.a.createElement("p",{className:this.state.errorClass},"Please enter some content."),r.a.createElement("button",{type:"submit",onClick:this.createArticle},"Submit"),r.a.createElement("p",{className:this.state.submittedClass},"Your post has been submitted.")))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Oops!! Page not found")}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comments:"),this.props.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))})))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addComment=function(e){e.preventDefault(),n.state.username.length>0&&n.state.text.length>0?v.a.post("https://javascript-blog-backend.herokuapp.com/api/article/".concat(n.props.id,"/add-comment"),{username:n.state.username,text:n.state.text}).then((function(){n.setState({username:"",text:""})})).then((function(){n.props.updateComments()})).then((function(){n.setState({errorClass:"error hidden"})})).catch((function(e){return console.log(e)})):n.setState({errorClass:"error show"})},n.state={username:"",text:"",errorClass:"error hidden"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form"},r.a.createElement("h3",null,"Add a comment:"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"text",placeholder:"Name",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("p",{className:this.state.errorClass},"Please enter your name."),r.a.createElement("label",null,r.a.createElement("textarea",{rows:"5",cols:"50",placeholder:"Comment",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})}})),r.a.createElement("p",{className:this.state.errorClass},"Please enter a comment."),r.a.createElement("button",{type:"submit",onClick:this.addComment},"Submit")))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).upvote=function(){v.a.post("https://javascript-blog-backend.herokuapp.com/api/article/".concat(n.props.id,"/upvote")).then((function(){n.setState({upvotes:n.state.upvotes+1})})).catch((function(e){return console.log(e)}))},n.state={article:{},upvotes:"",comments:[]},n}return Object(s.a)(a,[{key:"updateComments",value:function(){var e=this;v.a.get("https://javascript-blog-backend.herokuapp.com/api/article/".concat(this.props.id)).then((function(t){e.setState({upvotes:t.data.upvotes,comments:t.data.comments})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;this.updateComments(),v.a.get("https://javascript-blog-backend.herokuapp.com/api/article/".concat(this.props.id)).then((function(t){e.setState({article:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.id,t=this.state.article;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"upvote"},r.a.createElement("button",{onClick:this.upvote},"Add upvote"),r.a.createElement("p",null,"This post has been upvoted ",this.state.upvotes)),r.a.createElement("p",null,t.content),r.a.createElement("div",{className:"comments"},r.a.createElement(g,{comments:this.state.comments}),r.a.createElement(j,{id:e,updateComments:this.updateComments()}))):r.a.createElement(f,null)}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={articles:[],display:"block"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://javascript-blog-backend.herokuapp.com/api/articles").then((function(t){e.setState({articles:t.data,display:"none"})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.articles;return r.a.createElement("div",{className:"articles"},r.a.createElement("h1",null,"Articles"),r.a.createElement("h3",{style:{display:this.state.display}},"Fetching from server..."),e.map((function(e,t){return r.a.createElement(m.b,{key:t,to:"/article/".concat(e._id)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.content.substring(0,150),"..."))})))}}]),a}(n.Component),k=(a(59),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:O,exact:!0}),r.a.createElement(p.a,{path:"/create",component:E}),r.a.createElement(p.a,{path:"/about",component:d}),r.a.createElement(p.a,{path:"/article/:id",component:function(e){return r.a.createElement(C,{id:e.match.params.id})}}),r.a.createElement(p.a,{component:f}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.cd044222.chunk.js.map