<template>
  <div class="container">
    <br /><br />
    <input
      type="hidden"
      name="id_anggota"
      v-model="id_anggota"
      class="form-control"
    />
    <br />
    Kode Pelanggan
    <input
      type="text"
      name="kode_anggota"
      v-model="kode_anggota"
      class="form-control"
    />
    <br />
    Nama Pelanggan
    <input
      type="text"
      name="nama_anggota"
      v-model="nama_anggota"
      class="form-control"
    />
    <br />
    Kelas Pelanggan
    <input
      type="text"
      name="kelas_anggota"
      v-model="kelas_anggota"
      class="form-control"
    />
    <br />
    No Telp Pelanggan
    <input
      type="text"
      name="no_telp_anggota"
      v-model="no_telp_anggota"
      class="form-control"
    />
    <br />
    Alamat Pelanggan
    <textarea
      name="alamat_anggota"
      v-model="alamat_anggota"
      class="form-control"
      rows="5"
    ></textarea>
    <br />
    <button class="btn btn-primary" v-on:click="edit()">EDIT</button>
    <div v-bind:class="style_message">
      <div v-if="error == true">
        <div v-for="mess in message" :key="mess.id">
          <p v-for="m in massage" :key="m.id">{{ m }}</p>
        </div>
      </div>
      <p v-else>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMember",
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
