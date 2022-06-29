import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';
import Alert from '../primitives/Alert'; 

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
            <Alert>TESTVERSJON!</Alert>
            <IntroMain>
                <Primitives.Heading.H1>Kan du dele datasettet?</Primitives.Heading.H1>
                <Primitives.Paragraphs.Lead>Ønsker du å dele data, men er usikker på om du har lov til å dele data? Vår Veileder hjelper deg med å finne ut om du lovlig kan dele data, eller hva du eventuelt må endre for å kunne dele.</Primitives.Paragraphs.Lead>
                <Primitives.Heading.H2>Hva inneholder veilederen</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Veilederen guider deg gjennom noen sentrale juridiske spørsmål du må besvare før du deler data.
                </Primitives.Paragraphs.P>
                <Primitives.Paragraphs.P>
                Målgruppen for denne Veilederen er både jurister og ikke-jurister som ønsker svar på spørsmålet “kan jeg dele disse dataene?”. Veiledningen tilpasser seg svarene som oppgis og vurderingene som foretas. I enkelte tilfeller gis det også forklaringer og eksempler som hjelper deg videre om du har behov for mer informasjon.
                </Primitives.Paragraphs.P>
                <Primitives.Paragraphs.P>
                Veiledningen er <u><b>ikke</b></u> uttømmende. Det betyr at den kun hjelper deg med å svare på noen sentrale juridiske spørsmål. Det kan være andre spørsmål som ikke besvares her. Du er selv ansvarlig for å sørge for at din deling av data skjer i henhold til gjeldende regelverk.
                </Primitives.Paragraphs.P>
                <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Når du er ferdig med Veilederen, kan du laste ned en PDF med resultatene dine. Resultatene gir deg en oversikt over hva du må finne ut av og kan blant annet benyttes som grunnlag for å dokumentere vurderingene som er foretatt. Det er mulig å ta en pause i veilederen ved behov, og komme tilbake for å fortsette senere.
                </Primitives.Paragraphs.P>
                <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Det er lurt å finne fram til dokumentasjon som inneholder informasjon om dataene du ønsker å dele. Dette er typisk:
                </Primitives.Paragraphs.P>
                <ul>
                    <li><a href="https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/informasjonssikkerhet-internkontroll/etablere-internkontroll/" target="_blank" rel="noopener noreferrer">Internkontroll</a> for virksomhetens behandling av personopplysninger</li>
                    <li><a href="https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/protokoll-over-behandlingsaktiviteter/" target="_blank" rel="noopener noreferrer">Behandlingsprotokoll</a></li>
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
                <Primitives.Paragraphs.P>Dette kan hjelpe deg å svare riktig i veilederen. </Primitives.Paragraphs.P>
                <br />
                <Primitives.Heading.H2>Ansvar</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Du er selv ansvarlig for at alle lover og regler blir fulgt når du deler data. Vår veileder fungerer som et hjelpeverktøy som lar deg navigere hvilke vurderinger som skal foretas, samt når og hvordan. Datafabrikken arbeider for at Veilederen er oppdatert og nøyaktig.
                </Primitives.Paragraphs.P>
                <Primitives.Paragraphs.P>
                Brukeren aksepterer og er innforstått med at bruk av Veilederen kun er et teknisk eller elektronisk hjelpemiddel som tilbys slik det til enhver tid er. Enhver bruk av Veilederen skjer på Brukerens egen regning og risiko.
                </Primitives.Paragraphs.P>
                <Primitives.Paragraphs.P>
                Datafabrikken gir ingen garantier for tjenestens nøyaktighet eller bruksområde mv og fraskriver seg ethvert direkte og indirekte ansvar for feil og mangler, samt ansvar for skade og/eller tap av noen art som følge av bruk av Veilederen.
                </Primitives.Paragraphs.P>
                <Primitives.Paragraphs.P>
                Veilederen er fremdeles under utvikling. Dersom du oppdager feil, unøyaktigheter eller mangler, ber vi om at du melder inn dette, slik at vi kontinuerlig kan forbedre
                </Primitives.Paragraphs.P>
                <Primitives.Heading.H2>Kontakt oss</Primitives.Heading.H2>
                <Primitives.Paragraphs.P>
                Er det noen spørsmål du er usikker på underveis? Da kan du <a href="https://datalandsbyen.norge.no" target="_blank" rel="noopener noreferrer">stille spørsmål i Datalandsbyen</a> eller <a href="https://datalandsbyen.norge.no/category/9/juss-og-data" target="_blank" rel="noopener noreferrer">ta kontakt med Nasjonalt ressurssenter for deling og bruk av data</a>.
                </Primitives.Paragraphs.P>
                <br />
                <Primitives.Button.MainButton type="button" onClick={() => close()}>
                  Start veilederen
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
