import React from 'react';
import './Popup.css'
import { Link } from "react-router-dom";

function Popup(props){
    return(
        <div className="popup_page">
            <div className="popup_card">
                {props.type === "spinner"?
                    <div className="spinner"></div>
                    :null}
                {props.type === "success"?
                    <svg fill="#771572" className="success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#771572" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    :null}
                {props.title?<p className="popup_title">{props.title}</p>:null}
                {props.subtitle?<p className="popup_subtitle">{props.subtitle}</p>:null}
                {props.btn_text?<Link to={props.btn_to}><div className="popup_btn" onClick={props.trigger}>{props.btn_text}</div></Link>:null}
            </div>
        </div>
    );
}

export default Popup;
