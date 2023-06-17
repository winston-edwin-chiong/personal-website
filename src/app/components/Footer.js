'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { React } from 'react';

export default function Footer() {
    return (  
        <div className='flex space-x-4 justify-center pt-5 pb-4 px-3 children:py-1 children:px-2'>
          <Icon icon={faFileLines} link={"https://www.drive.google.com"}/>
          <Icon icon={faGithubAlt} link={"https://github.com/winston-edwin-chiong"}/>
          <Icon icon={faLinkedinIn} link={"https://www.linkedin.com/in/winstonechiong/"}/>
          <Icon icon={faEnvelope} link={"mailto: winstonchiong@berkeley.edu"}/>
          <Icon icon={faPhone} link={"callto: 415-802-7088"}/>
        </div>
    );
}

function Icon({icon, link}) {
  return (
    <button className='btn btn-primary' href={link} target='_blank'>
      <FontAwesomeIcon icon={icon} size='lg'/>
    </button>
  )
}
