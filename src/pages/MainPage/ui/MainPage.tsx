import { Navigate } from "react-router-dom";
import { getUserAuthData } from "../../../entities/User/model/selector/getUserAuthData/getUserAuthData";
import { routePath } from "../../../shared/config/routeConfig/routeConfig";
import { useAppSelector } from "../../../shared/lib/hooks/hooks";

const MainPage = () => {
  const authData = useAppSelector(getUserAuthData)

  if(!authData) {
    return <Navigate to={routePath.auth} />;
  }

  return <div>MainPage</div>;
};

export default MainPage;
