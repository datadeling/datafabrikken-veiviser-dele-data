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

  showIntro() {
    this.setState({ intro: true });
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.intro) {
      return (
        <Provider store={store}>
          <Root>
            <StyleProvider styles={styles}>
              <Intro close={this.closeIntro} />
            </StyleProvider>
          </Root>
        </Provider>
      );
    }

    return (
      <Provider store={store}>
        <Root>
          <Wizard wizard={datadeling} styles={styles} exports={{ dataExport }} />
          <Container>
            <InfoBox>
              <h2>Spør i Datalandsbyen dersom det er noe du lurer på.</h2>
              <a href={'https://datalandsbyen.norge.no'} target={'_blank'} rel="noreferrer">Spør i Datalandsbyen &gt;</a>
            </InfoBox>
          </Container>
        </Root>
      </Provider>
    );
  }
}
