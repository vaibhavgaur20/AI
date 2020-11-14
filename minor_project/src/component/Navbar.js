import React, {Component,useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../Assets/flag.png'

import {Search} from '../actions/postActions.js'
import {connect} from 'react-redux'
import { authLogout } from '../actions/loginActions';
import {PropTypes} from 'prop-types'





class Navbar extends Component {

     state ={
        search:"",
        accountDropdown: false,
        logoutPopup: false
       
    };

    componentDidUpdate(prevProps) {
        if(this.props.isLoggedIn !== prevProps.isLoggedIn && !this.props.isLoggedIn) {
            this.setState({logoutPopup: true})
            setTimeout(() => this.setState({logoutPopup: false}), 2000)
        }
    }



    toggleAccount = () => {
        this.setState({accountDropdown: !this.state.accountDropdown})
    }

     Searching = () => {
       
            this.props.Search(this.state.search)
                console.log('NavBar Search Results - ' ,this.props.product)
         
        
    };
     handle_Search = (e)=>{
        this.setState({
            search: e.target.value
        })
        console.log(e.target.value)
        // this.Searching()

    };
    
    
    
    render() {

    
        
        return(


           

           
            
            
            <div  id="nav_bar">
               
                <NavLink to="/" >
                    <div><img alt="logo" className="logo" src={logo} /></div>
                </NavLink>
                <input className='nav_input'
                 placeholder='Search for products,brands and more' 
                id='Searchbar'
                onChange={this.handle_Search}>

                </input>
                <Link exact to="/search" props={this.props.product}>
                                
                                <button className=' Search_button' onClick={this.Searching} >
                                <i className="fa fa-search"></i>
                                    </button>


                                    
                            
                        </Link>
                        
                <ul className="ul">
                <li className="li">
                        <NavLink className='Navlink' to="/login" activeClassName='navbar_active'>
                            <div className="navBtn"  style={!this.props.isLoggedIn ?({display:"block"}):({display:"none"})}>  LOGIN  </div>
                            
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink className='Navlink' to="/signup" activeClassName='navbar_active'>
                            <div className="navBtn"  style={!this.props.isLoggedIn ?({display:"block"}):({display:"none"})}>   SIGN UP   </div>
                        </NavLink>
                    </li>

                    <li>
                      <div className="navBtn" onClick={this.toggleAccount} style={this.props.isLoggedIn ?({display:"block"}):({display:"none"})} >

                            <div>{'Hi, '+ this.props.userDetails.first_name}</div>

                            {this.state.accountDropdown?<div className='dropdown'>
                                <div onClick={this.props.authLogout} className='menu-item'>Log Out</div>
                            </div>:null}
                    </div>
                    </li>
                    

                   

                    <li className="li">
                        <NavLink className='Navlink' to="/cart" activeClassName='navbar_active'>
                            <div className="navBtn" style={{textDecoration:'none'}}><i style={{fontSize:'24px'}} className="fa">&#xf07a;</i>   CART   </div>
                        </NavLink>
                    </li>

                    

                    {/* when user login display logOut Button */}
                  <li>

                  {/* <div className="navBtn" style={this.props.isLoggedIn ?({display:"block"}):({display:"none"})}  onClick={this.props.authLogout}>
                       
                   

                        </div>  */}
                  
                    
                  </li>
	            </ul>
                
            </div>
        );
    }
}








// Navbar.propTypes = {
//     Search: PropTypes.func.isRequired,
//     product: PropTypes.array.isRequired
//   };
  
  
  
  const mapStateToProps = state =>({
    product: state.posts.search_results,
    isLoggedIn: state.login.isLoggedIn,
   userDetails: state.login.userDetails
  })
    
  
    export default connect(mapStateToProps ,{Search,authLogout})(Navbar)
