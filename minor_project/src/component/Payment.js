
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Payment.css'



class Payment extends Component {
  render(){
    return(
      <div className='Payment_container'>
          <p className='Payment_p'>PAYMENT</p>
          <p className='Credit_p'>Credit / Debit / ATM Card</p>

          <input className='card_input' placeholder='ENTER CARD NUMBER'></input>
         
          <table className='Payment_table'>
            
            <tr>
              <td>
              <input className='Payment_input' type='password' placeholder='CVV'></input>
              </td>
              <td>
              <input className='Payment_input' placeholder='EXPIREY DATE'></input>
              </td>
              
            </tr>
            
          </table>
          
          


         <button className='Pay_button'>PAY</button>
         <p className='Saving_Detail_p'>Your card details would be securely saved for faster payments. Your CVV will not be stored.</p>

        
          
          
          
          
      </div>
    );
  }
}
  

  export default Payment