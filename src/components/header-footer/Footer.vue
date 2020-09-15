<template>
<footer>
    {{ footer }}
</footer>
</template>

<script>
export default {
    data() {
        return {
            footer: 'This is application footer'
        }
    }

}
</script>

<style scoped>
footer {
    background: rgba(0, 165, 0, 0.867);
    text-align: center;
    font-size: 22px;
    padding: 10px;
}
</style>
