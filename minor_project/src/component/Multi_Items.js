import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import React, { Component } from 'react'


import {connect} from 'react-redux';
import {fetchProducts} from '../actions/postActions.js'

import PropTypes from 'prop-types'
import './Multi_Items.css'

import { Link } from 'react-router-dom';
 

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
class Multi_Items extends Component {
  componentWillMount(){
    
    
    this.props.fetchProducts();
  }
  render(){
    var postItems = this.props.product.map(post => (
      <div className='multi_items_div_container' key={post.Productid}>
        <img className='multi_items_img_container' src={'http://159.65.157.59/media/front_pic/'+post.FrontPic}></img>
        <p><b>
        <Link  to={`/product/${post.Productid}`} style={{textDecoration:'none'}}>
            {post.product_name}
            </Link>
          </b></p>
        <p>Rs {post.Price}</p>
        
        

      </div>
    ))
    function shuffle(array){
      array.sort(()=>Math.random() - 0.5);
    }

     shuffle(postItems)



    return(
      <div>
        
        
        <Carousel className='multi_items_carousel_container' responsive={responsive}>
        {postItems}
       
    
  </Carousel>

      </div>
    );
  }
}

Multi_Items.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};



const mapStateToProps = state =>({
  product: state.posts.items
})
  

  export default connect(mapStateToProps ,{fetchProducts})(Multi_Items)
