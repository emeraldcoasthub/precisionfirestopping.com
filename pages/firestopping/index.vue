<template>
<div id="home">
  <div class="container mt-3">
    <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
    <b-breadcrumb :items="items" />
      <b-row>
        <b-col cols="12" md="8">
          <h2>What is firestopping?</h2>
          <p>
            Firestopping in simple terms is the sealing walls, floors, and ceiling and using products that 
            stop combustion in order to make fire rated walls that stop the spread of fire. Techniques and 
            materials used for firestopping have bee tested and approved specifically for this use. The 
            technique of firestopping is a process that takes expertise in the area of fire prevention and 
            is something that your general contractor can't provide. You need a specialized firestopping 
            contractor and Precision Firestopping can provide this service to you.
          </p>
          <h2>Installation in your commercial building</h2>
          <img class="img-responsive responsive float-left p-2" width="50%" src="/firestopping.jpg" />
          <p>
            The firestops installed in your commercial building help to prevent the spread of flames, 
            toxic smoke, and deadly gases to other areas of your building, thus not only protecting the 
            other areas of your property, but also the occupants of the building. These firestopping systems 
            include areas of plumbing, electrical, ventilation, ducts, and sealants.
          </p>
        </b-col>
        <b-col cols="12" md="4">
          <h2>About Firestopping</h2>
          <p>
            We can perform a wide variety of commercial waterproofing services in new construction, 
            renovations, and repairs to existing buildings.
          </p>
          <p>
            We use the best products and practices in the business so when it comes to masonry or 
            concrete construction think about us to do your exterior or interior waterproofing systems.
          </p>
          <ul>
            <li>Safety</li>
            <li>Quality</li>
            <li>Professionalism</li>
            <li>High Performance</li>
            <li>Cost Effective</li>
            <li>Competitive Pricing</li>
            <li>Experience</li>
            <li>Team Work</li>
            <li>Manufacturer Trained Installers</li>
            <li>Knowledgeable In Construction Project Management</li>
          </ul>
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
          content: `Learn about how we stop fires before they start. The firestops installed in your commercial building help to prevent the spread of flames, toxic smoke, and deadly gases to other areas of your building, thus not only protecting the other areas of your property, but also the occupants of the building. `
        }
      ]
    }
  },
  data () {
    return {
      pageTitle: 'About Firestopping',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Firestopping',
          href: '/firestopping'
        }
      ]
    }
  }
}
</script>

<style>

</style>
