
<template>
  <article
    class="bg-gradient-to-r from-blue-400 to-pink-200 w-full my-3 rounded relative md:w-45 md:inline-block lg:w-auto"
  >
    <img
      ref="url"
      :src="gif.images.original.url"
      class="w-full rounded lg:w-240 lg:h-240"
    />
    <div
      class="bg-purple-600 bg-opacity-75 p-1 flex justify-between rounded absolute inset-x-0 bottom-0"
    >
      <img src="../assets/eyes.png" alt="see-more" class="h-8 cursor-pointer" />
      <input
        readonly
        type="text"
        ref="url"
        :value="gif.images.original.url"
        class="bg-gradient-to-r from-indigo-400 to-pink-500 h-8 mx-2 w-1/2 rounded text-center cursor-pointer"
        @click="copyUrl"
      />
      <img
        v-if="!isFavorite"
        src="../assets/tv.png"
        alt="favorite-off"
        class="h-8 mx-2 cursor-pointer"
        @click="addFavorite"
      />
      <img
        v-else
        alt="favorite-on"
        src="../assets/tv-color.png"
        class="h-8 mx-2 cursor-pointer"
        @click="removeFavorite"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "CardGif",
  props: {
    gif: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  created() {
    if (this.gif.isFavorite) {
      this.isFavorite = true;
    }
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    copyUrl() {
      this.$refs.url.select();
      document.execCommand("copy");
      this.$refs.url.value = "¡Copiado!";
    },
    addFavorite() {
      this.isFavorite = !this.isFavorite;
      let gifFavorite = { ...this.gif, isFavorite: true };

      this.$store.commit("addFavorite", { gif: gifFavorite });
    },
    removeFavorite() {
      this.isFavorite = !this.isFavorite;
      let gifFavorite = { ...this.gif, isFavorite: false };

      this.$store.commit("removeFavorite", { gif: gifFavorite });
    },
  },
};
</script>
