<template>
  <div id="app">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/layout/Navbar";
import Footer from "~/components/layout/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: block;
  margin: auto;
  max-width: 1000px;
}
</style>
