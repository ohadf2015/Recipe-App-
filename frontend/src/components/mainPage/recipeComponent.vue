<template>
<div>
     <q-btn v-for="item in allRecipes" :key="item.name" class="items-center" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img src="" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle2 flex flex-center">
          </div>
            <q-btn flat round color="red" icon="favorite_border" size="sm" />
          <p>{{item.name}}</p>
          </q-img>
            </q-avatar>
            &nbsp;  
            &nbsp;  
        </q-btn>
    </div>
</template>

<script>
export default {
    inject: ["allRecipes"],
    data () {
        return {
            nameRecipe: null,
            imgRecipe: null
        }
    },
    created () {
        this.nameRecipe=this.name;
        this.imgRecipe=this.img;
    }
}
</script>

<style scoped>
p {
    font-size: 15px;
}
</style>