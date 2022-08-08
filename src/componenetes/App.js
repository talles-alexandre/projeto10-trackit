import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Histotico from "./Historico/Historico";
import MyContext from "../contexts/MyContext";
export default function App() {
  const [token, setToken] = useState("");
  const [userImg, setUserImg] = useState("");
  const [habitos, setHabitos] = useState([]);
  const [habhoje, setHabHoje] = useState(null);

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          token,
          setToken,
          userImg,
          setUserImg,
          habitos,
          setHabitos,
          habhoje,
          setHabHoje,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Histotico />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
