import { FC, Fragment, useState } from 'react';
import { Breadcrumb, Button, Card, Col, Collapse, Nav, Row } from 'react-bootstrap';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';
import ShowCode from '@/shared/showcode/showcode';
import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6, breadcrumb7 } from "../../../shared/data/prismdata/uielementsprim";
import Link from 'next/link';


const Breadcrumbs = () => {
	const breadcrumbStyle: { [key: string]: string } = {
		"--bs-breadcrumb-divider": "'~'"
	};
	const breadcrumbStyle1: { [key: string]: string } = {
		"--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"
	};

	return (
		<Fragment>
			<Seo title={"Breadcrumb"} />
			<PageheaderDB heading="Ui Elements" active="Breadcrumb" />
			<div className="main-container container-fluid">
				<Row>
					<Col xl={6}>
						<ShowCode title="Example" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb1}>
							<Breadcrumb>
								<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
							</Breadcrumb>
							<nav aria-label="breadcrumb">
								<Breadcrumb>
									<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
									<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
								</Breadcrumb>
							</nav>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item"><Link href="#">Library</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Data</li>
								</ol>
							</nav>

						</ShowCode>
					</Col>
					<Col xl={6}>
						<ShowCode title="Example1" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb2}>
							<nav aria-label="breadcrumb">
								<Breadcrumb className="breadcrumb-example1">
									<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
								</Breadcrumb>
							</nav>
							<nav aria-label="breadcrumb">
								<Breadcrumb className="breadcrumb-example1">
									<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
									<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
								</Breadcrumb>
							</nav>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb breadcrumb-example1 mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item"><Link href="#">Library</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Data</li>
								</ol>
							</nav>
						</ShowCode>
					</Col>
					<Col xl={6} className='breadcrumb-dividers'>
						<ShowCode title="Dividers" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb3}>
							<nav style={breadcrumbStyle} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Library</li>
								</ol>
							</nav>
						</ShowCode>
					</Col>
					<Col xl={6} className="embedded">
						<ShowCode title="Embedded SVG icon" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb4}>
							<nav aria-label="breadcrumb" style={breadcrumbStyle1}>
								<ol className="breadcrumb mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item active embedded-breadcrumb" aria-current="page">Library</li>
								</ol>
							</nav>
						</ShowCode>

					</Col>
					<Col xl={6}>
						<ShowCode title="Breadcrumb Style-1" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb5}>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb breadcrumb-style1 mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item"><Link href="#">Library</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Data</li>
								</ol>
							</nav>
						</ShowCode>

					</Col>
					<Col xl={6}>
						<ShowCode title="Breadcrumb Style-2" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb6}>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb breadcrumb-style2 mb-0">
									<li className="breadcrumb-item"><Link href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Link></li>
									<li className="breadcrumb-item"><Link href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Services</li>
								</ol>
							</nav>
						</ShowCode>
					</Col>
					<Col xl={12}>
						<ShowCode title="Background colors" customCardClass="custom-card" customCardBodyClass="" code={breadcrumb7}>
							<nav style={breadcrumbStyle} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0">
									<li className="breadcrumb-item"><Link href="#">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Library</li>
								</ol>
							</nav>
						</ShowCode>

					</Col>
				</Row>

			</div>
		</Fragment>
	);
};
Breadcrumbs.layout = "Contentlayout";
export default Breadcrumbs;
