<template>
<div class="profile">
    <div class="user-profile">
        <h2>User Profile</h2>

        <ul>
            <li>First Name:{{fname}}</li>
            <li>Last Name:{{lname}}</li>
            <li>Email:{{email}}</li>
            <li>Phone:{{phone}}</li>
        </ul>
        <h3>Parent</h3>
        <ul>
            <li v-for="(value,key,index) in  parent" :key="index">
                {{ key }} : {{ value }}
            </li>
        </ul>
        <h3>Parent</h3>
        <ul>
            <li v-for="(value,key,index) in arr" :key="index">
                {{ key }} : {{ value }}
            </li>
        </ul>
        <button @click="updateName">Update Name!</button>
        <button @click="updateLastName('This is updating the last name!')">Update Last Name!</button>
        <input type="text" v:model.lazy="friend">
        <button @click="addFriend">Add Friend!</button>
    </div>
</div>
</template>

<script>
import {
    bus
} from "../../main.js";

export default {

    props: {
        fname: String,
        lname: String,
        email: String,
        phone: Number,
        parent: Object,
        arr: Array,
        updateLastName: Function,

    },
    data() {
        return {
            name: "Glen Maxwel",
            friend: '',
        }
    },
    methods: {
        updateName() {
            this.$emit('update', this.name);
        },
        addFriend() {
            bus.$emit('addFriend', this.friend);
        }

    }

}
</script>

<style scoped>
.profile {
    text-align: center;
    color: antiquewhite;
    min-height: 60vh;
    box-sizing: border-box;
    background: rgba(144, 144, 1, 0.867);
}

.user-profile {
    margin-top: 10px;
    border: 1px solid rgb(90, 0, 0);
    padding: 12px;
    min-height: 10vh;
    width: auto;
    background: rgba(92, 5, 114, 0.867);
}
</style>
