'use client';

import Image from 'next/image'
import profilePic from './public/minimized_side_profile.jpg'
import emailLogo from './public/email-logo.png';
import personLogo from './public/person-logo.png';
import githubLogo from './public/github-mark.png';
import curseforgeLogo from './public/curseforge-logo.png';

export default function TitleBlock() {
  return (
    <div className="titleblock-container">
      <div className="image-name-block">
        <div className="image-block">
          <Image 
            src={profilePic}
            alt="profile-img"
            height={350}
          />
        </div>
        <div className="name-block">
          <h className="profile-name">BENJAMIN SLATER</h>
        </div>
      </div>
      <div className="profile-socials">
        <p>
        <Image
          className="profile-logo-img"
          src={emailLogo}
          alt="email-img"
          height={16}
        />: benjamin.ed.slater@gmail.com</p>
        <p>
        <Image
          className="profile-logo-img"
          src={personLogo}
          alt="person-img"
          height={16}
        />: (they/them)</p>
        <p>
        <Image
          className="profile-logo-img"
          src={githubLogo}
          alt="github-img"
          height={16}
        />: <a href="https://github.com/slaterb1" target="_blank">slaterb1</a></p>
        <p>
        <Image
          id="curseforge-logo"
          className="profile-logo-img"
          src={curseforgeLogo}
          alt="curseforge-img"
          width={16}
        />: <a href="https://legacy.curseforge.com/members/UmamiKin/projects" target="_blank">UmamiKin</a></p>
      </div>
    </div>
  );
}

