<template>
  <div class="fit row wrap justify-center">
    <div class="col-3">
      <h4 class="q-mb-none">Einloggen</h4>

      <q-input label="E-Mail" hint="demo@open-haus.cloud" v-model="email" />

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
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    submit: function() {
      console.log("submit clicked", this.email);

      if (this.email == "demo@open-haus.cloud") {
        console.log("Set items");
        window.localStorage.setItem(
          "items",
          JSON.stringify({
            endpoints: [
              {
                _id: this.uuid(),
                name: "TV #1"
              },
              {
                _id: this.uuid(),
                name: "TV #2"
              },
              {
                _id: this.uuid(),
                name: "AV-Receiver - Zone 1"
              },
              {
                _id: this.uuid(),
                name: "AV-Receiver - Zone 2"
              }
            ],
            devices: [
              {
                _id: this.uuid(),
                name: "AV-Receiver"
              },
              {
                _id: this.uuid(),
                name: "TV #1"
              },
              {
                _id: this.uuid(),
                name: "TV #2"
              }
            ],
            rooms: [
              {
                _id: this.uuid(),
                name: "Living-room",
                icon: "fas fa-couch",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Bed-room #1",
                icon: "fas fa-bed",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Bed-room #2",
                icon: "fas fa-bed",
                floor: -1
              },
              {
                _id: this.uuid(),
                name: "Master Bed-room",
                icon: "fas fa-bed",
                floor: 1
              },
              {
                _id: this.uuid(),
                name: "Kitchen",
                icon: "fas fa-utensils",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Boilerroom",
                icon: "fas fa-fire-alt",
                floor: -1
              }
            ]
          })
        );
      }

      window.localStorage.setItem("token", Date.now());
      window.location.href = "/#/home";
    }
  }
};
</script>
