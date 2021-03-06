<template class ="auto-tabs">


  <div class="main-recipes">
    <div class="text-h4 q-mt-md q-pa-lg" v-if="err">
  Hmm..something went wrong 😪
  <br><div class="text-red">
  {{err}}
  </div>
  <br><br>
  <div class="text-warning">
 try to <router-link to="/" >Login again</router-link>
  </div>
 
</div>
    <div v-else class="container">
<div v-if="search.trim()!==''&&search">
<div class="row q-gutter-x-xl q-gutter-y-lg justify-start q-mb-md q-mt-lg" v-if="recipesForSearch.length>0">
  <q-intersection class="q-m-auto col-xs-8 col-sm-3 col-md-2 col-lg-2 col-xl-1" v-for="recipe in recipesForSearch" :key="recipe.RecId" once transition="scale">
  <recipeComponent  v-bind:recipeCard="recipe" />
       
 </q-intersection >
       </div>  
<div v-else class="q-mt-lg q-pa-lg text-h5 " >
  mmm..try to search for something else
</div>
</div>
<div v-else>
      <div  class="col-12" v-for="row in recipesRows" :key="row.name" >
        <p class="RecHeader">
          {{ row.name }}
          <q-icon :name="row.icon" color="warning" />
        </p>
        <recipesRow
          class="row q-gutter-x-xl q-gutter-y-lg justify-start q-mb-lg"
          v-bind:recipesRow="row.recipes"
        />
        <div class="col-12 q-mb-md q-mt-md q-mb-lg">
          <hr />
        </div>
      </div>
      <q-infinite-scroll
        @load="onLoad"
        :offset="250"
        v-if="$route.path == '/main'"
      >
        <div
          class="row q-pb-lg q-ml-md q-mt-sm"
          v-if="moreRecipesRow.length > 0"
        >
          <p class="RecHeader">
            More recipes
            <q-icon
              name="o_restaurant"
              color="warning"
              style="font-size: 3rem"
            />
          </p>
        </div>
        <div v-for="row in moreRecipesRow" :key="row.index" class="col-12">
          <recipesRow
            class="row q-gutter-x-xl q-gutter-y-lg justify-start q-mb-md"
            v-bind:recipesRow="row"
          />
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="4rem" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
    </div>
  </div>
  
</template>

<script>
import _ from 'lodash'
import { mapGetters } from "vuex";
import { mapMutation } from "vuex";
import recipesRow from "../components/mainPage/recipesRow";
import recipeComponent from '../components/mainPage/recipeComponent'
export default {
  data() {
    return {
      allRecipes:[],
      recipesRows: null,
      moreRecipesRow: [],
      err:null
    };
  },
  computed: {
    ...mapGetters(["favorites", "getNewRow", "hasNewRecommandations",'search']),
    recipesForSearch(){
      let filteredRecipes=this.allRecipes.filter((recipe)=>recipe.name.trim().toLowerCase().includes(this.search))
      return filteredRecipes
    }
  },

  created() {
    this.fetchRecipes();
     this.checkNewRecs();
     this.notifyRecs();
    //  this.setSearch('');

  },

  components: {
    recipesRow,
    recipeComponent
  },
  watch: {
    $route(to, from) {
      this.fetchRecipes();
    this.allRecipes=[]
    },
  },

  methods: {
    notifyRecs() {
      if (this.hasNewRecommandations) {
        this.$q.notify({
          color: "warning",
          textColor: "black",
          icon: "auto_awesome",
          message: "We made NEW recommandations just for you!",
        });
      }
    },

    async fetchRecipes() {
      try {
        const userData = this.$store.getters["getUserData"];
        if (this.$route.path == "/main") {
          await this.$store.dispatch("getUserRecipes", { userData });
        } else if (this.$route.path == "/myRecipes") {
          await this.$store.dispatch("getUserFavorites", {
            favorites: this.favorites,
          });
        }
        this.recipesRows = this.$store.getters["getRecipes"];
        this.recipesRows.forEach(row=>{
        this.allRecipes.push(...row.recipes)
        this.allRecipes=_.uniqBy(this.allRecipes,'RecId')
        })
        

        // this.hascatego = true;
      } catch (err) {
        this.err=err
        console.log(err);
        throw err.message;
      }
    },
    async checkNewRecs(){
      const userData= this.$store.getters["getUserData"]
      await this.$store.dispatch("checkNewRecs", { userId:userData._id });
    },
    async fetchMoreRecipes() {
      try {
        const userData = this.$store.getters["getUserData"];
        await this.$store.dispatch("getMoreRecipes", { userData });
      } catch (err) {
        throw err.message;
      }
    },

    onLoad(index, done) {
      setTimeout(() => {
        this.fetchMoreRecipes();
        if (this.getNewRow && this.getNewRow.length > 0) {
          this.moreRecipesRow.push(this.getNewRow);
            this.allRecipes.push(...this.getNewRow)
            
            this.allRecipes=_.uniqBy(this.allRecipes,'RecId')
          done();
        }
      }, 2000);
    },
    // ...mapMutation(['setSearch'])
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    margin: auto;
    max-width: 95% !important;
    text-align: center;
  }
  .RecHeader {
    text-align: center;
    font-size: 2rem !important;
  }
  .RecHeader.q-icon {
    font-size: 4rem !important;
  }
  .row {
    margin-left: 0.4rem;
  }
}
.text-h5{
  color:  rgb(255, 218, 7);
    background: #050503 ;
    width: 100%;
}
.container {
  margin: auto;
  max-width: 90%;
}
.recipe-cell {
  color: warning;
}

.RecHeader {
  color: rgb(255, 255, 255);
  font-size: 3rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
hr {
  border: 0;
  height: 2px;
  background: #333;
  /* background-image: linear-gradient(to right, #ccc, #333, #ccc); */
  background-image: linear-gradient(120deg, #fdeb43 0%, #ffecae 100%);
}

.auto-tabs {
  max-width: 100vh;
  margin: 0 auto;
  padding: 0;
  min-width: 90vh;
}
.main-recipes {
  background:050503


  /* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
}
</style>
