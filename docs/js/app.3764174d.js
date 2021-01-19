(function(t){function n(n){for(var e,i,s=n[0],u=n[1],c=n[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);d&&d(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,n=0;n<a.length;n++){for(var r=a[n],e=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(e=!1)}e&&(a.splice(n--,1),t=i(i.s=r[0]))}return t}var e={},o={app:0},a=[];function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,n,r){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.d(r,e,function(n){return t[n]}.bind(null,e));return r},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/v-fraction-calculator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,n,r){t.exports=r("56d7")},"56d7":function(t,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var e=r("2b0e"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"app"},[r("div",{staticClass:"app__fractions-wrap"},[r("div",{staticClass:"app__fractions"},t._l(t.fractions,(function(n,e){return r("div",{key:e,staticClass:"app__fraction"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:n.numerator,expression:"fraction.numerator",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:n.numerator},on:{change:function(r){return t.handleInput(n.numerator,e,"numerator")},input:function(r){r.target.composing||t.$set(n,"numerator",t._n(r.target.value))},blur:function(n){return t.$forceUpdate()}}}),r("hr"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:n.denominator,expression:"fraction.denominator",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:n.denominator},on:{change:function(r){return t.handleInput(n.denominator,e,"denominator")},input:function(r){r.target.composing||t.$set(n,"denominator",t._n(r.target.value))},blur:function(n){return t.$forceUpdate()}}}),r("div",{staticClass:"app__fraction-remove-wrap"},[t.fractions.length>2?r("button",{on:{click:function(n){return t.removeFraction(e)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}})])]):t._e()])])})),0),r("div",{staticClass:"app__result"},[r("div",{staticClass:"app__result-fraction"},[r("div",{staticClass:"app__result-value"},[t._v(" "+t._s(t.numeratorResult)+" ")]),r("hr"),r("div",{staticClass:"app__result-value"},[t._v(" "+t._s(t.denominatorsLCM)+" ")])]),t.numeratorResult>=t.denominatorsLCM?r("div",{staticClass:"app__result-reduced"},[r("div",{staticClass:"app__result-reduced-integer"},[t._v(" "+t._s(t.reducedInteger)+" ")]),t.numeratorResult%t.denominatorsLCM?r("div",{staticClass:"app__result-reduced-fraction"},[r("div",{staticClass:"app__result-value"},[t._v(" "+t._s(t.reducedFraction.numerator)+" ")]),r("hr"),r("div",{staticClass:"app__result-value"},[t._v(" "+t._s(t.reducedFraction.denominator)+" ")])]):t._e()]):t._e()])]),r("button",{staticClass:"app__add-more",attrs:{disabled:5===t.fractions.length},on:{click:t.addMoreFractions}},[t._v(" Add more fractions ")])])},a=[],i=(r("d81d"),r("13d5"),r("a434"),{name:"App",data:function(){return{fractions:[{numerator:1,denominator:2},{numerator:3,denominator:4}]}},computed:{numeratorResult:function(){var t=this;return this.fractions.reduce((function(n,r){var e=r.numerator,o=r.denominator;return n+e*(t.denominatorsLCM/o)}),0)},denominatorsLCM:function(){return this.lcm(this.fractions.map((function(t){var n=t.denominator;return n})))},reducedInteger:function(){return(this.numeratorResult-this.numeratorResult%this.denominatorsLCM)/this.denominatorsLCM},reducedFraction:function(){var t=this.gcd(this.numeratorResult,this.denominatorsLCM);return{numerator:this.numeratorResult%this.denominatorsLCM/t,denominator:this.denominatorsLCM/t}}},methods:{lcm:function(t){var n=this;return t.reduce((function(t,r){return n.scm(t,r)}))},scm:function(t,n){return t*n/this.gcd(t,n)},gcd:function(t,n){return t%n===0?n:this.gcd(n,t%n)},addMoreFractions:function(){this.fractions.push({numerator:1,denominator:1})},removeFraction:function(t){this.fractions.splice(t,1)},handleInput:function(t,n,r){t%1!==0&&(this.fractions[n][r]=Math.round(t)),t<1?this.fractions[n][r]=1:t>99&&(this.fractions[n][r]=99)}}}),s=i,u=r("2877"),c=Object(u["a"])(s,o,a,!1,null,null,null),d=c.exports;r("6861");e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(d)}}).$mount("#app")},6861:function(t,n,r){}});