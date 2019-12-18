<template>
  <div class="fixed-center text-center">
    <p>
      <img src="~assets/sad.svg" style="width:30vw;max-width:150px;" />
    </p>
    <div class="text-faded">
      <h4>Page not found</h4>
      <h6>(404)</h6>
    </div>
    <q-btn color="secondary" style="width:200px;" to="/" label="Go back" />
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
