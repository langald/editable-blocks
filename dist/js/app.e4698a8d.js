(function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)r=a[d],s[r]&&f.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r=(n("cf25"),n("2877")),a={},l=Object(r["a"])(a,s,o,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"blocks"},t._l(t.$store.state.blocks,function(e,i){return n("block",{key:e.blockID,attrs:{index:i},on:{openSetting:t.toggleSettingBar}})}),1),n("setting-bar",{on:{closeSetting:t.toggleSettingBar}}),t.$store.state.loading?n("loading"):t._e()],1)},f=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",style:t.blockStyles},[t.isHidden?n("div",[t._v("Ooops! Блок скрыт!")]):n("div",{staticClass:"block__content"},[t._m(0),t._m(1)]),n("button",{staticClass:"button button--abs",on:{click:function(e){return t.$emit("openSetting",t.index)}}},[t._v("\n    Настройки\n  ")])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bName",staticClass:"block__title",attrs:{contenteditable:"true"},domProps:{textContent:t._s(t.bName)},on:{input:function(e){return t.setText(e,"bName")}}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bText",staticClass:"block__text",attrs:{contenteditable:"true"},domProps:{textContent:t._s(t.bText)},on:{input:function(e){return t.setText(e,"bText")}}})}],m=(n("7514"),n("cebc")),g=(n("c5f6"),n("2f62")),v={name:"Block",props:{index:{type:Number,required:!0}},computed:{block:function(){return this.$store.state.blocks[this.index]},bName:function(){return this.block.bName},bText:function(){return this.block.bText},bgColor:function(){var t=this.getSettingObj(40);return t?t.fieldValue:"#ffffff"},width:function(){var t=this.getSettingObj(34),e=t?t.fieldValue:0;return e>100||0===e?"100%":e+"%"},height:function(){var t=this.getSettingObj(35);return t?t.fieldValue+"px":"auto"},blockStyles:function(){return{background:this.bgColor,width:this.width,height:this.height}},isHidden:function(){var t=this.getSettingObj(36);return!!t&&"1"===t.fieldValue}},watch:{bText:function(t){document.activeElement!=this.$refs.bText&&(this.$refs.bText.innerHTML=t)},bName:function(t){document.activeElement!=this.$refs.bName&&(this.$refs.bName.innerHTML=t)}},methods:Object(m["a"])({},Object(g["c"])(["setBlockValue"]),{getSettingObj:function(t){return this.block.settings.find(function(e){return e.ID===t})},setText:function(t,e){this.$emit("openSetting",this.index),this.setBlockValue({type:e,value:t.target.innerText})}})},h=v,_=Object(r["a"])(h,b,p,!1,null,null,null),x=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-bar",class:{"setting-bar--open":"closed"!==t.$store.state.editedIndex}},[n("div",{staticClass:"setting-bar__content"},[n("div",{staticClass:"setting-bar__header"},[n("div",{staticClass:"setting-bar__title"},[t._v("Настройки")]),n("div",{staticClass:"setting-bar__btns"},[n("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.saveSetting}},[t._v("\n          Сохранить\n        ")]),n("button",{staticClass:"close-button",on:{click:function(e){return t.$emit("closeSetting","closed")}}})])]),t._l(t.editedBlock.settings,function(e,i){return n("div",{key:e.ID,staticClass:"setting-field"},[n("label",{staticClass:"setting-label"},[t._v("\n        "+t._s(e.Name)+"\n        "),"input"===e.filedType?n("div",[n("input",{staticClass:"setting-input",attrs:{type:"int"===e.stringType?"number":"text",required:""},domProps:{value:e.fieldValue},on:{change:function(e){return t.setValue(i,e)}}}),n("div",{staticClass:"setting-input-hint"},[t._v("\n            "+t._s(34===e.ID?"%":35===e.ID?"px":"")+"\n          ")])]):t._e(),"select"===e.filedType?n("div",[n("select",{staticClass:"setting-select",domProps:{value:e.fieldValue},on:{change:function(e){return t.setValue(i,e)}}},t._l(Object.keys(e.fieldOptions),function(i){return n("option",{key:i,domProps:{value:i}},[t._v(t._s(e.fieldOptions[i]))])}),0)]):t._e()])])})],2)])},y=[],O={name:"SettingBar",computed:Object(m["a"])({},Object(g["d"])(["editedIndex"]),{editedBlock:function(){return"closed"===this.editedIndex?{}:this.$store.state.blocks[this.editedIndex]}}),methods:Object(m["a"])({},Object(g["c"])(["setFieldValue"]),Object(g["b"])(["sendEditBlock"]),{saveSetting:function(){this.sendEditBlock()},setValue:function(t,e){this.setFieldValue({i:t,value:e.target.value})}})},S=O,T=Object(r["a"])(S,k,y,!1,null,null,null),j=T.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[t._v("Processing...")])},I=[],V={name:"Loading"},$=V,w=Object(r["a"])($,C,I,!1,null,null,null),N=w.exports,B={name:"home",components:{Block:x,SettingBar:j,Loading:N},methods:{toggleSettingBar:function(t){this.$store.commit("setEditedIndex",t)}}},E=B,P=Object(r["a"])(E,d,f,!1,null,null,null),D=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Page not found")]),n("router-link",{attrs:{to:{name:"home"}}},[t._v("Start from main page")])],1)},q=[],M={},z=Object(r["a"])(M,L,q,!1,null,null,null),H=z.exports;i["a"].use(u["a"]);var F=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D},{path:"*",component:H}]}),J=(n("96cf"),n("3b8d")),R=n("75fc"),A=n("bc3a"),G=n.n(A);i["a"].use(g["a"]);var K=new g["a"].Store({state:{blocks:[{blockID:1,bName:"Желтый блок",bText:"Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",settings:[{ID:34,Name:"Ширина",stringType:"int",filedType:"input",fieldValue:"60",fieldSize:4},{ID:35,Name:"Высота",stringType:"int",filedType:"input",fieldValue:"500",fieldSize:4},{ID:40,Name:"Цвет",stringType:"Str",filedType:"input",fieldValue:"#f4f5bf",fieldSize:4}]},{blockID:2,bName:"Розовый блок",bText:"Vivamus sit amet purus blandit nunc aliquam tempor id sed mauris. Sed accumsan ornare eros, in elementum neque. Nullam vitae nisl eget massa consectetur mollis. Praesent laoreet tempus dui nec hendrerit. Nullam condimentum quam in condimentum mattis. Integer bibendum molestie ipsum sed ullamcorper. Aliquam ac dolor faucibus, gravida lectus ac, tempor turpis.",settings:[{ID:36,Name:"Скрытое",filedType:"select",fieldValue:"0",fieldOptions:{0:"Нет",1:"Да"},fieldSize:4},{ID:40,Name:"Цвет",stringType:"Str",filedType:"input",fieldValue:"#f1c8ea",fieldSize:4}]}],editedIndex:"closed",loading:!1},mutations:{setEditedIndex:function(t,e){t.editedIndex=e},setFieldValue:function(t,e){t.blocks[t.editedIndex].settings[e.i].fieldValue=e.value,t.blocks=Object(R["a"])(t.blocks)},setBlockValue:function(t,e){t.blocks[t.editedIndex][e.type]=e.value},setLoading:function(t,e){t.loading=e}},actions:{sendEditBlock:function(){var t=Object(J["a"])(regeneratorRuntime.mark(function t(e){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n="https://jsonplaceholder.typicode.com/posts",i=e.state.blocks[e.state.editedIndex],e.commit("setLoading",!0),t.prev=3,t.next=6,G.a.post(n,i);case 6:t.sent,e.commit("setLoading",!1),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0.message),e.commit("setLoading",!1);case 14:case"end":return t.stop()}},t,null,[[3,10]])}));function e(e){return t.apply(this,arguments)}return e}()},strict:!1});i["a"].config.productionTip=!1,new i["a"]({router:F,store:K,render:function(t){return t(c)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var i=n("0cfb"),s=n.n(i);s.a}});
//# sourceMappingURL=app.e4698a8d.js.map