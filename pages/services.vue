<template>
<div id="home">
  <div class="container mt-3">
    <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
    <b-breadcrumb :items="items" />
    <b-row>
      <b-col class="mt-3">
        <h2 class="text-center">Contact Info</h2>
        <p class="mt-3">
          At Precision Firestopping we train all of our employees through manufacturer specifications
          and installation methods. We will work as a team to finish your project by any means 
          necessary to get the job done efficiently, on time and on budget. All of Precision 
          Firestopping employees will attend weekly Toolbox Safety Meetings to keep us up to date
          on the latest Safety requirements and guidelines. Life Safety is Our Goal, we can guarantee
          you quality work at a quality price and hopefully you will allow us to seal up any new 
          Firewalls as well as repair any existing Firewalls to know the job is done correctly and 
          will protect the people in your building if a fire was to break out.
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
  data () {
    return {
      pageTitle: 'Services',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Services',
          href: '/services'
        }
      ]
    }
  }
}
</script>

<style>

</style>
