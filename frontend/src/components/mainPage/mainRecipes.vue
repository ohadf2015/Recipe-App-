<template>
 <div class="row fit justify q-col-gutter-md-start recipes-center">
 <div v-for="recipe in recipesRow" :key="recipe.name">
  <recipeComponent v-bind:recipeCard="recipe"/>
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
  computed:{
 
     },
    created () {
      console.log(this.recipesRow)
    }
    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

