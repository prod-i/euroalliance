(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{268:function(t,e,n){"use strict";n(106);var l={props:{card:{type:Object,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"services"},[e("nuxt-link",{staticClass:"services-link",attrs:{to:t.card.link}}),t._v(" "),e("div",{staticClass:"services-image"},[e("img",{attrs:{src:t.card.icon,alt:t.card.title,loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"services-title"},[t._v("\n    "+t._s(t.card.title)+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var l={components:{ServiceCard:n(268).a},props:{cardData:{type:Array,required:!0}},data:function(){return{splideOptions:{perPage:5,gap:20,pagination:!1,breakpoints:{1099:{perPage:4},1023:{perPage:3,arrows:!0},500:{perPage:1,arrows:!0,center:!0,padding:90}}},isActive:0}},computed:{countSplide:function(){return this.cardData.length<5}},methods:{onSplideMove:function(t,e){this.isActive=e},changeSlide:function(t){this.$refs.splide.go(t)}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-grey offset"},[e("div",{staticClass:"container"},[e("div",{staticClass:"head center"},[e("div",{staticClass:"head-content"},[e("div",{staticClass:"head-title"},[t._t("title")],2)])]),t._v(" "),e("client-only",[e("Splide",{ref:"splide",staticClass:"services-splide",class:{center:t.countSplide},attrs:{options:t.splideOptions},on:{"splide:move":t.onSplideMove}},t._l(t.cardData,(function(t,n){return e("SplideSlide",{key:n},[e("service-card",{attrs:{card:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var l={props:{reverse:{type:Boolean,default:!1}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"business-card",class:{"business-card--reverse":t.reverse}},[e("div",{staticClass:"business-card__aside"},[t._t("img")],2),t._v(" "),e("div",{staticClass:"business-card__content"},[t.$slots.title?e("div",{staticClass:"business-card__title"},[t._t("title")],2):t._e(),t._v(" "),e("div",{staticClass:"business-card__text"},[t._t("text")],2),t._v(" "),e("div",{staticClass:"business-card__footer"},[t._t("btn")],2)])])}),[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";e.a={list:[{id:1,title:"Кредитование бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{id:5,title:"Расчетно-кассовое обслуживание",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/rko"},{id:4,title:"Депозиты для юридических лиц",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"},{id:2,title:"Зарплатный проект",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"},{id:6,title:"ВЭД",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ved"},{id:7,title:"Аккредитивы",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/akkreditivy"},{id:3,title:"Эквайринг для бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"}],credits:[{title:"Кредит под залог недвижимости",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-pod-zalog-nedvizhimosti"},{title:"Кредит на развитие",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-razvitie"},{title:"Кредит МСП",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-msp"},{title:"Овердрафт",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/overdraft"},{title:"Рефинансирование",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/refinansirovanie"},{title:"Кредит на пополнение оборотных средств",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-popolnenie-oborotnyh-sredstv"}]}},362:function(t,e,n){"use strict";n.r(e);var l=n(269),r=n(270),c=n(271),v={components:{CardsShowcase:l.a,BusinessCard:r.a},data:function(){return{cardData:c.a.list}},created:function(){this.$faq.setArrayLength(7)}},o=n(6),component=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content content-inside"},[e("div",{staticClass:"container"},[e("ui-breadcrumbs",{attrs:{pages:[{title:"Услуги для бизнеса",href:"/biznesu/uslugi-dlya-biznesa"},{title:"Кредитование бизнеса",href:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{title:"Кредит МСП"}]}}),t._v(" "),e("h1",[t._v("Кредит МСП")]),t._v(" "),e("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Льготный кредит на любые цели с индивидуальным подходом\n      ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n        Цели кредитования: любые цели, связанные с бизнесом\n      ")]},proxy:!0},{key:"link",fn:function(){return[e("nuxt-link",{staticClass:"btn btn--full btn--white",attrs:{to:""}},[t._v("\n          Оставить заявку\n        ")])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])}),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",[e("business-card",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg"}})]},proxy:!0},{key:"title",fn:function(){return[t._v("\n          Цели\n        ")]},proxy:!0},{key:"text",fn:function(){return[e("div",{staticClass:"list-shield"},[e("ul",[e("li",[t._v("На развитие бизнеса")]),t._v(" "),e("li",[t._v("Инвестиции в свой бизнес")]),t._v(" "),e("li",[t._v("\n                Приобретения оборудования, техники, коммерческой недвижимости\n              ")]),t._v(" "),e("li",[t._v("Пополнения оборотного капитала")]),t._v(" "),e("li",[t._v("На развитие предпринимательской деятельности")])])])]},proxy:!0}])})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Условия")]),t._v(" "),e("div",{staticClass:"faq-items"},[e("faq-item",{attrs:{title:"Цели кредитования","is-active":t.$faq.activeIndexes[0]},on:{click:function(e){return t.$faq.toggleActive(0)}}},[t._v("\n        Банк осуществляет льготное кредитование субъектов малого и среднего\n        предпринимательства по Соглашению, заключенному с Министерством\n        экономического развития Российской Федерации в рамках Постановления\n        Правительства РФ от 30.12.2018 №1764 «Об утверждении Правил\n        предоставления субсидий из федерального бюджета российским кредитным\n        организациям и специализированным финансовым обществам на возмещение\n        недополученных ими доходов по кредитам, выданным в 2019 - 2024 годах\n        субъектам малого и среднего предпринимательства, а также физическим\n        лицам, применяющим специальный налоговый режим «Налог на\n        профессиональный доход», по льготной ставке»\n        "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"list-dotted"},[e("ul",[e("li",[t._v("Сумма кредита: от 1 до 60 млн")]),t._v(" "),e("li",[t._v("Срок кредитования: от 12 до 120 месяцев")]),t._v(" "),e("li",[t._v("Отсрочка погашения основного долга: до 6 месяцев")]),t._v(" "),e("li",[t._v("Цели кредитования: любые цели, связанные с бизнесом")])])])]),t._v(" "),e("faq-item",{attrs:{title:"Сумма и срок","is-active":t.$faq.activeIndexes[1]},on:{click:function(e){return t.$faq.toggleActive(1)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Отсрочка","is-active":t.$faq.activeIndexes[2]},on:{click:function(e){return t.$faq.toggleActive(2)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Залог","is-active":t.$faq.activeIndexes[3]},on:{click:function(e){return t.$faq.toggleActive(3)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Поручительство","is-active":t.$faq.activeIndexes[4]},on:{click:function(e){return t.$faq.toggleActive(4)}}},[e("h4",[t._v("Для заемщиков ЮЛ")]),t._v("\n        Для заемщиков ЮЛ поручительство физических лиц – собственников\n        бизнеса, владеющих долей 20% и более уставного капитала\n        "),e("br"),t._v(" "),e("br"),t._v(" "),e("h4",[t._v("Для заемщиков ИП")]),t._v("\n        поручительство супруга/супруги (в случае если Заемщик не состоит в\n        браке, то обязательно предоставление поручительства третьего лица или\n        страхование жизни и здоровья Заемщика)\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Порядок погашения","is-active":t.$faq.activeIndexes[5]},on:{click:function(e){return t.$faq.toggleActive(5)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Требования к заемщику","is-active":t.$faq.activeIndexes[6]},on:{click:function(e){return t.$faq.toggleActive(6)}}},[t._v("\n        Какой-то текст\n      ")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("br")],1),t._v(" "),e("cards-showcase",{attrs:{"card-data":t.cardData},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      Полный комплекс услуг для бизнеса\n    ")]},proxy:!0}])})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-3"},[e("div",{staticClass:"number-box"},[e("div",{staticClass:"number-box__title"},[t._v("\n            Ставка в год\n          ")]),t._v(" "),e("div",{staticClass:"number-box__text"},[t._v("\n            от "),e("b",[t._v("18%")]),t._v(" годовых\n          ")])])]),t._v(" "),e("div",{staticClass:"column col-3"},[e("div",{staticClass:"number-box"},[e("div",{staticClass:"number-box__title"},[t._v("\n            Сумма\n          ")]),t._v(" "),e("div",{staticClass:"number-box__text"},[t._v("\n            до "),e("b",[t._v("60 000 000 ₽")])])])]),t._v(" "),e("div",{staticClass:"column col-3"},[e("div",{staticClass:"number-box"},[e("div",{staticClass:"number-box__title"},[t._v("\n            Срок\n          ")]),t._v(" "),e("div",{staticClass:"number-box__text"},[t._v("\n            от "),e("b",[t._v("10")]),t._v(" лет\n          ")])])]),t._v(" "),e("div",{staticClass:"column col-3"},[e("div",{staticClass:"number-box"},[e("div",{staticClass:"number-box__title"},[t._v("\n            Срок рассмотрения\n          ")]),t._v(" "),e("div",{staticClass:"number-box__text"},[t._v("\n            до "),e("b",[t._v("5")]),t._v(" дней\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"step-box back-grey"},[e("div",{staticClass:"step-box__header"},[e("div",{staticClass:"step-box__title"},[t._v("\n          Открыть счет для бизнеса просто\n        ")])]),t._v(" "),e("div",{staticClass:"step-box__content"},[e("ul",[e("li",[t._v("Отправьте заявку на сайте или по телефону")]),t._v(" "),e("li",[t._v("Получите консультацию по телефону")]),t._v(" "),e("li",[t._v("Оформим документы без очередей")])])]),t._v(" "),e("div",{staticClass:"offset-footer"},[e("a",{staticClass:"btn btn--full",attrs:{href:"#"}},[t._v("Оставить заявку")])])])}],!1,null,null,null);e.default=component.exports}}]);