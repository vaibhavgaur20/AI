import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Product_Detail.css'




const Product_Detail = (props) => {

  
  
    return(
      <div className='details_container'>
          <p className='p'>Product Details</p>
          <table className='product_detail_table'>
            <tr>
              <td className='product_detail_td'>
                <p className='details'>
                  <b >Name</b>
                </p>
              </td>
              <td>
              <p className='details' style={{fontSize:'20px'}}><b>{props.props[3]}</b></p>
              </td>
            </tr>
            <tr>
              <td className='product_detail_td'>
    <p className='details'><b>Price</b></p>
              </td>
              <td>
              <p className='details' style={{fontSize:'20px'}}><b> <span>&#x20B9;</span> {props.props[2]}</b></p>
              </td>
            </tr>
            <tr>
              <td className='product_detail_td'>
    <p className='details'><b>Brand</b></p>
              </td>
              <td>
              <p className='details'>{props.props[0]}</p>
              </td>
            </tr>
            <tr>
              <td className='product_detail_td'>
    <p className='details'><b>Decription</b></p>
              </td>
              <td>
              <p className='details'>{props.props[1]}</p>
              </td>
            </tr>
          </table>
          
          
          
      </div>
    );
  
}
  

  export default Product_Detail