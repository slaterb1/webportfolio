'use client';

import { useState } from "react";
import Select from "react-select";
import ProjectCard from "./subcomponents/ProjectCard.jsx";
import rettleImage from "./subcomponents/public/rettle_release_processing.png";
import webportfolioImage from "./subcomponents/public/webportfolio_screenshot.png";

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
    { value: '#csvs', label: 'csvs' }
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
        typeTags={['#data-processing', '#opensource', '#elasticsearch', '#sql', '#csvs']}
        imgLocation={rettleImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' In this project I built a complete Extract, Transform, Load system in Rust to process data. Around this time I was doing a lot of work with Logstash to clean up data and populate indexes in Elasticsearch, and thought that it could be done better in a systems level language, plus wanted to learn Rust. The project ended up being a success and I had a "simplified" system modelled on Keras to allow the developer to think about the layers they were adding for transforms, or pushes to other systems. I named it rettle like "kettle" because is used a tea brewing analogy for the stages, i.e. fill for extract, or steep for transform. I had a number of companion projects to handle various data sinks or sources like csvs, or elasticsearch.',
          ' In the end I shelved the project because it was a lot of work and the user needed to map all the data shapes for the Rust compiler to allow it to build and run. There is still a lot of potential in this project and later versions of Rust might better accomplish some of the reworks I was planning to make the system even simpler, but it is not something that interests me at this time.']}
      />
    </div>
  );
}
