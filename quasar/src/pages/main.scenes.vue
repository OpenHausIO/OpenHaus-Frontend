<template>
  <div>
    <span>{{_id}}</span>

    <div v-if="items.length === 0">
      <div class="fixed-center text-center">
        <p>
          <img src="~assets/sad.svg" style="width:30vw;max-width:150px;" />
        </p>
        <div class="text-faded">
          <h4>Looks empty here...</h4>
          <h6>You should add something!</h6>
        </div>
        <q-btn color="secondary" stretch no-hover @click="$router.push('/admin')">Administration</q-btn>
      </div>
    </div>

    <div v-if="!_id">
      <item-list :list="items"></item-list>
    </div>

    <div v-if="_id">Single</div>
  </div>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return {
      items: JSON.parse(window.localStorage.getItem("items"))["scenes"] || []
    };
  },
  mounted() {
    console.log(this.items);
  }
};
</script>
