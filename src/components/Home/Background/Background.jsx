import React, { useState, useEffect } from "react";
import "./background.css";

const Background = () => {
  const [hoveredLines, setHoveredLines] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      const range = 100;

      const lines = document.querySelectorAll(".grid-line");
      let affectedLines = [];

      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(cursorX - centerX, 2) + Math.pow(cursorY - centerY, 2)
        );

        if (distance < range) {
          affectedLines.push(line);
        }
      });

      setHoveredLines(affectedLines);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll(".grid-line").forEach((line) => {
      line.classList.remove("hovered");
    });

    hoveredLines.forEach((line) => {
      line.classList.add("hovered");
    });
  }, [hoveredLines]);

  return (
    <div className="grid-container">
      {[...Array(20)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="grid-line vertical"
          style={{ left: isMobile ? `${i * 15}%` : `${i * 5}%` }}
        ></div>
      ))}
      {[...Array(20)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="grid-line horizontal"
          style={{ top: isMobile ? `${i * 10}%` : `${i * 9}%` }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
