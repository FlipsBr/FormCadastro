import { Step, StepLabel, Typography, Stepper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

export default function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      aoEnviar(dadosColetados);
    }
    console.log(dadosColetados);
  });

  const formulario = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];
  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    console.log(dados);
    /* spread operator para sempre adicionar mais estados. */
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  /* aoEnviar, ValidarCPF como props?? */
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

//

/*     <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuarios />
      <DadosEntrega />*/
