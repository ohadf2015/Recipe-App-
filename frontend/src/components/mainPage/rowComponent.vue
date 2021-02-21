<template>
<div>
<recipeComponent/>
</div>
<!-- <div v-for="item in recipe1" :key="item.name"> -->
    <!-- <p class="row">{{ item.name }}</p>
        <mainRecipes/>
        <div class="border-bottom">
      </div>
    </div>    -->
</template>

<script>
export default {
  inject: ["allRecipes"],
  data () {
    return {
        recipeComponent: 1
    }
   },
   components: {
         recipeComponent: require('components/mainPage/recipeComponent.vue').default
   }
//   created () {
//       this.recipe1==this.recipes;
//   }
}
</script>
