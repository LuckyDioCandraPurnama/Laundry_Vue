<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">TRANSAKSI</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Transaksi</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>NAMA MEMBER</th>
                      <th>TANGGAL ORDER</th>
                      <!-- <th>BATAS WAKTU</th> -->
                      <!-- <th>TANGGAL BAYAR</th> -->
                      <th>STATUS</th>
                      <th>PETUGAS</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m, index) in transaksi" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ m.nama }}</td>
                      <td>{{ m.tgl_order | moment("DD/MM/YYYY") }}</td>
                      <!-- <td>{{ m.batas_waktu }}</td> -->
                      <!-- <td>{{ m.tgl_bayar}}</td> -->
                      <td>
                        <span
                          v-if="m.status == 'baru'"
                          class="badge bg-info text-light"
                          >Baru</span
                        >
                        <span
                          v-if="m.status == 'proses'"
                          class="badge bg-warning text-light"
                          >Proses</span
                        >
                        <span
                          v-if="m.status == 'selesai'"
                          class="badge bg-success text-light"
                          >Selesai</span
                        >
                        <span
                          v-if="m.status == 'diambil'"
                          class="badge bg-secondary text-light"
                          >Diambil</span
                        >
                      </td>
                      <td>{{ m.name }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'detail_transaksi',
                            params: { id: m.id },
                          }"
                          class="btn btn-success btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-eye"></i>
                          </span>
                          <span class="text">Detail</span>
                        </router-link>
                        &nbsp;
                        <router-link
                          :to="{
                            name: 'edit_transaksi',
                            params: { id: m.id },
                          }"
                          class="btn btn-warning btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-pen"></i>
                          </span>
                          <span class="text">Edit</span>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <router-link
                  to="/transaksi/tambah"
                  class="btn btn-info btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span class="text">Tambah</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>

  <!-- Begin Page Content -->
</template>
<script>
export default {
  data() {
    return {
      transaksi: {},
    };
  },
  created() {
        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role
        if(role == 'owner')
        {
            this.$swal("Anda tidak dapat mengakses halaman ini")
            this.$router.push('/') 
        }
    this.axios
      .get("http://localhost/api-laundry/public/api/transaksi", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.transaksi = res.data;
      });
  },
};
</script>
