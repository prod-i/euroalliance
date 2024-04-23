import { interfaces, types } from 'cms3-shop-module-ts'
import { Fancybox } from '@fancyapps/ui'
// @ts-ignore

/**
 * * Хлебная кошка
 */
export type Breadcrumb = {
  /**
   * * Название
   */
  title: string
  /**
   * * Ссылка на страницу
   */
  href?: string
}

/**
 * * Интерфейс статьи
 */
export interface News {

  id: number;
  /**
   * * Код статьи
   */
  code: string;
  /**
   * * Название статьи
   */
  name: string;
  /**
   * * Дата создания статьи
   */
  createdAt: string;
  /**
   * * Дата обновление статьи
   */
  updatedAt: string;
  /**
   * * Размер для списка статей
  */
  size?: string;
  /**
   * * Превью изображения
   */
  previewImage: types.ImageUrl | null;
  /**
   * * Краткое описание
   * ! + HTML
   */
  shortText: string;
  /**
   * * Детальное изображение
   */
  fullImage: types.ImageUrl | null;
  /**
   * * Подробный текст
   * ! + HTML
   */
  detailText: string;
}

export type Paginationable<T> = {
  _meta: interfaces.MetaPaginationInfo,
  data: Array<T>
}

// declare module '@nuxt/types' {
//   interface Context {
//     $productsByids: ProductsByids
//   }
//
//   interface NuxtAppOptions {
//     $productsByids: ProductsByids
//   }
// }
//
// declare module 'vue/types/vue' {
//   interface Vue {
//     $productsByids: ProductsByids
//   }
// }
interface Plugins {
  $fancybox: Fancybox
  $lozad: (selector: string, options: object) => { observe: () => void }
}
declare module 'vue/types/vue' {
  interface Vue extends Plugins {}
}
interface sidebarData {
  delivery: {
    price: number,
    option: string,
    address: string
  },
  payment: string
}

export interface uiSidebarData {
  cartTotal: types.cart.ProductTotal,
  sidebarData?: sidebarData,
  isLoading?: boolean
}
