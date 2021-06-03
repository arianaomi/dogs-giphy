<template>
  <span class="rounded-full py-3 px-6 m-2 bg-blue-200 text-gray-800">{{
    keyword
  }}</span>
</template>

<script>
export default {
  name: "LastSearch",
  props: {
    keyword: {
      type: String,
      default: "",
    },
  },
};
</script>