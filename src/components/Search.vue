<template>
  <div class="flex my-4">
    <input
      class="text-black border text-center border-indigo-400 rounded w-full"
      type="text"
      placeholder="Buscador de gifs de perritos"
      v-model="keyword"
      @keyup.enter="onSearch"
    />
    <button
      @click="onSearch"
      v-animate-css.click="'headShake'"
      class="border text-center border-indigo-400 rounded py-2 px-2 mx-1 md:px-6 bg-gradient-to-r from-indigo-500 to-pink-500"
    >
      <img
        src="../assets/loupe.png"
        alt="search-btn"
        class="h-10 cursor-pointer"
      />
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
  created() {
    let data = localStorage.getItem("lastSearches");
    if (data != null) {
      this.lastSearches = JSON.parse(data);
    }
  },
  methods: {
    /* Método para hacer la busqueda de los gif dependiendo
      de la palabra que introduzca el usuario, la respuesta de la
      busqueda la envia al componente paadre para poder renderizarlo
    */
    async onSearch() {
      if (this.keyword) {
        let hasDogs = this.keyword.includes("dogs");
        let hasPerros = this.keyword.includes("perros");
        //Guardar la busqueda en localStorage
        this.addSearch();
        if (!hasDogs || !hasPerros) {
          this.keyword = `${this.keyword} dogs`;
        }

        let res = await api.getSpecialGifs(this.keyword);
        this.keyword = "";
        this.$emit("search", res);
      }
    },
    /* Método para que solo guarde 7 busquedas, las más recientes en localStorage */
    addSearch() {
      if (this.lastSearches.length <= 6) {
        this.saveInLocal();
      } else {
        this.lastSearches.reverse().pop();
        this.saveInLocal();
      }
    },
    /* Método para verificae que la busqueda no exista en las
      que ya estan guardadas en el localStorage, si no existe la agrega
    */
    saveInLocal() {
      const hasKeyword = this.lastSearches.includes(this.keyword);
      if (!hasKeyword) {
        this.lastSearches.push(this.keyword);
        localStorage.setItem("lastSearches", JSON.stringify(this.lastSearches));
      }
    },
  },
};
</script>