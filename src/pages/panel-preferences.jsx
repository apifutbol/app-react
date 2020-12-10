import React from 'react';
import { f7, Navbar, Page, List, ListItem } from 'framework7-react';

export default () => {
  const setThemeMode = () => {
    const $html = f7.$('html');
    const preferences = f7.form.convertToData('#preferences');

    $html.removeClass('theme-dark theme-light').addClass(`theme-${preferences.theme}`);
  };

  const setThemeColor = () => {
    const $html = f7.$('html');
    const preferences = f7.form.convertToData('#preferences');

    const currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
    if (currentColorClass) $html.removeClass(currentColorClass[0]);

    $html.addClass(`color-theme-${preferences.color}`);
  };

  return (
    <Page pageContent={true}>
      {/* Top Navbar */}
      <Navbar title="Preferences"></Navbar>
      {/* Preference List */}
      <List form formStoreData id="preferences">
        {/* Switch Theme Mode */}
        <ListItem title="Theme" smartSelect smartSelectInit>
          <select name="theme" onChange={setThemeMode}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </ListItem>
        {/* Switch Theme Color */}
        <ListItem title="Color" smartSelect smartSelectInit>
          <select name="color" onChange={setThemeColor}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </ListItem>
      </List>
    </Page>
  );
};
