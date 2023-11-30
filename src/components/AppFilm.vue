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
          <img v-if="film.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
          <img v-else class="no-img" src="https://c8.alamy.com/compit/r3yw81/nessuna-immagine-disponibile-icona-vettore-di-piana-r3yw81.jpg" alt="">
        </div>
        <div class="info">
          <h3>Titolo: <span>{{ film.title? film.title : film.name  }}</span></h3>
          <h3>Titolo originale: <span>{{ film.original_title? film.original_title : film.original_name }}</span></h3>
          <div>
            <p>Lang:</p>
            <img class="flag" v-if="flag.includes(film.original_language)"  :src="getImgUrl(film.original_language)" alt="">
            <p v-else>{{ film.original_language }}</p>
          </div>
          <div >
            <p>Voto:</p>
            <i  v-for="i in fStar" class="fa-solid fa-star"></i>
            <i  v-for="i in eStar" class="fa-regular fa-star"></i>
          </div>
          <p class="descr">{{ film.overview }}</p>        
        </div>
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.col{
  width: calc(100% / 4 - 1rem);
  margin: 0.5rem;
  position: relative;
  .card{
    position:relative;
    height: 100%;
    &:hover.locandina{
        z-index: 0;
        cursor: pointer;
      }
      &:hover .info{
      z-index: 2;
    }

    .locandina{
      width: 100%;
      z-index: 2;
      img{
        width: 100%;
      }
    }
    .info{
      position:absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-color:black;
      width: 100%;
      height: 100%;
      color: white;
      h3{
        font-size: 1rem;
      }
      span{
        font-size: 0.8rem;
      }
      .flag{
        width: 30px;
      }
      i{
        color: yellow
      }
      .descr{
        font-size: 0.6rem;
      }
    }
}
}
</style>