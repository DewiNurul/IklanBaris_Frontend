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
                <div class="col-lg-7">
                    <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="judul_iklan" class="col-form-label">Judul Iklan</label>
                                <input type="text" class="form-control" id="judul_iklan" name="judul_iklan" placeholder="">
                            </div>
                            <div class="form-select" id="default-select">
                                <label for="kategori" class="col-form-label">Kategori</label>
                                <br>
                                <select>
                                    <option value="1">Pakaian</option>
                                    <option value="2">Mobil</option>
                                    <option value="3">Sepeda Motor</option>
                                </select>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="harga" class="col-form-label">Harga</label>
                                <input type="text" class="form-control" id="harga" name="harga" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="lokasi" class="col-form-label">Lokasi</label>
                                <input type="text" class="form-control" id="lokasi" name="lokasi" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="deskripsi" class="col-form-label">Deskripsi</label>
                                <textarea class="form-control" name="deskripsi" id="deskripsi" rows="1" placeholder=""></textarea>
                            </div>
                            <div class="form-group">
                                <label for="foto" class="col-form-label">Foto</label>
                                <input type="file" id="file-input" name="file-input" class="form-control-file">
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" value="submit" class="btn submit_btn">Pasang Iklan Anda Sekarang</button>
                            </div>

                       </div>
                    </form>
                </div>
                       
               
            </div>
        </div>
    </section>
    <!--================Jual =================-->


</template>