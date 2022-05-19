import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard } from 'losen';
import store from './store';
import datadeling from './api/datadeling.json';
import styles from './styles';

import dataExport from './exports/data-export';
import { InfoBox } from './components/infobox';
import { Container } from './components/container';
import { Root } from './components/root';

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
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Wizard wizard={datadeling} styles={styles} exports={{ dataExport }} />
          <Container width={700}>
            <InfoBox>
              <h2>Noe du lurer på?</h2>
              <a href={'https://datalandsbyen.norge.no'} target={'_blank'} rel="noreferrer">Spør i Datalandsbyen &gt;</a>
              <a href={'https://datalandsbyen.norge.no'} target={'_blank'} rel="noreferrer">Få hjelp fra våre juridiske rådgivere</a>
            </InfoBox>
          </Container>
        </Root>
      </Provider>
    );
  }
}
