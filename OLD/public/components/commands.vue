<template>
  <div class="row">
    <div class="col-md-12">
      <h3>{{endpoint.name}}</h3>
      <button
        type="button"
        class="btn btn-info mr-1"
        v-for="cmd in commands"
        v-bind:key="cmd._id"
        v-on:click="send(cmd)"
      >{{cmd.name}}</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    commands: {
      default: [],
      type: Array
    },
    endpoint: {
      default: {},
      type: Object
    }
  },
  data: function() {
    return {
      //commands: []
    };
  },
  created: function() {
    console.log("Commands.vue created");
  },
  methods: {
    send: function(cmd) {
      fetch(`/api/endpoints/${this.endpoint._id}/commands/${cmd._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status !== 200) {
            console.log("STATUIS NOT 200", response);
          } else {
            response.json().then(data => {
              this.endpoint = data;
              this.commands = data.commands;
              this.loading = false;
            });
          }
        })
        .catch(e => {
          console.log(e);
          this.loading = false;
          this.error = e.toString();
        });
    }
  }
};
</script>