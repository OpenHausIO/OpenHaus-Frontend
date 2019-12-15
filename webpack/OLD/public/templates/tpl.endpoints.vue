<template>
  <div class="row">
    <div class="col-md-6 mr-0" v-for="(list, key) in rooms" v-bind:key="key">
      <h3 class="m-0">{{key}}</h3>
      <hr class="m-1" />

      <div class="row">
        <router-link
          :to="'/endpoints/'+endpoint._id"
          tag="div"
          class="col-4"
          v-for="endpoint in list"
          v-bind:key="endpoint._id"
        >
          <div class="card text-white bg-dark m-2">
            <div class="card-body p-1 text-center">
              <i class="fas p-3" :class="['fa-' + endpoint.icon]" style="font-size: 56px"></i>
              <h5>{{endpoint.name}}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      rooms: {}
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

      fetch("/api/endpoints?populate=room", {
        query: {
          populate: "room"
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              data.forEach(e => {
                if (!this.rooms[e.room.name]) {
                  //this.rooms[] = [];
                  Vue.set(this.rooms, e.room.name, []);
                }

                this.rooms[e.room.name].push(e);
              });

              console.log(this.rooms);

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