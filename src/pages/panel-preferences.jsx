import React, { useRef } from 'react';
import { f7, Navbar, Page, List, ListItem } from 'framework7-react';

export default () => {
  const preferences = useRef(null);

  const setThemeMode = () => {
    preferences.current = f7.form.convertToData('#preferences');
    f7.$('html')
      .removeClass('theme-dark theme-light')
      .addClass(`theme-${preferences.current.theme}`);
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
      </List>
    </Page>
  );
};
