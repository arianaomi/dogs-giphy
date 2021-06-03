<template>
  <section class="flex flex-wrap justify-between">
    <article
      v-for="gif in gifs"
      :key="gif.id"
      class="w-full my-3 relative md:w-45 md:inline-block lg:w-auto"
    >
      <img
        ref="url"
        :src="gif.images.original.url"
        class="w-full lg:w-auto lg:h-full"
      />
      <div
        class="absolute right-0 top-0 flex bg-purple-600 bg-opacity-75 p-1 justify-between"
      >
        <img
          src="../assets/eyes.png"
          class="w-10 my-4 cursor-pointer md:w-16"
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
