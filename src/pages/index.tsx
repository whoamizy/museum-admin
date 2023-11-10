import { Route, Routes } from "react-router-dom";
import { routes } from "./config";
import { AppLinks } from "shared/enums";

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) =>
        <Route
          index={path === AppLinks.LOGIN}
          key={path}
          path={path}
          element={element}
        />)
      }
    </Routes>
  )
}
