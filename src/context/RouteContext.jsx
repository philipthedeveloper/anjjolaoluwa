import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
import { useLocation } from "react-router-dom";

const RouterContext = createContext(null);

const RouterContextProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <RouterContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouterContext = () => {
  return useContext(RouterContext);
};

export default RouterContextProvider;
