import {
  Box,
  Chip,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";

export default function Applications() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 12 }}>
            <Chip
              label="APPLY AI"
              sx={{
                backgroundColor: "#131313",
                color: "#d1aad7",
                letterSpacing: "0.2em",
                p: 1,
                mb: 3,
              }}
            />
            <Title variant="h3">Generative AI Applications</Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              Easily Apply AI to your most challenging use cases with pre‑built
              <br />
              applications that harness the power of customized LLMs.
            </Title>

            <Container maxWidth="lg" sx={{ py: 2 }}>
              <Grid container spacing={3}>
                {/* First Card */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderRadius: "16px",
                      border: "1px solid #ffffff26",
                      backgroundColor: "#15171d",
                    }}
                  >
                    {/* Card Content (Top) */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 3,
                        textAlign: "start",
                        color: "#fff",
                      }}
                    >
                      <Title
                        variant="body2"
                        sx={{ letterSpacing: "0.2em", fontSize: 15 }}
                      >
                        SCALE DONOVAN
                      </Title>
                      <Title variant="subtitle1">
                        AI-Powered Decision-Making for Defense
                      </Title>
                      <Title
                        variant="body2"
                        sx={{ color: "grey", fontSize: "16px" }}
                      >
                        AI-powered decision-making support: plan, analyze, and
                        act in minutes.
                      </Title>
                    </CardContent>

                    {/* Card Image (Bottom) */}
                    <CardMedia
                      component="img"
                      image="https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonovan.87a3b566.png&w=768&q=100"
                      alt="Card Image 1"
                      sx={{
                        width: "100%",
                        height: 400,
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                    />
                  </Card>
                </Grid>

                {/* Second Card */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderRadius: "16px",
                      border: "1px solid #ffffff26",
                      backgroundColor: "#15171d",
                    }}
                  >
                    {/* Card Content (Top) */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 3,
                        textAlign: "start",
                        color: "#fff",
                      }}
                    >
                      <Title
                        variant="body2"
                        sx={{ letterSpacing: "0.2em", fontSize: 15 }}
                      >
                        SCALE GENAI PLATFORM
                      </Title>
                      <Title variant="subtitle1">AI for the Enterprise</Title>
                      <Title
                        variant="body2"
                        sx={{ color: "grey", fontSize: "16px" }}
                      >
                        Transform your data into customized enterprise-ready
                        Generative AI applications.
                      </Title>
                    </CardContent>

                    {/* Card Image (Bottom) */}
                    <CardMedia
                      component="img"
                      image="https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgen-ai.dd6b8c76.png&w=768&q=100"
                      alt="Card Image 2"
                      sx={{
                        width: "100%",
                        height: 400,
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                    />
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
