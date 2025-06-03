import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
const Error501 = () => {

   return (

      <>
         <Seo title={"Error501"} />
         <div className="main-content page main-error-page justify-content-center">

            <div className="container">
               <div className="page-content">
                  <div className="container text-center">
                     <div className="error-font floating mb-4">Oops!</div>
                     <h1 className="h2  mb-4">Error 501: Internal Server Error</h1>
                     <Link className="btn btn-outline-primary box-shadow-0" href="/components/crm/crmdashboard/">
                        <i className="fe fe-arrow-left"></i> Back To Home
                     </Link>
                  </div>
               </div>
            </div>

         </div>

      </>
   );
};
Error501.layout = "Custompageslayout";
export default Error501;
