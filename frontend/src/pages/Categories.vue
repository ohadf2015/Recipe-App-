<template>
    <div>
        <br>
        <div class="q-gutter-y-xl flex-center" >
        <q-input dark v-model= "searchCategory" label="Search"  color="orange" class="column items-center" >
            <template v-slot:prepend>
            <q-icon name="search" />
            </template>
        </q-input>
        </div>
        <br>
        <br>
     <q-form class="auto-tabs" @submit.prevent="onSubmit">
    <div class="row q-mb-md">
      <q-banner class="bg-black text-white col flex">
        <h5>Choose at least <strong style="color:orange">3</strong> catrgories you like</h5>
      </q-banner>
    </div>
    <template v-if="hascatego">
      <div class="q-pa-md text-white absolte-center " style="width:800px">
         <div class="q-gutter-xs flex flex-center  ">

              <div v-for ="item in getCategories" :key="item.name" class="category_item row" >
                  <input class="checkinput col-12" type="checkbox" :id="item.numRec" :value="item.name" hidden v-model="checked_categories">
                  <label class="sem" :for="item.numRec">
                    <q-img :src="picUrl(item.name)" width="150px" height="150px" />
                    <div class="FillParent sem"></div>
                  </label>
                  <label  :for="item.numRec">{{item.name}}</label>
              </div>
         </div>
      </div>
    </template>
    <div class="row q-mb-md">
      <q-btn v-if="checked_categories.length>2" class="col"
              to="/"
              text-color="black"
               color="yellow-10"
              icon-right="beenhere"
              label="submit"
            />
    </div>
    <br>
    </q-form>
    <br> 
 </div>
</template>

<script>
export default {
    data() {
        return {
            searchCategory: '',
            hascatego:false,
            checked_categories: []
        }
    },
    computed:{
    getCategories(){
       return this.$store.getters.getCategs.filter(item => {
        return item.name.toLowerCase().includes(this.searchCategory.toLowerCase())
      })
     }
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
      picUrl (name) {
      return require(`../assets/img/categories/${name.trim()}.jpg`)
      },
        onSubmit () {
      if (this.checked_categories.length>2) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to select 3 categories'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    }
         
    }
}
</script>
<style scoped>
.auto-tabs {
    max-width: 500px;
    margin: 0 auto;
}
.q-form{
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.q-input {
    padding: 25px 450px
}
.q-banner{
  padding: 2px 40px ;
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
.category_item{
  display: inline-flex;
  flex-direction: column ;
  height: 250px;
  max-width: 28%;
  justify-content: center;
  align-items: center;
  padding: 25px;
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
  right: 670px;
  bottom: 0px;
  z-index: 30;
  width: 15%;
  padding:0px 5px 0px 10px
}
</style>