import React, { useEffect, useRef } from 'react';

interface SpeedometerDisplayProps {
  initialSpeed?: number;
  maxSpeed?: number;
}

const SpeedometerDisplay: React.FC<SpeedometerDisplayProps> = ({ initialSpeed = 0, maxSpeed = 160 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 500;
    canvas.height = 500;

    // Create gradients
    const speedGradient = ctx.createLinearGradient(0, 500, 0, 0);
    speedGradient.addColorStop(0, '#00b8fe');
    speedGradient.addColorStop(1, '#41dcf4');

    const rpmGradient = ctx.createLinearGradient(0, 500, 0, 0);
    rpmGradient.addColorStop(0, '#f7b733');
    rpmGradient.addColorStop(1, '#fc4a1a');

    // Drawing functions
    const speedNeedle = (rotation: number) => {
      ctx.lineWidth = 2;

      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
      ctx.restore();
    };

    const rpmNeedle = (rotation: number) => {
      ctx.lineWidth = 2;

      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
      ctx.restore();
    };

    const drawMiniNeedle = (rotation: number, width: number, speed: string | number) => {
      ctx.lineWidth = width;

      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeStyle = "#333";
      ctx.fillStyle = "#333";
      ctx.strokeRect(-20 / 2 + 220, -1 / 2, 20, 1);
      ctx.restore();

      let x = (250 + 180 * Math.cos(rotation));
      let y = (250 + 180 * Math.sin(rotation));

      ctx.font = "700 20px 'Open Sans'";
      ctx.fillText(speed.toString(), x, y);
    };

    const calculateSpeedAngle = (x: number, a: number, b: number) => {
      let degree = (a - b) * (x) + b;
      let radian = (degree * Math.PI) / 180;
      return radian <= 1.45 ? radian : 1.45;
    };

    const calculateRPMAngel = (x: number, a: number, b: number) => {
      let degree = (a - b) * (x) + b;
      let radian = (degree * Math.PI) / 180;
      return radian >= -0.46153862656807704 ? radian : -0.46153862656807704;
    };

    const drawSpeedo = (speed: number, gear: number, rpm: number, maxSpeed: number) => {
      if (speed === undefined) {
        return false;
      } else {
        speed = Math.floor(speed);
        rpm = rpm * 10;
      }

      ctx.clearRect(0, 0, 500, 500);

      // Main speedometer background
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0, 0, 0, .9)';
      ctx.arc(250, 250, 240, 0, 2 * Math.PI);
      ctx.fill();
      ctx.save();
      ctx.restore();
      ctx.fillStyle = "#FFF";
      ctx.stroke();

      // Inner circle
      ctx.beginPath();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 10;
      ctx.arc(250, 250, 100, 0, 2 * Math.PI);
      ctx.stroke();

      // Outer circle border
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.arc(250, 250, 240, 0, 2 * Math.PI);
      ctx.stroke();

      // Speed text
      ctx.font = "700 70px 'Open Sans'";
      ctx.textAlign = "center";
      ctx.fillStyle = "#FFF";
      ctx.fillText(speed.toString(), 250, 220);

      ctx.font = "700 15px 'Open Sans'";
      ctx.fillText("mph", 250, 235);

      // Gear display
      if (gear === 0 && speed > 0) {
        ctx.fillStyle = "#999";
        ctx.font = "700 70px 'Open Sans'";
        ctx.fillText('R', 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "50px 'Open Sans'";
        ctx.fillText('N', 290, 460);
      } else if (gear === 0 && speed === 0) {
        ctx.fillStyle = "#999";
        ctx.font = "700 70px 'Open Sans'";
        ctx.fillText('N', 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "700 50px 'Open Sans'";
        ctx.fillText('R', 210, 460);

        ctx.font = "700 50px 'Open Sans'";
        ctx.fillText((parseInt(gear.toString()) + 1).toString(), 290, 460);
      } else if (gear - 1 <= 0) {
        ctx.fillStyle = "#999";
        ctx.font = "700 70px 'Open Sans'";
        ctx.fillText(gear.toString(), 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "50px 'Open Sans'";
        ctx.fillText('R', 210, 460);

        ctx.font = "700 50px 'Open Sans'";
        ctx.fillText((parseInt(gear.toString()) + 1).toString(), 290, 460);
      } else {
        ctx.font = "700 70px 'Open Sans'";
        ctx.fillStyle = "#999";
        ctx.fillText(gear.toString(), 250, 460);

        ctx.font = "700 50px 'Open Sans'";
        ctx.fillStyle = "#333";
        ctx.fillText((gear - 1).toString(), 210, 460);
        if (parseInt(gear.toString()) + 1 < 7) {
          ctx.font = "700 50px 'Open Sans'";
          ctx.fillText((parseInt(gear.toString()) + 1).toString(), 290, 460);
        }
      }

      // Speed markers
      ctx.fillStyle = "#FFF";
      for (let i = 10; i <= Math.ceil(maxSpeed / 20) * 20; i += 10) {
        drawMiniNeedle(calculateSpeedAngle(i / maxSpeed, 83.07888, 34.3775) * Math.PI, i % 20 === 0 ? 3 : 1, i % 20 === 0 ? i : '');
        
        if (i <= 100) { 
          drawMiniNeedle(calculateSpeedAngle(i / 47, 0, 22.9183) * Math.PI, i % 20 === 0 ? 3 : 1, i % 20 === 0 ? Math.floor(i / 10) : '');
        }
      }

      // Speed arc - this is the blue bar
      ctx.beginPath();
      ctx.strokeStyle = "#41dcf4";
      ctx.lineWidth = 25;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#00c6ff";

      ctx.strokeStyle = speedGradient;
      ctx.arc(250, 250, 228, .6 * Math.PI, calculateSpeedAngle(speed / maxSpeed, 83.07888, 34.3775) * Math.PI);
      ctx.stroke();
      
      // RPM arc - this is the orange bar
      ctx.beginPath();
      ctx.lineWidth = 25;
      ctx.strokeStyle = rpmGradient;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#f7b733";

      ctx.arc(250, 250, 228, .4 * Math.PI, calculateRPMAngel(rpm / 4.7, 0, 22.9183) * Math.PI, true);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Speed needle
      ctx.strokeStyle = '#41dcf4';
      speedNeedle(calculateSpeedAngle(speed / maxSpeed, 83.07888, 34.3775) * Math.PI);

      // RPM needle
      ctx.strokeStyle = rpmGradient;
      rpmNeedle(calculateRPMAngel(rpm / 4.7, 0, 22.9183) * Math.PI);

      ctx.strokeStyle = "#000";
    };

    // Animation function to set speed, gear, and rpm
    const setSpeed = () => {
      let speedM = initialSpeed || 0;
      let gear = 0;
      let rpm = 0;
      
      const animationInterval = setInterval(() => {
        if (speedM > maxSpeed) {
          speedM = 0;
          rpm = 0;
        }
        
        // Set gear based on speed
        if (speedM > 1 && speedM < 30) {
          gear = 1;
        } else if (speedM > 30 && speedM < 50) {
          gear = 2;
        } else if (speedM > 50 && speedM < 70) {
          gear = 3;
        } else if (speedM > 70 && speedM < 100) {
          gear = 4;
        } else if (speedM > 100) {
          gear = 5;
        }
        
        // Increment speed
        speedM++;
        
        // Increment RPM
        if (rpm < 1) {
          rpm += 0.03;
        }
        
        // Draw speedometer with updated values
        drawSpeedo(speedM, gear, rpm, maxSpeed);
      }, 40);
      
      // Cleanup function
      return () => clearInterval(animationInterval);
    };

    // Start animation
    const cleanupAnimation = setSpeed();
    
    // Cleanup on component unmount
    return () => {
      cleanupAnimation();
    };
  }, [initialSpeed, maxSpeed]);

  return (
    <div className="speedometer-container">
      <canvas 
        ref={canvasRef} 
        className="speedometer-canvas"
        style={{ 
          display: 'block',
          margin: '0 auto',
          background: 'transparent',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  );
};

export default SpeedometerDisplay;