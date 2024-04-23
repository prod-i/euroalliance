import Vue from 'vue'
import UiBreadcrumbs from '@/components/ui/common/ui-breadcrumbs/ui-breadcrumbs.vue'
import PageShowcase from '@/components/page-showcase/index.vue'
import DocumentCard from '@/components/cards/document-card.vue'
import FaqItem from '@/components/faq-item/index.vue'

// Создаем объект с компонентами
const components = {
  PageShowcase,
  DocumentCard,
  FaqItem,
  UiBreadcrumbs
}

// Регистрируем каждый компонент глобально
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
