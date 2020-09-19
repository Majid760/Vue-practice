<template>
<div>
    <div class="wrapper">
        <div class="container">
            <form>
                <div class="row">
                    <div class="col-xs-12">
                        <h1>Contact Us</h1>
                        <hr>
                        <div class="form-group">
                            <label for="name">First Name:</label>
                            <input type="text" v-model.lazy="formData.firstName" name="fname" id="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="name">Last Name:</label>
                            <input type="text" v-model.lazy="formData.lastName" name="lname" id="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="name">Subject:</label>
                            <input type="text" v-model.lazy="formData.subject" name="subject" id="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="name">Message:</label>
                            <textarea class="form-control" v-model.lazy="formData.message" name="message" rows="4">
                            </textarea>
                        </div>

                        <div class="form-group">
                            <label for="newsletter">Newsletter:</label>
                            <input type="checkbox" v-model="formData.extras" id="newsletter" value="Newsletter">
                            <label for="promotion">Promotion:</label>
                            <input type="checkbox" v-model="formData.extras" id="promotion" value="Promotion">
                            {{ formData.extras }}
                        </div>
                        <hr>

                        <div class="form-group">
                            <label for="human">Human:</label>
                            <input type="radio" id="human" value="human" v-model="formData.gender">

                            <label for="human">Alien:</label>
                            <input type="radio" id="alien" value="alien" v-model="formData.gender">
                        </div>

                        <hr>
                        <div class="form-group">
                            <label for="country">Select Country:</label>
                            <select class="form-control" name="country" value="country" v-model="formData.country">
                                <option v-for="(value,key,index) in countries" :key="index">
                                    {{ value }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            countries: [
                'Afghanistan',
                'Austria',
                'Australia',
                'Argentina',
                'Brazil',
                'Canada',
                'Denmark',
                'Ethopia',
                'England',
                'France',
                'Finland',
                'Germany',
                'Hungry',
                'Iran',
                'Ireland',
                'Pakistan',
            ],

            formData: {
                firstName: '',
                lastName: '',
                subject: '',
                message: '',
                extras: [],
                gender: 'alien',
                country: 'Afghanistan',
            }
        }
    },
    methods: {
        submitForm() {

            console.log(this.formData);
            console.log(JSON.stringify(this.formData));

        }
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
