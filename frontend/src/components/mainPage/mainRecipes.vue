<template>
    <div>
      <div>
      <div v-for="item in allRecipes" :key="item.name">
          <h4>{{item.name}}</h4>
          <rowComponent/>


 <!-- <div class="row fit justify q-col-gutter-md-start recipes-center q-gutter-md q-col-gutter-md no-wrap">
 <div v-for="recipe in recipesRow" :key="recipe.name">
   <q-btn class="recipes-center" :to="recipe.to" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipe.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle2 flex flex-center">
           {{ recipe.name }}
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
            </q-avatar>  
        </q-btn>
        <br>
        <br>
        <div class="border-bottom"></div>
      </div> -->
        </div> 
        </div>
</template>

<script>

export default {
  inject: ["allRecipes"],
  data () {
    return {
    // recipesRow:this.recipesRow
    }
  },
  components: {
    rowComponent: require('components/mainPage/rowComponent.vue').default
  },
  computed:{
 
     },
    created () {
      console.log(this.recipesRow)
    }
    }
</script>

<style>
.row {
    color: gainsboro;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.border-bottom {
  border-top: 3px solid rgb(243, 137, 15);
}
</style>
