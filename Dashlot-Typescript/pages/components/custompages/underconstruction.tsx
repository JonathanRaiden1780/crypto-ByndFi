
import Countdown from 'react-countdown';
import { Card, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const UnderConstruction = () => {

   //  const AfterCompletion = () => <span>You are good to go!</span>;

   const AfterComplete = () => <span>You are good to go!</span>;

   // Renderer callback with condition
   const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
      if (completed) {
         // Render a complete state
         return <AfterComplete />;
      } else {
         // Render a countdown
         return (
            <div className="mx-5">
               <div id="count-timer" className="d-flex timer-counter timer-countdown text-muted text-center p-2 gap-4 justify-content-center flex-wrap">
                  <div className=''>
                     <div className="avatar avatar-lg p-5 avatar-rounded bg-primary-transparent1 mb-1">
                        <h4 className="fw-semibold mb-0"> {days}</h4>
                     </div>
                     <div className='mt-2 fs-18'>DAYS</div>
                  </div>
                  <div className=''>
                     <div className="avatar avatar-lg p-5 avatar-rounded bg-primary-transparent1 mb-1">
                        <h4 className="fw-semibold mb-0">  {hours}</h4>
                     </div>
                     <div className='mt-2 fs-18'>HOURS </div>
                  </div>
                  <div className=''>
                     <div className="avatar avatar-lg p-5 avatar-rounded bg-primary-transparent1 mb-1">
                        <h4 className="fw-semibold mb-0">{minutes}</h4>
                     </div>
                     <div className='mt-2 fs-18'>MINUTES</div>
                  </div>
                  <div className=''>
                     <div className="avatar avatar-lg p-5 avatar-rounded bg-primary-transparent1 mb-1">
                        <h4 className="fw-semibold mb-0">{seconds}</h4>
                     </div>
                     <div className='mt-2 fs-18'>SECONDS</div>
                  </div>
               </div>
            </div>
         );
      }
   };
   return (
      <>
         <Seo title={"Under-Construction"} />
         <div className="page main-error-page justify-content-center">
            <div className="container text-center">
               <div className="error-template">
                  <h3 className="display-5 mt-5 fw-medium mb-3">We Are Working On This Site</h3>
                  <h4>Get Back to you at 9.00pm</h4>
                  <Countdown date={Date.now() + 30278000000} renderer={rendering} />
                  <div className='mt-3'>
                     Copyright © 2023 <Link href="#!" className="fs-14 text-primary">Dashlot</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link href="https://spruko.com/" className="fs-14 text-primary">Spruko</Link> All rights reserved.
                  </div>
               </div>
            </div>

         </div> </>
   );
};
UnderConstruction.layout = "Custompageslayout";
export default UnderConstruction;
