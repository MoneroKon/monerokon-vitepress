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
                            Monero Konferenco (“MoneroKon”) is an annual meeting of privacy advocates, cypherpunks,
                            researchers, and developers and is designed to disseminate scientific and technical results
                            in privacy-enhancing technologies and distributed systems.
                        </p>
                        <p><span class="thicc">Date: </span>20th - 22nd June 2O25</p>
                        <p><span class="thicc">Location: </span>Second
                                Culture / La Fabrika</p>
                        <p style="margin-top:1em;">Venue address: 475/43, Dělnická, 170 00 Praha 7, Czechia</p>
                        <small>50°06'12.23"N, 14°27'01.8"E</small>

                    </div>
                </div>
                <div style="min-height: 15em">
                    <l-map style="z-index: 0" ref="map" v-model:zoom="zoom" :center="[50.103398, 14.450502]"
                        :use-global-leaflet="false">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                            name="OpenStreetMap" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="[50.103398, 14.450502]" />
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

h2 {
    margin: 1em 0;
}

a {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.25s, opacity 0.25s;
}
</style>
