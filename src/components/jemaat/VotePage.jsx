import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

export default function VotePage() {
  const [dataPenatua, setDataPenatua] = useState([]);
  const [dataDiaken, setDataDiaken] = useState([]);
  const [totalPenatua, setTotalPenatua] = useState(0);
  const [totalDiaken, setTotalDiaken] = useState(0);
  const [disable, setDisable] = useState(true);
  const [vote, setVote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resPenatua = await axios.get(
        "https://my-json-server.typicode.com/JuanBiantong/db_anggota/penatua"
      );
      const resDiaken = await axios.get(
        "https://my-json-server.typicode.com/JuanBiantong/db_anggota/diaken"
      );
      setDataDiaken(resDiaken.data);
      setDataPenatua(resPenatua.data);
    };
    fetchData();
  }, []);

  const handleCheckbox = (even) => {
    let penatuaCheck = Array.from(document.getElementsByClassName(`penatua`));
    let diakenCheck = Array.from(document.getElementsByClassName(`diaken`));

    dataPenatua.map((d, index) => {
      if (`penatua${d.id}` === even.target.id) {
        let tmp_array = dataPenatua;
        if (even.target.value === "penatua" && even.target.checked) {
          tmp_array[index].penatua = 1;
          setDataPenatua(tmp_array);
        } else {
          tmp_array[index].penatua = 0;
          setDataPenatua(tmp_array);
        }
        if (
          dataPenatua.filter((item) => {
            return item.penatua;
          }).length === 5
        ) {
          Swal.fire({
            position: "center",
            icon: "warning",
            html: "<strong>Batas Maksimum Pilihan Penatua</strong>",
            showConfirmButton: true,
            confirmButtonColor: "#ec9e0d"
          });
        }
      }

      //handle disable checkbox base on maximum length
      if (
        penatuaCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        penatuaCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = true;
          }
        });
      } else {
        penatuaCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = false;
          }
        });
      }
      return d;
    });

    dataDiaken.map((d, index) => {
      if (`diaken${d.id}` === even.target.id) {
        let tmp_array = dataDiaken;
        if (even.target.value === "diaken" && even.target.checked) {
          tmp_array[index].diaken = 1;
          setDataDiaken(tmp_array);
        } else {
          tmp_array[index].diaken = 0;
          setDataDiaken(tmp_array);
        }
        if (
          dataDiaken.filter((item) => {
            return item.diaken;
          }).length === 5
        ) {
          Swal.fire({
            position: "center",
            icon: "warning",
            html: "<strong>Batas Maksimum Pilihan Diaken</strong>",
            showConfirmButton: true,
            confirmButtonColor: "#ec9e0d"
          });
        }
      }

      //handle disable checkbox base on maximum length
      if (
        diakenCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        diakenCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = true;
          }
        });
      } else {
        diakenCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = false;
          }
        });
      }

      return d;
    });

    setTotalPenatua(
      dataPenatua.filter((item) => {
        return item.penatua;
      }).length
    );
    setTotalDiaken(
      dataDiaken.filter((item) => {
        return item.diaken;
      }).length
    );
  };
  //handle confirmatin checkbox
  const handleDisable = (even) => {
    let penatuaCheck = Array.from(document.getElementsByClassName(`penatua`));
    let diakenCheck = Array.from(document.getElementsByClassName(`diaken`));

    if (totalPenatua === 0 && totalDiaken === 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        html: "<strong>Anda belum memilih penatua ataupun diaken!</strong>",
        showConfirmButton: true,
        confirmButtonColor: "#ec9e0d"
      });
      $(".vote").prop("checked", false);
    }
    if (even.target.value === "status" && even.target.checked) {
      penatuaCheck.forEach((element) => {
        element.disabled = true;
      });
      diakenCheck.forEach((element) => {
        element.disabled = true;
      });
      setDisable(false);
    } else {
      if (
        penatuaCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        penatuaCheck.forEach((element) => {
          if (element.checked === true) {
            element.disabled = false;
          }
        });
      } else {
        penatuaCheck.forEach((element) => {
          element.disabled = false;
        });
      }

      if (
        diakenCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        diakenCheck.forEach((element) => {
          if (element.checked === true) {
            element.disabled = false;
          }
        });
      } else {
        diakenCheck.forEach((element) => {
          element.disabled = false;
        });
      }
      setDisable(true);
    }
  };
  //filter hasil check untuk taplihan summary
  const handleVote = () => {
    let tmp_vote = [];
    let tmp_penatuaVote = dataPenatua.filter(function (el) {
      return el.penatua === 1;
    });
    let tmp_diakenVote = dataDiaken.filter(function (el) {
      return el.diaken === 1;
    });

    tmp_vote = [...tmp_penatuaVote, ...tmp_diakenVote];
    setVote(tmp_vote);
  };

  //untuk fungsi search berdasarkan sektor dan nama balon
  $(document).ready(function () {
    //filter button balon

    //filter button review pilihan

    //filter search ballon
    $("#myInput").on("keyup", function () {
      let value = $(this).val().toLowerCase();
      if (value !== "") {
        $(".sektor").removeClass("active");
      } else {
        $("#all").addClass("active");
      }
      $("#myTable tr").filter(function () {
        return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    //filter search review pilihan
    $("#myInput2").on("keyup", function () {
      let value = $(this).val().toLowerCase();
      if (value !== "") {
        $(".sektor2").removeClass("active");
      } else {
        $("#all2").addClass("active");
      }
      $("#myTable2 tr").filter(function () {
        return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  return (
    <div className="row justify-content-center w-100 mx-auto">
      <div className="col-md-12 p-0">
        <div className="card border-radius-15">
          <Header />
          <div className="card card-widget widget-user-2 m-0 border-radius-15">
            {/* Add the bg color to the header using any of the bg-* classes */}

            <div className="card-footer bg-light pt-1 pr-2 pl-2 pb-0">
              <ul className="nav flex-column ">
                <li className="nav-item ">
                  <strong className="mr-2 ml-2 p-0 float-right">
                    Total Penatua yang anda pilih{" "}
                    <span className="badge bg-warning m-1">{totalPenatua}</span>{" "}
                    Orang
                  </strong>
                </li>
                <li className="nav-item">
                  <strong className="mr-2 ml-2 p-0 float-right">
                    Total Diaken yang anda pilih{" "}
                    <span className="badge bg-warning m-1">{totalDiaken}</span>{" "}
                    Orang
                  </strong>
                </li>
                <li className="nav-item mx-auto m-1 p-1 m-0 d-flex flex-wrap justify-content-center"></li>
              </ul>
            </div>
          </div>
          <div className="row custom m-1 col-md-11 mx-auto justify-content-center pb-3 pr-1 pl-1 bg-cust2">
            <div className="card-header col-md-10 pt-0 pb-0 mt-2 mb-0">
              <h6 className="float-left text-bold text-white">DAFTAR CALON</h6>
              <div className="card-tools">
                <div className="input-group input-group-sm search-width">
                  <input
                    type="text"
                    name="table_search"
                    id="myInput"
                    className="form-control float-right"
                    placeholder="Cari nama calon.."
                  />
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0 col-md-10 table-height">
              <table className="table tableFixHead table-striped table-xs">
                <tbody id="myTable">
                  {dataPenatua.map((item, i) => {
                    return (
                      <Fragment key={i}>
                        <tr style={{ width: "100%" }}>
                          <td className="p-1 m-0 text-center w-50 rounded p-2 mx-auto">
                            <img
                              src={item.avatar}
                              alt="avatar"
                              className="rounded border border-warning"
                              style={{
                                opacity: ".8",
                                width: 100,
                                verticalAlign: "middle"
                              }}
                            />
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                          </td>
                          <td
                            className="p-1 m-0 "
                            style={{
                              width: "50%",
                              verticalAlign: "middle"
                            }}
                          >
                            <form className="custom2">
                              <div className="d-flex mt-1">
                                <input
                                  id={`penatua${item.id}`}
                                  type="checkbox"
                                  name={`vote${item.id}`}
                                  onChange={handleCheckbox}
                                  className={`penatua`}
                                  value="penatua"
                                />
                                <strong>&nbsp;Penatua</strong>
                              </div>
                            </form>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                  {dataDiaken.map((item, i) => {
                    return (
                      <Fragment key={i}>
                        <tr style={{ width: "100%" }}>
                          <td className="p-1 m-0 justify-content-center mx-auto rounded p-2 text-center">
                            <img
                              src={item.avatar}
                              alt="avatar"
                              className="rounded border border-warning"
                              style={{
                                opacity: ".8",
                                width: 100,
                                verticalAlign: "middle"
                              }}
                            />
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                          </td>
                          <td
                            className="p-1 m-0"
                            style={{
                              width: "50%",
                              verticalAlign: "middle"
                            }}
                          >
                            <form className="custom2">
                              <div className="d-flex mt-1">
                                <input
                                  id={`diaken${item.id}`}
                                  type="checkbox"
                                  name={`vote${item.id}`}
                                  onChange={handleCheckbox}
                                  className={`diaken`}
                                  value="diaken"
                                />
                                <strong>&nbsp;Diaken</strong>
                              </div>
                            </form>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="d-flex mt-2 mb-0 p-1 bg-warning rounded flex-column">
              <button
                className="btn w-50 mx-auto submit-btn p-1 m-0 "
                data-toggle="modal"
                data-target="#myModal"
                onClick={handleVote}
              >
                Tampilkan Pilihan
              </button>
              <label className="m-0 pl-2 pr-2">
                Centang (✓) jika sudah yakin dengan pilihan anda, lalu klik
                Vote!&nbsp;
                <input
                  id="vote"
                  type="checkbox"
                  value="status"
                  onChange={handleDisable}
                  name={`vote`}
                  className="vote"
                />
              </label>
            </div>
            {/* modal */}
            <div
              className="modal fade"
              id="myModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header pl-2 pr-0 pb-0 pt-2 bg-cust2 ">
                    <ul className="nav mx-auto">
                      <li className="nav-item ">
                        <p className="m-0 p-0 d-flex text-light">
                          Total Penatua yang anda pilih{" "}
                          <span className="badge bg-warning m-1">
                            {totalPenatua}
                          </span>{" "}
                          Orang
                        </p>
                        <p className="m-0 p-0 pb-2 text-light">
                          Total Penatua yang anda pilih{" "}
                          <span className="badge bg-warning m-1">
                            {totalDiaken}
                          </span>{" "}
                          Orang
                        </p>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn close bg-danger opacity-5 p-2"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body pt-0 pl-1 pr-1 mt-5">
                    <div className="row custom mr-1 mb-1 ml-1 mt-0 mx-auto justify-content-center pb-3 pt-1 pr-1 pl-1 bg-cust2">
                      <div className="d-flex card-header justify-content-between pt-0 pb-0 mt-2 mb-1">
                        <div className="card-tools">
                          <h6 className="text-bold text-white float-left">
                            Hasil Pilihan
                          </h6>
                        </div>
                        <div className="card-tools w-50">
                          <div className="input-group input-group-sm">
                            <input
                              type="text"
                              name="table_search"
                              id="myInput2"
                              className="form-control float-right"
                              placeholder="Cari nama calon.."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0 col-md-10 table-height">
                        <table className="table tableFixHead table-bordered table-striped table-xs">
                          <tbody id="myTable2">
                            {vote.map((item, i) => {
                              return (
                                <Fragment key={i}>
                                  <tr style={{ width: "100%" }}>
                                    <td className="p-1 m-0">{item.name}</td>
                                    {item.penatua === 1 ? (
                                      <td className="p-1 m-0 text-center">
                                        Penatua
                                      </td>
                                    ) : item.diaken === 1 ? (
                                      <td className="p-1 m-0 text-center">
                                        Diaken
                                      </td>
                                    ) : (
                                      <td></td>
                                    )}
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="w-25 mx-auto mt-2">
                      <button
                        className="btn submit-btn mx-auto p-1 m-0"
                        data-dismiss="modal"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of modal */}
          </div>
          <div className="row m-2 justify-content-center">
            <div className="col-sm-2 justify-content-center mx-auto">
              <Link to="/confirmpage">
                <button
                  id="submit"
                  className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
                  disabled={disable}
                >
                  Vote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
