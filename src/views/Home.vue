<template>
  <div>
    <search @search="serch" />
    <pacman-loader
      :loading="isLoading"
      :color="'#DAA4E7'"
      :size="80"
      class="m-auto"
    />
    <card-gif v-if="!isLoading" :gifs="gifs" />
  </div>
</template>

<script>
import api from "@/lib/api";

import Search from "../components/Search";
import CardGif from "../components/CardGif";

export default {
  name: "Home",
  components: {
    CardGif,
    Search,
  },
  data() {
    return {
      gifs: [],
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
      console.log("res", result);
      this.gifs = result;
    },
  },
};
</script>
