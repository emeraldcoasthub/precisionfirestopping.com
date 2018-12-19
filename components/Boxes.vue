<template>
  <b-container>
    <b-row>
        <b-col v-for="box in boxes" v-bind:key="box">
          <b-card 
          :title="box.title"
          class="text-center mt-5">
            <p class="card-text">
              {{ box.text }}
            </p>
            <b-button
            variant="danger"
            >Find out more</b-button>
          </b-card>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Boxes",
  data() {
    return {
    }
  }
}
</script>
