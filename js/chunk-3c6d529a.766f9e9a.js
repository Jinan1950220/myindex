(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c6d529a"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},2737:function(t,e,r){},"61c2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"setting-container"},[r("button",{on:{click:t.hTestEventBus}},[t._v("测试")]),r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:"/"}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("个人设置")])],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form",{attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"编号："}},[t._v("100")]),r("el-form-item",{attrs:{label:"手机："}},[t._v(t._s(t.userInfo.mobile))]),r("el-form-item",{attrs:{label:"媒体名称："}},[r("el-input",{model:{value:t.userInfo.name,callback:function(e){t.$set(t.userInfo,"name",e)},expression:"userInfo.name"}})],1),r("el-form-item",{attrs:{label:"媒体简介："}},[r("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.userInfo.intro,callback:function(e){t.$set(t.userInfo,"intro",e)},expression:"userInfo.intro"}})],1),r("el-form-item",{attrs:{label:"联系邮箱："}},[r("el-input",{model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.hSave}},[t._v("保存设置")])],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","http-request":t.uploadPhoto,"show-file-list":!1}},[t.userInfo.photo?r("img",{staticClass:"avatar",attrs:{src:t.userInfo.photo}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),r("p",{staticClass:"edit-photo"},[t._v("修改头像")])],1)],1)],1)],1)},o=[],a=(r("b0c0"),r("96cf"),r("1da1")),i=r("663f"),c=r("c24f"),u={name:"my-setting",data:function(){return{userInfo:{name:"test",intro:"info",email:"info@qq.com"},imageUrl:null}},created:function(){this.loadUserInfo()},methods:{loadUserInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:r=e.sent,t.userInfo=r.data.data;case 4:case"end":return e.stop()}}),e)})))()},hSave:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["b"])({name:t.userInfo.name,intro:t.userInfo.intro,email:t.userInfo.email});case 3:t.$message.success("修改成功"),t.$eventBus.$emit("update_user_name",t.userInfo.name),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$message.error("修改失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},uploadPhoto:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.dir(t),n=t.file,o=new FormData,o.append("photo",n),r.next=7,Object(c["a"])(o);case 7:a=r.sent,console.log(a),e.$message.success("头像上传成功"),e.userInfo.photo=a.data.data.photo,e.$eventBus.$emit("update_user_photo",e.userInfo.photo),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](0),e.$message.error("头像上传失败");case 17:case"end":return r.stop()}}),r,null,[[0,14]])})))()},hTestEventBus:function(){console.log("事件总线",this.$eventBus),this.$eventBus.$emit("aaa",{a:1,b:2})}},ccomponents:{MyBreadcrumb:i["a"]}},s=u,l=(r("8d9e"),r("2877")),f=Object(l["a"])(s,n,o,!1,null,"0f3e5d7c",null);e["default"]=f.exports},"663f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._t("default")],2)],1)},o=[],a={name:"MyBreadcrumb"},i=a,c=r("2877"),u=Object(c["a"])(i,n,o,!1,null,"0437e94a",null);e["a"]=u.exports},"8d9e":function(t,e,r){"use strict";var n=r("2737"),o=r.n(n);o.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=E(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function d(){}function v(){}function y(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==r&&n.call(w,a)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=I(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in a)&&o(a,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},c24f:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c}));var n=r("b775"),o=function(t,e){var r=Object(n["a"])({method:"POST",url:"/mp/v1_0/authorizations",data:{mobile:t,code:e}});return r},a=function(){return Object(n["a"])({method:"get",url:"/mp/v1_0/user/profile"})},i=function(t){return Object(n["a"])({method:"patch",url:"/mp/v1_0/user/profile",data:t})},c=function(t){return Object(n["a"])({method:"patch",url:"/mp/v1_0/user/photo",data:t})}}}]);
//# sourceMappingURL=chunk-3c6d529a.766f9e9a.js.map