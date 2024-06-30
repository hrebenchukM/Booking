
import React from "react";
import "./HeadImg.css";

export  function HeadImage2() {
  const data = [
    {
      src: "/head2.png",
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



