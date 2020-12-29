<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="topRecipes"
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
        <q-img class="rounded-borders col-2 full-height" src="~assets/GingerbreadWaffles.png">
          <div class="absolute-full flex flex-center">
            Waffles
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
        </q-img>
        <q-img class="rounded-borders col-2 full-height" src="~assets/pizza.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Pizza
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
        </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheesecake
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/friedRice.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Rice
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/CrispyChickenSchnitzel.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Crispy Chicken Schnitzel
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/PerfectCrabStuffedMushrooms.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Perfect Crab-Stuffed Mushrooms
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
           <q-img class="rounded-borders col-2 full-height" src="~assets/basicMashedPotatoes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Mashed Potatoes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/topSoftChristmasCookies.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Christmas Cookies
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/buffaloChickenDip.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Buffalo Chicken Dip
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/TraditionstoBorrow.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Traditions to Borrow
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="~assets/perfectBreakfast.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Perfect Breakfast
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Avocado Breakfast Sandwich
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/greekChickenSkewers.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Greek Chicken Skewers
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/amazingGreekChickenCasserole.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Amazing Greek Chicken Casserole
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/JuicyRoastedChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Juicy Roasted Chicken
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/airFryerBroiledGrapefruit.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Air Fryer Broiled Grapefruit
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="~assets/OvenRoastedAsparagus.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Oven Roasted Asparagus
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/fudge.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Fudge
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/TwiceBakedPotatoes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Twice Baked Potatoes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/GrandmasCornBreadDressing.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Grandma's Corn Bread Dressing
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/TurkeyBreast.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Oven-Roasted Turkey Breast
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/DeviledEggs.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Classic Savory Deviled Eggs
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  props: ['slideTopRecipes'],
  data () {
    return {
      topRecipes: 1,
      recipes: [
        {
          id: 1,
          img: '~assets/DeviledEggs.png',
          label: 'Classic Savory Deviled Eggs',
          icon: 'favorite_border',
          to: '/myRecipes'
        }
      ]
    }
  },
   methods:{

   }
}
</script>
