import React, { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import Tabtotop from "../../../shared/layout-components/tab-to-top/tabtotop";
import store from "@/shared/redux/store";
import Switcher from "../../../shared/layout-components/switcher/switcher";
import Header from "../../../shared/layout-components/header/header";
import Footer from "../../../shared/layout-components/footer/footer";
import Sidebar from "../sidebar/sidebar";

const Contentlayout = ({ children }: any) => {
	const [lateLoad, setlateLoad] = useState(false)
	const Add = () => {
		document.querySelector("body")?.classList.remove("error-1");
		document.querySelector("body")?.classList.remove("landing-body");
	};
	useEffect(() => {
		Add();
		setlateLoad(true)
	});
	return (
		<Fragment>
			<Provider store={store}>
				<div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
					<Switcher />
					<div className="page">
						<Header />
						<Sidebar />
						<div className="main-content app-content">
							{children}
						</div>
						<Footer />
					</div>
					<Tabtotop />
				</div>
			</Provider>
		</Fragment>
	);
};

export default Contentlayout;

