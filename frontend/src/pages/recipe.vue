 <template> 
  <div class="q-pa-md">
     <q-img :src="`${img}`" style="max-width: 370px; height: 350px;">
        <div class="absolute-bottom text-subtitle1 text-center">
        {{recname}}
        </div>
      </q-img>
      <!-- <p q-gutter-md flex col-12>{{description}}</p> -->
      <div class="q-pa-md">
        <div class="row no-wrap items-center">
           <q-icon name="star" color="orange" />
           <span class="text-caption text-grey q-ml-sm">{{rating}} ({{ratingCount}})</span>
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="comment" />
                <q-btn flat round color="white" icon="share" />
        </div>
          <q-item-section>
            <q-item-label>Total time : {{totalTime}} min</q-item-label>
            <q-item-label> {{calories}}</q-item-label>
          </q-item-section>
          <h6 class="text-orange">Ingredients: </h6>
          <div v-for="ingrid in ingredient" :key="ingrid.id">
            <br>
               {{ingrid}}
          </div>
            <h6 class="text-orange">Instruction: </h6>
            <div v-for="instraction in recipeInstruction" :key="instraction.id">
              <strong class="text-orange-9">{{instraction.test}}</strong>
            </div>
      </div>
      <br> 
      <div>
        <router-view></router-view>
        <router-link to="c1/review">Add a Review</router-link>
      </div>
</div>
</template>
<script>
export default {
  props: ['id'],
  data(){
    return{
      selectedRecipe: null
    }
  },
  created(){
   this.selectedRecipe=this.$store.getters.getRecipe.find(
     (recipe)=> recipe.id === this.id
   );
  },
  computed:{
     recname() {
      return this.selectedRecipe.name;
    },
     img() {
      return this.selectedRecipe.img;
    },
    description(){
     return this.selectedRecipe.description;
    },
    totalTime() {
      return this.selectedRecipe.totalTimeVal;
    },
      ingredient() {
      return this.selectedRecipe.recipeIngredient;
    },
    recipeInstruction() {
      return this.selectedRecipe.recipeInstructions;
    },
    calories(){
    return this.selectedRecipe.mutrition.calories
    },
    rating(){
     return this.selectedRecipe.rating;
    },
    ratingCount(){
     return this.selectedRecipe.ratingCount;
    },
    review() {
      return this.$route.path + '/review';
    }
  }
}
</script>