<template>
  <div>
    <Landing />
    <Repos />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import Repos from "~/components/Repos/Repos";

export default {
  components: {
    Landing,
    Repos
  }
};
</script>
