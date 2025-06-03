import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
const Error400 = () => {

    return (
        <>
            <Seo title={"Error400"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="container text-center">
                    <div className="error-template">
                        <h1 className="error-font  mb-2">400<span className="fs-20">error</span></h1>
                        <h5 className="error-details ">
                            Sorry, An Error Occured, Requested Page Not Found!!!
                        </h5>
                        <div className="text-center">
                            <Link className="btn btn-primary my-4" href="/components/crm/crmdashboard/"> <i className="fe fe-arrow-left"></i> Back to Home </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
Error400.layout = "Custompageslayout";
export default Error400;
