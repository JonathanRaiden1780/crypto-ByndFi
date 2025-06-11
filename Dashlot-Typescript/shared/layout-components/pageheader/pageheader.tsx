import React, { Fragment } from "react";
import { Breadcrumb, Button } from "react-bootstrap";

import { useRouter } from "next/router";
const Pageheader = (props: any) => {
	const { pathname } = useRouter();
	let loactionarray: string[] = pathname.endsWith("/") ? pathname.split("/").filter(e => e.trim().length) : pathname.split("/").filter(e => e.trim().length);
	loactionarray = loactionarray.filter(e => e !== "components");

	let heading = '';
	if (loactionarray.length > 0) {
		heading = loactionarray[loactionarray.length - 1].charAt(0).toUpperCase() + loactionarray[loactionarray.length - 1].slice(1);
	}

	return (
		<Fragment>

			<div className="page-header">
				<div className="flex-grow-1 py-2-5">
					<nav aria-label="breadcrumb">
						<Breadcrumb as="ol" className="breadcrumb aa mb-0">
							<Breadcrumb.Item href="/components/cryptocurrency/dashboard" className="">{props.heading}</Breadcrumb.Item>
							<Breadcrumb.Item active aria-current="page">{props.active}</Breadcrumb.Item>
						</Breadcrumb>
					</nav>
				</div>
			</div>
		</Fragment>
	);
};

export default Pageheader;
