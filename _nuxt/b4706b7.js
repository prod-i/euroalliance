(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{268:function(t,e,n){"use strict";n(106);var l={props:{card:{type:Object,required:!0}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"services"},[e("nuxt-link",{staticClass:"services-link",attrs:{to:t.card.link}}),t._v(" "),e("div",{staticClass:"services-image"},[e("img",{attrs:{src:t.card.icon,alt:t.card.title,loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"services-title"},[t._v("\n    "+t._s(t.card.title)+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var l={components:{ServiceCard:n(268).a},props:{cardData:{type:Array,required:!0}},data:function(){return{splideOptions:{perPage:5,gap:20,pagination:!1,breakpoints:{1099:{perPage:4},1023:{perPage:3,arrows:!0},500:{perPage:1,arrows:!0,center:!0,padding:90}}},isActive:0}},computed:{countSplide:function(){return this.cardData.length<5}},methods:{onSplideMove:function(t,e){this.isActive=e},changeSlide:function(t){this.$refs.splide.go(t)}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-grey offset"},[e("div",{staticClass:"container"},[e("div",{staticClass:"head center"},[e("div",{staticClass:"head-content"},[e("div",{staticClass:"head-title"},[t._t("title")],2)])]),t._v(" "),e("client-only",[e("Splide",{ref:"splide",staticClass:"services-splide",class:{center:t.countSplide},attrs:{options:t.splideOptions},on:{"splide:move":t.onSplideMove}},t._l(t.cardData,(function(t,n){return e("SplideSlide",{key:n},[e("service-card",{attrs:{card:t}})],1)})),1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},272:function(t,e,n){"use strict";n(135);var l={name:"TabDefault",props:{id:{type:String,default:null},title:{type:String,required:!0},count:{type:Number,default:null},isActive:{type:Boolean,required:!0}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-item",class:{active:t.isActive},on:{click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.title)+" "),t.count>0?e("span",[t._v(t._s(t.count))]):t._e()])}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){"use strict";e.a={credit:{tabs:{cash:["С обеспечением","Без обеспечения"],fortheir:["При переводе ЗП и/или Пенсий в банк с обеспечением","При переводе ЗП и/или Пенсий в банк без обеспечения","Для пенсионеров, для сотрудников бюджетных организаций с обеспечением","Для пенсионеров, для сотрудников бюджетных организаций без обеспечения"],refinancing:["Gри переводе ЗП и/или Пенсий в банк с обеспечением","При переводе ЗП и/или Пенсий в банк без обеспечения","Для пенсионеров, для сотрудников бюджетных организаций с обеспечением","Для пенсионеров, для сотрудников бюджетных организаций без обеспечения","Прочие клиенты с обеспечением","Прочие клиенты без обеспечения"],fiz:["??"]},sumCredit:{title:"Сумма кредита",min:1e4,max:3e7},timeCredit:{title:"На какой срок",min:10,max:60},buttons:[{id:"cash",title:"Наличными"},{id:"fortheir",title:"Для своих"},{id:"refinancing",title:"Рефинансирование"},{id:"fiz",title:"Кредитование физ.лиц"}]},deposit:{tabs:[],sumCredit:{title:"Сумма",min:1e4,max:3e7},timeCredit:{title:"На какой срок",min:10,max:60}}}},278:function(t,e,n){"use strict";n(60);var l=n(272),c=(n(135),{props:{sumCreditValue:{type:Number,required:!0},timeCreditValue:{type:Number,required:!0}}}),r=n(6),o=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-box calculator-box--aside"},[e("div",{staticClass:"calculator-result center"},[e("ul",{staticClass:"calculator-result__value"},[t._m(0),t._v(" "),e("li",[e("span",[t._v(t._s(t._f("invToCurrency")(t._f("roundCurrency")(t.sumCreditValue))))]),t._v("\n        Сумма кредита\n      ")])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"calculator-result__cost"},[t._v("\n      Полная стоимость кредита ??%\n    ")]),t._v(" "),t._m(2),t._v(" "),e("nuxt-link",{staticClass:"btn btn--full",attrs:{to:""}},[t._v("\n      Подать заявку\n    ")])],1)])}),[function(){var t=this,e=t._self._c;return e("li",[e("span",[t._v("?? %")]),t._v("\n        Процентов в месяц\n      ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__total"},[e("span",[t._v("?? ₽")]),t._v("\n      Ежемесячный платёж\n    ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__info"},[t._v("\n      Приведенные расчеты являются приблизительными. "),e("br"),t._v("\n      Для точного определения суммы переплаты по кредиту обратитесь в офис\n      банка «ЕВРОАЛЬЯНС».\n    ")])}],!1,null,null,null).exports,v={props:{sumDepositValue:{type:Number,required:!0},timeDepositValue:{type:Number,required:!0}}},d=Object(r.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-box calculator-box--aside"},[e("div",{staticClass:"calculator-result center"},[e("ul",{staticClass:"calculator-result__value"},[e("li",[e("span",[t._v(t._s(t._f("invToCurrency")(t.sumDepositValue)))]),t._v("\n        Сумма в конце срока\n      ")])]),t._v(" "),t._m(0),t._v(" "),e("nuxt-link",{staticClass:"btn btn--full",attrs:{to:""}},[t._v("\n      Подать заявку\n    ")])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__info"},[t._v("\n      Приведенные расчеты являются приблизительными. "),e("br"),t._v("\n      Для точного определения суммы переплаты по кредиту обратитесь в офис\n      банка «ЕВРОАЛЬЯНС».\n    ")])}],!1,null,null,null).exports,m={components:{TabDefault:l.a,CalculatorCreditForm:o,CalculatorDepositForm:d},props:{type:{type:String,required:!0},tabs:{type:Array},sum:{type:Object,required:!0},time:{type:Object,required:!0}},data:function(){return{activeButtonIndex:0,sumValue:null,timeValue:null}},computed:{handlePercentageSum:function(){var t=this.sum.max-this.sum.min;return(this.sumValue-this.sum.min)/t*100},handlePercentageTime:function(){var t=this.time.max-this.time.min;return(this.timeValue-this.time.min)/t*100}},watch:{sumValue:{handler:function(){this.percentagesum=this.handlePercentageSum},immediate:!0},timeValue:{handler:function(){this.percentageTime=this.handlePercentageTime},immediate:!0}},mounted:function(){this.sum&&void 0!==this.sum.min&&(this.sumValue=this.sum.min),this.time&&void 0!==this.time.min&&(this.timeValue=this.time.min)},methods:{setActiveButton:function(t){this.activeButtonIndex=t}}},_=Object(r.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"calculator"},[e("div",{staticClass:"calculator-box"},[e("div",{staticClass:"calculator-header"},[e("div",{staticClass:"calculator-title"},[t._v("\n        "+t._s("credit"===t.type?"Рассчитать:":"Хочу вложить")+"\n      ")]),t._v(" "),t._l(t.tabs,(function(button,n){return[t.tabs?e("tab-default",{key:n,attrs:{title:button,"is-active":t.activeButtonIndex===n},on:{click:function(e){return t.setActiveButton(n)}}}):t._e()]}))],2),t._v(" "),e("div",{staticClass:"calculator-items"},[e("div",{staticClass:"calculator-item"},[e("div",{staticClass:"calculator-item__title"},[t._v("\n          "+t._s("credit"===t.type?"Сумма кредита":"Сумма")+"\n          "),e("span",[t._v(t._s(t._f("invToCurrency")(t.sumValue)))])]),t._v(" "),e("div",{staticClass:"calculator-range"},[e("div",{staticClass:"calculator-range__input"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sumValue,expression:"sumValue",modifiers:{number:!0}}],attrs:{type:"range",step:"10",min:t.sum.min,max:t.sum.max},domProps:{value:t.sumValue},on:{__r:function(e){t.sumValue=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"calculator-range__line"},[e("span",{style:{width:t.percentagesum+"%"}})]),t._v(" "),e("div",{staticClass:"calculator-range__spin",style:{left:t.percentagesum+"%"}})]),t._v(" "),e("ul",{staticClass:"calculator-item__position"},[e("li",[t._v("от "+t._s(t._f("invToCurrency")(t.sum.min)))]),t._v(" "),e("li",[t._v("до "+t._s(t._f("invToCurrency")(t.sum.max)))])])])]),t._v(" "),e("div",{staticClass:"calculator-item"},[e("div",{staticClass:"calculator-item__title"},[t._v("\n        На какой срок\n        "),e("span",[t._v(t._s(t.timeValue))])]),t._v(" "),e("div",{staticClass:"calculator-range"},[e("div",{staticClass:"calculator-range__input"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.timeValue,expression:"timeValue",modifiers:{number:!0}}],attrs:{type:"range",step:"1",min:t.time.min,max:t.time.max},domProps:{value:t.timeValue},on:{__r:function(e){t.timeValue=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"calculator-range__line"},[e("span",{style:{width:t.percentageTime+"%"}})]),t._v(" "),e("div",{staticClass:"calculator-range__spin",style:{left:t.percentageTime+"%"}})]),t._v(" "),e("ul",{staticClass:"calculator-item__position"},[e("li",[t._v("от "+t._s(t.time.min)+" месяцев")]),t._v(" "),e("li",[t._v("до "+t._s(t.time.max)+" месяцев")])])])]),t._v(" "),"credit"===t.type&&null!==t.sumValue&&null!==t.timeValue?e("calculator-credit-form",{attrs:{"sum-credit-value":t.sumValue,"time-credit-value":t.timeValue}}):t._e(),t._v(" "),"deposit"===t.type&&null!==t.sumValue&&null!==t.timeValue?e("calculator-deposit-form",{attrs:{"sum-deposit-value":t.sumValue,"time-deposit-value":t.timeValue}}):t._e()],1)}),[],!1,null,null,null).exports,f={components:{TabDefault:l.a,Calculator:_},props:{type:{type:String,default:"credit"},calculatorData:{type:Object,required:!0}},data:function(){return{activeButtonId:0,typeTabs:null}},mounted:function(){this.calculatorData&&(this.typeTabs=Object.keys(this.calculatorData.tabs)[0])},methods:{setActiveButton:function(t,e){this.activeButtonId=t,this.typeTabs=e}}},h=Object(r.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"head"},[t._m(0),t._v(" "),t.calculatorData.buttons?e("div",{staticClass:"head-aside"},[e("div",{staticClass:"tabs tabs--white"},t._l(t.calculatorData.buttons,(function(button,n){return e("tab-default",{key:button.id,attrs:{title:button.title,"is-active":t.activeButtonId===n},on:{click:function(e){return t.setActiveButton(n,button.id)}}})})),1)]):t._e()]),t._v(" "),e("calculator",{attrs:{type:t.type,tabs:t.calculatorData.tabs[t.typeTabs],sum:t.calculatorData.sumCredit,time:t.calculatorData.timeCredit}})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"head-content"},[t("div",{staticClass:"head-title"},[this._v("\n        Калькулятор\n      ")])])}],!1,null,null,null);e.a=h.exports},288:function(t,e,n){"use strict";e.a=[{title:"Кредит наличными",description:"Кредит наличными",link:"/personal/kredit/nalichnymi",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"50 000 ₽"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Кредит «для своих»",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/dlya-svoih",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Рефинансирование",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/refinansirovanie",icon:"/temp/icon.svg",img:"/temp/icon-slim.svg",items:[{title:"Ставка в год",sum:"13 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Кредит на индивидуальных условиях",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/refinansirovanie",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"13 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]}]},344:function(t,e,n){"use strict";n.r(e);n(61);var l=n(278),c=n(277),r=n(269),o=n(288),v={components:{CalculatorBlock:l.a,CardsShowcase:r.a},data:function(){return{data:c.a,cardData:o.a}},created:function(){this.$faq.setArrayLength(3)}},d=n(6),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content content-inside"},[e("div",{staticClass:"container"},[e("ui-breadcrumbs",{attrs:{pages:[{title:"Кредиты",href:"/personal/kredit"},{title:"Кредит наличными"}]}}),t._v(" "),e("h1",[t._v("Кредит наличными")]),t._v(" "),e("page-showcase",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Кредит наличными с реальной ставкой\n      ")]},proxy:!0},{key:"text",fn:function(){return[e("div",{staticClass:"list-shield"},[e("ul",[e("li",[t._v("0% дополнительных комиссий и 0₽ дополнительных страховок")]),t._v(" "),e("li",[t._v("0% дополнительных комиссий и до 5 лет максимальный срок")])])])]},proxy:!0},{key:"link",fn:function(){return[e("nuxt-link",{staticClass:"btn btn--full btn--white",attrs:{to:""}},[t._v("\n          Подать заявку\n        ")])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:"/temp/icon-slim.svg",alt:"",loading:"lazy"}})]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"back-grey offset offset--small"},[e("div",{staticClass:"container"},[e("calculator-block",{attrs:{"calculator-data":t.data.credit,type:"credit"}})],1)]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"faq-items"},[e("faq-item",{attrs:{title:"Требования к заемщику","is-active":t.$faq.activeIndexes[0]},on:{click:function(e){return t.$faq.toggleActive(0)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Ставки","is-active":t.$faq.activeIndexes[1]},on:{click:function(e){return t.$faq.toggleActive(1)}}},[t._v("\n        Какой-то текст\n      ")]),t._v(" "),e("faq-item",{attrs:{title:"Другие условия","is-active":t.$faq.activeIndexes[2]},on:{click:function(e){return t.$faq.toggleActive(2)}}},[t._v("\n        Какой-то текст\n      ")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Документы")]),t._v(" "),e("div",{staticClass:"columns columns--cards"},[e("div",{staticClass:"column col-6 sm-col-12"},[e("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[e("a",{attrs:{href:"#"}},[t._v("Анкета физического лица на получение кредита")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-6 sm-col-12"},[e("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[e("a",{attrs:{href:"#"}},[t._v("Приложение к анкете")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-6 sm-col-12"},[e("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[e("a",{attrs:{href:"#"}},[t._v("Анкета физического лица на получение кредита")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-6 sm-col-12"},[e("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[e("a",{attrs:{href:"#"}},[t._v("Приложение к анкете")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"column col-6 sm-col-12"},[e("document-card",{scopedSlots:t._u([{key:"title",fn:function(){return[e("a",{attrs:{href:"#"}},[t._v("Анкета физического лица на получение кредита")])]},proxy:!0},{key:"size",fn:function(){return[t._v("\n            77 kB\n          ")]},proxy:!0}])})],1)]),t._v(" "),e("div",{staticClass:"offset offset--small center"},[e("nuxt-link",{staticClass:"btn btn--long btn--full",attrs:{to:""}},[t._v("\n        Заполнить заявку\n      ")])],1)]),t._v(" "),e("div",{staticClass:"back-grey"},[e("cards-showcase",{attrs:{"card-data":t.cardData.slice(1)},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Другие предложения\n      ")]},proxy:!0}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);