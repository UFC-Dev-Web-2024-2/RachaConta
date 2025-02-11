import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ title, fields, buttonText, linkText, linkHref, isLogin }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/friends")
  }
  return (
    <Box
      sx={{
        p: 4,
        mt: 10,
        maxWidth: 800,
        mx: "auto",
        bgcolor: "background",
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        {title}
      </Typography>

      {isLogin && (
        <Typography sx={{ fontSize: "1rem", color: "black", mb: 6, mt: 4 }}>
          Digite os seus dados de acesso nos campos abaixo.
        </Typography>
      )}

      {fields.map((field, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "black",
              mb: 0.5,
            }}
          >
            {field.title}
          </Typography>
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              bgcolor: "white",
              boxShadow: 2,
              borderRadius: 1,
            }}
            slotProps={{
              inputLabel: { sx: { color: "gray" } },
            }}
          />
        </Box>
      ))}

      {isLogin && (
        <Typography
          sx={{
            mb: 3,
            mt: -3,
          }}
        >
          <Link
            href={linkHref}
            color="textPrimary"
            sx={{ textDecoration: "none" }}
          >
            Esqueci minha senha
          </Link>
        </Typography>
      )}
      <Typography align="center">
        <Button
          variant="contained"
          sx={{
            py: 1.5,
            width: "40%",
            bgcolor: "black",
            color: "white",
            "&:hover": { bgcolor: "gray" },
            mb: 2,
          }}
          onClick={handleRedirect}
        >
          {buttonText}
        </Button>
      </Typography>

      {linkText && linkHref && (
        <Typography align="center" sx={{ mt: 2 }}>
          {linkText}{" "}
          <Link fontWeight="bold" color="textPrimary" href={linkHref}>
            Cadastre-se
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default AuthForm;