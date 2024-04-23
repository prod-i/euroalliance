<template>
  <div class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          {
            title: 'Карта сайта',
          },
        ]"
      />
      <h1>Карта сайта</h1>
      <div class="columns columns--cards">
        <div class="column col-3">
          <div class="sitemap-item">
            <h3>Банк</h3>
            <ul v-for="(data, index) in sitemapData.common" :key="index" class="sitemap-item__list">
              <li>
                <nuxt-link v-if="data.link" :to="data.link">
                  {{ data.title }}
                </nuxt-link>
                <ul v-if="data.items">
                  <li v-for="(item, idx) in data.items" :key="idx">
                    <nuxt-link :to="item.link">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3">
          <div class="sitemap-item">
            <h3>Частным клиентам</h3>
            <ul v-for="(data, index) in sitemapData.personal" :key="index" class="sitemap-item__list">
              <li>
                <nuxt-link v-if="data.link" :to="data.link">
                  {{ data.title }}
                </nuxt-link>
                <ul v-if="data.items">
                  <li v-for="(item, idx) in data.items" :key="idx">
                    <nuxt-link :to="item.link">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3">
          <div class="sitemap-item">
            <h3>Бизнесу</h3>
            <ul v-for="(data, index) in sitemapData.biznesu" :key="index" class="sitemap-item__list">
              <li>
                <nuxt-link v-if="data.link" :to="data.link">
                  {{ data.title }}
                </nuxt-link>
                <ul v-if="data.items">
                  <li v-for="(item, idx) in data.items" :key="idx">
                    <nuxt-link :to="item.link">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-3">
          <div class="sitemap-item">
            <h3>Контакты</h3>
            <ul class="sitemap-item__list">
              <li v-for="(item, idx) in sitemapData.contacts.items" :key="idx">
                <nuxt-link :to="item.link">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sitemapData from '~/utils/sitemap-data'

export default {
  data () {
    return {
      sitemapData
    }
  }
}
</script>
