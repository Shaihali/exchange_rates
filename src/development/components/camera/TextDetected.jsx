import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const CameraTextReader = () => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [capturedText, setCapturedText] = useState("");

  const startCapture = () => {
    setCapturing(true);
    const interval = setInterval(() => {
      captureFrame();
    }, 1000); // Change interval as needed
    // Stop capturing after 10 seconds (just for example)
    setTimeout(() => {
      clearInterval(interval);
      setCapturing(false);
    }, 10000); // Change time as needed
  };

  const captureFrame = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    Tesseract.recognize(
      imageSrc,
      "eng",
      { logger: (m) => console.log(m) } // Add logger if needed
    ).then(({ data: { text } }) => {
      setCapturedText(text);
    });
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "environment", // Use back camera
        }}
      />
      <br />
      <button onClick={startCapture} disabled={capturing}>
        Start Capturing
      </button>
      <br />
      {capturing && <p>Capturing...</p>}
      <p>{capturedText}</p>
    </div>
  );
};

export default CameraTextReader;
