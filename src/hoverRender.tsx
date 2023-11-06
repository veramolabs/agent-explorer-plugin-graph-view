import { Settings } from "sigma/settings";
import { PartialButFor, NodeDisplayData } from "sigma/types";


export function customDrawHover(
  context: CanvasRenderingContext2D,
  data: PartialButFor<NodeDisplayData, "x" | "y" | "size" | "label" | "color">,
  settings: Settings,
): void {

  const size = settings.labelSize,
    font = settings.labelFont,
    weight = "bold";

  context.font = `${weight} ${size}px ${font}`;

  // Then we draw the label background
  //@ts-ignore
  context.fillStyle = settings.fill;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;

  const PADDING = 3;

  // if (typeof data.label === "string") {
  //   const textWidth = context.measureText(data.label).width,
  //     boxWidth = Math.round(textWidth + 5),
  //     boxHeight = Math.round(size + 2 * PADDING),
  //     radius = Math.max(data.size, size / 2) + PADDING;

  //   const angleRadian = Math.asin(boxHeight / 2 / radius);
  //   const xDeltaCoord = Math.sqrt(
  //     Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2))
  //   );

  //   context.beginPath();
  //   context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
  //   context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
  //   context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
  //   context.closePath();
  //   context.fill();
  // } else {
  //   context.beginPath();
  //   context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
  //   context.closePath();
  //   context.fill();
  // }
  context.beginPath();
  context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
  context.closePath();
  context.fill();

  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;

  // And finally we draw the label
  drawLabel(context, data, settings);
}

function drawLabel(
  context: CanvasRenderingContext2D,
  data: PartialButFor<NodeDisplayData, "x" | "y" | "size" | "label" | "color">,
  settings: Settings,
): void {
  if (!data.label) return;

  const size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight;

  context.font = `${weight} ${size}px ${font}`;
  const width = context.measureText(data.label).width + 8;

  //@ts-ignore
  context.fillStyle = settings.labelBackground;
  context.fillRect(data.x + data.size, data.y + size / 3 - 15, width, 20);
  //@ts-ignore
  context.fillStyle = settings.labelColor.color;
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}