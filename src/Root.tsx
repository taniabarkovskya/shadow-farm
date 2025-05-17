import { StrictMode } from "react";
import { App } from "./App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog/Catalog.jsx";
import { Contacts } from "./pages/Contacts/Contacts.jsx";
import { Cart } from "./pages/Cart";

export const Root = () => {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </StrictMode>
  );
};
