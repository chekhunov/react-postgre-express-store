import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  LOGIN_ROUTE,
  ALL_ROUTE,
  ERROR_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/const";
import NotFound from "../pages/notFound";
import Shop from "../pages/Shop";
import { Context } from "../index";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user.isAuth);
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ADMIN_ROUTE} element={<Admin />} />
      {user?.isAuth && <Route path={BASKET_ROUTE} element={<Basket />} />}
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
