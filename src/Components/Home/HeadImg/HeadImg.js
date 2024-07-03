
import React from "react";
import "./HeadImg.css";

export  function HeadImage() {
  const data = [
    {
      src: "/Home/HeadImg/head.png",
      alt: "",
    }
  ];

  return (
    <div className="container">
     
      {data.length > 0 && (
        <div className="pic active">
          <img
            src={data[0].src}
            alt={data[0].alt}
            
          />
        </div>
      )}
    </div>
  );
}



