import { Box, CardMedia, Card, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";

const images = [
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&w=96&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&w=128&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&w=256&q=100",
  "https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&w=128&q=100",
];
export default function Partner() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Title
              variant="body2"
              sx={{ letterSpacing: "0.2em", fontSize: 15 }}
            >
              GENERATIVE AI PROVIDERS WE PARTNER WITH:
            </Title>
            <Container>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  overflowX: "auto",
                  p: 2,
                  "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
                }}
              >
                {images.map((image, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                      width: "200px",
                      borderRadius: "1rem",
                      border: "1px solid #ffffff26",
                      flexShrink: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Logo ${index + 1}`}
                      sx={{
                        width: "100px",
                        height: "80px",
                        objectFit: "contain",
                      }}
                    />
                  </Card>
                ))}
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
