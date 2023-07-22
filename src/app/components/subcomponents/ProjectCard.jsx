'use client';

import Image from 'next/image';
import raindogLogo from "./public/raindog_logo.gif";

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
    ? <Image 
        src={raindogLogo}
        alt="no image available"
        height={350}
        width={450}
      />
    : <Image 
        src={props.imgLocation}
        alt="project image"
        height={350}
        width={props.imgWidth ? props.imgWidth : 512}
      />;

  const source = props.source == null ? '' : props.source;
  const sourceText = props.sourceText ? props.sourceText : source;

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
          <p><b>Source:</b><a href={source} target="_blank"> {sourceText}</a></p>
          <p><b>Outcome:</b> {props.outcome}</p>
          <div className="project-card-tag-block">
            {props.languageTags.map((item,i) => { return <span className="project-card-language-tag" key={i}>{item}</span> })}
            {props.typeTags.map((item,i) => { return <span className="project-card-type-tag" key={i}>{item}</span> })}
          </div>
        </div>
        <div className="project-card-description-block">
          {props.description.map((item,i) => { return <p className="project-card-description-piece" key={i}>{item}<br/><br/></p> })}
        </div>
      </div>
    }
  }

  return projectCard;
}
