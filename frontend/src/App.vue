<template>
  <TopMenu />
  <router-view />
</template>
<script>
import TopMenu from "./components/TopMenu.vue";
export default {
  name: "App",
  components: { TopMenu },
};
</script>
