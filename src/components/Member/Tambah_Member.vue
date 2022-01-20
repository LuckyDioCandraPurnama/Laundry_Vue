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
              <form action="">
                <div class="card-body">
                  <!-- hidden -->
                  <input
                    type="hidden"
                    name="id_member"
                    v-model="id_member"
                    class="form-control"
                  />
                  <!-- Form -->
                  <div class="form-group">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="Nama"
                      v-model="Nama"
                      class="form-control"
                    />
                    <br />
                  </div>

                  <div class="form-group">
                    <label>Alamat</label>
                    <textarea
                      name="alamat"
                      v-model="alamat"
                      class="form-control"
                      rows="3"
                    />
                    <br />
                  </div>

                  <div class="form-group">
                    <label>Jenis Kelamin</label>
                    <select class="form-control">
                      <option value="" disabled selected></option>
                      <option value="">Laki-laki</option>
                      <option value="">Perempuan</option>
                    </select>
                    <br />
                  </div>

                  <div class="form-group">
                    <label>No Telp</label>
                    <input
                      type="text"
                      name="telp"
                      v-model="telp"
                      class="form-control"
                    />
                    <br />
                  </div>
                  
                  <div class="card-footer">
                    <button class="btn btn-primary" v-on:click="tambah()">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- <button class="btn btn-primary" v-on:click="tambah()">Tambah</button> -->
          <!-- <div v-bind:class="style_message">
            <div v-if="error == true">
              <div v-for="mess in message" :key="mess.id">
                <p v-for="m in massage" :key="m.id">{{ m }}</p>
              </div>
            </div>
            <p v-else>{{ message }}</p>
          </div> -->
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "TambahMember",
  data() {
    return {
      member: [],
      search: "",
      id_member: "",
      nama: "",
      alamat: "",
      jk: "",
      telp: "",

      style_message: "",
      message: "",
      error: false,
    };
  },
  methods: {
    dt_member: function () {
      this.axios
        .get("http://localhost/laundry_baru8/public/api/get_member")
        .then((result) => {
          this.member = result.data;
        });
    },
    getdetailmember(id) {
      this.axios
        .get("http://localhost/laundry_baru8/public/api/getdetail/" + id)
        .then((result) => {
          this.id_member = result.data.id_member;
          this.nama = result.data.nama;
          this.alamat = result.data.alamat;
          this.jk = result.data.jk;
          this.telp = result.data.telp;
        });
    },
    edit: function () {
      var datamember = {
        nama: this.nama,
        alamat: this.alamat,
        jk: this.jk,
        telp: this.telp,
      };
      this.axios
        .put(
          "http://localhost/laundry_baru8/public/api/edit_member/" +
            this.id_member,
          datamember
        )
        .then((result) => {
          if (result.data.status == true) {
            this.message = result.data.message;
            this.style_message = "alert alert-success";
            setTimeout(() => {
              this.$router.push("/member");
            }, 2000);
          } else {
            this.error = false;
            this.style_message = "alert alert-warning";
            this.message = result.data.message;
          }
        });
    },
  },
  mounted() {
    this.dt_member();
    this.getdetailmember(this.$route.params.id);
  },
};
</script>
