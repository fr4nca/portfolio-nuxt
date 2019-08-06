<template>
  <div class="content">
    <div class="grid-container">
      <div class="lead">
        <div class="lead-content">
          <h1>Victor Almeida França</h1>
          <p>Desenvolvedor WEB e Mobile</p>
        </div>
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
    grid-template-areas: "lead .";
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
}
</style>
