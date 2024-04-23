export default {
  /**
    * * Хост
  */
  host: process.env.HOST || '0.0.0.0',
  /**
    * * Порт
  */
  port: process.env.PORT || 3000,
  /**
    * * Путь до api
  */
  apiUrl: process.env.API_URL || 'https://api.efremov-gold.devolta.ru',
  /**
   * * Домен
  */
  siteDomain: process.env.SITE_DOMAIN || 'localhost',
  /**
   * * Режим разработки
  */
  devMode: process.env.DEVELOPMENT_MODE !== 'false',
  /**
   * * Ключ recaptcha
  */
  recaptchaKey: process.env.RECAPTCHA_KEY_V2 || '6LcUFrcjAAAAAMK5gAuPxIdPfXwl_GXGY4Nz6Pk6',
  /**
   * * Секретный ключ recaptcha
  */
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY_V2 || '6LcUFrcjAAAAAOMJMKlQRay9z9S7tyT2InTBeZGy'
}
