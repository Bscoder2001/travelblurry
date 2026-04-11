import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import ModeSelect from "./pages/ModeSelect";
import Loading from "./pages/Loading";
import Travel from "./pages/Travel";
import Stay from "./pages/Stay";
import Food from "./pages/Food";
import Local from "./pages/Local";
import Plan from "./pages/Plan";
import States from "./pages/States";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mode-select" element={<ModeSelect />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/stay" element={<Stay />} />
      <Route path="/food" element={<Food />} />
      <Route path="/local" element={<Local />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/states" element={<States />} />
    </Routes>
  </BrowserRouter>
);

export default App;
