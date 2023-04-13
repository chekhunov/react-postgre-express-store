import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import {
  LOGIN_ROUTE,
  ALL_ROUTE,
  ERROR_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
  ADMIN_ROUTE,
} from "../utils/const";
import NotFound from "../pages/notFound";
import Shop from "../pages/Shop";
import { Context } from "../index";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import Admin from "../pages/Admin";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user?.isAuth && <Route path={ADMIN_ROUTE} element={<Admin />} />}
      {publicRoutes?.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={SHOP_ROUTE} element={<Shop />} />
      <Route path={DEVICE_ROUTE + "/:id"} element={<DevicePage />} />
      <Route
        path={ALL_ROUTE}
        element={<NotFound to={ERROR_ROUTE} replace="true" />}
      />
    </Routes>
  );
};

export default AppRouter;
