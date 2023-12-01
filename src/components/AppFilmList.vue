<script>
import { store } from "../store";
import AppFilm from "./AppFilm.vue";
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppFilm }
};
</script>

<template>
    <h2>Film:</h2>
    <div class="row" >
        <AppFilm v-for="film in store.films" :film="film" />
    </div>
    <h2>Serie TV:</h2>
    <div class="row" >
        <AppFilm v-for="film in store.serieTv" :film="film" />
    </div>
</template>
  
<style lang="scss">
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.row{
    width: 100%;
    @include flex(space-between, stretch, row);
    overflow-x: auto;
}
h2{
    font-size: 2rem;
    font-weight: bold;
}
</style>