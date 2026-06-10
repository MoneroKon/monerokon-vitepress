<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme-without-fonts'

const logo = { dark: "/mklight-title-logo.svg", light: "/mkdark-title-logo.svg", alt: 'Monero Konferenco' }
</script>

<template>
    <div class="hero">
        <div class="herogrid">
            <div class="container">
                <div class="info">
                    <h2 class="hero-text"><span class="bold">Privacy, Freedom, Decentralisation</span></h2>
                    <div class="hero-btn">
                    </div>
                </div>
            </div>
            <div class="logo">
                <VPImage :image="logo" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.herogrid {
    display: grid;
}

@media (min-width: 960px) {
    .herogrid {
        grid-template-columns: 1.1fr 1fr;
        gap: 3em;
        margin: 0 auto;
        max-width: 1152px;
    }

    .hero {
        padding: 64px;
    }
}

@media (max-width: 960px) {
    .herogrid {
        gap: 2em;
    }

    .logo {
        order: -1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero {
        margin-bottom: 1em;
        padding: 24px 48px;
    }

    .hero-text {
        text-align: center;
    }

}

.container {
    display: flex;
    align-items: center;
}

.hero-text {
    font-weight: 100;
    letter-spacing: -4px;
    font-size: 52px;
    line-height: 1;
}

.bold {
    font-weight: 400;
}

.hero-btn {
    margin-top: 2em;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
}
</style>
