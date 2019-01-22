<template>
  <div id="navigation">
    <b-container>
      <b-navbar class="sticky-top" toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/"><img src="@/assets/logo.png"></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Firestopping">
              <b-dropdown-item href="/firestopping">Firestopping</b-dropdown-item>
              <b-dropdown-item href="/about-us">About Us</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/contact">Contact</b-nav-item>
          </b-navbar-nav>

      </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<style>
#navigation {
  background-color: #343A40;
}
</style>