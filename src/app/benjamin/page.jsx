import * as Plot from "@observablehq/plot";
import TitleBlock from "../components/TitleBlock.jsx";
import ExperiencePlotFigure from "../components/ExperiencePlot.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";

export default function Benjamin() {
  return (
    <div>
      <TitleBlock />
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
      <ProjectShowcase />
      <footer>© 2023 Benjamin Slater</footer>
    </div>
  );
}

