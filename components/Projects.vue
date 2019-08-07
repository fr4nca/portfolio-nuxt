<template>
  <div class="projects">
    <div class="repo" v-for="repo in repos" :key="repo.id">
      <a target="_blank" :href="repo.html_url">{{repo.name}}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["repos"])
  }
};
</script>

<style lang="scss" scoped>
.projects {
  height: 100vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  .repo {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
    }

    a:visited {
      color: black;
    }
  }
}
</style>

