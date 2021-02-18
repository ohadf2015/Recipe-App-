<template>
    <div class="auto-tabs">
      <br>
      <div class="row q-gutter-mb-xs flex-center " >
        <q-input rounded standout="text-light " inverted-light  bg-color="black"  v-model.trim="searchCategory" label="Search"  color="orange" style="width:35%">
          
            <template v-slot:prepend>
            <q-icon color="orange" name="search"/>
            </template>
        </q-input>
      </div>
      <br>
      <br>
      <div class="row q-mb-md">
        <q-banner class="bg-black text-white col flex">
          <h5 style="text-align:center">Choose at least <strong style="color:orange">3</strong> categories you like</h5>
        </q-banner>
      </div>
      <q-form @submit.prevent="onSubmit">
        <template v-if="hascatego">
          <div class="q-pa-md text-white">
            <div class="q-gutter-md flex col-12 flex-center">
              <!-- <div v-for="(item,index) in user_categories" :key="index">
                {{item.categories}}
              </div> -->
                  <div v-for ="item in getCategories" :key="item.name">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <input class="checkinput col-12" type="checkbox" :id="item.numRec" :value="item.name" hidden v-model="checked_categories">
                      <label class="sem" :for="item.numRec">
                        <q-img :src="picUrl(item.name)" width="150px" height="150px"/>
                        <div class="FillParent sem"></div>
                      </label>
                      <br>
                      <br>
                      <q-item-label style="text-align:center" :for="item.numRec">{{item.name}}</q-item-label>
                      <br>
                      <br>
                  </div>
            </div>
          </div>
        </template>
        <div class="row q-mb-md">
          <q-btn v-if="checked_categories.length>2" class="col q-gutter-mb-xs flex-center "
                  text-color="black"
                  color="yellow-10"
                  icon-right="beenhere"
                  label="submit"
                  type="submit"
                />
        </div>
        <br>
      </q-form>
 </div>
</template>

<script>
export default {
    data() {
        return {
            searchCategory: '',
            hascatego:false,
            checked_categories: [],
            user_categories: ["World Cuisine Recipes", "Main Dish Recipes", "Meat and Poultry Recipes"]
        }
    },
    computed:{
    getCategories(){
       return this.$store.getters['categories/getCategs'].filter(item => {
        return item.name.toLowerCase().includes(this.searchCategory.toLowerCase())

      })
     }
    },
   
    created:async function(){
        this.fetchCat();
        // let userData = await this.getUserData();
        // this.user_categories = userData.categories;
        // this.checked_categories=this.user_categories
        console.log( "uaer:"+this.user_categories)
        if(this.user_categories==[])
              this.checked_categories=[]
            else
            this.checked_categories=[...this.user_categories]
          console.log("checked"+this.checked_categories) 

    },
    beforeUpdate() {
      //console.log(JSON.stringify(this.$route))
       console.log(this.checked_categories)
    },
    methods:{
        async fetchCat(){
            try{
                await this.$store.dispatch('categories/getCatego');
                this.hascatego = true;
            }catch (err){
              console.log(err)
                throw err.message;
            }
        },
    async getUserData(){
     let userId= await this.$store.getters['users/getUserId']
     alert("LAAAAALA")
     console.log(userId);
     return this.$store.dispatch('users/getUserData', {id:userId}) 
    // return this.$store.getters['users/getUserCat']
    },
      picUrl (name) {
      return require(`../assets/img/categories/${name.trim()}.jpg`)
      },
      async onSubmit () {
        let userId=await this.$store.getters['users/getUserId']
        const up = await this.$store.dispatch('users/updateCategory', {id:userId,
        updateCat: this.checked_categories})
        console.log(up)
      if (!up.success) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to select  at least 3 categories'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
          timeout:1000
        });
          setTimeout(()=>{
          this.$router.replace('/main');
          },3000);
      }

    }
    }


}
</script>
<style scoped>
.auto-tabs {
    max-width: 45%;
    margin: 0 auto;
}
.q-input{
  position: fixed;
  z-index: 30;
  width: 15%;
  color:white
}
label.sem {
  border: 4px solid orange;
  border-radius: 50%;
}
.sem {
  display: inline-block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.checkinput:checked ~.sem>.sem{
  background-color: rgba(236, 166, 36, 0.5);
}
.FillParent {
  display: block;
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
}
.q-btn{
  position: fixed;
  right:30%;
  bottom: 0px;
  z-index: 30;
  width: 40%;
  padding:0px 5px 0px 10px
}


</style>
