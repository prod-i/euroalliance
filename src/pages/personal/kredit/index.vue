<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[{ title: 'Кредиты', href: '/personal/kredit' }]"
      />
      <h1>Кредиты</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Кредит на любые цели
        </template>
        <template #text>
          <div class="list-shield">
            <ul>
              <li><span>0%</span> дополнительных комиссий</li>
              <li><span>до 5 лет</span> максимальный срок</li>
              <li>
                <span>0₽</span> дополнительных страховок, индивидуальный подход
              </li>
            </ul>
          </div>
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
      <!-- 👉 CreditsBlock -->
      <credits-block />

      <br>
      <br>
    </div>
    <!-- 👉 Калькулятор -->
    <div class="back-grey offset offset--small">
      <div class="container">
        <calculator-block :calculator-data="data.credit" type="credit" />
      </div>
    </div>

    <br>
    <br>

    <div class="container">
      <!-- 👉 FAQ Items -->
      <div class="faq-items">
        <faq-item
          title="Условия получения кредита"
          :is-active="$faq.activeIndexes[0]"
          @click="$faq.toggleActive(0)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Как подать заявку онлайн"
          :is-active="$faq.activeIndexes[1]"
          @click="$faq.toggleActive(1)"
        >
          Какой-то текст
        </faq-item>
        <faq-item
          title="Почему могут отказать в получении кредита"
          :is-active="$faq.activeIndexes[2]"
          @click="$faq.toggleActive(2)"
        >
          Какой-то текст
        </faq-item>
      </div>

      <br>
      <br>

      <div class="center">
        <button
          class="btn btn--long btn--full"
          @click="modalShow = !modalShow"
        >
          Заполнить заявку
        </button>
      </div>
    </div>
    <!--  Модалка подать заявку    -->
    <ui-modal :modal-show="modalShow" :modal-size="`modal-main--long`" @close="modalShow = false">
      <template #title>
        Обратная связь
      </template>
      <template #body>
        <!--👉-->
        <div class="columns">
          <div class="column col-12">
            <div class="input-group">
              <div class="input-text">
                ФИО
              </div>
              <input type="text" class="input complete" placeholder="Введите ФИО">
            </div>
          </div>
          <div class="column col-6 sm-col-12">
            <div class="input-group">
              <div class="input-text">
                Контактный телефон
              </div>
              <input type="text" class="input" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ">
            </div>
          </div>
          <div class="column col-6 sm-col-12">
            <div class="input-group">
              <div class="input-text">
                Почта
              </div>
              <input type="text" class="input" placeholder="Ваша электронная почта">
            </div>
          </div>
          <div class="column col-12">
            <div class="input-group">
              <div class="input-text">
                Город
              </div>
              <input type="text" class="input" placeholder="Введите город">
            </div>
          </div>
          <div class="column col-12">
            <div class="input-group">
              <div class="checkbox">
                Согласие на обработку персональных данных
              </div>
            </div>
          </div>
        </div>
        <!--👉-->
        <div class="modal-buttons">
          <button class="btn btn--full">
            Подать заявку
          </button>
          <button class="btn btn--full btn--grey">
            <span>Повысить шанс на получение кредита через
              <img src="/img/icon-gosuslugi.svg" alt="" loading="lazy" width="79" height="13">
            </span>
          </button>
        </div>
      </template>
    </ui-modal>
    <!--  Ваша заявка отправлена    -->
    <ui-modal :modal-show="modalShowComplete" :modal-size="`modal-main--small`" @close="modalShowComplete = false">
      <template #title>
        Подача заявки на кредит
      </template>
      <template #body>
        <!--👉-->
        <h3>Ваша заявка отправлена</h3>
        <div class="input-group">
          Наш специалист свяжется с вами <br>
          в ближайшее время
        </div>
        <!--👉-->
        <div class="modal-buttons">
          <button class="btn btn--full btn--grey" @click="modalShowComplete = !modalShowComplete">
            Закрыть
          </button>
        </div>
      </template>
    </ui-modal>
    <!--  Подача заявки на будущее    -->
    <ui-modal :modal-show="modalShowFuture" :modal-size="`modal-main--long`" @close="modalShowFuture = false">
      <template #title>
        Макет подача заявки на будущее
      </template>
      <template #body>
        <!--👉-->
        <div class="columns">
          <div class="column col-12">
            <div class="input-group">
              <div class="input-text">
                ФИО
              </div>
              <input type="text" class="input complete" placeholder="Введите ФИО">
            </div>
          </div>
          <div class="column col-6">
            <div class="input-group">
              <div class="input-text">
                Контактный телефон
              </div>
              <input type="text" class="input" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ">
            </div>
          </div>
          <div class="column col-6">
            <div class="input-group">
              <div class="input-text">
                Почта
              </div>
              <input type="text" class="input" placeholder="Ваша электронная почта">
            </div>
          </div>
          <div class="column col-12">
            <div class="input-group">
              <div class="input-text">
                Город
              </div>
              <input type="text" class="input" placeholder="Введите город">
            </div>
          </div>
          <div class="column col-12">
            <div class="input-group">
              <div class="input-text input-text--bold">
                Загрузите документы
              </div>

              <!--file-area-->
              <div class="file-area">
                <input type="file" class="file-area__input">
                <div class="file-area__content">
                  <div class="file-area__title">
                    <svg width="20" height="20">
                      <use xlink:href="#icon-upload" />
                    </svg>
                    Прикрепить файлы
                  </div>
                  <div class="file-area__text">
                    Текст реарайтеру, если в том месте нужнен подзаголовок
                  </div>
                </div>
              </div>
              <!--file-area-list-->
              <ul class="file-area-list">
                <li v-for="n in 8" :key="n">
                  <div class="file-area-list__close">
                    <svg width="14" height="14">
                      <use xlink:href="#icon-close" />
                    </svg>
                  </div>
                  <img src="/temp/icon.svg" alt="" loading="lazy">
                </li>
              </ul>
            </div>
          </div>
          <div class="column col-12">
            <div class="input-group">
              <div class="checkbox">
                Согласие на обработку персональных данных
              </div>
            </div>
          </div>
        </div>
        <!--👉-->
        <div class="modal-buttons">
          <button class="btn btn--full">
            Подать заявку
          </button>
        </div>
      </template>
    </ui-modal>
  </section>
</template>
<script>
import CreditsBlock from '~/components/blocks/credits-block.vue'
import CalculatorBlock from '~/components/blocks/calculator-block.vue'
import calculatorData from '~/mocks/calculator-data'
import UiModal from '~/components/ui/common/ui-modal/ui-modal.vue'

export default {
  components: {
    CreditsBlock,
    CalculatorBlock,
    UiModal
  },
  data () {
    return {
      data: calculatorData,
      modalShow: false,
      modalShowFuture: false,
      modalShowComplete: false
    }
  },
  created () {
    // Передаем длину массива в плагин
    this.$faq.setArrayLength(3)
  }
}
</script>
