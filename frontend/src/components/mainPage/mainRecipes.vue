<template>
    <div>
      <div>
      <div v-for="item in allRecipes" :key="item.name">
          <h4>{{item.name}}</h4>
          <rowComponent/>
        <br>
        <div class="border-bottom"></div>
        </div>
        </div>
        </div>
</template>

<script>
export default {
  inject: ["allRecipes"],
  data () {
    return {

    }
  },
  components: {
    rowComponent: require('components/mainPage/rowComponent.vue').default
  },
  computed:{
    getRecipes(){
       return this.$store.getters.getRecipe;

      }
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
