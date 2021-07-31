<script>
export default {
    props: {
        ObjRegister: Object,
        onregister:Function
    },
    created(){
        console.log(this.$route.query.myquery)
    },
    methods : {
        onlogin(){
            this.$router.push({name : 'Home'})
        }
    }
}
</script>
<template>
    <div>
        <div style="margin-top: 50px" class="container">
            <div style="margin-top: 30px;" class="row">
                <div class="col-md-6">
                    <img src="https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png"
                    style="width: 100%; height: auto;" alt="">
                </div>
                <div class="col-md-6">
                    <el-card shadow="always">
                        <h3>User Registration</h3>
                            <div style="margin-top: 20px; margin-bottom: 20px" class="row">
                                <div class="col-md-6">
                                    <span>Enter firstname</span>
                                    <el-input
                                    style="margin-top: 10px; margin-bottom: 10px;"
                                    placeholder="Enter firstname"
                                    clearable
                                    v-model="ObjRegister.firstname"
                                    ></el-input>
                                </div>
                                <div class="col-md-6">
                                    <span>Enter lastname</span>
                                    <el-input
                                    style="margin-top: 10px; margin-bottom: 10px;"
                                    placeholder="Enter lastname"
                                    clearable
                                    v-model="ObjRegister.lastname"
                                    ></el-input>
                                </div>
                            </div>
                            <span>Enter email</span>
                                    <el-input
                                    style="margin-top: 10px; margin-bottom: 10px;"
                                    placeholder="Enter email"
                                    clearable
                                    v-model="ObjRegister.email"
                                    ></el-input>
                                    <span>Enter password</span>
                                    <el-input
                                    style="margin-top: 10px; margin-bottom: 10px;"
                                    placeholder="Enter password"
                                    clearable show-password
                                    type="password"
                                    v-model="ObjRegister.password"
                                    ></el-input>
                                     <span>Confirm password</span>
                                    <el-input
                                    style="margin-top: 10px; margin-bottom: 10px;"
                                    placeholder="Confirm password"
                                    clearable show-password
                                    type="password"
                                    v-model="ObjRegister.confirmpassword"
                                    ></el-input>
                        <el-link type="primary"
                        @click="onlogin()">Already have an account ?</el-link>
                        <center>
                            <el-button @click="onregister()" style="width: 50%; margin-top: 10px; margin-bottom: 10px"
                        type="primary" plain round ><i class="el-icon-s-custom
"></i> Register</el-button>
                        </center>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>