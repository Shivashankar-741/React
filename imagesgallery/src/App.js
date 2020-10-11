import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("/images/image1.jpg");
  console.log(image);

  return (
    <div className="App">
      <div className="imagecenter">
        <img src={image} height="325px" width="250px" alt="images" />
      </div>

      <div className="grid-container">
        <img
          class="grid-item"
          src="/images/image2.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image2.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image3.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image3.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image1.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image1.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image4.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image4.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image5.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image5.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image6.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image6.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image7.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image7.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image8.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image8.jpg")}
        />
        <img
          class="grid-item"
          src="/images/image8.jpg"
          height="100px"
          width="100px"
          alt="images"
          onClick={() => setImage("/images/image8.jpg")}
        />
      </div>
    </div>
  );
}

export default App;
