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
        title={'Accessible Wheels Mod'}
        started={'Oct 2022'}
        updated={'present'}
        outcome={'in development'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod','#accessibility']}
        imgLocation={'https://imgur.com/BgpO4Y0.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This is a work in process project. The goal has been to add a wheelchair item to Minecraft to allow players to better identify if they are wheelchair users in real life. The development team has done a great job in the most recent, 1.20 update, to include a more diverse set of player skins. I want to be able to do the same for users with disabilities. My disabled partner has been a huge help and inspiration on this project. We are working together to tune the gameplay mechanics to make it feel exactly like the player is not in a wheelchair, but they are still seated and can accomplish anything, any other non-wheelchair player could.']}
      />
      <ProjectCard
        title={'Twitch Integration in Chat Mod'}
        started={'May 2022'}
        updated={'present'}
        outcome={'released'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod','#accessibility', '#twitch']}
        imgLocation={'https://imgur.com/zA7xjBF.gif'}
        source={'https://legacy.curseforge.com/minecraft/mc-mods/twitch-chat-in-game-chat'}
        sourceText='twitch-chat-in-game-chat'
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' The goal of this mod was to be able to include Twitch chat in the Minecraft chat to allow the streamer to be able to keep up with chat all in one place. Emotes, badges, and twitch username colours are included in the messages. I made the twitch chat colour a darker grey than regular chat to allow in game chat to still pop and not be missed by the player.', '  To make this mod work, I packaged a small server into Minecraft, which interfaces with Twitch to refresh tokens and handle pulling the streamers channel badges. I also packaged in a websocket client to use the irc client set by Twitch. This was a very difficult project that required digging through Minecraft source code to work out how to share the ingame chat and font formatting.']}
      />
      <ProjectCard
        title={'Webportfolio'}
        started={'May 2023'}
        updated={'July 2023'}
        outcome={'released'}
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
        typeTags={['#game-design','#poc','#shooter','#ai']}
        imgLocation={splatterGif}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a more complex proof of concept game, heavily inspired by Hotline Miami, an arcade style shooter. The objective is to clear all enemies from the map without getting killed. I wrote custom ai patterns for the enemies to either patrol a set path until spotting the player, or walk until it got close enough to a wall, then turn clockwise or counter-clockwise. If the enemy lost sight of the player, it would search the area before returning to it\'s original behaviour. Tested with layers to allow some visibility through glass windows, which made the gameplay more exciting.', '\tPoC was not completed because I wanted to add shooting weapons and icons above them to be displayed on map as well as other user interface bits. Ended up shelving this project for another time, as other projects became more interesting.']}
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
        title={'Voyager Travel App'}
        started={'June 2017'}
        updated={'July 2017'}
        outcome={'shelved indefinitely'}
        languageTags={['#node']}
        typeTags={['#mongodb','#startup']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was my first solo startup. I had the idea to create a travel companion app that would provide a local expert like experience to handle trip planning, accommodation booking, and travel fair bookings. I wanted it to extend to multi-city trips as well, and provide an opportunity to pay travel bloggers to write pieces about local recommendations. The core engine for the platform was going to use AI to assess what other travelers with similar likes and dislikes as you to recommend a similar experience for you. I ended up not pursuing this startup because in the early days of my research, I encountered a similar product by Google called Google Trips. I had never heard of it before, and people I talked with had not either, but it had too much overlap with what I was imagining and a majority of the data I was using was from Google, so it did not seem like the best investment for me at the time.']}
      />
      <ProjectCard
        title={'Keras Fork Update'}
        started={'Nov 2016'}
        updated={'May 2017'}
        outcome={'public fork'}
        languageTags={['#python']}
        typeTags={['#datascience','#machinelearning','#ai']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a project that I worked on specifically to implement an AI learning algorithm developed by Yoshua Bengio for work. I was working in the space of Natural Language Processing models and read a super interesting publicacation that used word2vec to encode words as numbers to build a sentence matrix that you could apply computer vision Convolution Neural Network models to. This results in building a spatial word importance image to evaulate which words in a sentence are the most important to the context of the written piece. The next layer was running the sentences through a Recurrent Neural Network to access which sentences given previous and future sentences had the most importance. I really liked this model as it took into account how a human would read something and summarize it.', '  I opted to use Keras as the Deep Learning model builder, as it simplified stitching together multiple layers of a complex learning algorithm. However, the existing  RNN layers did not allow for a model input quite like what was described in the publication, so I wrote my own implementation and provided it to the Keras team. In the end, I did not end up merging my fork, but discussed with the creators what an update like this should be like. I still have a lot of comments scattered about for supporting developers working with Keras and better understanding how it handled the data.']}
      />
      <ProjectCard
        title={'Sonar App'}
        started={'May 2013'}
        updated={'Sept 2013'}
        outcome={'shelved indefinitely'}
        languageTags={['#html','#css','#php']}
        typeTags={['#webrtc','#startup','#nonprofit', '#accessibility']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a nonprofit startup that I cofounded with a friend to improve access to mental health resources. A lot of the resources were heavily stigmatized at that time, and likely still are. We wanted to improve chat lines to let youths and young adults talk with young adults with training. Running a service like this costs a lot of money, as it requires supervision by a psychotherapist for the entire time that it operates. We wanted to offset the costs by building out a better webconferencing tool for private psychotherapists to meet with their clients. A lot of private practitioners operated in their homes and so they were in favour of a tool like ours based on interviews and going out at talking with people.', ' New standards in webrtc had just been released and there was a lot of opensource call to actions being made by organizations like Mozilla to use the tech. I implemented a basic website that properly worked with a webcam. I was very new to web based programming languages at this time and was unable to continue the development on the project on my own. For that reason, I had to shelf this project.']}
      />
      <ProjectCard
        title={'Settlers of Catan'}
        started={'June 2010'}
        updated={'Aug 2010'}
        outcome={'completed'}
        languageTags={['#c++']}
        typeTags={['#game-design','#boardgame','#ai']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' I wanted to learn programming over a summer break period, so I opted to try to build Settlers of Catan, the board game, in C++. It was a successful project, that is now lost on an old computer drive somewhere. I was able to practice a few techniques with this project, like using recursion to implement the longest road evaluator. Some of the more tricky parts were getting the AI computer players to change their gameplay tactics depending on how much space there was around them and the overall stage of the game. The game itself was rendered via ASCII art in the terminal and you could see your hand via text. It was a fun project, and resulted in a fun game that I played time to time in lunch breaks while working in a lab.']}
      />
    </div>
  );
}
