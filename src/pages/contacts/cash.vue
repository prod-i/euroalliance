<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs :pages="[{ title: 'Банкоматы и ПВН' }]" />
      <h1>Банкоматы и ПВН</h1>
      <!-- 👉 page-showcase -->
      <page-showcase>
        <template #title>
          Адреса ближайших банкоматов
        </template>
        <template #text>
          Вы можете снять наличные, пополнить баланс мобильного телефона,
          заплатить за Интернет, совершить перевод денежных средств с карты на
          карту и многое другое
        </template>
        <template #img>
          <img src="/temp/icon-slim.svg" alt="" loading="lazy">
        </template>
      </page-showcase>
    </div>
    <div class="container">
      <div class="address-panel">
        <div class="address-panel__column">
          <div class="address-panel__item">
            ПВН
            <svg width="14" height="14" aria-hidden="true">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
          <div class="address-panel__item">
            Фурманов
            <svg width="14" height="14" aria-hidden="true">
              <use xlink:href="#icon-down" />
            </svg>
          </div>
        </div>
        <div class="address-panel__column">
          <div class="address-panel__item active">
            Показать списком
          </div>
          <div class="address-panel__item">
            На карте
          </div>
        </div>
      </div>
    </div>
    <!--    -->
    <div class="container">
      <div class="address-table">
        <table>
          <thead>
            <tr>
              <th>Адреса</th>
              <th>Время работы</th>
              <th>Виды карт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="address-table__name">
                  153025, Ивановская область, г. Иваново, пр. Ленина, д. 57
                </div>
              </td>
              <td>
                Круглосуточно
              </td>
              <td>
                VISA, MasterCard, Мир
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <ul class="address-table__list address-table__list--ver">
                  <li>
                    <span>Понедельник-четверг</span>
                    <span>9:00 - 17:00</span>
                  </li>
                  <li>
                    <span>Пятница</span>
                    <span>9:30-16:30</span>
                  </li>
                  <li>
                    <span>Обед</span>
                    <span>14:00 - 14:45</span>
                  </li>
                  <li>
                    <span>Суббота и Воскресенье</span>
                    <span>Выходной</span>
                  </li>
                </ul>
              </td>
              <td>VISA, MasterCard, Мир</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--    -->
    <div class="map-block content-inside">
      <img src="/img/marker.svg" alt="">

      <div class="map-balloon">
        <div class="map-balloon__image">
          <img src="/temp/icon-slim.svg" alt="">
        </div>
        <div class="map-balloon__content">
          <div class="map-balloon__title">
            Дополнительный офис «Южный»
          </div>
          <div class="address-table__title">
            153000 Ивановская область, г. Иваново, ул. Станко, дом 13
          </div>
          <ul class="address-table__list">
            <li>
              <span>Понедельник-четверг</span>
              <span>8:30-17:30</span>
            </li>
            <li>
              <span>Пятница</span>
              <span>9:30-16:30</span>
            </li>
            <li>
              <span>Воскресение</span>
              <span>Выходной</span>
            </li>
          </ul>
          <div class="address-table__hawking">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2028 7.27428C11.3193 8.0274 11.4359 8.78052 11.5524 9.53354C12.3293 9.53354 13.1061 9.53354 13.8832 9.53354C14.3522 9.53354 14.6249 10.7625 14.0752 10.879C13.6657 10.9055 12.2753 10.8877 11.8008 10.8877C11.8189 10.9885 11.8371 11.0894 11.8553 11.1903C12.7982 11.1903 13.7408 11.1903 14.6836 11.1903C14.8514 11.1903 14.995 11.2967 15.0528 11.447C15.6512 12.7161 16.2497 13.9852 16.8481 15.2544C17.0267 15.1387 17.2055 15.023 17.3841 14.9074C17.9119 14.5833 18.6899 15.6121 18.032 16.0574C17.5656 16.4115 16.598 17.2624 16.1321 16.827C15.4267 15.4201 14.7557 14.0545 14.0822 12.6579C13.045 12.6579 12.0077 12.6579 10.9705 12.6579C10.799 12.6579 10.6445 12.5298 10.5893 12.3741C10.3299 10.6073 10.0667 8.90197 9.80348 7.14774C9.33563 6.77894 9.06209 6.28379 9.06209 5.67173C9.06209 3.51939 12.1458 3.41999 12.2914 5.52114C12.3436 6.27462 11.9855 7.08702 11.2028 7.27428ZM9.72923 11.5624L9.50495 10.0347C3.25469 14.5196 9.21407 22.2487 15.4998 17.2141L14.8448 15.8922C10.6722 20.0927 5.69996 15.0297 9.72923 11.5624Z"
                fill="#335298"
              />
            </svg>
            Возможность обслуживания маломобильных граждан
          </div>
          <div class="map-balloon__footer">
            <a href="" class="btn btn--full btn--small">Кнопка</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
