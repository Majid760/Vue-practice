<template>
<div>
    <app-header></app-header>
    <div class="wrapper">
        <div class="container">
            <div class="">
                <button class="btn btn-primary " @click="renderComp='compHome'">Home</button>
                <button class="btn btn-danger mx-2" @click="renderComp='compAbount'">About</button>
                <button class="btn btn-success" @click="renderComp='compContact'">Contact</button>
            </div>
            <keep-alive>
                <component :is="renderComp"></component>
            </keep-alive>
        </div>
    </div>
    <app-footer></app-footer>
</div>
</template>

<script>
import compContact from './components/Contact.vue';
import compAbount from './components/About.vue';
import compHome from './components/Home.vue';
export default {

    data() {
        return {
            renderComp: 'compContact'

        }
    },
    components: {
        compContact,
        compAbount,
        compHome
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
