import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

export const CameraComponent = () => {
  const webcamRef = useRef(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Обработайте полученное изображение
    console.log(imageSrc);
  };

  const openCamera = () => {
    setCameraOpen(true);
  };
  const closeCamera = () => {
    setCameraOpen(false);
  };

  return (
    <div>
      {cameraOpen ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "environment" }}
          />
          <button onClick={capture}>Сделать фото</button>
        </>
      ) : (
        <button onClick={openCamera}>Открыть камеру</button>
      )}
      <button onClick={closeCamera}>Закрыть камеру</button>
    </div>
  );
};
