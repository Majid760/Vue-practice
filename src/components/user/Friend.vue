<template>
<div class="user-friend">
    <h2>Friends</h2>
    <ul>
        <li v-for="(value,key,index) in friends" :key="index">
            {{ value }}
        </li>
    </ul>
</div>
</template>

<script>
import {
    bus
} from '../../main.js';
export default {
    data() {
        return {
            friends: ['Anas Yousaf', 'Tariq Faqi', 'Mudassir Iqbal', 'Khalid Khan', 'Yasir', 'Ahmed Ali Khan'],
        }

    },
    created() {
        bus.$on('addFriend', (value) => {
            this.friends.push(value);
            console.log(this.friends.push(value));

        })
    }

}
</script>

<style scoped>
.user-friend {
    border: 1px solid #3344ff;
    padding: 10px;
}
</style>
