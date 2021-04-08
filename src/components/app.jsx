import React, { useState } from 'react';
import {
  f7ready,
  App,
  Views,
  View,
  Page,
  Navbar,
  NavRight,
  Toolbar,
  Link,
  Popup,
  BlockTitle,
  List,
  ListItem,
} from 'framework7-react';
import { Storage } from '@capacitor/storage';

import routes from '../js/routes';

export default () => {
  const [darkMode, setDarkMode] = useState(true);

  const f7params = {
    id: 'com.apifutbol.appreact',
    theme: 'auto',
    iosTranslucentBars: true,
    iosTranslucentModals: true,
    routes,
  };

  const setTheme = async (e) => {
    const checked = e.target.checked;

    await Storage.set({
      key: 'dark',
      value: checked,
    });

    setDarkMode(checked);
  };

  f7ready(async () => {
    const { value } = await Storage.get({ key: 'dark' });

    setDarkMode(JSON.parse(value));
  });

  return (
    <App {...f7params}>
      <Views tabs className="safe-areas" themeDark={darkMode}>
        {/* Bottom Toolbar */}
        <Toolbar bottom tabbar>
          <Link tabLink="#view-home" iconIos="f7:sportscourt" iconMd="f7:sportscourt" />
          <Link tabLink="#view-explore" iconIos="f7:search" iconMd="f7:search" />
          <Link tabLink="#view-live" iconIos="f7:app_badge" iconMd="f7:app_badge" />
          <Link
            popupOpen="#preferences"
            iconIos="f7:square_line_vertical_square"
            iconMd="f7:square_line_vertical_square"
          />
        </Toolbar>
        {/* Views */}
        <View id="view-home" main name={darkMode} tab tabActive url="/" />
        <View id="view-explore" tab url="/explore/" />
        <View id="view-live" tab url="/live/" />
      </Views>

      {/* Preferences Popup */}
      <Popup push id="preferences" themeDark={darkMode}>
        <View>
          <Page>
            <Navbar title="Preferences">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <BlockTitle>Theme</BlockTitle>
            <List>
              <ListItem
                checkbox
                title="Dark Mode"
                name="darkmode-checkbox"
                checked={darkMode === true}
                onChange={(e) => setTheme(e)}
              />
            </List>
          </Page>
        </View>
      </Popup>
    </App>
  );
};
