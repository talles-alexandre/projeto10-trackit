import tracklt from "./../../assets/img/tracklt.png";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
export default function Cadastro() {
  const navigate = useNavigate();

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  function cadastrar() {
    const promise = axios.post(URL, {
      email: email,
      name: nome,
      image: foto,
      password: senha,
    });

    promise.then((response) => {
      const { data } = response;
      console.log(data);
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err.response);
      alert("Erro ao Cadastrar");
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
        <input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <button onClick={cadastrar}>Cadastrar</button>

        <p onClick={() => navigate("/")}>já tem uma conta? Faça login!</p>
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
