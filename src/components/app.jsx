import React from 'react';

import { App, View } from 'framework7-react';

import routes from '../js/routes';

const ApiFutbol = () => {
  const f7params = {
    name: 'API Futbol React App',
    theme: 'auto',
    routes,
  };

  return (
    <App {...f7params}>
      <View main className="safe-areas" url="/" />
    </App>
  );
};
export default ApiFutbol;
