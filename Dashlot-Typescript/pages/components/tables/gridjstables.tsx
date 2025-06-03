import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Columns, Data, Data1, Data2, Data3 } from '../../../shared/data/tables/griddata';
import { Grid } from "gridjs-react";
import PageheaderDB from '@/shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
const Gridjstables = () => {
	return (
		<Fragment>
			<Seo title={"Grid Js"} />
			<PageheaderDB heading="Tables" active="Grid Js" />
			<div className="main-container container-fluid">
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Basic Table
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-example1">
									<Grid
										data={Data}
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Table With Pagination
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-pagination">
									<Grid
										data={Data}
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} pagination={{
											limit: 5,
										}} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Table With Search
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-search">
									<Grid
										data={Data}
										search={true}
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} pagination={{
											limit: 5,
										}} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Table Sorting
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-sorting">
									<Grid
										data={Data}
										sort={true}
										search={true}
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Table Loading
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-loading">
									<Grid
										data={Data1}
										sort={true}
										search={true}
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} pagination={{
											limit: 5,
										}}
									/>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Wide Table
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-wide">
									<Grid
										data={Data2}
										sort={true}
										columns={["Date", "Name", "Email", "Order Id", "Product", "Category", "Price", "Quantity", "Total"]} pagination={{
											limit: 5,
										}}

										resizable={true}
									/>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Fixed Header
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-header-fixed">
									<Grid
										data={Data3}
										sort={true}
										search={true}
										fixedHeader={true}
										height='350px'
										columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]}

										resizable={true} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<div className="card-title">
									Hidden Columns
								</div>
							</Card.Header>
							<Card.Body>
								<div id="grid-hidden-column">
									<Grid
										data={Data}
										sort={true}
										search={true}
										columns={Columns} />
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Fragment>
	);
};
Gridjstables.layout = "Contentlayout";
export default Gridjstables;
