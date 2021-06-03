<template>
  <div>
    <pacman-loader
      :loading="isLoading"
      :color="'#DAA4E7'"
      :size="80"
      class="m-auto"
    />
    <gif-list v-if="!isLoading" :gifs="favorites" />
  </div>
</template>

<script>
import GifList from "../components/GifList";
export default {
  name: "Favorite",
  components: {
    GifList,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
};
</script>
