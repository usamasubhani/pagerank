"use client";
import React, { useEffect, useRef } from "react";

const Graph = ({ graph }: { graph: number[][] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodesCount = graph.length;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    // Draw edges
    graph.forEach((edges, sourceNode) => {
      edges.forEach((edge, targetNode) => {
        if (edge === 1) {
          ctx.beginPath();
          ctx.moveTo(
            centerX +
              radius * Math.cos((2 * Math.PI * sourceNode) / nodesCount),
            centerY + radius * Math.sin((2 * Math.PI * sourceNode) / nodesCount)
          );
          ctx.lineTo(
            centerX +
              radius * Math.cos((2 * Math.PI * targetNode) / nodesCount),
            centerY + radius * Math.sin((2 * Math.PI * targetNode) / nodesCount)
          );
          ctx.stroke();
        }
      });
    });

    // Draw nodes
    // Todo: use edge drawing loop for drawing nodes: reslove edges overlapping nodes issue.
    graph.forEach((_, index) => {
      ctx.fillStyle = "rgb(59 130 246)";

      const x = centerX + radius * Math.cos((2 * Math.PI * index) / nodesCount);
      const y = centerY + radius * Math.sin((2 * Math.PI * index) / nodesCount);

      ctx.beginPath();
      ctx.arc(x, y, 25, 0, 360);
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = "white";
      ctx.font = "bold 18px Arial";
      ctx.fillText(index.toString(), x - 5, y + 5);
    });
  }, [graph]);

  return (
    <canvas ref={canvasRef} width={400} height={400} className="border">
      Your browser does not support the canvas element.
    </canvas>
  );
};

export default Graph;
