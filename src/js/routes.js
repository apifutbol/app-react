import HomePage from '../pages/home.jsx';
import LivePage from '../pages/live.jsx';
import ExplorePage from '../pages/explore.jsx';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/live/',
    component: LivePage,
  },
  {
    path: '/explore/',
    component: ExplorePage,
  },
];

export default routes;
