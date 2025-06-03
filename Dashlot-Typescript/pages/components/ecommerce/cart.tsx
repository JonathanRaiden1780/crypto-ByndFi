
import { Button, Card, Col, Form, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
const Select = dynamic(() => import("react-select"), {ssr : false});
import dynamic from "next/dynamic";
import { Cart2, Cart3 } from '../../../shared/data/ecommerce/cartdata';
import Pageheaderecommerce from '../../../shared/layout-components/pageheader/ecommercepageheader';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { useEffect, useState } from 'react';
import { AddToCart } from "../../../shared/redux/action";
import { connect } from 'react-redux';
import { ItemData } from '@/shared/data/ecommerce/productdata';
const Cart = ({local_varaiable}:any) => {
   const [FiltershopingData, sethopingData] = useState<any>([]);
   const [Price, setPrice] = useState(0);
   useEffect(() => {
		if (local_varaiable.ecommercedata == undefined) {
			sethopingData(ItemData);
			ItemData.filter((ele:any) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else if (local_varaiable.ecommercedata.length == 0) {
			sethopingData(ItemData);
			ItemData.filter((ele:any) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else {
			sethopingData(local_varaiable.ecommercedata);
			local_varaiable.ecommercedata.filter((ele:any) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}

	}, [local_varaiable.ecommercedata]);

	function handleRemove(id:any) {
		if (local_varaiable.ecommercedata == undefined) {
			const RemoveData = FiltershopingData.filter((ale:any) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else if (local_varaiable.ecommercedata.length == 0) {
			const RemoveData = FiltershopingData.filter((ale:any) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else {
			const RemoveData = FiltershopingData.filter((ale:any) => ale.id !== id);
			sethopingData(RemoveData);
		}
	}
   function dec(el: any) {
      const unit = el.currentTarget.parentElement.querySelector("input").value;

      if (Number(unit) === 0) {
         return false;
      } else {
         el.currentTarget.parentElement.querySelector("input").value--;
      }
   }
   function inc(el: any) {
      el.currentTarget.parentElement.querySelector("input").value++;

   }
   return (
      <>
         <Seo title={"Cart"} />
         <Pageheaderecommerce title="Ecommerce - Cart" heading='Ecommerce' active='Cart' />
         <div className="main-container container-fluid">

            <Row>
               <Col md={12}>
                  <Card>
                     <Card.Body>
                        <div className="product-details table-responsive text-nowrap cart-detailspage-table">
                           <Table className="table-bordered">
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th className="w-150">Quantity</th>
                                    <th >Price</th>
                                    <th >Action</th>
                                 </tr>
                              </thead>
                              {FiltershopingData.map((idx:any) => (
                              <tbody key={Math.random()} >
                                 <tr >
                                    <td>
                                       <div className="media">
                                          <div className="card-aside-img">
                                             <img src={idx.preview} alt="" className="avatar avatar-xl br-5" />
                                          </div>
                                          <div className="media-body">
                                             <div className="card-item-desc mt-0 ms-3">
                                                <h6 className="fw-500 mt-0">{idx.title}</h6>
                                                <dl className="mb-0 d-flex align-items-center">
                                                   <dt>Size: </dt>
                                                   <dd className="mb-0 ms-2">{idx.size}</dd>
                                                </dl>
                                                <dl className="mb-0 d-flex align-items-center">
                                                   <dt>Color: </dt>
                                                   <dd className="mb-0 ms-2">{idx.color}</dd>
                                                </dl>
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>
                                       <div className="input-group rounded flex-nowrap">
                                          <Button className="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus border-end-0" variant='' onClick={dec}><i className="ri-subtract-line"></i>
                                          </Button>
                                          <Form.Control type="text" className="form-control form-control-sm text-center w-100" aria-label="quantity" id="product-quantity" defaultValue="2" />
                                          <Button className="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-start-0" variant='' onClick={inc}><i className="ri-add-line"></i>
                                          </Button>
                                       </div>
                                    </td>
                                    <td> USD {idx.price}</td>
                                    <td>

                                       <OverlayTrigger placement="top" overlay={<Tooltip>Delete </Tooltip>}>
                                          <Link href="#!" className="btn btn-danger btn-sm text-fixed-white me-1 " onClick={() => { handleRemove(idx.id); }}>
                                             <i className="fa fa-trash-o" ></i></Link>
                                       </OverlayTrigger>
                                       <OverlayTrigger placement="top" overlay={<Tooltip>Save to Wishlist </Tooltip>}>
                                          <Link href="#!" className="btn btn-info btn-sm text-fixed-white" >
                                             <i className="fa fa-heart-o"  ></i></Link>
                                       </OverlayTrigger>
                                    </td>
                                 </tr>
                              </tbody>
                                ))}
                           </Table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={12} lg={5} xl={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h3">Estimate Shipping and tax</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Form.Group className="mb-4">
                           <Form.Label className=" fs-15">Country</Form.Label>
                           <div className=" gutters-xs">
                              <Select name="colors" options={Cart2} className=""
                                 menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Cart2[0]]} />
                           </div>
                           <Form.Label className=" mt-4 fs-15">Expiration Date</Form.Label>
                           <div className="gutters-xs">
                              <Select name="colors" options={Cart3} className=""
                                 menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Cart3[0]]} />
                           </div>
                           <Form.Label className="mt-4 fs-15">Zip/Postal Code</Form.Label>
                           <Form.Group className="mb-0">
                              <Form.Group>
                                 <Form.Control type="number" id="postal" placeholder="Zip/Postal" />
                              </Form.Group>
                           </Form.Group>
                        </Form.Group>
                        <div className="form-footer mt-2">
                           <Link href="#!" className="btn btn-primary">GET A QUOTE</Link>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg={7} xl={6}>
                  <Card>
                     <Card.Header>
                        <Card.Title as="h6">Order Summary</Card.Title>
                     </Card.Header>
                     <Card.Body>
                        <Row className="mb-4">
                           <div className="col-6"><input className="productcart form-control" type="text" placeholder="Coupon Code" /></div>
                           <div className="col-6"><Link href="#!" className="btn btn-primary btn-md">Apply</Link></div>
                        </Row>
                        <div className="table-responsive">
                           <Table className=" table-bordered">
                              <tbody>
                                 <tr>
                                    <td>Cart Subtotal</td>
                                    <td className="text-end">$792.00</td>
                                 </tr>
                                 <tr>
                                    <td><span>Totals</span></td>
                                    <td className="text-end text-muted"><span>$792.00</span></td>
                                 </tr>
                                 <tr>
                                    <td><span>Order Total</span></td>
                                    <td><h2 className="price text-end mb-0">$792.00</h2></td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                        <Form className="text-center btn-list mt-4">
                           <Link href="/components/ecommerce/checkout/" className="btn btn-secondary float-start" role="button">Proceed To Checkout</Link>
                           <Link href="/components/ecommerce/products/" className="btn btn-success float-end" role="button">Continue Shopping</Link>
                        </Form>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>

         </div>

      </>
   );
};
Cart.layout = "Contentlayout";
const mapStateToProps = (state:any) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Cart);
