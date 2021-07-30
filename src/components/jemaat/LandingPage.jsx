import React, { useState } from "react";
import Header from "./Header";
import { BsFillGridFill, BsStopFill } from "react-icons/bs";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { FormContainer, Input } from "../accountBox/common";
// import { Marginer } from "../marginer";

export default function LandingPage() {
  // const [display, setDiplay] = useState("none");
  const [voteDone, setVoteDone] = useState(false);
  // const handleDisplay = (even) => {
  //   if (even.target.value === "status" && even.target.checked) {
  //     setDiplay("");
  //   } else {
  //     setDiplay("none");
  //     setVoteDone(true);
  //   }
  // };
  if("user" === 'sudah memilih'){
    setVoteDone(true);
  }

  return (
    <div>
      <Header />
      {voteDone === true ? (
        <div className="col-md-12 mx-auto mt-1">
          <div className="card border-radius-15">
            <div className="row custom mt-1 col-md-11 mx-auto justify-content-center bg-cust2">
              <div className="mt-1">
                <div className="card card-primary card-outline">
                  {/* /.card-header */}
                  <div className="card-body p-0 ">
                    <div className="mailbox-read-info pt-2 pb-0 bg-warning ">
                      <h6>
                        <strong>Selamat, hasil Vote anda berhasil!</strong>
                      </h6>
                    </div>
                    <div className="mailbox-read-message">
                      <p className="mb-1">
                        <strong>Hello Olive Tree,</strong>
                      </p>
                      <p className="mb-2">
                        &emsp;Data bakal calon Penatua dan Diaken pilihan anda
                        sudah kami terima.
                      </p>
                      <p className="mb-2">
                        &emsp;Tim kerja pemilihan Penatua dan Diaken akan
                        melaksanakan rapat dan mengonfirmasi bakal calon
                        terpilih. Setelah bakal calon ditetapkan yaitu 2 kali
                        dari jumlah komposisi majelis yang dibutuhkan yakni
                        sebanyak 72 orang yang terdiri dari 36 Penatua dan 36
                        Diaken, maka selanjutnya akan dilaksanakan pemilihan
                        majelis pada tanggal 12 September 2021, setelah ibadah
                        hari Minggu.
                      </p>
                      <p className="mb-2">
                        &emsp;Harap bapak/ibu bisa mengikuti kembali!
                      </p>
                      <p className="mb-2">
                        &emsp;Mari kita mendoakan agar proses ini bisa berjalan
                        dengan baik dan berkenan bagi Tuhan.
                      </p>
                      <hr className="mt-1 mb-1" />
                      <p className="mb-1">
                        Terima kasih. Tuhan Yesus memberkati.
                      </p>
                      <p className="mb-0 bg-warning text-center">
                        <strong>Panitia Pemilhan Penatua dan Diaken</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-2 justify-content-center">
              <div className="col-sm-2 justify-content-center mx-auto">
                <Link
                  className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
                  to="/resultpage"
                >
                  Tutup Aplikasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-1">
          {/* <div className="bg-warning mb-2 mt-0">
            <label className="m-0 pl-2 pr-2">
              Centang (✓) jika ingin mengganti password!&nbsp;
              <input
                type="checkbox"
                value="status"
                name={`vote`}
                className="vote"
                onChange={handleDisplay}
              />
            </label>
          </div> */}
          {/* <div className="col-md-11 mx-auto p-0" style={{ display: display }}>
            <div className="card card-primary card-outline custom mb-2 ">
              <div className="card-header d-flex justify-content-between p-1 mx-auto">
                <h5 className="m-0">
                  <strong>Ganti Password</strong>
                </h5>
              </div>
              <div className="card-body p-2 text-center">
                <FormContainer className="col-md-6 mx-auto">
                  <Input
                    type="number"
                    autoFocus
                    placeholder="Gunakan tgl lahir. Contoh: 25121990"
                  />
                  <Input type="old_password" placeholder="Password Lama" />
                  <Input type="password" placeholder="Password Baru" />
                  <Input
                    type="password"
                    placeholder="Konfirmasi Password Baru"
                  />
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <div className="col-sm-2 justify-content-center mx-auto">
                  <button
                    className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
                    to="/votepage"
                  >
                    Ganti Password
                  </button>
                </div>
                <Marginer direction="vertical" margin="1em" />
              </div>
            </div>
          </div> */}
          {/* Content Header (Page header) */}
          <div className="custom col-md-11 mx-auto">
            <div className="container-fluid ">
              <div className="row mb-2 justify-content-center ">
                <div className="col-sm-10">
                  <h4 className="m-0 text-dark">
                    Aplikasi Pemilihan Penatua dan Diaken
                  </h4>
                  <div>
                    <p className="fs-5 col-md-12">
                      Selamat datang di website pemilihan Penatua dan Diaken
                      Gereja Toraja Jemaat Depok 2021-2024. Silahkan memilih{" "}
                      <strong>72 Nama</strong> yang anda ingin calonkan sebagai
                      majelis dengan komposisi <strong>36 Penatua</strong> dan{" "}
                      <strong>36 Diaken</strong>.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="font-weight-bold text-danger">
                      <span>***</span> Perhatikan gambaran tugas Penatua dan
                      Diaken agar dapat mempertimbangkan nama yang akan
                      Bapak/Ibu, Sdra(i) rekomendasikan!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row custom col-md-11 d-flex justify-content-center bg-cust2 pt-3 border-radius-15 mx-auto">
                {/* section penatua */}
                <div className="col-lg-5">
                  <div className="card card-primary card-outline">
                    <div className="card-header d-flex justify-content-between p-1">
                      <button
                        type="button"
                        className="btn btn-primary btn-xs flex-end"
                        data-card-widget="collapse"
                        data-toggle="tooltip"
                        title="Collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <h5 className="m-0">
                        <strong>Penatua</strong>
                      </h5>
                    </div>
                    <div className="card-body p-2">
                      <h6 className="">
                        <strong>
                          Gambaran Syarat, Tugas dan Masa Jabatan Penatua
                        </strong>
                      </h6>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Syarat Penatua
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Anggota sidi
                          yang tidak sedang menjalani disiplin gerejawi.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai
                          pengetahuan Alkitab dan dapat mengajarkan dasar-dasar
                          iman kristen.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai nama
                          baik di dalam dan di luar jemaat.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memahami,
                          menghayati, dan memegang teguh Pengakuan Gereja Toraja
                          dan Tata Gereja Toraja.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memahami dan
                          bersedia melaksanakan tugas dan fungsi Penatua.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai
                          waktu untuk melayani dan memiliki komitmen pelayanan
                          yang sungguh-sungguh.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Suami dan
                          Istri adalah seiman.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Telah di
                          teguhkan di tengah-tengah jemaat.
                        </p>
                      </ul>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Tugas Penatua
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memelihara
                          keutuhan persekutuan dan ketertiban pelayanan dalam
                          jemaat melalui pelayanan penggembalaan dan
                          perkunjungan kepada anggota jemaat.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta memperhatikan dan menjaga ajaran yang
                          berkembang dalam jemaat, agar sesuai dengan Firman
                          Allah dan Pengakuan Gereja Toraja.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta dan Diaken memelihara, melayani,
                          memimpin, dan menjalankan disiplin gerejawi
                          berdasarkan Firman Tuhan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta dan Diaken bertanggung jawab atas
                          pelayanan sakramen.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta dan Diaken melaksanakan katekisasi.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memberitakan
                          Injil.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Menjaga dan
                          memegang teguh rahasia jabatan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mengadakan
                          pertemuan khusus secara periodik untuk membicarakan
                          tugas pokok Penatua.
                        </p>
                      </ul>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Masa Tugas Penatua
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Masa Tugas
                          Penatua adalah tiga tahun dan berakhir setelah
                          penggantinya diteguhkan. Penatua yang akan berakhir
                          masa tugasnya dapat dicalonkan dan dipilih kembali.
                        </p>
                        <div>
                          <p className="mb-1">
                            <BsStopFill className="text-primary" /> Jabatan
                            seorang Penatua ditanggalkan sebelum masa tugasnya
                            berakhir jika :
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>a.</strong> Pindah menjadi anggota jemaat
                            atau gereja lain.
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>b.</strong> Tidak mengindahkan disiplin
                            gerejawi.
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>c.</strong> Mengundurkan diri karena
                            alasan-alasan yang dapat dipertanggungjawabkan.
                          </p>
                        </div>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Penanggalan
                          jabatan tersebut diwartakan dalam warta jemaat selama
                          dua hari Minggu berturut-turut.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* section diaken */}
                <div className="col-lg-5">
                  <div className="card card-primary card-outline">
                    <div className="card-header d-flex justify-content-between p-1">
                      <button
                        type="button"
                        className="btn btn-primary btn-xs flex-end"
                        data-card-widget="collapse"
                        data-toggle="tooltip"
                        title="Collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <h5 className="m-0">
                        <strong>Diaken</strong>
                      </h5>
                    </div>
                    <div className="card-body p-2">
                      <h6 className="">
                        <strong>
                          Gambaran Syarat, Tugas dan Masa Jabatan Diaken
                        </strong>
                      </h6>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Syarat Diaken
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Anggota sidi
                          yang tidak sedang menjalani disiplin gerejawi.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai
                          pengetahuan Alkitab dan dapat mengajarkan dasar-dasar
                          iman kristen.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai nama
                          baik di dalam dan di luar jemaat.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memahami,
                          menghayati, dan memegang teguh Pengakuan Gereja Toraja
                          dan Tata Gereja Toraja.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memahami dan
                          bersedia melaksanakan tugas dan fungsi Diaken.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mempunyai
                          waktu yang cukup untuk melayani dan komitmen pelayanan
                          yang sungguh-sungguh.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Suami dan
                          Istri adalah seiman.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Telah di
                          teguhkan di tengah-tengah jemaat.
                        </p>
                      </ul>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Tugas Diaken
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" />{" "}
                          Menyelenggarakan, dengan kasih sayang, pelayanan
                          diakonia agar tercipta kesejahteraan anggota-anggota
                          jemaat dan sesama manusia yang berkekurangan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mengusahakan
                          dana dan pekerjaan-pekerjaan diakonia dalam arti yang
                          luas.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama
                          Pendeta dan Penatua mengunjungi anggota jemaat yang
                          membutuhkan pertolongan karena berbagai krisis
                          kehidupan, seperti yang sakit, berduka dan yang
                          berkekurangan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta dan penatua memelihara, melayani,
                          memimpin, dan menjalankan disiplin gerejawi
                          berdasarkan firman Tuhan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Bersama-sama
                          dengan Pendeta dan penatua melaksanakan katekisasi.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Memberitakan
                          Injil.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Menjaga dan
                          memegang teguh rahasia jabatan.
                        </p>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Mengadakan
                          pertemuan khusus secara periodik untuk membicarakan
                          tugas pokok Diaken.
                        </p>
                      </ul>
                      <strong>
                        <BsFillGridFill className="mr-2 text-primary" />
                        Masa Tugas Diaken
                      </strong>
                      <hr className="mb-1 mt-1 bg-primary" />
                      <ul className="pl-3 pr-2 text-justify">
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Masa tugas
                          Diaken adalah tiga tahun dan berakhir setelah
                          penggantinya diteguhkan. Diaken yang akan berakhir
                          ,masa tugasnya dapat dicalonkan dan dipilih kembali.
                        </p>
                        <div>
                          <p className="mb-1">
                            <BsStopFill className="text-primary" /> Jabatan
                            seorang Diaken dapat ditanggalkan sebelum masa
                            tugasnya berakhir jika :
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>a.</strong> Pindah menjadi anggota jemaat
                            atau gereja lain.
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>b.</strong> Tidak mengindahkan disiplin
                            gerejawi.
                          </p>
                          <p className="ml-3 mb-1">
                            <strong>c.</strong> Mengundurkan diri karena
                            alasan-alasan yang dapat dipertanggungjawabkan.
                          </p>
                        </div>
                        <p className="mb-1">
                          <BsStopFill className="text-primary" /> Penanggalan
                          jabatan tersebut diwartakan dalam warta jemaat selama
                          dua hari Minggu berturut-turut.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.row */}
              <div className="row justify-content-center col-md-11 custom mt-2 mx-auto p-2">
                <div className="col-sm-10">
                  <p className="font-weight-bold text-danger">
                    <span className="">***</span> Silahkan mendoakan terlebih
                    dahulu nama yang anda rekomendasikan menjadi calon Penatua
                    dan Diaken periode 2021-2024. Harap menggumulkan calon
                    majelis yang anda pilih dengan sungguh-sungguh, tanpa
                    tendensi atau faktor lain yang melawan hati nurani bapak/ibu
                    atau kebenaran Firman Tuhan!
                  </p>
                  <p>
                    Jika bapak/ibu sudah mendoakan, silahkan klik lanjutkan ke
                    halaman berikut untuk memilih nama bakal calon Penatua dan
                    Diaken.
                  </p>
                </div>
              </div>
              <div className="row m-2 justify-content-center">
                <div className="col-sm-2 justify-content-center mx-auto">
                  <Link
                    className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
                    to="/votepage"
                  >
                    Lanjutkan
                  </Link>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
