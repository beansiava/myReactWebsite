"use client"
import React, {Component, useState} from 'react';
import Modal from "./Modal"

const Footer = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  
  return ( 




      <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-10 mb-0 text-body-primary">© 2024 Sean Biava, All Rights Reserved</p>
    
        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <div>

          <button onClick={handleOpenModal}>Open Modal</button>
          <Modal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            title="Project: Card Advantage" 
            children="test"
            summary="summary data"
            img = "'https://www.dropbox.com/scl/fi/axfhktqcbjy8ks47lhzri/20180308_Startup-island_Week-1_Day-5-Rodeo-47.jpg?rlkey=vz19qrshi1bdzozen1zqxjsdy&st=c57bu6ez&raw=1'"
            >
            <p>This is a reusable modal component in a function component!</p>
          </Modal>
        </div>
      

        {/* <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">About</a></li>
        </ul> */}
      </footer>
    </div>

   );
}

export default Footer;

