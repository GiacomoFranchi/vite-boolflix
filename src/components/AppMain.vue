<script>
import AppFilmList from "./AppFilmList.vue";

export default {
    components: { AppFilmList }
}
</script>

<template>
    <main>
        <AppFilmList />
    </main>
</template>
    
<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

main{
    background-color: gray;
    width: 100%;
    padding: 1.5rem;
}
</style>