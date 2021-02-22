<template>
<<<<<<< HEAD
 <div class="row fit justify q-col-gutter-md-start recipes-center q-pa-md q-gutter-md">
=======
 <div class="row fit justify q-col-gutter-md-start recipes-center q-pa-md q-gutter-sm">
 <!-- <div v-for="recipe in recipeCard" :key="recipe.name"> -->
>>>>>>> 56430b7596aaf3b5e49d2f47adfdba24ce0c1462
   <q-btn class="recipes-center" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle1 flex flex-center">
<<<<<<< HEAD
          <div class="absolute-top flex flex-center">
               <div class="absolute-top flex flex-center">
               <q-btn v-model="user_like" :value="recipeCard.name" flat round color="red" icon="favorite_border" size="sm" />
=======
             <div class="absolute-top flex flex-center">
               <div class="absolute-top flex flex-center">
               <q-btn flat round @click="userFavorite" color="red" icon="favorite_border" size="sm" />
>>>>>>> 56430b7596aaf3b5e49d2f47adfdba24ce0c1462
               </div>
               <br>
               {{ recipeCard.name }}
              </div>
<<<<<<< HEAD
          </div>
=======
            </div>
>>>>>>> 56430b7596aaf3b5e49d2f47adfdba24ce0c1462
          </q-img>
        </q-avatar>  
        </q-btn>
        <br>
        </div>
       
         
</template>

<script>

export default {
  
  props:['recipeCard'],
  data () {
    return {
      liked:false,
      likesCount:null,
      user_likes:[]
    }
  },
  computed:{
    // user_likes: function()
    // {
    //     if(this.liked) {
    //         this.liked = true;
    //         let userId=this.$route.params.id
    //         console.log(userId)
    //     } else {
    //         this.liked = false;
    //     }
    //     this.liked ? this.likesCount++ : this.likesCount--;
    // }
        },

    created () {
      console.log(this.recipeCard)
    },
    beforeUpdate() {
      console.log(this.user_likes)
    },
  methods: {
        // toggleLike: function() {
        //     this.liked = ! this.liked;

        //     this.liked ? this.likesCount++ : this.likesCount--;
        // }
    
  } 
}   
        
</script>

<<<<<<< HEAD
<style scoped>
.div{
  font-family:Comic Sans MS;
}
=======
<style>

>>>>>>> 56430b7596aaf3b5e49d2f47adfdba24ce0c1462
</style>
