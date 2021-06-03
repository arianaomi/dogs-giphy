<template>
  <section class="flex flex-wrap justify-around">
    <card-gif v-for="gif in gifs" :key="gif.id" :gif="gif" />
  </section>
</template>

<script>
import CardGif from "./CardGif";

export default {
  name: "GifList",
  components: {
    CardGif,
  },
  props: {
    gifs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>