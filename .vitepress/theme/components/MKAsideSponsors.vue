<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme-without-fonts'

const sponsors = [{
    tier: 'Cypherpunk Heroes',
    items: []
    //items: [
    //    { name: 'Trocador', img: '/aside_sponsors/trocador_short.png', url: 'https://trocador.app' },
    //    { name: 'Cake Labs', img: '/aside_sponsors/cake_short_light.png', url: 'https://cakewallet.com' },
    //]
}]

const hasSponsors = sponsors.some(tier => tier.items.length > 0)
</script>

<template>
    <VPDocAsideSponsors v-if="hasSponsors" :data="sponsors" />
    <div v-else class="VPDocAsideSponsors">
        <div class="vp-sponsor aside">
            <section class="vp-sponsor-section">
                <h3 class="vp-sponsor-tier">{{ sponsors[0].tier }}</h3>
                <a href="/sponsor" class="placeholder">[Your logo here]</a>
            </section>
        </div>
    </div>
</template>

<style scoped>
.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    font-size: 13px;
    color: var(--vp-c-text-1);
    background-color: var(--vp-c-bg-soft);
    transition: color 0.25s;
}

.placeholder:hover {
    color: var(--vp-c-brand-1);
}
</style>
