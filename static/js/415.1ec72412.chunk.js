"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{5415:function(t,n,e){e.r(n);var r=e(885),a=e(2791),c=e(6871),u=e(501),i=e(1207),s=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],o=n[1],p=(0,c.TH)();return(0,a.useEffect)((function(){i.Tg().then(o)}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending today"}),e&&(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:p},children:t.title})},t.id)}))})]})}},1207:function(t,n,e){e.d(n,{Hx:function(){return v},LI:function(){return m},Mc:function(){return f},Tg:function(){return o},uV:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var s="f6301fd4418791e86cee5ab1a6c319ce";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("search/movie?query=".concat(n,"&api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.1ec72412.chunk.js.map