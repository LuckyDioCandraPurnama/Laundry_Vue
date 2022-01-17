<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">MEMBER</h1>
          <!-- <p class="mb-4">
            DataTables is a third party plugin that is used to generate the demo
            table below. For more information about DataTables, please visit the
            <a target="_blank" href="https://datatables.net"
              >official DataTables documentation</a
            >.
          </p> -->

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Member</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAMA</th>
                      <th>ALAMAT</th>
                      <th>JENIS KELAMIN</th>
                      <th>TELP</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr v-for="(b, index) in member" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ b.nama }}</td>
                                                <td>{{ b.alamat }}</td>
                                                <td>{{ b.jk }}</td>
                                                <td>{{ b.telp }}</td>
                                                <td> -->

                    <tr>
                      <td>1</td>
                      <td>Lucky Purnama</td>
                      <td>Jl. Danau Singkarak</td>
                      <td>Laki-laki</td>
                      <td>081234567890</td>
                      <td>
                        <a href="#" class="btn btn-warning btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-info-circle"></i>
                          </span>
                          <span class="text">Edit</span>
                        </a>
                        &nbsp;
                        <a href="#" class="btn btn-danger btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Lucky Purnama</td>
                      <td>Jl. Danau Singkarak</td>
                      <td>Perempuan</td>
                      <td>081234567890</td>
                      <td><a href="#" class="btn btn-warning btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-info-circle"></i>
                          </span>
                          <span class="text">Edit</span>
                        </a>
                        &nbsp;
                        <a href="#" class="btn btn-danger btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Lucky Purnama</td>
                      <td>Jl. Danau Singkarak</td>
                      <td>Laki-laki</td>
                      <td>081234567890</td>
                      <td><a href="#" class="btn btn-warning btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-info-circle"></i>
                          </span>
                          <span class="text">Edit</span>
                        </a>
                        &nbsp;
                        <a href="#" class="btn btn-danger btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Lucky Purnama</td>
                      <td>Jl. Danau Singkarak</td>
                      <td>Perempuan</td>
                      <td>081234567890</td>
                      <td><a href="#" class="btn btn-warning btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-info-circle"></i>
                          </span>
                          <span class="text">Edit</span>
                        </a>
                        &nbsp;
                        <a href="#" class="btn btn-danger btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-trash"></i>
                          </span>
                          <span class="text">Delete</span>
                        </a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" class="btn btn-success btn-icon-split">
                          <span class="icon text-white-50">
                            <i class="fas fa-check"></i>
                          </span>
                          <span class="text">Tambah</span>
                        </a>
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
    //   this.axios.get('http://localhost:8000/api/member')
    //       .then( res => {
    //           this.member = res.data
    //   })
  },
  methods: {
    // hapus(id) {
    //     this.axios.delete(`http://localhost:8000/api/member/${id}`)
    //               .then( res => {
    //                   let i = this.member.map(item => item.id).indexOf(id);
    //                   this.member.splice(i, 1);
    //               });
    // }
  },
};
</script>
