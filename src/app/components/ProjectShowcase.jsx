'use client';

import ProjectCard from "./subcomponents/ProjectCard.jsx";
import rettleImage from "./subcomponents/public/rettle_release_processing.png";

export default function ProjectShowcase() {
  return (
    <div className="project-showcase">
      <ProjectCard
        title={'Rettle'}
        started={'May 5, 2019'}
        updated={'Jan 10, 2020'}
        languages={['Rust']}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/rettle'}
        tags={['#rust','#data']}
        imgLocation={rettleImage}
        description={'Long description for Rettle project...'}
      />
      <ProjectCard
        title={'Rettle'}
        started={'May 5, 2019'}
        updated={'Jan 10, 2020'}
        languages={['Rust']}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/rettle'}
        tags={['#rust']}
        imgLocation={rettleImage}
        description={'Long description for Rettle project...'}
      />
    </div>
  );
}
