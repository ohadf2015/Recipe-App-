 <template> 
  <div class=" full-container" v-if="rec&&!loading">

    <q-parallax :height="600" :width="1000"  :speed="0.5">
      <div class="overlay"></div>
      <template v-slot:media>
        <img 
         :src="`${rec.img}`">
      </template>
      <h3 class="q-px-lg parallax-header text-white">{{rec.name}}</h3>
    </q-parallax>


  <div class="general-container q-pa-lg ">

    <div class="row q-mb-lg justify-center">
      <div class="col-2 col-xs-1"></div>
      <div class="description col-10">
{{rec.description}}
</div>
</div>
<div class="details row q-gutter-md-lg  justify-center">
  <div v-if="rec.rating" class="rating col-sm-4 col-xs-12">
    <span class="text-grey" style="font-size:0.9rem">({{rec.ratingCount}} votes)</span>
        {{ rec.rating.toFixed(2) }}
        <q-icon name="star" color="warning" />
        </div>
        <div class="time col-sm-4 col-xs-12">
      <span style="font-size:0.9rem" class="text-grey">(Total)</span>
        {{ rec.totalTimeVal?rec.totalTimeVal:"Classified"}}
            <span v-if="rec.totalTimeVal"> min </span>

        <q-icon name="alarm" color="warning" />
        </div>
        <div class="time col-sm-4 col-xs-12">
            <!-- <span v-if="rec.totalTimeVal"> min</span> -->

        {{rec.nutrition.calories}}
      
        <q-icon name="local_fire_department" color="warning" />
        </div>
        <div class="col-4"></div>
         <q-btn outlined rounded @click="toggleLike()" class="col-4 q-mt-md text-yellow" :icon="favoriteIcon" :label="favoriteCaption"   color="black" /> 
        <div class="col-4"></div>

           <!-- <q-icon name="star" color="warning" />
           <span class="text-caption text-grey q-ml-sm">{{rec.rating.toFixed(2)}} ({{rec.ratingCount}})</span>
               
                <q-btn flat round color="teal" icon="comment" /> -->
             
        </div>
      
            <q-separator class="q-mt-md" color="warning" inset />
          <div class="q-my-lg text-warning text-h4 text-center"> INGREDIENTS </div>
          <div class="ingredients">
          <q-list v-for="ingrid in rec.recipeIngredient" :key="ingrid.id">
                  <q-item class="row q-gutter-sm justify-center">
                <q-icon class=" col-lg-1 col-xs-1 col-md-1" name="panorama_wide_angle_select" color="warning"/>
                <q-item-section class="col-8 col-xs-8 col-lg-10 col-md-8"> {{ingrid}} </q-item-section>
              </q-item>
            </q-list>
            </div>
            <q-separator class="q-mt-md q-mb-md" color="warning" inset />
            <div class="text-warning text-h4 text-center q-mb-sm"> INSTRUCTIONS </div>

    <div class="ingredients">
          <q-list v-for="(instruction,index) in rec.recipeInstructions" :key="instruction.id">
                  <q-item class="row q-gutter-sm justify-center">
                <div class=" col-lg-1 col-xs-1 col-md-1 instruction-index q-mr-xs text-warning text-h5" >
                  {{index+1}}
                </div>
                <q-item-section class="col-8 col-xs-12 col-lg-10 col-md-8"> {{instruction.text}} </q-item-section>
              </q-item>
            </q-list>
            </div>



            <!-- <ul v-for="(instruction,index) in rec.recipeInstructions" :key="instruction.id">
                         
            <div class="flex flex-center">
            <q-list dark  class="flex flex-center" style="min-width: 440px; width: 440px;">
                  <q-item >
                   {{index+1}}
                <q-item-section>  {{instruction.text}} </q-item-section>
              </q-item>
            </q-list>
            </div>
            </ul> -->
             <div>
        <!-- <router-view></router-view> -->
        <!-- <router-link  class="flex flex-center" to="c1/review"><q-btn color="warning" icon="mail" label="Add a Review" /></router-link> -->
  
       </div>
      </div>
 </div>


<div v-else>
  <transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <lottie :options="defaultOptions" 
  :width="width"
  :height="height"
 @animCreated="handleAnimation"/>
 </transition>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import Lottie from 'vue-lottie'
import  Anim from '../assets/animations/loading.json'
export default {
  data(){
    return{
      loading: true,
      defaultOptions:{
			animationData:Anim,//Json data to be used
			render:'svg',//The form to be rendered
			loop:true,//Is it redundant
			autoplay:true,
      // Whether to start automatically
		},
		defaultAnim :'',
      height:window.innerHeight/1.5,
      width:window.innerWidth/1.5
    }
  },
  components: {
  Lottie
  },
  created(){
 this.fetchRecipe()
  setTimeout(
   ()=> this.loading = false,// enable the input
    2500)
  },
  computed:{
    favoriteCaption(){
      return this.liked?"Remove from favorites":"Add to favorites"
    },
    favoriteIcon(){
      return this.liked?"bookmarks":"o_bookmarks"
    },
    rec(){
    return this.$store.getters['getRecipeData']
    }
  ,...mapGetters(["favorites","getUserId"]),

liked(){
const RecId = this.favorites.find((arr) => arr == this.rec.RecId);
let liked = RecId ? true : false
return liked
}

  },
  methods:{ 
    fetchRecipe(){
     this.$store.dispatch('getRecipe',this.$route.params.id)
    },
    handleAnimation(){
		this.defaultAnim = Anim
	},

   toggleLike() {
      let updatedFavorites = [];
      if (this.favorites.length > 0) {
        updatedFavorites.push(...this.favorites);
      }

      // this.liked = !this.liked;
      if (!this.liked) {
        updatedFavorites.push(this.rec.RecId);
      } else {
        updatedFavorites = this.favorites.filter((arr) => {
          return arr != this.rec.RecId;
        });
      }

      this.$store.dispatch("updateFavorites", {
        userId: this.getUserId,
        favorites: updatedFavorites,
      });
    },
 
  }



 
}
</script>
<style>
.q-img{
  border-radius:15%;
}
.lottie {
   position: static;
   top: 10px;
}
.q-btn{
  text-transform:none !important;
}
.ingredients{
  font-size: 1rem;
  width: 80%;
  margin: auto;
}
.description{
  font-size: 1.4rem;
}
.general-container{
  width: 66%;
  margin: auto;
}
.no-wrap{
  flex-wrap: wrap;
}

.details{
  width:100%;
  margin: auto;
  font-size: 1.2rem;
}

.full-container{
  width: 100vw;
}
.rating{
  text-align: center;
}
.time{
  text-align: center;
}
.parallax-header{
  z-index: 21;
}


.overlay {
      background-image:linear-gradient(to bottom, rgba(15, 15, 14, 0), rgb(0, 0, 0)) !important;
    z-index: 20;
    position: absolute;
top: 4rem;
right: 0;
bottom: 0;
left: 0;
}
.instruction-index{
    font-size: 2rem;
    font-weight: 500;
  }

/* Place text in the middle of the image */

@media (max-width: 768px) {
  .general-container {
    margin: auto;
    max-width: 90% ;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
  }

  .instruction-index{
    font-size: 1.9rem;
  }
  .ingredients{
  font-size: 1rem;
  width: 95%;
}
.text-h4{
  font-size: 2rem;
}

}
/* #show_bg_2 {
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('images/background.jpg');
    width: 80%;
    height: 400px;
    background-size: cover;
    color: white;
    padding: 20px;
}

#show_bg {
    background-image: url('images/background.jpg');
    width: 80%;
    height: 200px;
    background-size: cover;
    color: white;
} */
</style>