<script>
import AppSrcBar from "./AppSrcBar.vue";
import axios from "axios";
import { store } from '../store';

export default {
    data() {
        return {
        store,
        };
    },
    components: { AppSrcBar },
    methods:{
        selfilm(){
            //FILM
            axios.get(`${this.store.apiUrl}/search/movie`,{
                params:{
                    api_key: "3feda43c221b120c99ea38148719ef84",
                    query: this.store.srcFilm,
                },
            })
            .then((resp) => {
                this.store.films = resp.data.results;
            });
            console.log(this.store.films);
            //SERIE TV
            axios.get(`${this.store.apiUrl}/search/tv`,{
                params:{
                    api_key: "3feda43c221b120c99ea38148719ef84",
                    query: this.store.srcFilm,
                },
            })
            .then((resp) => {
                this.store.serieTv = resp.data.results;
            });
            console.log(this.store.serieTv)
        }
    }
}
</script>

<template>
    <header>
       <section class="logo">
            <h1>BOOLFLIX</h1>
       </section>
        <AppSrcBar @srcfilm="selfilm" />
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

header{
    position:fixed;
    width: 100%;
    height: 70px;
    z-index: 999;
    @include flex(space-between, center, row);
    background-color: black;
    padding: 1rem;
    h1{
        color: red;
        font-size: 3rem;
    }
}
</style>