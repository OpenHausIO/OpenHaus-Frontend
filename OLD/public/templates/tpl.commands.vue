<template>
  <div class="row">
    <div class="col-12">
      <h1>Commands page</h1>
      <commands v-bind:commands="commands" v-bind:endpoint="endpoint"></commands>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["_id"],
  data() {
    return {
      loading: false,
      error: null,
      commands: [],
      endpoint: {}
    };
  },
  created() {
    console.log("created");
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = null;
      this.endpoint = {};
      this.loading = true;

      fetch(`/api/endpoints/${this._id}`, {
        //method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              this.endpoint = data;
              this.commands = data.commands;
              this.loading = false;
            });
          }
        })
        .catch(e => {
          console.log(e);
          this.loading = false;
          this.error = e.toString();
        });
    }
  }
};
</script>

<style scoped>
</style>