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
                <h3 class="card-title">EDIT PAKET</h3>
              </div>
              <form @submit.prevent="edit">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Jenis Paket</label>
                    <!-- <select class="form-control" v-model="paket.jenis" disabled>
                      <option value="Cuci kering">Cuci kering</option>
                      <option value="Cuci setrika">Cuci setrika</option>
                      <option value="Sprei kecil">Sprei kecil</option>
                      <option value="Sprei besar">Sprei besar</option>
                      <option value="Bed cover">Bed Cover</option>
                    </select> -->
                  <input
                      type="text"
                      name="paket"
                      v-model="paket.jenis"
                      class="form-control" disabled
                    />
                  </div>
                  <div class="form-group">
                    <label>Harga</label>
                    <input
                      type="text"
                      name="harga"
                      v-model="paket.harga"
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
      paket: {},
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
      .get(`http://localhost/api-laundry/public/api/paket/${this.$route.params.id}`, {
        headers: { 'Authorization' : `Bearer ` + this.$store.state.token },
      })
      .then((res) => {
        this.paket = res.data;
      });
  },
  methods: {
    edit() {
      this.axios
        .put(
          `http://localhost/api-laundry/public/api/paket/${this.$route.params.id}`,
          this.paket,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/paket");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>