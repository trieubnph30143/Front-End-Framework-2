import React from "react";
import IProduct from "../interface/product";
import Addtocart from "./addtocart";

type Props = {
  products: IProduct[];
};

const Productlist = (props: Props) => {
  const products: any[] = props.products;
  console.log(products);
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {products.map((product: any, index: number) => {
            return (<div key={product.id} className="item col-6 col-sm-4 col-md-3">
              <img src={product.image} />
              <h3>{product.title}</h3>
              <span>{product.price}</span>
              <p><Addtocart pid={product.id}/></p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};
export default Productlist;

{
  /* <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div> */
}
