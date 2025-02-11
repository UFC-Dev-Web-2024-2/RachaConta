import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import Header from '../components/HeaderLogout/HeaderLogout';

const Login = () => {
    return (
      <>
        <Header pageTitle={"Bem-vindo ao RachaConta"} centered />
        <AuthForm
          title="Login"
          isLogin={true}
          fields={[
            { label: "Digite seu email ou usuário", type: "text", title: "Email ou usuário" },
            { label: "Digite sua senha", type: "password", title: "Senha" },
          ]}
          buttonText="Entrar"
          linkText="Não tem uma conta?"
          linkHref="/register"
        />
      </>
    );
};

export default Login;