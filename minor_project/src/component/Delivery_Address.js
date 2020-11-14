
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Delivery_Address.css'



class Delivery_Address extends Component {
  render(){
    return(
      <div className='Delivery_Address_container'>
          <p className='p'>DELIVERY ADDRESS</p>
         
          <table className='Add_table'>
            <tr>
              <td>
              <input className='Delivery_Address_input' placeholder='NAME'></input>
              </td>
              <td>
              <input className='Delivery_Address_input' placeholder='CONTACT NUMBER'></input>
              </td>
            </tr>
            <tr>
              <td>
              <input className='Delivery_Address_input' placeholder='PINCODE'></input>
              </td>
              <td>
              <input className='Delivery_Address_input' placeholder='STATE'></input>
              </td>
            </tr>
            
          </table>
          
          <input className='Address_input' placeholder='ADDRESS'></input><br/>

        

         <button className='Add_button'>  DELIVER HERE</button>

        
          
          
          
          
      </div>
    );
  }
}
  

  export default Delivery_Address