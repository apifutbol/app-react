const getThemeMode = (mode) => {
  return JSON.parse(mode);
};

const getColorMode = (mode) => {
  return JSON.parse(mode) ? 'green' : 'blue';
};

export { getThemeMode, getColorMode };
