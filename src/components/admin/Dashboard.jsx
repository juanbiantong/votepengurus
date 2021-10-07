import React, { useEffect } from "react";
// import { getCalons, getBalons, getVote, getVoteCalon } from "./apiAdmin";
// import {API} from '../../config';

export default function Dashboard() {
  // const [balons, setBalons] = useState([]);
  // const [calons, setCalons] = useState([]);
  // const [penatuaList, setPenatuaList] = useState([]);
  // const [diakenList, setDiakenList] = useState([]);
  // const [voteList, setVoteList] = useState([]);
  // const [vote, setVote] = useState([]);
  // const loadCalons = () => {
  //   getCalons().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setCalons(data);
  //     }
  //   });
  // };
  // const loadBalons = () => {
  //   getBalons().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setBalons(data);
  //     }
  //   });
  // };
  // const loadVote = () => {
  //   getVote().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setVoteList(data);
  //     }
  //   });
  // };
  // const loadVoteCalon = () => {
  //   getVoteCalon().then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setVote(data);
  //     }
  //   });
  // };
  useEffect(() => {
    // return loadBalons();
  }, []);
  useEffect(() => {
    // return loadCalons();
  }, []);
  useEffect(() => {
    // return loadVote();
  }, []);
  useEffect(() => {
    // return loadVoteCalon();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      // loadBalons();
      // loadCalons();
      // loadVote();
      // loadVoteCalon();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const user = 60;
  // const votes = voteList.length;
  // const blmVote = user - votes;
  // const voteBalon = vote.length;
  // const blmVoteBalon = user - voteBalon;

  return (
    <div className="content-wrapper">
        <div className="container-fluid pt-3">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{user}</h3>
                  <p>Total User</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>
                    {/* 53<sup style={{ fontSize: 20 }}>%</sup> */}
                    {/* {balons.length} */}
                  </h3>
                  <p>Total Balon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  {/* <h3>{calons.length}</h3> */}
                  <p>Total Calon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            {/* <div className="col-lg-3 col-6"> */}
            {/* small box */}
            {/* <div className="small-box bg-danger">
								<div className="inner">
									<h3>{blmVoteCalon}</h3>
									<p>Total Belum Vote Calon</p>
								</div>
								<div className="icon">
									<i className="ion ion-pie-graph" />
								</div>
								<a href=" " className="small-box-footer">
									More info <i className="fas fa-arrow-circle-right" />
								</a>
							</div>
						</div> */}
          </div>
        </div>
        <div className="container-fluid pt-3">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  {/* <h3>{voteBalon}</h3> */}
                  <p>Total Vote Balon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>
                    {/* 53<sup style={{ fontSize: 20 }}>%</sup> */}
                    {/* {blmVoteBalon} */}
                  </h3>
                  <p>Total Belum Vote Balon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  {/* <h3>{votes}</h3> */}
                  <p>Total Vote Calon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  {/* <h3>{blmVote}</h3> */}
                  <p>Total Belum Vote Calon</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href=" " className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="card col-md-6">
              <div className="card-header d-flex justify-content-between bg-blue">
                <button
                  type="button"
                  className="btn bg-white btn-xs flex-end"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <h3 className="card-title">Hasil Voting Balon Ketua</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <table className="table table-striped">
                  <thead>
                    <tr className="">
                      <th>No</th>
                      <th>Nama</th>
                      <th>Category</th>
                      <th style={{ width: 40 }}>Jumlah Suara</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {balons.map((item, i) => {
                      return (
                        <Fragment key={i}>
                          <tr>
                            <td> {i + 1} </td>
                            <td> {item.name} </td>
                            <td> {item.category} </td>
                            <td> {item.amount} </td>
                          </tr>
                        </Fragment>
                      );
                    })} */}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            <div className="card card-danger col-md-6">
              <div className="card-header d-flex justify-content-between bg-green">
                <button
                  type="button"
                  className="btn bg-white btn-xs flex-end"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <h3 className="card-title">Hasil Voting Calon Ketua</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <table className="table table-striped">
                  <thead>
                    <tr className="">
                      <th>No</th>
                      <th>Nama</th>
                      <th>Category</th>
                      <th style={{ width: 40 }}>Jumlah Suara</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {calons.map((item, i) => {
                      return (
                        <Fragment key={i}>
                          <tr>
                            <td> {i + 1} </td>
                            <td> {item.name} </td>
                            <td> {item.category} </td>
                            <td> {item.amount} </td>
                          </tr>
                        </Fragment>
                      );
                    })} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
