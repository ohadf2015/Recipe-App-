<template>
 <div class="row fit justify q-col-gutter-md-start recipes-center q-pa-md q-gutter-sm">
 <!-- <div v-for="recipe in recipeCard" :key="recipe.name"> -->
   <q-btn class="recipes-center" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle1 flex flex-center">
             <div class="absolute-top flex flex-center">
               <div class="absolute-top flex flex-center">
               <q-btn flat round @click="userFavorite" color="red" icon="favorite_border" size="sm" />
               </div>
               <br>
               {{ recipeCard.name }}
              </div>
            </div>
          </q-img>
        </q-avatar>  
        </q-btn>
        <br>
        </div>
        <!-- </div> -->
         
</template>

<script>

export default {
  
  props:['recipeCard'],
  data () {
    return {
    // recipesRow:this.recipesRow
    }
  },
  computed:{
 
     },
    created () {
      console.log(this.recipeCard)
    }
    }
</script>

<style>

</style>
