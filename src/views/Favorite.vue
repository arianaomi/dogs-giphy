
<template>
  <div>
    <div v-if="!this.loading">
      <p
        class="text-purple-700 text-opacity-100 font-serif text-md font-bold text-center my-5"
        v-animate-css.once="animationFavorite"
      >
        TUS GIFS FAVORITOS
      </p>
      <gif-list :gifs="favorites" />
    </div>
    <div v-else class="text-center">
      <img
        src="https://media.giphy.com/media/GwskZm1jXg8cDvuZJ6/giphy.gif"
        class="m-auto my-10 bg-purple-400 rounded"
        v-animate-css.once="'rotateInDownLeft'"
      />
      <div v-animate-css.once="animationWords">
        <p
          class="text-purple-700 text-opacity-100 font-serif text-9xl font-bold"
        >
          No tienes gifs favoritos
        </p>
        <p
          class="text-purple-700 text-opacity-75 font-serif text-9xl font-bold"
        >
          No tienes gifs favoritos
        </p>
        <p
          class="text-purple-700 text-opacity-50 font-serif text-9xl font-bold"
        >
          No tienes gifs favoritos
        </p>
        <p
          class="text-purple-700 text-opacity-25 font-serif text-9xl font-bold"
        >
          No tienes gifs favoritos
        </p>
        <p class="text-purple-700 text-opacity-0 font-serif text-9xl font-bold">
          No tienes gifs favoritos
        </p>
      </div>
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
      //objeto de la animación
      animationWords: {
        classes: "rubberBand",
        duration: 5000,
        iteration: "infinite",
      },
      animationFavorite: {
        classes: "jello",
        delay: 4000,
        duration: 5000,
        iteration: "infinite",
      },
    };
  },
  computed: {
    /* obtener el estado de favorites para poderlos renderizar */
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
