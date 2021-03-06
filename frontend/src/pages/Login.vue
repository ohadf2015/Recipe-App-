<template>
  <div class="auto-tabs">
    <div class="flex flex-center">
      <img class="q-mt-lg" src="~/assets/logoSyr.png" width="150px" height="150px" />
    </div>
    <div class="flex flex-center">
      <h2 class="text-warning-8">Login</h2>
    </div>
    <q-form @submit.prevent="login">
      <div class="row q-mb-md">
        <q-banner class="bg-black text-white col">
          <template v-slot:avatar>
            <q-icon name="account_circle" color="white" />
          </template>
          Welcome back! to access please login
        </q-banner>
      </div>
      <div class="row q-mb-md">
        <q-input
          color="warning"
          class="col"
          label-color="warning"
          v-model="email"
          label="Email"
          ref="email"
          lazy-rules
        >
          <template v-slot:prepend>
            <q-icon name="mail" color="warning" />
          </template>
        </q-input>
      </div>
      <div class="row q-mb-md">
        <q-input
          class="col"
          color="warning"
          label-color="warning"
          text-color="warning"
          v-model="pass"
          label="Password"
          :type="isPwd ? 'password' : 'text'"
          ref="pass"
          lazy-rules
        >   <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
          <template v-slot:prepend>
            <q-icon name="lock" color="warning" />
          </template>
        </q-input>
      </div>
      <!-- <div class="flex flex-center">
        <q-checkbox
          dense
          class="flex flex-center warning col"
          v-model="rm"
          label="Remember Me?"
          color="warning"
          text-color="warning"
        />
      </div> -->
      <div class="row q-mb-md">
        <q-btn id="submit" class=" q-mt-md" color="warning" label="Login" text-color="black" type="submit" />
      </div>
    </q-form>
    <q-btn
      class="flex flex-center q-mt-xl"
      text-color="warning"
      unelevated
      to="/forgotPassword"
      label="Forgot Password?"
      icon-right="vpn_key"
      no-caps
    />
    <q-btn
      class=" flex flex-center"
      flat
      to="/signup"
      color="warning"
      icon-right="account_circle"
      label="Sign Up"
    />
    <p class="text-white flex flex-center">&copy; Spot Your Recipes</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
      isValid: true,
      // rm: false,
      isPwd: true,
    };
  },
  components: {},
  created() {
    setTimeout(
      () => (this.loading = false), // enable the input
      4000
    );
  },
watch: {
    $route(to, from) {
      if(from=='logout')
      this.$store.dispatch('logout');
    },
},
  methods: {
    handleAnimation() {
      this.defaultAnim = Anim;
    },
    async login() {
      if (!this.email || !this.email.includes("@")) {
        this.$refs.email.focus();
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Email is Required",
        });
        return;
      } else if (!this.pass) {
        this.$refs.pass.focus();
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Password is Required",
        });
        return;
      }

      const f = await this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.pass,
      });

      if (!f.success) {
        this.$refs.email.focus();
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "One of fields Invalid",
        });
        return;
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          spinner: true,
          message: "In Process...",
          timeout: 1000,
        });

        setTimeout(() => {
          
          
          if (f.user.categories.length > 2) {
            this.$router.replace("/main");
          } else {
            this.$router.replace("/categories");
          }
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
.auto-tabs {
  max-width: 400px;
  margin: 0 auto;
}
.q-input {
  padding: 5px 25px;
}
.q-btn {
  margin: auto;
  margin-bottom:1rem;
  margin-top:1.2rem;

 width: 90%;
 
  text-transform: lowercase !important;
}



#submit{
   font-size:1.2rem;
}
</style>

