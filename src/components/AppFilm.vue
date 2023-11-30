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
    <div>
        
        <h2>{{ film.title }}</h2>
        <h3>{{ film.original_title }}</h3>
        <div>
          <img v-if="flag.includes(film.original_language)"  :src="getImgUrl(film.original_language)" alt="">
          <p v-else>{{ film.original_language }}</p>
        </div>
        
        <span>{{ film.vote_average }}</span>
    </div>
  </template>
  
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
div{
  div{
    width: 25px;
    img{
      width: 100%;
    }
  }
}
</style>