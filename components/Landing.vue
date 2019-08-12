<template>
  <div class="content">
    <div class="lead">
      <div class="lead-content">
        <h1>Victor Almeida França</h1>
        <p>Desenvolvedor WEB e Mobile</p>
        <a class="link" href="http://www.github.com/fr4nca" target="_blank">
          <img src="~assets/icons/github.svg" alt="github" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 60vh;
  background: #eee;
  color: #333;

  .lead {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .lead-content {
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .link {
        margin-top: 10px;

        img {
          width: 60px;
        }
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .content {
    height: 50vh;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .content {
    height: 40vh;
    display: flex;
    justify-content: center;

    .lead {
      .lead-content {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
