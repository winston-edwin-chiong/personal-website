import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (  
        <div className='flex space-x-4 justify-center pt-5 pb-4 px-3'>
          <Icon icon={faFileLines} link={"https://drive.google.com/file/d/1rwQ4FUuSHJDMOcl7toc1LffgPebBD4d5/view?usp=drive_link"}/>
          <Icon icon={faGithubAlt} link={"https://github.com/winston-edwin-chiong"}/>
          <Icon icon={faLinkedinIn} link={"https://www.linkedin.com/in/winstonechiong/"}/>
          <Icon icon={faEnvelope} link={"mailto: winstonchiong@berkeley.edu"}/>
          <Icon icon={faPhone} link={"callto: 415-802-7088"}/>
        </div>
    );
}

function Icon({icon, link}) {
  return (
    <Link href={link} target='_blank' className='py-1 px-1 sm:py-1 sm:px-2'>
      <button className='btn btn-primary hover:bg-secondary-focus/[.1] hover:transition-all hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
        <FontAwesomeIcon icon={icon} className='text-md md:text-xl'/>
      </button>
    </Link>
  )
}
