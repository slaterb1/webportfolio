'use client';

import Image from 'next/image';
import { Tag } from 'primereact/tag';

export default function ProjectCard(props) {
  console.log('imgLocation:', props.imgLocation)
  const img = props.imgLocation == null
    ? <div>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="no image available"
          height={350}
          width={512}
        />
        <a href="https://commons.wikimedia.org/wiki/File:No_Image_Available.jpg">Col pr</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
      </div>
    : <Image 
        src={props.imgLocation}
        alt="project image"
        height={350}
        width={512}
      />;

  let languageStr = '';
  for (let i = 0; i < props.languages.length; i++) {
    languageStr += props.languages[i];
    if (i + 1 !== props.languages.length) {
      languageStr += ', ';
    }
  }

  const source = props.source == null ? '' : props.source

  return (
    <div className="project-card">
      <div className="project-card-image-block">
        {img}
      </div>
      <div className="project-card-summary-block">
        <p className="project-card-title-text"><b>{props.title}</b></p>
        <p className="project-card-period-text">{props.started} - {props.updated}</p>
        <p>{source}</p>
        <p><b>Outcome:</b> {props.outcome}</p>
        {props.tags.map((item,i) => { return <span className="project-card-tag" key={i}>{item}</span> })}
      </div>
      <div className="project-card-description-block">
        {props.description}
      </div>
    </div>
  );
}
