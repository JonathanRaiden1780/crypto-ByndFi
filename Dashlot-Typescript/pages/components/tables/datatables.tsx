import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BasicTable, ResponsiveDataTable, Savetable, } from "../../../shared/data/tables/deletedrow";
import Seo from "@/shared/layout-components/seo/seo";
import PageheaderDB from "@/shared/layout-components/pageheader/pageheaderDB";
const Datatables = () => {
	return (
		<Fragment>
			<Seo title={"Datatables"} />
			<PageheaderDB heading="Tables" active="Data Tables" />
			<div className="main-container container-fluid">
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<Card.Title>
									Basic Datatable
								</Card.Title>
							</Card.Header>
							<Card.Body>

								<BasicTable />
							</Card.Body>
						</Card>
					</Col>
				</Row>
				
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<Card.Title>Delete Row Datatable</Card.Title>
							</Card.Header>
							<Card.Body>
								<Savetable />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Fragment>
	);
};
Datatables.layout = "Contentlayout";
export default Datatables;
