import {
  Box,
  Chip,
  CardMedia,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";
import MuiButton from "../../../components/MuiButton";

export default function Generative() {
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Chip
              label="AI FOR THE ENTERPRISE"
              sx={{
                backgroundColor: "#131313",
                color: "#d1aad7",
                letterSpacing: "0.2em",
                p: 1,
                mb: 3,
              }}
            />
            <Title variant="h3">Generative AI Architecture</Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              Whether you’re building your own models or applying foundation{" "}
              <br />
              models to your business, data remains the biggest bottleneck to
              AI.
            </Title>
            <MuiButton />
          </Grid>
        </Grid>
      </Box>
      {/* Section 2 */}
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center", mt: 15 }}>
          {/* Left Side Text - Column Direction */}
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box>
              <Typography variant="h5">Fine-Tuning and RLHF</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#ffffffb3", mt: 2, mb: 3 }}
              >
                Adapt best-in-class foundation models to your business and your
                specific data to build sustainable, successful AI programs and
                data from your enterprise.
              </Typography>
              <Divider color="#181818" sx={{ mb: 3 }} />
            </Box>
            <Box>
              <Typography variant="h5">Foundation Models</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#ffffffb3", mt: 2, mb: 3 }}
              >
                Scale partners or integrates with all of the leading AI models,
                from open-source to closed-source, including OpenAI, Google,
                Meta, Cohere, and more.
              </Typography>
              <Divider color="#181818" sx={{ mb: 3 }} />
            </Box>
            <Box>
              <Typography variant="h5">Enterprise Data</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#ffffffb3", mt: 2, mb: 3 }}
              >
                Scale Data Engine enables you to integrate your enterprise data
                into the fold of these models, providing the base for long-term
                strategic differentiation.
              </Typography>
              <Divider color="#181818" sx={{ mb: 3 }} />
            </Box>
          </Grid>

          {/* Right Side Image */}
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" }, // Center image on smaller screens
            }}
          >
            <CardMedia
              component="video"
              src="https://scale.com/static/images/pages/homepage/why-scale/chart.webm"
              autoPlay
              loop
              muted
              sx={{
                width: { xs: "100%", md: "500px" },
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
