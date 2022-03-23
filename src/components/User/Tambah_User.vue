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
                <h3 class="card-title">TAMBAH USER</h3>
              </div>
              <form @submit.prevent="tambah">
                <div class="card-body">
                  <!-- Form -->
                  <div class="form-group">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Masukkan Nama"
                      v-model="user.name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Masukkan Username"
                      v-model="user.username"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="nama"
                      placeholder="Masukkan password"
                      v-model="user.password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                        <label>Role</label>
                        <br />
                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons">
                          <label
                            v-if="user.role == 'admin'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="admin"
                              v-model="user.role"
                            />Admin
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="admin"
                              v-model="user.role"
                            />Admin
                          </label>

                          &nbsp;

                          <label
                            v-if="user.role == 'kasir'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="kasir"
                              v-model="user.role"
                            />Kasir
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="kasir"
                              v-model="user.role"
                            />Kasir
                          </label>

                          &nbsp;

                          <label
                            v-if="user.role == 'owner'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="owner"
                              v-model="user.role"
                            />Owner
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="owner"
                              v-model="user.role"
                            />Owner
                          </label>
                        </div>
                      </div>
                  <div class="form-group">
                    <label>Outlet</label>
                    <select class="form-control" v-model="user.id_outlet" >
                        <!-- <option value="" selected hidden disabled>Pilih kelas</option> -->
                        <option v-for="(m,index) in outlet" :key="index" :value="m.id">{{m.nama_outlet}}</option>
                        <!-- <option value="member.id" >{{member.nama}}</option> -->
                    </select>
                    <br />
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-primary" type="submit">
                      Simpan
                    </button>
                    &nbsp;
                        <router-link
                          :to="{
                            name: 'user',
                          }"
                          class="btn btn-secondary"
                        >Cancel
                          <!-- <span class="text">Cancel</span> -->
                        </router-link>
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
      user: {},
      outlet:{},
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
     .get("http://localhost/api-laundry/public/api/outlet", {
       headers: { 'Authorization' : "Bearer " + this.$store.state.token },})
     .then(res => {
       this.outlet = res.data;
     })
},

  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/api-laundry/public/api/user/tambah",
          this.user,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/user");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>