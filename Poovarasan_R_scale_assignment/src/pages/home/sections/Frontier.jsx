import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";
import HorizontalCard from "../../../components/HorizontalCard";
import { cardData } from "../../../data/cardData";

export default function Frontier() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Title variant="h3">Frontier AI Research</Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              SEAL (Safety, Evaluations, and Alignment Lab) is our <br />
              research initiative to improve model capabilities through
              <br />
              challenging private evaluations and novel research.
            </Title>
            {/* card */}
            <Container>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  overflowX: "auto",
                  p: 2,
                  "::-webkit-scrollbar": { display: "none" },
                }}
              >
                {cardData.map((data, index) => (
                  <HorizontalCard
                    key={index}
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                    titleColor={data.titleColor}
                    subtitleColor={data.subtitleColor}
                  />
                ))}
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
