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
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/EasyFrenchDipSandwiches.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Easy French Dip Sandwiches
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/pestoPasta.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Pesto Pasta in 10 min
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/EggplantBurgers.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Eggplant Burgers
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/HotDog.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Chicago-Style Hot Dog
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/JuicyRoastedChicken.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
             Juicy Roasted Chicken
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/Oats.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Creamy Slow Cooker Steel-Cut Oats
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
      <q-carousel-slide :name="3" class="column no-wrap">
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
  props: ['tenMinRecipes'],
  data () {
    return {
      tenMin: 1
    }
  },
  
}
</script>
