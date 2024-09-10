import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import { pageStyles } from "../../common/styles/pageStyles";
import classNames from "classnames";
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    // errors.username = "L'adresse email saisie est incorrecte."
    errors.email = "Ce champs est obligatoire.";
  }
  if (!values.password) {
    // errors.password = 'Le mot de passe saisi est incorrect.'
    errors.password = "Ce champs est obligatoire.";
  }
  return errors;
};
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
    fullWidth
    variant="outlined"
    margin="normal"
  />
);

function Login(props) {
  const { handleSubmit } = props;
  const navigate = useNavigate();
  const classes = pageStyles();
  const onSubmit = (formValues) => {
    console.log("Form Values:", formValues);
    navigate("/preferences");
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Box mt={5}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Se connecter
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Field
                name="email"
                component={renderTextField}
                label="Email"
                type="text"
              />
            </div>
            <div>
              <Field
                name="password"
                component={renderTextField}
                label="Mot de passe"
                type="password"
              />
            </div>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#cc99a2",
                  "&:hover": {
                    backgroundColor: "#cc99a2",
                  },
                  "&:active": {
                    backgroundColor: "#cc99a2",
                  },
                  "&:focus": {
                    backgroundColor: "#cc99a2",
                  },
                }}
                fullWidth
              >
                Se connecter
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default reduxForm({
  form: "Login",
  validate,
})(Login);
