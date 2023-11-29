<script>
export default {
  props: {
    film: Object,
  },
};
</script>

<template>
    <div>
        
        <h2>{{ film.title }}</h2>
        <h3>{{ film.original_title }}</h3>
        <p>{{ film.original_language }}</p>
        <span>{{ film.vote_average }}</span>
    </div>
  </template>
  
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

</style>