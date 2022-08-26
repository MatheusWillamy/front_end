import React, {useState, useEffect} from "react";
import Person_list from "./componentes/person_list";
import "./App.css"

import Axios from "axios"

export default function App () {
  const [listPessoas, setListPessoas] = useState()
  const[values, setValues] = useState();
  

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:5000/registro",{
      name: values.name,
      rg: values.rg,
      cpf: values.cpf,
      data_nasc: values.data_nasc,
      data_admi: values.data_admi,
      funcao: values.funcao
    }).then((response) => {
      console.log(response)
    });
    console.log("dados enviados")
    window.location.reload(false)
  }
  useEffect(() => {
    Axios.get("http://localhost:5000/getPessoas").then((response) => {
      setListPessoas(response.data);
      console.log(listPessoas)
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Teste Pratico</h1>
        <div className="titulo">
          <div className="nome">
            <h>Nome</h>
          </div>
          <div className="adimissao">

            <h>Data de Admissão</h>
          </div>
        </div>
        <Person_list Props={listPessoas} />
    
        
      </div>
      <div className="container_input">
        <h1>Inserir Dados</h1>
        <input type="text" name="name" placeholder="Nome" className="register_input" onChange={handleChangeValues}></input>
        <input type="text" name="rg" placeholder="RG" className="register_input" onChange={handleChangeValues}></input>
        <input type="text" name="cpf" placeholder="CPF" className="register_input" onChange={handleChangeValues}></input>
        <h8>Data de nascimento</h8>
        <input type="date" name="data_nasc" placeholder="Data de nascimento" className="register_input" onChange={handleChangeValues}></input>
        <h8>Data de admissão</h8>
        <input type="date" name="data_admi" placeholder="Data de Admissão" className="register_input" onChange={handleChangeValues}></input>
        <input type="text" name="funcao" placeholder="Função" className="register_input" onChange={handleChangeValues}></input>
        <button className="button_cadastrar" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </>

  )
};