<template>
<!-- view code resp on how to layout Shown -->
  <q-layout view="lHh LpR lfr">
<!-- Header -->
<div class="auto-style">
    <q-header class="header" elevated>
      <q-toolbar class="bg-black-10 col-md-4">
<!-- Search - available in search component -->    
          <search/>
          <!-- Menu  -->
          <div class="q-pa-md">
              <div class="q-gutter-md">
                <q-btn color="orange-8" style="width: 50px;" icon="menu">
                  <q-menu fit>
                    <q-list class="auto-style" style="min-width: 300px">
                      <q-item
                      v-for="page in menu"
                      :key="page.id"
                      :to="page.to"
                      class="text-grey-5" 
                      clickable>
                        <q-item-section>{{ page.label }}</q-item-section>
                          <q-item-section avatar>
                            <q-icon color="orange" :name="page.icon" />
                            </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
          </div>
<!-- Main page btn -->
      </q-toolbar>
    </q-header>
<!-- Footer Navigation - when screen px under 768 (Cellphones only) -->
    <q-footer class="flex flex-center">
      <q-tabs>
        <q-route-tab
          v-for="nav in navigation"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          class="q-mt-xs"
          text-color="orange-8"
          color="bg-black"
          unelevated />
      </q-tabs>
    </q-footer>
<!-- Full screen Navigator (BP=767) - include all Usr favorite Recipes -->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="300"
      bordered
      content-class="bg-black-10"
    >
    <br>
    <q-item
    to="/main"
    clickable>
     <q-img
          class="flex flex-center"
          src="~assets/logof.png"
        />
        </q-item>
      <q-list dark>
        <q-item-label class="flex flex-center"></q-item-label>
<!-- Array for all Favorite Recipes -->
        <q-item
          to="/myRecipes"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section>
            <q-item-label><h6 class="text-orange flex flex-center">Liked Recipes <q-icon name="favorite" color="orange"/></h6></q-item-label>
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
          color="orange"
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
import { openURL } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      search: '',
      menu: [
        {
          id: 1,
          label: 'My Recipes',
          icon: 'favorite',
          to: '/myRecipes'
        },
        {
          id: 2,
          label: 'See your profile',
          icon: 'face',
          to: '/myProfile'
        },
        {
          id: 3,
          label: 'Messenger',
          icon: 'mail',
          to: '/myMessenger'
        },
        {
          id: 4,
          label: 'Notifications',
          icon: 'notifications_active',
          to: '/myNotifications'
        },
        {
          id: 5,
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          id: 6,
          label: 'Log Out',
          icon: 'logout',
          to: '/'
        },
        {
          id: 7,
          label: 'Help & Feedback',
          icon: 'help',
          to: '/helpAndFeedback'
        }
      ],
      myFavoriveRecipes: [
        {
          id: 1,
          label: 'Best Waffels',
          icon: 'local_dining',
          to: '/myRecipes'
        },
        {
          id: 2,
          label: 'Best Italian Homemade Pizza',
          icon: 'local_dining',
          to: '/myRecipes'
        }
      ],
      navigation: [
        {
          id: 1,
          label: 'My Recipes',
          icon: 'favorite',
          to: '/myRecipes'
        },
         {
          id: 3,
          label: 'Home',
          icon: 'home',
          to: '/main'
        },
        {
          id: 2,
          label: 'Logout',
          icon: 'logout',
          to: '/'
        }
      ]
    }
  },
  components: {
    search: require('components/search.vue').default
  },
  methods: {
    openURL,
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Do you really want to delete this item?',
        massage: 'Do you really want to delete this item?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        console.log('deleted')
      })
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
      color: #c18523 !important;
    }
  }
  .auto-style {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: auto;
  }
  .header {
    height: 100px;
    margin: auto;
    padding: 20px;
  }
</style>
