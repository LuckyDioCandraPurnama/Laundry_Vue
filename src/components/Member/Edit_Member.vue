<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-warning">
                <div class="card-header">
                  <h3 class="card-title">EDIT MEMBER</h3>
                </div>
                <div class="card-body">
                  <div class="card-body">
                    <form @submit.prevent="edit">
                      <div class="form-group">
                        <label>Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="ubah.nama"
                        />
                      </div>

                      <div class="form-group">
                        <label>Alamat</label>
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="ubah.alamat"
                        />
                      </div>

                      <div class="form-group">
                        <label>Jenis Kelamin</label>
                        <br />
                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label
                            v-if="ubah.jk == 'Laki-laki'"
                            class="btn btn-secondary active"
                            checked
                          >
                            <input
                              type="radio"
                              value="Laki-laki"
                              v-model="ubah.jk"
                            />Laki-laki
                          </label>
                          <label v-else class="btn btn-secondary">
                            <input
                              type="radio"
                              value="Laki-laki"
                              v-model="ubah.jk"
                            />Laki-laki
                          </label>
                          &nbsp;
                          <label
                            v-if="ubah.jk == 'Perempuan'"
                            class="btn btn-secondary active"
                            checked
                          >
                            <input
                              type="radio"
                              value="Perempuan"
                              v-model="ubah.jk"
                            />Perempuan
                          </label>
                          <label v-else class="btn btn-secondary">
                            <input
                              type="radio"
                              value="Perempuan"
                              v-model="ubah.jk"
                            />Perempuan
                          </label>
                        </div>
                      </div>
                      <!-- <div class="form-group">
                    <label>jenis kelamin</label>
                    <input type="text" class="form-control" v-model="member.jenis_kelamin"
                    />
                  </div> -->

                      <div class="form-group">
                        <label>No Telp</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="ubah.telp"
                        />
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary" type="submit">
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="card card-warning">
                <div class="card-header">
                  <h3 class="card-title">DATA MEMBER</h3>
                </div>
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                      <img
                        class="col-lg-9 bg-login-image"
                        src="@/assets/img/profil.jpg"
                      />
                    </div>
                    <div class="">
                      <div
                        class="
                          text-xs
                          font-weight-bold
                          text-primary text-uppercase
                        "
                      >
                        Nama
                      </div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                        {{ member.nama }}
                      </div>
                      <div
                        class="
                          text-xs
                          font-weight-bold
                          text-primary text-uppercase
                        "
                      >
                        Alamat
                      </div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                        {{ member.alamat }}
                      </div>
                      <div
                        class="
                          text-xs
                          font-weight-bold
                          text-primary text-uppercase
                        "
                      >
                        Jenis Kelamin
                      </div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                        {{ member.jk }}
                      </div>
                      <div
                        class="
                          text-xs
                          font-weight-bold
                          text-primary text-uppercase
                        "
                      >
                        No Telp
                      </div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                        {{ member.telp }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
      ubah: {},
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
      .get(
        `http://localhost/api-laundry/public/api/member/${this.$route.params.id}`,
        {
          headers: { Authorization: "Bearer " + this.$store.state.token },
        }
      )
      .then((res) => {
        this.ubah = res.data;
      });
  },
  methods: {
    edit() {
      this.axios
        .put(
          `http://localhost/api-laundry/public/api/member/${this.$route.params.id}`,
          this.ubah,
          {
            headers: { Authorization: "Bearer " + this.$store.state.token },
          }
        )
        .then((res) => {
          if(!(res.data.success)){
            this.$swal("Sukses", res.data.message, "success")
          this.$router.push("/member");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
