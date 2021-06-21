import React from 'react';

export default function Dashboard() {
	return (
		<div className="content-wrapper">
			<section className="content">
				<div className="container-fluid pt-3">
					{/* Small boxes (Stat box) */}
					<div className="row">
						<div className="col-lg-3 col-6">
							{/* small box */}
							<div className="small-box bg-info">
								<div className="inner">
									<h3>{500}</h3>
									<p>Total Pemilih</p>
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
							<div className="small-box bg-success">
								<div className="inner">
									<h3>
										{/* 53<sup style={{ fontSize: 20 }}>%</sup> */}
										{400}
									</h3>
									<p>Total Calon</p>
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
							<div className="small-box bg-warning">
								<div className="inner">
									<h3>200</h3>
									<p>Total Penatua Terpilih</p>
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
							<div className="small-box bg-danger">
								<div className="inner">
									<h3>{100}</h3>
									<p>Total Diaken Terpilih</p>
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
						<div className="card col-md-7">
							<div className="card-header">
								<h3 className="card-title">Striped Full Width Table</h3>
							</div>
							{/* /.card-header */}
							<div className="card-body p-0">
								<table className="table table-striped">
									<thead>
										<tr className="">
											<th style={{ width: 10 }}>#</th>
											<th>Task</th>
											<th>Progress</th>
											<th style={{ width: 40 }}>Label</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1.</td>
											<td>Update software</td>
											<td>
												<div className="progress progress-xs">
													<div
														className="progress-bar progress-bar-danger"
														style={{ width: '55%' }}
													/>
												</div>
											</td>
											<td>
												<span className="badge bg-danger">55%</span>
											</td>
										</tr>
										<tr>
											<td>2.</td>
											<td>Clean database</td>
											<td>
												<div className="progress progress-xs">
													<div className="progress-bar bg-warning" style={{ width: '70%' }} />
												</div>
											</td>
											<td>
												<span className="badge bg-warning">70%</span>
											</td>
										</tr>
										<tr>
											<td>3.</td>
											<td>Cron job running</td>
											<td>
												<div className="progress progress-xs progress-striped active">
													<div className="progress-bar bg-primary" style={{ width: '30%' }} />
												</div>
											</td>
											<td>
												<span className="badge bg-primary">30%</span>
											</td>
										</tr>
										<tr>
											<td>4.</td>
											<td>Fix and squish bugs</td>
											<td>
												<div className="progress progress-xs progress-striped active">
													<div className="progress-bar bg-success" style={{ width: '90%' }} />
												</div>
											</td>
											<td>
												<span className="badge bg-success">90%</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							{/* /.card-body */}
						</div>
						<div className="card card-danger col-md-5">
							<div className="card-header">
								<h3 className="card-title">Donut Chart</h3>
								<div className="card-tools">
									<button type="button" className="btn btn-tool" data-card-widget="collapse">
										<i className="fas fa-minus" />
									</button>
									<button type="button" className="btn btn-tool" data-card-widget="remove">
										<i className="fas fa-times" />
									</button>
								</div>
							</div>
							<div className="card-body">
								<canvas
									id="donutChart"
									style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }}
								/>
							</div>
							{/* /.card-body */}
						</div>
					</div>
				</div>
			<div className="card">
  <div className="card-header">
    <h3 className="card-title">
      <i className="fas fa-chart-pie mr-1" />
      Sales
    </h3>
    <div className="card-tools">
      <ul className="nav nav-pills ml-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
        </li>
      </ul>
    </div>
  </div>{/* /.card-header */}
  <div className="card-body">
    <div className="tab-content p-0">
      {/* Morris chart - Sales */}
      <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
        <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
      </div>
      <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
        <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
      </div>  
    </div>
  </div>{/* /.card-body */}
</div>

			</section>
		</div>
	);
}
