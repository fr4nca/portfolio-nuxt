<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/layout/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>


<style>
*,
*:before,
*:after {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #333;
}

.container {
  display: block;
  margin: auto;
  max-width: 1000px;
}
</style>
