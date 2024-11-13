import {
  Box,
  Chip,
  Container,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";

const images = [
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Ff4166c8b2af53280fc7a060d5a4737e1.svg&w=256&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Ffb230216f6a33fb1909925dbad90afff.svg&w=256&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F8ddad2eb00beba00251daa10a459f71d.png&w=256&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fd8537d3ce6a525b27e9097dc0cd185bd.svg&w=256&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fbb9464c7b58c6c8c317c11a38b8f97c3.svg&w=128&q=75",
];
const brand = [
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F5767f25d52d9dea9d9a3f115fd792f19.svg&w=64&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F9a15ab17b22169f74f479db057bb3608.svg&w=96&q=75",
  "https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Ffe4e16089ff5ba8f5fd81f4ecb83fee4.svg&w=64&q=75",
];

export default function Customers() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Chip
              label="CUSTOMERS"
              sx={{
                backgroundColor: "#131313",
                color: "#d1aad7",
                letterSpacing: "0.2em",
                p: 1,
                mb: 3,
              }}
            />
            <Title variant="h3">
              We have changed the game <br />
              of AI Evaluations - hear <br /> it from Industry Leaders.
            </Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              Scale’s SEAL Leaderboards are bringing trust to AI; learn from{" "}
              <br />
              experts why expert-driven private evaluations are so important.
            </Title>
            <Container maxWidth="lg" sx={{ py: 2 }}>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: 600,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#111012",
                      borderRadius: 4,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      <Title variant="subtitle1">
                        We partnered with Scale AI to work with Enterprises to
                        adopt Llama <br /> and train custom models with their
                        own data. We are excited to <br /> collectively make
                        Llama the industry standard and bring the benefits of AI
                        <br />
                        to everyone.
                      </Title>
                      <Title variant="h6">Mark Zuckerberg</Title>
                      <Title
                        variant="body1"
                        sx={{ fontSize: "18", color: "grey" }}
                      >
                        Founder and CEO Meta
                      </Title>
                    </CardContent>

                    {/* Card Image*/}
                  </Card>
                </Grid>
              </Grid>
            </Container>

            <Container>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContainer: "center",
                  gap: 1,
                  p: 2,
                }}
              >
                {images.map((image, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "inherit",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                      width: "180px",
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
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </Card>
                ))}
              </Box>
            </Container>
            {/* section 2 */}
            <Container sx={{ mt: 8 }}>
              <Title varient="h6" sx={{ color: "grey", fontSize: "18" }}>
                Scale is certified compliant with the following
                <br />
                industry best practice standards and frameworks
              </Title>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  p: 2,
                }}
              >
                {brand.map((image, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "inherit",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                      width: "180px",
                      flexShrink: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Logo ${index + 1}`}
                      sx={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </Card>
                ))}
              </Box>
              <Divider color="#181818" sx={{ mb: 3 }} />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
