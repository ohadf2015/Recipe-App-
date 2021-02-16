<template class ="auto-tabs">
<div class="fff">
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
       <div class="border-top">
        <br>
    <p class="row">Debbug</p>
        <checkOut/>
      </div>
      </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      mainRecipes: 1,
      checkOut: 1,
      recipe: 1,
      recipes: [
        {
          id: 1,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 2,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        },
                {
          id: 3,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 4,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        },
                {
          id: 5,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 6,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        }
      ]
    }
  },
  components: {
    mainRecipes: require('components/mainPage/mainRecipes.vue').default,
    checkOut: require('components/mainPage/checkOut.vue').default,
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
  border-top: 3px solid rgb(243, 137, 15);
}
.fff {
  /* background-color: radial-gradient(farthest-corner at 95% 30%,black,grey); */
  background-color: black ;
}
.auto-tabs {
   max-width: 1500px;
   margin: 0 auto;
   min-width: 800px;
   background-color: black;
}

</style>
