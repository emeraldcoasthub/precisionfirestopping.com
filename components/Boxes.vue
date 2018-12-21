<template>
  <b-col>
    <b-card 
    :title="title"
    class="text-center mt-5">
      <p class="card-text">
        {{ text }}
      </p>
      <b-button
      :href="link"
      variant="danger"
      >Find out more</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "Boxes",
  props: [
    'title',
    'text',
    'link'
  ],
  data() {}
}
</script>
