import React, { useContext, useState } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import Header from '../components/HeaderLogout/HeaderLogout';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (credentials) => {
    const success = await login(credentials.username, credentials.password);
    if (success) {
      navigate('/friends');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <>
      <Header pageTitle="Bem-vindo ao RachaConta" centered />
      <AuthForm
        title="Login"
        isLogin={true}
        fields={[
          { label: "Digite seu email ou usuário", type: "text", title: "Email ou usuário" },
          { label: "Digite sua senha", type: "password", title: "Senha" },
        ]}
        submit={handleSubmit}
        error={error}
        buttonText="Entrar"
        linkText="Não tem uma conta?"
        linkHref="/register"
      />
    </>
  );
};

export default Login;