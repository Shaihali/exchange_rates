import React, { useRef } from "react";
import Webcam from "react-webcam";

export const CameraComponent = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Обработайте полученное изображение
    console.log(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Сделать фото</button>
    </div>
  );
};
