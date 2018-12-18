<template>
  <b-container>
    <b-carousel 
      id="carousel1"
      class="mt-2"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="./slides/slide1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="./slides/slide2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="./slides/slide3.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="./slides/slide4.jpg"></b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>
