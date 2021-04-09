import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, Link, Block } from 'framework7-react';

export default () => {
  return (
    <Page name="live" pageContent={true}>
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link panelOpen="left" iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" />
        </NavLeft>
        <NavTitle sliding>Live</NavTitle>
      </Navbar>
      {/* Page Content */}
      <Block strong>
        <p>API Futbol Live</p>
      </Block>
    </Page>
  );
};
