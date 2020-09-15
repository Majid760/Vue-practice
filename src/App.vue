import Vue from 'vue';
import App from './App.vue';

<template>
<div class="main">
    <compHeader></compHeader>

    <div class="container">
        <h2>This is main Content Area</h2>
        <compUserProfile :fname="firstName" :lname="lastName" :email="email" :phone="ph" :parent="parent" :arr="arr" @update="firstName=$event" :updateLastName="updateLastName"></compUserProfile>
        <compUserFriend></compUserFriend>
        <compHability>

            <div :slot="slotName">
                other content:
            </div>
            <ul>
                <li v-for="(value,key,index) in hab" :key="index">
                    {{ value }}
                </li>

            </ul>
            <div slot="heading">
                <h1> this is my favorite place where i can earn bundle of points</h1>
            </div>
            <div slot="para">
                <p>lorem ipsum issidf idfidf difdfid fdifdifj difd ifidfjdifji</p>
            </div>
            <ul>
                <li v-for="(value,key,index) in hab" :key="index">
                    {{ value }}
                </li>
            </ul>
        </compHability>
    </div>

    <compFooter></compFooter>
</div>
</template>

<script>
import compUserProfile from './components/user/User-Profile.vue';
import compUserFriend from './components/user/Friend.vue';
import compHability from './components/user/Habilities.vue';
export default {
    data() {
        return {
            firstName: "Majid",
            lastName: "Ali Khan",
            email: "email@gmail.com",
            ph: 2330,
            parent: {
                father: "John Smith",
                mother: "Elia Joseph"
            },
            arr: [
                'first semester',
                'second semester',
                'third semester',
                'Fourth semester',
                'Fifthe Semester',
                'Sixthe semester',
                'Seventh semester',
                'eight semester',
            ],
            hab: [
                'Node.js',
                'Vue.js',
                'SEO',
                'Laravel',
            ],
            slotName: '',

        }
    },
    created() {
        setTimeout(() => {
            this.slotName = 'other';
        }, 3000)
    },

    methods: {
        updateLastName(value) {
            this.lastName = value;
        }
    },

    components: {
        compUserProfile,
        compUserFriend,
        compHability
    },

}
</script>

<style scoped>
body {
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
}

.container {
    min-height: 85vh;
    box-sizing: border-box;
    padding: 10px;
    background-color: rgba(12, 51, 160, 0.267);
    font-size: 20px;
}
</style>
