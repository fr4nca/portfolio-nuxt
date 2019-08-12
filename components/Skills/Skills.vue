<template>
  <div>
    <div class="skills">
      <div class="lead">
        <p>Skills</p>
      </div>
      <div class="skills-grid">
        <ul class="skills-list">
          <ul id="frotend-skills">
            <h2>Front-end</h2>
            <li>React</li>
            <li>VueJS</li>
            <li>Redux, Vuex and Context API state management</li>
            <li>SASS and SCSS</li>
            <li>Vanilla HTML5, CSS3 and JavaScript</li>
            <li>CSS frameworks like Bootstrap, Bulma and Materialize</li>
            <li>Server-side and client-side rendering</li>
          </ul>
          <ul id="mobile-skills">
            <h2>Mobile Development</h2>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
          <ul id="backend-skills">
            <h2>Back-end</h2>
            <li>Express</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Nginx</li>
            <li>Websockets</li>
            <li>RESTfull APIs</li>
            <li>GraphQL APIs</li>
          </ul>
          <ul id="databases-skills">
            <h2>Databases</h2>
            <li>Postgres</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <ul id="security-skills">
            <h2>Security</h2>
            <li>JWT authentication</li>
            <li>OAuth</li>
            <li>Role based authorization</li>
          </ul>
          <ul id="nonspecific-skills">
            <h2>Non specific</h2>
            <li>Cloud Computing</li>
            <li>Docker</li>
            <li>Docker-compose</li>
            <li>Kubernetes</li>
            <li>Microservices</li>
            <li>Linux environment</li>
            <li>Server management</li>
          </ul>
        </ul>
      </div>
      <div class="curriculo">
        <a target="_blank" href="/CURRICULO_Victor.pdf">Currículo / Resumè</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.skills {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "lead" "skills-grid" "curriculo";

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

  .skills-grid {
    grid-area: skills-grid;
    padding: 2rem;

    .skills-list {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .curriculo {
    grid-area: curriculo;
    display: block;
    margin: auto;

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

@media (max-width: 970px) {
  .skills-list {
    flex-direction: column;
  }

  .skills-list ul {
    margin-top: 1rem;
  }
}
</style>