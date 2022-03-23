<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
          <!-- Page Heading -->
          <h1 class="h3 mb-0 text-gray-800">OUTLET</h1>
              <router-link :to="{name: 'report_outlet',}"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i class="fas fa-download fa-sm text-white-50"></i>&nbsp;
              <span>Generate Report</span>
            </router-link>
              <!-- <router-link
              to="/outlet/report"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i>&nbsp;
              <span>Generate Report</span>
            </router-link> -->
          </div>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Outlet</h6>
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
                      <th>NAMA</th>
                      <th>ALAMAT</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m, index) in outlet" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ m.nama_outlet }}</td>
                      <td>{{ m.alamat }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'edit_outlet',
                            params: { id: m.id },
                          }"
                          class="btn btn-warning btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-pen"></i>
                          </span>
                          <span class="text">Edit</span>
                        </router-link>
                        <!-- &nbsp;
                        <button
                          type="submit"
                          @click="hapus(m.id)"
                          class="btn btn-danger btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </button> -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <router-link
                  :to="{

                  name: 'tambah_outlet'
                  }"
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
      outlet: {},
    };
  },
  created() {
        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role
        if(role == 'owner' || role =='kasir')
        {
            this.$swal("Anda tidak dapat mengakses halaman ini")
            this.$router.push('/') 
        }
    this.axios
      .get("http://localhost/api-laundry/public/api/outlet", {
        headers: { 'Authorization': "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.outlet = res.data;
      });
  },
  methods: {
    hapus(id) {
      this.axios
        .delete(
          `http://localhost/api-laundry/public/api/outlet/${id}`,
          {
            headers: { 'Authorization': "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.outlet.map((item) => item.id).indexOf(id);
          this.outlet.splice(i, 1);
        });
    },
  },
};
</script>
