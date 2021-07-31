<template>
    <div>
        <navigation />
        <Login :onlogin="onlogin" :Obj="Obj" :navigateRegistration="navigateRegistration" />
    </div>
</template>

<script>
import Login from "@/components/Login/login"
import navigation from "@/components/nav"
import {mapGetters} from "vuex"
export default {
    components: { //registration components
        navigation, Login
    },
    data(){ 
        return {
            Obj : {
                email : '',
                password : ''
            },
           
        }
    },
    computed: {
        ...mapGetters({
            getresponselogin : 'getresponselogin',
            getdetails: 'getdetails'
        })
    },
    methods : {
        navigateRegistration(){
            this.$router.push({name : 'Register'})
        },
        onlogin(){
            this.$store.dispatch(`actions_login`, {
                object : this.Obj
            }).then(() => {
                if(this.getresponselogin.status === "SUCCESS NO ADMIN"){
                    alert("successfully login as user")
                    this.$store.state.usersfirstname = this.getresponselogin.getbundle[0].firstname
                    this.$store.state.userslastname = this.getresponselogin.getbundle[0].lastname
                }
            })
        }
    }
}
</script>

