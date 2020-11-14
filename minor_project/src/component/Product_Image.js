import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'
import img1 from '../Assets/ProductImg1.png'
import img2 from '../Assets/ProductImg2.png'
import img3 from '../Assets/ProductImg3.png'
import './Product_Image.css'
import { Link } from 'react-router-dom';
import {AddToCart} from '../actions/postActions.js'
import {useDispatch,useSelector} from 'react-redux';


const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  };

  

const Product_Image = (props) => {


  const dispatch = useDispatch();

  const addToCart = () =>{

    dispatch(AddToCart(props.props[1]))


  }

  // console.log('Product_image component',props.props)


  



  
  
    return(
      <div className='image_caontainer'>

<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={responsive}
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable>
  <img className='Product_image_container'
     src={'http://159.65.157.59/media/front_pic/'+props.props[0]}
    
   
  />
  
  <img className='Product_image_container'
  src={'http://159.65.157.59/media/back_pic/'+props.props[0]}
    
   
  />
  
</Carousel>


<button className='button' onClick={addToCart}>ADD TO CART</button>


<Link to='/cart'>
<button className='button' style={{backgroundColor: '#861657'}}>BUY NOW</button>
        
</Link>
{/* <p><h1>{props.product.Productid}</h1></p> */}
      </div>
    );
  }

  

  export default Product_Image






