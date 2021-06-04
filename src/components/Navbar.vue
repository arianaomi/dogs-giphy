<template>
  <nav class="flex justify-between justify-items-center md:h-full my-8">
    <router-link :to="{ name: 'home' }" class="my-auto mx-5 w-8 md:w-1/6">
      <img src="../assets/shiba.png" class="w-8 mx-2 cursor-pointer" />
      <p class="text-pink-700 text-opacity-100 md:text-2xl">DOG GIPHY</p>
    </router-link>

    <img
      src="https://media.giphy.com/media/KCwenuvmXxXBKrRyry/giphy.gif"
      class="w-12 md:w-24 rounded"
    />
    <div class="my-auto flex flex-col md:flex-row">
      <router-link
        :to="{ name: 'home' }"
        class="border text-center border-indigo-400 rounded py-3 px-3 my-2 md:px-6 md:my-0 md:mx-4"
        :class="{ 'bg-gradient-to-r to-indigo-500 from-pink-500': this.isHome }"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'favorites' }"
        class="border text-center border-indigo-400 rounded py-3 px-3 my-2 md:px-6 md:my-0"
        :class="{
          'bg-gradient-to-r from-indigo-500 to-pink-500': !this.isHome,
        }"
      >
        Favoritos
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isHome: true,
    };
  },
  watch: {
    $route() {
      this.lookPath();
    },
  },
  methods: {
    lookPath() {
      if (this.$route.path === "/favoritos") {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    },
  },
};
</script>
