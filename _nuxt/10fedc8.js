(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{268:function(t,e,n){"use strict";n(106);var l={props:{card:{type:Object,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"services"},[e("nuxt-link",{staticClass:"services-link",attrs:{to:t.card.link}}),t._v(" "),e("div",{staticClass:"services-image"},[e("img",{attrs:{src:t.card.icon,alt:t.card.title,loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"services-title"},[t._v("\n    "+t._s(t.card.title)+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var l={components:{ServiceCard:n(268).a},props:{cardData:{type:Array,required:!0}},data:function(){return{splideOptions:{perPage:5,gap:20,pagination:!1,breakpoints:{1099:{perPage:4},1023:{perPage:3,arrows:!0},500:{perPage:1,arrows:!0,center:!0,padding:90}}},isActive:0}},computed:{countSplide:function(){return this.cardData.length<5}},methods:{onSplideMove:function(t,e){this.isActive=e},changeSlide:function(t){this.$refs.splide.go(t)}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-grey offset"},[e("div",{staticClass:"container"},[e("div",{staticClass:"head center"},[e("div",{staticClass:"head-content"},[e("div",{staticClass:"head-title"},[t._t("title")],2)])]),t._v(" "),e("client-only",[e("Splide",{ref:"splide",staticClass:"services-splide",class:{center:t.countSplide},attrs:{options:t.splideOptions},on:{"splide:move":t.onSplideMove}},t._l(t.cardData,(function(t,n){return e("SplideSlide",{key:n},[e("service-card",{attrs:{card:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";e.a={list:[{id:1,title:"Кредитование бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{id:5,title:"Расчетно-кассовое обслуживание",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/rko"},{id:4,title:"Депозиты для юридических лиц",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"},{id:2,title:"Зарплатный проект",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"},{id:6,title:"ВЭД",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ved"},{id:7,title:"Аккредитивы",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/akkreditivy"},{id:3,title:"Эквайринг для бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"}],credits:[{title:"Кредит под залог недвижимости",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-pod-zalog-nedvizhimosti"},{title:"Кредит на развитие",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-razvitie"},{title:"Кредит МСП",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-msp"},{title:"Овердрафт",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/overdraft"},{title:"Рефинансирование",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/refinansirovanie"},{title:"Кредит на пополнение оборотных средств",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-popolnenie-oborotnyh-sredstv"}]}},337:function(t,e,n){"use strict";n.r(e);n(106);var l=n(269),r=n(271),c={components:{CardsShowcase:l.a},data:function(){return{creditsData:r.a.credits,cardData:r.a.list}}},d=n(6),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content content-inside"},[e("div",{staticClass:"container"},[e("ui-breadcrumbs",{attrs:{pages:[{title:"Услуги для бизнеса",href:"/biznesu/uslugi-dlya-biznesa"},{title:"Кредитование бизнеса"}]}}),t._v(" "),e("h1",[t._v("Кредитование бизнеса")]),t._v(" "),e("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Кредит для бизнеса на любые цели\n      ")]},proxy:!0},{key:"text",fn:function(){return[e("div",{staticClass:"list-shield"},[e("ul",[e("li",[t._v("Индивидуальный подход к каждому клиенту")]),t._v(" "),e("li",[t._v("Гибкие условия кредитования")]),t._v(" "),e("li",[t._v("Рерайтеру написать третье преимущество")])])])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])}),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"columns columns--cards"},t._l(t.creditsData,(function(data,n){return e("div",{key:n,staticClass:"column col-3 lg-col-4 md-col-6 sm-col-12"},[e("document-card",{staticClass:"square",attrs:{icon:"img"},scopedSlots:t._u([{key:"title",fn:function(){return[e("nuxt-link",{attrs:{to:data.link}},[t._v("\n              "+t._s(data.title)+"\n            ")])]},proxy:!0}],null,!0)})],1)})),0)],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("cards-showcase",{attrs:{"card-data":t.cardData},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      Полный комплекс услуг для бизнеса\n    ")]},proxy:!0}])})],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("На недвижимость, транспорт, пополнение оборотных средств")]),t._v("\n      Банк «ЕВРОАЛЬЯНС» предлагает различные формы кредитования для\n      юридических лиц и индивидуальных предпринимателей\n    ")])}],!1,null,null,null);e.default=component.exports}}]);