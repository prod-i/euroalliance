(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{268:function(t,e,n){"use strict";n(106);var l={props:{card:{type:Object,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"services"},[e("nuxt-link",{staticClass:"services-link",attrs:{to:t.card.link}}),t._v(" "),e("div",{staticClass:"services-image"},[e("img",{attrs:{src:t.card.icon,alt:t.card.title,loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"services-title"},[t._v("\n    "+t._s(t.card.title)+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var l={components:{ServiceCard:n(268).a},props:{cardData:{type:Array,required:!0}},data:function(){return{splideOptions:{perPage:5,gap:20,pagination:!1,breakpoints:{1099:{perPage:4},1023:{perPage:3,arrows:!0},500:{perPage:1,arrows:!0,center:!0,padding:90}}},isActive:0}},computed:{countSplide:function(){return this.cardData.length<5}},methods:{onSplideMove:function(t,e){this.isActive=e},changeSlide:function(t){this.$refs.splide.go(t)}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-grey offset"},[e("div",{staticClass:"container"},[e("div",{staticClass:"head center"},[e("div",{staticClass:"head-content"},[e("div",{staticClass:"head-title"},[t._t("title")],2)])]),t._v(" "),e("client-only",[e("Splide",{ref:"splide",staticClass:"services-splide",class:{center:t.countSplide},attrs:{options:t.splideOptions},on:{"splide:move":t.onSplideMove}},t._l(t.cardData,(function(t,n){return e("SplideSlide",{key:n},[e("service-card",{attrs:{card:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";e.a={list:[{id:1,title:"Кредитование бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{id:5,title:"Расчетно-кассовое обслуживание",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/rko"},{id:4,title:"Депозиты для юридических лиц",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"},{id:2,title:"Зарплатный проект",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"},{id:6,title:"ВЭД",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ved"},{id:7,title:"Аккредитивы",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/akkreditivy"},{id:3,title:"Эквайринг для бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"}],credits:[{title:"Кредит под залог недвижимости",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-pod-zalog-nedvizhimosti"},{title:"Кредит на развитие",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-razvitie"},{title:"Кредит МСП",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-msp"},{title:"Овердрафт",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/overdraft"},{title:"Рефинансирование",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/refinansirovanie"},{title:"Кредит на пополнение оборотных средств",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-popolnenie-oborotnyh-sredstv"}]}},335:function(t,e,n){"use strict";n.r(e);var l=n(269),r=n(271),c={components:{CardsShowcase:l.a},data:function(){return{cardData:r.a.list}},created:function(){this.$faq.setArrayLength(1)}},v=n(6),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content content-inside"},[e("div",{staticClass:"container"},[e("ui-breadcrumbs",{attrs:{pages:[{title:"Услуги для бизнеса",href:"/biznesu/uslugi-dlya-biznesa"},{title:"Депозиты для юридических лиц"}]}}),t._v(" "),e("h1",[t._v("Депозиты для юридических лиц")]),t._v(" "),e("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Депозит «Классический»\n      ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n        Больше доход в короткий срок\n      ")]},proxy:!0},{key:"link",fn:function(){return[e("nuxt-link",{staticClass:"btn btn--full btn--white",attrs:{to:""}},[t._v("\n          Подать заявку\n        ")])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])}),t._v(" "),e("h3",[t._v("Базовые ставки по депозитам")]),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"information information--icon information--i"},[t._v("\n      Определение ставок по депозитам осуществляется решением кредитного\n      комитета Банка, в том числе с учетом периодичности выплаты процентов.\n    ")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v("\n\n    Определение ставок по депозитам с учетом периодичности выплаты процентов\n    осуществляется решением кредитного комитета Банка. Пополнение депозита в\n    течение срока договора не предусмотрено. Условия досрочного\n    востребования определяются договором\n\n    "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Условия")]),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"faq-items"},[e("faq-item",{attrs:{title:"О страховании средств юридических лиц","is-active":t.$faq.activeIndexes[0]},on:{click:function(e){return t.$faq.toggleActive(0)}}},[t._v("\n        Какой-то текст\n      ")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Дополнительные услуги")]),t._v(" "),e("div",{staticClass:"columns columns--cards"},[e("div",{staticClass:"column col-4 sm-col-12"},[e("document-card",{staticClass:"square",attrs:{icon:"i"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Ежемесячно\n          ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n            для рерайтера в две строки\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-4 sm-col-12"},[e("document-card",{staticClass:"square",attrs:{icon:"i"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Ежеквартально\n          ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n            для рерайтера в две строки\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-4 sm-col-12"},[e("document-card",{staticClass:"square",attrs:{icon:"i"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            По истечении срока\n          ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n            договора путем перечисления на расчетный счет Клиента\n          ")]},proxy:!0}])})],1)]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("nuxt-link",{staticClass:"btn btn--full",attrs:{to:""}},[t._v("\n      Подать заявку\n    ")])],1),t._v(" "),e("div",{staticClass:"offset-top offset--small"},[e("cards-showcase",{attrs:{"card-data":t.cardData},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Полный комплекс услуг для бизнеса\n      ")]},proxy:!0}])})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-round"},[e("table",[e("thead",[e("tr",[e("th",[e("p",{staticStyle:{"text-align":"left"}},[t._v("\n                Сумма депозита (рубли)\n              ")])]),t._v(" "),e("th",[t._v("2 нед. — 1 мес.")]),t._v(" "),e("th",[t._v("1-2 мес.")]),t._v(" "),e("th",[t._v("2-3 мес.")])])]),t._v(" "),e("tbody",{staticClass:"table-round-body"},[e("tr",[e("td",[t._v("от 1 до 10 млн руб. (включительно)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              9,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              10,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              11,0%\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("от 10 до 30 млн руб.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              10,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              11,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              12,0%\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("от 30 до 100 млн руб.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              12,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              12,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              13,0%\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("свыше 100 млн руб.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              13,0%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              13,2%\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("\n              13,5%\n            ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"requisites"},[e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Валюта\n        ")]),t._v("\n        Рубли Российской Федерации\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Минимальная сумма\n        ")]),t._v("\n        1 000 000 ₽\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Пополнение\n        ")]),t._v("\n        Не предусмотрено\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Срок\n        ")]),t._v("\n        от 14 дней до 90 дней\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Расходные операции\n        ")]),t._v("\n        Не предусмотрено\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Выпаты процентов\n        ")]),t._v("\n        В конце срока, ежемесячно, с капитализацией\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Досрочные погашения\n        ")]),t._v("\n        Определяются договором\n      ")]),t._v(" "),e("div",{staticClass:"requisites-item"},[e("div",{staticClass:"requisites-item__title"},[t._v("\n          Основной государственный регистрационный номер\n        ")]),t._v("\n        Возможна\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);