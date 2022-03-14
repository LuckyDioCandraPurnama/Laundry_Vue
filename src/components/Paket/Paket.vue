<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">PAKET</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Paket</h6>
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
                      <th>JENIS</th>
                      <th>HARGA</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m, index) in paket" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ m.jenis }}</td>
                      <td>{{ m.harga }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'edit_paket',
                            params: { id: m.id },
                          }"
                          class="btn btn-warning btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-pen"></i>
                          </span>
                          <span class="text">Edit</span>
                        </router-link>
                        &nbsp;
                        <button
                          type="submit"
                          @click="hapus(m.id)"
                          class="btn btn-danger btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- <div>
                <router-link
                  to="/paket/tambah"
                  class="btn btn-info btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span class="text">Tambah</span>
                </router-link>
              </div> -->
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
      paket: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost/api-laundry/public/api/paket", {
        headers: { 'Authorization': "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.paket = res.data;
      });
  },
  methods: {
    hapus(id) {
      this.axios
        .delete(
          `http://localhost/api-laundry/public/api/paket/${id}`,
          {
            headers: { 'Authorization': "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.paket.map((item) => item.id).indexOf(id);
          this.paket.splice(i, 1);
        });
    },
  },
};
</script>
