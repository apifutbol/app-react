import React from 'react';
import { Page, Navbar, NavTitle, Toolbar, Link, Tabs, Tab } from 'framework7-react';

export default () => {
  return (
    <Page name="home" pageContent={false}>
      {/* Top Navbar */}
      <Navbar>
        <NavTitle>API Futbol</NavTitle>
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
