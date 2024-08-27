"use client"

import React, { Component } from 'react';
import "./myStyles.css"

class Header extends Component {
    state = {  } 
    render() { 
        return (
        <div 
            class="text-center bg-image bottomFixParent" 
            style={{ 
                backgroundImage: `url("https://www.dropbox.com/scl/fi/efseeqdxyx7e4tzwwatn7/08_transparent_sean.png?rlkey=q1fa6ok9j2fnqgd0motea2v9q&st=vui0l6l3&raw=1")`,
                backgroundSize: "cover",
                backgroundPosition: "center", /* Optional: centers the image in the container */
                backgroundRepeat: "no-repeat", /* Optional: prevents the image from repeating */
                width: "100%",
                height: "100vh"

        }}>
          <div 
            class="mask bottomFixChild" 
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                // maskImage: "linear-gradient(white, black)",
                padding: "3%",
                marginTop: "50%",
                position: "left",
                width: "100vw",
                display: "inline-block",
                gap: "10px"
            }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Sean Biava</h1>
                <h4 class="mb-3">Growth Product Manager</h4>
                <a data-mdb-ripple-init="" 
                    class="btn btn-outline-light btn-lg" 
                    href="https://www.dropbox.com/scl/fi/vkupn6piqzq3fqupbnlbr/Screenshot-2024-08-01-at-6.37.49-PM.png?rlkey=ga3n313qyhy20z0cxtmvvtjnh&st=t9yatk3q&raw=1" 
                    role="button">View Resume
                </a>
                
              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default Header;