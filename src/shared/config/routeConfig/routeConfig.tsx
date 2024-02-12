import { RouteProps } from "react-router-dom";

import MainPage from "../../../pages/MainPage/ui/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { AuthPage } from "../../../pages/AuthPage";

export type AppRouteProps = RouteProps & {
  isAuthOnly?: boolean;
}

export enum AppRoutes  {
  AUTH = 'auth',
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.AUTH]: {
    path: routePath.auth,
    element: <AuthPage />,
  },
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
    isAuthOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />
  }
}