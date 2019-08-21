<template>
  <div>
    <Landing />
    <Projetos />
    <Skills />
    <Repos />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import Repos from "~/components/Repos/Repos";
import Skills from "~/components/Skills/Skills";
import Projetos from "~/components/Projetos/Projetos";

export default {
  components: {
    Landing,
    Repos,
    Skills,
    Projetos
  }
};
</script>
