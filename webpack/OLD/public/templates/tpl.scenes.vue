<template>
  <div class="row">
    <h1>Szenen</h1>
    <button v-for="scene in list" v-bind:key="scene._id" v-on:click="run(scene)">{{scene.name}}</button>
  </div>
</template>

<script>
module.exports = {
  //props: ["_id"],
  data() {
    return {
      loading: false,
      list: null,
      error: null,
      props: []
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
    run(scene) {
      fetch(`/api/scenes/${scene._id}/run`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              this.list = data;
              this.loading = false;
            });
          }
        })
        .catch(e => {
          console.log(e);
          this.loading = false;
          this.error = e.toString();
        });
    },
    fetchData() {
      this.error = null;
      this.list = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper

      fetch("/api/scenes", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              this.list = data;
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