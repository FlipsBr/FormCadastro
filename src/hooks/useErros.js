import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(ev) {
    const { name, value } = ev.target;
    /* Destructuring usando o nome do campo e o ev.target.value */
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      } else return true;
    }
  }

  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes)
    estadoInicial[campo] = { valido: true, texto: "" };

  return estadoInicial;
}

export default useErros;

/*  Também é possível iniciar o estado do set Erros com:
{
    senha: {
      valido: true,
      texto: "",
    },
    CPF: {

      valido: true,
      texto: "",
    },
    nome: {
      valido: true,
      texto: "",
    },
}   

*/
