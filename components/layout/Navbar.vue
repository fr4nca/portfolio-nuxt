<template>
  <div id="navbar" class="nav">
    <div class="container">
      <ul class="nav-menu">
        <div class="nav-links">
          <nuxt-link to="/" class="link">Home</nuxt-link>
          <nuxt-link to="/about" class="link">About</nuxt-link>
          <nuxt-link to="/about" class="link">Contact</nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const nav = document.querySelector("#navbar");
    const link = document.querySelectorAll(".link");
    if (window.scrollY > 200) {
      nav.style.background = "rgba(31, 31, 31, 1)";
      link.forEach(link => (link.style.color = "#eee"));
      nav.style.padding = "0.2rem";
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        nav.style.background = "rgba(31, 31, 31, 1)";
        nav.style.padding = "0.2rem";
        link.forEach(link => (link.style.color = "#eee"));
      } else {
        nav.style.background = "rgba(31, 31, 31, 0)";
        nav.style.padding = "1.5rem";
        link.forEach(link => (link.style.color = "#333"));
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #333;
  padding: 2rem;
  font-size: 1.1rem;
  transition: all ease-in 400ms;

  .nav-menu {
    display: flex;
    justify-content: center;

    .nav-links {
      list-style: none;
      display: flex;
      width: 80%;
      justify-content: space-evenly;

      .link {
        padding: 1rem;
        border-radius: 8px;
        border-bottom: solid 1px transparent;
        text-decoration: none;
        color: #333;

        &:hover {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: solid 1px #333;
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .nav {
    background: #333 !important;
    padding: 0.2rem !important;

    .link {
      color: #eee !important;
    }
  }
}
</style>
