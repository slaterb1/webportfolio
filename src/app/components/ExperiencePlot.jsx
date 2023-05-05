'use client';

import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import experience from "../data/experience-all.json";
import experienceRust from "../data/experience-rust.json";
import experienceCpp from "../data/experience-cpp.json";
import experiencePython from "../data/experience-python.json";
import experienceNode from "../data/experience-node.json";

export default function ExamplePlotFigure(options) {
  const containerRef = useRef();
  const [data, setData] = useState();

  const [rust, setRust] = useState();
  const [cpp, setCpp] = useState();
  const [python, setPython] = useState();
  const [node, setNode] = useState();

  useEffect(() => {
    setData(experience);
    setRust(experienceRust);
    setCpp(experienceCpp);
    setPython(experiencePython);
    setNode(experienceNode);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const innerOptions = options.options;
    const plot = Plot.plot({
      ...innerOptions,
      style: {
        fill: "black", // effects ticks, font
        color: "black", // effects marks and ticks
        background: "#d3d3d3" // plot background color "none" removes background
      },
      x: {
        type: "point",
        grid: true,
        tickFormat: ""
      },
      marks: [
        Plot.lineY(data, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) // all languages test
        /*
        Plot.lineY(cpp, {x: "Date", y: "Language", stroke: "steelblue", strokeWidth: 5}),
        Plot.lineY(python, {x: "Date", y: "Language", stroke: "goldenrod", strokeWidth: 5}),
        Plot.lineY(node, {x: "Date", y: "Language", stroke: "forestgreen", strokeWidth: 5}),
        Plot.lineY(rust, {x: "Date", y: "Language", stroke: "red", strokeWidth: 5})
        */
      ]
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [data, options]);

  return <div className="plot" ref={containerRef} />
}

