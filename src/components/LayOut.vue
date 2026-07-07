<template>
  <v-layout class="lay">
    <NavBar />
    <v-main>
      <slot></slot>
    </v-main>
    <Footer />
  </v-layout>
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>
<style scoped>
#navres {
  display: none;
}
.lay {
  diplay: flex;
  flex-flow: column;
}
.lay .v-main {
  margin-bottom: 200px;
}
body {
  display: block;
}
.v-main[data-v-ff182e94] {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 100px !important;
  padding-bottom: 0px;
  margin: 0 !important;
  flex: 1 0 auto;
  max-width: 100%;
}

/*/tablet/*/
@media (max-width: 991px) {
  #navres {
    display: none;
  }
  .v-main[data-v-ff182e94] {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100%;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #navres {
    display: flex;
  }
  .v-main[data-v-ff182e94] {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 100px !important;
    padding-bottom: 0px;
    margin: 0 !important;
    max-width: 100%;
  }
}
</style>
