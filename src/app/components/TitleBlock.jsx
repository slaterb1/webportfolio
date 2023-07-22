'use client';

import Image from 'next/image'
import profilePic from './public/minimized_side_profile.jpg'

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
        <p>Email: benjamin.ed.slater@gmail.com</p>
        <p>Pronouns: (they/them)</p>
        <p>Github: <a href="https://github.com/slaterb1" target="_blank">slaterb1</a></p>
        <p>Curseforge: <a href="https://legacy.curseforge.com/members/UmamiKin/projects" target="_blank">UmamiKin</a></p>
      </div>
    </div>
  );
}

