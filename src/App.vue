<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
components: { AppHeader, AppMain },
}
</script>

<template>
<AppHeader />
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>

npm install @fortawesome/fontawesome-free