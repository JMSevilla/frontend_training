<script>
export default {
    props : {
        Obj : Object,
        navigateRegistration: Function,
        onlogin: Function
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
                        <h3>Login</h3>
                        <span>Enter email</span>
                        <el-input
                        style="margin-top: 10px; margin-bottom: 10px;"
                        placeholder="Enter username or email"
                        clearable
                        v-model="Obj.email"
                        ></el-input>
                        <span>Enter password</span>
                        <el-input
                        style="margin-top: 10px; margin-bottom: 10px;"
                        placeholder="Enter password"
                        clearable show-password
                        type="password"
                        v-model="Obj.password"
                        ></el-input>
                        <el-link @click="navigateRegistration()" type="primary">Create an account</el-link>
                        <center>
                            <el-button @click="onlogin()" style="width: 50%; margin-top: 10px; margin-bottom: 10px"
                        type="primary" plain round ><i class="el-icon-s-custom
"></i> Login</el-button>
                        </center>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>