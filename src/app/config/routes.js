import { Home, NotFound } from "pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/404",
    component: NotFound
  }
];

export default routes;
