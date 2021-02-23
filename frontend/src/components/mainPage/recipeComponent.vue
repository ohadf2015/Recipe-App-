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
         <q-btn @click="toggleLike(recipeCard.name)" flat round color="red" icon="favorite_border" size="sm" />
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
        toggleLike(name) {
          console.log("recpie name "+ name);
            this.liked = ! this.liked;
            if(this.liked){
              this.user_likes.push(name);
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
  font-family:Comic Sans MS;
}
</style>
