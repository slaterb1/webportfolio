'use client';

import Image from 'next/image';

function containsTag(cardTags, selectedTags) {
  console.log('cardTags:', cardTags);
  console.log('selectedTags:', selectedTags);
  for (let i = 0; i < selectedTags.length; i++) {
    const selected = selectedTags[i];
    if (cardTags.includes(selected)) {
      return true;
    }
  }
  return false;
}

export default function ProjectCard(props) {
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

  // show card if matching tags
  const languageTags = props.languageTags;
  const typeTags = props.typeTags;
  const languageTagsSelected = props.languageTagsSelected;
  const typeTagsSelected = props.typeTagsSelected;
  let projectCard = null;
  if (languageTagsSelected.length === 0 || containsTag(languageTags, languageTagsSelected)) {
    if (typeTagsSelected.length === 0 || containsTag(typeTags, typeTagsSelected)) {
      projectCard = <div className="project-card">
        <div className="project-card-image-block">
          {img}
        </div>
        <div className="project-card-summary-block">
          <p className="project-card-title-text"><b>{props.title}</b></p>
          <p className="project-card-period-text">{props.started} - {props.updated}</p>
          <p>{source}</p>
          <p><b>Outcome:</b> {props.outcome}</p>
          {props.languageTags.map((item,i) => { return <span className="project-card-language-tag" key={i}>{item}</span> })}
          {props.typeTags.map((item,i) => { return <span className="project-card-type-tag" key={i}>{item}</span> })}
        </div>
        <div className="project-card-description-block">
          {props.description.map((item,i) => { return <p className="project-card-description-piece" key={i}>{item}<br/><br/></p> })}
        </div>
      </div>
    }
  }

  return projectCard;
}
