<template>
  <table v-if="range" class="exchange-table">
    <thead>
      <tr>
        <th>Валюта</th>
        <th>Банк продаёт</th>
        <th>Банк покупает</th>
        <th>Курс ЦБ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="exchange-symbol">
            €
          </div>
        </td>
        <td>
          <svg width="14" height="14">
            <use xlink:href="#icon-balance-up" />
          </svg>
          {{ range.euro[0] }}
        </td>
        <td>
          <svg width="14" height="14">
            <use xlink:href="#icon-balance-down" />
          </svg>
          {{ range.euro[1] }}
        </td>
        <td>{{ range.euro[2] }}</td>
      </tr>
      <tr>
        <td>
          <div class="exchange-symbol">
            $
          </div>
        </td>
        <td>
          <svg width="14" height="14">
            <use xlink:href="#icon-balance-up" />
          </svg>
          {{ range.dollar[0] }}
        </td>
        <td>
          <svg width="14" height="14">
            <use xlink:href="#icon-balance-down" />
          </svg>
          {{ range.dollar[1] }}
        </td>
        <td>{{ range.dollar[2] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>

export default {
  props: {
    selected: {
      type: String,
      required: true
    },
    city: {
      type: Array,
      required: true
    }
  },
  computed: {
    range () {
      const foundCity = this.city.find(el => el.title === this.selected)
      return foundCity ? foundCity.data : false
    }
  }
}
</script>
