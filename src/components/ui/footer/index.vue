<template>
  <!-- 🤟 footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-logotype">
          <img src="/img/logotype-white.svg" loading="lazy" width="188" height="47">
        </div>
        <div class="social footer-social">
          <a href="#" class="social-link">
            <img
              src="/img/tg.svg"
              alt=""
              width="15"
              height="13"
              loading="lazy"
            >
          </a>
          <a href="#" class="social-link">
            <img
              src="/img/vk.svg"
              alt=""
              width="18"
              height="12"
              loading="lazy"
            >
          </a>
        </div>

        <div class="footer-phone">
          <a href="tel:88007009222" class="footer-phone__link">8-800-700-92-22</a>
          <div class="footer-phone__text">
            Единый бесплатный номер по России
          </div>
        </div>
      </div>

      <div class="footer-main">
        <div class="footer-main__column">
          <div class="footer-main__title" :class="{active: aboutTest}" @click="aboutTest = !aboutTest">
            О банке
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <ul class="footer-menu" :class="{show: aboutTest}">
            <li v-for="(data, index) in sitemapData.common" :key="index">
              <template v-if="data.items">
                <div class="footer-menu__title" @click="toggleMenu(index)">
                  {{ data.title }}
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlink:href="#icon-down" />
                  </svg>
                </div>
                <ul
                  v-show="visibleIndex === index"
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
        <div class="footer-main__column">
          <div class="footer-main__title">
            Частным клиентам
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <ul class="footer-menu">
            <li v-for="(data, index) in sitemapData.personal" :key="index">
              <template v-if="data.items">
                <div class="footer-menu__title" @click="toggleMenu(index)">
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
        <div class="footer-main__column">
          <div class="footer-main__title">
            Бизнесу
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <ul class="footer-menu">
            <li v-for="(data, index) in sitemapData.biznesu" :key="index">
              <template v-if="data.items">
                <div class="footer-menu__title" @click="toggleMenu(index)">
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
        <div class="footer-main__column">
          <div class="footer-main__title">
            Контакты
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <ul class="footer-menu">
            <li
              v-for="(item, index) in sitemapData.contacts.items"
              :key="index"
            >
              <nuxt-link :to="item.link">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
          <div class="footer-main__title">
            Интернет-банк
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <ul class="footer-menu">
            <li>
              <nuxt-link :to="sitemapData.common['internet-bank'].link">
                {{
                  sitemapData.common["internet-bank"].title
                }}
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link to="/kursy-valyut" class="footer-main__title">
            Курсы валют
            <svg width="14" height="14" aria-hidden="true" class="sm-visible">
              <use xlink:href="#icon-down" />
            </svg>
          </nuxt-link>
          <div class="app app--footer">
            <a href="#" class="app-link">
              <img
                src="/img/app-google.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
            <a href="#" class="app-link">
              <img
                src="/img/app-store.svg"
                alt=""
                width="146"
                height="46"
                loading="lazy"
              >
            </a>
          </div>
        </div>
      </div>

      <div class="footer-info">
        <ul class="footer-info__list">
          <li><a href="">Информация о процентных ставках по договорам банковского вклада с физическими лицами</a></li>
          <li><a href="">Политика в отношении обработки персональных данных</a></li>
        </ul>
        <div class="footer-member">
          <div class="footer-member__image">
            <img src="/img/icon-vklady.svg" alt="" width="50" height="50" loading="lazy">
          </div>
          <div class="footer-member__text">
            Участник государственной программы страхования вкладов
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <ul class="footer-bottom__list">
          <li>
            © 1992 — {{ new Date().getFullYear() }} АО КИБ «Евроальянс» Базовая
            лицензия Банка России № 1781 от 18.10.18
          </li>
          <li>
            <a href="https://involta.ru/" target="_blank">
              Сделано в involta
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright center">
        АО КИБ «Евроальянс» использует cookie (файлы с данными о прошлых
        посещениях сайта) для персонализации сервисов и удобства пользователей.
        Евроальянс серьезно относится к защите персональных данных —
        ознакомьтесь с условиями и принципами их обработки. Вы можете запретить
        сохранение cookie в настройках своего браузера.
        <nuxt-link to="/raskrytie-informacii/dlya-regulyativnyh-celej">
          Раскрытие информации для регулятивных целей
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<script>
import sitemapData from '~/utils/sitemap-data'
export default {
  data () {
    return {
      sitemapData,
      visibleIndex: null, // Индекс текущего видимого меню,
      aboutTest: false
    }
  },
  methods: {
    toggleMenu (index) {
      // Если текущий индекс совпадает с индексом элемента, на который произошел клик,
      // то меняем его значение на null (скрываем), иначе присваиваем новый индекс.
      this.visibleIndex = this.visibleIndex === index ? null : index
    }
  }
}
</script>
