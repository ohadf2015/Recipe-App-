<template class ="auto-tabs">
<div class="fff">
  <div class="q-pa-md" v-for="row in recipesRows" :key="row.name">
    <div>
    <h4 class="row">{{row.name}}</h4>
      <mainRecipes v-bind:recipesRow="row.recipes"/>
      </div>
      <br>
    <div class="border-top">
      </div>
      </div>
      <!-- <search/> -->
      </div>
</template>

<script>
import mainRecipes from '../components/mainPage/mainRecipes'
// import Search from '../components/search.vue'

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
    // Search
  },
  computed:{
    
    getRecipes(){
      return this.$store.getters['getRecipes'].filter(item => {
      return item.name.toLowerCase().includes(this.textSearch.toLowerCase())
      })
     }
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
  },

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
  background-color: rgb(14, 13, 13) ;
}
.auto-tabs {
   max-width: 1500px;
   margin: 0 auto;
   min-width: 800px;
   background-color: black;
}

</style>
