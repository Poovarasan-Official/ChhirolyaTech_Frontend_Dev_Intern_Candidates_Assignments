import {
  Box,
  Chip,
  CardMedia,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";

export default function CaseStudies() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 12 }}>
            <Chip
              label="LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL"
              sx={{
                backgroundColor: "#131313",
                color: "#d1aad7",
                letterSpacing: "0.2em",
                p: 1,
                mb: 3,
              }}
            />
            <Title variant="h3">Case Studies & Resources</Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              We ve worked with the worlds leading AI teams for years, <br />
              and delivered more high-quality data than anybody else.
            </Title>
            <Container maxWidth="lg" sx={{ py: 2 }}>
              <Grid container spacing={1}>
                {/* First Card */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      backgroundColor: "inherit",
                    }}
                  >
                    {/* Card Content (Top) */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                        color: "#fff",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fea72175be9045956afa8692257ad907c.png&w=768&q=75"
                        alt="Card Image 1"
                        sx={{
                          objectFit: "contain",
                          borderRadius: 3,
                        }}
                      />
                      <Title
                        variant="body2"
                        sx={{ color: "#d1aad7", fontSize: 15, mt: 2 }}
                      >
                        Partner
                      </Title>
                      <Title variant="subtitle1">
                        OpenAI Names Scale as Preferred
                        <br /> Fine-Tuning Partner
                      </Title>
                    </CardContent>

                    {/* Card Image*/}
                  </Card>
                </Grid>
                {/* ===============Second Card ============= */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      backgroundColor: "inherit",
                    }}
                  >
                    {/* Card Content (Top) */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                        color: "#fff",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fea72175be9045956afa8692257ad907c.png&w=768&q=75"
                        alt="Card Image 1"
                        sx={{
                          objectFit: "contain",
                          borderRadius: 3,
                        }}
                      />
                      <Title
                        variant="body2"
                        sx={{ color: "#d1aad7", fontSize: 15, mt: 2 }}
                      >
                        Partner
                      </Title>
                      <Title variant="subtitle1">
                        Anthropic Partners with Scale to Bring <br />
                        Generative AI to Enterprises
                      </Title>
                    </CardContent>

                    {/* Card Image*/}
                  </Card>
                </Grid>
                {/* ===============Third Card ============= */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      backgroundColor: "inherit",
                    }}
                  >
                    {/* Card Content (Top) */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                        color: "#fff",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fea72175be9045956afa8692257ad907c.png&w=768&q=75"
                        alt="Card Image 1"
                        sx={{
                          objectFit: "contain",
                          borderRadius: 3,
                        }}
                      />
                      <Title
                        variant="body2"
                        sx={{ color: "#d1aad7", fontSize: 15, mt: 2 }}
                      >
                        Partner
                      </Title>
                      <Title variant="subtitle1">
                        Meta and Scale Partner to Drive <br />
                        Enterprise Adoption of Llama
                      </Title>
                    </CardContent>

                    {/* Card Image*/}
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
