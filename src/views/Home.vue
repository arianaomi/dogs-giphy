<template>
  <div>
    <search @search="serch" />
    <pacman-loader
      :loading="isLoading"
      :color="'#DAA4E7'"
      :size="80"
      class="m-auto"
    />
    <gif-list v-if="!isLoading" :gifs="gifs" />
  </div>
</template>

<script>
import api from "@/lib/api";

import Search from "../components/Search";
import GifList from "../components/GifList";

export default {
  name: "Home",
  components: {
    GifList,
    Search,
  },
  data() {
    return {
      gifs: [],
      favorites: [],
      isLoading: false,
    };
  },
  created() {
    // llamar a la funcion que tarea los gifs
    this.isLoading = true;
    api
      .getDogsGif()
      .then((res) => (this.gifs = res))
      .finally(() => (this.isLoading = false));
  },
  methods: {
    serch(result) {
      this.gifs = result;
    },
  },
};
</script>
