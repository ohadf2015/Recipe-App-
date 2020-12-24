<template>
  <q-form>
    <div class="flex flex-center">
      <img src="~/assets/logo.png" width="150px" height="150px"/>
    </div>
    <div class="flex flex-center">
      <h4 class="text-orange-6"><b>Register</b></h4>
    </div>
  <q-form class="auto-tabs" @submit.prevent="onSubmit" @reset="onReset">
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
              label-color="orange"
              v-model="registerForm.fullName"
              label="Full Name"
               ref="fullName"
               lazy-rules>
              <template v-slot:prepend>
              <q-icon name="face" color="orange" />
              </template>
      </q-input>
    </div>
    <br>
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="col"
                label-color="orange"
                v-model="registerForm.email"
                label="Email"
                ref="email"
                lazy-rules>
                <template v-slot:prepend>
                <q-icon name="mail" color="orange" />
                </template>
      </q-input>
    </div>
    <br>
    <div class="row q-mb-md">
      <q-input
                dark
                color="grey-3"
                class="flex flex-center col"
                label-color="orange"
                v-model="registerForm.password"
                label="Password"
                :type="registerForm.isPwd ? 'password' : 'text'"
                ref="password"
                lazy-rules>
                <template v-slot:prepend>
                <q-icon
                  name="lock" color="orange"/>
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
                label-color="orange"
                v-model="registerForm.repPassword"
                :type="registerForm.isPwd2 ? 'password' : 'text'"
                label="Repeat Password"
                ref="repPassword"
                lazy-rules>
                <template v-slot:prepend>
                    <q-icon name="lock" color="orange"/>
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
    <q-toggle
              v-model="registerForm.accept"
              dark
              color="orange"
              class="text-orange col"
              label-color="orange"
             label="I accept the license and terms" />
    <div class="row">
    <q-space/>
       <q-btn
                class="flex flex-center"
                color="orange"
                label="Register"
                type="submit" />
        <q-btn
                label="Reset"
                type="reset"
                color="orange"
                flat
                class="q-ml-sm shadow-up-6" />
    </div>
      <q-btn
        class="flex flex-center q-mt-xl"
        color="black"
        text-color="orange"
        unelevated
        to="/"
        label="Back to Login Page"
        no-caps
      />
    </q-form>
      <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </q-form>
</template>

<script>

export default {
  props: ['register'],
  data () {
    return {
      registerForm: {
        fullName: '',
        email: '',
        password: '',
        repPassword: '',
        isPwd: true,
        isPwd2: true,
        accept: false
      }
    }
  },
  // computed: {
  //   comparePassword () {
  //     return this.registerForm.password !== this.registerForm.repPasswordAgain ? 'Password do not match' : ''
  //   }
  // },
  methods: {
    isValidEmailAddress (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    onSubmit () {
      if (this.registerForm.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to fill all the fields and accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
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
// submitFormReg () {
  //   this.$ref.registerForm.fullName.validate()
  //   this.$ref.registerForm.email.validate()
  //   this.$ref.registerForm.password.validate()
  //   this.$ref.registerForm.repPassword.validate()
  //   this.$ref.registerForm.accept.validate()
  //   if (!this.$ref.registerForm.accept.validate() && !this.$ref.registerForm.fullName.hasError && !this.$ref.registerForm.email.hasError && !this.$ref.registerForm.password.hasError && !this.$ref.registerForm.repPassword.hasError) {
  //     console.log('user signup')
  //     this.$q.notify({
  //       color: 'green-4',
  //       textColor: 'white',
  //       icon: 'cloud_done',
  //       message: 'Submitted'
  //     })
  //   } else {
  //     this.$q.notify({
  //       color: 'red-5',
  //       textColor: 'white',
  //       icon: 'warning',
  //       message: 'You need to accept the license and terms first '
  //     })
  //   }
  // },
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
.q-toggle{
  padding: 10px 15px ;
}
</style>
