import React from 'react';
import ReactDOM from 'react-dom';
import img from './logo.jpeg';

import App from './App';

const myelement = (
  <ul class="ul">
	<li class="li">
		<img class="center"  src={img} ></img>
    </li> 
	
	<li class="li">
		<a  href="" >
			<div class="a">
			<b>Home</b>
			</div>
		</a>
	</li>
	
	<li class="li">
		<a href="" >
			<div class="a">
				<b>Book Now</b>
			</div>
		</a>
	</li>
	
	<li class="li">
		<a  href="" >
			<div class="a">
				<b>Products</b> 
			</div>
		</a>
	</li>


	<li class="li">
		<a  href="" >
			<div class="a">
				<b>Contact Us</b> 
			</div>
		</a>
	</li>
	
	
	
	<li >
		<a  href="" >
			<div class="buttonLogin">
				<button type="button" class="btn btn-primary">Sign in</button> 
			</div>
		</a>
	</li>
  
	
	
</ul>
);

ReactDOM.render(myelement, document.getElementById('root'));







