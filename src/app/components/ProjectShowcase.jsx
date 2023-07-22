'use client';

import { useState } from "react";
import Select from "react-select";
import ProjectCard from "./subcomponents/ProjectCard.jsx";
import rettleImage from "./subcomponents/public/rettle_release_processing.png";
import webportfolioImage from "./subcomponents/public/webportfolio_screenshot.png";
import blogGif from "./subcomponents/public/blog_the_blob.gif";
import splatterGif from "./subcomponents/public/top_down_splatter.gif";
import blenderDoughnut from "./subcomponents/public/blender_doughnut.png";
import blenderChair from "./subcomponents/public/blender_chair.png";
import shaderWorld from "./subcomponents/public/shader_world.png";
import pipeGame from "./subcomponents/public/pipegame.gif";
import noiseGenPython from "./subcomponents/public/python-noise-gen.png";
import noiseGenRust from "./subcomponents/public/rust-noise-gen.png";

export default function ProjectShowcase() {
  const [languageTags, setLanguageTags] = useState([]);
  const [typeTags, setTypeTags] = useState([]);
  const languageOptions = [
    { value: '#rust', label: 'rust' },
    { value: '#java', label: 'java' },
    { value: '#blockbench', label: 'blockbench' },
    { value: '#blender', label: 'blender' },
    { value: '#c#', label: 'c#' },
    { value: '#unity', label: 'unity' },
    { value: '#nextjs', label: 'nextjs' },
    { value: '#node', label: 'node' },
    { value: '#golang', label: 'golang' },
    { value: '#python', label: 'python' },
    { value: '#css', label: 'css' },
    { value: '#html', label: 'html' },
    { value: '#php', label: 'php' },
    { value: '#d3', label: 'd3' }
  ];
  const typeOptions = [
    { value: '#game-design', label: 'game-design' },
    { value: '#data-visualization', label: 'data-visualization' },
    { value: '#shaders', label: 'shaders' },
    { value: '#shaderlab', label: 'shaderlab' },
    { value: '#minecraft', label: 'minecraft' },
    { value: '#ai', label: 'ai' },
    { value: '#mod', label: 'mod' },
    { value: '#mixin', label: 'mixin' },
    { value: '#twitch', label: 'twitch' },
    { value: '#modelling', label: 'modelling' },
    { value: '#resourcepack', label: 'resourcepack' },
    { value: '#opensource', label: 'opensource' },
    { value: '#accessibility', label: 'accessibility' },
    { value: '#data-processing', label: 'data-processing' },
    { value: '#datascience', label: 'datascience' },
    { value: '#machinelearning', label: 'machinelearning' },
    { value: '#elasticsearch', label: 'elasticsearch' },
    { value: '#mongodb', label: 'mongodb' },
    { value: '#forge', label: 'forge' },
    { value: '#fabric', label: 'fabric' },
    { value: '#vaulthunters', label: 'vaulthunters' },
    { value: '#poc', label: 'poc' },
    { value: '#puzzle', label: 'puzzle' },
    { value: '#platformer', label: 'platformer' },
    { value: '#shooter', label: 'shooter' },
    { value: '#boardgame', label: 'boardgame' },
    { value: '#sql', label: 'sql' },
    { value: '#pypi', label: 'pypi' },
    { value: '#npm', label: 'npm' },
    { value: '#gtk', label: 'gtk' },
    { value: '#amethyst', label: 'amethyst' },
    { value: '#webrtc', label: 'webrtc' },
    { value: '#startup', label: 'startup' },
    { value: '#nonprofit', label: 'nonprofit' },
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
        typeTags={['#minecraft','#mod','#accessibility', '#forge', '#game-design']}
        imgLocation={'https://imgur.com/BgpO4Y0.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This is a work in process project.', ' The goal has been to add a wheelchair item to Minecraft to allow players to better identify with themselves if they are everyday wheelchair users in real life. The Mojang development team has done a great job in the 1.20 update to include a more diverse set of player skins. I want to be able to do the same for users with disabilities. My disabled partner has been a huge help and inspiration on this project. We are working together to tune the gameplay mechanics to make it feel exactly like the player is not in a wheelchair, but they are still seated and can accomplish anything, any other non-wheelchair player could.']}
      />
      <ProjectCard
        title={'Twitch Integration in Chat Mod'}
        started={'May 2022'}
        updated={'present'}
        outcome={'released'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod','#twitch','#accessibility', '#game-design','#forge','#fabric']}
        imgLocation={'https://imgur.com/zA7xjBF.gif'}
        source={'https://legacy.curseforge.com/minecraft/mc-mods/twitch-chat-in-game-chat'}
        sourceText='twitch-chat-in-game-chat'
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' The goal of this mod was to be able to include Twitch chat in the Minecraft chat to allow the streamer to be able to keep up with chat all in one place. Emotes, badges, and twitch username colours are included in the messages. I made the twitch chat colour a darker grey than regular chat to allow in game chat to still pop and not be missed by the player.', '  To make this mod work, I packaged a small server into Minecraft, which interfaces with Twitch to refresh tokens and handle pulling the streamers channel badges. I also packaged in a websocket client to use the irc client set by Twitch. This was a very difficult project that required digging through Minecraft source code to work out how to share the ingame chat and font formatting.']}
      />
      <ProjectCard
        title={'Pick Block But For Tools Mod'}
        started={'Feb 2022'}
        updated={'present'}
        outcome={'released'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod','#accessibility','#game-design', '#forge', '#fabric']}
        imgLocation={'https://imgur.com/NSVACO4.gif'}
        source={'https://legacy.curseforge.com/minecraft/mc-mods/pick-block-but-for-tools'}
        sourceText='pick-block-but-for-tools'
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was my first Minecraft mod, built first for Fabric, and then I ported it to Forge to improve accessibility. This mod extends the quick pick block feature, by allowing you to pick the best tool in your inventory to break or silk touch the block you clicked on. The idea for this mod came from my partner, as they were an active builder and wanted a better way to switch from building blocks to your tools to remove blocks for terraforming. This mod has 1000+ downloads.']}
      />
      <ProjectCard
        title={'Vault Custom Room Update Mod'}
        started={'Feb 2023'}
        updated={'present'}
        outcome={'on private server'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod', '#forge', '#vaulthunters', '#mixin']}
        imgLocation={'https://imgur.com/kx7acwS.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a mixin mod to update the config loader inside the Vault Hunters 3rd Edition mod to add some new themes and custom built rooms. The group that I was playing Vault Hunters 2nd Edition with wanted to build our own rooms since early 2022. The style of vaults changed a lot in this edition and we missed the more random layouts, which made the game great. This mod was difficult to build and I set it up to merge the new configs from this mod with the existing configs of Vault Hunters to reduce the amount of rework, and to still get new rooms being added by the team when they released new versions of the pack. I also added new commands to let the players change settings in game and turn off the mod if they want to use default rooms and themes instead.', '  This mod was successful and allowed us to play with random theme variants and integrate our own rooms into the room pools. This mod is running on a private owned server and we all got more playtime in the pack because of it.']}
      />
      <ProjectCard
        title={'VH Friends Mod'}
        started={'Aug 2022'}
        updated={'present'}
        outcome={'on private server'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod', '#forge','#game-design','#vaulthunters','#mixin']}
        imgLocation={'https://imgur.com/IuZq8vB.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a mixin that I originally created for Vault Hunters 2nd Edition, then extended it to 3rd Edition. I was apart of a larger Vault Hunters community discord and a lot of players wanted to be able to see each other as enemies, statues, and vendors in their respective games. The mod itself is pretty simple, it just added to an existing "getPlayerSkin" functionality to add a list of player names for people that wanted to be included. My 3rd Edition version was more complex in that I allowed for in game commands to add and remove players from the list. I included a general server wide list that applied to everyone, as well as individual lists per player to allow streamers to have redemtions to add viewer skins as mob enemies in game. When multiple entered a vault together I would merge the individual lists to pull names from. This functionality was built out with an event distributed mindset.', ' I released the 2nd Edition version of the mod to the Vault Hunters community discord. The 3rd edition one I only put on the private server.']}
      />
      <ProjectCard
        title={'VH Coop Improved Mod'}
        started={'Apr 2023'}
        updated={'July 2023'}
        outcome={'released'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mod', '#forge','#game-design','#vaulthunters','#mixin']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This mixin mod was a reaction to one of the changes made by the official Vault Hunters team. They made the decision to reduce the amount of loot that a player recieves if they are at a higher level than the vault they are in. The community did not like this change, as it made running vaults with lower level friends not fun. Not everyone can invest as much time into the game as others, so player levels will drift apart as a season goes on. The game does offer casual mode and casual game rules but did not allow players to opt out of this change. I created this mod to remove this change and it increased the amount of coop play that our server had, which was the main reason everyone liked Vault Hunters 2nd Edition, running vaults with friends.', ' I released this mod to the Vault Hunters community discord. Update 11, introduced the game rule to remove the scaling change, so I no longer need to keep this mod updated.']}
      />
      <ProjectCard
        title={'Patchwork Totems Mod'}
        started={'Jan 2023'}
        updated={'Feb 2023'}
        outcome={'released'}
        languageTags={['#java', '#blockbench']}
        typeTags={['#minecraft','#mod','#forge','#game-design','#modelling','#accessibility']}
        imgLocation={'https://imgur.com/2WKGcAL.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        source={'https://legacy.curseforge.com/minecraft/mc-mods/patchworktotems'}
        sourceText='patchworktotems'
        description={[' My Patchwork Totems mod allows players to sew patches onto their totems of undying and enderpearls to regain their Vanilla behaviours. I also extended this mod to allow players to trade patterns for protection enchantment books. The decision for this mod was to counter mods removing Vanilla Minecraft features that players have grown accustomed too and use in their toolkit to survive. The Vault Hunters 3rd Edition mod removed these Vanilla items and players wanted them back, so I wrote the mod and distributed it on Curseforge.', '  In addition to adding in game menus and the mechanics to use the items, I made a 3D model for the sewing machine block that is used in game.']}
      />
      <ProjectCard
        title={'Timeout Extender Mod'}
        started={'Feb 2023'}
        updated={'Feb 2023'}
        outcome={'private template repo'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mixin','#forge','#game-design']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' Modded Minecraft needs to send a lot of data between the client and server, so players tend to get timeout exceptions on joining the server or kicked if they cannot send data back within a time limit set for Vanilla. So I wrote a small mixin mod that increases the timeout threshold. The mod also has new commands in game to let users update the thresholds as needed.']}
      />
      <ProjectCard
        title={'Minecraft Mixin Template'}
        started={'Aug 2022'}
        updated={'Feb 2023'}
        outcome={'private template repo'}
        languageTags={['#java']}
        typeTags={['#minecraft','#mixin','#forge','#game-design']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' Because I planned on writing a few mixin mods and the setup is confusing, I chose to build out a template repo in Github for Minecraft version 1.16.5 and 1.18.2. I have used this template on a number of projects that came after this.']}
      />
      <ProjectCard
        title={'Webportfolio'}
        started={'May 2023'}
        updated={'July 2023'}
        outcome={'released'}
        source={'https://github.com/slaterb1/webportfolio'}
        languageTags={['#nextjs', '#css', '#d3']}
        typeTags={['#data-visualization']}
        imgLocation={webportfolioImage}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' Goal of this project was to build out an interactive webportfolio to highlight my experience as well as projects that I have been working on in my spare time. I have tinkered with React in the past, but never Nextjs and wanted to take this opportunity to try it out. In years past I spent months designing custom d3 plots for work and wanted to use that technology to build the graph displaying my years of experience across multiple languages and frameworks. It was challenging to fit all technologies in the graph in a readable way, so I limited it to ones I thought would be most relavent.',
          '  The project card showcase was an idea I had to allow people to filter my projects and see everything in reverse chronological order. Overall I was very satisfied by the outcome, and incorporated all my own css design choices.']}
      />
      <ProjectCard
        title={'Twitch VH Commands Mod'}
        started={'Sept 2022'}
        updated={'Sept 2022'}
        outcome={'private mod'}
        languageTags={['#java']}
        typeTags={['#minecraft','#twitch','#forge','#game-design']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This mod was the first extension mod that I built for my twitch integration mod. It extends the irc client to listen for Twitch viewers sending commands registered to the game. Vault Hunters 2nd Edition included architect vaults that let viewers vote on which rooms to add to a vault as the streamer runs it. The tools for it was never released with the vault hunters mod, so I implemented one myself. It works with multiple streamers too as long as they have the twitch integration mod included in their mods folder. Myself, YerFriendGraph, and ThisIsLammyPi successfully ran a few architect vaults on stream with viewers. I recently released the twitch integration mod, so I will likely release this mod as well.']}
      />
      <ProjectCard
        title={'Minecraft Custom Model Renderers'}
        started={'Jan 2022'}
        updated={'Oct 2022'}
        outcome={'released to friends'}
        languageTags={['#blockbench']}
        typeTags={['#minecraft','#resourcepack','#game-design','#modelling']}
        imgLocation={'https://imgur.com/z9OgvV4.gif'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' I wanted to practice game asset modelling and was playing quite a bit of Vanilla Minecraft with friends at the time. Blockbench was officially released as a toolset by the Mojang team and I wanted to learn this toolkit as well. Using Blockbench, I designed a custom crossbow with loading animations, 2D (retexture) and 3D (model) custom swords, as well as some tools like shovels and hoes. I packed up my models as a resource pack and provided it to friends.', ' By using the optifine mod in game, I was able to include rules for when the new models should be rendered, for example if a crossbow was named "Pierson" it would render as the custom model I designed. I also experimented with changing up the villager skins to be custom full skin retextures including rules for where they would spawn with these models versus the regular villager textures.']}
      />
      <ProjectCard
        title={'Random Noise Generator CLI Tool Rust'}
        started={'Aug 2021'}
        updated={'Aug 2021'}
        outcome={'private repo'}
        languageTags={['#rust']}
        typeTags={['#shaders', '#game-design']}
        imgWidth={400}
        imgLocation={noiseGenRust}
        source={'https://github.com/Raindog-Games/img-noise'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a follow up project to my Python noise command line interface tool. I found an opensource Rust based noise generator for multiple noise type generators and decided to wrap it into a CLI tool for myself to continue shader development. Perlin noise computations can get very expensive in terms of computation time when using higher order iterators. Rust is incredibly efficient so it worked much better for building out more complicated noise images.']}
      />
      <ProjectCard
        title={'Random Noise Generator CLI Tool Python'}
        started={'July 2021'}
        updated={'Aug 2021'}
        outcome={'released'}
        languageTags={['#python']}
        typeTags={['#shaders', '#game-design', '#pypi', '#opensource']}
        imgWidth={325}
        imgLocation={noiseGenPython}
        source={'https://pypi.org/project/noise-img-generator/'}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This project came out of a need to create random noise to assist shader development. I used this for perlin and random matrix noise to create defects on materials. This is a command line interface tool that lets the user run a command to output and save a noise image with whatever name the user chooses.', '  This project required more custom development so I opted to release it to the public for others to use as well.']}
      />
      <ProjectCard
        title={'Pipe Game'}
        started={'Dec 2021'}
        updated={'Jan 2022'}
        outcome={'shelved'}
        languageTags={['#unity', '#c#', '#rust', '#blender']}
        typeTags={['#puzzle', '#game-design', '#modelling']}
        imgLocation={pipeGame}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' The goal for this project was to make a simple mobile puzzle game that would be relaxing for users to play. I set it up to work with 2D and 3D puzzles. The 3D puzzles would have layers that you have to turn and twist the puzzle and cycle through the layers to access the pipes and rotate them. I created pipes for use in the game in Blender and imported them to the Unity project. I also created a puzzle randomizer in Rust to autogenerate levels to be loaded in the game when the puzzle starts.', ' I plan to release the 2D version for free and make the 3D puzzles a paid feature, with some animation upon completing the puzzle. There is quite a bit more work to do, but I got tied up with another game project. This is shelved for now, but might come back and finish a version of it for release.']}
      />
      <ProjectCard
        title={'Blender Chair'}
        started={'Sept 2021'}
        updated={'Sept 2021'}
        outcome={'complete'}
        languageTags={['#blender']}
        typeTags={['#modelling', '#game-design']}
        imgLocation={blenderChair}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        imgWidth={400}
        description={[' This project was following Blender Guru\'s chair tutorial (https://www.youtube.com/@blenderguru). This was a more complex multihour project that had more room for experimentation. Throughout the tutorial it would close the session video by assigning "homework" to be done before the next part. I was able to successfully complete each section, and some of the simplifications that I made, ended up being recommended revisions in later parts.']}
      />
      <ProjectCard
        title={'Blender Doughnut'}
        started={'Aug 2021'}
        updated={'Aug 2021'}
        outcome={'complete'}
        languageTags={['#blender']}
        typeTags={['#modelling', '#game-design']}
        imgLocation={blenderDoughnut}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        imgWidth={400}
        description={[' This was my first Blender project. I chose to follow Blender Guru\'s doughnut tutorial (https://www.youtube.com/@blenderguru). Did not change too much from the tutorial but opted to try to make a hard shell chocolate glaze on top.']}
      />
      <ProjectCard
        title={'Shaders Development/Testing'}
        started={'May 2021'}
        updated={'Aug 2021'}
        outcome={'still in development'}
        languageTags={['#unity']}
        typeTags={['#shaders', '#shaderlab']}
        imgLocation={shaderWorld}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' After starting a few projects in Unity, I opted to study shaders and practice their implementation. I have a Unity project dedicated to simple shapes with various shaders applied. I have shaders for "collectibles" that rotate and bounce in place, shaders that make objects materialize and dematerialize, as well as toon based vectorization. I use this space to test out visualizations for future games. I also implemented Journey based shaders to create "ocean sand currents" based on a tutorial by Alan Zucconi (https://www.alanzucconi.com/2019/10/08/journey-sand-shader-1/).']}
      />
      <ProjectCard
        title={'Fastify-Pubsub'}
        started={'Dec 2021'}
        updated={'Dec 2021'}
        outcome={'released'}
        source={'https://www.npmjs.com/package/fastify-pubsub'}
        languageTags={['#node']}
        typeTags={['#opensource', '#fastify', '#npm']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' I created this to solve a distributed data problem for work. I needed a plugin that simplified setting up a pub/sub connection using Redis as a broker. Fastify has a great Redis plugin but no support for a pub/sub connection. This project did not take long and I was able to use it for work as well as release it through npm.']}
      />
      <ProjectCard
        title={'Simple-Es'}
        started={'Jan 2020'}
        updated={'Aug 2021'}
        outcome={'shelved'}
        source={'https://github.com/slaterb1/simple-es'}
        languageTags={['#rust']}
        typeTags={['#data-processing', '#opensource', '#elasticsearch']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' Around the time when I was working on Rettle, I wanted to make Elasticsearch one of the first source and sink libraries to interface with. However, at this time there was not an easy client and Elasticsearch was not going to support ES 5.6, only more modern clients. So I made it my own objective to create a Rust based client for Elasticsearch that supported 5.6+. I built it out as a tokio async client that allowed the user to create json query strings to apply the action with filters in an easier way.', ' I worked on this project for a good chunk of time but eventually the official Elasticsearch team paired with one of the existing clients that needed some help. That official project made the same decisions that I did in terms of simple user defined queries, so I did not find the need as much to complete this project and opted to shelve it and work on other projects. I was able to use the base version that I created with the Rettle project which unblocked that at the time of development here.']}
      />
      <ProjectCard
        title={'Banjo Game Engine'}
        started={'Apr 2020'}
        updated={'Jan 2021'}
        outcome={'shelved'}
        languageTags={['#rust']}
        typeTags={['#engine', '#game-design', '#gtk']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' I had previously done some game design work in Rust and wanted to try building a new Rust game engine for personal use to save on license costs. Amethyst is a great Rust engine but does not have an intuitive user interface like Unity, which has sped up my game design. This was sorta a side project and I spent some time working in gtk to build out a basic file menu interface. I definitely want to go this route in the future, but plan to have a couple game releases using Unity or UnrealEngine before tackling this project. For that reason, I have shelved this project.']}
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
        title={'Rift'}
        started={'Sept 2019'}
        updated={'Apr 2020'}
        outcome={'shelved'}
        languageTags={['#rust']}
        typeTags={['#game-design', '#amethyst']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' After doing some more research into game design tools, I found that Rust had better support for it. This was before I took the time to learn Rust via the Rust Book, but I was still able to translate the code I had in place for Golang into Rust using the Amethyst game engine. Super passionate about this game idea, but I have shelved it until I have more game design experience and can tackle this on my own or with a small team.', ' For more information about Rift, check out my entry "Rift in Go"']}
      />
      <ProjectCard
        title={'Rift in Go'}
        started={'Jan 2019'}
        updated={'Mar 2019'}
        outcome={'closed'}
        languageTags={['#golang']}
        typeTags={['#game-design']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' I was playing a lot of roguelite games around this time and realized that there was not a roguelite turn based strategy game, and I think it would make for a very satisfying cross genre. This project was mostly research and planning. I have a few notebooks where I have written out the job trees, map generation, and randomization to balance the strategic portions and the roguelite "react based on what is being given to the player randomly".', ' I am just as excited about this project today as I was when I originally had the idea, but I want to get more experience in game design first before attempting this project. It will kinda be a like Final Fantasy Tactics for PSX with randomization factors for maps and characters that join you as you get closer to the chaos that is the Rift. I started this project in Golang as I did not want to start game design in C++ or C# at this time. Golang had some good tools for 2D game development. I moved this project over to Rust after discovering that it has a much broader and deeper set of tools and packages for game development.']}
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
        description={[' This was my first solo startup. I had the idea to create a travel companion app that would provide a local expert like experience to handle trip planning, accommodation booking, and travel fare bookings. I wanted it to extend to multi-city trips as well, and provide an opportunity to pay travel bloggers to write pieces about local recommendations. The core engine for the platform was going to use AI to assess what other travelers with similar likes and dislikes as you to recommend a similar experience for you.', ' I ended up not pursuing this startup because in the early days of my research, I encountered a similar product by Google called Google Trips. I had never heard of it before, and people I talked with had not either, but it had too much overlap with what I was imagining and a majority of the data I was using was from Google, so it did not seem like the best investment for me at the time.']}
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
        description={[' This was a project that I worked on specifically to implement an AI learning algorithm developed by Yoshua Bengio for work. I was working in the space of Natural Language Processing models and read a super interesting publication that used word2vec to encode words as numbers to build a sentence matrix that you could apply computer vision Convolution Neural Network models to. This results in building a spatial word importance image to evaulate which words in a sentence are the most important to the context of the written piece. The next layer was running the sentences through a Recurrent Neural Network to access which sentences given previous and future sentences had the most importance. I really liked this model as it took into account how a human would read something and summarize it.', '  I opted to use Keras as the Deep Learning model builder, as it simplified stitching together multiple layers of a complex learning algorithm. However, the existing  RNN layers did not allow for a model input quite like what was described in the publication, so I wrote my own implementation and provided it to the Keras team. In the end, I did not end up merging my fork, but discussed with the creators what an update like this should be like. I still have a lot of comments scattered about for supporting developers working with Keras and better understanding how it handled the data.']}
      />
      <ProjectCard
        title={'Kaggle Plankton Classification'}
        started={'Dec 2014'}
        updated={'Mar 2015'}
        outcome={'completed'}
        languageTags={['#python']}
        typeTags={['#datascience','#machinelearning']}
        languageTagsSelected={languageTags}
        typeTagsSelected={typeTags}
        description={[' This was a point in time where I took a short break from my Masters to learn Python and Machine Learning algorithms for image classification. I was doing a lot of image processing for my Masters research and wanted to take this opportunity to expand my learning and growth. Moving from C++ and Matlab to Python was super simple and I was able to apply a lot of the image noise removal and kernal transformations from my research to the images in the plankton classification problem.', '  I did not place super high in the competition, somewhere above the 50% mark, but I would consider this project a success as it was my first stab at Python and Machine Learning. This kickstarted my career in Data Science and landed me a few positions while I finished up my Masters.']}
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
        description={[' This was a nonprofit startup that I cofounded with a friend to improve access to mental health resources. A lot of the resources were heavily stigmatized at that time, and likely still are. We wanted to improve chat lines to let youths and young adults talk with young adults with training. Running a service like this costs a lot of money, as it requires supervision by a psychotherapist for the entire time that it operates. We wanted to offset the costs by building out a better webconferencing tool for private psychotherapists to meet with their clients. A lot of private practitioners operated in their homes and so they were in favour of a tool like ours based on interviews with them.', ' New standards in webrtc had just been released and there was a lot of opensource call to actions being made by organizations like Mozilla to use the tech. I implemented a basic website that properly worked with a webcam. I was very new to web based programming languages at this time and was unable to continue the development on the project on my own. For that reason, I had to shelf this project.']}
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
