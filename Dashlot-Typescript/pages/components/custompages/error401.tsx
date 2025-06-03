import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
const Error401 = () => {

   return (
      <>
         <Seo title={"Error401"} />
         <div className="main-content page main-error-page justify-content-center">

            <div className="container text-center">
               <div className="error-template">
                  <h1 className="error-font floating mb-2">401</h1>
                  <h5 className="error-details">
                     Sorry, an error has occured, Requested page not found!
                  </h5>
                  <div className="text-center">
                     <Link className="btn btn-primary  mt-4 mb-4" href="/components/crm/crmdashboard/"><i className="fe fe-arrow-left"></i> Back to Home </Link>
                  </div>
               </div>
            </div>

         </div>

      </>
   );
};
Error401.layout = "Custompageslayout";
export default Error401;
