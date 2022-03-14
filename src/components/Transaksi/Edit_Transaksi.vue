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
                <h3 class="card-title">EDIT TRANSAKSI</h3>
              </div>
              <form @submit.prevent="edit">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Member</label>
                    <select class="form-control" v-model="transaksi.id_member">
                        <option v-for="(m, index) in member" :key="index" :value="m.id">{{m.nama}}</option>
                    </select>
                    <br />
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
      member: {},
      transaksi: {},
    };
  },
  created(){


      // this.axios
      // .get(`http://localhost/api-laundry/public/api/member/${this.$route.params.id}`, {
      //   headers: { Authorization: "Bearer" + this.$store.state.token },
      // })
      // .then((res) => {
      //   this.member = res.data;
      // });

      // this.axios
      // .get("http://localhost/api-laundry/public/api/transaksi", {
      //   headers: { Authorization: "Bearer" + this.$store.state.token },})
      // .then((res) => {
      //   this.transaksi = res.data;
      // })
      // .catch(err => console.log(err))

      
      this.axios
      .get("http://localhost/api-laundry/public/api/member", {
        headers: { Authorization: "Bearer" + this.$store.state.token },})
      .then((res) => {
        this.member = res.data;
      });
      this.axios
      .get(`http://localhost/api-laundry/public/api/transaksi/${this.$route.params.id}`, {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.transaksi = res.data;
      });

  },
  methods: {
    edit() {
      this.axios
        .put(`http://localhost/api-laundry/public/api/transaksi/edit/${this.$route.params.id}`,
          this.transaksi,
          {
            headers: { Authorization: "Bearer " + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/transaksi");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>