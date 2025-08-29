import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { Minesweeper } from "./pages/minesweeper";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
        rel="stylesheet"
      ></link>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/minesweeper" element={<Minesweeper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
