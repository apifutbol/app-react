import React, { useState } from 'react';
import {
  f7ready,
  App,
  Views,
  View,
  Page,
  Navbar,
  Toolbar,
  Link,
  Panel,
  BlockTitle,
  List,
  ListItem,
} from 'framework7-react';
import { Storage } from '@capacitor/storage';
import { getThemeMode, getColorMode } from '../utils/theme';

import routes from '../js/routes';

export default () => {
  const [themeMode, setThemeMode] = useState(true);
  const [colorMode, setColorMode] = useState('green');

  const params = {
    id: 'com.apifutbol.appreact',
    theme: 'auto',
    iosTranslucentBars: true,
    iosTranslucentModals: true,
    routes,
  };

  const setMode = async (e) => {
    const checked = e.target.checked;

    await Storage.set({
      key: 'themeMode',
      value: checked,
    });

    setThemeMode(getThemeMode(checked));
    setColorMode(getColorMode(checked));
  };

  f7ready(async () => {
    const { value: mode } = await Storage.get({ key: 'themeMode' });

    if (mode) {
      setThemeMode(getThemeMode(mode));
      setColorMode(getColorMode(mode));
    }
  });

  return (
    <App {...params}>
      <Views tabs className="safe-areas" colorTheme={colorMode} themeDark={themeMode}>
        {/* Bottom Toolbar */}
        <Toolbar bottom tabbar>
          <Link
            tabLink="#view-home"
            iconIos="f7:sportscourt"
            iconAurora="f7:sportscourt"
            iconMd="f7:sportscourt"
          />
          <Link
            tabLink="#view-explore"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="f7:search"
          />
          <Link
            tabLink="#view-live"
            iconIos="f7:app_badge"
            iconAurora="f7:app_badge"
            iconMd="f7:app_badge"
          />
        </Toolbar>
        {/* Views */}
        <View id="view-home" main name="Home" tab tabActive url="/" />
        <View id="view-explore" name="Explore" tab url="/explore/" />
        <View id="view-live" name="Live" tab url="/live/" />
      </Views>

      {/* Preferences Panel */}
      <Panel left cover resizable colorTheme={colorMode} themeDark={themeMode}>
        <View>
          <Page>
            <Navbar title="Preferences" />
            <BlockTitle>Theme</BlockTitle>
            <List>
              <ListItem
                checkbox
                title="Theme Mode"
                name="theme-mode-checkbox"
                checked={themeMode === true}
                onChange={(e) => setMode(e)}
              />
            </List>
          </Page>
        </View>
      </Panel>
    </App>
  );
};
