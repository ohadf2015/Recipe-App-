<template>
 <div class="row fit justify q-col-gutter-md-start recipes-center q-pa-md">
   <q-btn class="recipes-center" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle1 flex flex-center" style=" font-family:Verdana; max-width:300px; text-shadow: 2px 2px 5px yellow;">
          <div class="absolute-top flex flex-center">
               <div class="absolute-top flex flex-center">
               </div>
               <br>
               {{ recipeCard.name }}
              </div>
          </div>
          </q-img>
        </q-avatar>  
        </q-btn>
         <q-btn v-if="liked" @click="toggleLike(recipeCard._id)"  flat round color="red" 
         icon="favorite" size="sm" />
         <q-btn v-if="!liked" @click="toggleLike(recipeCard._id)"  flat round color="red" 
         icon="favorite_border" size="sm" />
        <br>
        </div>
       
         
</template>

<script>

export default {
  
  props:['recipeCard'],
  data () {
    return {
      liked:false,
      user_likes:[]
    }
  },
  computed:{

        },

    created () {
      console.log(this.recipeCard)
    },
    beforeUpdate() {
      console.log("user_like"+this.user_likes)
    },
  methods: {
        toggleLike(id) {
          console.log("recpie name "+ name);
            this.liked = ! this.liked;
            if(this.liked){
              this.user_likes.push(id);
            }
            else
            this.user_likes.splice(0,1)
          console.log(this.user_likes)
        }
    
  } 
}   
        
</script>

<style scoped>
.div{
 font-family: "Lucida Console"
}
</style>
