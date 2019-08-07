<template>
  <div class="content">
    <div class="grid-container">
      <div class="lead">
        <div class="lead-content">
          <h1>Victor Almeida França</h1>
          <p>Desenvolvedor WEB e Mobile</p>
        </div>
      </div>
      <div class="skills">
        <ul class="skills-content">
          <li>
            <a href>
              <img src="~assets/icons/github.svg" class="icon" />
            </a>
          </li>
          <li>
            <a href>
              <img src="~assets/icons/github.svg" class="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100vh;
  background: url("~assets/landing.jpg") no-repeat center center/cover;
  color: white;

  .grid-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "lead skills";
  }

  .lead {
    grid-area: lead;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 102px;

    .lead-content {
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .skills {
    grid-area: skills;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 102px;

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
    .grid-container {
      display: flex;
      justify-content: center;
    }
  }
}

@media (max-width: 768px) {
  .content {
    .grid-container {
      display: flex;
      justify-content: center;
    }

    .lead {
      .lead-content {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
