(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],d=0,h=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0333":function(t,e,a){},"3e6e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-box-container"},[a("h1"),a("div",{staticClass:"header"},[a("span",[a("svg",{staticClass:"main-icon",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"}},[a("title"),a("g",{attrs:{id:"icomoon-ignore"}}),a("path",{attrs:{fill:"#ffffff",d:"M490.594 80.054c-71.816-10.325-151.166-16.054-234.593-16.054-83.43 0-162.778 5.729-234.597 16.054-13.765 53.863-21.404 113.375-21.404 175.946 0 62.57 7.639 122.083 21.404 175.945 71.819 10.326 151.168 16.055 234.597 16.055 83.427 0 162.776-5.729 234.593-16.055 13.766-53.862 21.406-113.375 21.406-175.945 0-62.571-7.64-122.083-21.406-175.946zM192.001 352v-192l160 96-160 96z"}})])]),t._v("\r\n         MovieBox \r\n      ")]),a("div",{staticClass:"menu-bar"},[a("b-nav",{attrs:{"card-header":"",align:"center"}},[a("b-nav-item",{class:{selected:t.isSearchMode}},[a("router-link",{attrs:{to:"/search"}},[a("span",{on:{click:function(e){return t.selected("Search")}}},[a("svg",{staticClass:"icon-label",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"}},[a("title"),a("g",{attrs:{id:"icomoon-ignore"}}),a("path",{attrs:{fill:"#42b983",d:"M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"}})]),t._v("\r\n                  Search\r\n              ")])])],1),a("b-nav-item",{class:{selected:t.isFeatureMode}},[a("router-link",{attrs:{to:"/featured"}},[a("span",{on:{click:function(e){return t.selected("Featured")}}},[a("svg",{staticClass:"icon-label",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"}},[a("title"),a("g",{attrs:{id:"icomoon-ignore"}}),a("path",{attrs:{fill:"#42b983",d:"M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769zM256 376.749l-111.731 58.74 21.338-124.415-90.393-88.111 124.92-18.152 55.866-113.198 55.868 113.198 124.918 18.152-90.394 88.111 21.339 124.415-111.731-58.74z"}})]),t._v("\r\n                Featured\r\n              ")])])],1)],1),a("b-card-body",{staticClass:"text-center"},[a("router-view",{on:{featurePageLoaded:function(e){return t.selected("Featured")},searchPageLoaded:function(e){return t.selected("Search")}}})],1)],1),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("span",{staticClass:"text-email"},[t._v("maxx_official@yahoo.com")])])])}],s={name:"MovieBox",props:{},data:function(){return{selectedMode:"Search"}},mounted:function(){},methods:{selected:function(t){this.selectedMode=t}},computed:{isSearchMode:function(){return"Search"==this.selectedMode},isFeatureMode:function(){return"Featured"==this.selectedMode}}},i=s,c=(a("795e"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,"2288ec64",null),u=l.exports,d=a("5f5b"),h=(a("f9e3"),a("2dd8"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.movies,(function(t){return a("movie-block",{key:t,attrs:{featureMode:!0,shortPlot:!1,movieId:t}})})),1)},f=[],p=a("7033"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"bv-example-row movie-block"},[a("b-row",[a("b-col",{attrs:{cols:"4"}},["N/A"!=t.movieData.Poster?a("img",{staticClass:"poster-renderer",attrs:{src:t.movieData.Poster}}):a("div",{staticClass:"no-image-text"},[t._v("No Image")]),t.loading?a("div",{staticClass:"lds-dual-ring"}):t._e()]),a("b-col",{attrs:{cols:"8"}},[a("div",{staticClass:"movie-title"},[t._v(t._s(t.movieData.Title))]),t.featureMode?t._e():a("div",{staticClass:"meta-data"},[a("span",{staticClass:"release-date"},[t._v(t._s(t.movieData.Released))]),a("span",{staticClass:"runtime"},[t._v(t._s(t.movieData.Runtime))])]),a("div",[t._v(t._s(t._f("capitalize")(t.movieData.Type))+" | \r\n                "+t._s(t.movieData.Year)+" | \r\n                "+t._s(t._f("capitalize")(t.movieData.Genre))+" \r\n                "),"N/A"==t.movieData.Rated||t.featureMode?t._e():a("span",{staticClass:"rated"},[t._v("| "+t._s(t._f("capitalize")(t.movieData.Rated)))])]),a("span",{staticClass:"listed-data"},[t.featureMode?t._e():a("div",[a("span",{staticClass:"highlight-label"},[t._v("Director: ")]),t._v(" "+t._s(t._f("capitalize")(t.movieData.Director)))]),t.featureMode?t._e():a("div",[a("span",{staticClass:"highlight-label"},[t._v("Stars: ")]),t._v(t._s(t.movieData.Actors))]),a("div",[a("span",{staticClass:"highlight-label"},[t._v("Plot: ")]),a("br"),a("span",{staticClass:"less"},[t._v(t._s(t.movieData.lessPlot))]),t.moreShown?a("span",{staticClass:"more"},[t._v(t._s(t.movieData.morePlot))]):t._e(),t.isPlotBig?a("span",{staticClass:"show-more",on:{click:t.toggleMore}},[t._v(t._s(t.moreShown?"  (Show less)":"...(Show more)"))]):a("span",[t._v(t._s(t.movieData.Plot))])]),a("div",[a("span",{staticClass:"highlight-label"},[t._v("Awards: ")]),a("span",{staticClass:"award-text"},[t._v(t._s(t.movieData.Awards))])])])])],1)],1)],1)},g=[],b=(a("6b54"),a("bc3a")),_=a.n(b),w={name:"MovieBlock",components:{},props:{movieId:String,shortPlot:Boolean,featureMode:Boolean},data:function(){return{movieData:{},moreShown:!1,loading:!0}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},mounted:function(){this.getData()},computed:{isPlotBig:function(){return!!(this.movieData.Plot&&this.movieData.Plot.length>200)}},methods:{getData:function(){var t=this;this.loading=!0,_.a.get("http://www.omdbapi.com/?i="+this.movieId+this.getPlotType()+"&plot=full&apikey=PlzBanM3").then((function(e){t.movieData=e.data,t.movieData.Plot.length>200&&(t.movieData.lessPlot=t.movieData.Plot.slice(0,200),t.movieData.morePlot=t.movieData.Plot.slice(200,t.movieData.Plot.length-1)),t.loading=!1})).catch((function(){}))},getPlotType:function(){return this.shortPlot?"&plot=short":""},toggleMore:function(){this.moreShown=!this.moreShown}}},P=w,S=(a("9b27"),Object(c["a"])(P,m,g,!1,null,"20f16a83",null)),y=S.exports,M={name:"Featured",components:{MovieBlock:y},props:{},data:function(){return{movies:[]}},mounted:function(){this.movies=p.featuredMovies,this.$emit("featurePageLoaded")},methods:{},computed:{}},C=M,k=(a("d745"),Object(c["a"])(C,v,f,!1,null,"2e07857b",null)),x=k.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{attrs:{disabled:!t.searchString,variant:"outline-primary"},on:{click:function(e){return t.searchMovie()}}},[t._v("Search")])]},proxy:!0}])},[a("b-form-input",{attrs:{placeholder:"Enter movie title here"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1),a("b-form-checkbox",{staticClass:"mr-n2 search-option",attrs:{disabled:!t.searchString,switch:""},on:{change:t.searchMovie},model:{value:t.shortPlot,callback:function(e){t.shortPlot=e},expression:"shortPlot"}},[t._v("Shorten Plot\r\n    "),a("span",{staticClass:"sr-only"},[t._v("Switch")])]),t.result||t.errFeedback?a("div",{staticClass:"result"},[t.result?a("div"):t._e(),t._l(t.filteredIds,(function(e,o){return o<5?a("movie-block",{key:e,attrs:{shortPlot:t.shortPlot,movieId:e}}):t._e()}))],2):t._e(),t.errFeedback?a("div",{staticClass:"error"},[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(t.errFeedback))])],1):t._e()],1)},O=[],F=(a("ac6a"),{name:"Search",components:{MovieBlock:y},props:{},data:function(){return{searchString:"",result:{},errFeedback:"",shortPlot:!1,filteredIds:[]}},mounted:function(){this.$emit("searchPageLoaded")},methods:{searchMovie:function(){var t=this;this.filteredIds.splice(0,this.filteredIds.length),_.a.get(p.server+"/?s="+this.searchString+this.getPlotType()+p.apiKey).then((function(e){"False"==e.data.Response?t.errFeedback=e.data.Error:(t.errFeedback="",e.data.Search.slice(1,e.data.Search.length>=5?6:e.data.Search.length).forEach((function(e){t.filteredIds.push(e.imdbID)})),t.result=e.data)})).catch((function(){}))},onEnter:function(){this.searchString.trim()&&this.searchMovie()},getPlotType:function(){return this.shortPlot?"&plot=short":""},resetSearch:function(){this.searchString=""}},computed:{}}),j=F,B=(a("b1b9"),Object(c["a"])(j,D,O,!1,null,"69fb407e",null)),z=B.exports;o["default"].use(h["a"]);var E=new h["a"]({routes:[{path:"/",component:z},{path:"/search",component:z},{path:"/featured",component:x}]});o["default"].config.productionTip=!1,o["default"].use(d["a"]),o["default"].config.productionTip=!1,new o["default"]({router:E,render:function(t){return t(u)}}).$mount("#app")},7033:function(t){t.exports=JSON.parse('{"server":"http://www.omdbapi.com","apiKey":"&apiKey=6c3a2d45","featuredMovies":["tt0304141","tt0295297"]}')},"795e":function(t,e,a){"use strict";var o=a("0333"),r=a.n(o);r.a},"9b27":function(t,e,a){"use strict";var o=a("3e6e"),r=a.n(o);r.a},a803:function(t,e,a){},b1b9:function(t,e,a){"use strict";var o=a("ea4a"),r=a.n(o);r.a},d745:function(t,e,a){"use strict";var o=a("a803"),r=a.n(o);r.a},ea4a:function(t,e,a){}});
//# sourceMappingURL=app.450505c5.js.map