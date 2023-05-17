<template>
    <div>
        <film-swiper></film-swiper>
        <router-view></router-view>
    </div>
</template>
<script>
import filmSwiper from '@/components/films/FilmSwiper'

export default {
  data () {
    return {

    }
  },
  components: {
    filmSwiper
  }
}
</script>
