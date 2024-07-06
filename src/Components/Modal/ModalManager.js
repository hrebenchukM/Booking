import React, { useState } from "react";

import { Authentication } from "./Authentication/Authentication";
import { Information } from "./Information/Information";
import { AllDone } from "./AllDone/AllDone";
export function ModalManager() {
  const [openModal1, setOpenModal1] = useState(true);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);


  const handleCloseModal1 = () => {
    setOpenModal1(false);
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
    setOpenModal3(true);
  };

  const handleCloseModal3 = () => {
    setOpenModal3(false);
  };

 
  return (
    <div className="registerM">
      <div className="registerM-container">
     
        {openModal1 && <Authentication handleClose={handleCloseModal1} />}

        
        {openModal2 && <Information handleClose={handleCloseModal2} />}

      
        {openModal3 && <AllDone handleClose={handleCloseModal3} />}

      
      </div>
    </div>
  );
}
