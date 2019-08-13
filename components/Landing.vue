<template>
  <div class="content">
    <div class="lead">
      <div class="lead-content">
        <h1>Victor Almeida França</h1>
        <p>Desenvolvedor WEB e Mobile</p>
        <ul class="links">
          <li>
            <a class="landing-link" href="https://www.github.com/fr4nca" target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              class="landing-link"
              href="https://codepen.io/fr4nca/projects/public"
              target="_blank"
            >
              <i class="fab fa-codepen fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              class="landing-link"
              href="https://br.linkedin.com/in/victor-almeida-franca"
              target="_blank"
            >
              <i class="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
        </ul>
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

      .links {
        margin-top: 20px;
        list-style: none;
        color: #333;
        display: flex;
        justify-content: space-evenly;
        width: 50%;

        .landing-link {
          color: #555;
          transition: color ease-out 300ms;

          &:hover {
            color: black;
          }
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
