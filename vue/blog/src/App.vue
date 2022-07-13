<template>
  <navbar-ui></navbar-ui>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import NavbarUi from '@/components/UI/NavbarUi'

export default {
  components: {
    NavbarUi
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
