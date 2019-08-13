<template>
  <div class="footer">
    <ul class="links">
      <li>
        <a class="link" href="https://www.github.com/fr4nca" target="_blank">
          <i class="fab fa-github fa-3x"></i>
        </a>
      </li>
      <li>
        <a class="link" href="https://codepen.io/fr4nca/projects/public" target="_blank">
          <i class="fab fa-codepen fa-3x"></i>
        </a>
      </li>
      <li>
        <a class="link" href="https://br.linkedin.com/in/victor-almeida-franca" target="_blank">
          <i class="fab fa-linkedin-in fa-3x"></i>
        </a>
      </li>
      <li>
        <a class="link" href="https://br.linkedin.com/in/victor-almeida-franca" target="_blank">
          <i class="fas fa-envelope fa-3x"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
.footer {
  background: #333;
  display: flex;
  justify-content: center;
  padding: 1.4rem;

  .links {
    color: white;
    width: 30%;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
}
</style>