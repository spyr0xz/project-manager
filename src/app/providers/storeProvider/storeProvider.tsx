import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./config/store";

interface StoreProviderProps {
  children?: ReactNode;
}



const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
