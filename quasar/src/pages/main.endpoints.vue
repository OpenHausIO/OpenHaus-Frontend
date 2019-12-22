<template>
  <div>
    <div v-if="items.length === 0">
      <h3>Looks empty here, you should add something...</h3>
    </div>

    <div v-if="!_id">
      <item-list :list="items"></item-list>
    </div>

    <div v-if="_id">
      <endpoint :data="item"></endpoint>
    </div>
  </div>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return {
      items:
        JSON.parse(window.localStorage.getItem("items"))["endpoints"] || [],
      item: null
    };
  },
  updated() {
    if (this._id) {
      this.item = this.items.find(item => {
        return item._id === this._id;
      });
    }
  }
};
</script>
