<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card :title="title" class="mb-3">
          <p>{{ text }}</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section',
  props: ['title', 'text'],
}
</script>
