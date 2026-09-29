<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme-without-fonts'

const sponsors = [{
    tier: 'Cypherpunk Heroes',
    items: [{ name: 'Your logo here!' }]
    //items: [
    //    { name: 'Trocador', img: '/aside_sponsors/trocador_short.png', url: 'https://trocador.app' },
    //    { name: 'Cake Labs', img: '/aside_sponsors/cake_short_light.png', url: 'https://cakewallet.com' },
    //]
}]

</script>

<template>
      <VPDocAsideSponsors :data="sponsors" />
</template>
