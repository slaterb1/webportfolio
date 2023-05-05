'use client';

import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import penguins from "../data/penguins.json";

export default function ExamplePlotFigure(options) {
  const containerRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    setData(penguins);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const innerOptions = options.options;
    const plot = Plot.plot({
      ...innerOptions,
      style: {
        fill: "black", // effects ticks, font
        color: "black", // effects marks and ticks
        background: "white" // plot background color "none" removes background
      },
      grid: true,
      marks: [
        Plot.ruleX([0]),
        Plot.ruleY([0]),
        Plot.dot(data, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "blue"})
      ]
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [data, options]);

  return <div className="plot" ref={containerRef} />
}
