import HomePage from '../pages/home.jsx';
import LivePage from '../pages/live.jsx';
import ExplorePage from '../pages/explore.jsx';
import PanelPreferences from '../pages/panel-preferences.jsx';

const routes = [
  {
    path: '/',
    component: HomePage,
    tabs: [
      {
        path: '/',
        id: 'live',
        component: LivePage,
      },
      {
        path: '/explore/',
        id: 'explore',
        component: ExplorePage,
      },
    ],
  },
  {
    path: '/panel-preferences/',
    component: PanelPreferences,
  },
];

export default routes;
