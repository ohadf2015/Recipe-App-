<template class ="auto-tabs">
  <div class="main-recipes">
    <div class="col-12" v-for="row in recipesRows" :key="row.name">
      <div class="row q-pb-lg q-ml-md q-mt-sm">
        <p class="sticky">
          {{ row.name }}
          <q-icon :name="row.icon" color="orange" style="font-size: 2.5rem" />
        </p>
      </div>
      <recipesRow
        class="row q-gutter-x-sm q-gutter-y-md justify-evenly q-mb-md"
        v-bind:recipesRow="row.recipes"
      />
      <div class="col-12 q-mb-md q-mt-md">
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import recipesRow from "../components/mainPage/recipesRow";
export default {
  data() {
    return {
      recipesRows: null,
    };
  },
  computed:{
...mapGetters(['favorites'])
  },
  created() {
    this.fetchRecipes();
  },

  components: {
    recipesRow,
  },
  watch:{
   $route (to, from){
       this.fetchRecipes()
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        const userData = this.$store.getters["getUserData"];
        if (this.$route.path == "/main") {
          await this.$store.dispatch("getUserRecipes", { userData });
        } else if (this.$route.path == "/myRecipes") {
           await this.$store.dispatch("getUserFavorites", { favorites:this.favorites});
        }
        this.recipesRows = this.$store.getters["getRecipes"];
        // this.hascatego = true;
      } catch (err) {
        console.log(err);
        throw err.message;
      }
    },
  },
};
</script>

<style scoped>
.recipe-cell {
  color: orange;
}

p {
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  max-width: 60vh;
}
hr {
  border: 0;
  height: 2px;
  background: #333;
  /* background-image: linear-gradient(to right, #ccc, #333, #ccc); */
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}

.auto-tabs {
  max-width: 100vh;
  margin: 0 auto;
  padding: 0;
  min-width: 90vh;
}
.main-recipes {
  background: rgb(24, 24, 24);
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(22, 22, 22) 32%,
    rgb(0, 0, 0) 86%
  );
  /* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
}
</style>
