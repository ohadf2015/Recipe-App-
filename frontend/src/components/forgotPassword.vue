<template>
  <div class="auto-tabs-one">
    <!-- Logo + title -->
    <div class="flex flex-center">
      <img class="q-mt-lg" src="~/assets/logoSyr.png" width="150px" height="150px" />
      <br>
      <h4 class="text-warning-8">Forgot Your Password?</h4>
    </div>
    <!-- Form -->
  <form class="auto-tabs" @submit.prevent="forgotPassword">
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="bg-1 col"
                label-color="warning"
                v-model.trim="email"
                label="Email"
                ref="email"
                lazy-rules>
                <template v-slot:append>
                  <q-icon name="mail" color="warning" />
                </template>
      </q-input>
    </div>
    <div class="row q-mb-md">
    <q-space/>
      <q-btn
            class="flex flex-center col"
            color="warning"
            text-color=black
            label="Send"
            type="submit"/>
    </div>
    </form>
      <q-btn
        class="flex flex-center q-mt-xl"
        color="black"
        text-color="warning"
        unelevated
        to="/"
        label="Back to Login Page"
        no-caps
      />
    <!-- Copy Rights -->
    <br>
    <br>
    <br>
      <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      resetForm: {
        email: ''
      }
    }
  },
  methods: {
    async forgotPassword(){
      if (!this.email || !this.email.includes('@')) {
      this.$ref.email.focus();
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Email is Required to continue'
      });
      return;
      }
// the only thing is missing is to create the STORE forgotPassword
      const forPass = await this.$store.dispatch('forgotPassword',{
        email:this.email
      });
      if(!forPass.success){
        this.$refs.email.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Note Vaild'
        });
        return;
      }else{
        this.$q.notify({
          color: 'green',
          textColor: 'white',
          spinner: true,
          message: 'In Process - Please check ypur Email',
          timeout:1000
        });
        setTimeout(()=>{
this.$router.replace('/');
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
.auto-tabs-one {
  max-width: 350px;
  margin: 0 auto;
  text-align: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;  
}
</style>
