---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: A technical conference in privacy and financial technology
description: Monero Konferenco (“MoneroKon”) is an annual meeting of privacy advocates, cypherpunks, researchers, and developers and is designed to disseminate scientific and technical results in privacy-enhancing technologies and distributed systems.
head:
  - - meta
    - name: 'og:image'
      content: https://www.monerokon.org/og.png

markdownStyles: false
---
<script setup>
import BFFLight from './community_partners/bff-light.png'
import BFFDark from './community_partners/bff-dark.png'
import Monerotopia from './community_partners/monerotopia.png'

import OrangeFrenLight from './organizers/orangefren-light.png'
import OrangeFrenDark from './organizers/orangefren-dark.png'

import TrocadorLight from './sponsors/trocador-light.svg'
import TrocadorDark from './sponsors/trocador-dark.svg'
import VostoEmisioLight from './sponsors/vostoemisio-light.png'
import VostoEmisioDark from './sponsors/vostoemisio-dark.png'
import KycNotMe from './sponsors/kycnotme.svg'

import CakeWalletLight from './sponsors/cake-light.svg'
import CakeWalletDark from './sponsors/cake-dark.svg'
import Monerica from './sponsors/monerica.png'
import Xchangeme from './sponsors/xchangeme.png'
import WizardSwap from './sponsors/wizardswap.png'
import Beldex from './sponsors/beldex.svg'
import CCECash from './sponsors/ccecash.svg'
import ETZSwap from './sponsors/etz-swap.png'

const sponsors = [
    { url: 'https://trocador.app', img: {light: TrocadorLight, dark: TrocadorDark, alt: 'Trocador' }, tier: 'hero' },
    { url: 'https://cakewallet.com', img: {light: CakeWalletLight, dark: CakeWalletDark, alt: 'Cake Wallet'}, tier: 'hero' },
    { url: 'https://www.vostoemisio.com', img: {light: VostoEmisioLight, dark: VostoEmisioDark, alt: 'VOSTO EMISIO'}, tier: 'supporter' },
    { url: 'https://kycnot.me', img: { src: KycNotMe, alt: 'KYCNot.me' }, tier: 'supporter' },
    { url: 'https://monerica.com', img: { src: Monerica, alt: 'Monerica' }, tier: 'supporter' },
    { url: 'https://xchange.me', img: { src: Xchangeme, alt: 'Xchange.me' }, tier: 'supporter' },
    { url: 'https://wizardswap.io', img: { src: WizardSwap, alt: 'WizardSwap' }, tier: 'contributor' },
    { url: 'https://beldex.io', img: { src: Beldex, alt: 'Beldex' }, tier: 'contributor' },
    { url: 'https://cce.cash', img: { src: CCECash, alt: 'CCE Cash' }, tier: 'contributor' },
    { url: 'https://etz-swap.com', img: { src: ETZSwap, alt: 'ETZ-Swap' }, tier: 'supporter' },
]

const communityPartners = [
    { url: 'https://bitcoinfilmfest.com', img: {light: BFFLight, dark: BFFDark}, alt: 'Bitcoin FilmFest' },
    { url: 'https://monerotopia.com', img: { src: Monerotopia }, alt: 'Monerotopia' },
]

const organizer = {
  url: 'https://orangefren.com',
  img: { light: OrangeFrenLight, dark: OrangeFrenDark, alt: 'Orange Fren' },
}
</script>

<MKHero />
<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />
<MKCommunityPartners :partners="communityPartners" :organizer="organizer" />