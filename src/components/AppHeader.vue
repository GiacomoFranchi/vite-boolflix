<script>
import AppSrcBar from './AppSrcBar.vue';
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
        selFilm(){
            axios.get(this.store.apiUrl,{
                params:{
                    query: this.store.srcFilm,
                },
            })
            .then((resp) => {
                this.store.films = resp.results;
            });
            console.log(this.store.films)
        }
    }
}
</script>

<template>
    <header>
       <section class="logo">
            <h1>BOOLFLIX</h1>
       </section>
        <AppSrcBar @srcFilm="selFilm" />
    </header>
</template>

<style lang="scss" scoped>

</style>