import React from 'react';
import { f7ready, App, Views, View, Toolbar, Link } from 'framework7-react';
import { Device } from '@capacitor/device';
import { Storage } from '@capacitor/storage';

import routes from '../js/routes';

export default () => {
  const f7params = {
    id: 'com.apifutbol.appreact',
    theme: 'auto',
    iosTranslucentBars: true,
    iosTranslucentModals: true,
    routes,
  };

  f7ready(async () => {
    const { uuid } = await Device.getInfo();

    await Storage.set({
      key: 'uuid',
      value: uuid,
    });
  });

  return (
    <App {...f7params}>
      <Views tabs className="safe-areas" themeDark>
        {/* Bottom Toolbar */}
        <Toolbar bottom tabbar>
          <Link tabLink="#view-home" iconIos="f7:sportscourt" iconMd="f7:sportscourt" />
          <Link tabLink="#view-explore" iconIos="f7:search" iconMd="f7:search" />
          <Link tabLink="#view-live" iconIos="f7:app_badge" iconMd="f7:app_badge" />
        </Toolbar>
        {/* Views */}
        <View id="view-home" main tab tabActive url="/" />
        <View id="view-explore" main tab url="/explore/" />
        <View id="view-live" main tab url="/live/" />
      </Views>
    </App>
  );
};
