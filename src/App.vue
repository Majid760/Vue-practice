<template>
<div>
    <app-header></app-header>
    <div class="wrapper">
        <div class="container">
            <button class="btn btn-success" @click="renderComp='compHome'">Home</button>
            <button class="btn btn-info mx-3" @click="renderComp='compContact'">Contact</button>
            <button class="btn btn-warning" @click="renderComp='compAbout'">About</button>
        </div>
        <keep-alive>
            <component :is="renderComp"></component>
        </keep-alive>
    </div>
    <app-footer></app-footer>
</div>
</template>

<script>
import compHome from './components/Home.vue';
import compAbout from './components/About.vue';
import compContact from './components/Contact.vue';

export default {

    data() {
        return {
            renderComp: 'compHome'

        }
    },
    components: {
        compHome,
        compAbout,
        compContact
    },
    methods: {

    }

}
</script>

<style>
body {
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', Courier, monospace;
}

.wrapper {
    min-height: 85vh;
    box-sizing: border-box;
    background-color: rgb(50, 190, 45);
}
</style>
