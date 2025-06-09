import { useEffect, useState } from "react";

export const useFloatingPositions = (count) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 70 + 10,
        y: Math.random() * 70 + 10,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }))
    );
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.dx;
          let newY = pos.y + pos.dy;
          let newDx = pos.dx;
          let newDy = pos.dy;

          if (newX <= 5 || newX >= 85) newDx = -newDx;
          if (newY <= 5 || newY >= 75) newDy = -newDy;

          return {
            x: Math.max(5, Math.min(85, newX)),
            y: Math.max(5, Math.min(75, newY)),
            dx: newDx,
            dy: newDy,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return positions;
};
