(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/seeker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},2924:function(e,t,n){},"2f59":function(e,t,n){"use strict";var r=n("a044"),a=n.n(r);a.a},"3f4b":function(e,t,n){},"457c":function(e,t,n){"use strict";var r=n("3f4b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);n("a3dd");var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Browse")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"browse"},[n("b-col",{staticClass:"filter-container flex-grow-0"},[n("FilterComponent")],1),n("b-col",{ref:"streamList",staticClass:"streams-container flex-grow-1"},[n("b-row",{staticClass:"no-padding",attrs:{"align-h":"center","justify-content":"between"}},[e._l(e.visibleStreams,(function(e){return n("b-col",{key:e.id,staticClass:"stream-container"},[n("StreamCard",{attrs:{stream:e}})],1)})),n("b-col",{staticClass:"stream-container"},[n("mugen-scroll",{attrs:{handler:e.loadNewStreams,"should-handle":!e.busy,"scroll-container":"streamList"}},[e._v(" loading... ")])],1)],2)],1)],1)},c=[],u=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"},on:{mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[n("a",{attrs:{href:e.streamLink}},[n("b-img-lazy",{staticClass:"stream-thumbnail",attrs:{src:e.thumbnail}}),n("b-row",{directives:[{name:"show",rawName:"v-show",value:e.hover,expression:"hover"}],staticClass:"card-img-overlay image-overlay"},[n("div",{staticClass:"flex-grow-1"}),n("b-btn",{attrs:{pill:"",variant:"outline-light",size:"sm"},on:{click:function(t){return t.preventDefault(),e.ignoreStream(t)}}},[n("md-eye-off-icon")],1)],1),n("h6",{staticClass:"stream-title",attrs:{title:e.stream.title}},[e._v(e._s(e.stream.title))])],1),n("p",{staticClass:"stream-username"},[e._v(e._s(e.stream.user_name)+" - "+e._s(e.formattedViewers(e.stream.viewer_count))+" Viewers")]),n("p",{staticClass:"stream-game"},[e._v(e._s(e.gameDisplayName(e.stream.game_id)))]),n("div",{staticClass:"stream-tags"},e._l(e.stream.tag_ids,(function(t){return n("b-badge",{key:t,attrs:{variant:"light"}},[e._v(e._s(e.getTagDisplayName(t)))])})),1)])},d=[];n("ac1f"),n("5319"),n("b0c0");function f(e){return null==e?null:e.localization_names["en-us"]}function g(e){return null==e?null:e.name}var p=n("8bcb");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"StreamCard",components:{MdEyeOffIcon:p["a"]},props:["stream"],data:function(){return{hover:!1}},computed:h({},Object(l["c"])(["getGame","tagById"]),{streamLink:function(){return"https://twitch.tv/"+this.stream.user_name},thumbnail:function(){return this.stream.thumbnail_url.replace("{width}",1280).replace("{height}",780)}}),methods:h({},Object(l["d"])(["addIgnoredStream"]),{gameDisplayName:function(e){return g(this.getGame(e))||e},getTagDisplayName:function(e){return f(this.tagById(e))||e},ignoreStream:function(){this.addIgnoredStream(this.stream.user_id)},formattedViewers:function(e){if(e<1e3)return e;var t=Math.floor(e%1e3/100),n=Math.floor(e/1e3);return t<=0?n+"k":n+"."+t+"k"}})},y=v,O=(n("a44d"),n("2877")),w=Object(O["a"])(y,m,d,!1,null,"7634df60",null),_=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"h-100"},[n("b-row",{staticClass:"h-100"},[e.display?n("b-col",{staticClass:"h-100 outer-container",staticStyle:{"overflow-y":"scroll"}},[n("div",{staticClass:"filter-third"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Stream to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreStream(t)}},model:{value:e.streamName,callback:function(t){e.streamName=t},expression:"streamName"}}),n("b-row",e._l(e.ignoredStreams,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredStream(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.streamDisplayName(t)))])])})),1)],1),n("div",{staticClass:"filter-third"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Tag/language to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreTag(t)}},model:{value:e.tagName,callback:function(t){e.tagName=t},expression:"tagName"}}),n("b-row",e._l(e.ignoredTags,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredTag(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.tagDisplayName(t)))])])})),1)],1),n("div",{staticClass:"filter-third"},[n("b-input",{staticClass:"col mb-2",attrs:{type:"text",placeholder:"Game to ignore"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ignoreGame(t)}},model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}}),n("b-row",e._l(e.ignoredGames,(function(t){return n("b-badge",{key:t,on:{click:function(n){return e.removeIgnoredGame(t)}}},[n("span",{staticClass:"remove-on-hover"},[e._v(e._s(e.gameDisplayName(t)))])])})),1)],1)]):e._e(),n("b-col",{staticClass:"h-100 align-items-stretch",staticStyle:{"max-width":"40px"}},[n("b-btn",{attrs:{variant:"outline-light"},on:{click:e.toggleExpand}},[e._v(e._s(e.expandClose))])],1)],1)],1)},S=[];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"FilterComponent",data:function(){return{streamName:"",tagName:"",gameName:"",display:!0}},computed:x({},Object(l["e"])(["ignoredTags","ignoredStreams","ignoredGames"]),{},Object(l["c"])(["tagById","getStreamName","getGame"]),{expandClose:function(){return this.display?"<<":">>"}}),methods:x({},Object(l["b"])(["ignoreStreamByName","ignoreTagByName","ignoreGameByName"]),{},Object(l["d"])(["removeIgnoredStream","removeIgnoredTag","removeIgnoredGame"]),{ignoreStream:function(){this.ignoreStreamByName(this.streamName),this.streamName=""},ignoreTag:function(){this.ignoreTagByName(this.tagName),this.tagName=""},ignoreGame:function(){this.ignoreGameByName(this.gameName),this.gameName=""},tagDisplayName:function(e){return f(this.tagById(e))||e},streamDisplayName:function(e){return this.getStreamName(e)},gameDisplayName:function(e){return g(this.getGame(e))||e},toggleExpand:function(){this.display=!this.display}})},C=k,G=(n("457c"),Object(O["a"])(C,j,S,!1,null,"0c093e7a",null)),T=G.exports,P=n("996c"),I=n.n(P);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={name:"Browse",components:{FilterComponent:T,StreamCard:_,MugenScroll:I.a},data:function(){return{busy:!0}},computed:E({},Object(l["c"])(["visibleStreams","getGame","hasTag","hasGame"])),mounted:function(){var e=this;this.loadStreams().then((function(){e.busy=!1}))},methods:E({},Object(l["b"])(["loadStreams"]),{loadNewStreams:function(){var e=this;this.busy=!0,this.loadStreams().then((function(){e.busy=!1}))}})},M=B,R=(n("2f59"),Object(O["a"])(M,s,c,!1,null,null,null)),L=R.exports,z={components:{Browse:L}},$=z,F=(n("034f"),Object(O["a"])($,i,o,!1,null,null,null)),V=F.exports,J=(n("a623"),n("7db0"),n("c740"),n("5db7"),n("caad"),n("d81d"),n("fb6a"),n("a434"),n("73d9"),n("d3b7"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("96cf"),n("2909")),q=n("bfa9"),U=(n("99af"),n("a15b"),n("bc3a")),A=n.n(U),H="d3ybwz3bjex3ldfi91nhl3l5mgzq9k",K="https://api.twitch.tv/helix/",Q=A.a.create({baseURL:K,headers:{"Client-ID":H}});function W(e,t){return t.map((function(t){return e+"="+t})).join("&")}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!=e?Q.get("/streams?first=50&after=".concat(e)).then((function(e){return e.data})):Q.get("/streams?first=50").then((function(e){return e.data}))}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=t?Q.get("/tags/streams?first=100&".concat(W("tag_id",e),"&after=").concat(t)).then((function(e){return e.data})):Q.get("/tags/streams?first=100&".concat(W("tag_id",e))).then((function(e){return e.data}))}function Z(e){return Q.get("/games?".concat(W("id",e))).then((function(e){return e.data}))}function ee(e){return Q.get("/users?login=".concat(e)).then((function(e){return e.data}))}var te=100,ne=new q["a"]({storage:window.localStorage,reducer:function(e){var t=e.tags,n=e.ignoredTags,r=e.ignoredStreams,a=e.games,i=e.streamNames,o=e.ignoredGames;return{tags:t.filter((function(e){return n.includes(e.tag_id)||e.is_auto})),ignoredTags:n,ignoredStreams:r,games:a.filter((function(e){return o.includes(e.id)})),streamNames:i.filter((function(e){return r.includes(e.id)})),ignoredGames:o}}});r["default"].use(l["a"]);var re=new l["a"].Store({state:{cursor:null,tags:[],streamNames:[],streams:[],games:[],ignoredTags:[],ignoredStreams:[],ignoredGames:[]},mutations:{updateCursor:function(e,t){e.cursor=t},addTags:function(e,t){t.forEach((function(t){return e.tags.push(t)}))},addStreams:function(e,t){t.forEach((function(t){t.tag_ids=t.tag_ids||[];var n=e.streams.findIndex((function(e){return e.user_id===t.user_id}));n>=0?Object.assign(e.streams[n],t):e.streams.push(t)}))},addGames:function(e,t){t.forEach((function(t){return e.games.push(t)}))},addIgnoredStream:function(e,t){e.ignoredStreams.includes(t)||e.ignoredStreams.push(t)},addIgnoredTag:function(e,t){e.ignoredTags.includes(t)||e.ignoredTags.push(t)},addIgnoredGame:function(e,t){e.ignoredGames.includes(t)||e.ignoredGames.push(t)},addStreamNameLook:function(e,t){var n,r=t.filter((function(t){t._;var n=t.id;return e.streamNames.findIndex((function(e){return e.id===n}))<0}));(n=e.streamNames).push.apply(n,Object(J["a"])(r))},removeIgnoredStream:function(e,t){var n=e.ignoredStreams.findIndex((function(e){return e===t}));n>=0&&e.ignoredStreams.splice(n,1)},removeIgnoredTag:function(e,t){var n=e.ignoredTags.findIndex((function(e){return e===t}));n>=0&&e.ignoredTags.splice(n,1)},removeIgnoredGame:function(e,t){var n=e.ignoredGames.findIndex((function(e){return e===t}));n>=0&&e.ignoredGames.splice(n,1)}},getters:{visibleStreams:function(e){return e.streams.filter((function(t){return e.ignoredTags.every((function(e){return!t.tag_ids.includes(e)}))&&e.ignoredStreams.every((function(e){return e!==t.user_id}))&&e.ignoredGames.every((function(e){return e!==t.game_id}))}))},tagById:function(e){return function(t){return e.tags.find((function(e){return e.tag_id===t}))}},getGame:function(e){return function(t){return e.games.find((function(e){return e.id===t}))}},getStreamName:function(e){return function(t){return(e.streamNames.find((function(e){return e.id===t}))||{}).name||t}},hasTag:function(e){return function(t){return null!=e.tags.find((function(e){return e.tag_id===t}))}},hasGame:function(e){return function(t){return null!=e.games.find((function(e){return e.game_id===t}))}}},actions:{loadStreams:function(e){var t,n,r,a,i,o,s,c,u;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:return t=e.commit,n=e.state,r=e.dispatch,a=e.getters,l.next=3,regeneratorRuntime.awrap(X(n.cursor));case 3:i=l.sent,o=i.data,t("updateCursor",i.pagination.cursor),t("addStreams",o),s=o.map((function(e){return{name:e.user_name,id:e.user_id}})),t("addStreamNameLook",s),c=o.map((function(e){return e.game_id})).filter((function(e){return!a.hasGame(e)})),r("loadGames",c),u=Object(J["a"])(new Set(o.flatMap((function(e){return e.tag_ids})))).filter((function(e){return!a.hasTag(e)})),r("loadTags",u);case 13:case"end":return l.stop()}}))},loadTags:function(e,t){var n,r,a,i,o;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:n=e.commit,e.state,r=null,a=0;case 3:if(!(a*te>=t.length)){s.next=6;break}return s.abrupt("return");case 6:return s.next=8,regeneratorRuntime.awrap(Y(t.slice(a*te,te),r));case 8:i=s.sent,o=i.data,r=i.pagination.cursor,n("addTags",o),a+=1,s.next=3;break;case 15:case"end":return s.stop()}}))},loadGames:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,regeneratorRuntime.awrap(Z(t));case 3:r=a.sent,n("addGames",r.data);case 5:case"end":return a.stop()}}))},ignoreStreamByName:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,regeneratorRuntime.awrap(ee(t));case 3:r=a.sent,r.data.length>0&&n("addIgnoredStream",r.data[0].id);case 5:case"end":return a.stop()}}))},ignoreTagByName:function(e,t){var n=e.state,r=e.commit,a=n.tags.find((function(e){return f(e)===t}));null!=a&&r("addIgnoredTag",a.tag_id)},ignoreGameByName:function(e,t){var n=e.state,r=e.commit,a=n.games.find((function(e){return g(e)===t}));null!=a&&r("addIgnoredGame",a.id)}},modules:{},plugins:[ne.plugin]});r["default"].config.productionTip=!1,new r["default"]({store:re,render:function(e){return e(V)}}).$mount("#app")},"85ec":function(e,t,n){},a044:function(e,t,n){},a44d:function(e,t,n){"use strict";var r=n("2924"),a=n.n(r);a.a}});