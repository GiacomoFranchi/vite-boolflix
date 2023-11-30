<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div >
    <input type="search"
     placeholder="Inizia la ricerca.."
      v-model.trim="store.srcFilm" />
    <button  @click="$emit('srcfilm')">CERCA</button>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

div{
  input{
    padding: 0.2rem;
    font-size: 1rem;
  }
  button{
    padding: 0.3rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: red;
  }
}
</style>