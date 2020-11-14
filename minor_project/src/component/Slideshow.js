import React,{Component,useState} from 'react';
import './Slideshow.scss'
import {Slide} from 'react-slideshow-image';
import img1 from '../Assets/slideshow1.jp2'
import img2 from '../Assets/slideshow2.jpg'
import img3 from '../Assets/slideshow3.jp2'
import 'react-slideshow-image/dist/styles.css'





class Slideshow extends Component{
    render(){

        return(
            <div className='slide-container'>
                <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${img1})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${img2})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${img3})`}}>
          
            </div>
          </div>
        </Slide>
       
        </div>
          
        );
    }
}

export default  Slideshow 

