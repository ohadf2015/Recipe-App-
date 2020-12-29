<template class ="auto-tabs">
  <div class="q-pa-md">
      <div>
    <p class="row">Top Recipes of this Week</p>
      <slideTopRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Based on your Taste</p>
        <basedOnYourTaste/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Trending</p>
        <trending/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">10 min' Recipes</p>
        <tenMinRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Holiday Recipes</p>
        <holidayRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Chicken Recipes</p>
        <chickenRecipes/>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      slideTopRecipes: 1,
      basedOnYourTaste: 1,
      trending: 1,
      tenMinRecipes: 1,
      chickenRecipes: 1,
      holidayRecipes: 1
    }
  },
  components: {
    slideTopRecipes: require('components/mainPage/topRecipesOfTheWeek.vue').default,
    basedOnYourTaste: require('components/mainPage/basedOnYourTaste.vue').default,
    trending: require('components/mainPage/trending.vue').default,
    tenMinRecipes: require('components/mainPage/tenMinRecipes.vue').default,
    holidayRecipes: require('components/mainPage/holidayRecipes.vue').default,
    ChickenRecipes: require('components/mainPage/chickenRecipes.vue').default
  }
}
</script>

<style scoped>
.recipe-cell {
    color: orange;
}
p {
    color: gainsboro;
    font-size: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.border-top {
  border-top: 3px solid orange;
}
.auto-tabs {
   max-width: 1500px;
   margin: 0 auto;
   min-width: 800px;
}

</style>
