<script setup lang="ts">
interface Image {
  src: string;
  alt: string;
}

interface Partner {
  url: string;
  img: Image;
}

interface Props {
  partners: Partner[];
}

defineProps<Props>();
</script>

<template>
  <div class="community-partners">
    <h2 class="title">Community Partners:</h2>
    <div class="partners-grid">
      <span v-for="partner in partners" :key="partner.url" class="partner-item">
        <a :href="partner.url" target="_blank" rel="noopener noreferrer" class="partner-link">
          <img :src="partner.img.src" :alt="partner.img.alt" class="partner-image" />
        </a>
      </span>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -1px;
}

.title {
  text-align: center;
}

.community-partners {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
}

.partners-grid {
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
}

.partner-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-image {
  max-width: 70px;
  height: auto;
}

@media (max-width: 960px) {
  .community-partners {
    flex-direction: column;
    grid-gap: 2em;
    margin-top: 3em;
  }

  .partner-image {
    width: 60px;
  }
}
</style>
