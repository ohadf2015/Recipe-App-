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

  <q-card
    class="col-12 my-card"
  >
    <q-chip v-if="liked" id="badge">
      <q-avatar icon="bookmark" color="warning" text-color="black" />
      favorite
    </q-chip>
    <q-img
      :src="`${recipeCard.img}`"
      :ratio="1"
      @click="routeToRecipe()"
      class="img-box"
    >
      <div class="absolute-bottom recipeName text-h6 text-center">
        {{ recipeCard.name }}
      </div>
    </q-img>

    <q-card-section class="card__overlay">
      <div class="text-weight-large nameRecipe flex justify-around">
        <div v-if="recipeCard.rating" class="rating ">
        {{ recipeCard.rating.toFixed(2) }}
        <q-icon name="star" color="black" />
        </div>
        <div class="time ">
            <span v-if="recipeCard.totalTimeVal"> min</span>

        {{ recipeCard.totalTimeVal?recipeCard.totalTimeVal:"Classified"}}
      
        <q-icon name="alarm" color="black" />
        </div>
      </div>

      <div class="buttons q-mt-lg absolute-center">
        <q-btn
          v-if="liked"
          @click="toggleLike()"
          flat
          round
          color="black"
          icon="bookmark"
          size="lg"
        />
        <q-btn
          v-if="!liked"
          @click="toggleLike()"
          flat
          round
          color="black"
          icon="bookmark_border"
          size="lg"
        />
      </div>
    </q-card-section>
  </q-card>

  <!-- <q-card class="my-card border center col-12" v-if="liked&&route=='favorites'|| route=='main'">
        <div class="color_overlay" @click="routeToRecipe()">      </div>
        <div class="top"></div>
    <q-chip v-if="liked" id="badge">
      <q-avatar icon="bookmark" color="warning" text-color="white" />
      favorite
    </q-chip>
    <q-img
      :src="`${recipeCard.img}`"
      :ratio="1"
      @click="routeToRecipe()"
      class="img-box"
    >
    </q-img>


  
    

   
    <div class="card__overlay col-12">
          <p  class="nameRecipe text-center">{{ recipeCard.name }}</p>
      <q-btn
        class="btn-pos "
        v-if="liked"
        @click="toggleLike()"
        flat
        round
        color="white"
        icon="bookmark"
        size="lg"
      />
      <q-btn
        class="btn-pos "
        v-if="!liked"
        @click="toggleLike()"
        flat
        round
        color="white"
        icon="bookmark_border"
        size="lg"
      />
       </div>
  </q-card> -->
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  props: ["recipeCard"],
  data() {
    return {
   
      showLess: true,
      overlay: true,
    };
  },

  computed: {
    ...mapGetters(["getUserId", "getUserData","favorites"]),
   

liked(){
const RecId = this.favorites.find((arr) => arr == this.recipeCard.RecId);
let liked = RecId ? true : false
return liked
}
  },


  methods: {
    ...mapMutations(["setUserFavorites"]),
    toggleLike() {
      let updatedFavorites = [];
      if (this.favorites.length > 0) {
        updatedFavorites.push(...this.favorites);
      }

      // this.liked = !this.liked;
      if (!this.liked) {
        updatedFavorites.push(this.recipeCard.RecId);
      } else {
        updatedFavorites = this.favorites.filter((arr) => {
          return arr != this.recipeCard.RecId;
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
  font-size: 1.2rem;
  position: absolute;
  left: 0.1rem;
}
.img-box {
  padding: 0;
}
.my-card {
  min-width: 10rem;
  min-height: 10.5rem;
  width: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
}

.top {
  height: 60%;
}
.recipeName {
  font-size: 0.9rem;
}

.nameRecipe {
  /* height: 2.2rem;
  line-height: 1.1rem; */

  width: 100%;
  font-size: 0.95rem;
  top: 0.5rem;
  color: rgb(0, 0, 0);
}

.btn-pos {
  bottom: 0;
  left: 4rem;
  position: absolute;
}

.card__overlay {
  padding: 1em;
  min-height: 7rem;
  width: 100%;
  opacity: 1;
  background: #ffde00;
  /* background-image: linear-gradient(120deg, #FFDE00 0%, rgb(253, 225, 68) 100%); */
  transition: 0.5s ease;
}

.my-card:hover .img-box {
  filter: brightness(100%);
  transition: all 0.5s ease-in;
}
.my-card:hover .color_overlay {
  opacity: 0;
}

.my-card:hover {
  box-shadow: 0 1px 15px 0 rgba(255, 251, 32, 0.692);
  background-color: #9454007a;

  color: white;
  cursor: pointer;
  transition: all 300ms;
  transform: scale(1.02, 1.02);
}

.color_overlay {
  position: absolute;

  top: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  opacity: 0.2;
  background-color: rgb(3, 3, 3);
  transition: 0.5s ease;
  mix-blend-mode: multiply;
}

.img-box {
  filter: brightness(80%);
  transition: all 0.5s ease-in;
}

.text-overflow-handle {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}



.q-img__content > div {
    height: 3.8rem;
    overflow: hidden;
    position: absolute;
    padding: 0.8rem;
    color: #fff;
        line-height: 1.6rem;
    background: rgba(0, 0, 0, 0.47);
}

.text-h6 {
    font-weight: 500;
    letter-spacing: 0.02em;
}
</style>
