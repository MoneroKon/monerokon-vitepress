---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: A technical conference in privacy and financial technology
description: Monero Konferenco (“MoneroKon”) is an annual meeting of privacy advocates, cypherpunks, researchers, and developers and is designed to disseminate scientific and technical results in privacy-enhancing technologies and distributed systems.
head:
  - - meta
    - name: 'og:image'
      content: https://www.monerokon.org/og.png

#hero:
#  text: "A technical conference in <b>privacy and financial technology"
#  image: { dark: mklight-title-logo.svg, light: mkdark-title-logo.svg, alt: 'Monero Konferenco'}
#  actions:
#    - theme: brand
#      text: Buy Tickets
#      link: 'https://shop.twed.org/twed/MK5'
#    - theme: alt
#      text: Submit Talks
#      link: 'https://cfp.twed.org/mk5/cfp'

markdownStyles: false
---
<script setup>
import DigilolLight from './sponsors/digilol-light.svg'
import DigilolDark from './sponsors/digilol-dark.svg'

import VostoEmisioLight from './sponsors/vostoemisio-light.png'
import VostoEmisioDark from './sponsors/vostoemisio-dark.png'

import CakeWallet from './sponsors/cake.png'

import TrocadorLight from './sponsors/trocador-light.svg'
import TrocadorDark from './sponsors/trocador-dark.svg'

import MonericaLight from './sponsors/monerica-light.svg'
import MonericaDark from './sponsors/monerica-dark.svg'

import FiroLight from './sponsors/firo-light.svg'
import FiroDark from './sponsors/firo-dark.svg'

import SweetwaterLight from './sponsors/sweetwater-light.svg'
import SweetwaterDark from './sponsors/sweetwater-dark.svg'

import XMRGlobalLight from './sponsors/xmrglobal-light.png'
import XMRGlobalDark from './sponsors/xmrglobal-dark.png'

import ShopinBitLight from './sponsors/shopinbit-light.svg'
import ShopinBitDark from './sponsors/shopinbit-dark.svg'

import PrivacyGuardians from './community_partners/pg.jpg'
import W3PN from './community_partners/w3pn.png'
import LunarDAO from './community_partners/logo_lunardao.png'

const sponsors = [
    { url: 'https://trocador.app', img: {light: TrocadorLight, dark: TrocadorDark, alt: 'Trocador' }, tier: 'hero' },
    { url: 'https://cakewallet.com', img: {src: CakeWallet, alt: 'Cake Wallet'}, tier: 'hero' },
    { url: 'https://firo.org', img: {light: FiroLight, dark: FiroDark, alt: 'Firo'}, tier: 'contributor' },
    { url: 'https://xmrglobal.io', img: {light: XMRGlobalLight, dark: XMRGlobalDark, alt: 'XMRGlobal'}, tier: 'contributor' },
    { url: 'https://www.vostoemisio.com', img: {light: VostoEmisioLight, dark: VostoEmisioDark, alt: 'VOSTO EMISIO'}, tier: 'supporter' },
    { url: 'https://www.digilol.net', img: {light: DigilolLight, dark: DigilolDark, alt: 'Digilol'}, tier: 'supporter' },
    { url: 'https://monerica.com', img: {light: MonericaLight, dark: MonericaDark, alt: 'Monerica'}, tier: 'supporter' },
    { url: 'https://sweetwater.consulting', img: {light: SweetwaterLight, dark: SweetwaterDark, alt: 'Sweetwater Digital Asset Consulting'},tier: 'supporter' },
    { url: 'https://shopinbit.com', img: {light: ShopinBitLight, dark: ShopinBitDark, alt: 'ShopinBit'},tier: 'supporter' },
]

const communityPartners = [
    { url: 'https://x.com/privacyguardia', img: {src: PrivacyGuardians, alt: 'Privacy Guardians'} },
    { url: 'https://web3privacy.info', img: {src: W3PN, alt: 'Web3Privacy Now'} },
    { url: 'https://linktr.ee/lunardao', img: {src: LunarDAO, alt: 'LunarDAO'} },
]
</script>

<MKHero />
<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />
<MKCommunityPartners :partners="communityPartners" />

