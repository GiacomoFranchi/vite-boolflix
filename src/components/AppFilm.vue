<script>
export default {
  data(){
    return{
      stars:[],
      flag:["","en","es","it","cn"],
    }
  },
  props: {
    film: Object,
  },
  methods:{
    getImgUrl(lenguage){
      return new URL(`../assets/img/${lenguage}.png`, import.meta.url).href;
    },
  },
  computed:{
    fStar() { 
      return Math.ceil(parseInt(this.film.vote_average) / 2) ;
    },
    eStar() { 
      return (5 -  this.fStar);
    }
  }
}
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
        <div >
          <i  v-for="i in fStar" class="fa-solid fa-star"></i>
          <i  v-for="i in eStar" class="fa-regular fa-star"></i>
        </div>        
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>