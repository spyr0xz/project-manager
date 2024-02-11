import { Navigate, RouteProps } from "react-router-dom";
import { LoginPage } from "../../../pages/LoginPage";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";

export type AppRouteProps = RouteProps & {
  isAuthOnly?: boolean;
}

export enum AppRoutes  {
  LOGIN = 'login',
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.LOGIN]: {
    path: routePath.login,
    element: <LoginPage />,
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