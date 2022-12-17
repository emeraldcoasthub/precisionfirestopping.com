<template>
  <div id="navigation">
    <b-container>
      <b-navbar
        exact
        class="sticky-top"
        toggleable="md"
        type="dark"
        variant="dark"
      >
        <b-navbar-toggle exact target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/"
          ><img src="@/assets/logo.png"
        /></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav style="margin-left: auto">
            <b-nav-item exact to="/">Home</b-nav-item>
            <b-nav-item-dropdown exact text="Firestopping">
              <b-dropdown-item exact to="/firestopping"
                >Firestopping</b-dropdown-item
              >
              <b-dropdown-item exact to="/about-us">About Us</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item exact to="/contact">Contact</b-nav-item>
            <b-nav-item exact to="/services">Services</b-nav-item>
            <b-nav-item exact to="/safety">Safety</b-nav-item>
            <b-nav-item exact to="/bid-request">Bid Request</b-nav-item>
            <b-nav-item
              exact
              targer="new"
              href="https://www.facebook.com/lifesafetyfirestopping/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<style>
#navigation {
  background-color: #212529;
}
</style>
