import React, { Fragment, } from "react";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Custompagesswitcher from "../switcher/custompagesswitcher";

const Custompageslayout = ({ children }: any) => {

	return (
		<Fragment>
			<Provider store={store}>
				<HelmetProvider>
					<Helmet>
						<body className=''></body>
					</Helmet>
					{children}
					<Custompagesswitcher />
				</HelmetProvider>
			</Provider>
		</Fragment>
	);
};

export default Custompageslayout;
