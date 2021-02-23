 <template> 
  <div class="q-pa-md flex flex-center" v-if="rec&&!loading">
    <div class="q-pa-md">
     <q-img :src="`${rec.img}`" style="max-width: 500px; height: 350px; ">
        <div class="absolute-bottom text-subtitle1 text-center">
        {{rec.name}}
        </div>
      </q-img>
      <!-- <p q-gutter-md flex col-12>{{description}}</p> -->
      
     
        <div class="row no-wrap items-center flex flex-center">
           <q-icon name="star" color="orange" />
           <span class="text-caption text-grey q-ml-sm">{{rec.rating.toFixed(2)}} ({{rec.ratingCount}})</span>
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="comment" />
                <q-btn flat round color="white" icon="share" />
        </div>
          <q-item-section class="flex flex-center">
            <q-item-label>Total time : {{rec.totalTimeVal}} min</q-item-label>
            <q-item-label> {{rec.nutrition.calories}}</q-item-label>
          </q-item-section>
          
          <h4 class="text-orange flex flex-center"><strong>Ingredients: </strong></h4>
          <div v-for="ingrid in rec.recipeIngredient" :key="ingrid.id">
            <br>
            <div class="flex flex-center">
            <q-list dark bordered separator class="flex flex-center" style="min-width: 350px; width:350px;">
                  <q-item clickable v-ripple>
                <q-item-section> {{ingrid}} </q-item-section>
              </q-item>
            </q-list>
            </div>
              </div>
        
            <h4 class="text-orange flex flex-center"><strong>Instructions: </strong></h4>
            <ul v-for="instruction in rec.recipeInstructions" :key="instruction.id">
                          <br>
            <div class="flex flex-center">
            <q-list dark bordered separator class="flex flex-center" style="min-width: 440px; width: 440px;">
                  <q-item clickable v-ripple>
                <q-item-section> {{instruction.text}} </q-item-section>
              </q-item>
            </q-list>
            </div>
            </ul>
             <div>
        <router-view></router-view>
        <router-link  class="flex flex-center" to="c1/review"><q-btn color="orange" icon="mail" label="Add a Review" /></router-link>
      </div>
      </div>
</div>
<div v-else>
  <lottie :options="defaultOptions"
 :width="500" 
 :height="900" 
 class="lottie"
 @animCreated="handleAnimation"/>
</div>
</template>
<script>
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
			autoplay:true,// Whether to start automatically
		},
		defaultAnim :''
    }
  },
  components: {
  Lottie
  },
  created(){
 this.fetchRecipe()
  setTimeout(
   ()=> this.loading = false,// enable the input
    4000)
  },
  computed:{
    rec(){
    return this.$store.getters['getRecipeData']
    }

  },
  methods:{ 
    fetchRecipe(){
     this.$store.dispatch('getRecipe',this.$route.params.id)
    },
    handleAnimation(){
		this.defaultAnim = Anim
	},
  mounted(){
 
  }
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

</style>