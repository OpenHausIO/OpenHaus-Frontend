<template>
  <div>
    <h3>Räume</h3>
Add sub-rouer/view ?
    <div class="container-fluid">
      <div class="row">
        <router-link
          tag="div"
          :to="'./' + item._id"
          class="col-md-3 col-sm-12"
          v-for="item in items"
          :key="item._id"
          append
        >
          <h6>{{item.name}}</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          _id: "1",
          name: "Wohnzimmer",
          icon: "fa-couch"
        },
        {
          _id: "2",
          name: "schlafzimmer",
          icon: "fa-bed"
        },

        {
          _id: "3",
          name: "schlafzimmer",
          icon: "fa-bed"
        },

        {
          _id: "4",
          name: "schlafzimmer",
          icon: "fa-bed"
        },
        {
          _id: "5",
          name: "schlafzimmer",
          icon: "fa-bed"
        },

        {
          _id: "6",
          name: "schlafzimmer",
          icon: "fa-bed"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>