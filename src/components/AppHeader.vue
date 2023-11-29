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
            axios.get(this.store.apiUrl,{
                params:{
                    query: this.store.srcFilm,
                },
            })
            .then((resp) => {
                this.store.films = resp.data.results;
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
        <AppSrcBar @srcfilm="selfilm" />
    </header>
</template>

<style lang="scss" scoped>
header{
    display: flex;
}
</style>