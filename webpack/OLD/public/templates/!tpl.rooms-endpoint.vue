<template>
  <div class="row">
    <h3>Control {{device}}</h3>
  </div>
</template>

<script>
module.exports = {
  props: ["device"],
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    console.log("created");
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
    }
  }
};
</script>

<style scoped>
</style>