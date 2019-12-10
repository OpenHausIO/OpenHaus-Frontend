<template>
  <div>
    <!-- NAVIGATION -->
    <navigation></navigation>
    <!-- NAVIGATION -->

    <!-- VIEW -->
    <div class="container-fluid" style="margin-top: 70px">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <!-- VIEW -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>