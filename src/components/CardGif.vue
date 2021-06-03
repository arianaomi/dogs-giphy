<template>
  <section class="flex flex-wrap justify-between">
    <article
      v-for="gif in gifs"
      :key="gif.id"
      class="w-full my-2 md:mx-4 relative md:w-45 h-full lg:w-auto"
    >
      <img ref="url" :src="gif.images.original.url" class="w-full" />
      <div
        class="absolute inset-x-0 bottom-0 w-full flex bg-purple-600 bg-opacity-50 p-1 justify-end"
      >
        <img
          src="../assets/eyes.png"
          class="w-10 mx-4 cursor-pointer md:w-16"
        />

        <img
          v-if="!isFavorite"
          src="../assets/tv.png"
          class="w-10 mx-2 cursor-pointer md:w-16"
          @click="setIsFavorite"
        />
        <img
          v-else
          src="../assets/tv-color.png"
          class="w-10 mx-2 cursor-pointer md:w-16"
          @click="setIsFavorite"
        />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "CardGif",
  props: {
    gifs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    copyUrl() {
      //ToDo : copiar
      //copyText.select();
      //document.execCommand("copy");
      //document.execCommand("copy");
    },
    setIsFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
