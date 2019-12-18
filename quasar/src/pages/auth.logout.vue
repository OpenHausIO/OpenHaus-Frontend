<template>
  <div>
    <h1>Logout</h1>

    <h3>Sie wurden erfolgreich ausgelogt.</h3>
  </div>
</template>

<script>
export default {
  name: "PageLogin",
  created: () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("items");

    setTimeout(() => {
      window.location.href = "/#/auth/login";
    }, 3000);
  }
};
</script>
