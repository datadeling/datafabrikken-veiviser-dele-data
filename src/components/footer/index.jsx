import React from 'react';

import SC from './styled';

import { PATHNAME } from '../../enums';

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
