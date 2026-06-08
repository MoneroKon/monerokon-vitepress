<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            zoom: 19,
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        };
    },
};
</script>
<template>
    <div class="section">
        <div class="content">
            <div class="wrapper">
                <div>
                    <div>
                        <p>
                            Monero Konferenco (“MoneroKon”) is the annual gathering where privacy advocates, cypherpunks, 
                            researchers, developers, and creatives unite to exchange ideas, showcase groundbreaking 
                            research, and advance open, censorship-resistant technologies that empower individual 
                            autonomy and digital rights.
                        </p>
                        <br>
                        <p><span class="thicc">Date: </span>TBD</p>
                        <p><span class="thicc">Location: </span>TBD</p>
                    </div>
                </div>
                <div style="min-height: 15em">
                    <l-map style="z-index: 0" ref="map" v-model:zoom="zoom" :center="[52.23141325165129, 21.00647994224071]"
                        :use-global-leaflet="false">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                            name="OpenStreetMap" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="[52.23141325165129, 21.00647994224071]" />
                    </l-map>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3em;
}

.section {
    padding: 24px 48px;
}

.thicc {
    font-weight: 700;
}

@media (min-width: 960px) {
    .section {
        padding: 64px;
    }

    .content {
        margin: 0 auto;
        max-width: 1152px;
    }

    .wrapper {
        grid-template-columns: 1fr 1fr;
    }
}

h3 {
    margin: 0.5em 0;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -2px;
}

a {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.25s, opacity 0.25s;
}
</style>
