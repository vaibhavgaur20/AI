import {FETCH_PRODUCTS,FETCH_PRODUCT,SEARCH_RESULTS,PRODUCT_REVIEW,ADD_TO_CART} from './types'
import axios from 'axios'

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

const server = 'http://159.65.157.59/'

//http://159.65.157.59/
// http://localhost:3000/spkct/

export const AddToCart = (productId) => (dispatch) => {
    // console.log('AddToCartAction ',productId)
    axios(`${server}addtocart/`,{ 
          method: 'OPTIONS',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
            data: JSON.stringify({
                Productid:productId,
                Quantity:'1'})
        }).then(res => {
            switch(res.status){
                case 200: {
                    return res.data;
                }
                case 204: {
                    return "No Stores Found.";
                }
                case 403: {
                    return 'Forbidden';
                }
                default: {
                    return res.data;
                }
            }}).then(addcart =>
            dispatch({
                type: ADD_TO_CART,
                cart_payload: addcart  
            })).catch(err => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              switch(err.response.status){
                  case 403: {
                      dispatch({
                          type: ADD_TO_CART,
                          payload: "Something went wrong. Please login again."
                      })
                      break;
                  }
                  case 500: {
                      dispatch({
                          type: ADD_TO_CART,
                          payload: "Oops! Something went wrong. Please try again later."
                      })
                      break;
                  }
                  default: {
                      dispatch({
                          type: ADD_TO_CART,
                          payload: "Something went wrong. Please try again later."
                      })
                      break;
                  }
              }
      
            } else if (err.request) {
              // client never received a response, or request never left
              console.log(err);
            } else {
              // anything else
              console.log(err);
            }
      })

    }
        
































export const fetchProducts = () => dispatch => {
   
    axios(`${server}product_list/?format=json`,{
          
          method: 'GET',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
        })
        
        .then(res => {
            switch(res.status){
                case 200: {
                    return res.data;
                }
                case 204: {
                    return "No Stores Found.";
                }
                default: {
                    return res.data;
                }
            }})

        .then(products =>
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
                
            }))
  }


  export const fetchProductDetails = (productId) => dispatch => {
   
    axios(`${server}get_product/${productId}`,{
          
          method: 'GET',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
        })
        
        .then(res => {
            switch(res.status){
                case 200: {
                    return res.data;
                }
                case 204: {
                    return "No Stores Found.";
                }
                default: {
                    return res.data;
                }
            }})

        .then(product =>
            dispatch({
                type: FETCH_PRODUCT,
                payload: product
                
            }))
  }

  export const Search = (search) => (dispatch) => {

    try{
    
    axios(`${server}search/`,{
          
          method: 'post',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
            data: JSON.stringify({
                Search:search})
        })
        
        .then(res => {
            switch(res.status){
                case 200: {
                    return res.data;
                }
                case 204: {
                    return "No Stores Found.";
                }
                default: {
                    return res.data;
                }
            }})

        .then(search_result =>
            dispatch({
                
                type: SEARCH_RESULTS,
                search_payload: search_result
                
            }));
        }
        catch(err){
            
             
        }
        
  }

  

   export const fetchProductReview = (productId) => (dispatch) => {
   

    try{
    
    axios(`${server}getreview/`,{
          
          method: 'post',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
            data: JSON.stringify({
                Productid:productId})
        })
        
        .then(res => {
            switch(res.status){
                case 200: {
                    return res.data;
                }
                case 204: {
                    return "No Stores Found.";
                }
                default: {
                    return res.data;
                }
            }})

        .then(product_review =>
            dispatch({
                
                type: PRODUCT_REVIEW,
                product_review_payload: product_review
                
            }));
        }
        catch(err){
            
             
        }
        
  }




 
        
  