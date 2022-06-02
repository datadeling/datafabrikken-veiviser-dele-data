import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
    const arrayWithData = Object.keys(data);

    // close / hide intro page if user has begun schema journey
    // TODO: a better approach might be to exclude the $computed prop if
    // it's values is non-existent, in losen.
    if (
        arrayWithData.length !== 0 &&
        !(arrayWithData.length === 1 && !arrayWithData[0] !== '$computed')
    ) {
        close();
    }

    return (
        <Primitives.Wizard>
            <IntroMain>
                <Primitives.Heading.H1>Kan du dele datasettet?</Primitives.Heading.H1>
                <Primitives.Paragraphs.Lead>Ønsker du å dele data, men er usikker på om du har lov til å dele data? Gå gjennom veiviseren for å finne ut av om du lovlig kan dele, eller om det er noe mer du må gjøre eller finne ut av først.</Primitives.Paragraphs.Lead>
                <Primitives.Paragraphs.P>
                Svarene kan du ta vare på slik at du kan huske hva du må finne ut av og kan dokumentere vurderingene du har foretatt. Hvis du har behov for å finne ut av ting kan du komme tilbake for å fortsette veilederen senere.
                </Primitives.Paragraphs.P>
                <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Før du begynner er det lurt å finne fram til dokumentasjon som inneholder informasjon om dataene du ønsker å dele. Dette er typisk:
                </Primitives.Paragraphs.P>
                <ul>
                    <li>Internkontroll for virksomhetens behandling av personopplysninger</li>
                    <li>Behandlingsprotokoll</li>
                    <li>Avtaler, lisenser, og annet som regulerer datasettene som ønskes delt</li>
                </ul>
                <Primitives.Paragraphs.P>
                    Disse dokumentene gir blant annet svar på:
                </Primitives.Paragraphs.P>
                <ul>
                    <li>Hva slags informasjon du kan dele</li>
                    <li>Hvilke regelverk som regulerer delingen du har lyst til å gjøre</li>
                    <li>Hvordan du kan gå frem for å dele data i samsvar med gjeldene lovverk</li>
                </ul>
                <Primitives.Paragraphs.P>Dette kan hjelpe deg å svare riktig i veiviseren. </Primitives.Paragraphs.P>
                <br />
                <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Det er du som er ansvarlig for at alle lover og regler blir fulgt når du deler data. Er det noen spørsmål du er usikker på underveis? Da kan du stille spørsmål i Datalandsbyen eller ta kontakt med våre juridiske rådgivere.
                </Primitives.Paragraphs.P>
                <br />
                <Primitives.Button.MainButton type="button" onClick={() => close()}>
                  Start veiviseren
                </Primitives.Button.MainButton>
            </IntroMain>
        </Primitives.Wizard>
    );
}

Intro.propTypes = {
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
