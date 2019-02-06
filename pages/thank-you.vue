<template>
  <div>
    <div class="container text-center mt-5">
      <h2>Thank you for contacting us</h2>
      <p>We'll get back to you as soon as possible.</p>
      <b-btn to="/" variant="primary">Back to the homepage</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Thank you',
      meta: [{
          hid: `description`,
          name: 'description',
          content: `Thank you for contacting Precision Firestopping.`
        }
      ]
    }
  },
}
</script>