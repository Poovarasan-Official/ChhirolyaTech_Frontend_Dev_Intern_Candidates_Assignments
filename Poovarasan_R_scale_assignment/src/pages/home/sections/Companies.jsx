import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { logoData } from "../../../data/logoData";

export default function Companies() {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(
    "Generative AI Companies"
  );

  // Automatically change category every 2 seconds
  useEffect(() => {
    const categories = [
      "Generative AI Companies",
      "U.S. Government Agencies",
      "Enterprises",
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setSelectedCategory(categories[currentIndex]);
      currentIndex = (currentIndex + 1) % categories.length; // Loop through categories
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Filter logo data based on selected category
  const filteredLogos = logoData.filter(
    (logo) => logo.category === selectedCategory
  );
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center", py: 10 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Typography
              variant="body2"
              sx={{
                color: "grey",
                fontSize: { xs: "0.8rem", md: "1rem" },
                mb: 6,
              }}
            >
              Scale works with Generative AI Companies, U.S. Government Agencies
              & Enterprises
            </Typography>

            {/* Display logos based on selected category */}
            <Box
              sx={{
                display: "flex",
                overflowX: "scroll",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                "::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              {filteredLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: logo.height,
                    width: logo.width,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
