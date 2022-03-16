<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>

                <div class="container-fluid">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Cetak Report Transaksi</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-group col-md-4">
                                <label>Bulan</label>
                                <select class="form-control" v-model="report.bulan">
                                    <option value="01">Januari</option>
                                    <option value="02">Februari</option>
                                    <option value="03">Maret</option>
                                    <option value="04">April</option>
                                    <option value="05">Mei</option>
                                    <option value="06">Juni</option>
                                    <option value="07">Juli</option>
                                    <option value="08">Agustus</option>
                                    <option value="09">September</option>
                                    <option value="10">Oktober</option>
                                    <option value="11">November</option>
                                    <option value="12">Desember</option>
                                </select>
                                <label>Tahun</label>
                                <select class="form-control" v-model="report.tahun">
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                                <div class="col-md-4 py-2">
                                <button type="button" class="btn btn-sm btn-primary" @click="tampil">Tampilkan</button>
                                </div>
                            </div>
                            <div class="col-md-6 align-items-center">
                                <VueHtml2pdf
                                    :show-layout="true"
                                    :float-layout="false"
                                    :enable-download="false"
                                    :preview-modal="true"
                                    :paginate-elements-by-height="1400"
                                    filename="report_transaksi"
                                    :pdf-quality="2"
                                    :manual-pagination="false"
                                    pdf-format="a4"
                                    pdf-orientation="portrait"
                                    pdf-content-width="800px"
                                    ref="html2Pdf"
                                >
                                
                                    <section slot="pdf-content">
                                        <div class="text-center">
                                            <hr>
                                        <h1 class="h1 font-weight-bold mb-0 text-gray-900">Report Transaksi</h1>
                                        <h3 class="h3 mb-0 text-gray-800">Laundry Online</h3>
                                        <h5 class="h5 mb-0 text-gray-800"> Jl. Dr. Wahidin No 86, Balung</h5>
                                        </div>
                                        <table class="table"
                                                cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>No. </th>
                                                    <th>Member</th>
                                                    <th>Tanggal Transaksi</th>
                                                    <th>Tanggal Pembayaran</th>
                                                    <th>Nominal Pembayaran</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(t, index) in transaksi" :key="index">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ t.nama }}</td>
                                                    <td>{{ t.tgl_order | moment("DD/MM/YYYY") }}</td>
                                                    <td>{{ t.tgl_bayar | moment("DD/MM/YYYY") }}</td>
                                                    <td>Rp {{ t.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </section>
                                </VueHtml2pdf>
                                </div>                          
                            <div class="report">
                                <div class="col-md-6">
                                <button class="btn btn-sm btn-primary" type="button" @click="generateReport">Buat Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
/* button {
    width: 120px;
    height: 35px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background-color: #788BFF;
    color: white;
    border-radius: 3px;
}
button:hover {
    background-color: #335FFF;
}
button:active {
    background-color: #0028B8;
}  */
</style>
<script>
export default {
    data() {
        return {
            report : {},
            transaksi : {}
        }
    },
    created() {
        // var data = JSON.parse(this.$store.state.datauser)
        // var role = data.role
        // if(role == 'admin' || role == 'kasir')
        // {
        //     this.$swal("Anda tidak dapat mengakses halaman ini")
        //     this.$router.push('/') 
        // }
        //this.axios
    //   .get(
    //     `http://localhost/api-laundry/public/api/transaksi/${this.id_transaksi}`,
    //     { headers: { Authorization: `Bearer ` + this.$store.state.token } }
    //   )
    //   .then((res) => {
    //     this.transaksi = res.data;
    //   })
        var date = new Date()
        this.report.tahun = date.getFullYear()
        this.report.bulan = ("0" + (date.getMonth() + 1)).slice(-2)
    },
    methods : {
        tampil() {
            this.axios
            .post('http://localhost/api-laundry/public/api/report', 
            this.report,
             {headers : {'Authorization' : 'Bearer ' + this.$store.state.token} })
                      .then(res => {
                          this.transaksi = res.data
                      })
                      .catch(err => console.log(err))
        },
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        }
    },
}
</script>
