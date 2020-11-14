
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Price_Details.css'



class Price_Details extends Component {
  render(){
    return(
      <div>
      <div className='price_details_container'>
          <p className='p'>PRICE DETAILS</p>
         
          <table className='Price_table'>
            <tr>
              <td>
              <p className='details'>Price</p>
              </td>
              <td>
              <p className='details'>Rs 1499</p>
              </td>
            </tr>
            <tr>
              <td>
              <p className='details'>Delivery Charges</p>
              </td>
              <td>
              <p className='details'>Free</p>
              </td>
            </tr>
           
            <tr>
              <td>
              <p className='details'><b>AMOUNT PAYABLE</b></p>
              </td>
              <td>
              <p className='details'><b>RS 1,499</b></p>
              </td>
            </tr>
          </table>
          
          
          
      </div>
      <p className='Safe_p'>Safe and Secure Payments. Easy returns. 100% Authentic <br/>products.</p>
      </div>
    );
  }
}
  

  export default Price_Details