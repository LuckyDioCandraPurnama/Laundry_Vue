<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      to="/"
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-text mx-3">Laundry APP</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link to="/" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <!-- Nav Item - Member -->
    <li v-if="isAdmin || isKasir" class="nav-item">
      <router-link to="/member" class="nav-link">
        <i class="fas fa-users"></i>
        <span>Member</span>
      </router-link>
    </li>
    <li v-if="isAdmin || isKasir" class="nav-item">
      <router-link to="/user" class="nav-link">
        <i class="fas fa-users"></i>
        <span>User</span>
      </router-link>
    </li>
    <!-- Nav Item - Paket -->
    <li v-if="isAdmin" class="nav-item">
      <router-link to="/paket" class="nav-link">
        <i class="fas fa-tshirt"></i>
        <span>Paket</span>
      </router-link>
    </li>
    <!-- Nav Item - Transaksi -->
    <li v-if="isAdmin || isKasir" class="nav-item">
      <router-link to="/transaksi" class="nav-link">
        <i class="fas fa-file-invoice-dollar"></i>
        <span>Transaksi</span>
      </router-link>
    </li>

    <li v-if="isOwner" class="nav-item">
      <router-link to="/report" class="nav-link">
        <i class="far fa-file-alt"></i>
        <span>Report</span>
      </router-link>
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>
<script>
export default {
  data() {
    return {
      isAdmin: false,
      isKasir: false,
      isOwner: false,
    };
  },
  created() {
    var user = JSON.parse(this.$store.state.datauser);
    var role = user.role;

    if (role == "admin") this.isAdmin = true;
    else if (role == "kasir") this.isKasir = true;
    else this.isOwner = true;
  },
};
</script>
