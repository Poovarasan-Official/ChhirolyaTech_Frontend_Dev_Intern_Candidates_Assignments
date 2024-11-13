import { Box, Container, Divider, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Title from "./Title";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          py: 8,
          px: 2,
          mt: 12,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={2}>
              <Title variant="h6" sx={{ fontSize: 16 }}>
                PRODUCTS
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Scale Data Engine
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Scale GenAI Platform
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Scale Donovan
              </Title>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Title variant="subtitle1" sx={{ fontSize: 16 }}>
                COMPANY
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Careers
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Security
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Terms
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Privacy
              </Title>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Title variant="h6" sx={{ fontSize: 16 }}>
                RESOURCES
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Blog
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Contact Us
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Customers
              </Title>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Title variant="h6" sx={{ fontSize: 16 }}>
                GUIDES
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Data Labeling
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                ML Model Training
              </Title>
              <Title variant="body1" sx={{ fontSize: 14, color: "grey" }}>
                Diffusion Models
              </Title>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Title variant="subtitle1" sx={{ fontSize: 16 }}>
                FOLLOW US
              </Title>
              <Box>
                <IconButton color="inherit" href="https://twitter.com">
                  <XIcon />
                </IconButton>
                <IconButton color="inherit" href="https://facebook.com">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Divider color="#181818" sx={{ mb: 3 }} />
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Title
              variant="body2"
              sx={{ fontSize: 14, color: "grey" }}
              color="inherit"
            >
              Copyright © {new Date().getFullYear()} Scale AI, Inc. All rights
              reserved
            </Title>
            <Title
              variant="body2"
              sx={{ fontSize: 14, color: "grey" }}
              color="inherit"
            >
              Terms of Use & Privacy Policy
            </Title>
          </Box>
        </Container>
      </Box>
    </>
  );
}
