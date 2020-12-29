<template>
<div class="q-pa-md">
     <div class="q-pa-md q-gutter-sm">
       <br>
       <br>
       <br>
      <h5 class="text-orange"> My Recipes</h5>
        </div>
    <div class="q-pa-md col-items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-xs">Best Fluffy Waffles</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="orange" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="comment" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
        </div>
      </q-card-section>
         <img src="~assets/GingerbreadWaffles.png">
          <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="orange" name="access_time" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Total: 15 mins</q-item-label>
            <q-item-label caption>Serving: 4</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions>
        <q-btn flat color="orange" label="Ingredients" icon="reorder"/>

        <q-space />

        <q-btn
          color="orange"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
              <h6 class="text-orange">Ingredients: </h6>
                7 ounces unsalted butter, at room temperature<br>
                6 tablespoons white sugar<br>
                2 teaspoons vanilla sugar<br>
                1 pinch salt<br>
                2 cups all-purpose flour<br>
                2 teaspoons baking powder<br>
                cup heavy whipping cream<br>
                1 (1.5 fluid ounce) jigger sparkling water, or as needed<br>
                cooking spray<br>
              <br>
              <h6 class="text-orange">Directions: </h6>
              <b class="text-orange">Step 1 - </b>
              Preheat a waffle iron according to manufacturer's instructions.
              <br><b class="text-orange">Step 2 - </b>
              Combine butter, sugar, vanilla sugar, and salt in a large bowl; beat with an electric mixer until smooth and creamy. Add eggs one at a time, beating well after each addition.
              <br><b class="text-orange">Step 3 - </b>
              Combine flour and baking powder in a bowl. Beat into butter mixture 1/2 cup at a time, alternating with cream. Add a dash of sparkling water in the end to loosen up the batter.
              <br><b class="text-orange">Step 4 - </b>
              Spray the preheated waffle iron with cooking spray. Pour batter into waffle iron, working in batches, and cook according to manufacturer's instructions, 3 to 5 minutes per waffle.
          </q-card-section>
        </div>
      </q-slide-transition>
      <div class="q-pa-md q-gutter-sm">
        <q-btn class="row-center" color="orange" icon-right="food_bank" label="I Made It ! " />
        <q-btn class="row-center" color="orange" icon-right="print" label="Print " />
        </div>
    </q-card>
    </div>
     <div class="q-pa-md col-items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-xs">Top Italian Pizza</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="orange" />
          <span class="text-caption text-grey q-ml-sm">4.8 (1,551)</span>
            <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="comment" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
        </div>
      </q-card-section>
         <img src="~assets/pizza.png">
          <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="orange" name="access_time" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Total: 15 mins</q-item-label>
            <q-item-label caption>Serving: 4</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions>
        <q-btn flat color="orange" label="Ingredients" icon="reorder"/>

        <q-space />

        <q-btn
          color="orange"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
              <h6 class="text-orange">Ingredients: </h6>
                7 ounces unsalted butter, at room temperature<br>
                6 tablespoons white sugar<br>
                2 teaspoons vanilla sugar<br>
                1 pinch salt<br>
                2 cups all-purpose flour<br>
                2 teaspoons baking powder<br>
                cup heavy whipping cream<br>
                1 (1.5 fluid ounce) jigger sparkling water, or as needed<br>
                cooking spray<br>
              <br>
              <h6 class="text-orange">Directions: </h6>
              <b class="text-orange">Step 1 - </b>
              Preheat a waffle iron according to manufacturer's instructions.
              <br><b class="text-orange">Step 2 - </b>
              Combine butter, sugar, vanilla sugar, and salt in a large bowl; beat with an electric mixer until smooth and creamy. Add eggs one at a time, beating well after each addition.
              <br><b class="text-orange">Step 3 - </b>
              Combine flour and baking powder in a bowl. Beat into butter mixture 1/2 cup at a time, alternating with cream. Add a dash of sparkling water in the end to loosen up the batter.
              <br><b class="text-orange">Step 4 - </b>
              Spray the preheated waffle iron with cooking spray. Pour batter into waffle iron, working in batches, and cook according to manufacturer's instructions, 3 to 5 minutes per waffle.
          </q-card-section>
        </div>
      </q-slide-transition>
      <div class="q-pa-md q-gutter-sm">
        <q-btn class="row-center" color="orange" icon-right="food_bank" label="I Made It ! " />
        <q-btn class="row-center" color="orange" icon-right="print" label="Print " />
        </div>
    </q-card>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      stars: 4,
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
