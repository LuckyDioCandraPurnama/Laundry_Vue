<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">USER</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data User</h6>
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
                      <th>USERNAME</th>
                      <th>ROLE</th>
                      <th>NAMA OUTLET</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(b, index) in user" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ b.name }}</td>
                      <td>{{ b.username }}</td>
                      <td>{{ b.role }}</td>
                      <td>{{ b.nama_outlet }}</td>
                      <td>
                        <!-- <router-link
                          :to="{
                            name: 'detail_user',
                            params: { id: b.id },
                          }"
                          class="btn btn-success btn-icon-split"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-eye"></i>
                          </span>
                          <span class="text">Detail</span>
                        </router-link>
                        &nbsp; -->
                        <router-link
                          :to="{
                            name: 'edit_user',
                            params: { id: b.id },
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
                          @click="hapus(b.id)"
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
              <router-link
                to="/user/tambah"
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
      <footer-component></footer-component>
    </div>
  </div>

  <!-- Begin Page Content -->
</template>
<script>
export default {
  data() {
    return {
      user: {},
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
      .get("http://localhost/api-laundry/public/api/user", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.user = res.data;
      });
    },
  methods: {


    hapus(id) {
      this.axios
        .delete(
          `http://localhost/api-laundry/public/api/user/${id}`,
          {
            headers: { Authorization: "Bearer " + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.user.map((item) => item.id).indexOf(id);
          this.user.splice(i, 1);
        });
    },
  },
};
</script>
