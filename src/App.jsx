import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider } from 'losen';

import store from './store';
import styles from './styles';
import datadeling from './api/datadeling.json';
import dataExport from './exports/data-export';
import { InfoBox } from './components/infobox';
import { Container } from './components/container';
import { Root } from './components/root';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HeaderSection } from './components/header-section';
import { registerPageView } from './utils/analytics'

import Intro from './pages/Intro';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
    };
    this.closeIntro = this.closeIntro.bind(this);
  }

  closeIntro() {
    this.setState({
      intro: false,
    });
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    registerPageView(window.location.pathname);    
  }

  componentDidUpdate() {
    const { state: { intro } } = this;
    if (!intro) {
      const buttons = document.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        let btn = buttons[i];
        if(btn.innerHTML === 'Vis resultat') {
          btn.innerHTML = 'Vis sammendrag';
        }
      };
    }
  }

  render() {
    const { state: { intro } } = this;
    if (intro) {
      return (
        <Provider store={store}>
          <Root>
            <Header />
            <HeaderSection />
            <StyleProvider styles={styles}>
              <Intro close={this.closeIntro} />
            </StyleProvider>
            <Footer />
          </Root>
        </Provider>
      );
    }

    return (
      <Provider store={store}>
        <Root>
          <Header />
          <HeaderSection />
          <Wizard wizard={datadeling} styles={styles} exports={{ dataExport }} />
          <Container>
            <InfoBox>
              <h2>Spør i Datalandsbyen dersom det er noe du lurer på.</h2>
              <a href="https://datafabrikken.norge.no/datalandsbyen" target="_blank" rel="noopener noreferrer">Spør i Datalandsbyen &gt;</a>
            </InfoBox>
          </Container> 
         <Footer />
        </Root>
      </Provider>
    );
  }
}
