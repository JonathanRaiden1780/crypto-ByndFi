import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import PageheaderDB from "@/shared/layout-components/pageheader/pageheaderDB";
const Leafletmapsdata = dynamic(() => import("@/shared/data/maps/leafletmapsdata"), { ssr: false });
const Leafletmaps = () => {

	return (
		<Fragment>
			<Seo title={"Leafletmaps"} />
			<PageheaderDB heading="Maps" active="Leaflet Maps" />
			<div className="main-container container-fluid">

				<Leafletmapsdata />
			</div>
		</Fragment>
	);
};
Leafletmaps.layout = "Contentlayout";
export default Leafletmaps;
