'use client';

import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import penguins from "../penguins.json";

export default function ExamplePlotFigure() {
  const containerRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    setData(penguins)
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const plot = Plot.plot({
      grid: true,
      marks: [
        Plot.dot(data, {x: "culmen_length_mm", y: "culmen_depth_mm"})
      ]
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [data]);

  return <div className="plot" ref={containerRef} />
}
