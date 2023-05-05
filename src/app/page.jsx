import * as Plot from "@observablehq/plot";
import ExamplePlotFigure from "./components/ExamplePlotFigure.jsx";
// import MultiLineExample from "./components/MultiLineExample.js";
import ExperiencePlot from "./components/ExperiencePlot.jsx";

export default function App() {
  const test = false
  if (test) {
    return (
      <div>
        <h1>Penguins</h1>
        <ExamplePlotFigure 
          options={{
            marginTop: 20,
            marginBottom: 30,
            marginLeft: 40,
            marginRight: 30,
            width: 640,
            height: 400
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Benjamin</h1>
        <ExperiencePlot 
          options={{
            marginTop: 20,
            marginBottom: 60,
            marginLeft: 80,
            marginRight: 30,
            width: 1080,
            height: 600
          }}
        />
      </div>
    );
  }
}
