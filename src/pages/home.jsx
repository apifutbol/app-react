import React from 'react';
import { Page, Navbar, NavTitle, Block } from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavTitle>API Futbol</NavTitle>
    </Navbar>
    {/* Page content */}
    <Block strong>
      <p>API Futbol React App</p>
    </Block>
  </Page>
);
export default HomePage;
