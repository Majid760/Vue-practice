<template>
<header>
    {{ header }}
</header>
</template>

<script>
export default {
    data() {
        return {
            header: 'This is application header',

        }
    },

}
</script>

<style scoped>
header {
    background: rgba(0, 165, 0, 0.867);
    padding: 20px;
    text-align: center;
    color: aliceblue;
    font-size: 25px;
}
</style>
