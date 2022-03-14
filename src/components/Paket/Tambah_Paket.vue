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
                <h3 class="card-title">TAMBAH PAKET</h3>
              </div>
              <form @submit.prevent="tambah">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Jenis</label>
                    <select class="form-control" v-model="paket.jenis">
                      <option value="Cuci kering">Cuci kering</option>
                      <option value="Cuci setrika">Cuci setrika</option>
                      <option value="Sprei kecil">Sprei kecil</option>
                      <option value="Sprei besar">Sprei besar</option>
                      <option value="Bed cover">Bed Cover</option>
                    </select>
                  
                  </div>

                  <!-- <div class="form-group">
                    <label>Jenis</label>
                    <textarea
                      name="alamat"
                      v-model="paket.jenis"
                      class="form-control"
                      rows="3"
                    />
                    <br />
                  </div> -->

                  <div class="form-group">
                    <label>Harga</label>
                    <input
                      type="text"
                      name="tlp"
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
  // created() {
  //   this.axios
  //     .get("http://localhost/Laundry-UKK-Final/public/api/get_paket", {
  //       headers: { Autorization: "Bearer" + this.$store.state.token },
  //     })
  //     .then((res) => {
  //       this.paket = res.data;
  //     });
  // },
  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/api-laundry/public/api/paket",
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