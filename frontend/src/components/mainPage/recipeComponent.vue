<template>
 <div class="row fit justify q-col-gutter-md-start recipes-center q-pa-md q-gutter-md">
   <q-btn class="recipes-center" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle1 flex flex-center">
          <div class="absolute-top flex flex-center">
               <div class="absolute-top flex flex-center">
               <q-btn v-model="user_like" :value="recipeCard.name" flat round color="red" icon="favorite_border" size="sm" />
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

<style>

</style>
