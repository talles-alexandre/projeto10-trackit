import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/habitos" element={<Habitos />} />
      <Route path="/hoje" element={<Hoje />} />
      <Route path="/historico" element={<Histotico />} />
    </Routes>
  </BrowserRouter>;
}
