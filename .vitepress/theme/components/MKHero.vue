<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme-without-fonts'

const logo = { dark: "/mklight-title-logo.svg", light: "/mkdark-title-logo.svg", alt: 'Monero Konferenco'}
</script>

<template>
    <div class="hero">
        <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:3em;">
            <div class="container">
                <div class="info">
                <h2 class="hero-text">A technical conference in <span class="bold">privacy and financial technology</span></h2>
                <div class="hero-btn">
                    <VPButton text="Buy Tickets"></VPButton>
                    <VPButton theme="alt" text="Submit Talks"></VPButton>
                    <VPButton theme="sponsor" text="Sponsor"></VPButton>
                </div>
            </div>
        </div>
            <div>
                <VPImage :image="logo" />
            </div>
        </div>
    </div>
</template>

<style scoped>
img {margin:0; padding: 0;}

.hero {
    margin: 0 auto;
    max-width: 1152px;
    padding: 3em 0;
}

.container {
    display: flex;
    align-items: center;
}

.hero-text {
    font-weight: 100;
    letter-spacing: -4px;
    font-size: 36px;
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
}

.pattern-right {
    display: flex;
    justify-content: end;
}

.pattern-right img {
    -webkit-transform: scaleX(-1) scaleY(-1);
    transform: scaleX(-1) scaleY(-1);
    margin-top: -1em;

}
</style>
