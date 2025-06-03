import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import PageheaderDB from "@/shared/layout-components/pageheader/pageheaderDB";

const EmptyPage = () => {
	return (
		<>
			<Seo title={"Empty"} />
			<>
				<PageheaderDB heading="Pages" active="Empty Page" />
				<div className="main-container container-fluid">

				</div>
			</>
		</>
	);
};
EmptyPage.layout = "Contentlayout";

export default EmptyPage;

