import React from 'react';

import SC from './styled';

import { PATHNAME } from '../../enums';

const FacebookIcon = () => (
  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.94 9.98H6.39V19.5H2.53V9.98H0.699997V6.64H2.53V4.47C2.53 2.92 3.25 0.5 6.42 0.5H9.28V3.76H7.21C6.87 3.76 6.39 3.93 6.39 4.67V6.64H9.27L8.93 9.98H8.94Z" stroke="#8FB4FF" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.72 22.5599H0.5V7.77995H4.72V22.5599ZM2.61 5.66995C1.44 5.66995 0.5 4.71995 0.5 3.55995C0.5 2.39995 1.45 1.44995 2.61 1.44995C3.77 1.44995 4.72 2.39995 4.72 3.55995C4.72 4.71995 3.77 5.66995 2.61 5.66995V5.66995ZM19.5 22.5599H15.28V14.11C15.28 12.94 14.33 12 13.17 12C12.01 12 11.06 12.95 11.06 14.11V22.5499H6.84V7.77995H11.06V10.4C11.93 9.19995 13.26 7.77995 14.75 7.77995C17.37 7.77995 19.5 10.14 19.5 13.06V22.5599V22.5599Z" stroke="#8FB4FF" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.41 3.96007C22.64 3.70007 22.37 3.31007 22.04 3.41007C21.54 3.56007 21.02 3.67007 20.49 3.73007C21.15 3.33007 21.71 2.78007 22.1 2.11007C22.27 1.82007 21.97 1.48007 21.65 1.62007C21.05 1.89007 20.42 2.11007 19.77 2.25007C19.65 2.28007 19.53 2.24007 19.45 2.15007C18.61 1.33007 17.47 0.820068 16.2 0.820068C13.36 0.820068 11.24 3.33007 11.6 6.06007C11.63 6.29007 11.46 6.49007 11.23 6.47007C7.75 6.18007 4.65 4.53007 2.47 2.06007C2.3 1.86007 1.99 1.92007 1.88 2.16007C1.02 4.16007 1.66 6.58007 3.56 7.85007C3 7.83007 2.46 7.71007 1.96 7.51007C1.72 7.41007 1.46 7.62007 1.49 7.88007C1.71 9.79007 3.16 11.4701 5.18 11.8701C4.7 12.0001 4.18 12.0601 3.65 12.0201C3.38 12.0001 3.2 12.2801 3.32 12.5201C3.93 13.8101 5.12 14.7701 6.56 15.0701C6.86 15.1301 6.92 15.5401 6.66 15.7001C5.25 16.6001 3.63 17.0901 1.96 17.1401C1.61 17.1501 1.5 17.6301 1.81 17.7901C3.57 18.6701 5.56 19.1601 7.66 19.1601C16.19 19.1601 21.04 12.0201 20.84 5.55007C20.84 5.44007 20.89 5.34007 20.97 5.28007C21.49 4.89007 21.98 4.44007 22.41 3.94007V3.96007Z" stroke="#8FB4FF" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);


export function Footer() {
  return (
    <SC.Footer>
      <SC.Container>
        <SC.ByLine>
          <SC.Title>
            Datafabrikken
          </SC.Title>
          <p>
            Datafabrikken er et samarbeid mellom DigitalNorway og Digitaliseringsdirektoratet.
          </p>
          <p>
            Generelle henvendelser sendes til:&nbsp;
            <a href='mailto:datafabrikken@norge.no' rel='noopener noreferrer'>
              datafabrikken@norge.no
            </a>
          </p>
          <SC.Social>
            <a href="https://www.facebook.com/datafabrikken" target="_blank" rel='noopener noreferrer' alt="Facebook"><FacebookIcon /></a>
            <a href="https://www.linkedin.com/company/datafabrikken/" target="_blank" rel='noopener noreferrer' alt="Linkedin"><LinkedinIcon /></a>
            <a href="https://twitter.com/datafabrikken" target="_blank" rel='noopener noreferrer' alt="Twitter"><TwitterIcon /></a>
          </SC.Social>
        </SC.ByLine>
        <SC.LinkSection>
          <div>
            <SC.LinkTitle>
              Om Datafabrikken
            </SC.LinkTitle>
            <SC.LinkList>
              <li>
                <a href={PATHNAME.MAIN}>
                Hjem
                </a>
              </li>
              <li>
                <a href={PATHNAME.ABOUT}>
                Om Datafabrikken
                </a>
              </li>
              <li>              
                <a href={PATHNAME.COMMUNITY_ABOUT}>
                Om Datalandsbyen
                </a>
              </li>
              <li>                
                <a href={PATHNAME.NEWS}>
                Nyheter
                </a>
              </li>
            </SC.LinkList>
          </div>

          <div>
            <SC.LinkTitle>
              Bruk av data
            </SC.LinkTitle>
            <SC.LinkList>
              <li>
                <a href={PATHNAME.SEARCH}>
                  Søk
                </a>
              </li>
              <li>
                <a href={PATHNAME.COURSES}>
                  Kurs
                </a>
              </li>
              <li>
                <a href={PATHNAME.GUIDANCE}>
                 Veiledning
                </a>
              </li>
              <li>
                <a href={PATHNAME.COMMUNITY}>
                  Datalandsbyen
                </a>
              </li>
              <li>
                <a href={PATHNAME.ORGANIZATION}>
                  Virksomheter
                </a>
              </li>
            </SC.LinkList>
          </div>

          <div>
            <SC.LinkTitle>
              Om nettstedet
            </SC.LinkTitle>
            <SC.LinkList>
              <li>                
                <a href={PATHNAME.CONTACT}>
                Kontaktinformasjon
                </a>
              </li>
              <li>
                <a href='https://www.digdir.no/om-oss/personvernerklaering/706'>
                Personvernerklæring
                </a>
              </li>
              <li>
                <a href='https://www.digdir.no/om-oss/informasjonskapsler/707'>
                Informasjonskapsler
                </a>
              </li>
              <li>
                <a href={PATHNAME.SITEMAP}>
                Nettstedkart
                </a>
              </li>
            </SC.LinkList>
          </div>
        </SC.LinkSection>
      </SC.Container>
    </SC.Footer>
  )};

export default Footer;
