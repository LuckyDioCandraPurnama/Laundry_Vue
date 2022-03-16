<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div class="col-md-6">
            <div class="card card-warning">
              <div class="card-header">
                <h3 class="card-title">TAMBAH OUTLET</h3>
              </div>
              <form @submit.prevent="tambah">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Nama</label>
                   <input
                      type="text"
                      name="nama"
                      v-model="outlet.nama"
                      class="form-control"
                    />
                  
                  </div>
                  <div class="form-group">
                    <label>Alamat</label>
                    <input
                      type="text"
                      name="alamat"
                      v-model="outlet.alamat"
                      class="form-control"
                    />
            
                  </div>

                  <div class="card-footer">
                    <button class="btn btn-primary" type="submit">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
  },
  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/api-laundry/public/api/outlet",
          this.outlet,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/outlet");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>