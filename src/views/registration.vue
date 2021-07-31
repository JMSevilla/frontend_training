<script>
import navigation from "@/components/nav"
import Registration from "@/components/Registration/register"
import {mapGetters} from "vuex"
export default {
    components: {
        navigation, Registration
    },
    data(){
        return {
             ObjRegister : {
                firstname : '',
                lastname : '',
                email : '',
                password: '',
                confirmpassword : ''
            }
        }
    },
    computed: {
        ...mapGetters({
            myresponse : 'getresponseregister'
        })
    },
    methods: {
        onregister(){
            this.$store.dispatch(`actions_register`, {
                object: this.ObjRegister
            }).then(() => {
                if(this.myresponse === "success"){
                    alert("Register successfully")

                }
            })
        }
    }
}
</script>

<template>
    <div>
        <navigation />
        <Registration :onregister="onregister" :ObjRegister="ObjRegister" />
    </div>
</template>