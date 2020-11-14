import PriceDetails from './Price_Details.js'
import Delivery_Address from './Delivery_Address.js'
import Payment from './Payment.js'
import Product_Card from './Product_Card.js'






import React, { Component } from 'react'
import './Cart_Page.css'



class Cart_Page extends Component {
  render(){
    return(
        <div>
            <table className='Cart_table' >
                <tr className='align'>
                    <td className='Cart_td'>
                    
                    
                    <Delivery_Address/>

                    </td>
                    <td className='Cart_td'>
                        <div className='Price_Details_div'>
                        <PriceDetails/>

                        </div>
                    

                    </td>
                </tr>
               
            </table>            
            <div className='review'>
              
             
              {/* <Product_Card/> */}

              
              
            <Payment/>
            
           
            </div>
            
      
      
      
      
      </div>
          
          
          
      
    );
  }
}
  

  export default Cart_Page