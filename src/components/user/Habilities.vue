<template>
<div class="user-profile">
    <h2>Habilities</h2>
    <hr>
    <slot name="other">
        loading...
    </slot>
    <div>
        <slot name="heading"></slot>
    </div>
    <hr>
    <div>
        <slot name="para"></slot>
    </div>
    <hr>
    <slot></slot>

</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<style>
.user-profile {
    margin-top: 10px;
    border: 1px solid rgb(90, 0, 0);
    padding: 12px;
    min-height: 10vh;
    width: auto;
    background: rgba(92, 5, 114, 0.867);
}
</style>
