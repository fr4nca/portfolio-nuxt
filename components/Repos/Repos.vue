<template>
  <div class="repos">
    <div class="lead">
      <p>My latest projects</p>
    </div>
    <div class="repos-grid">
      <RepoItem v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RepoItem from "./RepoItem";

export default {
  components: {
    RepoItem
  },
  computed: {
    ...mapState(["repos"])
  }
};
</script>

<style lang="scss" scoped>
.repos {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1max-content 1fr;
  grid-template-areas: "lead" "repos-grid";

  .lead {
    grid-area: lead;
    padding-bottom: 1rem;
    align-self: center;
    justify-self: center;

    p {
      font-weight: 400;
      font-size: 2rem;
    }
  }

  .repos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-area: repos-grid;
  }
}
</style>

