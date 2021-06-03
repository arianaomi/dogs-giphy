<template>
  <div class="flex my-4">
    <input
      class="text-black border text-center border-indigo-400 rounded w-full"
      type="text"
      placeholder="Buscador de gifs de perritos"
      v-model="keyword"
    />
    <button
      @click="onSearch"
      class="border text-center border-indigo-400 rounded py-3 px-3 mx-1 md:px-6 bg-gradient-to-r from-indigo-400 to-pink-500"
    >
      buscar
    </button>
  </div>
</template>

<script>
import api from "@/lib/api";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      gifs: [],
      lastSearches: [],
    };
  },
  methods: {
    async onSearch() {
      if (this.keyword) {
        let hasDogs = this.keyword.includes("dogs");
        let hasPerros = this.keyword.includes("perros");

        if (!hasDogs || !hasPerros) {
          this.keyword = `${this.keyword} dogs`;
        }
        this.addSearch();
        let res = await api.getSpecialGif(this.keyword);
        this.keyword = "";
        this.$emit("search", res);
      }
    },
    addSearch() {
      this.lastSearches.push(this.keyword);
      localStorage.setItem("lastSearches", JSON.stringify(this.lastSearches));
      //obtener info
      /*let data = localStorage.getItem("lastSearches")
      if(data != null){
        this.tareas = JSON.parse(data)
      }
      */
    },
  },
};
</script>