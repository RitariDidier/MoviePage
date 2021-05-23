(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],p=0,v=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a12":function(t,e,n){},"318a":function(t,e,n){"use strict";n("b36f")},"494e":function(t,e,n){"use strict";n("976e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("Navbar")],1)])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"containerLinks"},[n("router-link",{attrs:{to:"/"}},[t._v("Popular Movies")]),n("router-link",{attrs:{to:"/topmovies"}},[t._v("Top Movies")])],1),n("router-view")],1)},c=[],u={name:"Navbar"},l=u,p=(n("5dfc"),n("2877")),v=Object(p["a"])(l,s,c,!1,null,null,null),d=v.exports,h={name:"App",components:{Navbar:d}},g=h,f=(n("318a"),Object(p["a"])(g,a,r,!1,null,null,null)),m=f.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isMounted?n("div",{key:t.rndKey,staticClass:"popularMovies"},[n("ul",{staticClass:"cards"},t._l(t.MoviesV,(function(e){return n("Card",{key:e.ID,attrs:{title:e.title,poster_path:e.poster_path},nativeOn:{click:function(n){return t.FotoClickeada(e)}}})})),1),n("button",{staticClass:"box button",on:{click:function(e){return t.loadMore()}}},[t._v("Load More")])]):t._e()},b=[],M=n("d4ec"),y=n("bee2"),C=(n("99af"),n("bc3a")),k=n.n(C),w="38f4ad5cc0254ac3cc83e49224c2dbd3",O="https://api.themoviedb.org/3/movie/",j=function(){function t(){Object(M["a"])(this,t),this.resource=k.a.create({baseURL:O}),this.apiKey="api_key=".concat(w,"&language=en-US")}return Object(y["a"])(t,[{key:"getPopular",value:function(t){return this.resource.get("popular?".concat(this.apiKey,"&page=").concat(t))}},{key:"getTopRated",value:function(t){return this.resource.get("top_rated?".concat(this.apiKey,"&page=").concat(t))}},{key:"getMovie",value:function(t){return this.resource.get("".concat(t,"?").concat(this.apiKey))}}]),t}(),x=new j,P=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(M["a"])(this,t),this.id=e.id,this.original_language=e.original_language,this.original_title=e.original_title,this.adult=e.adult,this.backdrop_path="https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path),this.poster_path="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),this.genres=e.genres,this.overview=e.overview,this.popularity=e.popularity,this.release_date=e.release_date,this.title=e.title,this.video=e.video,this.vote_average=e.vote_average,this.vote_count=e.vote_count},K=P,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"imgBx"},[n("img",{attrs:{src:""+t.poster_path,alt:"img"}})]),n("div",{staticClass:"content"},[n("h2",[t._v(" "+t._s(t.title)+" "),n("span")])])])},$=[],T={name:"Card",props:["title","poster_path"]},E=T,R=Object(p["a"])(E,V,$,!1,null,null,null),L=R.exports,S={name:"PopularMovies",components:{Card:L},data:function(){return{MoviesV:[],isMounted:!1,page:0,rndKey:0}},mounted:function(){this.getMovies()},methods:{getMovies:function(){var t=this;x.getPopular().then((function(e){for(var n=e.data,o=0;o<n.results.length;o++)t.MoviesV[o]=new K(n.results[o]);t.isMounted=!0}))},loadMore:function(){var t=this;console.log("LOADING MORE"),this.page=this.page+1,x.getTopRated(this.page).then((function(e){for(var n=e.data,o=t.MoviesV.length,i=0;i<n.results.length;i++)t.MoviesV[o]=new K(n.results[i]),o+=1;t.rndKey=t.rndKey+1}))},FotoClickeada:function(t){this.$router.push({name:"moviepage",params:{id:t.id}})}}},D=S,F=(n("814d"),Object(p["a"])(D,_,b,!1,null,null,null)),I=F.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isMounted?n("div",{key:t.rndKey,staticClass:"topMovies"},[n("ul",{staticClass:"cards"},t._l(t.MoviesV,(function(e){return n("Card",{key:e.ID,attrs:{title:e.title,poster_path:e.poster_path},nativeOn:{click:function(n){return t.FotoClickeada(e)}}})})),1),n("button",{on:{click:function(e){return t.loadMore()}}},[t._v("Load More")])]):t._e()},A=[],J={name:"TopMovies",components:{Card:L},data:function(){return{MoviesV:[],isMounted:!1,page:0,rndKey:0}},mounted:function(){this.getMovies()},methods:{getMovies:function(){var t=this;x.getTopRated().then((function(e){for(var n=e.data,o=0;o<n.results.length;o++)t.MoviesV[o]=new K(n.results[o]);t.page=t.page+1,t.isMounted=!0}))},loadMore:function(){var t=this;this.page=this.page+1,x.getTopRated(this.page).then((function(e){for(var n=e.data,o=t.MoviesV.length,i=0;i<n.results.length;i++)t.MoviesV[o]=new K(n.results[i]),o+=1;t.rndKey=t.rndKey+1}))},FotoClickeada:function(t){this.$router.push({name:"moviepage",params:{id:t.id}})}}},U=J,B=Object(p["a"])(U,N,A,!1,null,null,null),G=B.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"moviePage"},[n("div",{staticClass:"moviePage__info"},[n("h3",[t._v(t._s(this.movie.title))]),n("ul",{staticClass:"genresList"},t._l(this.genres,(function(e){return n("li",{key:e.id,staticClass:"genre"},[t._v(" "+t._s(e.name))])})),0),n("p",[t._v(" Release Date: "+t._s(this.movie.release_date)+" ")]),n("div",{staticClass:"votes"},[n("p",[t._v(" "+t._s(this.movie.vote_average)+" ")]),n("img",{staticClass:"star",attrs:{src:"https://image.flaticon.com/icons/png/512/1828/1828884.png",alt:""}})]),n("div",{staticClass:"overview"},[n("p",[t._v(" "+t._s(this.movie.overview)+" ")])])]),n("div",{staticClass:"moviePage__img"},[n("img",{staticClass:"img1",attrs:{src:"https://image.tmdb.org/t/p/w500/"+this.movie.poster_path,alt:"img"}}),n("img",{staticClass:"img2",attrs:{src:"https://image.tmdb.org/t/p/w500/"+this.movie.backdrop_path,alt:"img"}})])])},z=[],H={name:"MoviePage",props:["movieId"],data:function(){return{movie:K,genres:[]}},mounted:function(){this.getMovie()},methods:{getMovie:function(){var t=this;x.getMovie(this.$route.params.id).then((function(e){var n=e.data;t.movie=n,console.log(t.movie.genres),t.genres=t.movie.genres,console.log(t.genres)}))}}},Q=H,W=(n("494e"),Object(p["a"])(Q,q,z,!1,null,null,null)),X=W.exports,Y=[{path:"/",component:I},{path:"/topmovies",component:G},{name:"moviepage",path:"/moviepage/:id",component:X}];o["a"].config.productionTip=!1,o["a"].use(i["a"]);var Z=new i["a"]({routes:Y});new o["a"]({render:function(t){return t(m)},router:Z}).$mount("#app")},"5dfc":function(t,e,n){"use strict";n("1a12")},"814d":function(t,e,n){"use strict";n("9b34")},"976e":function(t,e,n){},"9b34":function(t,e,n){},b36f:function(t,e,n){}});
//# sourceMappingURL=app.f11e448a.js.map