<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-icon icon="menu-button" variant="light"></b-icon>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <ProductVue /> -->
  </div>
</template>
<script>
// import ProductVue from "../components/product/Product.vue";
export default {
  components: {
    // ProductVue,
  },
};
</script>
