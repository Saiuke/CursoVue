<template>
  <v-app>
    <v-navigation-drawer app>
          <app-menu/>
    </v-navigation-drawer>
    <v-app-bar app>
        <app-toolbar/>
    </v-app-bar>

    <v-content>
      <app-carousel />
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>

import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Menu from './Menu.vue'
import Toolbar from './Toolbar.vue'

export default {
  components: {
    'app-footer': Footer,
    'app-carousel': Carousel,
    'app-menu': Menu,
    'app-toolbar': Toolbar,

  }
}
</script>
