import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
// import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function VotePage() {
	const [data, setData] = useState([]);
	const [totalPenatua, setTotalPenatua] = useState(0);
	const [totalDiaken, setTotalDiaken] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('https://my-json-server.typicode.com/JuanBiantong/db_anggota/anggota');
			setData(res.data);
		};
		fetchData();
	}, []);

	const handleCheckbox = (even) => {
		data.map((d, index) => {
			if (`${d.id}a` === even.target.name) {
				let tmp_array = data;
				if (even.target.value === 'penatua' && even.target.checked) {
					tmp_array[index].penatua = 1;
					tmp_array[index].diaken = 0;
					setData(tmp_array);
				} else {
					tmp_array[index].penatua = 0;
					setData(tmp_array);
				}
			}
			if (`${d.id}b` === even.target.name) {
				let tmp_array = data;
				if (even.target.value === 'diaken' && even.target.checked) {
					tmp_array[index].diaken = 1;
					tmp_array[index].penatua = 0;
					setData(tmp_array);
				} else {
					tmp_array[index].diaken = 0;
					setData(tmp_array);
				}
			}
			return d;
		});

		setTotalPenatua(
			data.filter((item) => {
				return item.penatua;
			}).length
		);
		setTotalDiaken(
			data.filter((item) => {
				return item.diaken;
			}).length
		);
	};

	data.map((d) => {
		return $(function () {
			$(`.${d.id}vote`).click(function (e) {
				$(`.${d.id}vote`).not(this).prop('checked', false);
			});

			if (totalPenatua === 10) {
				$(`#penatua${d.id}:not(:checked)`).attr('disabled', 'disabled');
			} else {
				$(`#penatua${d.id}`).removeAttr('disabled');
			}

			if (totalDiaken === 5) {
				$(`#diaken${d.id}:not(:checked)`).attr('disabled', 'disabled');
			} else {
				$(`#diaken${d.id}`).removeAttr('disabled');
			}
		});
	});
	$(document).ready(function () {
		$(function () {
			$('.sektor').click(function (e) {
				let value = $(this).val();
				$('#myTable tr').filter(function () {
					return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				});
			});
		});
		$('#myInput').on('keyup', function () {
			let value = $(this).val().toLowerCase();
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		});
		$('.clear').on('click', function () {
			$('#myTable tr').filter(function () {
				return $(this).toggle($(this).text().toLowerCase().indexOf('') > -1);
			});
		});
	});
	return (
		<div className="content-wrapper">
			{/* table voting */}
			<div className="row justify-content-center w-100 mx-auto">
				<div className="col-md-12 fixed-top mt-1">
					<div className="card border-radius-15">
						<div className="card card-widget widget-user-2 m-0 border-radius-15">
							{/* Add the bg color to the header using any of the bg-* classes */}
							<div className="widget-user-header bg-cust p-1 pl-3 border-top-radius-15">
								<div className="widget-user-image">
									<img
										className="img-circle elevation-2 mr-3"
										src="assets/logogetor.png"
										alt="User Avatar"
									/>
								</div>
								{/* /.widget-user-image */}
								<h6 className="text-bold text-white mt-2">Olive Tree</h6>
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
									<li className="nav-item mx-auto m-1 p-1 m-0">
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
											placeholder="Cari nama atau sektor calon.."
										/>
										<div className="input-group-append">
											<button type="submit" className="btn btn-default">
												<i className="fas fa-search" />
											</button>
										</div>
									</div>
								</div>
							</div>
							{/* /.card-header */}
							<div className="card-body table-responsive p-0 col-md-10 table-height">
								<table className="table tableFixHead table-bordered table-striped table-xs">
									<thead className="m-0 ">
										<tr>
											<th className="p-1 m-0">Nama Lengkap</th>
											<th className="p-1 m-0">Skt</th>
											<th className="p-1 m-0 text-center">Jabatan</th>
										</tr>
									</thead>
									<tbody id="myTable">
										{data.map((item, i) => {
											return (
												<Fragment key={i}>
													<tr style={{ width: '100%' }}>
														{/* <td style={{ width: '2%', textAlign: 'center' }}>{item.id}</td> */}
														<td className="p-1 m-0" style={{ width: '43%' }}>
															{item.name}
														</td>
														<td
															className="p-1 m-0"
															style={{ width: '1%', textAlign: 'center' }}
														>
															{item.sector}
														</td>
														<td
															className="p-1 m-0"
															style={{
																width: '56%',
																alignItems: 'center',
																lineHeight: '100%',
															}}
														>
															<form className="custom2">
																<div>
																	<input
																		id={`penatua${item.id}`}
																		type="checkbox"
																		name={`${item.id}a`}
																		onChange={handleCheckbox}
																		className={`${item.id}vote`}
																		value="penatua"
																	/>
																	<label>&nbsp;Penatua</label>
																</div>
																<div>
																	<input
																		id={`diaken${item.id}`}
																		type="checkbox"
																		name={`${item.id}b`}
																		onChange={handleCheckbox}
																		className={`${item.id}vote`}
																		value="diaken"
																	/>
																	<label>&nbsp;Diaken</label>
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
						</div>
						<div className="row m-2 justify-content-center">
							<div className="col-sm-2 justify-content-center mx-auto">
								<Link
									className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
									to="/confirmpage"
								>
									Vote
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
