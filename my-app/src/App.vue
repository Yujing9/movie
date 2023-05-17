<template>
  <div id="app">
    <router-view></router-view>
    <ul>

        <router-link to="/films" custom v-slot="{ navigate, isActive}">
          <li @click="navigate" :class ="isActive ? 'active' : ''">
          电影</li>
        </router-link>
        <router-link to="/cinemas" custom v-slot="{ navigate, isActive}">
          <li @click="navigate" :class ="isActive ? 'active' : ''">
          影院</li></router-link>
          <router-link to="/center" custom v-slot="{ navigate, isActive}">
          <li @click="navigate" :class ="isActive ? 'active' : ''">
          我的</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
.active{
  color:red;
}

</style>
