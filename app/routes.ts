import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layout/main/main.layout.tsx", [
    index("pages/home/home.tsx"),
    route("home", "pages/home/redirect.home.tsx"),
  ]),
] satisfies RouteConfig;
