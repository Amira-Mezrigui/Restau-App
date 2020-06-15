import React, { Component } from 'react';
import './index.css'

export class Navbar extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-md navbar-dark dark bg-dark">
        <div class="navbar-brand">
            <img src='https://boltonpizzapanini.ca/wp-content/uploads/2018/10/pasta.png' height="28" alt="CoolBrand"/>
       </div>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <a href="#" class="nav-item nav-link">Messages</a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
    )
  }
}

  export default Navbar;