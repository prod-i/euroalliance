(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{268:function(t,n,e){"use strict";e(106);var l={props:{card:{type:Object,required:!0}}},r=e(6),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"services"},[n("nuxt-link",{staticClass:"services-link",attrs:{to:t.card.link}}),t._v(" "),n("div",{staticClass:"services-image"},[n("img",{attrs:{src:t.card.icon,alt:t.card.title,loading:"lazy"}})]),t._v(" "),n("div",{staticClass:"services-title"},[t._v("\n    "+t._s(t.card.title)+"\n  ")])],1)}),[],!1,null,null,null);n.a=component.exports},269:function(t,n,e){"use strict";var l={components:{ServiceCard:e(268).a},props:{cardData:{type:Array,required:!0}},data:function(){return{splideOptions:{perPage:5,gap:20,pagination:!1,breakpoints:{1099:{perPage:4},1023:{perPage:3,arrows:!0},500:{perPage:1,arrows:!0,center:!0,padding:90}}},isActive:0}},computed:{countSplide:function(){return this.cardData.length<5}},methods:{onSplideMove:function(t,n){this.isActive=n},changeSlide:function(t){this.$refs.splide.go(t)}}},r=e(6),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"back-grey offset"},[n("div",{staticClass:"container"},[n("div",{staticClass:"head center"},[n("div",{staticClass:"head-content"},[n("div",{staticClass:"head-title"},[t._t("title")],2)])]),t._v(" "),n("client-only",[n("Splide",{ref:"splide",staticClass:"services-splide",class:{center:t.countSplide},attrs:{options:t.splideOptions},on:{"splide:move":t.onSplideMove}},t._l(t.cardData,(function(t,e){return n("SplideSlide",{key:e},[n("service-card",{attrs:{card:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);n.a=component.exports},270:function(t,n,e){"use strict";var l={props:{reverse:{type:Boolean,default:!1}}},r=e(6),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"business-card",class:{"business-card--reverse":t.reverse}},[n("div",{staticClass:"business-card__aside"},[t._t("img")],2),t._v(" "),n("div",{staticClass:"business-card__content"},[t.$slots.title?n("div",{staticClass:"business-card__title"},[t._t("title")],2):t._e(),t._v(" "),n("div",{staticClass:"business-card__text"},[t._t("text")],2),t._v(" "),n("div",{staticClass:"business-card__footer"},[t._t("btn")],2)])])}),[],!1,null,null,null);n.a=component.exports},271:function(t,n,e){"use strict";n.a={list:[{id:1,title:"Кредитование бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{id:5,title:"Расчетно-кассовое обслуживание",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/rko"},{id:4,title:"Депозиты для юридических лиц",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"},{id:2,title:"Зарплатный проект",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"},{id:6,title:"ВЭД",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ved"},{id:7,title:"Аккредитивы",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/akkreditivy"},{id:3,title:"Эквайринг для бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"}],credits:[{title:"Кредит под залог недвижимости",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-pod-zalog-nedvizhimosti"},{title:"Кредит на развитие",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-razvitie"},{title:"Кредит МСП",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-msp"},{title:"Овердрафт",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/overdraft"},{title:"Рефинансирование",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/refinansirovanie"},{title:"Кредит на пополнение оборотных средств",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-popolnenie-oborotnyh-sredstv"}]}},340:function(t,n,e){"use strict";e.r(n);var l=e(269),r=e(270),c=e(271),o={components:{CardsShowcase:l.a,BusinessCard:r.a},data:function(){return{cardData:c.a.list}}},v=e(6),component=Object(v.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"content content-inside"},[n("div",{staticClass:"container"},[n("ui-breadcrumbs",{attrs:{pages:[{title:"Услуги для бизнеса",href:"/biznesu/uslugi-dlya-biznesa"},{title:"Зарплатный проект"}]}}),t._v(" "),n("h1",[t._v("Зарплатный проект")]),t._v(" "),n("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Зарплатный проект\n      ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n        Снизьте риски при выдаче наличных, обеспечьте конфиденциальность,\n        сэкономьте время бухгалтера и уменьшите бумажный документооборот\n      ")]},proxy:!0},{key:"link",fn:function(){return[n("nuxt-link",{staticClass:"btn btn--full btn--white",attrs:{to:""}},[t._v("\n          Подать заявку\n        ")])]},proxy:!0},{key:"img",fn:function(){return[n("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])}),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"information information--icon information--i"},[t._v("\n      Для простоты и быстроты осуществления расчетов с банком можно\n      использовать систему Банк-Клиент — систему электронного обмена\n      информацией в режиме реального времени (on-line), что значительно\n      облегчает работу бухгалтера. (информация про клиент-банк и ссылка для\n      входа на него)\n    ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"back-grey offset offset--small"},[n("div",{staticClass:"container"},[n("business-card",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{attrs:{src:"/temp/icon-slim.svg"}})]},proxy:!0},{key:"title",fn:function(){return[t._v("\n          Зарплатный проект и РКО в одном месте\n        ")]},proxy:!0},{key:"text",fn:function(){return[n("div",{staticClass:"list-shield"},[n("ul",[n("li",[t._v("Индивидуальный менеджер")]),t._v(" "),n("li",[t._v("Отсутствие комиссии за выплату зарплаты сотрудникам")]),t._v(" "),n("li",[t._v("Индивидуальные условия на продукты банка")])])])]},proxy:!0},{key:"btn",fn:function(){return[n("nuxt-link",{staticClass:"btn btn--fixed",attrs:{to:""}},[t._v("\n            Оставить заявку\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"container"},[n("h3",[t._v("Документы")]),t._v(" "),n("div",{staticClass:"columns columns--cards"},[n("div",{staticClass:"column col-6 sm-col-12"},[n("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"#"}},[t._v("Договор банковского счета в валюте")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"column col-6 sm-col-12"},[n("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"#"}},[t._v("Состав представляемой информации по валютным операциям")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"column col-6 sm-col-12"},[n("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"#"}},[t._v("Договор банковского счета в валюте")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"column col-6 sm-col-12"},[n("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"#"}},[t._v("Состав представляемой информации по валютным операциям")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1)])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("cards-showcase",{attrs:{"card-data":t.cardData},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      Полный комплекс услуг для бизнеса\n    ")]},proxy:!0}])})],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"container container--small"},[n("div",{staticClass:"list-shield"},[n("ul",[n("li",[t._v("Быстрое зачисление")]),t._v(" "),n("li",[t._v("\n            Выдача карт без визита в банк (сотрудник банка приедет к вам на\n            предприятие)\n          ")]),t._v(" "),n("li",[t._v("\n            Всегда онлайн (Современный интернет-банк для управления зарплатным\n            проектом)\n          ")]),t._v(" "),n("li",[t._v("\n            Без комиссии (Выпускаем карты и зачисляем зарплату бесплатно)\n          ")])])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"columns columns--cards"},[n("div",{staticClass:"column col-6 md-col-12"},[n("div",{staticClass:"information information--grey"},[n("h3",[t._v("Преимущества для предприятия")]),t._v(" "),n("div",{staticClass:"list-shield"},[n("ul",[n("li",[t._v("Комфортное обслуживание в банке. Персональный менеджер")]),t._v(" "),n("li",[t._v("\n                Зарплатный проект дает предприятию реальную возможность\n                сэкономить\n              ")]),t._v(" "),n("li",[t._v("Минимизировать кассовые операции")]),t._v(" "),n("li",[t._v("\n                Позволяет сохранить конфиденциальность информации о зарплате\n              ")]),t._v(" "),n("li",[t._v("\n                Устранить риск, связанный с перевозкой и хранением наличных\n              ")]),t._v(" "),n("li",[t._v("\n                Сводятся на «нет» дополнительные расходы на инкассацию,\n                оборудование и содержание кассовых кабин, обработку и хранение\n                документов (ведомостей, квитанций)\n              ")]),t._v(" "),n("li",[t._v("\n                Возможность установки банкомата на территории предприятия\n              ")])])])])]),t._v(" "),n("div",{staticClass:"column col-6 md-col-12"},[n("div",{staticClass:"information information--grey information--back"},[n("h3",[t._v("Преимущества для сотрудников")]),t._v(" "),n("div",{staticClass:"list-shield"},[n("ul",[n("li",[t._v("Выплата заработной платы без задержек")]),t._v(" "),n("li",[t._v("\n                Переводы без комиссий с карты банка на любую карту стороннего\n                банка (до 100 тысяч рублей в месяц)\n              ")]),t._v(" "),n("li",[t._v("\n                Бесплатное снятие наличных в любом банкомате страны (до 5\n                операций в месяц)\n              ")]),t._v(" "),n("li",[t._v("\n                Карта банка — современный платежный инструмент: покупки в\n                любых магазинах, интернет-покупки, оплата ЖКХ и других\n                платежей через приложение банка\n              ")]),t._v(" "),n("li",[t._v("\n                Рабочее приложение банка на любом смартфоне (ссылка на\n                приложение)\n              ")]),t._v(" "),n("li",[t._v("Кэш-бек платежной системы МИР")])])])])])])}],!1,null,null,null);n.default=component.exports}}]);