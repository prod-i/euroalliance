(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{272:function(t,e,n){"use strict";n(135);var l={name:"TabDefault",props:{id:{type:String,default:null},title:{type:String,required:!0},count:{type:Number,default:null},isActive:{type:Boolean,required:!0}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-item",class:{active:t.isActive},on:{click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.title)+" "),t.count>0?e("span",[t._v(t._s(t.count))]):t._e()])}),[],!1,null,null,null);e.a=component.exports},279:function(t,e,n){"use strict";n(37),n(59),n(106);var l={props:{customClass:{type:String,default:""},title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},img:{type:String,required:!0},items:{type:Array,required:!0},buttonsText:{type:Array,required:!0}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:"offer ".concat(t.customClass)},[e("div",{staticClass:"offer-image"},[e("img",{attrs:{src:t.img,alt:t.title,width:"700",height:"400",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"offer-content"},[e("div",{staticClass:"offer-text"},[e("div",{staticClass:"offer-header"},[e("div",{staticClass:"offer-title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info"},[t._v("\n          "+t._s(t.description)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"offer-price"},t._l(t.items,(function(n,l){return e("div",{key:l,staticClass:"offer-price__item"},[e("div",{staticClass:"offer-price__title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-price__value"},[t._v("\n          от "),e("span",[t._v(t._s(n.sum))])])])})),0),t._v(" "),e("div",{staticClass:"offer-order"},[e("nuxt-link",{staticClass:"btn btn--small btn--white btn--mobile-large",attrs:{to:t.link}},[t._v("\n        "+t._s(t.buttonsText[0])+"\n      ")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn--small btn--white btn--mobile-large",attrs:{to:t.link}},[t._v("\n        "+t._s(t.buttonsText[1])+"\n      ")])],1)])])}),[],!1,null,null,null);e.a=component.exports},282:function(t,e,n){"use strict";e.a=[{title:"Выгодный",description:"Вкладывай по-крупному!",link:"/personal/vklady/vygodnyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"14 %"},{title:"Сумма",sum:"10000000 p"},{title:"Срок",sum:"1 года"}]},{title:"Максимальный",description:"Доход на высоте!",link:"/personal/vklady/maksimalnyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"12 %"},{title:"Сумма",sum:"50000 p"},{title:"Срок",sum:"3 года"}]},{title:"Срочный",description:"Вклад срочный",link:"/personal/vklady/srochnyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"1.51 %"},{title:"Сумма",sum:"1000 p"},{title:"Срок",sum:"181 дней"}]},{title:"Управляемый",description:"0% дополнительных комиссий, до 5 лет максимальный срок, 0р дополнительных страховок",link:"/personal/vklady/upravlyaemyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Почетный",description:"0% дополнительных комиссий, до 5 лет максимальный срок, 0р дополнительных страховок",link:"/personal/vklady/zasluzhennyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Заслуженный",description:"0% дополнительных комиссий, до 5 лет максимальный срок, 0р дополнительных страховок",link:"/personal/vklady/maksimalnyj",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"До востребования",description:"0% дополнительных комиссий, до 5 лет максимальный срок, 0р дополнительных страховок",link:"/personal/vklady/do-vostrebovaniya",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]}]},297:function(t,e,n){"use strict";n(37),n(59),n(106),n(38),n(18);var l=n(272),o=n(279),c=n(282),r={components:{TabDefault:l.a,InfoCard:o.a},data:function(){return{infoData:c.a,buttons:[{title:"Все",count:10},{title:"В рублях",count:4},{title:"Пенсионные",count:6}],activeButtonId:0}},computed:{filteredCards:function(){var t=this;return"all"!==this.activeButtonId?this.cardData.filter((function(e){return e.type===t.activeButtonId})):this.cardData},filteredCardsCount:function(){return this.filteredCards.length}},methods:{setActiveButton:function(t){this.activeButtonId=t}}},v=n(6),component=Object(v.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"head"},[t._m(0),t._v(" "),e("div",{staticClass:"head-aside"},[e("ul",{staticClass:"tabs tabs--white"},t._l(t.buttons,(function(button,n){return e("li",{key:n},[e("tab-default",{attrs:{title:button.title,"is-active":t.activeButtonId===n,count:button.count},on:{click:function(e){return t.setActiveButton(n)}}})],1)})),0)])]),t._v(" "),e("div",{staticClass:"offers"},[t._l(t.infoData,(function(n,l){return[l<3&&"/"===t.$route.path||"/"!==t.$route.path?e("info-card",{key:l,attrs:{title:n.title,description:n.description,link:n.link,img:n.img,items:n.items,"buttons-text":["Оформить вклад","Рассчитать вклад"],"custom-class":"offer--white"}}):t._e()]}))],2),t._v(" "),"/"===t.$route.path?e("div",{staticClass:"offset-footer center"},[e("button",{staticClass:"btn btn--white btn--full"},[t._v("\n      Показать ещё\n    ")])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"head-content"},[t("div",{staticClass:"head-title"},[this._v("\n        Банковские вклады\n      ")])])}],!1,null,null,null);e.a=component.exports},326:function(t,e,n){"use strict";n.r(e);var l={components:{DepositsBlock:n(297).a}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("ui-breadcrumbs",{attrs:{pages:[{title:"Вклады",href:"/personal/vklady"}]}}),t._v(" "),e("h1",[t._v("Вклады")]),t._v(" "),e("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Вклады с доходом до 14%\n      ")]},proxy:!0},{key:"text",fn:function(){return[e("div",{staticClass:"list-shield"},[t._v("\n          Откройте вклад с пополнением и частичным снятием\n        ")])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"back-grey offset offset--small"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("deposits-block")],1)]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter-block"},[e("div",{staticClass:"filter-block__column"},[e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-text"},[t._v("\n              Хочу вложить\n            ")]),t._v(" "),e("select",{staticClass:"input select"},[e("option",{attrs:{value:""}},[t._v("\n                10 000 ₽\n              ")])])])]),t._v(" "),e("div",{staticClass:"filter-block__column"},[e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-text"},[t._v("\n              На срок\n            ")]),t._v(" "),e("select",{staticClass:"input select"},[e("option",{attrs:{value:""}},[t._v("\n                3 месяца\n              ")])])])]),t._v(" "),e("div",{staticClass:"filter-block__column"},[e("button",{staticClass:"btn btn--full"},[t._v("\n            Подобрать\n          ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"information-showcase"},[e("div",{staticClass:"information-showcase__image"},[e("img",{attrs:{src:"/img/icon-vklady.svg",alt:"",loading:"lazy",width:"75",height:"75"}})]),t._v(" "),e("div",{staticClass:"information-showcase__content"},[e("h3",[t._v("Страхование вкладов")]),t._v("\n        Система обязательного страхования вкладов (ССВ) – специальная\n        государственная программа, реализуемая в соответствии с Федеральным\n        законом от 23 декабря 2003 г. № 177-ФЗ «О страховании вкладов в банках\n        Российской Федерации» (далее – Федеральный закон №177-ФЗ).\n      ")]),t._v(" "),e("div",{staticClass:"information-showcase__aside"},[e("a",{staticClass:"btn btn--fixed btn--mobile",attrs:{href:"#"}},[t._v("Подробнее")])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Только возобновление договора")]),t._v("\n    Прием не осуществляется. Ознакомиться с перечнем и условиями\n    возобновляемых вкладов в рублях можно здесь. Ознакомиться с перечнем и\n    условиями возобновляемых вкладов в валюте можно "),e("a",{attrs:{href:"#"}},[t._v("здесь")]),t._v(".\n    "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Прекращение пролонгации договора")]),t._v("\n    C 28 марта 2023 прекращается пролонгация вкладов «Мобильный капитал» и\n    «Сберегательный пенсионный».Если Вкладчик не востребовал денежные\n    средства в дату окончания срока вклада, сумма вклада перечисляется на\n    счет вклада «До востребования», и действие настоящего Договора\n    прекращается\n  ")])}],!1,null,null,null);e.default=component.exports}}]);