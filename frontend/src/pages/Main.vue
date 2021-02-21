<template class ="auto-tabs">
<div class="bg">
  <div class="q-pa-md">
     <mainRecipes/>
    </div>
  </div>
<!-- <div class="fff">
  <div class="q-pa-md" v-for="row in recipesRows" :key="row.name">
    <div>
    <p class="row">{{row.name}}</p>
      <mainRecipes v-bind:recipesRow="row.recipes"/>
      </div>
    <div class="border-top">
        <br>

      </div>
      </div>
      </div> -->

</template>

<script>
import mainRecipes from '../components/mainPage/mainRecipes'
export default {
  data () {
    return {
      recipesRows:null,
    
    }
  },
  
    created(){      
       this.fetchRecipes()

    },
  components: {
   mainRecipes
    // checkOut: require('components/mainPage /checkOut.vue').default,
  },

 
  methods: {
        async fetchRecipes(){
            try{
             const userData=await this.$store.getters['getUserData']
            await this.$store.dispatch('getUserRecipes',{userData});
               this.recipesRows= this.$store.getters['getRecipes'] // this.hascatego = true;
            }catch (err){
              console.log(err)
                throw err.message;
            }
          
        },
 
     provide() {
    return {
      allRecipes: this.allRecipes
    };
  },

          
  },

}
</script>

<style scoped>
.bg {
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

