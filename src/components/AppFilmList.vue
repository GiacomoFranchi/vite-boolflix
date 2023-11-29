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
    <div>
        <div>
            <div v-for="film in store.films">
                <AppFilm  :film="film" />
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

</style>