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
                  <h3 class="card-title">EDIT USER</h3>
                </div>
                <div class="card-body">
                  <div class="card-body">
                    <form @submit.prevent="edit">
                      <div class="form-group">
                        <label>Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="ubah.name"
                        />
                      </div>
                      <div class="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="ubah.username"
                        />
                      </div>


                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="ubah.password"
                        />
                      </div>
                      <div class="form-group">
                        <label>Role</label>
                        <br />
                        <div
                          class="btn-group btn-group-toggle"
                          data-toggle="buttons">
                          <label
                            v-if="ubah.role == 'admin'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="admin"
                              v-model="ubah.role"
                            />Admin
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="admin"
                              v-model="ubah.role"
                            />Admin
                          </label>

                          &nbsp;

                          <label
                            v-if="ubah.role == 'kasir'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="kasir"
                              v-model="ubah.role"
                            />Kasir
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="kasir"
                              v-model="ubah.role"
                            />Kasir
                          </label>

                          &nbsp;

                          <label
                            v-if="ubah.role == 'owner'"
                            class="btn btn-info active"
                            checked>
                            <input
                              type="radio"
                              value="owner"
                              v-model="ubah.role"
                            />Owner
                          </label>
                          <label v-else class="btn btn-info">
                            <input
                              type="radio"
                              value="owner"
                              v-model="ubah.role"
                            />Owner
                          </label>
                        </div>
                      </div>
                      <!-- <div class="form-group">
                    <label>Outlet</label>
                    <select class="form-control" v-model="user.id_outlet" >
                        <option v-for="(m,index) in outlet" :key="index" :value="m.id">{{m.nama}}</option>            
                    </select>
                    <br />
                  </div> -->
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
                    </form>
                  </div>
                </div>
              </div>
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
      ubah: {},
      outlet: {},
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
     .get("http://localhost/api-laundry/public/api/outlet", {
       headers: { 'Authorization' : "Bearer " + this.$store.state.token },})
     .then(res => {
       this.outlet = res.data;
     })
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/user/${this.$route.params.id}`,
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
          `http://localhost/api-laundry/public/api/user/${this.$route.params.id}`,
          this.ubah,
          {
            headers: { Authorization: "Bearer " + this.$store.state.token },
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
