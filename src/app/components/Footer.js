import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (  
        <div className="flex justify-center pt-5 pb-4 px-3">
          <Icon icon={faFileLines} link={"/resume"}/>
          <Icon icon={faGithubAlt} link={"https://github.com/winston-edwin-chiong"}/>
          <Icon icon={faLinkedinIn} link={"https://www.linkedin.com/in/winstonechiong/"}/>
          <Icon icon={faEnvelope} link={"mailto: winstonchiong@berkeley.edu"}/>
          <Icon icon={faPhone} link={"callto: 415-802-7088"}/>
        </div>
    );
}

function Icon({icon, link}) {
  return (
    <Link href={link} target='_blank' className="my-1 md:mx-8 sm:mx-6 mx-4">
      <div className='py-1 px-1 sm:py-1 sm:px-2 hover:transition-all hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
        <FontAwesomeIcon icon={icon} className='text-md md:text-xl'/>
      </div>
    </Link>
  )
}
