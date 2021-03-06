<template>
<div>
 <q-intersection class="q-m-auto col-xs-8 col-sm-3 col-md-2 col-lg-2 col-xl-1" v-for="recipe in recipesRow" :key="recipe.RecId" once transition="scale">
  <recipeComponent  v-bind:recipeCard="recipe"  v-if="(isInFavorites(recipe.RecId) && route == 'favorites') || route == 'main'"/>
       
 </q-intersection >
       </div>   
</template>

<script>
import recipeComponent from './recipeComponent'
import { mapGetters } from "vuex";
export default {
  
  props:['recipesRow'],
  data () {
    return {
      recipeCard:null,
         route: "main",
    }
  },

  computed: {
    ...mapGetters(["favorites"]),

    },

   components: {
   recipeComponent
  },
created(){
    this.route = this.$route.path == "/myRecipes" ? "favorites" : "main";

},
methods:{
     isInFavorites(RecId){
let isIn=this.favorites.find((arr)=>arr==RecId)
return isIn
   }
}
    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

