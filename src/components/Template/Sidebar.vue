<template>
  <!-- Sidebar -->
  <ul 
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar" 
  >
    <!-- 
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
      -->

    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
        <i class="fas fa-home"></i>
      <div class="sidebar-brand-text mx-3">APP LAUNDRY</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link to="/" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">DATA</div>
    <!-- Nav Item - Member -->
    <li v-if="isAdmin || isKasir" class="nav-item">
      <router-link to="/member" class="nav-link">
        <i class="fas fa-users"></i>
        <span>Member</span>
      </router-link>
    </li>
    <li v-if="isAdmin" class="nav-item">
      <router-link to="/user" class="nav-link">
        <i class="fas fa-user"></i>
        <span>User</span>
      </router-link>
    </li>
    <li v-if="isAdmin" class="nav-item">
      <router-link to="/outlet" class="nav-link">
        <i class="fas fa-store"></i>
        <span>Outlet</span>
      </router-link>
    </li>
    <li v-if="isAdmin" class="nav-item">
      <router-link to="/paket" class="nav-link">
        <i class="fas fa-tshirt"></i>
        <span>Paket</span>
      </router-link>
    </li>
    <li v-if="isAdmin || isKasir" class="nav-item">
      <router-link to="/transaksi" class="nav-link">
        <i class="fas fa-file-invoice-dollar"></i>
        <span>Transaksi</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/report" class="nav-link">
        <i class="far fa-file-alt"></i>
        <span>Report</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  </ul>
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
