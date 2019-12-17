<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar color="primary">
        <!--
    For Toolbar title, we use
    QToolbarTitle component
        -->
        <q-toolbar-title></q-toolbar-title>

        <!--
    In a Toolbar, buttons are best
    configured as "flat, round, dense" and with an icon,
    but any button will do
        -->

        <q-separator dark vertical />
        <q-btn stretch flat label="Home" @click="$router.push('/home')" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Room's" @click="$router.push('/rooms')" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Device's" @click="$router.push('/devices')" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Scene's" @click="$router.push('/scenes')" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Endpoint's" @click="$router.push('/endpoints')" />
        <q-separator dark vertical />
        <q-btn streach flat icon="menu" @click="right = !right" />
      </q-toolbar>
      <!--
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>-->
    </q-header>

    <q-drawer v-model="right" side="right" overlay bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon
                :name="$q.fullscreen.isActive ? 'fas fa-compress-arrows-alt' : 'fas fa-compress'"
              />
            </q-item-section>
            <q-item-section>
              <q-btn stretch flat no-hover @click="toggleFullscreen();">Fullscreen</q-btn>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section avatar>
              <q-icon name="fas fa-sign-out-alt" />
            </q-item-section>
            <q-item-section>
              <q-btn stretch flat no-hover label="Logout" v-go-back="'/auth/logout'" />
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section avatar>
              <q-icon name="fas fa-sliders-h" />
            </q-item-section>
            <q-item-section>
              <q-btn stretch flat no-hover>Settings</q-btn>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section avatar>
              <q-icon name="fas fa-cogs" />
            </q-item-section>
            <q-item-section>
              <q-btn stretch flat no-hover @click="$router.push('/admin')">Administration</q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false
    };
  },
  methods: {
    toggleFullscreen() {
      this.$q.fullscreen.toggle();
    }
  },
  watch: {
    "$q.fullscreen.isActive"(val) {
      console.log(val ? "In fullscreen now" : "Exited fullscreen");
    }
  }
};
</script>