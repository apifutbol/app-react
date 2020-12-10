import React from 'react';
import { Page, Navbar, NavTitle, NavRight, Toolbar, Link, Tabs, Tab } from 'framework7-react';

export default () => {
  return (
    <Page name="home" pageContent={false}>
      {/* Top Navbar */}
      <Navbar>
        <NavTitle>API Futbol</NavTitle>
        <NavRight>
          <Link panelOpen="right" iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" />
        </NavRight>
      </Navbar>
      {/* Bottom Toolbar */}
      <Toolbar bottom tabbar>
        <Link
          tabLink
          href="/"
          routeTabId="live"
          iconIos="f7:sportscourt"
          iconMd="f7:sportscourt"
          tabLinkActive
        />
        <Link
          tabLink
          href="/explore/"
          routeTabId="explore"
          iconIos="f7:search"
          iconMd="f7:search"
        />
      </Toolbar>
      {/* Routable Tabs */}
      <Tabs routable swipeable>
        <Tab id="live" tabActive />
        <Tab id="explore" />
      </Tabs>
    </Page>
  );
};