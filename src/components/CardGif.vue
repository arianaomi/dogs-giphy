<template>
  <article class="w-full my-3 relative md:w-45 md:inline-block lg:w-auto">
    <img
      ref="url"
      :src="gif.images.original.url"
      class="w-full lg:w-240 lg:h-240 rounded"
    />
    <div
      class="absolute inset-x-0 bottom-0 flex bg-purple-600 bg-opacity-75 p-1 justify-between rounded"
    >
      <img src="../assets/eyes.png" class="h-8 cursor-pointer" />
      <input
        readonly
        type="text"
        ref="url"
        :value="gif.images.original.url"
        class="h-8 cursor-pointer bg-gradient-to-r from-indigo-400 to-pink-500 mx-2 rounded text-center w-1/2"
        @click="copyUrl"
      />
      <img
        v-if="!isFavorite"
        src="../assets/tv.png"
        class="h-8 mx-2 cursor-pointer"
        @click="setIsFavorite"
      />

      <img
        v-else
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
      favorites: [],
    };
  },
  methods: {
    copyUrl() {
      this.$refs.url.select();
      document.execCommand("copy");
      this.$refs.url.value = "¡Copiado!";
    },
    setIsFavorite() {
      //ToDo: revisarlo
      this.isFavorite = !this.isFavorite;
      this.favorites.push(this.gif);
    },
    removeFavorite() {
      this.isFavorite = !this.isFavorite;
      console.log(this.favorites);
      let favoriteArr = this.favorites.filter((gif) => gif.id === this.gif.id);
      console.log(favoriteArr);
    },
  },
};
</script>
