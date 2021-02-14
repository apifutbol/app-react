import React from 'react';
import { f7ready, App, View } from 'framework7-react';
import { Plugins } from '@capacitor/core';
import routes from '../js/routes';
import store from '../js/store';

const { Device } = Plugins;

export default () => {
  const f7params = {
    id: 'com.apifutbol.appreact',
    theme: 'auto',
    autoDarkTheme: true,
    iosTranslucentBars: true,
    iosTranslucentModals: true,
    routes,
    store,
  };

  f7ready(async (f7) => {
    const { uuid } = await Device.getInfo();

    f7.store.dispatch('setUuid', uuid);
  });

  return (
    <App {...f7params}>
      <View main className="safe-areas" url="/" />
    </App>
  );
};
