(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-feedback"],{"0899":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.feedback[data-v-6e71dfde]{background-color:#f5f5f5}.feedback .feedback-title[data-v-6e71dfde]{margin:15px;margin-bottom:0;font-size:16px;color:#666}.feedback .feedback-content[data-v-6e71dfde]{margin:15px;padding:10px;box-sizing:border-box;border:1px #ececec solid}.feedback .feedback-content .feedback-textarea[data-v-6e71dfde]{font-size:12px;width:100%;height:150px}.feedback .feedback-image-box[data-v-6e71dfde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:10px}.feedback .feedback-image-box .feedback-image-item[data-v-6e71dfde]{position:relative;width:33.33%;height:0;padding-top:33.33%;box-sizing:border-box}.feedback .feedback-image-box .feedback-image-item .close-icon[data-v-6e71dfde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;right:0;top:0;width:22px;height:22px;border-radius:50%;background-color:#ff5a5f;z-index:2}.feedback .feedback-image-box .feedback-image-item .image-box[data-v-6e71dfde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:5px;bottom:5px;left:5px;right:5px;border:1px #eee solid;border-radius:5px;overflow:hidden}.feedback .feedback-image-box .feedback-image-item .image-box uni-image[data-v-6e71dfde]{width:100%;height:100%}.feedback .feedback-image-box .feedback-image-item .image-box.plusempty-icons[data-v-6e71dfde]{border:1px silver dashed}.feedback .progress-box[data-v-6e71dfde]{padding:0 16px;height:27px;margin-bottom:20px}.feedback .feedback-btn[data-v-6e71dfde]{margin:0 15px;background-color:#f07373;color:#f5f5f5}',""]),e.exports=t},"0ed8":function(e,t,n){"use strict";var r=n("5d06"),i=n.n(r);i.a},"1da1":function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))}}n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},"4b23":function(e,t,n){"use strict";(function(e){var r=n("4ea4");n("4160"),n("a434"),n("a9e3"),n("d3b7"),n("25f0"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("1da1")),o={data:function(){return{imageList:[],progressFlag:!1,percent:0,content:""}},methods:{openImage:function(){var e=this,t=5-this.imageList.length;uni.chooseImage({count:t,success:function(n){var r=n.tempFilePaths;r.forEach((function(n,r){r<t&&e.imageList.push({url:n,index:r})}))}})},close:function(e){this.imageList.splice(e,1)},submit:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],uni.showLoading({title:"上传中"}),r=0;case 3:if(!(r<e.imageList.length)){t.next=12;break}return i=e.imageList[r].url,t.next=7,e.unloadFile(i);case 7:i=t.sent,n.push(i);case 9:r++,t.next=3;break;case 12:e.updateFeedback({feedbackImages:n,content:e.content});case 13:case"end":return t.stop()}}),t)})))()},updateFeedback:function(e){this.$api.update_feedback(e).then((function(e){uni.hideLoading(),uni.showToast({title:"文件上传成功",duration:2e3}),setTimeout((function(){uni.switchTab({url:"/pages/tabbar/my/my"})}),1e3)})).catch((function(){uni.hideLoading(),uni.showToast({title:"文件上传失败",icon:"none"})}))},unloadFile:function(t){var n=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.uploadFile({filePath:t,cloudPath:n.generateID(5)+".jpg"});case 2:return i=r.sent,r.abrupt("return",i.fileID);case 4:case"end":return r.stop()}}),r)})))()},generateID:function(e){return Number(Math.random().toString().substr(3,e)+Date.now())}}};t.default=o}).call(this,n("a9ff")["default"])},"5d06":function(e,t,n){var r=n("0899");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("552f135e",r,!0,{sourceMap:!1,shadowMode:!1})},"90cb":function(e,t,n){"use strict";n.r(t);var r=n("4b23"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"96cf":function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof e,f=t.regeneratorRuntime;if(f)u&&(e.exports=f);else{f=t.regeneratorRuntime=u?e.exports:{},f.wrap=w;var l="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},b={};b[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(T([])));m&&m!==r&&i.call(m,a)&&(b=m);var y=_.prototype=k.prototype=Object.create(b);L.prototype=y.constructor=_,_.constructor=L,_[s]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(y),e},f.awrap=function(e){return{__await:e}},E(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(e,t,n,r){var i=new j(w(e,t,n,r));return f.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),y[s]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=T,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return c.type="throw",c.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(e,t,n,r){var i=t&&t.prototype instanceof k?t:k,o=Object.create(i.prototype),a=new I(r||[]);return o._invoke=F(e,n,a),o}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function L(){}function _(){}function E(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function j(e){function t(n,r,o,a){var c=x(e[n],e,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,a)}))}a(c.arg)}var n;function r(e,r){function i(){return new Promise((function(n,i){t(e,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function F(e,t,n){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=x(e,t,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){while(++r<e.length)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a002:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniIcons:n("f744").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"feedback"},[n("v-uni-view",{staticClass:"feedback-title"},[e._v("意见反馈：")]),n("v-uni-view",{staticClass:"feedback-content"},[n("v-uni-textarea",{staticClass:"feedback-textarea",attrs:{placeholder:"请输入反馈内容..."},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),n("v-uni-view",{staticClass:"feedback-title"},[e._v("反馈图片：")]),n("v-uni-view",{staticClass:"feedback-image-box"},[e._l(e.imageList,(function(t,r){return n("v-uni-view",{key:r,staticClass:"feedback-image-item"},[n("v-uni-view",{staticClass:"close-icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close(r)}}},[n("uni-icons",{attrs:{type:"closeempty",size:"18",color:"#fff"}})],1),n("v-uni-view",{staticClass:"image-box"},[n("v-uni-image",{attrs:{src:t.url}})],1)],1)})),e.imageList.length<5?n("v-uni-view",{staticClass:"feedback-image-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openImage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"image-box plusempty-icons"},[n("uni-icons",{attrs:{type:"plusempty",size:"50",color:"#666"}})],1)],1):e._e()],2),e.progressFlag?n("v-uni-view",{staticClass:"progress-box"},[n("v-uni-progress",{attrs:{percent:e.percent,"stroke-width":"10","border-radius":"50"}})],1):e._e(),n("v-uni-button",{staticClass:"feedback-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交反馈")])],1)],1)},o=[]},f56e:function(e,t,n){"use strict";n.r(t);var r=n("a002"),i=n("90cb");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("0ed8");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"6e71dfde",null,!1,r["a"],a);t["default"]=s.exports}}]);