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
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-tv",
                name: "TV"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-tv",
                name: "TV"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-volume-up",
                name: "Audio Zone 1"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-volume-up",
                name: "Audio Zone 2"
              }
            ],
            devices: [
              {
                _id: this.uuid(),
                icon: "fas fa-music",
                name: "AV-Receiver"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-tv",
                name: "TV #1"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-tv",
                name: "TV #2"
              },
              {
                _id: this.uuid(),
                icon: "fab fa-raspberry-pi",
                name: "ZigBee Gateway"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-bars",
                name: "SPI Gateway #1"
              },
              {
                _id: this.uuid(),
                icon: "fas fa-bars",
                name: "SPI Gateway #2"
              }
            ],
            rooms: [
              {
                _id: this.uuid(),
                name: "Terrace",
                icon: "fas fa-chair",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Garden",
                icon: "fas fa-tree",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Garage",
                icon: "fas fa-warehouse",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Livingroom",
                icon: "fas fa-couch",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Bedroom #1",
                icon: "fas fa-bed",
                floor: 0
              },
              {
                _id: this.uuid(),
                name: "Bedroom #2",
                icon: "fas fa-bed",
                floor: -1
              },
              {
                _id: this.uuid(),
                name: "Master Bedroom",
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
              },
              {
                _id: this.uuid(),
                name: "Bathroom",
                icon: "fas fa-bath",
                floor: 1
              }
            ]
          })
        );

        window.localStorage.setItem("token", Date.now());
        window.location.href = "/#/home";
      } else {
        console.log("Fetch API");

        const API_URL = `${window.location.protocol}//${window.location.hostname}/api`;

        const headers = new Headers({
          "Content-Type": "application/json",
          "x-auth": window.localStorage.getItem("token")
        });

        const options = {
          method: "GET",
          cache: "no-cache",
          headers
        };

        Promise.all([
          fetch(`${API_URL}/rooms`, options),
          fetch(`${API_URL}/devices`, options),
          fetch(`${API_URL}/endpoints`, options),
          fetch(`${API_URL}/scenes`, options)
        ])
          .then(responses => {
            responses.map(response => {
              return response.json();
            });
          })
          .then(({ rooms, devices, endpoints, scenes }) => {
            window.localStorage.setItem(
              "items",
              JSON.stringify({
                rooms,
                devices,
                endpoints,
                scenes
              })
            );
          })
          .then(() => {
            console.log("Eingeloggt!");
            window.location.href = "/#/home";
          })
          .catch(e => {
            console.log(e);
            alert("API Fetch error...");
          });
      }
    }
  }
};
</script>
