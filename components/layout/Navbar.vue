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

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        nav.style.background = "rgba(31, 31, 31, 1)";
        nav.style.padding = "0.4rem";
      } else {
        nav.style.background = "rgba(31, 31, 31, 0)";
        nav.style.padding = "1.5rem";
      }
    });
  }
};
</script>


<style lang="scss" scoped>
.nav {
  transition: all ease-in 300ms;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 1.5rem;
  font-size: 1.1rem;

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
        color: #fff;

        &:visited {
          color: #fff;
        }

        &:hover {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: solid 1px #fff;
        }
      }
    }
  }
}
</style>
