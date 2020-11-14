
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Product_Card.css'
import img1 from '../Assets/ProductImg1.png'

import { Link } from 'react-router-dom';


const Product_Card = (props) => {
    console.log('Product_card', props.props['product_name'])
  
    return(
      <div>
      <div className='Product_Card_container'>
          
         
          <table className='Product_Card_table'>
            <tr>
              <td>
                  <div >
                  <img className='Image_Container' src={'http://159.65.157.59/media/front_pic/'+props.props['FrontPic']}></img>

                  </div>
              
              </td>
              <td>
                  <table style={{marginTop:'-10px'}}>
                      <tr>
                          <th >
                          <p className='details' style={{fontSize:'larger'}}> 
                         <Link to={`/product/${props.props['Productid']}`}>{props.props['product_name']}</Link> </p>

                          </th>
                          {/* <td className='Product_Card_td'>
                              <p> Delivery in 1-3 days </p>
                          </td> */}
                      </tr>
                      <tr>
                          <td className='Product_Card_td'>
                              <p><span className='Product_Card_span'>&#9679;</span>
                              {props.props['Brand']}
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td className='Product_Card_td'>
                              <p><span className='Product_Card_span'>&#9679;</span>
                              Category : {props.props['Category']}
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td className='Product_Card_td'>
                              <p><span className='Product_Card_span'>&#9679;</span>
                              OverallRating : {props.props['OverallRating']}
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td className='Product_Card_td'>
                              <p><span className='Product_Card_span'>&#9679;</span>
                             
                              Discount upto <span>&#x20B9;</span>{props.props['Discount']}
                              </p>
                          </td>
                      </tr>
                  </table>
              
              </td>
            </tr>
            <tr>
              <td>
              <input className='Product_Card_quantity' type='number' min='1' max='5' placeholder='1'></input>
              </td>
              <td>
              <p className='details'><b><span>&#x20B9;</span> {props.props['Price']}</b></p>
              </td>
            </tr>
           
           
          </table>
          
          
          
      </div>
      
      </div>
    );
  }

  

  export default Product_Card