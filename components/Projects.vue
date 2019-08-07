<template>
  <div class="projects">
    <div class="lead">
      <p>> My latest projects <</p>
    </div>
    <div class="repos">
      <div class="repo" v-for="repo in repos" :key="repo.id">
        <a target="_blank" :href="repo.html_url">{{repo.name}}</a>
      </div>
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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1max-content 1fr;
  grid-template-areas: "lead" "repos";

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

  .repos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-area: repos;

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
}
</style>

