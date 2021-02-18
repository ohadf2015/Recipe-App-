import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
    namespaced: true,
    state() {
        return {
            recipes: [
                {
                    id: 'c1',
                    to:'/gingerbreadWaffles',
                    category:'appetizers and snacks',
                    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3129045.jpg',
                    name: 'Hot Artichoke Dip with Green Chiles',
                    description: `Green chile peppers and garlic spice up this easy and delicious hot dip. It's great to serve while your guests are enjoying wine and waiting on the main course.  It goes very well with tortilla chips.'`,
                    recipeIngredient: ['½ (16 ounce) jar creamy salad dressing', '1 clove garlic, minced', '1 cup grated Parmesan cheese','1 (4 ounce) can chopped green chile peppers','1 (14 ounce) can marinated artichoke hearts, drained and chopped','3 green onions, chopped','1 tomato, chopped'],
                    recipeInstructions:[{test:'Preheat oven to 350 degrees F (175 degrees C).'},
                    {test:'In a medium bowl, mix the creamy salad dressing, garlic, Parmesan cheese, green chile peppers and artichoke hearts.'},
                    {test:'Transfer the mixture to a small baking dish. Bake uncovered in the preheated oven 30 minutes, or until bubbly and lightly brown. Garnish with green onions and tomato.'}],
                    rating: 4,
                    ratingCount:10,
                    totalTimeVal:35,
                    mutrition:{calories:"75 calories"}
                  },
                  {
                    id: 'c2',
                    to:'/gingerbreadWaffles',
                    category:'appetizers and snacks',
                    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3129045.jpg',
                    name: 'Hot Artichoke Dip with Green Chiles',
                    description: `Green chile peppers and garlic spice up this easy and delicious hot dip. It's great to serve while your guests are enjoying wine and waiting on the main course.  It goes very well with tortilla chips.'`,
                    recipeIngredient: ['½ (16 ounce) jar creamy salad dressing', '1 clove garlic, minced', '1 cup grated Parmesan cheese','1 (4 ounce) can chopped green chile peppers','1 (14 ounce) can marinated artichoke hearts, drained and chopped','3 green onions, chopped','1 tomato, chopped'],
                    recipeInstructions:[{test:'Preheat oven to 350 degrees F (175 degrees C).'},
                    {test:'In a medium bowl, mix the creamy salad dressing, garlic, Parmesan cheese, green chile peppers and artichoke hearts.'},
                    {test:'Transfer the mixture to a small baking dish. Bake uncovered in the preheated oven 30 minutes, or until bubbly and lightly brown. Garnish with green onions and tomato.'}],
                    rating: 4,
                    ratingCount:10,
                    totalTimeVal:35,
                    mutrition:{calories:"75 calories"}
                  },
                  {
                    id: 'c2',
                    to:'/gingerbreadWaffles',
                    category:'appetizers and snacks',
                    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3129045.jpg',
                    name: 'Hot Artichoke Dip with Green Chiles',
                    description: `Green chile peppers and garlic spice up this easy and delicious hot dip. It's great to serve while your guests are enjoying wine and waiting on the main course.  It goes very well with tortilla chips.'`,
                    recipeIngredient: ['½ (16 ounce) jar creamy salad dressing', '1 clove garlic, minced', '1 cup grated Parmesan cheese','1 (4 ounce) can chopped green chile peppers','1 (14 ounce) can marinated artichoke hearts, drained and chopped','3 green onions, chopped','1 tomato, chopped'],
                    recipeInstructions:[{test:'Preheat oven to 350 degrees F (175 degrees C).'},
                    {test:'In a medium bowl, mix the creamy salad dressing, garlic, Parmesan cheese, green chile peppers and artichoke hearts.'},
                    {test:'Transfer the mixture to a small baking dish. Bake uncovered in the preheated oven 30 minutes, or until bubbly and lightly brown. Garnish with green onions and tomato.'}],
                    rating: 4,
                    ratingCount:10,
                    totalTimeVal:35,
                    mutrition:{calories:"75 calories"}
                  }
            ]
        }
    },
    mutations,
    actions,
    getters
} 

