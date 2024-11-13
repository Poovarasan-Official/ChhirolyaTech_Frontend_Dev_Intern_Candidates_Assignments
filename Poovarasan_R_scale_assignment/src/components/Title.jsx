import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

// Reusable Title component
const Title = ({ variant, children, sx = {} }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: {
          xs: variant === "h3" ? "1.5rem" : "1rem", // Example for variant-specific responsive sizes
          sm: variant === "h3" ? "2rem" : "1.25rem",
          md: variant === "h3" ? "2.5rem" : "1.25rem",
          lg: variant === "h3" ? "3rem" : "1.25rem",
        },
        mb: 2, // Adjust margin-bottom as needed
        ...sx, // Merge custom styles passed through `sx`
      }}
    >
      {children}
    </Typography>
  );
};

Title.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Title;
