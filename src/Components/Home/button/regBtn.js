import React from 'react';
import './regBtn.css'; 
import { useState } from 'react';
import { Register } from '../../Modal/Register/Register';


export  function  RegBtn (){
  
  const [openModal1, setOpenModal1] = useState(false);

  const handleClick1 = () => {
    setOpenModal1(true);
  };





    return (
        <div>
            <div className='login-container'>
        {/* <img src="12345.png" width={30} className='icon-flag'></img> */}
           <img src="/Home/regBtn/12345.png" width={30} className='icon-flag'></img>
        
         
            <button className="login-button"  onClick={handleClick1}>
            <p className='txt'>Register an account</p>
          </button>
       
        {/* <img src="6789.png" width={30} className='icon-flagg'></img> */}
            <img src="/Home/regBtn/6789.png" width={30} className='icon-flagg'></img>
      </div>
      {openModal1 && <Register setOpen={setOpenModal1} />}
        </div>
    );
};

