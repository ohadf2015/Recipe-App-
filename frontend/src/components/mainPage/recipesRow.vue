<template>
<<<<<<< HEAD:frontend/src/components/mainPage/recipesRow.vue
<div>
 <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 " v-for="recipe in recipesRow" :key="recipe.name" >
  <recipeComponent  v-bind:recipeCard="recipe"/>
=======
 <div class="row fit justify q-col-gutter-xs-start recipes-center">
 <div v-for="recipe in recipesRow" :key="recipe.name">
  <recipeComponent v-bind:recipeCard="recipe"/>
        </div>
>>>>>>> c728326cc8f48aa8f92af6724ff297fa8d02fe92:frontend/src/components/mainPage/mainRecipes.vue
        </div>
    </div>  
         
</template>

<script>
import recipeComponent from './recipeComponent'

export default {
  
  props:['recipesRow'],
  data () {
    return {
      recipeCard:null,
    }
  },
   components: {
   recipeComponent
  },

    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

