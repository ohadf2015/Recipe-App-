<template>
<div class="q-pa-md">
  <div class="q-pa-md q-gutter-md">
        <h4 class="text-orange"> My Recipes </h4>
  </div>
<q-btn v-for="recipe in myRecipes" :key="recipe.id"
  :to="recipe.to">
     <div class="q-pa-md row-items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-xs">{{recipe.label}}</div>
        <div class="row no-wrap items-center">
           <q-icon name="star" color="orange" />
           <span class="text-caption text-grey q-ml-sm">{{recipe.stars}}</span>
            <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="comment" />
        <q-btn flat round color="white" icon="share" />
      </q-card-actions>
        </div>
      </q-card-section>
         <img :src="`${recipe.imageSrc}`"
         height="300px"
         weight="300px">
          <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="orange" name="access_time" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Total time:{{recipe.totalTime}}</q-item-label>
            <q-item-label caption>Serving: {{recipe.numServing}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    </div>
</q-btn>
    </div>
</template>

<script>
export default {
  data () {
    return {
      stars: 4,
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      myRecipes: [
        {
          id: 1,
          label: 'Top Italian Pizza',
          stars: "4.8 (1,551)",
          to: "/topItalianPizza",
          imageSrc: "pizza.png",
          numServing: 5,
          totalTime: "50 mins"
        },
        {
          id: 2,
          label: 'Waffels',
          stars: "4.2 (551)",
          to: "/gingerbreadWaffles",
          imageSrc: "~assets/pizza.png",
          numServing: 4,
          totalTime: "15 mins"
        },
        {
          id: 3,
          label: 'aaa',
          stars: "4.8 (1,551)",
          to: "/topItalianPizza",
          imageSrc: "pizza.png",
          numServing: 5,
          totalTime: "50 mins"
        },
        {
          id: 4,
          label: 'bbb',
          stars: "4.8 (8,900)",
          to: "/topItalianPizza",
          imageSrc: "pizza.png",
          numServing: 5,
          totalTime: "50 mins"
        }
      ],
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
