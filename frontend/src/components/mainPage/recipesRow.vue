<template>
<div>
 <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 " v-for="recipe in recipesRow" :key="recipe.name" >
  <recipeComponent  v-bind:recipeCard="recipe"/>
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

