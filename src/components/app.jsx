import React from 'react';
import { App, Panel, View } from 'framework7-react';
import routes from '../js/routes';

export default () => {
  const theme = 'auto';

  return (
    <App
      id="com.apifutbol.appreact"
      theme={theme}
      autoDarkTheme={true}
      iosTranslucentBars={false}
      iosTranslucentModals={false}
      routes={routes}
    >
      <Panel right reveal resizable>
        <View url="/panel-preferences/" />
      </Panel>
      <View main className="safe-areas" url="/" />
    </App>
  );
};
