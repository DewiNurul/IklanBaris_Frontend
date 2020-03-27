<template>
  <!--================jual =================-->
    <section class="contact_area p_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                <div class="main_title">
                    <h2>Pasang Iklan Anda</h2>
                    <p>Sertakan beberapa detail.</p>
                </div>
                </div>

            <!--                 
             <b-modal 
                 id="modalBarang"
                 @ok="Save"
             > -->
                <div class="col-lg-7">
                    <form class="row contact_form" method="post" id="contactForm" novalidate="novalidate">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="judul_iklan" class="col-form-label">Judul Iklan</label>
                                <input type="text" class="form-control" id="judul_iklan" name="judul_iklan" placeholder="" v-model="judul_iklan">
                            </div>
                            <div class="form-select" id="default-select">
                                <label for="kategori" class="col-form-label" >Kategori</label>
                                <br>
                                <select v-model="kategori">
                                    <option value="1">Pakaian</option>
                                    <option value="2">Mobil</option>
                                    <option value="3">Sepeda Motor</option>
                                </select>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="harga" class="col-form-label">Harga</label>
                                <input type="text" class="form-control" id="harga" name="harga" placeholder="" v-model="harga">
                            </div>
                            <div class="form-group">
                                <label for="lokasi" class="col-form-label">Lokasi</label>
                                <input type="text" class="form-control" id="lokasi" name="lokasi" placeholder="" v-model="lokasi">
                            </div>
                            <div class="form-group">
                                <label for="deskripsi" class="col-form-label">Deskripsi</label>
                                <textarea class="form-control" name="deskripsi" id="deskripsi" rows="1" placeholder="" v-model="deskripsi"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="foto" class="col-form-label">Foto</label>
                                <input type="file" id="file-input" name="file-input" class="form-control-file" v-on:click="gambar">
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" value="submit" class="btn submit_btn" v-b-modal.modalBarang v-on:click="Add">Pasang Iklan Anda Sekarang</button>
                            </div>

                       </div>
                    </form>
            
                </div>
              <!-- </b-modal>      -->
               
            </div>
        </div>
    </section>
    <!--================Jual =================-->
</template>


<script>
module.exports = {
  data : function(){
    return {
      search: "",
      id: "",
      judul_iklan: "",
      kategori: "",
      harga: "",
      lokasi: "",
      deskripsi: "",
      gambar: "",
      action: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
      barang: [],
      fields: ["id", "judul_iklan", "kategori", "harga","lokasi","deskripsi","gambar","Aksi"],
    }
  },

  methods: {
    getData : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.axios.get("/barang/" + this.perPage + "/" + offset, conf)
      .then(response => {
        if(response.data.status == 1){
          this.barang = response.data.barang;
          this.rows = response.data.count;
        } else {
          this.message = "Gagal menampilkan data barang."
          this.$router.push({name: "login"})
        }
        
      })
      .catch(error => {
        console.log(error);
      });
    },

    pagination : function(){
      if(this.search == ""){
        this.getData();
      } else {
        this.searching();
      }
    },

    Add : function(){
      this.action = "insert";
      this.judul_iklan = "";
      this.kategori = "";
      this.harga = ""; 
      this.lokasi = ""; 
      this.deskripsi = ""; 
      this.gambar = ""; 
    },

    Edit : function(item){
      this.action = "update";
      this.id = item.id;
      this.judul_iklan = judul_iklan;
      this.kategori = item.kategori;
      this.harga = item.harga;
      this.lokasi = item.lokasi; 
      this.deskripsi = item.deskripsi;
      this.gambar = item.gambar;
    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      if(this.action === "insert"){
        let form = new FormData();
        form.append("id", this.id);
        form.append("judul_iklan", this.judul_iklan);
        form.append("kategori", this.kategori);
        form.append("harga", this.harga);
        form.append("lokasi", this.lokasi);
        form.append("deskripsi", this.deskripsi);
        form.append("gambar", this.gambar);
    

        this.axios.post("/barang", form, conf)
        .then(response => {
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        let form = {
          judul_iklan: this.judul_iklan,
          kategori: this.kategori,
          harga: this.harga,
          lokasi: this.lokasi,
          deskripsi: this.deskripsi,
          gambar: this.gambar,
      
        }
        this.axios.put("/barang/" + this.id, form, conf)
        .then(response => {
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },

    Drop : function(id){
      let conf = { headers: { "Authorization" : "Bearer " + this.key} };
      if(confirm('Apakah anda yakin ingin menghapus data ini?')){
        this.axios.delete("/barang/" + id, conf)
        .then(response => {
            this.getData();
            this.message = response.data.message;
            this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
  },
  mounted(){
    this.key = localStorage.getItem("Authorization");
    this.getData();
  }
}
</script>