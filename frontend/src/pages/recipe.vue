 <template> 
  <div class="q-pa-md" v-if="rec&&!loading">
     <q-img :src="`${rec.img}`" style="max-width: 370px; height: 350px;">
        <div class="absolute-bottom text-subtitle1 text-center">
        {{rec.name}}
        </div>
      </q-img>
      <!-- <p q-gutter-md flex col-12>{{description}}</p> -->
      <div class="q-pa-md">
        <div class="row no-wrap items-center">
           <q-icon name="star" color="orange" />
           <span class="text-caption text-grey q-ml-sm">{{rec.rating.toFixed(2)}} ({{rec.ratingCount}})</span>
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="comment" />
                <q-btn flat round color="white" icon="share" />
        </div>
          <q-item-section>
            <q-item-label>Total time : {{rec.totalTime}} min</q-item-label>
            <q-item-label> {{rec.calories}}</q-item-label>
          </q-item-section>
          <h6 class="text-orange">Ingredients: </h6>
          <div v-for="ingrid in rec.recipeIngredient" :key="ingrid.id">
            <br>
               {{ingrid}}
          </div>
            <h6 class="text-orange">Instructions: </h6>
            <ul v-for="instruction in rec.recipeInstructions" :key="instruction.id">
              <li class="text-orange-9">{{instruction.text}}</li>
            </ul>
      </div>
      <br> 
      <div>
        <router-view></router-view>
        <router-link to="c1/review">Add a Review</router-link>
      </div>
</div>
<div v-else>
  <lottie :options="defaultOptions" 
 :width="800" 
 :height="1000" 
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