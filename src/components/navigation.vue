<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top p-0">
      <button onclick="window.history.back()" class="btn m-0 no-outline">
        <i class="fas fa-chevron-left"></i>
        <span>Zurück</span>
      </button>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--https://getbootstrap.com/docs/4.0/utilities/display/#notation-->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100">
          <li style="width: 1px; background-color: rgba(0, 0, 0, .2)"></li>

          <li class="nav-item col">
            <router-link to="/home" class="nav-link">
              <i class="fas fa-home d-inline fa-lg m-auto d-md-block"></i>
              <span class="m-auto d-md-block text-center">Home</span>
            </router-link>
          </li>

          <li style="width: 1px; background-color: rgba(0, 0, 0, .2)"></li>

          <li class="nav-item col">
            <router-link to="/rooms" class="nav-link">
              <i class="fas fa-person-booth d-inline fa-lg m-auto d-md-block"></i>
              <span class="m-auto d-md-block text-center">Room's</span>
            </router-link>
          </li>

          <li style="width: 1px; background-color: rgba(0, 0, 0, .2)"></li>

          <li class="nav-item col">
            <router-link to="/scenes" class="nav-link">
              <i class="fas fa-layer-group d-inline fa-lg m-auto d-md-block"></i>
              <span class="m-auto d-md-block text-center">Scene's</span>
            </router-link>
          </li>

          <li style="width: 1px; background-color: rgba(0, 0, 0, .2)"></li>

          <li class="nav-item col">
            <router-link to="/endpoints" class="nav-link">
              <i class="fas fa-laptop-code d-inline fa-lg m-auto d-md-block"></i>
              <span class="m-auto d-md-block text-center">Endpoint's</span>
            </router-link>
          </li>

          <li style="width: 1px; background-color: rgba(0, 0, 0, .2)"></li>

          <li class="nav-item col">
            <router-link to="/dashboard" class="nav-link">
              <i class="fas fa-chart-line d-inline fa-lg m-auto d-md-block"></i>
              <span class="m-auto d-md-block text-center">Dashboard</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- NAVBAR -->
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