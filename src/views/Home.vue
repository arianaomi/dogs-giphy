<template>
  <div>
    <search @search="serch" />
    <div
      class="hidden py-2 md:flex flex-wrap justify-between lg:justify-center"
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
//My components
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
  /* Obtener los gifs que se muestran al cargar la página */
  created() {
    this.isLoading = true;
    api
      .getDogsGifs()
      .then((res) => (this.gifs = res))
      .finally(() => (this.isLoading = false));
    //verificar si existen busquedas guaradadas en localStorage
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
  /*Saber cuando se realizo una nueva busqueda para mostarla*/
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
