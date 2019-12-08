<template>
  <div class="container">
    <div class="row equal">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2>Anmelden</h2>
            <!--<p class="text-muted">Bestehdnen Login verwenden</p>-->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input class="form-control" type="text" placeholder="E-Mail" />
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input class="form-control" type="password" placeholder="Passwort" />
            </div>
            <div class="row">
              <div class="col-12">
                <button class="btn btn-outline-primary btn-block" type="button">Anmelden</button>
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-link" type="button">Passwort vergessen</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card text-white">
          <div class="card-body text-center bg-info">
            <div>
              <h2>Account erstellen</h2>
              <p>Noch keinen Cloud zugang? Dann erstell dir in weniger als 5 Minuten eien Zugang und steuer alle deine Geräte bequem über eine App!</p>
              <button class="btn btn-primary active mt-3" type="button">Register Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>