(function(e){function t(t){for(var a,s,o=t[0],u=t[1],c=t[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/seeker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0e34":function(e,t,n){},"2f59":function(e,t,n){"use strict";n("a044")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(r["a"]);n("a3dd");var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isAuthenticated?[n("Browse")]:[n("Login")]],2)},s=[],o=n("5530"),u=(n("a15b"),n("d81d"),n("99af"),n("bc3a")),c=n.n(u),l="d3ybwz3bjex3ldfi91nhl3l5mgzq9k",m="https://blog.eternalwings.de/seeker/",d="user:read:email",f="https://api.twitch.tv/helix/",g=c.a.create({baseURL:f,headers:{"Client-ID":l}}),p=c.a.create({baseURL:"https://id.twitch.tv/"});function h(e,t){return t.map((function(t){return e+"="+t})).join("&")}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null!=e?"&after="+e:"",a=null!=t?"&game_id="+t:"";return g.get("/streams?first=50".concat(n).concat(a)).then((function(e){return e.data}))}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null!=t?"&after="+t:"",a="&"+h("tag_id",e);return g.get("/tags/streams?first=100".concat(a).concat(n)).then((function(e){return e.data}))}function y(e){return g.get("/games?".concat(h("id",e))).then((function(e){return e.data}))}function _(e){return g.get("/users?login=".concat(e)).then((function(e){return e.data}))}function w(e){return p.get("/oauth2/validate",{headers:{Authorization:"OAuth ".concat(e)}}).then((function(e){return e.data}))}function k(e){g.defaults.headers.common["Authorization"]="Bearer "+e}function G(){window.location="https://id.twitch.tv/oauth2/authorize?client_id=".concat(l,"&redirect_uri=").concat(m,"&response_type=token&scope=").concat(d)}var N=n("2f62"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"browse"},[n("FilterComponent"),n("b-col",{ref:"streamList",staticClass:"streams-container flex-grow-2"},[e.selectedGame?n("b-row",{staticClass:"game-filter p-2 m-2",attrs:{"align-h":"center"}},[n("i",[e._v("Viewing only streams for "+e._s(e.gameDisplayName(e.selectedGame)))]),n("b-btn",{staticClass:"ml-3",attrs:{variant:"outline-light",size:"sm"},on:{click:function(t){return e.changeGame(null)}}},[e._v("Clear")])],1):e._e(),n("b-row",{staticClass:"no-padding",attrs:{"align-h":"center","justify-content":"between"}},[e._l(e.visibleStreams,(function(t){return n("b-col",{key:t.id,staticClass:"stream-container"},[n("StreamCard",{attrs:{stream:t},on:{"select-game":e.changeGame}})],1)})),n("b-col",{staticClass:"stream-container",staticStyle:{width:"300px"}},[n("mugen-scroll",{ref:"scroll",attrs:{handler:e.loadNewStreams,"should-handle":!e.busy,"handle-on-mount":"","scroll-container":"streamList"}},[n("b-btn",{attrs:{block:"",disabled:this.busy},on:{click:e.loadNewStreams}},[e._v(e._s(e.loadButtonText))])],1)],1)],2)],1)],1)},S=[],O=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"},on:{mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[n("a",{attrs:{href:e.streamLink}},[n("b-img-lazy",{staticClass:"stream-thumbnail",attrs:{src:e.thumbnail}}),n("b-row",{directives:[{name:"show",rawName:"v-show",value:e.hover,expression:"hover"}],staticClass:"card-img-overlay image-overlay"},[n("div",{staticClass:"flex-grow-1"}),n("b-btn",{attrs:{pill:"",variant:"outline-light",size:"sm"},on:{click:function(t){return t.preventDefault(),e.ignoreStream.apply(null,arguments)}}},[n("md-eye-off-icon")],1)],1),n("h6",{staticClass:"stream-title",attrs:{title:e.stream.title}},[e._v(e._s(e.stream.title))])],1),n("p",{staticClass:"stream-username"},[e._v(e._s(e.stream.user_name)+" - "+e._s(e.formattedViewers(e.stream.viewer_count))+" Viewers")]),n("a",{staticClass:"stream-game",attrs:{href:"#"},on:{click:function(t){return e.selectGame(e.stream.game_id)}}},[e._v(e._s(e.gameDisplayName(e.stream.game_id)))]),n("div",{staticClass:"stream-tags"},e._l(e.availableTags,(function(t){return n("b-badge",{key:t,attrs:{variant:"light"}},[e._v(e._s(e.getTagDisplayName(t)))])})),1)])}),j=[];n("ac1f"),n("5319"),n("4de4"),n("b0c0");function T(e){return null==e?null:e.localization_names["en-us"]}function C(e){return null==e?null:e.name}var I=n("8bcb"),D={name:"StreamCard",components:{MdEyeOffIcon:I["a"]},props:["stream"],data:function(){return{hover:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(N["c"])(["getGame","tagById","hasTag"])),{},{streamLink:function(){return"https://twitch.tv/"+this.stream.user_name},thumbnail:function(){return this.stream.thumbnail_url.replace("{width}",1280).replace("{height}",780)},availableTags:function(){var e=this;return this.stream.tag_ids.filter((function(t){return e.hasTag(t)}))}}),methods:Object(o["a"])(Object(o["a"])({},Object(N["d"])(["addIgnoredStream"])),{},{gameDisplayName:function(e){return C(this.getGame(e))||e},getTagDisplayName:function(e){return T(this.tagById(e))||e},ignoreStream:function(){this.addIgnoredStream(this.stream.user_id)},formattedViewers:function(e){if(e<1e3)return e;var t=Math.floor(e%1e3/100),n=Math.floor(e/1e3);return t<=0?n+"k":n+"."+t+"k"},selectGame:function(e){this.$emit("select-game",e)}})},B=D,E=(n("b08a"),n("2877")),L=Object(E["a"])(B,O,j,!1,null,"7efa19b7",null),R=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"h-100 p-2 pl-3 filter-container",class:{"small-container":!e.display}},[n("b-row",{staticClass:"mb-1 px-3"},[n("b-btn",{staticClass:"w-100",attrs:{variant:"outline-light"},on:{click:e.toggleExpand}},[e._v(e._s(e.expandClose))])],1),e.display?n("b-col",{staticClass:"outer-container p-0"},[n("b-col",{staticClass:"w-100 mb-5 p-0"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Stream to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreStream.apply(null,arguments)}},model:{value:e.streamName,callback:function(t){e.streamName=t},expression:"streamName"}}),n("b-row",{staticClass:"px-3"},e._l(e.ignoredStreams,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredStream(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.streamDisplayName(t)))])])})),1)],1),n("b-col",{staticClass:"w-100 mb-5 p-0"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Tag/language to ignore",list:"tagList",autocomplete:"off"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreTag.apply(null,arguments)}},model:{value:e.tagName,callback:function(t){e.tagName=t},expression:"tagName"}}),n("datalist",{attrs:{id:"tagList"}},[e._l(e.allTags,(function(t){return[n("option",{domProps:{value:e.tagDisplayName(t)}})]}))],2),n("b-row",{staticClass:"px-3"},e._l(e.ignoredTags,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredTag(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.tagDisplayName(t)))])])})),1)],1),n("b-col",{staticClass:"w-100 mb-5 p-0"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Game to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreGame.apply(null,arguments)}},model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}}),n("b-checkbox",{attrs:{checked:e.ignoreNoGame},on:{change:function(t){return e.ignoreStreamsWithoutGame(t)}}},[e._v("Ignore streams without category")]),n("b-row",{staticClass:"px-3"},e._l(e.ignoredGames,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredGame(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.gameDisplayName(t)))])])})),1)],1)],1):e._e()],1)},M=[],z={name:"FilterComponent",data:function(){return{streamName:"",tagName:"",gameName:"",display:!0}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(N["e"])(["ignoredTags","ignoredStreams","ignoredGames","ignoreNoGame"])),Object(N["c"])(["tagById","getStreamName","getGame","allTags"])),{},{expandClose:function(){return this.display?"<<":">>"}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(N["b"])(["ignoreStreamByName","ignoreTagByName","ignoreGameByName"])),Object(N["d"])(["removeIgnoredStream","removeIgnoredTag","removeIgnoredGame","ignoreStreamsWithoutGame"])),{},{ignoreStream:function(){this.ignoreStreamByName(this.streamName),this.streamName=""},ignoreTag:function(){this.ignoreTagByName(this.tagName),this.tagName=""},ignoreGame:function(){this.ignoreGameByName(this.gameName),this.gameName=""},tagDisplayName:function(e){return T(this.tagById(e))||e},streamDisplayName:function(e){return this.getStreamName(e)},gameDisplayName:function(e){return C(this.getGame(e))||e},toggleExpand:function(){this.display=!this.display}})},P=z,$=(n("63ea"),Object(E["a"])(P,A,M,!1,null,"39a16aa6",null)),U=$.exports,V=n("996c"),F=n.n(V);function W(e){return new Promise((function(t){return setTimeout(t,e)}))}var J={name:"Browse",components:{FilterComponent:U,StreamCard:R,MugenScroll:F.a},data:function(){return{busy:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(N["c"])(["visibleStreams","getGame","hasTag","hasGame","selectedGame"])),{},{loadButtonText:function(){return this.busy?"Loading...":"Load more"},selectedGameId:function(){return(this.selectedGame||{}).id}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(N["b"])(["loadStreams"])),Object(N["d"])(["selectGame"])),{},{changeGame:function(e){this.selectGame(e),this.loadNewStreams()},gameDisplayName:function(e){return C(e)},loadNewStreams:function(){var e=this;this.busy=!0,this.loadStreams(this.selectedGameId).then((function(){e.busy=!1})).then((function(){return W(500)})).then((function(){e.busy||e.$refs.scroll.checkInView()}))}})},q=J,H=(n("2f59"),Object(E["a"])(q,x,S,!1,null,null,null)),K=H.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},X=[];n("1276"),n("159b");function Y(e){var t=e.substr(1).split("&"),n=t.map((function(e){return e.split("=")})),a={};return n.forEach((function(e){return a[e[0]]=e[1]})),a}var Z={name:"Login",methods:Object(o["a"])({},Object(N["b"])(["doAuth"])),mounted:function(){var e=document.location.hash;if(e.length>0){var t=Y(e);if(!t.access_token)throw new Error("No access token present.");if("bearer"!==t.token_type)throw new Error("got an invalid token type.");this.doAuth(t.access_token).then((function(){window.location.hash=""}))}else G()}},ee=Z,te=Object(E["a"])(ee,Q,X,!1,null,"34692d36",null),ne=te.exports,ae={components:{Browse:K,Login:ne},computed:Object(o["a"])({},Object(N["c"])(["isAuthenticated","userToken"])),beforeMount:function(){this.isAuthenticated&&k(this.userToken)}},re=ae,ie=(n("034f"),Object(E["a"])(re,i,s,!1,null,null,null)),se=ie.exports,oe=n("1da1"),ue=n("2909"),ce=(n("96cf"),n("caad"),n("2532"),n("c740"),n("a434"),n("7db0"),n("6062"),n("3ca3"),n("ddb0"),n("5db7"),n("73d9"),n("fb6a"),n("bfa9")),le=100,me=new ce["a"]({storage:window.localStorage,reducer:function(e){var t=e.user,n=e.tags,a=e.ignoredTags,r=e.ignoredStreams,i=e.games,s=e.streamNames,o=e.ignoredGames,u=e.ignoreNoGame;return{user:t,tags:n.filter((function(e){return a.includes(e.tag_id)||e.is_auto})),ignoredTags:a,ignoredStreams:r,games:i.filter((function(e){return o.includes(e.id)})),streamNames:s.filter((function(e){return r.includes(e.id)})),ignoredGames:o,ignoreNoGame:u}}});a["default"].use(N["a"]);var de=new N["a"].Store({state:{user:null,cursor:null,selectedGameId:null,tags:[],streamNames:[],streams:[],games:[],ignoredTags:[],ignoredStreams:[],ignoredGames:[],ignoreNoGame:!1},mutations:{updateCursor:function(e,t){e.cursor=t},addTags:function(e,t){t.forEach((function(t){return e.tags.push(t)}))},addStreams:function(e,t){t.forEach((function(t){t.tag_ids=t.tag_ids||[];var n=e.streams.findIndex((function(e){return e.user_id===t.user_id}));n>=0?Object.assign(e.streams[n],t):e.streams.push(t)}))},addGames:function(e,t){t.forEach((function(t){return e.games.push(t)}))},addIgnoredStream:function(e,t){e.ignoredStreams.includes(t)||e.ignoredStreams.push(t)},addIgnoredTag:function(e,t){e.ignoredTags.includes(t)||e.ignoredTags.push(t)},addIgnoredGame:function(e,t){e.ignoredGames.includes(t)||e.ignoredGames.push(t)},addStreamNameLook:function(e,t){var n,a=t.filter((function(t){t._;var n=t.id;return e.streamNames.findIndex((function(e){return e.id===n}))<0}));(n=e.streamNames).push.apply(n,Object(ue["a"])(a))},removeIgnoredStream:function(e,t){var n=e.ignoredStreams.findIndex((function(e){return e===t}));n>=0&&e.ignoredStreams.splice(n,1)},removeIgnoredTag:function(e,t){var n=e.ignoredTags.findIndex((function(e){return e===t}));n>=0&&e.ignoredTags.splice(n,1)},removeIgnoredGame:function(e,t){var n=e.ignoredGames.findIndex((function(e){return e===t}));n>=0&&e.ignoredGames.splice(n,1)},selectGame:function(e,t){if(e.selectedGameId!==t){e.cursor=null;while(e.streams.length>0)e.streams.pop()}e.selectedGameId=t},ignoreStreamsWithoutGame:function(e,t){e.ignoreNoGame=t},updateUser:function(e,t){var n=t.userData,a=t.tokenData;e.user={expiry:a.expiry,token:a.token,data:n}},logoutUser:function(e){e.user=null}},getters:{visibleStreams:function(e){return e.streams.filter((function(t){return e.ignoredTags.every((function(e){return!t.tag_ids.includes(e)}))&&e.ignoredStreams.every((function(e){return e!==t.user_id}))&&(!e.ignoreNoGame||null!=t.game_id&&t.game_id.length>0)&&(null!=e.selectedGameId||e.ignoredGames.every((function(e){return e!==t.game_id})))}))},tagById:function(e){return function(t){return e.tags.find((function(e){return e.tag_id===t}))}},getGame:function(e){return function(t){return e.games.find((function(e){return e.id===t}))}},getStreamName:function(e){return function(t){return(e.streamNames.find((function(e){return e.id===t}))||{}).name||t}},hasTag:function(e){return function(t){return null!=e.tags.find((function(e){return e.tag_id===t}))}},hasGame:function(e){return function(t){return null!=e.games.find((function(e){return e.game_id===t}))}},allTags:function(e){return e.tags.map((function(e){return e.tag_id}))},selectedGame:function(e){return e.games.find((function(t){return t.id===e.selectedGameId}))},userToken:function(e){return e.user.token},isAuthenticated:function(e){var t=e.user;if(!t)return!1;var n=t.expiry;return n-Date.now()>=0}},actions:{loadStreams:function(e){var t=arguments;return Object(oe["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s,o,u,c,l,m,d,f,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,i=e.dispatch,s=e.getters,o=t.length>1&&void 0!==t[1]?t[1]:null,a("selectGame",o),n.next=5,b(r.cursor,o);case 5:return u=n.sent,c=u.data,a("updateCursor",u.pagination.cursor),a("addStreams",c),l=c.map((function(e){return{name:e.user_name,id:e.user_id}})),a("addStreamNameLook",l),m=c.map((function(e){return e.game_id})).filter((function(e){return!s.hasGame(e)})),i("loadGames",m),d=Object(ue["a"])(new Set(c.flatMap((function(e){return e.tag_ids})))).filter((function(e){return!s.hasTag(e)})),n.next=16,i("loadTags",d);case 16:f=d.filter((function(e){return!s.hasTag(e)})),g=f.map((function(e){var t=c.find((function(t){return t.tag_ids.includes(e)}));return{stream:t.id,tag:e}})),i("loadStreamTags",g);case 19:case"end":return n.stop()}}),n)})))()},loadTags:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,e.state,r=null,i=0;case 3:if(!(i*le>=t.length)){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,v(t.slice(i*le,le),r);case 8:s=n.sent,o=s.data,r=s.pagination.cursor,a("addTags",o),i+=1,n.next=3;break;case 15:case"end":return n.stop()}}),n)})))()},loadStreamTags:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit,e.state;case 1:case"end":return t.stop()}}),t)})))()},loadGames:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,y(t);case 3:r=n.sent,a("addGames",r.data);case 5:case"end":return n.stop()}}),n)})))()},ignoreStreamByName:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,_(t);case 3:r=n.sent,r.data.length>0&&a("addIgnoredStream",r.data[0].id);case 5:case"end":return n.stop()}}),n)})))()},ignoreTagByName:function(e,t){var n=e.state,a=e.commit,r=n.tags.find((function(e){return T(e)===t}));null!=r&&a("addIgnoredTag",r.tag_id)},ignoreGameByName:function(e,t){var n=e.state,a=e.commit,r=n.games.find((function(e){return C(e)===t}));null!=r&&a("addIgnoredGame",r.id)},doAuth:function(e,t){return Object(oe["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,a=e.commit,n.prev=1,n.next=4,w(t);case 4:r=n.sent,i={id:r.user_id,name:r.login},s={expiry:Date.now()+r.expires_in,token:t},k(t),a("updateUser",{userData:i,tokenData:s}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a("logoutUser");case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},modules:{},plugins:[me.plugin]});a["default"].config.productionTip=!1,new a["default"]({store:de,render:function(e){return e(se)}}).$mount("#app")},"63ea":function(e,t,n){"use strict";n("0e34")},"85ec":function(e,t,n){},a044:function(e,t,n){},b08a:function(e,t,n){"use strict";n("c79e")},c79e:function(e,t,n){}});