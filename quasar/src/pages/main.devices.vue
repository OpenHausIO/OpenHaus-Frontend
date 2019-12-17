<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered clickable to="./room._id" v-for="device in items" v-bind:key="device._id">
      <q-card-section>
        <div class="text-h6">{{device.name}}</div>
      </q-card-section>

      <q-card-section>{{device.floor}}</q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: JSON.parse(window.localStorage.getItem("items"))["devices"]
    };
  },
  mounted() {
    console.log(this.items);
  }
};
</script>
