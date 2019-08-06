<template>
  <div class="nav">
    <div class="container">
      <ul class="nav-menu">
        <div class="nav-logo">
          <nuxt-link to="/" class="logo">Victor</nuxt-link>
        </div>
        <div class="nav-links">
          <nuxt-link to="/" class="link">Home</nuxt-link>
          <nuxt-link to="/about" class="link">About</nuxt-link>
          <nuxt-link to="/about" class="link">Contact</nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  background: transparent;
  color: #fff;
  padding: 1.5rem;

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-logo {
      .logo {
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
      }

      .logo:visited {
        color: white;
      }
    }

    .nav-links {
      list-style: none;
      display: flex;

      .link {
        padding: 1rem;
        border-radius: 8px;
        text-decoration: none;
        margin: 0 15px;
      }

      .link:visited {
        color: white;
      }

      .link:hover {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: solid 1px #f3f3f3;
      }
    }
  }
}
</style>
