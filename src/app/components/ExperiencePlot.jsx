'use client';

import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import experienceInfra from "../data/experience-infra.json";
import experienceDev from "../data/experience-dev.json";
import experienceGame from "../data/experience-game.json";
import experienceSecond from "../data/experience-continued.json";
import experienceData from "../data/experience-data.json";

export default function ExperiencePlotFigure(options) {
  const containerRef = useRef();
  // data
  const [infra, setInfra] = useState();
  const [dev, setDev] = useState();
  const [game, setGame] = useState();
  const [continued, setContinued] = useState();
  const [data, setData] = useState();

  // check boxes
  const [infraChecked, setInfraChecked] = useState(true);
  const [gameChecked, setGameChecked] = useState(true);
  const [devChecked, setDevChecked] = useState(true);
  const [dataChecked, setDataChecked] = useState(true);

  useEffect(() => {
    setInfra(experienceInfra);
    setDev(experienceDev);
    setGame(experienceGame);
    setContinued(experienceSecond);
    setData(experienceData);
  }, []);

  const handleInfraCheck = () => {
    setInfraChecked(!infraChecked)
  };
  const handleDevCheck = () => {
    setDevChecked(!devChecked)
  };
  const handleGameCheck = () => {
    setGameChecked(!gameChecked)
  };
  const handleDataCheck = () => {
    setDataChecked(!dataChecked)
  };

  useEffect(() => {
    if (infra === undefined || dev === undefined || game === undefined) return;
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
        tickFormat: "",
        label: null
      },
      y: {
        grid: true,
        label: null
      },
      caption: "Figure 1. Years active in languages and frameworks.",
      marks: [
        infraChecked ? Plot.lineY(infra, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) : null,
        devChecked ? Plot.lineY(dev, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) : null,
        devChecked ? Plot.lineY(continued, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) : null,
        gameChecked ? Plot.lineY(game, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) : null,
        dataChecked ? Plot.lineY(data, {x: "Year", y: "Language", stroke: "Language", strokeWidth: 5}) : null
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
  }, [infra, dev, game, continued, data, options, infraChecked, gameChecked, devChecked, dataChecked]);

  return (
    <div className="experience-chart">
      <div className="flags">
        <input
          type="checkbox"
          className="experience-checkbox"
          id="infra"
          checked={infraChecked}
          onChange={handleInfraCheck}
        />
        Infra
        <input
          type="checkbox"
          className="experience-checkbox"
          id="dev"
          checked={devChecked}
          onChange={handleDevCheck}
        />
        Professional
        <input
          type="checkbox"
          className="experience-checkbox"
          id="data"
          checked={dataChecked}
          onChange={handleDataCheck}
        />
        Data
        <input
          type="checkbox"
          className="experience-checkbox"
          id="game"
          checked={gameChecked}
          onChange={handleGameCheck}
        />
        Game
      </div>
      <div className="plot" ref={containerRef} />
    </div>
  );
}

