(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/seeker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"2f59":function(e,t,n){"use strict";var r=n("a044"),a=n.n(r);a.a},"54a1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);n("a3dd");var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Browse")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"browse"},[n("b-col",{staticClass:"filter-container flex-grow-0"},[n("FilterComponent")],1),n("b-col",{ref:"streamList",staticClass:"streams-container flex-grow-1"},[e.selectedGame?n("b-row",{staticClass:"game-filter p-2 m-2",attrs:{"align-h":"center"}},[n("i",[e._v("Viewing only streams for "+e._s(e.gameDisplayName(e.selectedGame)))]),n("b-btn",{staticClass:"ml-3",attrs:{variant:"outline-light",size:"sm"},on:{click:function(t){return e.changeGame(null)}}},[e._v("Clear")])],1):e._e(),n("b-row",{staticClass:"no-padding",attrs:{"align-h":"center","justify-content":"between"}},[e._l(e.visibleStreams,(function(t){return n("b-col",{key:t.id,staticClass:"stream-container"},[n("StreamCard",{attrs:{stream:t},on:{"select-game":e.changeGame}})],1)})),n("b-col",{staticClass:"stream-container",staticStyle:{width:"300px"}},[n("mugen-scroll",{ref:"scroll",attrs:{handler:e.loadNewStreams,"should-handle":!e.busy,"handle-on-mount":"","scroll-container":"streamList"}},[n("b-btn",{attrs:{block:"",disabled:this.busy},on:{click:e.loadNewStreams}},[e._v(e._s(e.loadButtonText))])],1)],1)],2)],1)],1)},c=[],u=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),l=n("2f62"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"},on:{mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[n("a",{attrs:{href:e.streamLink}},[n("b-img-lazy",{staticClass:"stream-thumbnail",attrs:{src:e.thumbnail}}),n("b-row",{directives:[{name:"show",rawName:"v-show",value:e.hover,expression:"hover"}],staticClass:"card-img-overlay image-overlay"},[n("div",{staticClass:"flex-grow-1"}),n("b-btn",{attrs:{pill:"",variant:"outline-light",size:"sm"},on:{click:function(t){return t.preventDefault(),e.ignoreStream(t)}}},[n("md-eye-off-icon")],1)],1),n("h6",{staticClass:"stream-title",attrs:{title:e.stream.title}},[e._v(e._s(e.stream.title))])],1),n("p",{staticClass:"stream-username"},[e._v(e._s(e.stream.user_name)+" - "+e._s(e.formattedViewers(e.stream.viewer_count))+" Viewers")]),n("a",{staticClass:"stream-game",attrs:{href:"#"},on:{click:function(t){return e.selectGame(e.stream.game_id)}}},[e._v(e._s(e.gameDisplayName(e.stream.game_id)))]),n("div",{staticClass:"stream-tags"},e._l(e.stream.tag_ids,(function(t){return n("b-badge",{key:t,attrs:{variant:"light"}},[e._v(e._s(e.getTagDisplayName(t)))])})),1)])},d=[];n("ac1f"),n("5319"),n("b0c0");function f(e){return null==e?null:e.localization_names["en-us"]}function g(e){return null==e?null:e.name}var p=n("8bcb");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={name:"StreamCard",components:{MdEyeOffIcon:p["a"]},props:["stream"],data:function(){return{hover:!1}},computed:h({},Object(l["c"])(["getGame","tagById"]),{streamLink:function(){return"https://twitch.tv/"+this.stream.user_name},thumbnail:function(){return this.stream.thumbnail_url.replace("{width}",1280).replace("{height}",780)}}),methods:h({},Object(l["d"])(["addIgnoredStream"]),{gameDisplayName:function(e){return g(this.getGame(e))||e},getTagDisplayName:function(e){return f(this.tagById(e))||e},ignoreStream:function(){this.addIgnoredStream(this.stream.user_id)},formattedViewers:function(e){if(e<1e3)return e;var t=Math.floor(e%1e3/100),n=Math.floor(e/1e3);return t<=0?n+"k":n+"."+t+"k"},selectGame:function(e){this.$emit("select-game",e)}})},v=y,w=(n("93f8"),n("2877")),O=Object(w["a"])(v,m,d,!1,null,"3e2f6368",null),_=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"h-100"},[n("b-row",{staticClass:"h-100"},[e.display?n("b-col",{staticClass:"h-100 outer-container"},[n("b-row",{staticClass:"w-100 mb-5"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Stream to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreStream(t)}},model:{value:e.streamName,callback:function(t){e.streamName=t},expression:"streamName"}}),n("b-row",e._l(e.ignoredStreams,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredStream(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.streamDisplayName(t)))])])})),1)],1),n("b-row",{staticClass:"w-100 mb-5"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Tag/language to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreTag(t)}},model:{value:e.tagName,callback:function(t){e.tagName=t},expression:"tagName"}}),n("b-row",e._l(e.ignoredTags,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredTag(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.tagDisplayName(t)))])])})),1)],1),n("b-row",{staticClass:"w-100 mb-5"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Game to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreGame(t)}},model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}}),n("b-row",e._l(e.ignoredGames,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredGame(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.gameDisplayName(t)))])])})),1)],1)],1):e._e(),n("b-col",{staticClass:"h-100 align-items-stretch",staticStyle:{"max-width":"40px"}},[n("b-btn",{attrs:{variant:"outline-light"},on:{click:e.toggleExpand}},[e._v(e._s(e.expandClose))])],1)],1)],1)},S=[];function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"FilterComponent",data:function(){return{streamName:"",tagName:"",gameName:"",display:!0}},computed:N({},Object(l["e"])(["ignoredTags","ignoredStreams","ignoredGames"]),{},Object(l["c"])(["tagById","getStreamName","getGame"]),{expandClose:function(){return this.display?"<<":">>"}}),methods:N({},Object(l["b"])(["ignoreStreamByName","ignoreTagByName","ignoreGameByName"]),{},Object(l["d"])(["removeIgnoredStream","removeIgnoredTag","removeIgnoredGame"]),{ignoreStream:function(){this.ignoreStreamByName(this.streamName),this.streamName=""},ignoreTag:function(){this.ignoreTagByName(this.tagName),this.tagName=""},ignoreGame:function(){this.ignoreGameByName(this.gameName),this.gameName=""},tagDisplayName:function(e){return f(this.tagById(e))||e},streamDisplayName:function(e){return this.getStreamName(e)},gameDisplayName:function(e){return g(this.getGame(e))||e},toggleExpand:function(){this.display=!this.display}})},x=k,C=(n("aa98"),Object(w["a"])(x,j,S,!1,null,"1a8c36f4",null)),I=C.exports,T=n("996c"),P=n.n(T);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return new Promise((function(t){return setTimeout(t,e)}))}var L={name:"Browse",components:{FilterComponent:I,StreamCard:_,MugenScroll:P.a},data:function(){return{busy:!1}},computed:B({},Object(l["c"])(["visibleStreams","getGame","hasTag","hasGame","selectedGame"]),{loadButtonText:function(){return this.busy?"Loading...":"Load more"},selectedGameId:function(){return(this.selectedGame||{}).id}}),methods:B({},Object(l["b"])(["loadStreams"]),{},Object(l["d"])(["selectGame"]),{changeGame:function(e){this.selectGame(e),this.loadNewStreams()},gameDisplayName:function(e){return g(e)},loadNewStreams:function(){var e=this;this.busy=!0,this.loadStreams(this.selectedGameId).then((function(){e.busy=!1})).then((function(){return E(500)})).then((function(){e.busy||e.$refs.scroll.checkInView()}))}})},M=L,R=(n("2f59"),Object(w["a"])(M,o,c,!1,null,null,null)),$=R.exports,z={components:{Browse:$}},V=z,F=(n("034f"),Object(w["a"])(V,i,s,!1,null,null,null)),J=F.exports,q=(n("a623"),n("7db0"),n("c740"),n("5db7"),n("caad"),n("d81d"),n("fb6a"),n("a434"),n("73d9"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("96cf"),n("2909")),U=n("bfa9"),A=(n("99af"),n("a15b"),n("bc3a")),H=n.n(A),K=d3ybwz3bjex3ldfi91nhl3l5mgzq9k,Q="https://api.twitch.tv/helix/",W=H.a.create({baseURL:Q,headers:{"Client-ID":K}});function X(e,t){return t.map((function(t){return e+"="+t})).join("&")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null!=e?"&after="+e:"",r=null!=t?"&game_id="+t:"";return W.get("/streams?first=50".concat(n).concat(r)).then((function(e){return e.data}))}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null!=t?"&after="+t:"",r="&"+X("tag_id",e);return W.get("/tags/streams?first=100".concat(r).concat(n)).then((function(e){return e.data}))}function ee(e){return W.get("/games?".concat(X("id",e))).then((function(e){return e.data}))}function te(e){return W.get("/users?login=".concat(e)).then((function(e){return e.data}))}var ne=100,re=new U["a"]({storage:window.localStorage,reducer:function(e){var t=e.tags,n=e.ignoredTags,r=e.ignoredStreams,a=e.games,i=e.streamNames,s=e.ignoredGames;return{tags:t.filter((function(e){return n.includes(e.tag_id)||e.is_auto})),ignoredTags:n,ignoredStreams:r,games:a.filter((function(e){return s.includes(e.id)})),streamNames:i.filter((function(e){return r.includes(e.id)})),ignoredGames:s}}});r["default"].use(l["a"]);var ae=new l["a"].Store({state:{cursor:null,selectedGameId:null,tags:[],streamNames:[],streams:[],games:[],ignoredTags:[],ignoredStreams:[],ignoredGames:[]},mutations:{updateCursor:function(e,t){e.cursor=t},addTags:function(e,t){t.forEach((function(t){return e.tags.push(t)}))},addStreams:function(e,t){t.forEach((function(t){t.tag_ids=t.tag_ids||[];var n=e.streams.findIndex((function(e){return e.user_id===t.user_id}));n>=0?Object.assign(e.streams[n],t):e.streams.push(t)}))},addGames:function(e,t){t.forEach((function(t){return e.games.push(t)}))},addIgnoredStream:function(e,t){e.ignoredStreams.includes(t)||e.ignoredStreams.push(t)},addIgnoredTag:function(e,t){e.ignoredTags.includes(t)||e.ignoredTags.push(t)},addIgnoredGame:function(e,t){e.ignoredGames.includes(t)||e.ignoredGames.push(t)},addStreamNameLook:function(e,t){var n,r=t.filter((function(t){t._;var n=t.id;return e.streamNames.findIndex((function(e){return e.id===n}))<0}));(n=e.streamNames).push.apply(n,Object(q["a"])(r))},removeIgnoredStream:function(e,t){var n=e.ignoredStreams.findIndex((function(e){return e===t}));n>=0&&e.ignoredStreams.splice(n,1)},removeIgnoredTag:function(e,t){var n=e.ignoredTags.findIndex((function(e){return e===t}));n>=0&&e.ignoredTags.splice(n,1)},removeIgnoredGame:function(e,t){var n=e.ignoredGames.findIndex((function(e){return e===t}));n>=0&&e.ignoredGames.splice(n,1)},selectGame:function(e,t){if(e.selectedGameId!==t){e.cursor=null;while(e.streams.length>0)e.streams.pop()}e.selectedGameId=t}},getters:{visibleStreams:function(e){return e.streams.filter((function(t){return e.ignoredTags.every((function(e){return!t.tag_ids.includes(e)}))&&e.ignoredStreams.every((function(e){return e!==t.user_id}))&&(null!=e.selectedGameId||e.ignoredGames.every((function(e){return e!==t.game_id})))}))},tagById:function(e){return function(t){return e.tags.find((function(e){return e.tag_id===t}))}},getGame:function(e){return function(t){return e.games.find((function(e){return e.id===t}))}},getStreamName:function(e){return function(t){return(e.streamNames.find((function(e){return e.id===t}))||{}).name||t}},hasTag:function(e){return function(t){return null!=e.tags.find((function(e){return e.tag_id===t}))}},hasGame:function(e){return function(t){return null!=e.games.find((function(e){return e.game_id===t}))}},selectedGame:function(e){return e.games.find((function(t){return t.id===e.selectedGameId}))}},actions:{loadStreams:function(e){var t,n,r,a,i,s,o,c,u,l,m=arguments;return regeneratorRuntime.async((function(d){while(1)switch(d.prev=d.next){case 0:return t=e.commit,n=e.state,r=e.dispatch,a=e.getters,i=m.length>1&&void 0!==m[1]?m[1]:null,t("selectGame",i),d.next=5,regeneratorRuntime.awrap(Y(n.cursor,i));case 5:s=d.sent,o=s.data,t("updateCursor",s.pagination.cursor),t("addStreams",o),c=o.map((function(e){return{name:e.user_name,id:e.user_id}})),t("addStreamNameLook",c),u=o.map((function(e){return e.game_id})).filter((function(e){return!a.hasGame(e)})),r("loadGames",u),l=Object(q["a"])(new Set(o.flatMap((function(e){return e.tag_ids})))).filter((function(e){return!a.hasTag(e)})),r("loadTags",l);case 15:case"end":return d.stop()}}))},loadTags:function(e,t){var n,r,a,i,s;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:n=e.commit,e.state,r=null,a=0;case 3:if(!(a*ne>=t.length)){o.next=6;break}return o.abrupt("return");case 6:return o.next=8,regeneratorRuntime.awrap(Z(t.slice(a*ne,ne),r));case 8:i=o.sent,s=i.data,r=i.pagination.cursor,n("addTags",s),a+=1,o.next=3;break;case 15:case"end":return o.stop()}}))},loadGames:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,regeneratorRuntime.awrap(ee(t));case 3:r=a.sent,n("addGames",r.data);case 5:case"end":return a.stop()}}))},ignoreStreamByName:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,regeneratorRuntime.awrap(te(t));case 3:r=a.sent,r.data.length>0&&n("addIgnoredStream",r.data[0].id);case 5:case"end":return a.stop()}}))},ignoreTagByName:function(e,t){var n=e.state,r=e.commit,a=n.tags.find((function(e){return f(e)===t}));null!=a&&r("addIgnoredTag",a.tag_id)},ignoreGameByName:function(e,t){var n=e.state,r=e.commit,a=n.games.find((function(e){return g(e)===t}));null!=a&&r("addIgnoredGame",a.id)}},modules:{},plugins:[re.plugin]});r["default"].config.productionTip=!1,new r["default"]({store:ae,render:function(e){return e(J)}}).$mount("#app")},"83ee":function(e,t,n){},"85ec":function(e,t,n){},"93f8":function(e,t,n){"use strict";var r=n("54a1"),a=n.n(r);a.a},a044:function(e,t,n){},aa98:function(e,t,n){"use strict";var r=n("83ee"),a=n.n(r);a.a}});