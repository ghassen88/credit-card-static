import React, { Component } from 'react';
import './App.css';



const Card=()=>{
    return (
        <div className="App">
         
          <div className="cart-credit">
          <div className="cart-logo">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-SE5DtvuguvOyKO8wz3wp-n5YnVZexFPqIMHdVshZYiKgMqX" alt=""></img>
          <div className="titre">credit cart</div>
          </div>
          <div className="card-number">1234 5678 8765 4321</div>
          <div className="expiration">
                  <span className="valid-thru">Valid <br/> Thru</span> <span className="date">12/20</span>
              </div>
              <div className="puce">5422</div>
          
  
          </div>
         
        </div>
      );
    }
    export default Card;
  
  
    

