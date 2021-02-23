<template>
 <div class="auto-tabs" v-if="!loading">
    <div class="flex flex-center">
      <img src="~/assets/logoSYR.png" width="250px" height="200px"/>
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

<div v-else>
  <lottie :options="defaultOptions" 
    :width="500" 
    :height="700" 
    @animCreated="handleAnimation"/>
  </div>
</template>

<script>

import Lottie from 'vue-lottie'
import  Anim from '../assets/animations/login.json'

export default {
    data(){
        return{
            email:'',
            pass:'',
            isValid:true,
            rm:false,
            isPwd:true,
            loading: true,
            defaultOptions:{
            animationData:Anim,//Json data to be used
            render:'svg',//The form to be rendered
            loop:true,//Is it redundant
            autoplay:true,// Whether to start automatically
        },
	       	defaultAnim :''
       }
    },
    components: {
      Lottie
    },
    created(){
      setTimeout(
      ()=> this.loading = false,// enable the input
        4000)
      },
      computed:{
        rec(){
        return this.$store.getters['getRecipeData']
        }
  },
  methods:{
    handleAnimation(){
	    	this.defaultAnim = Anim
	      },
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
    max-width: 400px;
    margin: 0 auto;
}
.q-input {
    padding: 5px 25px
}
button{
    margin:15px 25px;
}
</style>

