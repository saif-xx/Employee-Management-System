import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p>
          <FontAwesomeIcon icon={faCopyright} className="me-1" />
          2025 Employee Management System. All rights reserved.
          <p>
              <FaEnvelope className="me-1" /> Contact:{' '}
              <a href="mailto:saifnaikwade03@gmail.com" className="text-neutral">
                saifnaikwade03@gmail.com
              </a>
            </p>
              <a href="https://twitter.https://github.com/saif-xx" className="text-neutral mx-2">
                <FaGithub className="me-1" /> GitHub
              </a>
              <a href="https://https://www.linkedin.com/in/saif-naikwade-11b2a624a/.com" className="text-neutral mx-2">
                <FaLinkedin className="me-1" /> LinkeDin
              </a>
        </p> 
      </Container>
    </footer>
  );
};

export default Footer;