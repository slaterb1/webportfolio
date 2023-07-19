'use client';

import { useState } from "react";
import Select from "react-select";
import ProjectCard from "./subcomponents/ProjectCard.jsx";
import rettleImage from "./subcomponents/public/rettle_release_processing.png";
import webportfolioImage from "./subcomponents/public/webportfolio_screenshot.png";
import blogGif from "./subcomponents/public/blog_the_blob.gif";
import splatterGif from "./subcomponents/public/top_down_splatter.gif";

export default function ProjectShowcase() {
  const [languageTags, setLanguageTags] = useState([]);
  const [typeTags, setTypeTags] = useState([]);
  const languageOptions = [
    { value: '#rust', label: 'rust' },
    { value: '#nextjs', label: 'nextjs' },
    { value: '#css', label: 'css' },
    { value: '#d3', label: 'd3' }
  ];
  const typeOptions = [
    { value: '#data-visualization', label: 'data-visualization' },
    { value: '#design', label: 'design' },
    { value: '#modeling', label: 'modeling' },
    { value: '#opensource', label: 'opensource' },
    { value: '#data-processing', label: 'data-processing' },
    { value: '#elasticsearch', label: 'elasticsearch' },
    { value: '#sql', label: 'sql' },
    { value: '#csv', label: 'csv' }
  ];
  const selectedValues = [];

  const handleLanguageChange = (selected, selectAction) => {
    setLanguageTags(selected.map((item) => { return item.value; }))
  }

  const handleTypeChange = (selected, selectAction) => {
    setTypeTags(selected.map((item) => { return item.value; }))
  }

  return (
    <div className="project-showcase">
      <div className="project-showcase-tag-selector">
        <Select
          className="language-tag-selector"
          isMulti
          options={languageOptions}
          onChange={handleLanguageChange}
          placeholder='Language filter...'
        />
        <Select
          className="type-tag-selector"
          isMulti
          options={typeOptions}
          onChange={handleTypeChange}
          placeholder='Tag filter...'
        />
      </div>
      <ProjectCard
        title={'Webportfolio'}
        started={'May 2023'}
        updated={'July 2023'}
        outcome={'live'}
        source={'https://github.com/slaterb1/webportfolio'}
        languageTags={['#nextjs', '#css', '#d3']}
        typeTags={['#data-visualization', '#design']}
        imgLocation={webportfolioImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' Goal of this project was to build out an interactive webportfolio to highlight my experience as well as projects that I have been working on in my spare time. I have tinkered with React in the past, but never Nextjs and wanted to take this opportunity to try it out. In years past I spent months designing custom d3 plots for work and wanted to use that technology to build the graph displaying my years of experience across multiple languages and frameworks. It was challenging to fit all technologies in the graph in a readable way, so I limited it to ones I thought would be most relavent.',
          '  The project card showcase was an idea I had to allow people to filter my projects and see everything in reverse chronological order. Overall I was very satisfied by the outcome, and incorporated all my own css design choices.']}
      />
      <ProjectCard
        title={'Rettle'}
        started={'May 2019'}
        updated={'Jan 2020'}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/rettle'}
        languageTags={['#rust']}
        typeTags={['#data-processing', '#opensource', '#elasticsearch', '#sql', '#csv']}
        imgLocation={rettleImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' In this project I built a complete Extract, Transform, Load system in Rust to process data. Around this time I was doing a lot of work with Logstash to clean up data and populate indexes in Elasticsearch, and thought that it could be done better in a systems level language, plus wanted to learn Rust. The project ended up being a success and I had a "simplified" system modelled on Keras to allow the developer to think about the layers they were adding for transforms, or pushes to other systems. I named it rettle like "kettle" because is used a tea brewing analogy for the stages, i.e. fill for extract, or steep for transform. I had a number of companion projects to handle various data sinks or sources like csvs, or elasticsearch.',
          ' In the end I shelved the project because it was a lot of work and the user needed to map all the data shapes for the Rust compiler to allow it to build and run. There is still a lot of potential in this project and later versions of Rust might better accomplish some of the reworks I was planning to make the system even simpler, but it is not something that interests me at this time.']}
      />
      <ProjectCard
        title={'Blog the Blob'}
        started={'May 2020'}
        updated={'July 2020'}
        outcome={'PoC complete'}
        languageTags={['#unity','#c#']}
        typeTags={['#game-design','#poc','#platformer']}
        imgLocation={blogGif}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' One of the first complete proof of concept games for Raindog Games. All assets, animations, and lore were developed by Graph McFadden. We wanted to test building out 2D platformers in Unity. I wrote the game loop logic, controls, menus, and screens. In the end we did not continue this project because we wanted to work more in 3D, but it gave us a great foundation for game design and platformers in general.']}
      />
      <ProjectCard
        title={'Top Down Splatter'}
        started={'May 2020'}
        updated={'Aug 2020'}
        outcome={'PoC shelved'}
        languageTags={['#unity','#c#']}
        typeTags={['#game-design','#poc','#shooter']}
        imgLocation={splatterGif}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a more complex proof of concept game, heavily inspired by Hotline Miami, an arcade style shooter. The objective is to clear all enemies from the map without getting killed. I wrote custom ai patterns for the enemies to either patrol a set path until spotting the player, or walk until it got close enough to a wall, then turn clockwise or counter-clockwise. If the enemy lost sight of the player, it would search the area before returning to it\'s original behaviour. Tested with layers to allow some visibility through glass windows, which made the gameplay more exciting.', '\tPoC was not completed because I wanted to add shooting weapons and icons above them to be displayed on map as well as other user interface bits. Ended up shelving this project for another time, as other projects became more interesting.']}
      />
    </div>
  );
}
