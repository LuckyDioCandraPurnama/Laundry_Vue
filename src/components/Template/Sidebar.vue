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
    <li class="nav-item">
      <router-link to="/member" class="nav-link">
        <i class="fas fa-users"></i>
        <span>Member</span>
      </router-link>
    </li>
    <!-- Nav Item - Paket -->
    <li class="nav-item">
      <router-link to="/" class="nav-link">
        <i class="fas fa-tshirt"></i>
        <span>Paket</span>
      </router-link>
    </li>
    <!-- Nav Item - Transaksi -->
    <li class="nav-item">
      <router-link to="/" class="nav-link">
        <i class="fas fa-file-invoice-dollar"></i>
        <span>Transaksi</span>
      </router-link>
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>

