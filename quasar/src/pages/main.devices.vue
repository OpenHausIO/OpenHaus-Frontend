<template>
  <div>
    <span>{{_id}}</span>

    <div v-if="items.length === 0">
      <h3>Looks empty here, you should add something...</h3>
    </div>

    <div v-if="!_id">
      <item-list :list="items"></item-list>
    </div>

    <div v-if="_id">Single</div>

    <!--
    <div v-if="items.length > 0 && !_id" class="q-pa-md row items-start q-gutter-md">
      <q-card
        flat
        bordered
        clickable
        @click="$router.push(`/endpoints/${endpoint._id}`)"
        v-for="endpoint in items"
        v-bind:key="endpoint._id"
        class="col-2"
      >
        <q-card-section class="text-center">
          <q-icon name="fas fa-id-card text-h3" />
          <div class="text-h6 text-center">{{endpoint.name}}</div>
        </q-card-section>
      </q-card>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return {
      items: JSON.parse(window.localStorage.getItem("items"))["devices"] || []
    };
  },
  mounted() {
    console.log(this.items);
  }
};
</script>
