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
     placeholder="inizia la ricerca"
      v-model.trim="store.srcFilm" />
    <button  @click="$emit('srcfilm')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped></style>