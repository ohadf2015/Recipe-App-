<template>
 <div class="auto-tabs">
    <div class="flex flex-center">
      <img src="~/assets/logo.png" width="150px" height="150px"/>
    </div>
    <div class="flex flex-center">
      <h2 class="text-orange-8">LogIn</h2>
    </div>
  <q-form @submit.prevent="login">
  <div class="row q-mb-md">
    <q-banner class="bg-black text-white col">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="white"/>
      </template>
      Welcome back! to access please login
    </q-banner>
  </div>
  <div class="row q-mb-md">
    <q-input
        color="grey-3"
        class="col"
        label-color="orange"
        v-model="email"
        label="Email"
        ref="email"
        lazy-rules>
      <template v-slot:prepend>
        <q-icon name="mail" color="orange" />
      </template>
    </q-input>
  </div>
  <div class="row q-mb-md">
    <q-input
      class="col"
      color="grey-3"
      label-color="orange"
      text-color="orange"
      v-model="pass"
      label="Password"
      :type="isPwd ? 'password' : 'text'"
      ref="pass"
      lazy-rules>
      <template v-slot:prepend>
        <q-icon name="lock" color="orange"/>
      </template>
    </q-input>
  </div>
  <div class="flex flex-center">
            <q-checkbox
              dense
              class="flex flex-center text-orange-6 col"
              v-model="rm"
              label="Remember Me?"
              color="orange"
              text-color="orange" />
  </div>
  <div class="row q-mb-md">
    <q-btn class="col" color="yellow-10" label="Login" type="submit"/>
  </div>
    </q-form>
    <q-btn
        class="flex flex-center q-mt-xl"
        text-color="orange"
        unelevated
        to="/forgotPassword"
        label="Forgot Password?"
        icon-right="vpn_key"
        no-caps
      />
  <q-btn class="text-orange-6 flex flex-center"
            flat
            to="/signup"
            color="text-orange-8"
            icon-right="account_circle"
            label="Sign Up"
          />
    <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            pass:'',
            isValid:true,
            rm:false,
            isPwd:true
        }
    },
    methods:{
        async login(){
        if (!this.email || !this.email.includes('@')) {
        this.$refs.email.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Email is Required'
        });
        return;
      } else if (!this.pass) {
        this.$refs.pass.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Password is Required'
        });
        return;
      }
      
            const f = await this.$store.dispatch('loginUser',{
                email:this.email,
                password:this.pass
            });
            if(!f.success){
          this.$refs.email.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'One of fields Invalid'
        });
        return;
            }else{
              this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          spinner: true,
          message: 'In Process...',
          timeout:1000
        });
              setTimeout(()=>{
this.$router.replace('/categories');
               },3000);
                
            }
        }
    }
}
</script>
<style scoped>
.auto-tabs {
    max-width: 500px;
    margin: 0 auto;
}
.q-input {
    padding: 5px 25px
}
button{
    margin:15px 25px;
}
</style>

