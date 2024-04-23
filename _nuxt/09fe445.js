(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(t,e,n){"use strict";n(135);var l={name:"TabDefault",props:{id:{type:String,default:null},title:{type:String,required:!0},count:{type:Number,default:null},isActive:{type:Boolean,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-item",class:{active:t.isActive},on:{click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.title)+" "),t.count>0?e("span",[t._v(t._s(t.count))]):t._e()])}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){"use strict";e.a={credit:{tabs:{cash:["С обеспечением","Без обеспечения"],fortheir:["При переводе ЗП и/или Пенсий в банк с обеспечением","При переводе ЗП и/или Пенсий в банк без обеспечения","Для пенсионеров, для сотрудников бюджетных организаций с обеспечением","Для пенсионеров, для сотрудников бюджетных организаций без обеспечения"],refinancing:["Gри переводе ЗП и/или Пенсий в банк с обеспечением","При переводе ЗП и/или Пенсий в банк без обеспечения","Для пенсионеров, для сотрудников бюджетных организаций с обеспечением","Для пенсионеров, для сотрудников бюджетных организаций без обеспечения","Прочие клиенты с обеспечением","Прочие клиенты без обеспечения"],fiz:["??"]},sumCredit:{title:"Сумма кредита",min:1e4,max:3e7},timeCredit:{title:"На какой срок",min:10,max:60},buttons:[{id:"cash",title:"Наличными"},{id:"fortheir",title:"Для своих"},{id:"refinancing",title:"Рефинансирование"},{id:"fiz",title:"Кредитование физ.лиц"}]},deposit:{tabs:[],sumCredit:{title:"Сумма",min:1e4,max:3e7},timeCredit:{title:"На какой срок",min:10,max:60}}}},278:function(t,e,n){"use strict";n(60);var l=n(272),r=(n(135),{props:{sumCreditValue:{type:Number,required:!0},timeCreditValue:{type:Number,required:!0}}}),c=n(6),o=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-box calculator-box--aside"},[e("div",{staticClass:"calculator-result center"},[e("ul",{staticClass:"calculator-result__value"},[t._m(0),t._v(" "),e("li",[e("span",[t._v(t._s(t._f("invToCurrency")(t._f("roundCurrency")(t.sumCreditValue))))]),t._v("\n        Сумма кредита\n      ")])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"calculator-result__cost"},[t._v("\n      Полная стоимость кредита ??%\n    ")]),t._v(" "),t._m(2),t._v(" "),e("nuxt-link",{staticClass:"btn btn--full",attrs:{to:""}},[t._v("\n      Подать заявку\n    ")])],1)])}),[function(){var t=this,e=t._self._c;return e("li",[e("span",[t._v("?? %")]),t._v("\n        Процентов в месяц\n      ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__total"},[e("span",[t._v("?? ₽")]),t._v("\n      Ежемесячный платёж\n    ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__info"},[t._v("\n      Приведенные расчеты являются приблизительными. "),e("br"),t._v("\n      Для точного определения суммы переплаты по кредиту обратитесь в офис\n      банка «ЕВРОАЛЬЯНС».\n    ")])}],!1,null,null,null).exports,m={props:{sumDepositValue:{type:Number,required:!0},timeDepositValue:{type:Number,required:!0}}},v=Object(c.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-box calculator-box--aside"},[e("div",{staticClass:"calculator-result center"},[e("ul",{staticClass:"calculator-result__value"},[e("li",[e("span",[t._v(t._s(t._f("invToCurrency")(t.sumDepositValue)))]),t._v("\n        Сумма в конце срока\n      ")])]),t._v(" "),t._m(0),t._v(" "),e("nuxt-link",{staticClass:"btn btn--full",attrs:{to:""}},[t._v("\n      Подать заявку\n    ")])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"calculator-result__info"},[t._v("\n      Приведенные расчеты являются приблизительными. "),e("br"),t._v("\n      Для точного определения суммы переплаты по кредиту обратитесь в офис\n      банка «ЕВРОАЛЬЯНС».\n    ")])}],!1,null,null,null).exports,d={components:{TabDefault:l.a,CalculatorCreditForm:o,CalculatorDepositForm:v},props:{type:{type:String,required:!0},tabs:{type:Array},sum:{type:Object,required:!0},time:{type:Object,required:!0}},data:function(){return{activeButtonIndex:0,sumValue:null,timeValue:null}},computed:{handlePercentageSum:function(){var t=this.sum.max-this.sum.min;return(this.sumValue-this.sum.min)/t*100},handlePercentageTime:function(){var t=this.time.max-this.time.min;return(this.timeValue-this.time.min)/t*100}},watch:{sumValue:{handler:function(){this.percentagesum=this.handlePercentageSum},immediate:!0},timeValue:{handler:function(){this.percentageTime=this.handlePercentageTime},immediate:!0}},mounted:function(){this.sum&&void 0!==this.sum.min&&(this.sumValue=this.sum.min),this.time&&void 0!==this.time.min&&(this.timeValue=this.time.min)},methods:{setActiveButton:function(t){this.activeButtonIndex=t}}},_=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"calculator"},[e("div",{staticClass:"calculator-box"},[e("div",{staticClass:"calculator-header"},[e("div",{staticClass:"calculator-title"},[t._v("\n        "+t._s("credit"===t.type?"Рассчитать:":"Хочу вложить")+"\n      ")]),t._v(" "),t._l(t.tabs,(function(button,n){return[t.tabs?e("tab-default",{key:n,attrs:{title:button,"is-active":t.activeButtonIndex===n},on:{click:function(e){return t.setActiveButton(n)}}}):t._e()]}))],2),t._v(" "),e("div",{staticClass:"calculator-items"},[e("div",{staticClass:"calculator-item"},[e("div",{staticClass:"calculator-item__title"},[t._v("\n          "+t._s("credit"===t.type?"Сумма кредита":"Сумма")+"\n          "),e("span",[t._v(t._s(t._f("invToCurrency")(t.sumValue)))])]),t._v(" "),e("div",{staticClass:"calculator-range"},[e("div",{staticClass:"calculator-range__input"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sumValue,expression:"sumValue",modifiers:{number:!0}}],attrs:{type:"range",step:"10",min:t.sum.min,max:t.sum.max},domProps:{value:t.sumValue},on:{__r:function(e){t.sumValue=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"calculator-range__line"},[e("span",{style:{width:t.percentagesum+"%"}})]),t._v(" "),e("div",{staticClass:"calculator-range__spin",style:{left:t.percentagesum+"%"}})]),t._v(" "),e("ul",{staticClass:"calculator-item__position"},[e("li",[t._v("от "+t._s(t._f("invToCurrency")(t.sum.min)))]),t._v(" "),e("li",[t._v("до "+t._s(t._f("invToCurrency")(t.sum.max)))])])])]),t._v(" "),e("div",{staticClass:"calculator-item"},[e("div",{staticClass:"calculator-item__title"},[t._v("\n        На какой срок\n        "),e("span",[t._v(t._s(t.timeValue))])]),t._v(" "),e("div",{staticClass:"calculator-range"},[e("div",{staticClass:"calculator-range__input"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.timeValue,expression:"timeValue",modifiers:{number:!0}}],attrs:{type:"range",step:"1",min:t.time.min,max:t.time.max},domProps:{value:t.timeValue},on:{__r:function(e){t.timeValue=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"calculator-range__line"},[e("span",{style:{width:t.percentageTime+"%"}})]),t._v(" "),e("div",{staticClass:"calculator-range__spin",style:{left:t.percentageTime+"%"}})]),t._v(" "),e("ul",{staticClass:"calculator-item__position"},[e("li",[t._v("от "+t._s(t.time.min)+" месяцев")]),t._v(" "),e("li",[t._v("до "+t._s(t.time.max)+" месяцев")])])])]),t._v(" "),"credit"===t.type&&null!==t.sumValue&&null!==t.timeValue?e("calculator-credit-form",{attrs:{"sum-credit-value":t.sumValue,"time-credit-value":t.timeValue}}):t._e(),t._v(" "),"deposit"===t.type&&null!==t.sumValue&&null!==t.timeValue?e("calculator-deposit-form",{attrs:{"sum-deposit-value":t.sumValue,"time-deposit-value":t.timeValue}}):t._e()],1)}),[],!1,null,null,null).exports,f={components:{TabDefault:l.a,Calculator:_},props:{type:{type:String,default:"credit"},calculatorData:{type:Object,required:!0}},data:function(){return{activeButtonId:0,typeTabs:null}},mounted:function(){this.calculatorData&&(this.typeTabs=Object.keys(this.calculatorData.tabs)[0])},methods:{setActiveButton:function(t,e){this.activeButtonId=t,this.typeTabs=e}}},h=Object(c.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"head"},[t._m(0),t._v(" "),t.calculatorData.buttons?e("div",{staticClass:"head-aside"},[e("div",{staticClass:"tabs tabs--white"},t._l(t.calculatorData.buttons,(function(button,n){return e("tab-default",{key:button.id,attrs:{title:button.title,"is-active":t.activeButtonId===n},on:{click:function(e){return t.setActiveButton(n,button.id)}}})})),1)]):t._e()]),t._v(" "),e("calculator",{attrs:{type:t.type,tabs:t.calculatorData.tabs[t.typeTabs],sum:t.calculatorData.sumCredit,time:t.calculatorData.timeCredit}})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"head-content"},[t("div",{staticClass:"head-title"},[this._v("\n        Калькулятор\n      ")])])}],!1,null,null,null);e.a=h.exports},279:function(t,e,n){"use strict";n(37),n(59),n(106);var l={props:{customClass:{type:String,default:""},title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},img:{type:String,required:!0},items:{type:Array,required:!0},buttonsText:{type:Array,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:"offer ".concat(t.customClass)},[e("div",{staticClass:"offer-image"},[e("img",{attrs:{src:t.img,alt:t.title,width:"700",height:"400",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"offer-content"},[e("div",{staticClass:"offer-text"},[e("div",{staticClass:"offer-header"},[e("div",{staticClass:"offer-title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info"},[t._v("\n          "+t._s(t.description)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"offer-price"},t._l(t.items,(function(n,l){return e("div",{key:l,staticClass:"offer-price__item"},[e("div",{staticClass:"offer-price__title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-price__value"},[t._v("\n          от "),e("span",[t._v(t._s(n.sum))])])])})),0),t._v(" "),e("div",{staticClass:"offer-order"},[e("nuxt-link",{staticClass:"btn btn--small btn--white btn--mobile-large",attrs:{to:t.link}},[t._v("\n        "+t._s(t.buttonsText[0])+"\n      ")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn--small btn--white btn--mobile-large",attrs:{to:t.link}},[t._v("\n        "+t._s(t.buttonsText[1])+"\n      ")])],1)])])}),[],!1,null,null,null);e.a=component.exports},288:function(t,e,n){"use strict";e.a=[{title:"Кредит наличными",description:"Кредит наличными",link:"/personal/kredit/nalichnymi",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"50 000 ₽"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Кредит «для своих»",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/dlya-svoih",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"24.5 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Рефинансирование",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/refinansirovanie",icon:"/temp/icon.svg",img:"/temp/icon-slim.svg",items:[{title:"Ставка в год",sum:"13 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]},{title:"Кредит на индивидуальных условиях",description:"Кредит для пенсионеров, зарплатных клиентов, «бюджетников»",link:"/personal/kredit/refinansirovanie",img:"/temp/icon-slim.svg",icon:"/temp/icon.svg",items:[{title:"Ставка в год",sum:"13 %"},{title:"Сумма",sum:"1000000 p"},{title:"Срок",sum:"5 лет"}]}]},298:function(t,e,n){"use strict";n(37),n(59),n(106),n(38),n(18);var l=n(272),r=n(279),c=n(288),o={components:{TabDefault:l.a,InfoCard:r.a},data:function(){return{infoData:c.a,buttons:[{title:"Все",count:4},{title:"Потребительские цели",count:2},{title:"На иные цели",count:2}],activeButtonId:0}},computed:{filteredCards:function(){var t=this;return"all"!==this.activeButtonId?this.cardData.filter((function(e){return e.type===t.activeButtonId})):this.cardData},filteredCardsCount:function(){return this.filteredCards.length}},methods:{setActiveButton:function(t){this.activeButtonId=t}}},m=n(6),component=Object(m.a)(o,(function(){var t=this,e=t._self._c;return e("div",["/"===t.$route.path?e("div",{staticClass:"head"},[t._m(0),t._v(" "),e("div",{staticClass:"head-aside"},[e("div",{staticClass:"tabs"},t._l(t.buttons,(function(button,n){return e("tab-default",{key:n,attrs:{title:button.title,"is-active":t.activeButtonId===n,count:button.count},on:{click:function(e){return t.setActiveButton(n)}}})})),1)])]):t._e(),t._v(" "),e("div",{staticClass:"offers"},[t._l(t.infoData,(function(n,l){return[l<3&&"/"===t.$route.path||"/"!==t.$route.path?e("info-card",{key:l,attrs:{title:n.title,description:n.description,link:n.link,img:n.img,items:n.items,"buttons-text":["Оформить кредит","Рассчитать кредит"]}}):t._e()]}))],2),t._v(" "),"/"===t.$route.path?e("div",{staticClass:"offset-footer center"},[e("button",{staticClass:"btn btn--full"},[t._v("\n      Показать ещё\n    ")])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"head-content"},[t("div",{staticClass:"head-title"},[this._v("\n        Потребительские кредиты\n      ")])])}],!1,null,null,null);e.a=component.exports}}]);