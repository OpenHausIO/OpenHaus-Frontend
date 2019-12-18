<template>
  <div>
    <span>{{_id}}</span>
    <div v-if="items.length === 0">
      <h3>Looks empty here, you should add something...</h3>
    </div>

    <item-list :list="items"></item-list>
  </div>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return {
      items: JSON.parse(window.localStorage.getItem("items"))["endpoints"]
    };
  },
  mounted() {
    console.log(this.items);
  }
};
</script>
