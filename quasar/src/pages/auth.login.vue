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
      <q-btn flat color="info" class="full-width q-mt-lg" to="./reset" label="Reset password" />
    </div>
  </div>
</template>

<script>
import { uuid, API_URL } from "../helper.js";

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
      console.log("submit clicked", this.email);

      if (this.email == "demo@open-haus.cloud") {
        console.log("Set items");
        window.localStorage.setItem(
          "items",
          JSON.stringify({
            endpoints: [
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "far fa-lightbulb",
                name: "Light"
              },
              {
                _id: uuid(),
                icon: "fas fa-tv",
                name: "TV"
              },
              {
                _id: uuid(),
                icon: "fas fa-tv",
                name: "TV"
              },
              {
                _id: uuid(),
                icon: "fas fa-volume-up",
                name: "Audio Zone 1"
              },
              {
                _id: uuid(),
                icon: "fas fa-volume-up",
                name: "Audio Zone 2"
              }
            ],
            devices: [
              {
                _id: uuid(),
                icon: "fas fa-music",
                name: "AV-Receiver"
              },
              {
                _id: uuid(),
                icon: "fas fa-tv",
                name: "TV #1"
              },
              {
                _id: uuid(),
                icon: "fas fa-tv",
                name: "TV #2"
              },
              {
                _id: uuid(),
                icon: "fab fa-raspberry-pi",
                name: "ZigBee Gateway"
              },
              {
                _id: uuid(),
                icon: "fas fa-bars",
                name: "SPI Gateway #1"
              },
              {
                _id: uuid(),
                icon: "fas fa-bars",
                name: "SPI Gateway #2"
              }
            ],
            rooms: [
              {
                _id: uuid(),
                name: "Terrace",
                icon: "fas fa-chair",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Garden",
                icon: "fas fa-tree",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Garage",
                icon: "fas fa-warehouse",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Livingroom",
                icon: "fas fa-couch",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Bedroom #1",
                icon: "fas fa-bed",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Bedroom #2",
                icon: "fas fa-bed",
                floor: -1
              },
              {
                _id: uuid(),
                name: "Master Bedroom",
                icon: "fas fa-bed",
                floor: 1
              },
              {
                _id: uuid(),
                name: "Kitchen",
                icon: "fas fa-utensils",
                floor: 0
              },
              {
                _id: uuid(),
                name: "Boilerroom",
                icon: "fas fa-fire-alt",
                floor: -1
              },
              {
                _id: uuid(),
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
