<template>
  <div class="auto-tabs">
    <div class="flex flex-center">
    <img class="q-mt-lg" src="~/assets/logoSyr.png" width="150px" height="150px" />
    </div>
    <div class="flex flex-center">
      <h4 class="warning">Register</h4>
    </div>
  <q-form @submit.prevent="onSubmit" @reset="onReset">
    <div class="row q-mb-md">
      <q-banner class="bg-black text-white col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="white"/>
        </template>
        Register to discover recipes from all around the world!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
              dark
              color="grey-3"
              class="col "
              label-color="warning"
              v-model.trim="registerForm.fullName"
              label="Full Name"
               ref="fullName"
               lazy-rules>
              <template v-slot:prepend>
              <q-icon name="face" color="warning" />
              </template>
      </q-input>
    </div>
    <br>
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="col"
                label-color="warning"
                v-model.trim="registerForm.email"
                label="Email"
                ref="email"
                lazy-rules>
                <template v-slot:prepend>
                <q-icon name="mail" color="warning" />
                </template>
      </q-input>
    </div>
    <br>
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="flex flex-center col"
                label-color="warning"
                v-model.trim="registerForm.password"
                label="Password"
                :type="registerForm.isPwd ? 'password' : 'text'"
                ref="password"
                lazy-rules>
                <template v-slot:prepend>
                <q-icon
                  name="lock" color="warning"/>
                </template>
                <template
                  v-slot:append>
                  <q-icon
                  :name="registerForm.isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="registerForm.isPwd = !registerForm.isPwd" />
                </template>
      </q-input>
    </div>
    <br>
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="bg-1 col"
                label-color="warning"
                v-model.trim="registerForm.repPassword"
                :type="registerForm.isPwd2 ? 'password' : 'text'"
                label="Repeat Password"
                ref="repPassword"
                lazy-rules>
                <template v-slot:prepend>
                    <q-icon name="lock" color="warning"/>
                    </template>
                    <template
                    v-slot:append>
                    <q-icon
                    :name="registerForm.isPwd2 ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="registerForm.isPwd2 = !registerForm.isPwd2" />
                </template>
      </q-input>
    </div>
     <!-- accept terms -->
    <!-- <q-toggle
              v-model="registerForm.accept"
              dark
              color="warning"
              class=""
              label-color="black"
              ref="accept"
             label="I accept the license and terms" /> -->
    <div class="row ">
       <q-btn
       id="submit"
       text-color="black"
                class="col"
                color="warning"
                label="Register"
                type="submit" />
        
    </div>
     <div class="row ">
    <q-btn
                label="Reset"
                type="reset"
                color="white"
                flat
                class="col shadow-up-6" />
     </div>
     
    </q-form>
    <div class="auto-tabs">
    <div class="row ">
     <q-btn
        class="col"
        color="black"
        text-color="warning"
        unelevated
        to="/"
        label="Back to Login Page"
        no-caps
      />
    </div>
    </div>
      <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      registerForm: {
        fullName: '',
        email: '',
        password: '',
        repPassword: '',
        isPwd: true,
        isPwd2: true,
        accept: true
      }
    }
  },
  methods: {
    async onSubmit () {
      if (!this.registerForm.fullName) {
        this.$refs.fullName.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to fill all the fields and accept the license and terms first'
        })
        return;
      } else if (!this.registerForm.email) {
        this.$refs.email.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to fill all the fields and accept the license and terms first'
        })
        return;
      } else if (!this.registerForm.password) {
        this.$refs.password.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to fill all the fields and accept the license and terms first'
        })
        return;
      } else if (!this.registerForm.repPassword || (this.registerForm.password !== this.registerForm.repPassword)) {
        this.$refs.repPassword.focus();
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to fill all the fields and accept the license and terms first'
        })
        return;
      }else if (!this.registerForm.accept) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms'
        })
        return;
      }
        const f = await this.$store.dispatch('regUser',{
               fullname:this.registerForm.fullName,
                email:this.registerForm.email,
                password:this.registerForm.password
            });
            if(!f.success){
          this.$refs.fullName.focus();
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
this.$router.replace('/');
               },3000);
    }
    },
    onReset () {
      this.registerForm.fullName = ''
      this.registerForm.email = ''
      this.registerForm.password = ''
      this.registerForm.repPassword = ''
      this.registerForm.accept = false
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


.q-btn {
  margin: auto;
  margin-bottom:1rem;
  margin-top:1.2rem;
font-size: 1rem;
 width: 90%;
 
  text-transform: lowercase !important;
}

#submit{
   font-size:1.2rem;
}
</style>