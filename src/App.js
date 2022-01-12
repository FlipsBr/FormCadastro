import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro";
import ValidacoesCadastro from "./context/validacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ CPF: validarCPF, senha: validarSenha, nome: validarNome }}
      >
        {/* o contextProvider serve para você passar funções de validação para um componente sem que todos os filhos do componente saibam da existência dele. */}
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
