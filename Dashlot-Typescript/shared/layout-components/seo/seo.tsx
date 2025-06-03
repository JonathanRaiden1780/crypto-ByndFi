import React from "react";
import Head from "next/head";
import favicon from "../../../public/assets/images/brand-logos/favicon.ico";

const Seo = ({ title }: { title: string }) => {
	let i = `DASHLOT - ${title}`;
	return (
		<Head>

			<title>{i}</title>
			<link href={favicon.src} rel="icon"></link>
			<meta name="description" content="DASHLOT - Nextjs Admin Dashboard Template" />
			<meta name="author" content="Spruko Technologies Private Limited" />
			<meta name="keywords" content="nextjs admin template, nextjs, nextjs typescript, typescript, nextjs template, admin dashboard template, dashboard, 
			nextjs admin template, nextjs typescript, nextjs,react nextjs, admin,dashboard, reactbootstrap, admin dashboard template" />
		</Head>
	);
};

export default Seo;
