<template>
<div id="home">
  <div class="container mt-3">
    <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
    <b-breadcrumb :items="items" />
    <b-row>
      <b-col class="mt-3">
        <h2>Our Philosophy</h2>
        <p class="mt-3">
          We work every day to assure safety for our employees in proper personal
            protective equipment (PPE) and proper tools for the job we are doing.
        </p>
        <h2 class="mt-5">Our Safety Team</h2>
        <p class="mt-3">
          Every employee as Precision Firestopping is a member of our safety team.
          Just to assure proper safety measures, myself and our safety rep routinely
          pop in on current projects to inspect on-site safety management.
        </p>
        <h2 class="mt-5">Safety Measures</h2>
        <p class="mt-3">
          At Precision Firestopping, we want all of our employees and any other
          employees on the job to go home safely to their families every day.
          We take pride in our obligation to our employees and our clients to
          steadily improve our safety measures on the job. We take safety very
          seriously. Every employee is trained with the latest OSHA standards.
        </p>
        <h4 class="mt-3">Other Safety Measures</h4>
        <p class="mt-3">
          <ul>
            <li>Drug-free workplace</li>
            <li>Safety training for employees on a regular basis</li>
            <li>Safety programs</li>
            <li>Safety representative to wall all projects</li>
          </ul>
        </p>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>


export default {
  components: {

  },
  head () {
    let title = this.pageTitle;
    return {
      title: title,
      meta: [{
          hid: `description`,
          name: 'description',
          content: `We work every day to assure safety for our employees in proper personal protective equipment (PPE) and proper tools for the job we are doing.`
        }
      ]
    }
  },
  data () {
    return {
      pageTitle: 'Safety',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Safety',
          href: '/safety'
        }
      ]
    }
  }
}
</script>

<style>

</style>
