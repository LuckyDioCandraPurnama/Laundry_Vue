<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">DETAIL MEMBER</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Member</h6>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
                  <img class=""
                    src="@/assets/img/profil3.jpg" width="200px" height="200px"
                  />
                </div>
                
                <div class="col-auto">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Nama
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ member.nama }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Alamat
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ member.alamat }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Jenis Kelamin
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ member.jk }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    No Telp
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ member.telp }}
                  </div>
                </div>
              </div>
              <br>
              <div class="row align-items-center">

              <div class="col-md-4 text-center">
                <router-link
                  :to="{
                    name: 'edit_member',
                  }"
                  class="btn btn-warning btn-icon-split"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-pen"></i>
                  </span>
                  <span class="text">Ubah Data Member</span>
                </router-link>
              </div>
              </div>

              <!-- <div class="col-md-4 text-center">
                  <button type="button" class="btn btn-warning btn-icon-split">
                    <span class="icon text-white-50">
                      <i class="fas fa-pen"></i>
                    </span>
                    <span class="text">Ubah Data Member</span>
                  </button>
                </div> -->
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>

  <!-- Begin Page Content -->
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
        if(role == 'owner')
        {
            this.$swal("Anda tidak dapat mengakses halaman ini")
            this.$router.push('/') 
        }
    
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/member/${this.$route.params.id}`,
        { headers: { 'Authorization' : "Bearer " + this.$store.state.token } }
      )
      .then((res) => {
        this.member = res.data;
      });
  },
};
</script>
