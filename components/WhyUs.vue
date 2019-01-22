<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card
          title="Why us?"
          class="mb-3"
          >
          <li v-for="item in items" v-bind:key="item.id" >{{ item.item }}</li>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Section",
  props: [
    'title'
  ],
  data () {
    return {
      items: [
        { id: 1, item: 'Family owned and operated' },
        { id: 2, item: '10+ years Experience' },
        { id: 3, item: 'Competitive pricing' },
        { id: 4, item: 'Wide range of expertise' },
        { id: 5, item: 'Properly trained installers' },
        { id: 6, item: 'Quality workmanship' },
        { id: 7, item: 'Team approach' },
        { id: 8, item: 'Project management excellence' },
        { id: 9, item: 'On time and on budget' }
      ]
    }
  }
}
</script>
