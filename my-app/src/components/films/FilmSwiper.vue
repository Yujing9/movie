<template>
  <!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <slot></slot>
  </div>
  <div class="swiper-pagination"></div>

</div>
</template>
<script>

// Import Swiper Vue.js components
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  mounted () {
    new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
