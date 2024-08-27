"use client"

import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (

        <div class="p-5 text-center bg-image" 
        styles="backgroundImage 'url(https://www.dropbox.com/scl/fi/axfhktqcbjy8ks47lhzri/20180308_Startup-island_Week-1_Day-5-Rodeo-47.jpg?rlkey=vz19qrshi1bdzozen1zqxjsdy&st=lox1lmsd&dl=0)';height: 400px;"
        >
    <img className="profile-photo" src="https://www.dropbox.com/scl/fi/axfhktqcbjy8ks47lhzri/20180308_Startup-island_Week-1_Day-5-Rodeo-47.jpg?rlkey=vz19qrshi1bdzozen1zqxjsdy&st=4v9nill4&raw=1" />

          <div class="mask" styles="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Sean Biava</h1>
                <h4 class="mb-3">Growth Product Manager</h4>
                <a data-mdb-ripple-init="" class="btn btn-outline-light btn-lg" href="#!" role="button">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default Header;