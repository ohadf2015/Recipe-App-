<template>
 <div class="row fit justify q-pa-md q-gutter-md">
   <q-btn class="button" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" class="button" style="max-width: 370px; height: 350px;">
           <div class="absolute-full text-subtitle1 flex flex-center">
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
         <q-btn v-if="liked" @click="toggleLike(recipeCard.name)"  flat round color="red" 
         icon="favorite" size="sm" />
         <q-btn v-if="!liked" @click="toggleLike(recipeCard.name)"  flat round color="red" 
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
  font-size: 16px;
}
.q-btn{
        background-color: none;
        border-radius: 12px;
        
}
.button {
  /* transition-duration: 0.4s; */
  border-radius: 12px;
  text-align: center;
}

.button:hover {
 box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: #0c0a0a7a; /* Green */
  color: white;
}
</style>
