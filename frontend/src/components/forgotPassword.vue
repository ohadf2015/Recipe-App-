<template>
  <div class="auto-tabs-one">
    <!-- Logo + title -->
    <div class="flex flex-center">
      <img src="~/assets/logo.png" width="150px" height="150px"/>
      <br>
      <h3 class="text-orange-8">Forgot Your Password?</h3>
    </div>
    <!-- Form -->
  <form class="auto-tabs" @submit.prevent="submitFormLog">
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="bg-1 col"
                label-color="orange"
                v-model.trim="resetForm.email"
                label="Email"
                ref="email"
                lazy-rules>
                <template v-slot:append>
                  <q-icon name="mail" color="orange" />
                </template>
      </q-input>
    </div>
    <div class="row q-mb-md">
    <q-space/>
      <q-btn
            class="flex flex-center col"
            color="yellow-10"
            label="Send"
            type="submit"/>
    </div>
    </form>
      <q-btn
        class="flex flex-center q-mt-xl"
        color="black"
        text-color="orange"
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
  props: ['forgotPassword'],
  data () {
    return {
      resetForm: {
        email: ''
      }
    }
  },
  methods: {
    async forotPassword(){
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
      if(!f.success){
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
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;  
}
</style>
