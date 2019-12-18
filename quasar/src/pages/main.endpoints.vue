<template>
  <div>
    <div v-if="items.length === 0">
      <h3>Looks empty here, you should add something...</h3>
    </div>

    <div v-if="!_id">
      <item-list :list="items"></item-list>
    </div>

    <div v-if="_id">Single room</div>
  </div>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return {
      items: JSON.parse(window.localStorage.getItem("items"))["endpoints"] || []
    };
  },
  mounted() {
    console.log(this.items);
  }
};
</script>
