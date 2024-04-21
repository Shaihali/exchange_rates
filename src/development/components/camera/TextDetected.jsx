// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import Tesseract from "tesseract.js";

// const CameraTextReader = () => {
//   const webcamRef = useRef(null);
//   const [capturing, setCapturing] = useState(false);
//   const [capturedText, setCapturedText] = useState("");
//   const [selectedText, setSelectedText] = useState("");

//   const startCapture = () => {
//     setCapturing(true);
//     // const interval = setInterval(() => {
//     //   captureFrame();
//     // }, 1000); // Change interval as needed
//     // // Stop capturing after 10 seconds (just for example)
//     // setTimeout(() => {
//     //   clearInterval(interval);
//     //   setCapturing(false);
//     // }, 10000); // Change time as needed
//     captureFrame();
//   };

//   const captureFrame = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     Tesseract.recognize(imageSrc, ["eng", "rus"], {
//       logger: (m) => console.log(m),
//     }).then(({ data }) => {
//       console.log(data);
//       setCapturedText(data.text);
//     });
//     setCapturing(false);
//   };

//   const handleMouseUp = () => {
//     const selectedText = window.getSelection().toString();
//     setSelectedText(selectedText);
//   };

//   return (
//     <div>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         videoConstraints={{
//           width: 1280,
//           height: 720,
//           facingMode: "environment", // Use back camera
//         }}
//       />
//       <br />
//       <button onClick={startCapture} disabled={capturing}>
//         Start Capturing
//       </button>
//       <br />
//       {capturing && <p>Capturing...</p>}
//       <p onMouseUp={handleMouseUp}>{capturedText}</p>
//       {selectedText && (
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             background: "rgba(255, 255, 255, 0.8)",
//             padding: "10px",
//             border: "2px solid red",
//             borderRadius: "5px",
//           }}
//         >
//           {selectedText}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraTextReader;

// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import Tesseract from "tesseract.js";

// const CameraTextReader = () => {
//   const webcamRef = useRef(null);
//   const [capturing, setCapturing] = useState(false);
//   const [capturedText, setCapturedText] = useState("");
//   const [hoveredText, setHoveredText] = useState("");

//   const startCapture = () => {
//     setCapturing(true);
//     const interval = setInterval(() => {
//       captureFrame();
//     }, 1000); // Change interval as needed
//     // Stop capturing after 10 seconds (just for example)
//     setTimeout(() => {
//       clearInterval(interval);
//       setCapturing(false);
//     }, 10000); // Change time as needed
//   };

//   const captureFrame = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedText(await recognizeText(imageSrc));
//   };

//   const recognizeText = async (imageSrc) => {
//     try {
//       const {
//         data: { text },
//       } = await Tesseract.recognize(imageSrc, "eng", {
//         logger: (m) => console.log(m),
//       });
//       return text;
//     } catch (error) {
//       console.error("Error while recognizing text:", error);
//       return "";
//     }
//   };

//   const handleCaptureText = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     Tesseract.recognize(imageSrc, "eng", { logger: (m) => console.log(m) })
//       .then(({ data: { text } }) => {
//         setHoveredText(text);
//       })
//       .catch((error) => {
//         console.error("Error while recognizing text:", error);
//       });
//   };

//   return (
//     <div>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         videoConstraints={{
//           width: 1280,
//           height: 720,
//           facingMode: "environment", // Use back camera
//         }}
//         onMouseMove={handleCaptureText} // Call handleCaptureText on mouse movement
//       />
//       <br />
//       <button onClick={startCapture} disabled={capturing}>
//         Start Capturing
//       </button>
//       <br />
//       {capturing && <p>Capturing...</p>}
//       <p>Captured Text: {capturedText}</p>
//       <p>Hovered Text: {hoveredText}</p>
//     </div>
//   );
// };

// export default CameraTextReader;

import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const CameraTextReader = () => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  const [hoveredText, setHoveredText] = useState("");

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
    setCapturedText(await recognizeText(imageSrc));
  };

  const recognizeText = async (imageSrc) => {
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(imageSrc, "eng", {
        logger: (m) => console.log(m),
      });
      return text;
    } catch (error) {
      console.error("Error while recognizing text:", error);
      return "";
    }
  };

  // const handleCaptureText = () => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   Tesseract.recognize(imageSrc, "eng", { logger: (m) => console.log(m) })
  //     .then(({ data: { text } }) => {
  //       setHoveredText(text);
  //     })
  //     .catch((error) => {
  //       console.error("Error while recognizing text:", error);
  //     });
  // };

  const handleTouchStart = (event) => {
    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    captureTextAtPosition(x, y);
  };

  const captureTextAtPosition = async (x, y) => {
    const canvas = webcamRef.current.getCanvas();
    const ctx = canvas.getContext("2d");

    // Get the color of the pixel at the tapped position
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    // Check if the pixel color is close to black (indicating text)
    if (pixel[0] < 100 && pixel[1] < 100 && pixel[2] < 100) {
      const imageSrc = webcamRef.current.getScreenshot();
      const text = await recognizeText(imageSrc);
      setHoveredText(text);
    } else {
      setHoveredText(""); // Reset the text if not tapping over text
    }
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
        onTouchStart={handleTouchStart} // Call handleTouchStart on touch start
      />
      <br />
      <button onClick={startCapture} disabled={capturing}>
        Start Capturing
      </button>
      <br />
      {capturing && <p>Capturing...</p>}
      <p>Captured Text: {capturedText}</p>
      <p>Hovered Text: {hoveredText}</p>
    </div>
  );
};

export default CameraTextReader;
