export const drawRect = (detections, ctx) => {
  detections.forEach((predection) => {
    const [x, y, width, height] = predection["bbox"];
    const text = predection["class"];

    const color = "green";
    ctx.strokeStyle = color;
    ctx.font = "18px Arial";
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
