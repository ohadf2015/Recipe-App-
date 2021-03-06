<template>
<!-- view code resp on how to layout Shown -->
  <q-layout view="lHh LpR lfr">
<!-- Header -->
<div class="auto-style">
    <q-header class="header" elevated  v-if="($route.path == '/main'||$route.path == '/myRecipes')">
      <q-toolbar class="bg-black-10 col-md-4" >
<!-- Search - available in search component --> 

          <search/>

          <div class="q-ml-md text-h6 text-warning text-center">Hi {{getUserName}}</div>   

          <!-- Menu  -->
          <div class="q-pa-md">
              <div class="q-gutter-md">
                <!-- <q-btn color="warning" style="width: 3rem;" icon="menu" v-if="windowWidth<750">
                  <q-menu fit>
                    <q-list class="auto-style" style="min-width: 12.5rem">
                      <q-item
                      v-for="page in menu"
                      :key="page.id"
                      :to="page.to"
                      class="text-grey-5" 
                      clickable>
                        <q-item-section>{{ page.label }}</q-item-section>
                          <q-item-section avatar>
                            <q-icon color="warning" :name="page.icon" />
                            </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn> -->
              </div>
          </div>
<!-- Main page btn -->
      </q-toolbar>
    </q-header>
<!-- Footer Navigation - when screen px under 768 (Cellphones only) -->
    <q-footer class="flex flex-center fixed-bottom">
      <q-tabs>
        <q-route-tab
          v-for="nav in navigation"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label.toLowerCase()"
          class="q-mt-xs"
          text-color="warning"
          color="bg-black"
          unelevated />
      </q-tabs>
    </q-footer>
<!-- Full screen Navigator (BP=767) - include all Usr favorite Recipes -->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="750"
      :width="120"
      bordered
      content-class="bg-black-10"
      class="border-right"
    >
   
    <q-item
    @click="$router.push('/main')"
    clickable class="q-m-none">
     <q-img
          class="flex flex-center"
          src="~assets/logof.png"
        />
        </q-item>
      <q-list dark>
<!-- Array for all Favorite Recipes -->
        <q-item 
          class="text-grey-4 q-mt-xl"
          exact
          clickable
          @click="$router.push('/myRecipes')"> 
       
          <q-item-section class="text-center">
             <q-icon class="menu-btn" name="o_bookmarks" color="warning" text-color="black"/>
            <p class="subtitle" color="warning">Favorites</p>
          </q-item-section>
        </q-item>


              <q-item 
          class="text-grey-4 q-mt-xl"
          exact
          clickable
          @click="$router.push('/categories')"> 
       
          <q-item-section class="text-center">
             <q-icon name="o_category" class="menu-btn" color="warning" />
           <p class="subtitle" color="warning">Categories</p>
          </q-item-section>
        </q-item>
              <q-item 
          class="text-grey-4 q-mt-xl"
          exact
          clickable
          @click="logout();$router.push('/logout')"> 
       
          <q-item-section class="text-center">
             <q-icon name="o_logout" class="menu-btn" color="warning" />
           <p class="subtitle" color="warning">Logout</p>
          </q-item-section>
        </q-item>
        <!-- <q-item
          v-for="rec in myFavoriveRecipes"
          :key="rec.label"
          :to="rec.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="rec.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ rec.label }}</q-item-label>
          </q-item-section>
        <q-item-section side>
          <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="warning"
          icon="clear"/>
        </q-item-section>
        </q-item> -->
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import { mapGetters } from "vuex";
export default {
  name: 'MainLayout',
  data () {
    return {
      name:'',
      leftDrawerOpen: this.$q.platform.is.desktop,
      search: '',
      windowWidth:window.innerWidth,
      menu: [
        {
          id: 0,
          label: 'home',
          icon: 'home',
          to: '/main'
        },
        {
          id: 1,
          label: 'favorites',
          icon: 'o_bookmarks',
          to: '/myRecipes'
        },
        {
          id: 2,
          label: 'Log Out',
          icon: 'logout',
          to: '/logout'
        },
        // {
        //   id: 3,
        //   label: 'Help & Feedback',
        //   icon: 'help',
        //   to: '/helpAndFeedback'
        // }
      ],
  
      navigation: [
        {
          id: 1,
          label: 'Favorites',
          icon: 'o_bookmarks',
          to: 'myRecipes'
        },
         {
          id: 2,
          label: 'Home',
          icon: 'home',
          to: 'main'
        },
        {
          id: 3,
          label: 'Logout',
          icon: 'logout',
          to: '/logout' 
        }
      ]
    }
  },
  components: {
    search: require('components/search.vue').default
  },
  mounted(){
      this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  computed:{
   ...mapGetters(["getUserName"]),
  },
  methods: {
    openURL,
       onResize() {
      this.windowWidth = window.innerWidth
    },
    logout(){
      this.$store.dispatch('logout')
    }

  
  }
}
</script>

<style lang="scss">
 @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
      color: #ffd82c !important;

    }
  }


  .q-tab{
    text-transform:lowercase !important;
  }

  .q-tab--full {
    min-height: 4rem;
}
  .border-left{
      border-left: linear-gradient(90deg, #f6d365 0%, #fda085 100%);

  }
  .menu-btn{
font-size: 3.5rem;
  margin: 0;
  margin-left: 0.7rem;
  }
  .auto-style {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: auto;
  }
  .q-footer{
    position: fixed !important;
      background-image: linear-gradient(120deg, #424242 0%, #201d1c 100%);
    
      opacity: 0.96;
  }
  .header {
    z-index: 999999;
    height: 100px;
    margin: auto;
    padding: 20px;
  }
  .subtitle{
    margin: 0;
    margin-top:0.6rem;
    font-size: 1.1rem;
  }
  .q-menu{
   
    z-index: 999999;
  }


  body.body--dark {
    color: #fff;
    background: #050503 ;
}
</style>
