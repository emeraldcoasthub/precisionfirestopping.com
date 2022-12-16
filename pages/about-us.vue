<template>
  <div id="home">
    <div class="container mt-3">
      <h1 class="text-center mt-5 mb-5">{{ pageTitle }}</h1>
      <b-breadcrumb :items="items" />
      <b-row>
        <b-col cols="12" md="8">
          <h2>Life Safety Is Our Goal</h2>
          <p>
            Precision Firestopping is a family owned and operated company with
            over 10 years experience in the commercial field of firestopping.
            Our goal is to provide performance, product and service that will
            consistently exceed our client expectations. In the area of
            Commercial Construction, we specialize in firestopping, acoustical
            sealants, all caulking and weather proofing. We have extensive
            knowledge and experience in working with General Contractors, Sub
            Contractors, Project Managers, Hospital Administrators and any other
            form of Management. We are committed to our clients in providing
            high quality service, price and product. You will save time and
            money by letting us navigate this process for you.
          </p>
          <div class="mt-2">
            <ul>
              <li v-for="list in lists" v-bind:key="list.id">
                {{ list.list }}
              </li>
            </ul>
          </div>
          <div class="mt-2">
            <h3>Thought Penetration Firestopping</h3>
            <ul>
              <li>Systems Piping</li>
              <li>
                Through-penetrations are our specialty. Precision Firestopping
                can provide any types of systems or "Engineering Judgments"
                necessary to complete the most complicated projects.
              </li>
              <li>Single and multiple rigid and flex conduit</li>
              <li>Buss duct</li>
              <li>Cable tray (steel or aluminum)</li>
              <li>Fiber Optic gutter (PVC)</li>
              <li>Outlet boxes</li>
              <li>Wireway</li>
              <li>Mechanical Systems Piping</li>
              <li>
                Single and multiple metallic pipe (steel, cast iron, etc.)
              </li>
              <li>Non-metallic pipes (PVC, ABS, PP, PVDF, FRP, etc)</li>
              <li>Insulated pipe (glass fiber, molded plastic, Foam Glass)</li>
              <li>Non-dampered HVAC duct (round, square or rectangular)</li>
              <li>Combination Systems Piping</li>
              <li>
                Block-out situations including numerous mixed penetrating items
              </li>
              <li>
                Shaft Alternative for Grease &amp; Air Ducts: SFS installs the
                newest, fully encapsulated, wrap systems. These systems are
                mandated by code as gypsum shafts cannot pass the testing.
              </li>
            </ul>
          </div>
        </b-col>
        <b-col cols="12" md="4">
          <h3>Who We Are</h3>
          <p>
            We are Servicing the Florida Panhandle and surrounding areas. If you
            would like for us to give you an estimate for any current or future
            projects feel free to contact us, we will be happy to assist you.
          </p>
          <b-button href="link" variant="primary" block size="lg"
            >Bid Request</b-button
          >
          <h3 class="mt-5">What You Get From Us</h3>
          <p>
            Performing large scale and complex projects requires maintaining the
            highest standards of quality.
          </p>
          <p>Our organization is built on these principles:</p>
          <ul>
            <li>
              Quality People<br />
              <small>Motivated and trained installers.</small>
            </li>
            <li>
              Quality Process<br />
              <small
                >Properly managed from the initial work and safety planning,
                down to the completed project.</small
              >
            </li>
            <li>
              Quality Products<br />
              <small
                >We would only use it, if we would use it in our own
                house.</small
              >
            </li>
            <li>
              Quality Relationships<br />
              <small
                >With workers, supervisors, project management, architects,
                administrators and owners.</small
              >
            </li>
          </ul>
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
          content: `Precision Firestopping is a family owned and operated company with over 10 years experience in the commercial field of firestopping.`,
        },
      ],
    }
  },
  data() {
    return {
      pageTitle: 'About Us',
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Firestopping',
          href: '/firestopping',
        },
        {
          text: 'About Us',
          href: '/firestopping/about',
        },
      ],
      lists: [
        {
          id: 1,
          list: 'Proper Training',
        },
        {
          id: 2,
          list: 'Experienced Installers',
        },
        {
          id: 3,
          list: 'Range of Expertise',
        },
        {
          id: 4,
          list: 'Quality Workmanship',
        },
        {
          id: 5,
          list: 'Team Approach',
        },
        {
          id: 6,
          list: 'Project Management Excellence',
        },
        {
          id: 7,
          list: 'Competitive Prices',
        },
        {
          id: 8,
          list: 'Strive for Perfection',
        },
        {
          id: 9,
          list: 'Fire Protection Specialists',
        },
        {
          id: 10,
          list: "We don't come with problems, we come with solutions",
        },
      ],
    }
  },
}
</script>

<style></style>
