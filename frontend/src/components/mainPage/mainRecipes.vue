<template>
 <div class="row fit justify q-col-gutter-md-start items-center q-gutter-md q-col-gutter-md no-wrap">
 <div v-for="item in getRecipes" :key="item.name">
   <q-btn class="items-center" :to="item.to" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${item.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle2 flex flex-center">
           {{ item.name }}
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
            </q-avatar>  
        </q-btn>
        <br>
        <br>
        </div>
        </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed:{
    getRecipes(){
       return this.$store.getters.getRecipe;

      }
     }
    }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
