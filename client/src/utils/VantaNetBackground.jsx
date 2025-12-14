import { useEffect, useRef } from "react";

function VantaNetBackground() {
  const vantaRef = useRef(null);
  let vantaEffect = null;

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement("script");
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    threeScript.async = true;

    // Load Vanta
    const vantaScript = document.createElement("script");
    vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
    vantaScript.async = true;

    threeScript.onload = () => {
      document.body.appendChild(vantaScript);
    };

    vantaScript.onload = () => {
      if (window.VANTA && vantaRef.current) {
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
         mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x9d195c,
  backgroundColor: 0x3031f,
  points: 9.00,
  maxDistance: 21.00
        });
      }
    };

    document.body.appendChild(threeScript);

    return () => {
      vantaEffect && vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0  pointer-events-none"
    />
  );
}

export default VantaNetBackground;
