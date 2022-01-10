import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [CPF, setCPF] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(false);
  const [erros, setErros] = useState({
    CPF: {
      /* o estado PRECISA ser inicializado. */
      valido: true,
      texto: "",
    },
  });

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        aoEnviar({ nome, sobrenome, CPF, novidades, promocoes });
      }}
    >
      {/* Começo de área de conteúdo escrito*/}
      <TextField
        id="Nome"
        value={nome} /* value é somente para consultas... */
        onChange={(ev) => {
          setNome(ev.target.value); /* é o setState quem define as variáveis */
        }}
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
        value={CPF}
        onChange={(ev) => {
          setCPF(ev.target.value); /* é o setState quem define as variáveis */
        }}
        onBlur={(ev) => {
          const ehValido = validarCPF(ev.target.value);
          setErros({ CPF: ehValido });
        }}
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
        Cadastrar
      </Button>
    </form>
  );
}
