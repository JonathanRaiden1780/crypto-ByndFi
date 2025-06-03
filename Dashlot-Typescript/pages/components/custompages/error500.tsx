import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";



const Error500 = () => {

   return (
      <>
         <Seo title={"Error500"} />
         <div className="main-content page main-error-page justify-content-center">

            <div className="container text-center text-md-start">
               <div className="d-md-flex align-items-center justify-content-center g-0">
                  <div className="min-w-fit-content">
                     <h1 className="error-font  mb-0 ">500</h1>
                  </div>
                  <div className="vr mx-2"></div>
                  <div className="min-w-fit-content">
                     <h2>SORRY !</h2>
                     <h4 className="font-weight-normal">Oops!!!! you tried to access a page which is not available..</h4>
                     <Link className="text-fixed btn btn-primary mt-2" href="/components/crm/crmdashboard/"><i className="fe fe-arrow-left"></i> Back to home</Link>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};
Error500.layout = "Custompageslayout";
export default Error500;
