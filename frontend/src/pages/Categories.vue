<template>
    <div class="auto-tabs">
      <br>
      <div class="row q-gutter-mb-xs flex-center " >
        <q-input rounded standout bg-color="black" v-model.trim= "searchCategory" label="Search"  color="orange" style="width:35%">
            <template v-slot:prepend>
            <q-icon color="grey" name="search"/>
            </template>
        </q-input>
      </div>
      <br>
      <br>
      <div class="row q-mb-md">
        <q-banner class="bg-black text-white col flex">
          <h5 style="text-align:center">Choose at least <strong style="color:orange">3</strong> catrgories you like</h5>
        </q-banner>
      </div>
      <q-form @submit.prevent="onSubmit">
        <template v-if="hascatego">
          <div class="q-pa-md text-white">
            <div class="q-gutter-md flex col-12 flex-center">
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
          <q-btn v-if="checked_categories.length>2" class="col"
                  to="/main"
                  text-color="black"
                  color="yellow-10"
                  icon-right="beenhere"
                  label="submit"
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
    max-width: 45%;
    margin: 0 auto;
}
.q-input{
  position: fixed;
  z-index: 30;
  width: 15%;
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
  right: 670px;
  bottom: 0px;
  z-index: 30;
  width: 15%;
  padding:0px 5px 0px 10px
}
</style>