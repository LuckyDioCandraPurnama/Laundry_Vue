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
                <h3 class="card-title">EDIT MEMBER</h3>
              </div>
              <form action="" @submit.prevent="edit">
                <div class="card-body" >
                  <!-- hidden -->
                  <!-- <input
                    type="hidden"
                    name="id"
                    v-model="id"
                    class="form-control"
                  /> -->
                  <!-- Form -->
                  <div class="form-group">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="Nama"
                      v-model="member.nama"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label>Alamat</label>
                    <textarea
                      name="alamat"
                      v-model="member.alamat"
                      class="form-control"
                      rows="3"
                    />
                  </div>

                  <div class="form-group">
                    <label>Jenis Kelamin</label>
                    <br />
                    <label
                      v-if="member.jenis_kelamin == 'Laki-laki'"
                      class="btn btn-secondary active"
                    >
                      <input
                        type="radio"
                        value="Laki-laki"
                        v-model="member.jenis_kelamin"
                      />Laki-laki
                    </label>
                    <label v-else class="btn btn-secondary">
                      <input
                        type="radio"
                        value="Laki-laki"
                        v-model="member.jenis_kelamin"
                      />Laki-laki
                    </label>
                    &nbsp;
                    <label
                      v-if="member.jenis_kelamin == 'Perempuan'"
                      class="btn btn-secondary active"
                    >
                      <input
                        type="radio"
                        value="Perempuan"
                        v-model="member.jenis_kelamin"
                      />Perempuan
                    </label>
                    <label v-else class="btn btn-secondary">
                      <input
                        type="radio"
                        value="Perempuan"
                        v-model="member.jenis_kelamin"
                      />Perempuan
                    </label>
                  </div>

                  <div class="form-group">
                    <label>No Telp</label>
                    <input
                      type="text"
                      name="telp"
                      v-model="member.tlp"
                      class="form-control"
                    />
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
  data() {
    return {
      member: {}
    };
  },
  created(){
    this.axios
        .get(`http://localhost/Laundry-UKK-Final/public/api/get_member/${this.$route.params.id}`,
        {headers : {Authorization : 'Bearer' +this.$store.state.token}})
        .then((res) => {
          this.member = res.data;
        })
  },
  methods: {
    edit() {
      this.axios
        .put(`http://localhost/Laundry-UKK-Final/public/api/update_member/${this.$route.params.id}`,
        this.member,
        {headers : {Authorization : 'Bearer' +this.$store.state.token}})
        .then(() => {
          this.$router.push('/member');
        })
        .catch(err => console.log(err))
    },
  },
};
</script>
