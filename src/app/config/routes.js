import { Home, NotFound, Repository } from "pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/:username",
    exact: true,
    component: Home
  },
  {
    path: "/:username/:repository",
    exact: true,
    component: Repository
  },
  {
    path: "/404",
    component: NotFound
  }
];

export default routes;
