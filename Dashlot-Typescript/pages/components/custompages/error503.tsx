import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
const Error503 = () => {
    return (
        <>
            <Seo title={"Error503"} />
            <div className="main-content page main-error-page justify-content-center">

                <div className="container">
                    <div>
                        <div className="error-content mt-0 mx-auto">
                            <div className="error-font mb-4">503</div>
                            <h1 className="h2 mb-3">Server Not Found...</h1>
                            <p className="h4 font-weight-normal mb-4 leading-normal ">Oops! Something goes Wrong.</p>
                            <Link href="/components/crm/crmdashboard/" className="btn btn-primary rounded-pill zindex2">
                                <i className="fe fe-arrow-left"></i> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>

            </div> </>
    );
};
Error503.layout = "Custompageslayout";
export default Error503;
