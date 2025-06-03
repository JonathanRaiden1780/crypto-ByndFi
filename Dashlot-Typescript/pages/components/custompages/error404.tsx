
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';



const Error404 = () => {

    return (
        <>
            <Seo title={"Error404"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="container text-center">
                    <img src="../../../assets/images/png/04.png" className="floating h-200" alt="img" />
                    <h1 className="h2 mt-4 mb-4">Oops! Page Not Found</h1>
                    <Link className="btn btn-outline-primary" href="/components/crm/crmdashboard/">
                        <i className="fe fe-arrow-left"></i> Back To Home
                    </Link>
                </div>

            </div>

        </>
    );
};
Error404.layout = "Custompageslayout";
export default Error404;
