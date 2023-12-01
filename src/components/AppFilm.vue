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
  <div class="col">
    <div class="card">
        <div class="locandina">
          <img v-if="this.film.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
          <img v-else class="no-img" :src="getImgUrl(film.poster_path)" alt="">
        </div>
        <div class="info">
          <h3>Titolo: <span>{{ film.title? film.title : film.name  }}</span></h3>
          <h3>Titolo originale: <span>{{ film.original_title? film.original_title : film.original_name }}</span></h3>
          <div>
            <p >Lang:</p>
            <img class="flag" v-if="flag.includes(film.original_language)"  :src="getImgUrl(film.original_language)" alt="">
            <p class="lng" v-else>{{ film.original_language }}</p>
          </div>
          <div >
            <p>Voto:</p>
            <i  v-for="i in fStar" class="fa-solid fa-star"></i>
            <i  v-for="i in eStar" class="fa-regular fa-star"></i>
          </div>
          <h3>Overview:</h3>
          <p class="descr"> {{ film.overview }}</p>        
        </div>
      </div>
    </div>
  </template>
  
<style lang="scss" >
@use "../style/partials/variables" as *;

.col{
  margin: 0.5rem;
  position: relative;
  .card{
    position:relative;
    &:hover.locandina{
        z-index: 0;
        cursor: pointer;
      }
      &:hover .info{
      z-index: 2;
    }
    .locandina{
      height: 516px;
      background-color:rgba($color: #000000, $alpha: 0.5);
      .img{
        height: 520px;
      }
    }
    .info{
      position:absolute;
      top: 0;
      left: 0;
      z-index: -1;
      padding: 0.5rem;
      background-color:rgba($color: #000000, $alpha: 0.6);
      width: 100%;
      height: 100%;
      color: white;
      overflow-y:auto;
      .lng{
        color: red;
        font-size: 2rem;
        font-weight: bold;
      }
      h3{
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      span{
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .flag{
        width: 30px;
        margin-bottom: 0.5rem;
      }
      i{
        color: yellow;
        margin-bottom: 0.5rem;
      }
      .descr{
        font-size: 0.8rem;
      }
    }
  }
}
</style>