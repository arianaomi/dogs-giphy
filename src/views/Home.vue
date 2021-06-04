<template>
  <div>
    <search @search="serch" />
    <div
      class="hidden py-2 md:flex justify-between lg:justify-center flex-wrap"
    >
      <last-search v-for="last in lastSearches" :key="last" :keyword="last" />
    </div>
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
import LastSearch from "../components/LastSearch";

export default {
  name: "Home",
  components: {
    GifList,
    Search,
    LastSearch,
  },
  data() {
    return {
      gifs: [],
      favorites: [],
      lastSearches: [],
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
    let data = localStorage.getItem("lastSearches");

    if (data != null) {
      this.lastSearches = JSON.parse(data).reverse();
    }
  },
  methods: {
    serch(result) {
      this.gifs = result;
    },
  },
  watch: {
    gifs() {
      let data = localStorage.getItem("lastSearches");
      if (data != null) {
        this.lastSearches = JSON.parse(data).reverse();
      }
    },
  },
};
</script>
