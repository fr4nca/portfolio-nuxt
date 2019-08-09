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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "lead skills";

  .lead {
    grid-area: lead;
    display: flex;
    justify-content: space-evenly;
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

  .skills {
    grid-area: skills;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 51px;

    .skills-content {
      list-style: none;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 30%;

      .icon {
        width: 50px;
        color: white;
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
