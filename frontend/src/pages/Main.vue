<template class ="auto-tabs">
<div class="bg">
  <div class="q-pa-md">
     <mainRecipes/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allRecipes: [
        {
          "name":"Top Recipes","recipes":
          [
            {
              "_id":"5fc3b8ab2d388ad93bbb4c00",
              "name":"Too Much Chocolate Cake",
              "rating":4.789640173981811,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1130307.jpg"
            },
            {
              "_id":"5fc3bea63baec77d6a1c3220",
              "name":"Awesome Slow Cooker Pot Roast",
              "rating":4.637239823644007,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2287775.jpg"
            },
            {
              "_id":"5fc3b8bf2c51457c2c2b038c",
              "name":"Apple Pie by Grandma Ople",
              "rating":4.779087579087579,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F736203.jpg"
            },
            {
              "_id":"5fc3be93acc40558f7f1d2e6",
              "name":"Creamy Au Gratin Potatoes",
              "rating":4.542275574112735,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F738814.jpg"
            },
            {
              "_id":"5fc3b8a52d388ad93bbb4a70",
              "name":"Banana Banana Bread",
              "rating":4.58893660662778,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F4565477.jpg"
            },
            {
              "_id":"5fc3b8a52d388ad93bbb4a71",
              "name":"Grandmother's Buttermilk Cornbread",
              "rating":4.813664596273292,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F01%2Fgrandmothers-buttermilk-cornbread-photo-by-diz-2077366.jpg"
            },
            {
              "_id":"5fc3b8a52d388ad93bbb4bb5",
              "name":"Chantal's New York Cheesecake",
              "rating":4.710019267822736,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5185165.jpg"
            },
            {
              "_id":"5fc3b8a52d388ad93bbb4ab7",
              "name":"Carrot Cake III",
              "rating":4.696486070278595,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F01%2F26%2F1053595-Carrot-Cake-III-7402-sarah-2000.jpg"
            },
            {
              "_id":"5fc3be74038e1f6a5228d4b9",
              "name":"Maple Salmon",
              "rating":4.67320028510335,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F862371.jpg"
            },
            {
              "_id":"5fc3b8ab2d388ad93bbb4bff",
              "name":"Banana Crumb Muffins",
              "rating":4.807139897804171,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F428420.jpg"
            }
          ]
        },
        {
          "name":"Recently Added","recipes":
          [
            {
              "_id":"5fc3b9b714038739dd9990ac",
              "name":"Frittata with Leftover Greens",
              "datePublished":"2020-07-03T00:06:55.000Z",
              "rating":4.7,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4421187.jpg"
            },
            {
              "_id":"5fc3ba66a9df8e4a520d908e",
              "name":"Carrot Zucchini Casserole",
              "datePublished":"2020-07-06T23:50:02.000Z",
              "rating":4.483870967741935,
              "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8306380.jpg"
            },
            {
              "_id":"5fc3bd565cecaf2322c2b7df",
              "name":"Apple Clafoutis",
              "datePublished":"2020-09-17T02:55:42.000Z",
              "rating":4.909090909090909,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8549996.jpg"
            },
            {"_id":"5fc3b88113f48bef0f019cd0","name":"Spicy Italian Deviled Eggs","datePublished":"2020-07-02T07:20:49.000Z","rating":3.9393939393939394,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2407074.jpg"},{"_id":"5fc3b8b5e2a60e3bcddebf06","name":"Lemon Loaf Cake","datePublished":"2020-07-07T07:07:02.000Z","rating":3.6176470588235294,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8303714.jpg"},{"_id":"5fc3bc0d746ac6fd7fd28e7d","name":"Lomo Saltado (Peruvian Steak Stir-Fry)","datePublished":"2020-09-28T20:52:30.000Z","img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8586543.jpg"},{"_id":"5fc3bc41aea588a40663e911","name":"Garlic-Butter Roasted Mushrooms","datePublished":"2020-08-11T08:42:15.000Z","rating":4.8125,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8429504.jpg"},{"_id":"5fc5107df68951704c36d8be","name":"Hangtown Fry with Parmesan and Fresh Herbs","datePublished":"2020-07-03T00:16:29.000Z","rating":4.6,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3519811.jpg"},{"_id":"5fc3bd006da60843d87c0f45","name":"Peach-Stuffed Pork Chops","datePublished":"2020-07-15T21:31:15.000Z","rating":4.9,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8349983.jpg"},{"_id":"5fc3be7af1fae8d6e6970ee4","name":"Sweet and Spicy Jerk Shrimp","datePublished":"2020-07-08T00:28:57.000Z","rating":4.909090909090909,"img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8333713.jpg"}]}]}
    },
     provide() {
    return {
      allRecipes: this.allRecipes
    };
  },
  components: {
    mainRecipes: require('components/mainPage/mainRecipes.vue').default
  },
}
</script>

<style scoped>
.bg {
  /* background-color: radial-gradient(farthest-corner at 95% 30%,black,grey); */
  background-color: black ;
}
.auto-tabs {
   max-width: 1500px;
   margin: 0 auto;
   min-width: 800px;
   background-color: black;
}
</style>

