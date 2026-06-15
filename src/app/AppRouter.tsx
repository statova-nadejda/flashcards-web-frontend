import { AppLayout } from "~/components/AppLayout";
import { CardSetGroup } from "~/components/CardSetGroups/CardSetGroup";
import { CardSetInfo } from "~/components/CardSetInfo";
import { CreateUpdateCardSet } from "~/components/CreateUpdateCardSet";
import { NotFound } from "~/components/NotFound";
import { StudyCardSet } from "~/components/StudyCardSet";
import { LoginPage } from "~/pages/LoginPage";
import { MainPage } from "~/pages/MainPage";
import { RegisterPage } from "~/pages/RegisterPage";
import { StudentLibrarySets } from "~/pages/StudentLibrarySets";
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
        <Route path={routePaths.StudyCardSet} element={<StudyCardSet />} />
        <Route element={<AppLayout />}>
          <Route path={routePaths.StudentPage} element={<MainPage />} />
          <Route
            path={routePaths.StudentLibrarySets}
            element={<StudentLibrarySets />}
          />
          <Route path={routePaths.CardSetGroups} element={<CardSetGroup />} />
          <Route path={routePaths.CardSetInfo} element={<CardSetInfo />} />
          <Route
            path={routePaths.CreateUpdateCardSet}
            element={<CreateUpdateCardSet />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
