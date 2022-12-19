<template>
  <b-col cols="12" md="4">
    <b-card :title="title" class="text-center mb-5">
      <p class="card-text">
        {{ text }}
      </p>
      <b-button :href="link" variant="primary">Find out more</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'Boxes',
  props: ['title', 'text', 'link'],
}
</script>
