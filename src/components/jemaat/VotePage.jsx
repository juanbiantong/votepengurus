import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';

export default function VotePage() {
	const [data, setData] = useState([]);
	const [totalPenatua, setTotalPenatua] = useState(0);
	const [totalDiaken, setTotalDiaken] = useState(0);
	const [vote, setVote] = useState([]);
	const [disable, setDisable] = useState(true);

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

	const handleDisable = (even) => {
		if (even.target.value === 'status' && even.target.checked) {
			setDisable(false);
		} else {
			setDisable(true);
		}
	};
	const handleVote = () => {
		let tmp_vote = data;
		for (let i = 0; i < tmp_vote.length; i++) {
			if (tmp_vote[i].penatua === 0 && tmp_vote[i].diaken === 0) {
				tmp_vote.splice(i, 1);
				i--;
			}
		}
		setVote(tmp_vote);
		console.log(vote);
	};

	$(document).ready(function () {
		if (totalPenatua === 10) {
			$(`.penatuacheck input[type=checkbox]:not(:checked)`).attr('disabled', true);
		} else {
			$(`.penatuacheck input[type=checkbox]`).removeAttr('disabled');
		}

		if (totalDiaken === 5) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				onOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer);
					toast.addEventListener('mouseleave', Swal.resumeTimer);
				},
			});

			Toast.fire({
				icon: 'success',
				title: 'Signed in successfully',
			});
			$(`.diakencheck input[type=checkbox]:not(:checked)`).attr('disabled', true);
		} else {
			$(`.diakencheck input[type=checkbox]`).removeAttr('disabled');
		}
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
		data.map((d) => {
			return $(function () {
				$(`.${d.id}vote`).click(function (e) {
					$(`.${d.id}vote`).not(this).prop('checked', false);
				});
				$(`.vote`).click(function (e) {
					if ($(this).is(':checked')) {
						$(`.${d.id}vote`).attr('disabled', true);
					} else {
						$(`.${d.id}vote`).removeAttr('disabled');
					}
				});
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
															<div className="penatuacheck">
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
															<div className="diakencheck">
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
						<div className="mt-2 mb-0 p-1 bg-warning rounded">
							<input
								type="checkbox"
								value="status"
								onChange={handleDisable}
								name={`vote`}
								className="vote"
							/>
							<label className="m-0">&nbsp;Apakah anda sudah yakin dengan pilihan anda?</label>
						</div>
					</div>
					<div className="row m-2 justify-content-center">
						<div className="col-sm-2 justify-content-center mx-auto">
							<Link to="/confirmpage">
								<button
									className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
									onClick={handleVote}
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
