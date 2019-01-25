<template>
<div id="home">
  <div class="container mt-3">
    <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
    <b-breadcrumb :items="items" />
    <b-row class="justify-content-center">
      <b-col cols="11" md="6" class="mt-3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:"
                        label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Enter email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Your Name:"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Enter name">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Food:"
                        label-for="exampleInput3">
            <b-form-select id="exampleInput3"
                          :options="foods"
                          required
                          v-model="form.food">
            </b-form-select>
          </b-form-group>
          <b-button type="submit" size="lg" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>


export default {
  components: {

  },
  data () {
    return {
      pageTitle: 'Bid Request Form',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Bid Request Form',
          href: '/bid-request'
        }
      ],
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style>

</style>
