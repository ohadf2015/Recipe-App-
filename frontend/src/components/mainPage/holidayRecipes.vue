 <template>
  <div class="q-pa-md">
    <q-carousel
      v-model="holiday"
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
          <q-img class="rounded-borders col-2 full-height" src="~assets/pizza.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Pizza
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/newYearsRecipes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            New Year's Recipes
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/topSoftChristmasCookies.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Christmas Cookies
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/DeviledEggs.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Classic Savory Deviled Eggs
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/TraditionstoBorrow.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Traditions to Borrow
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/fudge.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Fudge
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
    </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  props: ['holidayRecipes'],
  data () {
    return {
      holiday: 1
    }
  }
}
</script>
