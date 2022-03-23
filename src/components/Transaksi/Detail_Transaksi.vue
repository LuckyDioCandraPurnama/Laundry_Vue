<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">DETAIL TRANSAKSI</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Data Detail Transaksi
              </h6>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
                  <img
                    class=""
                    src="@/assets/img/profil.jpg"
                    width="200px"
                    height="200px"
                  />
                  <!-- <i class="far fa-user fa-7x text-gray-300"></i> -->
                </div>
                <div class="col">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Nama
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.nama }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Tanggal Order
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.tgl_order | moment("DD/MM/YYYY") }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Batas Waktu
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.batas_waktu | moment("DD/MM/YYYY") }}
                  </div>
                </div>
                  <div class="col">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Tanggal Bayar
                  </div>
                  <div
                    v-if="transaksi.tgl_bayar == null"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Belum Dibayar
                  </div>
                  <div
                    v-else
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    {{ transaksi.tgl_bayar | moment("DD/MM/YYYY") }}
                  </div>

                  <!-- </div> -->
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Status
                  </div>
                  <!-- <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ transaksi.status }}</div> -->
                  <div
                    v-if="transaksi.status == 'baru'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Baru
                  </div>
                  <div
                    v-if="transaksi.status == 'proses'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Proses
                  </div>
                  <div
                    v-if="transaksi.status == 'selesai'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Selesai
                  </div>
                  <div
                    v-if="transaksi.status == 'diambil'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Diambil
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Status Pembayaran
                  </div>
                  <div
                    v-if="transaksi.dibayar == 'belum dibayar'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Belum Dibayar
                  </div>
                  <div
                    v-else
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Sudah Dibayar
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
                  <br>
                  <button
                    :disabled="disableStatus"
                    type="button"
                    class="btn btn-warning btn-icon-split"
                    @click="ubahStatus(id_transaksi)"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-pen"></i>
                    </span>
                    <span class="text">Ubah Status Laundry</span>
                  </button>
                </div>
              </div>
              <br />
              <br />
              <div class="col">
              <button :disabled="disableStruk"
                type="button"
                class="btn btn-sm btn-info btn-icon-split mb-3"
                @click="generateReport"
              >
                <span class="icon text-white-50">
                  <i class="fas fa-print"></i>
                </span>
                <span class="text">Cetak Struk</span>
              </button>
              </div>
              <div class="col-md-6 align-items-center">
                <VueHtml2pdf
                  :show-layout="true"
                  :float-layout="false"
                  :enable-download="false"
                  :preview-modal="true"
                  :paginate-elements-by-height="1400"
                  filename="struk_transaksi"
                  :pdf-quality="2"
                  :manual-pagination="false"
                  pdf-format="a4"
                  pdf-orientation="portrait"
                  pdf-content-width="800px"
                  ref="html2Pdf">
                  <section slot="pdf-content">
                    <div class="report text-center">
                      <hr>
                      <h1 class="h1 font-weight-bold mb-0 text-gray-900">Struk Transaksi</h1>
                      <h3 class="h3 mb-0 text-gray-800">Laundry Online</h3>
                      <h5 class="h5 mb-0 text-gray-800">Jl. Dr. Wahidin No 86, Balung</h5>
                    </div>
                    <table class="table" cellspacing="0">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Jenis</th>
                          <th>Jumlah</th>
                          <th>Harga</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(m, index) in detail" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ m.jenis }}</td>
                          <td>{{ m.quantity }}</td>
                          <td>{{ m.subtotal }}</td>
                        </tr>
                        <tr v-if="total != ''">
                          <td colspan="3" class="text-right">Total</td>
                          <td>
                            <h6 class="font-weight-bold">Rp {{ total }}</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </VueHtml2pdf>
              </div>
              <!-- <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>JENIS</th>
                    <th>JUMLAH (KG / SATUAN)</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(m, index) in detail" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ m.jenis }}</td>
                    <td>{{ m.quantity }}</td>
                    <td>{{ m.subtotal }}</td>
                  </tr>
                  <tr v-if="total != ''">
                    <td colspan="3" class="text-right">Total</td>
                    <td>
                      <h6 class="font-weight-bold">Rp {{ total }}</h6>
                    </td>
                  </tr>
                </tbody>
              </table> -->

              <button
                :disabled="disableBayar"
                type="button"
                class="btn btn-success mr-3"
                @click="bayar(id_transaksi)"
              >
                Bayar
              </button>
              <router-link
                v-if="
                  transaksi.status != 'diambil' &&
                  transaksi.status != 'selesai' &&
                  transaksi.dibayar != 'dibayar'"
                :to="{
                  name: 'tambah_detail',
                  params: { id: this.id_transaksi },
                }"
                class="btn btn-primary"
                >Tambah Detail Transaksi</router-link
              >
              <!-- <br />
              <div class="col-md-4 text-center">
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
<style scoped>
/* h1,h3,h5 { text-align : center; } */
.report h1 h3 h5 {
width: 800px;
margin : 20px auto 0 auto;
 text-align : center; 
}

 table {
    margin: 25px 20px;
    border-collapse: collapse;
    width: 760px;
    border: 1px solid #e3e6f0;
}
thead tr {
    background-color: #4e73df;
    color: #eaecf4;
    text-align: left;
}
th, td {
    padding: 5px;
    border: 1px solid #e3e6f0;
}
tbody tr {
    border-bottom: 1px solid #eee;
    border: 1px solid #e3e6f0;
}
tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
tbody tr:last-of-type {
    border-bottom: 2px solid #0010A3;
}
</style>
<script>
export default {
  data() {
    return {
      id_transaksi: this.$route.params.id,
      transaksi: {},
      detail: {},
      total: "",
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "owner") {
      this.$swal("Anda tidak dapat mengakses halaman ini");
      this.$router.push("/");
    }
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/transaksi/${this.id_transaksi}`,
        { headers: { Authorization: `Bearer ` + this.$store.state.token } }
      )
      .then((res) => {
        this.transaksi = res.data;
      }),
      this.axios
        .get(
          `http://localhost/api-laundry/public/api/transaksi/detil/${this.id_transaksi}`,
          { headers: { Authorization: `Bearer ` + this.$store.state.token } }
        )
        .then((res) => {
          this.detail = res.data;
        });
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/transaksi/total/${this.id_transaksi}`,
        { headers: { Authorization: `Bearer ` + this.$store.state.token } }
      )
      .then((res) => {
        this.total = res.data.total;
      });
  },

  computed: {
    disableBayar() {
      if (
        this.transaksi.status == "baru" ||
        this.transaksi.status == "proses" ||
        this.transaksi.status == "diambil"
      ) {
        return true;
      } else {
        return false;
      }
    },
    disableStruk() {
      if (
        this.transaksi.status == "baru" ||
        this.transaksi.status == "proses" ||
        this.transaksi.status == "selesai"

      ) {
        return true;
      } else {
        return false;
      }
    },
    disableStatus() {
      if (
        this.transaksi.status == "selesai" ||
        this.transaksi.status == "diambil" ||
        this.detail.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ubahStatus() {
      if (this.transaksi.status == "baru") {
        this.transaksi.status = "proses";
      } else {
        this.transaksi.status = "selesai";
      }

      this.axios
        .post(
          `http://localhost/api-laundry/public/api/transaksi/status/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          // this.$router.push("/transaksi");
          this.$router.go();
        })
        .catch((err) => console.log(err));
    },
    bayar() {
      this.axios
        .post(
          `http://localhost/api-laundry/public/api/transaksi/bayar/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          // this.$router.push("/transaksi");
          this.$router.go();
        })
        .catch((err) => console.log(err));
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
