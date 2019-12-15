<template>
  <div class="fit row wrap justify-center">
    <div class="col-3">
      <h4 class="q-mb-none">Einloggen</h4>

      <q-input label="E-Mail" hint="demo@open-haus.cloud" :dense="dense" v-model="email" />

      <q-input
        label="Password"
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        hint="Pa$$w0rd"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn color="primary" class="full-width q-mt-lg" @click="submit();" label="Absenden" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLogin",
  data: () => {
    return {
      isPwd: true,
      email: null,
      password: null
    };
  },
  methods: {
    submit: function() {
      /*
      if (this.email && this.password) {
        if (
          this.email === "demo@open-haus.cloud" &&
          this.password === "Pa$$w0rd" &&
          window.location.hostname === "open-haus.cloud"
        ) {
          console.log("demo login ");
        } else {*/
      console.log("submit clicked");
      window.localStorage.setItem("token", Date.now());
      window.location.href = "/";
      /*
        }
      } else {
        console.log("Display error message");
      }*/
    }
  }
};
</script>
