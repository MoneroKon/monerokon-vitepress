import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monero Konferenco",
  description: "A conference in privacy-enhancing technologies and distributed systems.",
  sitemap: {
    hostname: 'https://www.monerokon.org'
  },
  lastUpdated: true,
  themeConfig: {
    logo: { dark: "/MKLogoDark.svg", light: "/MKLogoLight.svg", alt: "Monero Konferenco" },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Community', items: [
          { text: 'Nextcloud Talk', link: 'https://nextcloud.4lice.com/call/y4iugjt2' },
          { text: 'Message Board', link: 'https://nextcloud.4lice.com/apps/forum' },
          { text: 'Volunteer', link: 'https://engel.4lice.com/angeltypes/about' },
          { text: 'IRC', link: 'https://web.libera.chat/?nick=Guest?#monero-events' },
          { text: 'Matrix', link: 'https://matrix.to/#/#monerokon:matrix.org' },
          { text: 'XMPP', link: 'xmpp:monerokon@muc.xmpp.is?join' },
          { text: 'Simplex', link: 'https://simplex.chat/contact#/?v=1-2&smp=smp%3A%2F%2Fu2dS9sG8nMNURyZwqASV4yROM28Er0luVTx5X1CsMrU%3D%40smp4.simplex.im%2F1OXnPP15cK8HAJ3YM_7UfQhlW-9WFE8P%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAHf0AClqIM2SnOJ7OP06pr7UXlcnzGaBUyx3MLmRP0ko%253D%26srv%3Do5vmywmrnaxalvz6wi3zicyftgio6psuvyniis6gco6bp6ekl4cqj4id.onion&data=%7B%22type%22%3A%22group%22%2C%22groupLinkId%22%3A%22CIdAO_gOEDOsW9oZrtAHiA%3D%3D%22%7D' },
          { text: 'Mastodon', link: 'https://mas.to/@monerokon' },
          { text: 'X', link: 'https://x.com/monerokon' },
        ]
      },
      {
        text: 'Media', items: [
          { text: 'Odysee', link: 'https://odysee.com/@monerocommunityworkgroup:8?view=content' },
          { text: 'Podcast', link: 'https://audio.degooglemonero.com/@MoneroKonPodcast' },
          { text: 'YouTube', link: 'https://www.youtube.com/@MoneroCommunityWorkgroup/videos' },
          { text: 'Spotify', link: 'https://open.spotify.com/show/0hoXlc3D5HUPM773X20qzw' }
        ]
      },
      {
        text: 'Policies', items: [
          { text: 'Event Policy', link: '/policies/event_policy' },
          { text: 'Sponsorship Policy', link: '/policies/sponsorship_policy' },
          { text: 'Chat Moderation Policy', link: '/policies/chat_policy' },
          { text: 'Privacy Policy', link: '/policies/privacy_policy' }
        ]
      },
      {
        text: 'Archive', items: [
          { text: '2026', link: '/past_events/2026' },
          { text: '2025', link: '/past_events/2025' },
          { text: '2024', link: '/past_events/2024' },
          { text: '2023', link: '/past_events/2023' },
          { text: '2022', link: '/past_events/2022' },
          { text: '2019', link: '/past_events/2019' },
        ]
      },
      { text: 'Blog', link: '/blog/mk26-press-release' },
      { text: 'Sponsor', link: '/sponsor' },
    ],

    sidebar: [
      {
        text: 'Blog', items: [
          { text: 'MoneroKon26 Press Release', link: '/blog/mk26-press-release' },
          { text: 'MoneroKon25 Press Release', link: '/blog/mk25-press-release' },
          { text: 'MoneroKon24 Press Release', link: '/blog/mk24-press-release' },
        ]
      },
      {
        text: 'Guides', items: [
          { text: 'Volunteer Guide', link: '/guides/volunteer' },
          { text: 'Press Kit', link: '/guides/press_kit' }
        ]
      },
      {
        text: 'Past Events', items: [
          { text: '2026', link: '/past_events/2026' },
          { text: '2025', link: '/past_events/2025' },
          { text: '2024', link: '/past_events/2024' },
          { text: '2023', link: '/past_events/2023' },
          { text: '2022', link: '/past_events/2022' },
          { text: '2019', link: '/past_events/2019' },
        ]
      }
    ],

    footer: {
      message: '',
      copyright: 'Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.'
    },
  }
})
