import Carousel from './Multi_Items.js'
import Slideshow from './Slideshow.js'
import React, { Component } from 'react'

class Home_Page extends Component {
    render(){
      return(
          <div style={{marginTop:'100px'}}>
              
                
               
              <Slideshow/>
      <Carousel/>
      <Carousel/>
      <Carousel/>
      <Carousel/>
        
        
        </div>
            
            
            
        
      );
    }
  }
    
  
    export default Home_Page