import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

export default function VotePage() {
	const [data, setData] = useState([]);
	const [totalPenatua, setTotalPenatua] = useState(0);
	const [totalDiaken, setTotalDiaken] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('http://localhost:3000/anggota');
			setData(res.data);
		};
		fetchData();
	}, []);

	console.log(data, 'data');
	return (
		<Fragment>
			{/* table voting */}
			<div className="row justify-content-center mt-2">
				<div className="col-md-12 mx-auto" style={{ position: 'fixed', height: '100vh' }}>
					<div className="card">
						<div className="card card-widget widget-user-2 m-0">
							{/* Add the bg color to the header using any of the bg-* classes */}
							<div className="widget-user-header bg-cust p-2">
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
											<span className="badge bg-warning m-1">31</span> Orang
										</strong>
									</li>
									<li className="nav-item">
										<strong className="mr-2 ml-2 p-0 float-right">
											Total Diaken yang anda pilih <span className="badge bg-warning m-1">5</span>{' '}
											Orang
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
						<div className="row custom m-1 justify-content-center pb-3 pr-1 pl-1 bg-cust2">
							<div className="card-header col-md-10 pt-0 pb-0 mt-2 mb-0">
								<h6 className="float-left text-bold">DAFTAR CALON</h6>
								<div className="card-tools">
									<div className="input-group input-group-sm seacch-width">
										<input
											type="text"
											name="table_search"
											className="form-control float-right"
											placeholder="Search"
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
							<div
								className="card-body table-responsive p-0 col-md-10 table-height"
							>
								<table className="table tableFixHead table-bordered table-striped table-xs">
									<thead className="m-0 ">
										<tr>
											<th className="p-1 m-0">Nama Lengkap</th>
											<th className="p-1 m-0">Skt</th>
											<th className="p-1 m-0">Jabatan</th>
										</tr>
									</thead>
									<tbody id="myTable">
										{data.map((item, i) => {
											return (
												<Fragment key={i}>
													<tr style={{width:"100%"}}>
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
																		type="checkbox"
																		name={`${item.id}a`}
																		// onChange={handleCheckbox}
																		className={`${item.id}vote`}
																		value="penatua"
																	/>
																	<label>&nbsp;Penatua</label>
																</div>
																<div>
																	<input
																		type="checkbox"
																		name={`${item.id}b`}
																		// onChange={handleCheckbox}
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
								<btn className="btn submit-btn mx-auto p-1 m-0 justify-content-center">Vote</btn>
							</div>
						</div>
					</div>

					<div>
						<footer className="main-footer">
							<strong>Copyright ©saleKo&lt;de&gt; 2021.</strong> All rights reserved.
						</footer>
					</div>
				</div>
			</div>
			{/* /.row */}
		</Fragment>
	);
}
