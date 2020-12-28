<template>
    <div>
        <h1>Categories</h1>
        <div v-if="hascatego">
        <ul>
           <li v-for="c in getCategories" :key="c.name">
               {{c.name}}
            </li> 
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hascatego:false
        }
    },
    computed:{
    getCategories(){
       return this.$store.getters.getCategs;
    },
    },
    created(){
        this.fetchCat();

    },
    methods:{
        async fetchCat(){
            try{
                await this.$store.dispatch('getCatego');
                this.hascatego = true;
            }catch (err){
                throw err.message;
            }
            

        },
         
    }
}
</script>