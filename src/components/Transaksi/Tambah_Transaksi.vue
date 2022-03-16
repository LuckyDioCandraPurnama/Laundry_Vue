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
                <h3 class="card-title">TAMBAH TRANSAKSI</h3>
              </div>
              <form @submit.prevent="tambah">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Member</label>
                    <select class="form-control" v-model="transaksi.id_member">
                        <option v-for="(m,index) in member" :key="index" :value="m.id">{{m.nama}}</option>
                        <!-- <option value="member.id" >{{member.nama}}</option> -->
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
        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role
        if(role == 'owner')
        {
            this.$swal("Anda tidak dapat mengakses halaman ini")
            this.$router.push('/') 
        }
      this.axios
      .get("http://localhost/api-laundry/public/api/member", {
        headers: { 'Authorization' : "Bearer " + this.$store.state.token },})
      .then(res => {
        this.member = res.data;
      })
  },
  methods: {
    tambah() {
      this.axios
        .post('http://localhost/api-laundry/public/api/transaksi', 
        this.transaksi,{
          headers: { 'Authorization' : 'Bearer ' + this.$store.state.token },
        })
        .then(() => {
          this.$router.push("/transaksi");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>