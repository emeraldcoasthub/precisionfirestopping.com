<template>
<div id="home">
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
  <b-container>
    <b-row>
      <Boxes v-for="box in boxes" v-bind:key="box.title" :title="box.title" :text="box.text" :link="box.link" />
    </b-row>
  </b-container>
</div>
</template>

<script>
import Boxes from '@/components/Boxes.vue';

export default {
  components: {
    Boxes
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      boxes: [
        {
          title: 'Fire Stopping',
          text: 'How does it work?',
          link: '/test'
        },
        {
          title: 'Our Services',
          text: 'Full range of firestopping',
          link: ''
        },
        {
          title: 'Bid Request',
          text: 'Inexpensive peace of mind',
          link: ''
        },
      ]
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
