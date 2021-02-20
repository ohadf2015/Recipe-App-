<template class ="auto-tabs">
<div class="fff">
  <div class="q-pa-md">
    <div>
    <p class="row">Top Recipes of this Week</p>
      <mainRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Based on your Taste</p>
        <mainRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Trending</p>
        <mainRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">10 min' Recipes</p>
        <mainRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Holiday Recipes</p>
        <mainRecipes/>
      </div>
    <div class="border-top">
        <br>
    <p class="row">Chicken Recipes</p>
        <mainRecipes/>
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
      recipe: 1
    }
  },
  
    created(){      
       this.fetchRecipes()

    },
  components: {
    // mainRecipes: require('components/mainPage/mainRecipes.vue').default,
    // checkOut: require('components/mainPage /checkOut.vue').default,
  },
  methods: {
        async fetchRecipes(){
            try{
              console.log('hello')
              await this.$store.dispatch('recipes/getRec');
                // this.hascatego = true;
            }catch (err){
              console.log(err)
                throw err.message;
            }
        },
          
    // mainRecipes: require('components/mainPage/mainRecipes.vue').default
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
