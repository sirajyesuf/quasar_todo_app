<template>
  <q-layout view="hHr lpr fFr">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="absolute-center">
          Todo  App
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab to= '/' icon="list" label="Todos" />
        <q-route-tab to='/settings' icon="settings" label="Settings" />
      </q-tabs>
    </q-footer>

    <q-drawer
      :width="150"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        Navigations 
        </q-item-label>
  <q-item
    clickable
    exact 
    to="/"
  >
    <q-item-section
      avatar
    >
      <q-icon name="list" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Todos</q-item-label>
    </q-item-section>
  </q-item>
    <q-item
    clickable
    exact
    to="/settings"
  >
    <q-item-section
      avatar
    >
      <q-icon name="settings" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Settings</q-item-label>
    </q-item-section>
  </q-item>
      </q-list>
    </q-drawer> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todos',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
