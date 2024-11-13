import { Typography, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MuiButton from "../../../components/MuiButton";
export default function Register() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                // backgroundImage:
                //   "url(https://scale.com/static/images/pages/homepage/footer.webm",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              >
                <source
                  src="https://scale.com/static/images/pages/homepage/footer.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
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
                  sx={{ fontSize: { xs: "1.2rem", md: "6rem" } }}
                >
                  The future of your
                  <br /> industry{" "}
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
                    starts here.
                  </Box>
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
