<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme-without-fonts'
export interface Sponsor {
    img: DefaultTheme.ThemeableImage
    url: string
    tier: string
}
const props = defineProps<{
    title: string
    sponsors: Sponsor[]
    invite?: boolean
}>()
const filterSponsorsByTier = (sponsors: Sponsor[], tier: string) => {
    return sponsors.filter(item => item.tier === tier);
}
const hasTier = (tier: string) => {
    return filterSponsorsByTier(props.sponsors, tier).length > 0
}
</script>
<template>
    <div class="MKSponsors">
        <div class="content">
            <div class="wrapper">
                <div class="heroes col">
                    <h3 class="title">Cypherpunk Heroes</h3>
                    <div v-if="hasTier('hero')" class="inner-grid">
                        <div class="cell" v-for="item in filterSponsorsByTier(props.sponsors, 'hero')">
                            <a :href="item.url" :key="item.url">
                                <VPImage class="sponsor-logo" :image="item.img" />
                            </a>
                        </div>
                    </div>
                    <div v-else class="cell no-sponsors">
                        <a href="/sponsor">[Your logo here]</a>
                    </div>
                </div>
                <div class="contributors col">
                    <h3 class="title">Contributors</h3>
                    <div v-if="hasTier('contributor')" class="inner-grid">
                        <div class="cell" v-for="item in filterSponsorsByTier(props.sponsors, 'contributor')">
                            <a :href="item.url" :key="item.url">
                                <VPImage class="sponsor-logo" :image="item.img" />
                            </a>
                        </div>
                    </div>
                    <div v-else class="cell no-sponsors">
                        <a href="/sponsor">[Your logo here]</a>
                    </div>
                </div>
                <div class="supporters col">
                    <h3 class="title">Supporters</h3>
                    <div v-if="hasTier('supporter')" class="inner-grid">
                        <div class="cell" v-for="item in filterSponsorsByTier(props.sponsors, 'supporter')">
                            <a :href="item.url" :key="item.url">
                                <VPImage class="sponsor-logo" :image="item.img" />
                            </a>
                        </div>
                    </div>
                    <div v-else class="cell no-sponsors">
                        <a href="/sponsor">[Your logo here]</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.wrapper {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.col {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (min-width: 960px) {
    .content {
        margin: 0 auto;
        max-width: 1152px;
    }

    .MKSponsors {
        padding: 0 64px;
    }

    .wrapper {
        grid-template-columns: 1fr 1fr 1.3fr;
        gap: 2em;

    }

    .supporters .inner-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .contributors .inner-grid {
        grid-template-columns: 1fr 1fr;
    }

    .inner-grid {
        height: 15em;
    }

    .no-sponsors {
        height: 9em;
    }
}

@media (max-width: 960px) {
    .MKSponsors {
        padding: 24px 48px;
    }

    .wrapper {
        grid-template-columns: 1fr;
        gap: 1em;
    }

    .supporters .inner-grid,
    .contributors .inner-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }
}

.inner-grid {
    display: grid;
    gap: 1em;
}

.heroes .title {
    color: var(--vp-c-brand-1);
}

.heroes .inner-grid {
    grid-template-columns: 1fr 1fr;
}

.heroes {
    background-color: var(--vp-c-bg-soft);
    border-radius: 20px;
    border: 2px solid var(--vp-c-brand-1);
}

.contributors {
    border-radius: 20px;
    border: 2px solid var(--mk-sponsors-contributors-border);
}

.supporters {
    border-radius: 20px;
    border: 2px solid;
}

.title {
    text-align: center;
    margin-bottom: 0.5em;
}

.MKSponsorBtn {
    text-align: center;
    margin-bottom: 2em;
}

.content {
    margin: 0 auto;
    max-width: 1152px;
}

.MKSponsors {
    width: 100%;
    overflow: hidden;
}

.cell {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
}

.cell a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -3px;
}

h3 {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -2px;
}
</style>