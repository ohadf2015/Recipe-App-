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
      height="300px"
      class="bg-black shadow-4 rounded-borders"
    >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row fit justify-start items-center q-gutter-md q-col-gutter-md no-wrap">
    <!-- <q-carousel-item
    v-model="recipes"
    v-for="recipe in recipes"
    :key="recipe.id"
    :to="recipe.to"
    class="text-grey-4"
    exact
    clickable>
    <q-img
        class="rounded-borders col-2 full-height"
        src="~assets/GingerbreadWaffles.png"
        >
        <q-carousel-label> {{ recipe.label }}</q-carousel-label>
          <q-btn flat round :name="recipe.icon" color="red" size="sm" />
        </q-img>
    </q-carousel-item> -->
    <q-btn to="/topItalianPizza" round>
      <q-avatar size="200px">
          <q-img class="rounded-borders full-height" src="~assets/pizza.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Pizza
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
        </q-img>
        </q-avatar>
    </q-btn>
         <q-btn round>
      <q-avatar size="200px">
          <q-img class="rounded-borders full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheesecake
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
        </q-img>
        </q-avatar>
    </q-btn>
             <q-btn round>
      <q-avatar size="200px">
          <q-img class="rounded-borders full-height" src="~assets/friedRice.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Rice
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
        </q-img>
        </q-avatar>
    </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-md q-col-gutter-md no-wrap">
          <q-img class="rounded-borders full-height" src="~assets/newYearsRecipes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            New Year's Recipes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders full-height" src="~assets/Oats.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Creamy Slow Cooker Steel-Cut Oats
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders full-height" src="~assets/basicMashedPotatoes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Mashed Potatoes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
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
        },
        {
          id: 2,
          img: '~assets/DeviledEggs.png',
          label: 'Classic Savory Deviled Eggs',
          icon: 'favorite_border',
          to: '/myRecipes'
        },
        {
          id: 3,
          img: '~assets/DeviledEggs.png',
          label: 'Classic Savory Deviled Eggs',
          icon: 'favorite_border',
          to: '/myRecipes'
        },
        {
          id: 4,
          img: '~assets/DeviledEggs.png',
          label: 'Classic Savory Deviled Eggs',
          icon: 'favorite_border',
          to: '/myRecipes'
        },
        {
          id: 5,
          img: '~assets/DeviledEggs.png',
          label: 'Classic Savory Deviled Eggs',
          icon: 'favorite_border',
          to: '/myRecipes'
        },
        {
          id: 6,
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
