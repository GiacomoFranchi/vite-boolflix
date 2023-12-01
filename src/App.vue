<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
components: { AppHeader, AppMain },
}
</script>

<template>
    <div class="container">
        <AppHeader />
        <AppMain />
    </div>

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.container{
    width: 100%;
    height: 100vh;
    position: relative;
}
</style>
