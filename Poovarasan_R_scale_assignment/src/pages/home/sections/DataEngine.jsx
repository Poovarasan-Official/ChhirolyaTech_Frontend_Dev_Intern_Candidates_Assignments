import React from "react";
import {
  Box,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import Title from "../../../components/Title";
import MuiButton from "../../../components/MuiButton";

// Adding PropTypes validation
TabPanel.propTypes = {
  children: PropTypes.node.isRequired, // Expecting any node (string, number, element, etc.)
  value: PropTypes.number.isRequired, // value is a number
  index: PropTypes.number.isRequired, // index is a number
};
// TabPanel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}
export default function DataEngine() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const images = {
    "3D": "https://lidar-now.scale.com/scene?title=Scene%20%231", // Link to the iframe (e.g., 3D model viewer)
    Images:
      "https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliving-room.bf462109.png&w=768&q=100",
    Mapping:
      "https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.45d7b5f1.png&w=768&q=100",
    Text: "https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.45d7b5f1.png&w=768&q=100",
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Chip
              label="BUILD AI"
              sx={{
                backgroundColor: "#131313",
                color: "#d1aad7",
                letterSpacing: "0.2em",
                p: 1,
                mb: 3,
              }}
            />
            <Title variant="h3">Scale Data Engine</Title>
            <Title sx={{ color: "#ffffffb3", mb: 5 }} variant="subtitle1">
              For AI teams, Scale Data Engine improves your models by improving
              your data.
            </Title>
            {/* ------------------section 1----------------- */}
            <Container maxWidth="lg">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                  borderRadius: "12px",
                  backgroundColor: "#130f14",
                  border: "1px solid #ffffff26",
                }}
              >
                {/* Left Side Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 600 },
                    height: { xs: 300, md: 600 },
                    borderRadius: "12px",
                    objectFit: "contain",
                    mb: { xs: 3, md: 0 },
                  }}
                  image="AIdata.png"
                  alt="Live from space album cover"
                />

                {/* Right Side Text */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "start" }, // Center text on mobile, left align on desktop
                    flex: 1,
                  }}
                >
                  <CardContent>
                    <Title variant="h3" sx={{ color: "#fff" }}>
                      RLHF
                    </Title>
                    <Title variant="h6" sx={{ color: "grey" }}>
                      Powering the next generation of Generative AI
                    </Title>
                    <Title sx={{ color: "#fff", fontSize: 16 }} variant="body2">
                      Scale Generative AI Data Engine powers the most advanced
                      LLMs and generative models in the world through
                      world-class RLHF, data generation, model evaluation,
                      safety, and alignment.
                    </Title>
                    <MuiButton />
                  </CardContent>
                </Box>
              </Card>
            </Container>

            {/* ------------------section 2----------------- */}
            <Container sx={{ mt: 7 }} maxWidth="lg">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                  borderRadius: "12px",
                  backgroundColor: "#130f14",
                  border: "1px solid #ffffff26",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "start" },
                    p: 4,
                    flex: 1,
                  }}
                >
                  <CardContent>
                    <Title variant="h3" sx={{ color: "#fff" }}>
                      Data Labeling
                    </Title>
                    <Title variant="h6" sx={{ color: "grey" }}>
                      The best quality data to fuel the best performing models
                    </Title>
                    <Box
                      sx={{
                        mb: 3,
                        width: "100%",
                        borderRadius: 18,
                        maxWidth: 400,
                        p: 1,
                        height: "30px",
                        // mx: "auto",
                        border: "1px solid #ffffff26",
                      }}
                    >
                      {/* ========| TABS |========= */}
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        sx={{
                          minHeight: 30,
                          height: 30,
                          "& .MuiTabs-indicator": {
                            display: "none",
                            border: "1px solid #ffffff26", // Hide the default indicator line
                          },
                        }}
                      >
                        {/* Individual Tabs with borderRadius */}
                        {["3D", "Images", "Mapping", "Text", "Audio"].map(
                          (label) => (
                            <Tab
                              key={label}
                              label={label}
                              sx={{
                                minHeight: 30, // Set minHeight for each Tab
                                height: 30,
                                borderRadius: 8, // Rounded corners
                                textTransform: "none", // Avoids uppercase
                                mx: 0.2, // Margin between tabs
                                color: "#ffffffb3", // Initial text color
                                "&.Mui-selected": {
                                  height: "20px",
                                  color: "#ffffff", // Selected tab color
                                  backgroundColor: "#303030", // Selected tab background
                                },
                                "&:hover": {
                                  height: "20px",
                                  backgroundColor: "#303030", // Hover background color
                                },
                              }}
                            />
                          )
                        )}
                      </Tabs>
                    </Box>
                    <Title sx={{ color: "#fff", fontSize: 16 }} variant="body2">
                      Scale has pioneered in the data labeling industry by
                      combining AI-based techniques with human-in-the-loop,
                      delivering labeled data at unprecedented quality,
                      scalability, and efficiency.
                    </Title>
                    <MuiButton />
                  </CardContent>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  sx={{ height: "100vh" }} // Adjust height as needed
                >
                  {/* TabPanels */}
                  <TabPanel value={value} index={0}>
                    <CardMedia
                      component="iframe"
                      src={images["3D"]}
                      alt="Live from space album cover"
                      sx={{
                        width: { xs: "100%", md: 600 },
                        height: { xs: 300, md: 400 },
                        borderRadius: 2,
                        objectFit: "contain",
                        mb: { xs: 3, md: 0 },
                        border: "none",
                      }}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CardMedia
                      component="img"
                      src={images["Images"]}
                      alt="Images content"
                      sx={{
                        width: "100%",
                        height: 400,
                        borderRadius: 2,
                        objectFit: "contain",
                      }}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <CardMedia
                      component="img"
                      src={images["Mapping"]}
                      alt="Images content"
                      sx={{
                        width: "100%",
                        height: 400,
                        borderRadius: 2,
                        objectFit: "contain",
                      }}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <CardMedia
                      component="img"
                      src={images["Text"]}
                      alt="Images content"
                      sx={{
                        width: "100%",
                        height: 400,
                        borderRadius: 2,
                        objectFit: "contain",
                      }}
                    />
                  </TabPanel>
                </Box>

                {/* Right Side Text */}
              </Card>
            </Container>
            {/* ------------------section 3----------------- */}
            <Container sx={{ mt: 7 }} maxWidth="lg">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                  borderRadius: "12px",
                  backgroundColor: "#130f14",
                  border: "1px solid #ffffff26",
                }}
              >
                {/* Left Side Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 600 },
                    height: { xs: 300, md: 600 },
                    borderRadius: "12px",
                    objectFit: "contain",
                    mb: { xs: 3, md: 0 },
                  }}
                  image="https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-curation.a2475705.png&w=768&q=100"
                  alt="Live from space album cover"
                />

                {/* Right Side Text */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "start" }, // Center text on mobile, left align on desktop
                    flex: 1,
                  }}
                >
                  <CardContent>
                    <Title variant="h3" sx={{ color: "#fff" }}>
                      Data Curation
                    </Title>
                    <Title variant="subtitle1" sx={{ color: "grey" }}>
                      Unearth the most valuable data by intelligently managing
                      your dataset
                    </Title>
                    <Title sx={{ color: "#fff", fontSize: 16 }} variant="body2">
                      Scale’s suite of dataset management, testing, model
                      evaluation, and model comparison tools enable you to
                      “label what matters.” Maximize the value of your labeling
                      budget by identifying the highest value data to label,
                      even without ground truth labels.
                    </Title>
                    <MuiButton />
                  </CardContent>
                </Box>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
