import { Typography, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MuiButton from "../../../components/MuiButton";
export default function HeroSection() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Box
              sx={{
                marginTop: { xs: 3, md: 7 },
                position: "relative",
                height: { xs: "300px", md: "433px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                backgroundImage:
                  "url(https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Fpages%2Fhomepage%2Fhero-bg-mobile.png&w=992&q=90)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              />

              {/* Main text content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  px: { xs: 2, md: 4 },
                  mt: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: { xs: "1.5rem", md: "6rem" } }}
                >
                  Power{" "}
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(50deg, #714dff, #9c83ff 31.28%, #e151ff 77.97%, #fff759 95.64%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                    }}
                  >
                    Generative AI
                  </Box>
                  <br />
                  with Your Data
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" }, mt: 1 }}
                >
                  Make the best models with the best data. Scale Data Engine
                  powers nearly every major foundation <br />
                  model, and with Scale GenAI Platform, leverages your
                  enterprise data to unlock the value of AI.
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { xs: 2, md: 3 },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 1, sm: 2 },
                  }}
                  spacing={2}
                >
                  <MuiButton />
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      mt: { xs: 1, sm: 0 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                      Build AI
                    </Typography>
                    <ArrowRightAltIcon
                      sx={{ ml: 1, fontSize: { xs: 16, md: 18 } }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
