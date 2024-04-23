<template>
  <!-- 🤟 header -->
  <header class="header">
    <!--header-top-->
    <div class="header-top md-hidden">
      <div class="container">
        <div class="header-top__content">
          <ul class="header-top-menu">
            <li :class="{ current: !userType.business }">
              <nuxt-link to="/">
                Частным клиентам
              </nuxt-link>
            </li>
            <li :class="{ current: userType.business }">
              <nuxt-link to="/biznesu">
                Бизнесу
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/o-banke">
                О банке
                <svg width="12" height="12" aria-hidden="true">
                  <use xlink:href="#icon-down" />
                </svg>
              </nuxt-link>
              <ul class="popup-menu">
                <li
                  v-for="(item, index) in sitemapData.common['o-banke'].items"
                  :key="index"
                >
                  <nuxt-link :to="item.link">
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="header-top-menu">
            <li>
              <a href="#">
                <svg width="12" height="12" aria-hidden="true">
                  <use xlink:href="#icon-location" />
                </svg>
                Фурманов
              </a>
              <ul class="popup-menu">
                <li><a href="#">Иваново</a></li>
                <li><a href="#">Шуя</a></li>
                <li><a href="#">Кинешма</a></li>
                <li><a href="#">Южа</a></li>
                <li><a href="#">Москва</a></li>
                <li><a href="#" class="active">Фурманов</a></li>
                <li><a href="#">Палех</a></li>
              </ul>
            </li>
            <li><a href="#">Курс валют</a></li>
            <li>
              <nuxt-link to="/contacts/cash">
                <svg width="12" height="12" aria-hidden="true">
                  <use xlink:href="#icon-point" />
                </svg>
                Офисы и банкоматы ??
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contacts/head-office">
                Контакты
              </nuxt-link>
            </li>
            <li><a href="#">8-800-700-92-22</a></li>
            <li>
              <a href="#" class="search-button" @click="showSearch = !showSearch">
                <svg width="12" height="12" aria-hidden="true">
                  <use xlink:href="#icon-search" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--header-bottom-->
    <div class="header-bottom" :class="{ 'header-bottom--fill' : showSearch }">
      <div class="container">
        <div class="header-bottom__content">
          <nuxt-link to="/" class="logotype">
            <img src="/img/logotype.svg" alt="" loading="lazy" width="154" height="40">
          </nuxt-link>

          <div class="header-menu md-hidden">
            <!-- Меню для частного клиента -->
            <ul v-if="!userType.business" class="header-menu__list">
              <template v-for="(category, index) in sitemapData.personal">
                <li v-if="category.title !== 'Сервисы'" :key="index">
                  <nuxt-link :to="category.link">
                    {{ category.title }}
                    <svg
                      v-if="category.items"
                      width="12"
                      height="12"
                      aria-hidden="true"
                    >
                      <use xlink:href="#icon-down" />
                    </svg>
                  </nuxt-link>
                  <ul v-if="category.items" class="popup-menu">
                    <li v-for="(item, idx) in category.items" :key="idx">
                      <nuxt-link :to="item.link">
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </template>
              <!-- Меню три точки - Сервисы -->
              <li>
                <svg width="24" height="24" aria-hidden="true">
                  <use xlink:href="#icon-dotted" />
                </svg>
                <ul class="popup-menu popup-menu--right">
                  <li
                    v-for="(item, idx) in sitemapData.personal.servisy.items"
                    :key="idx"
                  >
                    <nuxt-link :to="item.link">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>

            <!-- Меню для Бизнеса -->
            <ul v-if="userType.business" class="header-menu__list">
              <template v-for="(category, index) in sitemapData.biznesu">
                <li v-if="category.items" :key="index">
                  <nuxt-link :to="category.link">
                    {{ category.title }}
                    <svg
                      v-if="category.items"
                      width="12"
                      height="12"
                      aria-hidden="true"
                    >
                      <use xlink:href="#icon-down" />
                    </svg>
                  </nuxt-link>
                  <ul v-if="category.items" class="popup-menu">
                    <li v-for="(item, idx) in category.items" :key="idx">
                      <nuxt-link :to="item.link">
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <!-- Меню три точки - Сервисы -->
                <li v-else :key="index">
                  <svg width="24" height="24" aria-hidden="true">
                    <use xlink:href="#icon-dotted" />
                  </svg>
                  <ul class="popup-menu popup-menu--right">
                    <li>
                      <nuxt-link :to="category.link">
                        {{ category.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </template>
            </ul>
          </div>

          <ul class="header-buttons md-hidden">
            <li class="lg-hidden">
              <button type="button" class="btn btn--grey btn--small" @click="modalShow = true">
                Оставить заявку
              </button>
              <div class="header-buttons__dot" />
            </li>
            <li>
              <nuxt-link
                :to="sitemapData.common['internet-bank'].link"
                class="btn btn--small"
              >
                {{ sitemapData.common["internet-bank"].title }}
                <svg width="20" height="20" aria-hidden="true">
                  <use xlink:href="#icon-login" />
                </svg>
              </nuxt-link>
            </li>
          </ul>

          <div class="header-buttons md-visible">
            <div class="header-button" @click="showSearch = !showSearch; menuShow = false">
              <svg v-if="!showSearch" width="16" height="16">
                <use xlink:href="#icon-search" />
              </svg>
              <svg v-if="showSearch" width="20" height="20">
                <use xlink:href="#icon-close" />
              </svg>
            </div>
            <div class="header-button" @click="menuShow = !menuShow; showSearch = false">
              <div class="header-button">
                <svg v-if="!menuShow" width="18" height="18">
                  <use xlink:href="#icon-menu" />
                </svg>
                <svg v-if="menuShow" width="20" height="20">
                  <use xlink:href="#icon-close" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Поиск-->
    <ui-search :show-search="showSearch" @close="showSearch=false" />
    <!--Обратная связь-->
    <ui-modal :modal-show="modalShow" @close="modalShow = false">
      <template #title>
        Обратная связь
      </template>
      <template #body>
        <!--👉-->
        <div class="input-group">
          <div class="input-text">
            Как к вам обращаться?
          </div>
          <input type="text" class="input complete" placeholder="Введите ФИО">
        </div>
        <div class="input-group">
          <div class="input-text">
            Контактный телефон
          </div>
          <input type="text" class="input" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ">
        </div>
        <div class="input-group">
          <div class="input-text">
            Город
          </div>
          <input type="text" class="input" placeholder="Введите данные">
        </div>
        <div class="input-group">
          <div class="input-text">
            ИНН организации или e-mail физ.лица
          </div>
          <input type="text" class="input" placeholder="Введите данные">
        </div>
        <div class="input-group">
          <div class="input-text">
            Выберите продукт или обращение
          </div>
          <select class="input select">
            <option value="" selected>
              Выберите из списка
            </option>
            <option value="">
              Список 1
            </option>
          </select>
        </div>
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
        </div>
        <div class="input-group">
          <div class="checkbox">
            Согласие на обработку персональных данных
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
    <!--mobile-sidebar-->
    <div class="mobile-sidebar md-visible">
      <nuxt-link to="/" class="mobile-sidebar__item">
        <div class="mobile-sidebar__icon">
          <svg width="24" height="24">
            <use xlink:href="#icon-sidebar-local" />
          </svg>
        </div>
        <div class="mobile-sidebar__title">
          Частному лицу
        </div>
      </nuxt-link>
      <nuxt-link to="/biznesu" class="mobile-sidebar__item">
        <div class="mobile-sidebar__icon">
          <svg width="24" height="24">
            <use xlink:href="#icon-sidebar-business" />
          </svg>
        </div>
        <div class="mobile-sidebar__title">
          Бизнесу
        </div>
      </nuxt-link>
      <div class="mobile-sidebar__item">
        <div class="mobile-sidebar__icon">
          <svg width="24" height="24">
            <use xlink:href="#icon-sidebar-city" />
          </svg>
        </div>
        <div class="mobile-sidebar__title">
          Фурманов
        </div>
      </div>
      <nuxt-link to="/contacts/cash" class="mobile-sidebar__item">
        <div class="mobile-sidebar__icon">
          <svg width="24" height="24">
            <use xlink:href="#icon-sidebar-atm" />
          </svg>
        </div>
        <div class="mobile-sidebar__title">
          Банкоматы
        </div>
      </nuxt-link>
    </div>
    <!--mobile-menu-->
    <div class="mobile-menu" :class="{ show: menuShow }">
      <div class="mobile-menu__content">
        <div v-if="menuListShow" class="mobile-menu__list">
          <div class="mobile-menu__item" @click="subMenuPersonal = true; menuListShow = false">
            Частным клиентам
          </div>
          <div class="mobile-menu__item">
            Бизнесу
          </div>
          <div class="mobile-menu__item">
            О банке
          </div>
          <div class="mobile-menu__item">
            Курс валют
          </div>
          <div class="mobile-menu__item">
            Офисы и банкоманы
          </div>
          <div class="mobile-menu__item">
            Контакты
          </div>
        </div>
        <!--mobile-submenu Частным клиентам-->
        <div v-if="subMenuPersonal" class="mobile-submenu">
          <button type="button" class="btn btn--full btn--grey" @click="menuListShow = true; subMenuPersonal = false">
            <svg width="24" height="24">
              <use xlink:href="#icon-return" />
            </svg>
            Вернуться назад
          </button>
          <ul class="mobile-submenu__list">
            <li v-for="(data, index) in sitemapData.personal" :key="index">
              <template v-if="data.items">
                <div class="mobile-submenu__title" @click="toggleMenu(index)">
                  {{ data.title }}
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlink:href="#icon-down" />
                  </svg>
                </div>
                <ul
                  v-show="visibleIndex === index"
                  style="display: none"
                >
                  <li v-for="(items, idx) in data.items" :key="idx">
                    <nuxt-link :to="items.link">
                      {{ items.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </template>
              <nuxt-link v-else :to="data.link">
                {{ data.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-phone center">
          <a href="tel:88007009222" class="footer-phone__link">8-800-700-92-22</a>
          <div class="footer-phone__text">
            Единый бесплатный номер по России
          </div>
        </div>
        <div class="mobile-menu__buttons">
          <nuxt-link
            :to="sitemapData.common['internet-bank'].link"
            class="btn btn--full"
          >
            {{ sitemapData.common["internet-bank"].title }}
            <svg width="20" height="20" aria-hidden="true">
              <use xlink:href="#icon-login" />
            </svg>
          </nuxt-link>
          <button type="button" class="btn btn--grey btn--full" @click="modalShow = true">
            Оставить заявку
          </button>
          <button type="button" class="btn btn--full btn--white btn--grey-text">
            <svg width="20" height="20">
              <use xlink:href="#icon-sidebar-location" />
            </svg>
            Фурманов
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import sitemapData from '~/utils/sitemap-data'
import UiSearch from '~/components/ui/search/index.vue'
import UiModal from '~/components/ui/common/ui-modal/ui-modal.vue'

export default Vue.extend({
  components: {
    UiSearch,
    UiModal
  },
  props: {
    userType: {
      type: Object as PropType<{ business: boolean }>,
      required: true
    }
  },
  data () {
    return {
      sitemapData,
      showSearch: false,
      modalShow: false,
      menuShow: false,
      visibleIndex: null,
      menuListShow: true,
      subMenuPersonal: false
    }
  },
  methods: {
    toggleMenu (index) {
      // Если текущий индекс совпадает с индексом элемента, на который произошел клик,
      // то меняем его значение на null (скрываем), иначе присваиваем новый индекс.
      this.visibleIndex = this.visibleIndex === index ? null : index
    }
  }
})
</script>
