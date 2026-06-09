import { AppLayout } from "~/components/AppLayout";
import { NotFound } from "~/components/NotFound";
import { LoginPage } from "~/pages/LoginPage";
import { MainPage } from "~/pages/MainPage";
import { RegisterPage } from "~/pages/RegisterPage";
import { routePaths } from "~/utils/routePaths";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.Index}
          element={<Navigate to={routePaths.Login} replace />}
        />
        <Route path={routePaths.Login} element={<LoginPage />} />
        <Route path={routePaths.Register} element={<RegisterPage />} />
        <Route element={<AppLayout />}>
          <Route path={routePaths.StudentPage} element={<MainPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
