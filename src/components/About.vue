<template>
<div class="container">
    <h1 class="text-danger">About Us</h1>
    <h3>{{rslt}}</h3>
    <button class="btn btn-info" @click="sum">Sum</button>
    <p class="text-danger">lorem ipsum dolor sit amet, consectet</p>
</div>
</template>

<script>
export default {

    data() {
        return {
            a: 3443,
            b: 232,
            rslt: '',
        }
    },
    destroyed() {
        console.log('Destroyed');
    },
    activated() {
        console.log('Activated');
    },
    deactivated() {
        console.log('Deactivated');
    },
    methods: {
        sum() {
            this.rslt = this.a + this.b;
        }
    }
}
</script>

<style scoped>

</style>
