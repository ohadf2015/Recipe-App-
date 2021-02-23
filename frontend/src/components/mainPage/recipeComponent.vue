<template>
 <div class="row fit justify q-pa-md q-gutter-md">
   <q-btn class="button" :to="`main/${recipeCard._id}`" flat>
            <q-avatar rounded size="170px" font-size="40px">
         <q-img :src="`${recipeCard.img}`" class="button" style="max-width: 370px; height: 350px;">
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
