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
                <h3 class="card-title">TAMBAH MEMBER</h3>
              </div>
              <form @submit.prevent="tambah">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Masukkan Nama"
                      v-model="member.nama"
                      class="form-control"
                    />
           
                  </div>

                  <div class="form-group">
                    <label>Alamat</label>
                    <textarea
                      name="alamat"
                      placeholder="Masukkan Alamat"
                      v-model="member.alamat"
                      class="form-control"
                      rows="3"
                    />
                
                  </div>

                  <div class="form-group">
                    <label>Jenis Kelamin</label>
                    <br />
                    <div
                      class="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label class="btn btn-secondary active">
                        <input
                          type="radio"
                          value="Laki-laki"
                          v-model="member.jk"
                        />Laki-laki
                      </label>

                      &nbsp;
                      <label class="btn btn-secondary active">
                        <input
                          type="radio"
                          value="Perempuan"
                          v-model="member.jk"
                        />Perempuan
                      </label>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>No Telp</label>
                    <input
                      type="text"
                      name="tlp"
                      placeholder="Masukkan No Telp"
                      v-model="member.telp"
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
      member: {},
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
          "http://localhost/api-laundry/public/api/member",
          this.member,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then((res) => {
          if(res.data.success){
            this.$swal("Sukses", res.data.message, "success")
            this.$router.push("/member");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>