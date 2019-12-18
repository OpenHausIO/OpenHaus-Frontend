<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      bordered
      clickable
      to="./room._id"
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
  mounted() {
    console.log(this.list);
  }
};
</script>
