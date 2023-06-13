import * as Plot from "@observablehq/plot";
import ExperiencePlotFigure from "./components/ExperiencePlot.jsx";

export default function App() {
  return (
    <div>
      <h1>Benjamin</h1>
      <ExperiencePlotFigure 
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
