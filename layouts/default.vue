<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/"><img src="@/assets/logo.png"></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
    <nuxt/>
  </div>
</template>

<style>

</style>
