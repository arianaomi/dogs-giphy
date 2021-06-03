
<template>
  <div>
    <gif-list v-if="!this.loading" :gifs="favorites" />
    <div v-else class="text-center">
      <img
        src="https://media.giphy.com/media/GwskZm1jXg8cDvuZJ6/giphy.gif"
        class="m-auto my-10"
      />
      <p class="text-purple-700 text-opacity-100 font-serif text-9xl font-bold">
        No tienes favoritos
      </p>
      <p class="text-purple-700 text-opacity-75 font-serif text-9xl font-bold">
        No tienes favoritos
      </p>
      <p class="text-purple-700 text-opacity-50 font-serif text-9xl font-bold">
        No tienes favoritos
      </p>
      <p class="text-purple-700 text-opacity-25 font-serif text-9xl font-bold">
        No tienes favoritos
      </p>
      <p class="text-purple-700 text-opacity-0 font-serif text-9xl font-bold">
        No tienes favoritos
      </p>
    </div>
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
      loading: true,
    };
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  created() {
    if (this.favorites.length) {
      this.loading = false;
    }
  },
  watch: {
    favorites() {
      if (!this.favorites.length) {
        this.loading = true;
      }
    },
  },
};
</script>
