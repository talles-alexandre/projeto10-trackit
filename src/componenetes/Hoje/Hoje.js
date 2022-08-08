import axios from "axios";
import Topo from "../Topo";
import React, { useContext } from "react";
import MyContext from "../../contexts/MyContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function Hoje() {
  const navigate = useNavigate();

  const { token } = useContext(MyContext);
  const { habhoje, setHabHoje } = useContext(MyContext);

  const dia = dayjs().locale("pt-br").format("dddd,DD/MM");

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(URL, config);

    promise.then((response) => {
      const { data } = response;
      console.log(data);
      console.log(habhoje);

      setHabHoje(data);
    });

    promise.catch((err) => {
      console.log(err.response);
      navigate("/");
    });
  }, []);

  if (habhoje === null) {
    return (
      <>
        <h1>Carregando</h1>
      </>
    );
  }

  function addHabito() {
    const URL1 =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.post(
      URL1,
      { name: "Hábito1", days: [1, 3, 5] },
      config
    );

    promise.then((response) => {
      const { data } = response;
      console.log(data);
    });

    promise.catch((err) => {
      console.log(err.response);
      alert("Erro ao add habito");
    });
  }

  return (
    <>
      <Topo></Topo>
      <h1>{dia}</h1>
    </>
  );
}
