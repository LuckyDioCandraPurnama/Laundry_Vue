<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div class="c">
            <h1 class="h3 mb-4 text-gray-800">selamat datang {{role}}</h1>
          </div>
          <p>
            WIFINYA NGELAG<br />
            ketik 1 biar koneksinya makin semangat
          </p>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "",
    };
  },
  created() {
    var user = JSON.parse(this.$store.state.datauser);
    this.role = user.role;
  },
};
</script>