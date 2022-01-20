<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">MEMBER</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Member</h6>
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
                      <th>ID</th>
                      <th>NAMA</th>
                      <th>ALAMAT</th>
                      <th>JENIS KELAMIN</th>
                      <th>TELP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(m, member) in member" :key="member">
                      <td>{{ m.id_member }}</td>
                      <td>{{ m.nama }}</td>
                      <td>{{ m.alamat }}</td>
                      <td>{{ m.jenis_kelamin }}</td>
                      <td>{{ m.tlp }}</td>
                      &nbsp; &nbsp;

                      <router-link
                        :to="{ name: 'detail_member', params: { id: m.id_member } }"
                        class="btn btn-success btn-icon-split"
                      >
                        <span class="icon text-white-50">
                          <i class="fas fa-eye"></i>
                        </span>
                        <span class="text">Detail</span>
                      </router-link>
                      &nbsp;
                      <router-link
                        :to="{ name: 'update_member', params: { id: m.id_member } }"
                        class="btn btn-warning btn-icon-split"
                      >
                        <span class="icon text-white-50">
                          <i class="fas fa-pen"></i>
                        </span>
                        <span class="text">Edit</span>
                      </router-link>
                      &nbsp;
                      <button
                        type="button"
                        @click="hapus(m.id)"
                        class="btn btn-danger btn-icon-split"
                      >
                        <span class="icon text-white-50">
                          <i class="fas fa-trash"></i>
                        </span>
                        <span class="text">Delete</span>
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="/tambah_member" class="btn btn-info btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-plus"></i>
                </span>
                <span class="text">Tambah</span>
              </a>
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
      member: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost/Laundry-UKK-Final/public/api/get_member", {
        headers: { Autorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.member = res.data;
      });
  },
  methods: {
    hapus(id) {
      this.axios
        .delete(
          `http://localhost/Laundry-UKK-Final/public/api/get_member/${id}`,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.member.map((item) => item.id).indexOf(id);
          this.member.splice(i, 1);
        });
    },
  },
};
</script>
