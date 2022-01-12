import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
export default function DadosEntrega(aoEnviar) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(ev) => {
          setCep(ev.target.value);
        }}
      />
      <TextField
        id="Endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(ev) => {
          setEndereco(ev.target.value);
        }}
      />
      <TextField
        id="Numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={numero}
        onChange={(ev) => {
          setNumero(ev.target.value);
        }}
      />
      <TextField
        id="Estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(ev) => {
          setEstado(ev.target.value);
        }}
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(ev) => {
          setCidade(ev.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar
      </Button>
    </form>
  );
}
