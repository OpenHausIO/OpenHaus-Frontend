<template>
  <div class="row">
    <router-link
      :to="'/rooms/'+item._id"
      tag="div"
      class="col-sm-3 col-md-3"
      v-for="item in post"
      v-bind:key="item._id"
    >
      <div class="card text-white bg-dark m-2">
        <div class="card-body p-1 text-center">
          <i class="fas p-3" :class="['fa-' + item.icon]" style="font-size: 56px"></i>
          <h3>{{item.name}}</h3>
          <h6>Etage: {{item.floor}}</h6>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
module.exports = {
  //props: ["_id"],
  data() {
    return {
      loading: false,
      post: null,
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
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper

      fetch("/api/rooms?populate=room", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              this.post = data;
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