<template>
<div class="wrapper">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12">
                <form class="form was-validated">
                    <div class="form-group">
                        <label for="uname">First Name:</label>
                        <input type="text" v-model.lazy="formData.fname" class="form-control" id="uname" placeholder="Enter first name" required>
                    </div>
                    <div class="form-group">
                        <label for="uname">Last Name:</label>
                        <input type="text" v-model.lazy="formData.lname" class="form-control" id="uname" placeholder="Enter last name" required>
                    </div>
                    <div class="form-group">
                        <label for="uname">Email:</label>
                        <input type="email" v-model.lazy="formData.email" class="form-control" id="uname" placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model.lazy="formData.password" required>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Confirm password" v-model.lazy="formData.confirmPassword" required>
                        <label class="custom-control-label text-danger" for="customCheck">{{ validMsg }}</label>
                    </div>
                    <hr>
                    <!-- radio button (Gender section) -->
                    <label for="pwd">Gender:</label>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" v-model="formData.gender" value="female">Female
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" v-model="formData.gender" value="male">Male
                        </label>
                    </div>
                    <div class="form-check disabled">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" v-model="formData.gender" value="other">Other's
                        </label>
                    </div>
                    <hr>
                    {{ formData.gender }}
                    <hr>
                    <!-- checkbox (Education section) -->
                    <label for="pwd">Education:</label>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="primary" v-model="formData.edu">Primary
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="middle" v-model="formData.edu">Middle
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="matric" v-model="formData.edu">Matric
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="Inter" v-model="formData.edu">Intermediate
                        </label>
                    </div>
                    <hr>
                    {{ formData.edu }}
                    <hr>
                    <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            formData: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: '',
                edu: [],
            },
            validMsg: '',

        }
    },
    methods: {
        submitForm(e) {

            this.validMsg = (this.formData.password != this.formData.confirmPassword) ? 'Please provide the same password' : '';
            e.preventDefault();
            console.log(this.formData);
            console.log(JSON.stringify(this.formData));
        }
    }

}
</script>

<style scoped>
.wrapper {
    font-family: "Helvetica Neue", Helvetica;
    font-synthesis: 20px;
    background: rgb(51, 221, 170);
    padding: 20px;
}
</style>
