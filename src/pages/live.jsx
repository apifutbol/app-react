import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => {
  return (
    <Page name="live" pageContent={true}>
      {/* Top Navbar */}
      <Navbar title="Live" />
      {/* Page Content */}
      <Block strong>
        <p>API Futbol Live</p>
      </Block>
    </Page>
  );
};
