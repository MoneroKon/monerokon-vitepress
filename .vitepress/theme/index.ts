// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './font.css'
import './style.css'
import MKSponsors from './components/MKSponsors.vue'
import MKEventInfo from './components/MKEventInfo.vue'
import MKAsideSponsors from './components/MKAsideSponsors.vue'
import MKCommunityPartners from './components/MKCommunityPartners.vue'
import MKHero from './components/MKHero.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(MKAsideSponsors),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MKSponsors', MKSponsors)
    app.component('MKEventInfo', MKEventInfo)
    app.component('MKCommunityPartners', MKCommunityPartners)
    app.component('MKHero', MKHero)
  }
} satisfies Theme
