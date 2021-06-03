<template >
  <main class="h-full px-8 md:px-16 lg:px-32">
    <navbar />
    <router-view />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
