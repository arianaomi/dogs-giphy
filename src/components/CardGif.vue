<template>
  <article
    class="bg-gradient-to-r from-blue-400 to-pink-200 w-full my-3 rounded relative md:w-45 md:inline-block lg:w-auto"
    v-animate-css.once="animationCard"
  >
    <img
      ref="url"
      :src="gif.images.original.url"
      class="w-full rounded lg:w-240 lg:h-240"
    />
    <div
      class="bg-purple-600 bg-opacity-75 p-1 flex justify-between rounded absolute inset-x-0 bottom-0"
    >
      <div
        class="flex bg-gradient-to-r from-indigo-400 to-pink-500"
        @click="copyUrl"
        v-animate-css.click="'flash'"
      >
        <img
          src="../assets/glasses.png"
          alt="see-more"
          class="h-8 cursor-pointer .mob"
        />
        <input
          readonly
          type="text"
          ref="url"
          :value="gif.images.original.url"
          class="h-6 mx-2 w-full rounded text-center cursor-pointer my-auto bg-transparent"
        />
      </div>
      <transition name="move">
        <img
          v-if="!isFavorite"
          src="../assets/tv.png"
          alt="favorite-off"
          class="h-8 mx-2 cursor-pointer"
          @click="addFavorite"
        />
      </transition>
      <transition name="move">
        <img
          v-if="isFavorite"
          alt="favorite-on"
          src="../assets/tv-color.png"
          class="h-8 mx-2 cursor-pointer"
          @click="removeFavorite"
        />
      </transition>
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
      // objeto de la animación
      animationCard: {
        classes: "fadeInLeft",
        delay: 500,
        duration: 1000,
      },
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
    /* addFavorite y removeFavorite son metodos que nos ayudan a
        manipular el estado de favorites que se comparte entre vistas
     */
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
