<script>
export default {
  data(){
    return{
      flag:["","en","es","it","cn"]
    }
  },
  props: {
    film: Object,
  },
  methods:{
    getImgUrl(lenguage){
      return new URL(`../assets/img/${lenguage}.png`, import.meta.url).href;
    }
  }
};
</script>

<template>
    <div class="card">
        <div class="locandina">
          <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
        </div>
        <div class="info">
        <h2>{{ film.title? film.title : film.name  }}</h2>
        <h3>{{ film.original_title? film.original_title : film.original_name }}</h3>
        <div>
          <img class="flag" v-if="flag.includes(film.original_language)"  :src="getImgUrl(film.original_language)" alt="">
          <p v-else>{{ film.original_language }}</p>
        </div>        
        <span>{{ film.vote_average }}</span>
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
div{

  }
</style>