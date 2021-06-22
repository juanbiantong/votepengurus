import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function ResultPage() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('https://my-json-server.typicode.com/JuanBiantong/db_anggota/vote_result');
			setData(res.data);
		};
		fetchData();
	}, []);

	const totalPenatua = data.filter((item) => {
		return item.penatua;
	}).length;
	const totalDiaken = data.filter((item) => {
		return item.diaken;
	}).length;
	$(document).ready(function () {
		$(function () {
			$('.sektor').click(function (e) {
				let value = $(this).val();
				$('#myTable tr').filter(function () {
					return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				});
			});
		});
		$('.clear').on('click', function () {
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf('') > -1);
			});
		});
	});
	return (
		<Fragment>
			<div className="row justify-content-center w-100 mx-auto">
				<div className="col-md-12 fixed-top mt-2">
					<div className="card border-radius-15">
						<div className="card card-widget widget-user-2 m-0 border-radius-15">
							{/* Add the bg color to the header using any of the bg-* classes */}
							<div className="widget-user-header bg-cust p-2 border-top-radius-15">
								<div className="widget-user-image">
									<img
										className="img-circle elevation-2 mr-3"
										src="assets/logogetor.png"
										alt="User Avatar"
									/>
								</div>
								{/* /.widget-user-image */}
								<h6 className="text-bold text-white mt-2">[Nama Pemilih]</h6>
								<h6 className="text-bold text-white">Sektor 1</h6>
							</div>
							<div className="card-footer bg-light pt-1 pr-2 pl-2 pb-0">
								<ul className="nav flex-column ">
									<li className="nav-item ">
										<strong className="mr-2 ml-2 p-0 float-right">
											Total Penatua yang anda pilih{' '}
											<span className="badge bg-warning m-1">{totalPenatua}</span> Orang
										</strong>
									</li>
									<li className="nav-item">
										<strong className="mr-2 ml-2 p-0 float-right">
											Total Diaken yang anda pilih{' '}
											<span className="badge bg-warning m-1">{totalDiaken}</span> Orang
										</strong>
									</li>
									<li className="nav-item mx-auto m-1 p-1">
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="true"
											value="1"
										>
											1
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="2"
										>
											2
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="3"
										>
											3
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="4"
										>
											4
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="5"
										>
											5
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="6"
										>
											6
										</button>
										<button
											className="btn btn-outline-primary btn-sm sektor font-weight-bold"
											aria-pressed="false"
											value="7"
										>
											7
										</button>
										<button
											className="btn btn-outline-primary btn-sm clear font-weight-bold"
											aria-pressed="false"
										>
											Semua
										</button>
									</li>
								</ul>
							</div>
						</div>
						<div className="card card-row card-warning m-0">
							<div className="card-header p-2">
								<h4 className="card-title text-bold">Hasil Pilihan Anda</h4>
							</div>
						</div>
						<div className="row custom mr-1 mb-1 ml-1 mt-0 justify-content-center pb-3 pt-1 pr-1 pl-1 bg-cust2">
							<div className="card-body table-responsive p-0 col-md-10 table-height">
								<table className="table tableFixHead table-bordered table-striped table-xs">
									<thead className="m-0 ">
										<tr>
											<th className="p-1 m-0">Nama Lengkap</th>
											<th className="p-1 m-0 text-center">Skt</th>
											<th className="p-1 m-0 text-center">Jabatan</th>
										</tr>
									</thead>
									<tbody id="myTable">
										{data.map((item, i) => {
											return (
												<Fragment key={i}>
													<tr style={{ width: '100%' }}>
														{/* <td style={{ width: '2%', textAlign: 'center' }}>{item.id}</td> */}
														<td className="p-1 m-0">{item.name}</td>
														<td className="p-1 m-0 text-center">{item.sector}</td>
														{item.penatua === 1 ? (
															<td className="p-1 m-0 text-center">Penatua</td>
														) : item.diaken === 1 ? (
															<td className="p-1 m-0 text-center">Diaken</td>
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
						<div className="row m-2 justify-content-center">
							<div className="col-sm-2 justify-content-center mx-auto">
								<Link to="/admin" className="btn submit-btn mx-auto p-1 m-0 justify-content-center">Keluar</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
