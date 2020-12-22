<template>
  <form>
    <div class="flex flex-center">
      <img src="~/assets/logo.png" width="150px" height="150px"/>
    </div>
    <div class="flex flex-center">
      <h3 class="text-orange-8"><b>Forgot Your Password?</b></h3>
    </div>
  <form class="auto-tabs" @submit.prevent="submitFormLog">
    <div class="row q-mb-md">
      <q-banner class="bg-black text-white col">
        <template v-slot:avatar>
          <q-icon name="lock" color="white"/>
        </template>
        Enter your email and we'll send you a link to get back into your account.
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
                color="grey-3"
                class="bg-grey-1 col"
                label-color="orange"
                outlined v-model="resetForm.email"
                label="Email"
                ref="email"
                lazy-rules>
                <template v-slot:append>
                  <q-icon name="mail" color="orange" />
                </template>
      </q-input>
    </div>
    <div class="row">
    <q-space/>
      <q-btn
            class="flex flex-center col"
            color="yellow-10"
            label="Send"
            type="submit"/>
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
    </form>
      <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </form>
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
    submitFormLog () {
      this.$ref.email.validate()
      if (!this.$ref.email.hasError) {
        console.log('resetPassword')
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
</style>
