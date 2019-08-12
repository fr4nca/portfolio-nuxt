<template>
  <div>
    <Landing />
    <Skills />
    <Repos />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import Repos from "~/components/Repos/Repos";
import Skills from "~/components/Skills/Skills";

export default {
  components: {
    Landing,
    Repos,
    Skills
  }
};
</script>
