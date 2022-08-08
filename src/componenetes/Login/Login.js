import tracklt from "./../../assets/img/tracklt.png";
import styled from "styled-components";
import { useState } from "react";
import React, { useContext } from "react";
import MyContext from "../../contexts/MyContext";

import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const { token, setToken } = useContext(MyContext);
  const { userImg, setUserImg } = useContext(MyContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  function login() {
    const promise = axios.post(URL, {
      email: email,
      password: senha,
    });

    promise.then((response) => {
      const { data } = response;
      console.log(data);
      setToken(data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      setUserImg(data.image);
      navigate("/hoje");
    });

    promise.catch((err) => {
      console.log(err.response);
      alert("Erro ao Fazer login");
    });
  }

  return (
    <>
      <Conteudo>
        <img src={tracklt} alt="Logo" />

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={login}>Entrar</button>

        <p onClick={() => navigate("/cadastro")}>
          Não tem uma conta? Cadastre-se!
        </p>
      </Conteudo>
    </>
  );
}
const Conteudo = styled.div`
  margin: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 303px;
    height: 45px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(213, 213, 213);
    border-radius: 5px;
    margin-bottom: 6px;
    outline: none;
    padding-left: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }
  button {
    width: 303px;
    height: 45px;
    background: rgb(82, 182, 255);
    border-radius: 4.63636px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: rgb(255, 255, 255);
  }
  p {
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: rgb(82, 182, 255);
  }
`;
