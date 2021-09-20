(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(32),a(9)),c=a(1),u=a(14),s=a.n(u),m=a(16),d=a(3),h=a(4),v=a(6),p=a(5),b=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.storyline,r=e.imagePath,o=e.rating;return i.a.createElement("div",{"data-testid":"movie-card"},i.a.createElement("h2",null,a),i.a.createElement("img",{src:r,alt:"movie_image"}),i.a.createElement("p",null,n),i.a.createElement("p",null,"Rating: ".concat(o)),i.a.createElement(l.b,{to:"/movies/".concat(t)},"VER DETALHES"))}}]),a}(i.a.Component),f=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Carregando...")}}]),a}(n.Component),g=a(26),E=a(12),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var O=function(){return JSON.parse(localStorage.getItem("movies"))},j=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},S=function(e){var t=O().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},I=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).fetchMovies=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){var t=O();k(t)(e)}));case 2:(a=t.sent)&&e.setState({movies:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.state={movies:[],loading:!0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies;return!0===e.loading?i.a.createElement(f,null):i.a.createElement("div",{"data-testid":"movie-list"},t.map((function(e){return i.a.createElement(b,{key:e.title,movie:e})})),i.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O"))}}]),a}(n.Component),w=a(17),_=a(11),C=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(E.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(w.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),R=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).deleteMovie=function(){!function(e){var t=O();t=t.filter((function(t){return t.id!==parseInt(e,10)})),j(t),new Promise((function(e){k({status:"OK"})(e)}))}(e.props.match.params.id)},e.fetchMovie=Object(m.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,S(a);case 3:(n=t.sent)&&e.setState({movie:n,loading:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={movie:void 0,loading:!0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.loading,n=this.props.match.url;if(!0===a)return i.a.createElement(f,null);var r=t.title,o=t.storyline,c=t.imagePath,u=t.genre,s=t.rating,m=t.subtitle;return i.a.createElement("div",{"data-testid":"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(c)}),i.a.createElement("p",null,"Title: ".concat(r)),i.a.createElement("p",null,"Subtitle: ".concat(m)),i.a.createElement("p",null,"Storyline: ".concat(o)),i.a.createElement("p",null,"Genre: ".concat(u)),i.a.createElement("p",null,"Rating: ".concat(s)),i.a.createElement(l.b,{to:"".concat(n,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/",onClick:this.deleteMovie},"DELETAR"))}}]),a}(n.Component),M=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=O(),n=a[a.length-1].id+1,i=Object(E.a)(Object(E.a)({},t),{},{id:n});a=[].concat(Object(g.a)(a),[i]),j(a),k("OK")(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(C,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),A=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={loading:!0,shouldRedirect:!1,movie:{}},n.handleSubmit=n.handleSubmit.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;S(t).then((function(t){e.setState({movie:t,loading:!1})}))}},{key:"handleSubmit",value:function(e){var t=this;(function(e){return new Promise((function(t){var a=O().map((function(t){return t.id===parseInt(e.id,10)?Object(E.a)(Object(E.a)({},t),e):t}));j(a),k("OK")(t)}))})(e).then((function(){t.setState({shouldRedirect:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):!0===t?i.a.createElement(f,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(C,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),P=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);var x=function(){return i.a.createElement(l.a,{basename:"/movie-cards"},i.a.createElement("div",null,"Movie Card Library CRUD"),i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:I}),i.a.createElement(c.b,{exact:!0,path:"/movies/new",component:M}),i.a.createElement(c.b,{exact:!0,path:"/movies/:id",render:function(e){return i.a.createElement(R,e)}}),i.a.createElement(c.b,{exact:!0,path:"/movies/:id/edit",component:A}),i.a.createElement(c.b,{component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.698a6037.chunk.js.map