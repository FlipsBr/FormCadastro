import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /* Preciso passar o contexto que vem as validações, lá do meu validacoesCadastro */
  const validacoes = useContext(validacoesCadastro);
  /* Custom Hooks. */
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="Email"
        label="email"
        required
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
      />
      <TextField
        id="senha"
        label="Senha"
        required
        name="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(ev) => {
          setSenha(ev.target.value);
        }}
        onBlur={validarCampos}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
