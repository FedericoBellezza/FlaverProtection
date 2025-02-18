import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="contatti" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
