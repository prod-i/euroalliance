(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{268:function(e,n,t){"use strict";t(106);var l={props:{card:{type:Object,required:!0}}},r=t(6),component=Object(r.a)(l,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"services"},[n("nuxt-link",{staticClass:"services-link",attrs:{to:e.card.link}}),e._v(" "),n("div",{staticClass:"services-image"},[n("img",{attrs:{src:e.card.icon,alt:e.card.title,loading:"lazy"}})]),e._v(" "),n("div",{staticClass:"services-title"},[e._v("\n    "+e._s(e.card.title)+"\n  ")])],1)}),[],!1,null,null,null);n.a=component.exports},271:function(e,n,t){"use strict";n.a={list:[{id:1,title:"Кредитование бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa"},{id:5,title:"Расчетно-кассовое обслуживание",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/rko"},{id:4,title:"Депозиты для юридических лиц",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/depozity-dlya-yuridicheskih-lic"},{id:2,title:"Зарплатный проект",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/zarplatnyj-proekt"},{id:6,title:"ВЭД",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ved"},{id:7,title:"Аккредитивы",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/akkreditivy"},{id:3,title:"Эквайринг для бизнеса",icon:"/temp/1.png",link:"/biznesu/uslugi-dlya-biznesa/ekvajring-dlya-biznesa"}],credits:[{title:"Кредит под залог недвижимости",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-pod-zalog-nedvizhimosti"},{title:"Кредит на развитие",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-razvitie"},{title:"Кредит МСП",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-msp"},{title:"Овердрафт",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/overdraft"},{title:"Рефинансирование",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/refinansirovanie"},{title:"Кредит на пополнение оборотных средств",link:"/biznesu/uslugi-dlya-biznesa/kreditovanie-biznesa/kredit-na-popolnenie-oborotnyh-sredstv"}]}},276:function(e,n,t){"use strict";n.a={list:[{id:1,title:"Электронная регистрация недвижимости",icon:"/temp/1.png",link:"/personal/servisy/elektronnaya-registraciya-nedvizhimosti"},{id:2,title:"Кешбек по карте «МИР»",icon:"/temp/1.png",link:"/personal/servisy/keshbek-po-karte-mir"},{id:3,title:"Оплата ЖКХ",icon:"/temp/1.png",link:"/personal/servisy/oplata-zhkh"},{id:4,title:"Улучшение кредитной истории",icon:"/temp/1.png",link:"/personal/servisy/uluchshenie-kreditnoj-istorii"},{id:5,title:"Мобильное приложение",icon:"/temp/1.png",link:"/personal/servisy/mobilnoe-prilozhenie"}]}},283:function(e,n,t){"use strict";t(106);var l=t(268),r=t(276),c={components:{ServiceCard:l.a},props:{cards:{type:Array}},data:function(){return{cardData:r.a}}},o=t(6),component=Object(o.a)(c,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"columns columns--cards"},e._l(e.cards,(function(e){var t=e.id,l=e.icon,title=e.title,link=e.link;return n("div",{key:t,staticClass:"column col-2-5 lg-col-3 md-col-4 sm-col-12"},[n("service-card",{attrs:{card:{icon:l,title:title,link:link}}})],1)})),0)}),[],!1,null,null,null);n.a=component.exports},317:function(e,n,t){"use strict";t.r(n);var l=t(283),r=t(271),c={components:{ServicesBlock:l.a},data:function(){return{cardData:r.a.list}}},o=t(6),component=Object(o.a)(c,(function(){var e=this,n=e._self._c;return n("section",{staticClass:"content back-grey"},[n("div",{staticClass:"container"},[n("ui-breadcrumbs",{attrs:{pages:[{title:"Сервисы банка"}]}}),e._v(" "),n("h1",[e._v("Сервисы банка")]),e._v(" "),n("services-block",{attrs:{cards:e.cardData}})],1)])}),[],!1,null,null,null);n.default=component.exports}}]);