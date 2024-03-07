import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Productlist from './components/productlist';
import Footer from './components/footer';
import IProduct from './interface/product';
function App() {
  const title:string = "Xin chào";
  const products:IProduct[]=[
    {
      "id":1,
      "name":"Sản phẩm 1",
      "image": "https://img.muji.net/img/item/4550344275726_1260.jpg",
      "price":10000
    },
    {
      "id":2,
      "name":"Sản phẩm 1",
      "image": "https://giadungnhaviet.com/wp-content/uploads/2019/12/dong-ho-treo-tuong-casio-nhat-ban-IQ-58-7JF-5.jpg",
      "price":10000
    },
    {
      "id":3,
      "name":"Sản phẩm 1",
      "image": "https://donghoquanglam.com/thumb/grande/100/408/269/products/2-1b3fc0cb-6295-4167-82b4-7ae89c68def0-b3dc9a0c-1cd7-4ef1-94ca-c42bf110847d-0ae73981-c1b1-433e-91c1-85358d79e724.png?v=1683009883150",
      "price":10000
    },
    {
      "id":4,
      "name":"Sản phẩm 1",
      "image": "https://wscdn.vn/400x400/upload/original-image/iQ-151-5DF-1.jpg",
      "price":10000
    }
  ]
  return (
    <>
      <Header title= {title}/>
      <Slider/>
      <Productlist products={products}/>
      <Footer/>
    </>
  );
}

export default App;
