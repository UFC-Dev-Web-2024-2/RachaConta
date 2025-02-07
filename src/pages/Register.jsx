import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import Header from '../components/Header/Header';

const Register = () => {
    return (
      <>
        <Header pageTitle={"Bem-vindo ao RachaConta"} isRegister/>
        <AuthForm
          title="Cadastro"
          fields={[
            { label: "Digite seu nome", type: "text", title: "Nome" },
            { label: "Digite seu email", type: "text", title: "Email" },
            { label: "Digite sua senha", type: "password", title: "Senha" },
            { label: "Confirme sua senha", type: "password", title: "Confirmar Senha" },
          ]}
          buttonText="Cadastrar"
          linkHref="/"
        />
      </>
    );
};

export default Register;