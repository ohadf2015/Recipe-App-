<template>
 <div class="row fit justify q-col-gutter-md-start recipes-center q-gutter-md q-col-gutter-md no-wrap">
 <div v-for="recipe in recipesRow" :key="recipe.name">
   <q-btn class="recipes-center" :to="`main/${recipe.id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipe.img}`" style="max-width: 370px; height: 350px;">
          <q-btn flat round color="red-1" icon="favorite_border" size="sm" />         
          <div class="absolute-full text-subtitle1 text-center"> <br>{{ recipe.name }}</div>
          </q-img>
            </q-avatar>  
        </q-btn>
        <br>
        <br>
        </div>
        </div>
          </div>
</template>

<script>

export default {
  props:['recipesRow'],
  data () {
    return {
    // recipesRow:this.recipesRow
    }
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
