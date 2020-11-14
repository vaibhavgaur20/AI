import {FETCH_PRODUCTS, FETCH_PRODUCT,SEARCH_RESULTS,PRODUCT_REVIEW,ADD_TO_CART} from '../actions/types'

const initialState ={
    items: [],
    item: {}
}

export default function(state = initialState,action){
    
    
    switch(action.type){
        case FETCH_PRODUCTS:
            
            return{
                ...state,
                items: action.payload
                
            }
        case FETCH_PRODUCT:
            return{
                ...state,
                item: action.payload
            }

        case SEARCH_RESULTS:
            return{
                ...state,
                search_results: action.search_payload
            }
        
        case PRODUCT_REVIEW:
            
            return{
                ...state,
                product_reviews: action.product_review_payload
            }

        case ADD_TO_CART:
            console.log('Product review Reducer')
            return{
                ...state,
                cart_product: action.cart_payload
            }

            




        default:
            return state;
    }
}
