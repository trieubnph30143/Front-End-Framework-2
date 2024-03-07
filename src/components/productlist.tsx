import React from 'react'
import IProduct from '../interface/product';

type Props = {
    products: IProduct[];
}

const Productlist = (props: Props) => {
    const products:any[]=props.products;
    console.log(products);
  return (
    <div className="content">
  <div className="container">
    <div className="row">
      <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div>
      <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div>
      <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div>
      <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div>
      </div>
  </div>
</div>
  )
}
export default Productlist;