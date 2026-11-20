import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/page1', './pages/testpage1.tsx'),
    route('/page2', './pages/testpage2.tsx')
] satisfies RouteConfig;
