import React, { Component } from 'react'
import './Product_Page.css'
import Product_Image from './Product_Image.js'
import Product_Detail from './Product_Detail.js'
import Product_Review from './Product_review.js'

import {useDispatch,useSelector} from 'react-redux';
import {fetchProductDetails,fetchProductReview} from '../actions/postActions.js'


import PropTypes from 'prop-types'


const Product_Page = (props) => {

  
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.posts.item)
  const productReview = useSelector(state => state.posts.product_reviews)

  React.useEffect( () => {
    dispatch(fetchProductDetails(props.match.params.id))
    dispatch(fetchProductReview(props.match.params.id))
  },  []);

   

   const prodDetails = [productDetails.Brand,productDetails.Description,productDetails.Price,productDetails.product_name]

  
 
  
    return(
        <div >
            <table >
                <tr className='align'>
                    <td className='td_image'>
                    <Product_Image props={[productDetails.FrontPic,props.match.params.id]}  />
                    
                    

                    </td>
                    <td className='align'>
                    <Product_Detail props={prodDetails}/>

                    </td>
                </tr>
               
            </table>
            <div className='review'>
            <Product_Review props={productReview}/>
            </div>
            
      
      
      
      
      </div>
          
          
          
      
    );
  }

  
export default Product_Page


// Product_Page.propTypes = {
//   fetchProductDetails: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired
// };



// const mapStateToProps = state =>({
//   product: state.posts.items
// })
  

//   export default connect(mapStateToProps ,{fetchProductDetails})(Product_Page)

  