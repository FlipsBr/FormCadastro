import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

export default function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [CPF, setCPF] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(false);

  /* Custom Hook usando Context */
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, CPF, novidades, promocoes });
        }
      }}
    >
      {/* Começo de área de conteúdo escrito*/}
      <TextField
        id="Nome"
        name="nome"
        value={nome} /* value é somente para consultas... */
        onChange={(ev) => {
          setNome(ev.target.value); /* é o setState quem define as variáveis */
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="Sobrenome"
        label="Sobrenome"
        value={sobrenome} /* value é somente para consultas... */
        onChange={(ev) => {
          setSobrenome(
            ev.target.value
          ); /* é o setState quem define as variáveis */
        }}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="CPF"
        label="CPF"
        name="CPF"
        value={CPF}
        onChange={(ev) => {
          setCPF(ev.target.value); /* é o setState quem define as variáveis */
        }}
        onBlur={validarCampos}
        error={!erros.CPF.valido}
        helperText={erros.CPF.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      {/* Fim de área de conteúdo escrito*/}

      <FormControlLabel /* FormControlLabel serve literalmente só para colocar uma label em um objeto mais abstrato como um switch. */
        label="Promoções"
        control={
          <Switch
            name="Promoções"
            checked={promocoes}
            onChange={(ev) => {
              setPromocoes(ev.target.checked);
            }}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            checked={novidades}
            onChange={(ev) => {
              setNovidades(ev.target.checked);
            }}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}
