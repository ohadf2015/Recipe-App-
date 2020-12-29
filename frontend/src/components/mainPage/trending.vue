<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="trendingRecipes"
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
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/CurryChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Five-Ingredient Red Curry Chicken
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/LasagnaFlatbread.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Lasagna Flatbread
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/SneakySloppyJoes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Sneaky Sloppy Joes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/WhiteWine.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Speckled Trout in Capers and White Wine
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/GingerbreadWaffles.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Gingerbread Waffles
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/topSoftChristmasCookies.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Christmas Cookies
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/newYearsRecipes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           New Year's Recipes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/Oats.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Creamy Slow Cooker Steel-Cut Oats
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/buffaloChickenDip.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Buffalo Chicken Dip
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Avocado Breakfast Sandwich
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheese Cake
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/JuicyRoastedChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Juicy Roasted Chicken
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
       <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/newYearsRecipes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           New Year's Recipes
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/Oats.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Creamy Slow Cooker Steel-Cut Oats
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/buffaloChickenDip.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Buffalo Chicken Dip
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Avocado Breakfast Sandwich
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheese Cake
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/JuicyRoastedChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Juicy Roasted Chicken
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
       <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/newYearsRecipes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           New Year's Recipes
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/Oats.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Creamy Slow Cooker Steel-Cut Oats
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/buffaloChickenDip.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Buffalo Chicken Dip
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Avocado Breakfast Sandwich
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheese Cake
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/JuicyRoastedChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Juicy Roasted Chicken
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  props: ['trending'],
  data () {
    return {
      trendingRecipes: 1
    }
  }
}
</script>
