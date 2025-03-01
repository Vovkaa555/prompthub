import React, { useEffect, useRef } from 'react';

// Canvas animation component for a blowing wind effect
const WindAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set canvas dimensions to window size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      const { width, height } = canvas;
      // Create a subtle trailing effect using a nearly transparent fill
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Set the line style (thin white lines)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;

      // Draw several dynamic wavy lines that simulate the wind
      const numLines = 8;
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        // Adjust amplitude and frequency for variety across lines
        const amplitude = 20 + 10 * Math.sin(time * 0.001 + i);
        const frequency = 0.01 + 0.005 * Math.cos(time * 0.001 + i);
        const phaseShift = time * 0.05;
        // Draw the line across the width of the canvas
        for (let x = 0; x <= width; x += 10) {
          const y =
            (height / (numLines + 1)) * (i + 1) +
            amplitude * Math.sin(frequency * x + phaseShift + i);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />;
};

export default WindAnimation;
