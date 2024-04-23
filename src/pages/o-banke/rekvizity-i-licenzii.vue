<template>
  <section class="content">
    <div class="container">
      <!--breadcrumbs-->
      <ui-breadcrumbs
        :pages="[
          { title: 'О Банке', href : '/o-banke' },
          { title: 'Реквизиты и лицензии' }
        ]"
      />
      <h1>Реквизиты и лицензии</h1>

      <div class="requisites">
        <div class="requisites-item">
          <div class="requisites-item__title">
            Полное фирменное наименование кредитной организации
          </div>
          Акционерное общество коммерческий инвестиционный банк «ЕВРОАЛЬЯНС»
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Сокращенное фирменное наименование кредитной организации
          </div>
          АО КИБ «ЕВРОАЛЬЯНС»
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Дата основания банка
          </div>
          23 апреля 1992 год
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Регистрационный номер, присвоенный Банком России и внесенный в Книгу государственной регистрации кредитных
            организаций
          </div>
          1781
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Сведения о лицензиях, на основании которых кредитная организация осуществляет свою деятельность
          </div>
          Базовая Лицензия на осуществление банковских операций № 1781 от 18 октября 2018 года
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Данные об участии банка в системе обязательного страхования вкладов физических лиц в банках Российской
            Федерации
          </div>
          Свидетельство о включении банка в реестр банков-участников системы обязательного страхования вкладов № 500 от
          27.01.2005
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Уставной капитал
          </div>
          264 000 000 рублей
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Дата внесения в Единый государственный реестр юридических лиц записи о государственной регистрации кредитной
            организации
          </div>
          19 октября 2002 года
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Основной государственный регистрационный номер
          </div>
          1023700001467
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Платежные реквизиты кредитной организации
          </div>
          АО КИБ «ЕВРОАЛЬЯНС» <br>
          ИНН 3702030072, <br>
          КПП 370201001, <br>
          БИК 042406701 <br>
          Корреспондентский счет № 30101810800000000701 в Отделении по Ивановской области Главного управления
          Центрального банка Российской Федерации по Центральному федеральному округу (Отделение Иваново)
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Сведения о местонахождении органов управления кредитной организации
          </div>
          153000 Российская Федерация, г. Иваново, ул. Станко, д. 13
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Сведения об учреждении, осуществляющем надзор за деятельностью кредитной организации
          </div>
          Служба текущего банковского надзора Банка России. <br>
          <a href=""> Подробности по ссылке</a>
        </div>
        <div class="requisites-item">
          <div class="requisites-item__title">
            Аудиторская компания
          </div>
          ООО «АКГ «Листик и Партнеры» (107031, г. Москва, ул. Кузнецкий мост, д. 21/5, оф. 605)
        </div>
      </div>

      <div class="offset-top offset--small">
        <h3>Лицензии</h3>
        <div class="columns columns--cards">
          <div class="column col-3 md-col-4 sm-col-6">
            <a href="#" class="certificates">
              <img src="/temp/icon.svg" alt="" loading="lazy">
            </a>
          </div>
          <div class="column col-3 md-col-4 sm-col-6">
            <a href="#" class="certificates">
              <img src="/temp/icon.svg" alt="" loading="lazy">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
