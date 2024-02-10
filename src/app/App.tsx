import { useEffect } from "react";
import AppRouter from "./providers/router/AppRouter";
import { useAppDispatch } from "../shared/lib/hooks/hooks";
import { userActions } from "../entities/User";
import { LOCAL_STORAGE_USER_KEY } from "../shared/constants/localStorage";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
    console.log(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
  }, [dispatch]);

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
