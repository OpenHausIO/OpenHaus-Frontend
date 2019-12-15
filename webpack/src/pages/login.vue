<template>
  <div class="card bg-transparent border-0 m-auto mt-3" style="max-width: 350px">
    <div class="card-body">
      <h1 class="card-title text-center">
        <b>OpenHaus</b>
        <!--<small class="text-muted">SmartHome System</small>-->
      </h1>

      <form accept-charset="utf-8" role="form" onsubmit="return false;">
        <fieldset>
          <div class="form-group">
            <input class="form-control" placeholder="demo@open-haus.io" type="email" />
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Password" type="password" />
          </div>

          <button class="btn btn-info btn-block" v-on:click="submit();">Anmelden</button>
        </fieldset>
      </form>

      <hr class="bg-primary" />

      <button class="btn btn-primary btn-block">Registrieren</button>
      <button class="btn btn-link btn-block btn-sm text-primary">Passwort vergessen</button>

      <!--
      <p>Use the simple and comfortable OpenHaus Cloud to control all kind of devices in your Home.</p>
      <p>
        Try it, the first month is
        <u>free!</u>
      </p>
      -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      console.log("Submit cklicked");
      location.href = "/#/home";
    }
  }
};
</script>

<style scoped>
</style>