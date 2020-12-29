 <template>
  <div class="q-pa-md">
    <q-carousel
      v-model="yourTaste"
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
          <q-img class="rounded-borders col-2 full-height" src="~assets/RomanoCheeseCrisp.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Romano Cheese Crisp
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/CapreseonaStick.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caprese on a Stick
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/PineConeCheeseBall.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Pine Cone Cheese Ball
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/BestEverPartyAppetizer.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Best Ever Party Appetizer
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/HalloumiCheeseFingers.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Halloumi Cheese Fingers
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/curryCheeseBall.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Curry Cheese Ball
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheese Cake
          </div>
          <q-btn flat round color="red" icon="favorite_border" size="sm" />
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/HermanReunionCheeseBall.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Herman Reunion Cheese Ball
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/perfectBreakfast.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Perfect Breakfast
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/AvocadoBreakfastSandwich.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Avocado Breakfast Sandwich
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/basicMashedPotatoes.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Top Mashed Potatoes
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Cheese Cake
          </div>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="~assets/PerfectCrabStuffedMushrooms.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Perfect Crab-Stuffed Mushrooms
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/PineConeCheeseBall.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
           Pine Cone Cheese Ball
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/RomanoCheeseCrisp.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Romano Cheese Crisp
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/CapreseonaStick.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caprese on a Stick
          </div>
          </q-img>
           <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
           <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
          </q-img>
          <q-img class="rounded-borders col-2 full-height" src="~assets/cheeseCake.png">
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
  props: ['basedOnYourTaste'],
  data () {
    return {
      yourTaste: 1
    }
  }
}
</script>
