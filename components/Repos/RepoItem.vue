<template>
  <div class="repo">
    <div class="repo-header">
      <a class="repo-name" :href="repo.url" target="_blank">{{repo.name}}</a>
    </div>
    <div class="repo-body">
      <p>{{repo.description}}</p>
      <p v-if="repo.stargazers_count > 0">{{repo.stargazers_count}}</p>
      <p v-if="repo.primaryLanguage">Language: {{repo.primaryLanguage.name}}</p>
    </div>
    <div class="repo-footer">
      <a :href="repo.url" target="_blank">Code</a>
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
    background: #333;

    .repo-name {
      font-size: 20px;
      text-decoration: none;
      color: #f4f4f4;
    }
  }

  .repo-body {
    padding: 1.5rem;
    p {
      margin-bottom: 10px;
    }
  }

  .repo-footer {
    padding: 0.8rem;
    display: grid;

    a {
      width: 300px;
      padding: 0.8rem;
      justify-content: center;
      border-radius: 10px;
      text-decoration: none;
      color: #1a1a1a;
      justify-self: center;
      display: flex;
      background: #ccc;
      transition: all ease-in 300ms;
      &:hover {
        background: #999;
      }
    }
  }
}
</style>
