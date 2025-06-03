import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
const Error403 = () => {

    return (
        <>
            <Seo title={"Error403"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="container text-center">
                    <h1 className="error-font mb-4">403</h1>
                    <h1 className="h2  mb-3">Page Not Found :(</h1>
                    <p className="h5 font-weight-normal mb-4 leading-normal">oops! Looks like you got lost.</p>
                    <Link className="btn btn-primary rounded-pill" href="/components/crm/crmdashboard/">
                        <i className="fe fe-arrow-left"></i> Back To Home
                    </Link>
                </div>

            </div>
        </>
    );
};
Error403.layout = "Custompageslayout";
export default Error403;
