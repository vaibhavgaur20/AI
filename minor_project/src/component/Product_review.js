import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import './Product_review.css'
import {useDispatch,useSelector} from 'react-redux';
import {connect} from 'react-redux'



class Product_review extends Component {
  render(){
  
    
    
 

  if(this.props.productReview === undefined)
  {
    

  }
  else{
    
    
    const func =(r) =>{
      var string = []
      var S = <span class="fa fa-star checked" style={{color:'orange'}}></span>
      var s = <span class="fa fa-star" style={{color:'gray'}} ></span>

      for(var i=1;i<=5;i++)
      {
        if(i<=r){
          string.push(S) 
        }
        else{
          string.push(s)
        }
      }
      return string
     }
     
     var review = this.props.productReview.map(post => (
     
      
      <div className='review_div'>
        <ul className='Product_review_ul'>
          <li className='Product_review_li'>

    {func(post.UserRating)}
          </li>
          <li className='Product_review_li'>
            <b>{post.Review_Title}</b>
          </li>
          
        </ul>
        <p className='Product_review_p'>
            {post.UserReview}
          </p>
          <p className='Product_review_p_username'>
            {post.User_FirstName} &#10003; Certified Buyer
          </p>
      </div>
     
    ))
   
  
  
  }
  

  
  
    return(
      <div className='review_container'>
          <p className='p'>Reviews & Ratings</p>

          
          {review}
          
          
          
          
      </div>
    );
  }
}

  const mapStateToProps = state =>({
    productReview: state.posts.product_reviews
  })
    
  
    export default connect(mapStateToProps )(Product_review)
  

 