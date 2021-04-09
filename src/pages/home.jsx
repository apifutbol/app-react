import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, Link, Block } from 'framework7-react';

export default () => {
  return (
    <Page name="home" pageContent={true}>
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavLeft>
          <Link panelOpen="left" iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" />
        </NavLeft>
        <NavTitle sliding>Home</NavTitle>
      </Navbar>
      {/* Page Content */}
      <Block strong>
        <p>API Futbol Home</p>
      </Block>
    </Page>
  );
};
