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
    <div class="row" >
        <AppFilm v-for="film in store.films" :film="film" />
    </div>
</template>
  
<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.row{
    width: 100%;
    @include flex(space-between, center, row);
    flex-wrap: wrap;
}
</style>