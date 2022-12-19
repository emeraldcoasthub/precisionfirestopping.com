<template>
  <div id="home">
    <div class="container mt-3">
      <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
      <b-breadcrumb :items="items" />
      <b-row>
        <b-col class="mt-3">
          <h2 class="text-center">Our Promise To You</h2>
          <p class="mt-3">
            At Precision Firestopping we train all of our employees through
            manufacturer specifications and installation methods. We will work
            as a team to finish your project by any means necessary to get the
            job done efficiently, on time and on budget. All of Precision
            Firestopping employees will attend weekly Toolbox Safety Meetings to
            keep us up to date on the latest Safety requirements and guidelines.
            Life Safety is Our Goal, we can guarantee you quality work at a
            quality price and hopefully you will allow us to seal up any new
            Firewalls as well as repair any existing Firewalls to know the job
            is done correctly and will protect the people in your building if a
            fire was to break out.
          </p>
          <p>Services include:</p>
          <ul>
            <li>Construction Joint Firestopping</li>
            <li>Shaft Alternative for Grease &amp; Air Ducts</li>
            <li>Electrical Circuit Protection</li>
            <li>Plumbing and Mechanical Piping</li>
            <li>Sprinkler Systems Piping</li>
            <li>All Other Through Penetration Firestopping (Floor/Wall)</li>
            <li>Drywall Patchwork</li>
            <li>Mud and Tape Drywall Seams</li>
            <li>Bundling Cables to tie off (keep cables off ceiling grid)</li>
            <li>Smoke, Sound &amp; Air Movement Seals</li>
            <li>Open Junction Box Closure</li>
            <li>All Types of Draft Stopping</li>
            <li>
              All other forms of Specialty Firestopping that is required to
              carry Fire Ratings for Wall/Floors in Commercial Construction.
            </li>
          </ul>
          <h2 class="text-center mt-5">Construction Joint Firestopping</h2>
          <p class="mt-3">
            Precision Firestopping can provide cost-effective solutions to the
            dynamic requirements for rated construction joints. Solutions
            include silicone and elastomeric caulks as well as the latest stuff
            and spray applications.
          </p>
          <ul>
            <li>Floor and wall expansion joints</li>
            <li>
              Head of wall joints for concrete, CMU and gypsum applications
            </li>
            <li>Curtain-wall / perimeter gap</li>
          </ul>
          <p>Firestop Systems Installation Services:</p>
          <ul>
            <li>
              Submittal packages (UL Rated Systems/MSDS Sheets/Material Forms)
            </li>
            <li>
              Wall Stenciling/Labeling (If requested at an additional fee)
            </li>
            <li>
              Wall Penetration Tagging and Tag Log (If requested at an
              additional fee)
            </li>
            <li>Installation by registered Firestop/Containment Workers</li>
            <li>
              Interfacing with the General Contractor, Architect, Engineer and
              Hospital Administrators
            </li>
            <li>
              Penetration logs will include installer, penetration type,
              location, material, etc.
            </li>
          </ul>
          <h2 class="text-center mt-5 mb-3">Company Clients</h2>
          <b-row>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client1.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  Yarco Drywall
                </figcaption>
              </figure>
            </b-col>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client2.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  Henderson Electric
                </figcaption>
              </figure>
            </b-col>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client3.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  Emerald Bay Plumbing, Inc.
                </figcaption>
              </figure>
            </b-col>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client4.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  Comfort Systems USA, Southwest
                </figcaption>
              </figure>
            </b-col>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client5.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  Sauer Holdings, Inc.
                </figcaption>
              </figure>
            </b-col>
            <b-col class="mx-auto p-2 mx-3 my-3 text-center" cols="12" md="2">
              <figure class="figure">
                <img width="100%" src="client6.jpg" alt="Client" />
                <figcaption class="figure-caption text-center">
                  North Okaloosa Medical Center
                </figcaption>
              </figure>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    let title = this.pageTitle
    return {
      title: title,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: `At Precision Firestopping we train all of our employees through manufacturer specifications and installation methods.`,
        },
      ],
    }
  },
  data() {
    return {
      pageTitle: "Services",
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Services',
          href: '/services',
        },
      ],
    }
  },
}
</script>

<style></style>
