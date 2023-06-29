'use client';

import { useState } from "react";
import Select from "react-select";
import ProjectCard from "./subcomponents/ProjectCard.jsx";
import rettleImage from "./subcomponents/public/rettle_release_processing.png";

export default function ProjectShowcase() {
  const [languageTags, setLanguageTags] = useState([]);
  const [typeTags, setTypeTags] = useState([]);
  const languageOptions = [
    { value: '#rust', label: 'rust' },
    { value: '#nextjs', label: 'nextjs' },
    { value: '#css', label: 'css' }
  ];
  const typeOptions = [
    { value: '#data-visualization', label: 'data-visualization' },
    { value: '#design', label: 'design' },
    { value: '#modeling', label: 'modeling' },
    { value: '#data', label: 'data' }
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
        title={'Rettle'}
        started={'May 5, 2019'}
        updated={'Jan 10, 2020'}
        languages={['Rust']}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/rettle'}
        languageTags={['#rust']}
        typeTags={['#data']}
        imgLocation={rettleImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' In this project I built a complete Extract, Transform, Load system in Rust to process data. Around this time I was doing a lot of work with Logstash to clean up data and populate indexes in Elasticsearch, and thought that it could be done better in a systems level language, plus wanted to learn Rust. The project ended up being a success and I had a "simplified" system modelled on Keras to allow the developer to think about the layers they were adding for transforms, or pushes to other systems. I named it rettle like "kettle" because is used a tea brewing analogy for the stages, i.e. fill for extract, or steep for transform. I had a number of companion projects to handle various data sinks or sources like csvs, or elasticsearch.',
          ' In the end I shelved the project because it was a lot of work and the user needed to map all the data shapes for the Rust compiler to allow it to build and run. There is still a lot of potential in this project and later versions of Rust might better accomplish some of the reworks I was planning to make the system even simpler, but it is not something that interests me at this time.']}
      />
      <ProjectCard
        title={'Rettle'}
        started={'May 5, 2019'}
        updated={'Jan 10, 2020'}
        languages={['Rust']}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/rettle'}
        languageTags={[]}
        typeTags={['#data']}
        imgLocation={rettleImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={['Long description for Rettle project...']}
      />
    </div>
  );
}
