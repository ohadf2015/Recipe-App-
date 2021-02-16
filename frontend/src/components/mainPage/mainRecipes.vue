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
      <div class="row fit justify q-col-gutter-md-start items-center q-gutter-md q-col-gutter-md no-wrap">
        <q-btn class="items-center" to="/gingerbreadWaffles" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/GingerbreadWaffles.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Waffles
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/topItalianPizza" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/pizza.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Top Italian Pizza
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/fudge.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Fudge
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
          <q-img src="~assets/WhiteWine.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           White Wine
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/PerfectCrabStuffedMushrooms.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Perfect Crab Stuffed Mushrooms
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
        <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/LasagnaFlatbread.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Lasagna Flatbread
          </div>
          </q-img>
            </q-avatar>
        </q-btn>
            <q-btn class="items-center" to="/main" flat>
            <q-avatar rounded size="170px" font-size="40px">
          <q-img src="~assets/OvenRoastedAsparagus.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Oven Roasted Asparagus
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
  props: ['slideTopRecipes'],
  data () {
    return {
      topRecipes: 1,
      recipes: [
        {
          id: 1,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 2,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        },
                {
          id: 3,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 4,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        },
                {
          id: 5,
          img: '~assets/GingerbreadWaffles.png',
          label: 'Gingerbread Waffles',
          to: '/gingerbreadWaffles'
        },
        {
          id: 6,
          img: '~assets/pizza.png',
          label: 'Top Italian Pizza',
          to: '/topItalianPizza'
        }
      ]
    }
  },
   methods:{

   }
}
</script>

<style scoped>

</style>
