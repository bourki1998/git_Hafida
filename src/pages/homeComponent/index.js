import React from "react";
import { Button, Container, Typography, Box, Grid, Paper } from "@mui/material";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { pageStyles } from "../../common/styles/pageStyles";
import { useTranslation } from "react-multi-lang";
import classNames from "classnames";

const features = [
  {
    title: "Trouve ta correspondance",
    description:
      "Découvrez des personnes en fonction de vos intérêts et préférences.",
  },
  {
    title: "Discutez en toute sécurité",
    description:
      "Communiquez avec vos correspondances en toute sécurité et confidentialité.",
  },
  {
    title: "Rencontrez et datez",
    description: "Organisez des rendez-vous avec les personnes que vous aimez.",
  },
];

const testimonials = [
  {
    name: "khadija",
    feedback:
      "J'ai trouvé mon âme sœur grâce à cette application. Je la recommande vivement !",
  },
  {
    name: "wafae",
    feedback:
      "La meilleure application de rencontre avec d'excellentes fonctionnalités.",
  },
  { name: "Imad", feedback: "Sécurisée et facile à utiliser. Je l'adore !" },
];

const HomePage = () => {
  const t = useTranslation();
  const classes = pageStyles();

  return (
    <div className={classNames(classes.hcpBackground)}>
      <Header />
      <Container>
        <Box mt={5} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            {t("HOME.BIENVENUE")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ flexGrow: 1, textAlign: "center" }}
            gutterBottom
          >
            LoveConnect est une application de rencontre innovante qui facilite
            la recherche de votre partenaire idéal. Grâce à des fonctionnalités
            avancées, LoveConnect vous permet de découvrir des personnes en
            fonction de vos intérêts et préférences, de communiquer en toute
            sécurité et confidentialité, et d'organiser des rendez-vous avec les
            personnes que vous aimez. Conçue pour offrir une expérience
            utilisateur intuitive et sécurisée, LoveConnect vous aide à établir
            des connexions significatives et durables.
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Rejoignez-nous et trouvez votre partenaire idéal dès aujourd'hui.
          </Typography>
          <Link to="/login" className="mx-1">
            <Button
              variant="contained"
              size="large"
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
            >
              Commencez
            </Button>
          </Link>
        </Box>
        <Box mt={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Caractéristiques
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper elevation={3} style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    style={{ color: "#7d003e" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" style={{ color: "#7d003e" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Témoignages
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper elevation={3} style={{ padding: "20px" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    style={{ color: "#7d003e" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1" style={{ color: "#7d003e" }}>
                    {testimonial.feedback}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
