import { RouteProps } from "react-router-dom";
import { LoginPage } from "../../../pages/LoginPage";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";

export enum AppRoutes  {
  LOGIN = 'login',
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: routePath.login,
    element: <LoginPage />
  },
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />
  }
}