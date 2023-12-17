import _ from "lodash";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#388e3c",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    secondary: {
      light: "#757575",
      main: "#616161",
      dark: "#424242",
      contrastText: "#000",
    },
  },
});

export default function Quiz({
  goBackHandler,
  goForwardHandler,
  question,
  handleOptionChange,
}) {
  const StyledContainer = styled(Container)({
    backgroundColor: "#eaeaea8f",
    maxWidth: "none !important",
    margin: 0,
  });

  const StyledTypography = styled(Typography)({
    fontSize: "1.2rem",
  });

  const StyledCardActions = styled(CardActions)({
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 16px 16px 0px",
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledContainer>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={8} md={6}>
            {!_.isEmpty(question) ? (
              <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="180"
                  image={question.url}
                />
                <CardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    {`Вопрос ${question.id}: ${question.question}`}
                  </StyledTypography>
                  <RadioGroup
                    value={question.selectedOption}
                    onChange={handleOptionChange}
                  >
                    {_.reduce(
                      question.answers,
                      (res, v, k) => {
                        return [
                          ...res,
                          <FormControlLabel
                            key={k}
                            value={v}
                            control={<Radio />}
                            label={k}
                          />,
                        ];
                      },
                      []
                    )}
                  </RadioGroup>
                </CardContent>
                <StyledCardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={goBackHandler}
                  >
                    Назад
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!question.selectedOption}
                    onClick={goForwardHandler}
                  >
                    {`${question.id === 7 ? "Завершить" : "Следующий вопрос"}`}
                  </Button>
                </StyledCardActions>
              </Card>
            ) : (
              <div>Loading</div>
            )}
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}
