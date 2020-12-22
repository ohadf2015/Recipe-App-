<template>
 <form>
    <div class="flex flex-center">
      <img src="~/assets/logo.png" width="150px" height="150px"/>
    </div>
    <div class="flex flex-center">
      <h2 class="text-orange-8"><b>Log in</b></h2>
    </div>
  <form class="auto-tabs" @submit.prevent="submitFormLog">
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
        class="bg-grey-1 col"
        label-color="orange"
        outlined v-model="loginForm.email"
        label="Email"
        ref="email"
        lazy-rules>
      <template v-slot:append>
        <q-icon name="mail" color="orange" />
      </template>
    </q-input>
  </div>
  <div class="row q-mb-md">
    <q-input
      class="bg-grey-1 col"
      color="grey-3"
      label-color="orange"
      text-color="orange"
      outlined v-model="loginForm.password"
      label="Password"
      type="password"
      ref="password"
      lazy-rules>
      <template v-slot:append>
        <q-icon name="lock" color="orange"/>
      </template>
    </q-input>
  </div>
  <div class="flex flex-center">
            <q-checkbox
              dense
              class="flex flex-center text-orange-6 col"
              v-model="orange"
              label="Remember Me?"
              color="orange"
              text-color="orange" />
  </div>
  <br>
  <div class="flex flex-center">
    <q-space/>
    <q-btn class="flex flex-center col" color="yellow-10" label="Login" type="submit"/>
  </div>
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
    </form>
    <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </form>
</template>

<script>
export default {
  props: ['login'],
  data () {
    return {
      loginForm: {
        email: '',
        password: '',
        orange: false
      }
    }
  },
  // compu
  //   Registerted: {
  //   comparePassword () {
  //     return this.userPassword !== this.userPasswordAgain ? 'Password do not match' : ''
  //   }
  // },
  methods: {
    submitFormLog () {
      this.$ref.email.validate()
      this.$ref.password.validate()
      if (!this.$ref.email.hasError && !this.$ref.password.hasError) {
        console.log('user login')
      }
    },
    submitFormReg () {
      this.$ref.fullName.validate()
      this.$ref.email.validate()
      this.$ref.password.validate()
      this.$ref.repPassword.validate()
      if (!this.$ref.fullName.hasError && !this.$ref.email.hasError && !this.$ref.password.hasError && !this.$ref.repPassword.hasError) {
        console.log('user signup')
      }
      if (this.$ref.accept.validate() !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
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
    isValidEmailAddress (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    // onSubmit () {
    //   if (this.accept !== true) {
    //     this.$q.notify({
    //       color: 'red-5',
    //       textColor: 'white',
    //       icon: 'warning',
    //       message: 'You need to accept the license and terms first'
    //     })
    //   } else {
    //     this.$q.notify({
    //       color: 'green-4',
    //       textColor: 'white',
    //       icon: 'cloud_done',
    //       message: 'Submitted'
    //     })
    //   }
    // },

    onReset () {
      this.userFullname = ''
      this.userEmail = ''
      this.userPassword = ''
      this.userPasswordAgain = ''
      this.accept = false
    }
  }
}
</script>
<style scoped>
.auto-tabs {
    max-width: 500px;
    margin: 0 auto;
}
.bg {
    background-color: black;
}

/* input {
  background-color: blanchedalmond;
} */
</style>
