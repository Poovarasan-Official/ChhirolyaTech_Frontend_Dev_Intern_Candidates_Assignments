import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
const HorizontalCard = ({
  image,
  title,
  subtitle,
  titleColor = "#d1aad7",
  subtitleColor = "#fff",
}) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          maxWidth: "430px",
          height: "150px",
          backgroundColor: "#101011",
          borderRadius: "16px",
          boxShadow:
            "inset 0 24px 48px 0 rgba(199, 211, 234, .05), inset 0 1px 1px 0 rgba(199, 211, 234, .12)",
          textAlign: "left",
          flexShrink: 0,
          scrollSnapAlign: "start",
        }}
      >
        {/* Left Side Image */}
        <CardMedia
          component="img"
          image={image}
          alt="Image Alt Text"
          sx={{
            width: "120px",
            height: "120px",
            borderRadius: 2,
            // mb: { xs: 2, sm: 0 }, // Add margin bottom on small screens
          }}
        />

        {/* Right Side Title and Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { sm: 2 }, // Left margin only on larger screens
            flex: 1,
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              textAlign: "start",
              padding: 0,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: titleColor }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: subtitleColor }}>
              {subtitle}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

// Define PropTypes
HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
};

HorizontalCard.defaultProps = {
  titleColor: "#d1aad7",
  subtitleColor: "#fff",
};

export default HorizontalCard;
