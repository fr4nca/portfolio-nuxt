<template>
  <div class="repo">
    <div class="repo-header">
      <a class="repo-name" :href="repo.html_url" target="_blank">{{repo.name}}</a>
    </div>
    <div class="repo-body">
      <p>{{repo.description}}</p>
      <p v-if="repo.stargazers_count > 0">{{repo.stargazers_count}}</p>
    </div>
    <div class="repo-footer">
      <a href>link</a>
      <a v-if="repo.homepage && repo.homepage !== ''" :href="repo.homepage">Homepage</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repo"]
};
</script>

<style lang='scss' scoped>
.repo {
  border: 1px solid #1a1a1a;
  border-radius: 5px;
  box-shadow: 0 0 5px #333;

  .repo-header {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #1a1a1a;

    .repo-name {
      font-size: 20px;
      text-decoration: none;
      color: #f4f4f4;
    }
  }

  .repo-body {
    padding: 1.5rem;
  }

  .repo-footer {
    padding: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    a {
      padding: 0.5rem 2rem;
      border-radius: 10px;
      text-decoration: none;
      color: #1a1a1a;
      justify-self: center;
      background: #ccc;
    }
  }
}
</style>
