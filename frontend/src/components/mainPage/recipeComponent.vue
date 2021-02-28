<template >
  <!-- <div class="row fit justify q-pa-md q-gutter-md">
   <q-btn class="button" :to="`main/${recipeCard._id}`" flat>
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
        </div> -->

  <q-card class="my-card border center col-12">
    <q-chip v-if="liked" id="badge">
      <q-avatar icon="bookmark" color="orange" text-color="white" />
      Bookmark
    </q-chip>
    <q-img
      :src="`${recipeCard.img}`"
      :ratio="1"
      @click="routeToRecipe()"
      class="img-box"
    >
    </q-img>

    <div class="color_overlay" @click="routeToRecipe()"></div>
    <div class="card__overlay col-12">
      <p class="nameRecipe text-center">{{ recipeCard.name }}</p>
      <q-btn
        class="btn-pos col-12"
        v-if="liked"
        @click="toggleLike()"
        flat
        round
        color="white"
        icon="bookmark"
        size="lg"
      />
      <q-btn
        class="btn-pos col-12"
        v-if="!liked"
        @click="toggleLike()"
        flat
        round
        color="white"
        icon="bookmark_border"
        size="lg"
      />
  
    </div>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: ["recipeCard"],
  data() {
    return {
      liked: false,
    
    };
  },
  computed: {
    ...mapGetters(["favorites", "getUserId"]),
  },
  created() {
    const RecId = this.favorites.find((arr) => arr == this.recipeCard.RecId);
    this.liked = RecId ? true : false;
   
  },
  beforeUpdate() {},
  methods: {
    ...mapMutations(['setUserFavorites']),
    toggleLike() {
      if(this.$route.path == "/myRecipes"){
      this.$destroy();

      // remove the element from the DOM
      this.$el.parentNode.removeChild(this.$el);
      }
    let updatedFavorites=[]
    if(this.favorites.length>0){
      updatedFavorites.push(...this.favorites)
    }

    this.liked = !this.liked;
         if (this.liked) {
           updatedFavorites.push(this.recipeCard.RecId);
          } else {
            updatedFavorites= this.favorites.filter((arr) => {
              return arr != this.recipeCard.RecId
            });
        }
      
      this.$store.dispatch("updateFavorites", {
        userId: this.getUserId,
        favorites: updatedFavorites,
      });
    },
    routeToRecipe() {
      this.$router.push(`main/${this.recipeCard.RecId}`);
    },
  },
};
</script>

<style>
#badge {
  z-index: 100;
  top: 0;
  position: absolute;
  left: 0.1rem;
}
.img-box {
  padding: 0;
}
.my-card {
  min-width: 10rem;
  min-height: 10rem;
  width: 100%;
  transition: 1s;
  position: relative;
}

.nameRecipe {
  top: 0;
  height: 30%;
  margin: 0;
  width: 100%;
  font-size: 1.1rem;
  position: absolute;
  color: whitesmoke;
}

.btn-pos {
  bottom: 0;
  left: 4rem;
  position: absolute;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 42%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.5s ease;
  z-index: 99999;
}

.my-card:hover .card__overlay {
  /* background-color: #cc6008a8; */
  background-image: linear-gradient(120deg, #f6d465df 0%, #fd9f85e5 100%);
  opacity: 1;
}
.my-card:hover .color_overlay {
  opacity: 0.3;
}

.color_overlay:hover .card__overlay {
  opacity: 1;
}
.color_overlay:hover {
  opacity: 0;
}

.my-card:hover {
  box-shadow: 0 1px 20px 0 rgba(253, 171, 64, 0.24),
    0 10px 20px 0 rgba(255, 158, 47, 0.19);
  background-color: #9454007a; /* Green */
  color: white;
  cursor: pointer;
  transition: all 300ms;
  transform: scale(1.02, 1.02);
}

.color_overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 90000;
  opacity: 0;
}

.color_overlay {
  background-color: rgb(3, 3, 3);
  transition: 0.5s ease;
  mix-blend-mode: multiply;
}
</style>
