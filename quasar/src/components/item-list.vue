<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="row">
      <!--<div class="">-->
      <q-card
        flat
        bordered
        clickable
        @click="navigate(item)"
        v-for="item in list"
        v-bind:key="item._id"
        class="text-center col-md-3 col-sm-12"
      >
        <q-card-section>
          <div class="text-h3">
            <q-icon :name="item.icon || 'fas fa-question-circle'" />
          </div>
          <div class="text-h6">{{item.name}}</div>
        </q-card-section>

        <q-card-section v-if="item.hasOwnProperty('floor')">Floor: {{item.floor}}</q-card-section>
        <q-card-section v-if="item.hasOwnProperty('number')">Floor: {{item.number}}</q-card-section>
      </q-card>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    navigate(item) {
      console.log("location changed");
      window.location.href = `./#${this.$route.path}/${item._id}`;
    }
  },
  created() {
    console.log(this.$route, this.$router);
    this.url = window.location;
  },
  mounted() {
    console.log(this.list);
  }
};
</script>
