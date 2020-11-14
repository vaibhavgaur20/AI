
import Product_Card from './Product_Card.js'
import {connect} from 'react-redux'
import {Search} from '../actions/postActions.js'





import React, { Component } from 'react'
import './Search_Result.css'




class Search_Result extends Component  {

  render(){

    console.log('Component - ',this.props.searched_products)
    
    if(this.props.searched_products === undefined)
    {

    }
    else{
      var postItems = this.props.searched_products.map(post => (
        <Product_Card props={post}/>
      ))
    }
  
    return(
        <div style={{marginTop:'100px'}}>

            
                <h1>Search Result...</h1>
                
        
            
            <div style={{marginLeft:'300px'}}>
              {postItems}
              
              

              
              
           
            
           
            </div>
            
      
      
      
      
      </div>
          
          
          
      
    );
  }
}

const mapStateToProps = state =>({
  searched_products: state.posts.search_results
})
  

  export default connect(mapStateToProps ,{Search})(Search_Result)

  

  