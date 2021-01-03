<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="tenMin"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="orange"
      padding
      arrows
      height="200px"
      class="bg-black shadow-4 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row fit justify q-col-gutter-md-start items-center q-gutter-md q-col-gutter-md no-wrap">
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Avocado Breakfast Sandwich
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/TurkeyBreast.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Turkey Breast
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/GrandmasCornBreadDressing.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Grandmas Corn Bread Dressing
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
            <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
           </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-md q-col-gutter-md no-wrap">
               <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
            <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
           </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  props: ['tenMinRecipes'],
  data () {
    return {
      tenMin: 1
    }
  },
  
}
</script>
