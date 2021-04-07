import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => {
  return (
    <Page name="home" pageContent={true}>
      {/* Top Navbar */}
      <Navbar title="Home" />
      {/* Page Content */}
      <Block strong>
        <p>API Futbol Home</p>
      </Block>
    </Page>
  );
};
